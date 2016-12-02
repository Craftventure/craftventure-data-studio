var schemaRideScene = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "Ride Scenes",
    "properties": {
        "scenes": {
            "title": "Scenes",
            "type": "array",
            "items": {
                "title": "Scene",
                "type": "object",
                "properties": {
                    "at": {
                        "type": "number",
                        "description":"The distance on the track segment at which this trigger should activate. See /nearesttracknode"
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
                    }
                },
                "required": [
                    "at",
                    "segment_id",
                    "group_id",
                    "name",
                    "type"
                ]
            }
        }
    },
    "required": [
        "scenes"
    ]
}