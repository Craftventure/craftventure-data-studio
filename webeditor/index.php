<?php
ini_set('display_errors', TRUE);
ini_set('display_startup_errors', TRUE);
error_reporting(E_ALL);

set_error_handler(function ($severity, $message, $file, $line) {
    throw new \ErrorException($message, $severity, $severity, $file, $line);
});

define('debug', TRUE);
$supportedTypes = array(
    array(
        'name' => 'Soarin (config)',
        'internal_name' => 'soarin_config',
        'extension' => 'json',
        'class' => 'json'
    ),
    array(
        'name' => 'Soarin (fireworks)',
        'internal_name' => 'soarin_fireworks',
        'extension' => 'yml',
        'class' => 'yaml'
    )
);

function returnFailure(Exception $e)
{
    http_response_code(400);
    print("Upload failed: ${e}");
    die();
}

function cleanUploads()
{
    if (!is_dir("uploads")) return array(array(), array());
    $kept = [];
    $removed = [];
    if ($handle = opendir('uploads')) {
        $interval = strtotime('-7 days');
        while (false !== ($file = readdir($handle))) {
            $entry = 'uploads/' . $file;
            if (fileatime($entry) <= $interval) {
                unlink($entry);
                array_push($removed, $file);
            } else
                array_push($kept, $file);
        }
        closedir($handle);
    }
    return array($kept, $removed);
}

function endsWith($haystack, $needle)
{
    $length = strlen($needle);
    if ($length == 0) {
        return true;
    }

    return (substr($haystack, -$length) === $needle);
}

function finishUpload($type, $fileName, $uploadedFile)
{
    $internalName = $type['internal_name'];
    $class = $type['class'];
    $targetFile = "uploads/$fileName";
    move_uploaded_file($uploadedFile, $targetFile);

    http_response_code(200);
    $content = file_get_contents($targetFile);
    print("<link rel='stylesheet' href='styles/androidstudio.css'>
<script src='highlight.pack.js'></script>
<script type='text/javascript'>
document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
  });
});
</script>
<pre>
Upload successful!
/webeditor load $internalName $fileName</pre>
<pre>
    <code class=\"$class\">$content</code>
</pre>
");
    die();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!is_dir("uploads"))
        mkdir("uploads");

    cleanUploads();

    try {
        $uploadedFile = $_FILES['file']['tmp_name'];

        $type = $supportedTypes[array_search($_POST['type'], array_column($supportedTypes, 'internal_name'))];

        if (!endsWith($_FILES['file']['name'], $type['extension'])) {
            print("Your upload appears to be of the wrong file extension. This is merely a sanity check");
            die();
        }
        $typeInternalName = $type['internal_name'];

        $fileName = $typeInternalName . uniqid($more_entropy = true) . '.' . $type['extension'];
        if ($typeInternalName == "soarin_fireworks") {
            $yaml = yaml_parse_file($uploadedFile);
            finishUpload($type, $fileName, $uploadedFile);
        } else if ($typeInternalName == "soarin_config") {
            $json = json_decode($uploadedFile);
            finishUpload($type, $fileName, $uploadedFile);
        } else {
            http_response_code(400);
            exit("Unsupported type ${$typeInternalName}");
        }
    } catch (Exception $e) {
        returnFailure($e);
    }

    http_response_code(400);
    die("Request unhandled");

//    $yaml = yaml_parse_file($_FILES["file"]["tmp_name"]);
//    $target_dir = "uploads/";
//    $target_file = $target_dir . basename($_FILES["file"]["name"]);
//    $uploadOk = 1;
//    $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
//// Check if image file is a actual image or fake image
//    if (isset($_POST["submit"])) {
//        $yaml = yaml_parse_file($_FILES["file"]["tmp_name"]);
//        $check = getimagesize($_FILES["file"]["tmp_name"]);
//        if ($check !== false) {
//            echo "File is an image - " . $check["mime"] . ".";
//            $uploadOk = 1;
//        } else {
//            echo "File is not an image.";
//            $uploadOk = 0;
//        }
//    }
} else {
    ?>
    <!DOCTYPE html>
    <html>
    <body>

    <form action="index.php" method="post" enctype="multipart/form-data">
        Upload your new config here
        <input type="file" name="file" id="file">
        <select name="type">
            <option></option>
            <?php
            foreach ($supportedTypes as $type) {
                print("<option value='{$type['internal_name']}'>{$type['name']}</option>\n");
            }
            ?>
        </select>
        <input type="submit" value="Upload">
    </form>

    </body>
    </html>
    <?php
}
