var schemaRideScene = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "Ride Scenes",
    "properties": {
        "items": {
            "title": "Scenes",
            "type": "array",
            "items": {
                "title": "Scene",
                "type": "object",
                "properties": {
                    "at": {
                        "type": "number",
                        "description": "The distance on the track segment at which this trigger should activate. See /nearesttracknode"
                    },
                    "segment_id": {
                        "type": "string"
                    },
                    "group_id": {
                        "type": "string"
                    },
                    "name": {
                        "type": "string"
                    },
                    "type": {
                        "type": "string",
                        "enum": [
                            "start", "stop"
                        ]
                    },
                    "play_without_players": {
                        "type": "boolean",
                        "default": false,
                        "description": "True if you want this scene to play even when there are no players in the train that triggers this scene"
                    }
                },
                "required": [
                    "at",
                    "segment_id",
                    "group_id",
                    "name",
                    "type",
                    "play_without_players"
                ]
            }
        }
    },
    "required": [
        "items"
    ]
}