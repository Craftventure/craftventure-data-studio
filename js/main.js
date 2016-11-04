var editors = [];

function saveJson(event, editor) {
    var errors = editor.validate();
    var json = editor.getValue();

    if (editor.cvOptions.type === 'actorEquipment') {
        var equipment = json.equipment;
        json = JSON.parse(JSON.stringify(editor.cvOptions.json));
        json.equipment = equipment;
    }
    download(JSON.stringify(json, null, 2), editor.cvOptions.fileName != null ? editor.cvOptions.fileName.name : 'particle.json', 'application/json');
    if (errors.length > 0) {
        console.log(errors);
        alert(errors);
    }
}

function loadJson(event, editor) {
    var jsonReader = new FileReader();
    var file = event.target.files[0];
    editor.cvOptions.fileName = file;
    jsonReader.onload = function (e) {
        var jsonContents = e.target.result;
        var json = JSON.parse(jsonContents);
        editor.cvOptions.json = JSON.parse(JSON.stringify(json));
        if (editor.cvOptions.type === 'actorEquipment')
            json = {equipment: json.equipment};
        editor.setValue(json);
    };
    jsonReader.readAsText(file);
}
function download(text, name, type) {
    var a = document.createElement("a");
    var file = new Blob([text], {type: type});
    a.href = URL.createObjectURL(file);
    a.download = name;
    a.click();
}

function createEditor(idSelector, schema, type, fileName) {
    var element = $("#" + idSelector);
    var buttonHolder = $('<div id="button_holder"></div>');
    element.append(buttonHolder);
    var loadButton = $('<label class="btn btn-primary btn-file">Load<input type="file" style="display: none;"></label>');
    buttonHolder.append(loadButton);
    var saveButton = $('<button class="btn btn-primary btn-file">Save</button>');
    buttonHolder.append(saveButton);
// Initialize the editor
    var editor = new JSONEditor(document.getElementById(idSelector), {
        schema: JSON.parse(JSON.stringify(schema))
    });
    editor.cvOptions = {};
    editor.cvOptions.idSelector = idSelector;
    editor.cvOptions.type = type;
    editors.push(editor);
    editor.cvOptions.fileName = {};
    editor.cvOptions.fileName.name = fileName;

    $(loadButton, 'input').on('change', function (event) {
        loadJson(event, editor);
    });
    $(saveButton, 'input').click(function (event) {
        saveJson(event, editor);
    });
    return editor;
}

jQuery(document).ready(function ($) {
    $('#tabs').tab();

    JSONEditor.defaults.options.theme = 'bootstrap3';
    JSONEditor.defaults.options.iconlib = 'fontawesome4';
    JSONEditor.defaults.options.disable_edit_json = true;
    JSONEditor.defaults.options.disable_properties = true;
    JSONEditor.defaults.options.object_layout = 'grid';
    JSONEditor.defaults.options.keep_oneof_values = false;

    createEditor('particle_path', schemaParticlePath, 'particlePath', 'particle.json');
    createEditor('action', schemaAction, 'action', 'action.json');
    createEditor('npc', schemaNpc, 'npc', 'npc.json');
    createEditor('npcquipment', schemaNpcEquipment, 'npcquipment', 'npc.json');
    createEditor('settings', schemaSettings, 'settings', 'settings.json');

    // fire|boolean
    // custom_name|string
    // custom_name_visible|boolean
    // crouching|boolean
    // eating|boolean
    // arrow_count|integer
    // sprinting|boolean
    // glowing|boolean
    // elytra|boolean
    // small_armor_stand|boolean
    // horse_tamed|boolean
    // horse_saddled|boolean
    // horse_chest|boolean
    // horse_eating|boolean
    // horse_rearing|boolean
    // horse_mouth_open|boolean
    // horse_variant|integer
    // horse_color|integer
    // horse_armor|integer
    // rabbit_type|integer
    // tamed_angry|boolean
    // tamed_sitting|boolean
    // tamed_tamed|boolean
    // sheep_color|integer
    // sheep_sheared|boolean
    // potion_effect_color|integer
    // invisible|boolean
    // bat_hanging|boolean
    // ageable_baby|boolean
    // ocelot_type|integer
    // wolf_damage|number
    // wolf_begging|boolean
    // wolf_collar_color|integer
    // villager_type|integer
    // irongolem_player_created|boolean
    // snowman_hide_pumpkin|boolean
    // blaze_on_fire|boolean
    // creeper_state|integer
    // creeper_charged|boolean
    // creeper_ignited|boolean
    // guardian_elderly|boolean
    // guardian_retracting_spikes|boolean
    // skeleton_type|integer
    // skeleton_swinging_arms|boolean
    // spider_climbing|boolean
    // witch_aggressive|boolean
    // zombie_baby|boolean
    // zombie_type|integer
    // zombie_converting|boolean
    // zombie_hands_up|boolean
    // enderman_block_id|string
    // enderman_screaming|boolean
    // ghast_attacking|boolean
    // slime_size|integer
    // minecart_block_id_and_damage|integer
    // minecart_block_y|integer
    // minecart_show_block|boolean
    // minecart_furnace|boolean
    // armorstand_hide_baseplate|boolean
    // armorstand_show_arms|boolean
    // polar_bear_stand|boolean
    // no_gravity|boolean
    //
    // if (true)
    //     return;
    // var value = "fire|boolean\n" +
    //     "custom_name|string\n" +
    //     "custom_name_visible|boolean\n" +
    //     "crouching|boolean\n" +
    //     "eating|boolean\n" +
    //     "arrow_count|integer\n" +
    //     "sprinting|boolean\n" +
    //     "glowing|boolean\n" +
    //     "elytra|boolean\n" +
    //     "small_armor_stand|boolean\n" +
    //     "horse_tamed|boolean\n" +
    //     "horse_saddled|boolean\n" +
    //     "horse_chest|boolean\n" +
    //     "horse_eating|boolean\n" +
    //     "horse_rearing|boolean\n" +
    //     "horse_mouth_open|boolean\n" +
    //     "horse_variant|integer\n" +
    //     "horse_color|integer\n" +
    //     "horse_armor|integer\n" +
    //     "rabbit_type|integer\n" +
    //     "tamed_angry|boolean\n" +
    //     "tamed_sitting|boolean\n" +
    //     "tamed_tamed|boolean\n" +
    //     "sheep_color|integer\n" +
    //     "sheep_sheared|boolean\n" +
    //     "potion_effect_color|integer\n" +
    //     "invisible|boolean\n" +
    //     "bat_hanging|boolean\n" +
    //     "ageable_baby|boolean\n" +
    //     "ocelot_type|integer\n" +
    //     "wolf_damage|number\n" +
    //     "wolf_begging|boolean\n" +
    //     "wolf_collar_color|integer\n" +
    //     "villager_type|integer\n" +
    //     "irongolem_player_created|boolean\n" +
    //     "snowman_hide_pumpkin|boolean\n" +
    //     "blaze_on_fire|boolean\n" +
    //     "creeper_state|integer\n" +
    //     "creeper_charged|boolean\n" +
    //     "creeper_ignited|boolean\n" +
    //     "guardian_elderly|boolean\n" +
    //     "guardian_retracting_spikes|boolean\n" +
    //     "skeleton_type|integer\n" +
    //     "skeleton_swinging_arms|boolean\n" +
    //     "spider_climbing|boolean\n" +
    //     "witch_aggressive|boolean\n" +
    //     "zombie_baby|boolean\n" +
    //     "zombie_type|integer\n" +
    //     "zombie_converting|boolean\n" +
    //     "zombie_hands_up|boolean\n" +
    //     "enderman_block_id|string\n" +
    //     "enderman_screaming|boolean\n" +
    //     "ghast_attacking|boolean\n" +
    //     "slime_size|integer\n" +
    //     "minecart_block_id_and_damage|integer\n" +
    //     "minecart_block_y|integer\n" +
    //     "minecart_show_block|boolean\n" +
    //     "minecart_furnace|boolean\n" +
    //     "armorstand_hide_baseplate|boolean\n" +
    //     "armorstand_show_arms|boolean\n" +
    //     "polar_bear_stand|boolean\n" +
    //     "no_gravity|boolean";
    // var values = value.split("\n");
    //
    // var json = "";
    // var oneOf = [];
    // var value = 0;
    // for (var i = 0; i < values.length; i++) {
    //     value++;
    //     var datas = values[i].split("|");
    //     oneOf.push({"$ref": "#/definitions/state_flag_" + datas[0]});
    //     if (json.length > 0)
    //         json += ",";
    //     json += "        \"state_flag_" + datas[0] + "\": {\n" +
    //         "            \"title\": \"" + datas[0].replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) + "\",\n" +
    //         "            \"properties\": {\n" +
    //         "                \"type\": {\n" +
    //         "                    \"type\": \"integer\",\n" +
    //         "                    \"enum\": [" + value + "],\n" +
    //         "                    \"options\": {\n" +
    //         "                        \"hidden\": true\n" +
    //         "                    }\n" +
    //         "                },\n" +
    //         "                \"data\": {\n";
    //
    //     if (datas[1] === "boolean")
    //         json += "                    \"type\": \"string\",\n" +
    //             "                    \"enum\": [\n" +
    //             "                        \"true\", \"false\"\n" +
    //             "                    ]\n";
    //     else if (datas[1] === "string")
    //         json += "                    \"type\": \"string\"\n";
    //     else if (datas[1] === "integer")
    //         json += "                    \"type\": \"integer\"\n";
    //     else if (datas[1] === "number")
    //         json += "                    \"type\": \"number\"\n";
    //     else
    //         console.log("Unknown type" + datas[1]);
    //
    //     json += "                }\n" +
    //         "            },\n" +
    //         "            \"required\": [\n" +
    //         "                \"type\",\n" +
    //         "                \"data\"\n" +
    //         "            ]\n" +
    //         "        }";
    // }
    // console.log(JSON.parse("{" + json + "}"));
    // console.log(JSON.stringify(JSON.parse("{" + json + "}")));
    // console.log(JSON.stringify(oneOf));
});