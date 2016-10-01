var schemaAction = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "Action",
    "properties": {
        "target_duration": {
            "type": "integer",
            "description": "The minimum length in milliseconds of this animation"
        },
        "repeat": {
            "type": "boolean",
            "description": "True if this animation should loop while enabled"
        },
        "update_tick": {
            "type": "integer",
            "default": 0,
            "description": "The interval at which this animation should update"
        },
        "frames": {
            "title": "Frames",
            "type": "array",
            "minItems": 1,
            "items": {
                "type": "object",
                "oneOf": [
                    {"$ref": "#/definitions/schematic"},
                    {"$ref": "#/definitions/blockchange"},
                    {"$ref": "#/definitions/chat"},
                    {"$ref": "#/definitions/strikelightning"}
                ]
            }
        }
    },
    "definitions": {
        "schematic": {
            "title": "Paste schematic",
            "properties": {
                "time": {
                    "type": "integer",
                    "description": "The milliseconds at which this action should be executed"
                },
                "type": {
                    "type": "integer",
                    "enum": [1],
                    "options": {
                        "hidden": true
                    }
                },
                "data": {
                    "title": "Data",
                    "type": "object",
                    "properties": {
                        "no_air": {
                            "type": "boolean",
                            "default": true,
                            "description": "True if this should not paste air blocks"
                        },
                        "entities": {
                            "type": "boolean",
                            "default": false,
                            "description": "Wether to copy entities with this paste or not"
                        },
                        "world": {
                            "type": "string",
                            "default": "world",
                            "description": "Should probably always be 'world'"
                        },
                        "offset_x": {
                            "type": "number",
                            "default": 0,
                            "description": "Schematics always paste from their origin, this offset should thus usually be 0"
                        },
                        "offset_y": {
                            "type": "number",
                            "default": 0,
                            "description": "Schematics always paste from their origin, this offset should thus usually be 0"
                        },
                        "offset_z": {
                            "type": "number",
                            "default": 0,
                            "description": "Schematics always paste from their origin, this offset should thus usually be 0"
                        },
                        "name": {
                            "type": "string",
                            "description": "The name of the schematic file you want to paste with this action"
                        }
                    },
                    "required": [
                        "no_air",
                        "entities",
                        "world",
                        "offset_x",
                        "offset_y",
                        "offset_z",
                        "name"
                    ]
                }
            },
            "required": [
                "time",
                "type",
                "data"
            ]
        },
        "blockchange": {
            "title": "Change block",
            "properties": {
                "time": {
                    "type": "integer",
                    "description": "The milliseconds at which this action should be executed"
                },
                "type": {
                    "type": "integer",
                    "enum": [2],
                    "options": {
                        "hidden": true
                    }
                },
                "data": {
                    "title": "Data",
                    "type": "object",
                    "properties": {
                        "x": {
                            "type": "number",
                            "default": 0,
                            "description": "The location of the block you want to change"
                        },
                        "y": {
                            "type": "number",
                            "default": 0,
                            "description": "The location of the block you want to change"
                        },
                        "z": {
                            "type": "number",
                            "default": 0,
                            "description": "The location of the block you want to change"
                        },
                        "world": {
                            "type": "string",
                            "default": "world",
                            "description": "Should probably always be 'world'"
                        },
                        "data": {
                            "type": "string",
                            "default": "fence_gate:5,open",
                            "description": "The material data for this block"
                        },
                        "fake": {
                            "type": "boolean",
                            "default": true,
                            "description": "True if this block will be send as a fake block and thus not edit the world"
                        }
                    },
                    "required": [
                        "x",
                        "y",
                        "z",
                        "world",
                        "data",
                        "fake"
                    ]
                }
            },
            "required": [
                "time",
                "type",
                "data"
            ]
        },
        "strikelightning": {
            "title": "Strike Lightning",
            "properties": {
                "time": {
                    "type": "integer",
                    "description": "The milliseconds at which this action should be executed"
                },
                "type": {
                    "type": "integer",
                    "enum": [3],
                    "options": {
                        "hidden": true
                    }
                },
                "data": {
                    "title": "Data",
                    "type": "object",
                    "properties": {
                        "x": {
                            "type": "number",
                            "default": 0,
                            "description": "The location of the block you want to change"
                        },
                        "y": {
                            "type": "number",
                            "default": 0,
                            "description": "The location of the block you want to change"
                        },
                        "z": {
                            "type": "number",
                            "default": 0,
                            "description": "The location of the block you want to change"
                        },
                        "world": {
                            "type": "string",
                            "default": "world",
                            "description": "Should probably always be 'world'"
                        },
                        "fake": {
                            "type": "boolean",
                            "default": true,
                            "description": "True if this block will be send as a fake block and thus not edit the world"
                        }
                    },
                    "required": [
                        "x",
                        "y",
                        "z",
                        "world",
                        "fake"
                    ]
                }
            },
            "required": [
                "time",
                "type",
                "data"
            ]
        },
        "chat": {
            "title": "Chat",
            "properties": {
                "time": {
                    "type": "integer",
                    "description": "The milliseconds at which this action should be executed"
                },
                "type": {
                    "type": "integer",
                    "enum": [4],
                    "options": {
                        "hidden": true
                    }
                },
                "data": {
                    "title": "Data",
                    "type": "object",
                    "properties": {
                        "message": {
                            "type": "string",
                            "description": "Can be a tellraw JSON or just plain text"
                        }
                    },
                    "required": [
                        "message"
                    ]
                }
            },
            "required": [
                "time",
                "type",
                "data"
            ]
        }
    },
    "required": [
        "target_duration",
        "repeat",
        "frames"
    ]
}