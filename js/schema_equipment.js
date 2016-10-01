var schemaActorEquipment = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "Actor Equipment",
    "properties": {
        "equipment": {
            "title": "Equipment",
            "type": "object",
            "properties": {
                "helmet_item": {
                    "type": ["string", "null"],
                    "default": "11"
                },
                "main_hand_item": {
                    "type": ["string", "null"],
                    "default": "stone_sword"
                },
                "off_hand_item": {
                    "type": ["string", "null"],
                    "default": null
                },
                "chest_item": {
                    "type": ["string", "null"],
                    "default": "gold_chestplate"
                },
                "legs_item": {
                    "type": ["string", "null"],
                    "default": "gold_leggings"
                },
                "boots_item": {
                    "type": ["string", "null"],
                    "default": "gold_boots"
                }
            },
            "required": [
                "helmet_item",
                "main_hand_item",
                "off_hand_item",
                "chest_item",
                "legs_item",
                "boots_item"
            ]
        }
    },
    "required": [
        "equipment"
    ]
}