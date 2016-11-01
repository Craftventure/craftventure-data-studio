var schemaScript = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "Script",
    "properties": {
        "version": {
            "type": "integer",
            "default": 1,
            "options": {
                "hidden": true
            }
        },
        "version_minor": {
            "type": "integer",
            "default": 0,
            "options": {
                "hidden": true
            }
        },
        "update_tick": {
            "description": "The interval at which submodules which support the 'update_tick' setting get updated. This setting can be overridden by setting the 'update_tick' of a module to a non-null value",
            "type": "integer"
        },
        "auto_start": {
            "type": "boolean",
            "description": "Start playing this script when it is loaded"
        },
        "repeat": {
            "type": "boolean",
            "description": "Not implemented yet"
        },
        "world": {
            "type": "string",
            "default": "world"
        },
        "area_tracker": {
            "type": "object",
            "title": "Area Tracker",
            "properties": {
                "x_min": {
                    "type": "number"
                },
                "x_max": {
                    "type": "number"
                },
                "y_min": {
                    "type": "number"
                },
                "y_max": {
                    "type": "number"
                },
                "z_min": {
                    "type": "number"
                },
                "z_max": {
                    "type": "number"
                }
            },
            "required": [
                "x_min",
                "x_max",
                "y_min",
                "y_max",
                "z_min",
                "z_max"
            ]
        }
    },
    "required": [
        "version",
        "version_minor",
        "update_tick",
        "auto_start",
        "repeat",
        "world",
        "area_tracker"
    ]
}