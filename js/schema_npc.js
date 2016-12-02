var schemaNpc = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "Npc (unstable!)",
    "properties": {
        "preferred_type": {
            "type": "string",
            "enum": [
                "ARMORSTAND",
                "CREEPER"
            ]
        },
        "target_duration": {
            "type": "integer"
        },
        "replay": {
            "type": "boolean"
        },
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
        },
        "update_tick": {
            "description": "The interval at which this NPC is updated",
            "type": ["integer", "null"],
            "default": 0
        },
        "state_flags": {
            "type": "array",
            "items": {
                "type": "object",
                "oneOf": [
                    {"$ref": "#/definitions/state_flag"}
                ]
            }
        },
        "frame_list": {
            "type": "array",
            "items": {
                "type": "object",
                "oneOf": [
                    {"$ref": "#/definitions/action_move"},
                    {"$ref": "#/definitions/action_equipment"},
                    {"$ref": "#/definitions/action_armorstandpose"},
                    {"$ref": "#/definitions/action_animated_move"},
                    {"$ref": "#/definitions/action_state_flag"}
                ]
            }
        }
    },
    "definitions": {
        "action_move": {
            "title": "Move",
            "description": "Usually you should use Animated Move",
            "properties": {
                "time": {
                    "type": "integer",
                    "description": "The milliseconds at which these settings occur"
                },
                "type": {
                    "type": "integer",
                    "enum": [1],
                    "options": {
                        "hidden": true
                    }
                },
                "data": {
                    "type": "object",
                    "properties": {
                        "x": {
                            "type": "number"
                        },
                        "y": {
                            "type": "number"
                        },
                        "z": {
                            "type": "number"
                        },
                        "yaw": {
                            "type": "number"
                        },
                        "pitch": {
                            "type": "number"
                        }
                    },
                    "required": [
                        "x",
                        "y",
                        "z",
                        "yaw",
                        "pitch",
                        "is_teleport"
                    ]
                }
            },
            "required": [
                "time",
                "type",
                "data"
            ]
        },
        "action_equipment": {
            "title": "Equipment",
            "properties": {
                "time": {
                    "type": "integer",
                    "description": "The milliseconds at which these settings occur"
                },
                "type": {
                    "type": "integer",
                    "enum": [1],
                    "options": {
                        "hidden": true
                    }
                },
                "data": {
                    "type": "object",
                    "properties": {
                        "slot": {
                            "type": "integer",
                            "enum": [
                                1, 2, 3, 4, 5, 6
                            ],
                            "options": {
                                "enum_titles": [
                                    "Main hand", "Off hand", "Boots", "Legs", "Chest", "Helmet"
                                ]
                            }
                        },
                        "item_data": {
                            "type": "string",
                            "default": "stone_sword"
                        }
                    },
                    "required": [
                        "slot",
                        "item_data"
                    ]
                }
            },
            "required": [
                "time",
                "type",
                "data"
            ]
        },
        "action_armorstandpose": {
            "title": "Armor stand pose",
            "properties": {
                "time": {
                    "type": "integer",
                    "description": "The milliseconds at which these settings occur"
                },
                "type": {
                    "type": "integer",
                    "enum": [1],
                    "options": {
                        "hidden": true
                    }
                },
                "data": {
                    "type": "object",
                    "properties": {
                        "type": {
                            "type": "integer",
                            "enum": [
                                1, 2, 3, 4, 5, 6
                            ],
                            "options": {
                                "enum_titles": [
                                    "Left arm", "Right arm", "Left leg", "Right leg", "Body", "Head"
                                ]
                            }
                        },
                        "x": {
                            "type": "number"
                        },
                        "y": {
                            "type": "number"
                        },
                        "z": {
                            "type": "number"
                        }
                    },
                    "required": [
                        "type",
                        "x",
                        "y",
                        "z"
                    ]
                }
            },
            "required": [
                "time",
                "type",
                "data"
            ]
        },
        "action_animated_move": {
            "title": "Animated move",
            "properties": {
                "time": {
                    "type": "integer",
                    "description": "The milliseconds at which these settings occur"
                },
                "type": {
                    "type": "integer",
                    "enum": [1],
                    "options": {
                        "hidden": true
                    }
                },
                "data": {
                    "type": "object",
                    "properties": {
                        "x": {
                            "type": "number"
                        },
                        "y": {
                            "type": "number"
                        },
                        "z": {
                            "type": "number"
                        },
                        "yaw": {
                            "type": "number"
                        },
                        "pitch": {
                            "type": "number"
                        },
                        "is_teleport": {
                            "type": "boolean",
                            "default": false
                        }
                    },
                    "required": [
                        "x",
                        "y",
                        "z",
                        "yaw",
                        "pitch",
                        "is_teleport"
                    ]
                }
            },
            "required": [
                "time",
                "type",
                "data"
            ]
        },
        "action_state_flag": {
            "title": "State flag",
            "properties": {
                "time": {
                    "type": "integer",
                    "description": "The milliseconds at which these settings occur"
                },
                "type": {
                    "type": "integer",
                    "enum": [1],
                    "options": {
                        "hidden": true
                    }
                },
                "data": {
                    "type": "object",
                    "oneOf": [
                        {"$ref": "#/definitions/state_flag"}
                    ]
                }
            },
            "required": [
                "time",
                "type",
                "data"
            ]
        },
        "state_flag": {
            "title": "State flag",
            "oneOf": [{"$ref": "#/definitions/state_flag_fire"}, {"$ref": "#/definitions/state_flag_custom_name"}, {"$ref": "#/definitions/state_flag_custom_name_visible"}, {"$ref": "#/definitions/state_flag_crouching"}, {"$ref": "#/definitions/state_flag_eating"}, {"$ref": "#/definitions/state_flag_arrow_count"}, {"$ref": "#/definitions/state_flag_sprinting"}, {"$ref": "#/definitions/state_flag_glowing"}, {"$ref": "#/definitions/state_flag_elytra"}, {"$ref": "#/definitions/state_flag_small_armor_stand"}, {"$ref": "#/definitions/state_flag_horse_tamed"}, {"$ref": "#/definitions/state_flag_horse_saddled"}, {"$ref": "#/definitions/state_flag_horse_chest"}, {"$ref": "#/definitions/state_flag_horse_eating"}, {"$ref": "#/definitions/state_flag_horse_rearing"}, {"$ref": "#/definitions/state_flag_horse_mouth_open"}, {"$ref": "#/definitions/state_flag_horse_variant"}, {"$ref": "#/definitions/state_flag_horse_color"}, {"$ref": "#/definitions/state_flag_horse_armor"}, {"$ref": "#/definitions/state_flag_rabbit_type"}, {"$ref": "#/definitions/state_flag_tamed_angry"}, {"$ref": "#/definitions/state_flag_tamed_sitting"}, {"$ref": "#/definitions/state_flag_tamed_tamed"}, {"$ref": "#/definitions/state_flag_sheep_color"}, {"$ref": "#/definitions/state_flag_sheep_sheared"}, {"$ref": "#/definitions/state_flag_potion_effect_color"}, {"$ref": "#/definitions/state_flag_invisible"}, {"$ref": "#/definitions/state_flag_bat_hanging"}, {"$ref": "#/definitions/state_flag_ageable_baby"}, {"$ref": "#/definitions/state_flag_ocelot_type"}, {"$ref": "#/definitions/state_flag_wolf_damage"}, {"$ref": "#/definitions/state_flag_wolf_begging"}, {"$ref": "#/definitions/state_flag_wolf_collar_color"}, {"$ref": "#/definitions/state_flag_villager_type"}, {"$ref": "#/definitions/state_flag_irongolem_player_created"}, {"$ref": "#/definitions/state_flag_snowman_hide_pumpkin"}, {"$ref": "#/definitions/state_flag_blaze_on_fire"}, {"$ref": "#/definitions/state_flag_creeper_state"}, {"$ref": "#/definitions/state_flag_creeper_charged"}, {"$ref": "#/definitions/state_flag_creeper_ignited"}, {"$ref": "#/definitions/state_flag_guardian_elderly"}, {"$ref": "#/definitions/state_flag_guardian_retracting_spikes"}, {"$ref": "#/definitions/state_flag_skeleton_type"}, {"$ref": "#/definitions/state_flag_skeleton_swinging_arms"}, {"$ref": "#/definitions/state_flag_spider_climbing"}, {"$ref": "#/definitions/state_flag_witch_aggressive"}, {"$ref": "#/definitions/state_flag_zombie_baby"}, {"$ref": "#/definitions/state_flag_zombie_type"}, {"$ref": "#/definitions/state_flag_zombie_converting"}, {"$ref": "#/definitions/state_flag_zombie_hands_up"}, {"$ref": "#/definitions/state_flag_enderman_block_id"}, {"$ref": "#/definitions/state_flag_enderman_screaming"}, {"$ref": "#/definitions/state_flag_ghast_attacking"}, {"$ref": "#/definitions/state_flag_slime_size"}, {"$ref": "#/definitions/state_flag_minecart_block_id_and_damage"}, {"$ref": "#/definitions/state_flag_minecart_block_y"}, {"$ref": "#/definitions/state_flag_minecart_show_block"}, {"$ref": "#/definitions/state_flag_minecart_furnace"}, {"$ref": "#/definitions/state_flag_armorstand_hide_baseplate"}, {"$ref": "#/definitions/state_flag_armorstand_show_arms"}, {"$ref": "#/definitions/state_flag_polar_bear_stand"}, {"$ref": "#/definitions/state_flag_no_gravity"}]
        },
        "state_flag_fire": {
            "title": "Fire",
            "properties": {
                "type": {"type": "integer", "enum": [1], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_custom_name": {
            "title": "Custom Name",
            "properties": {
                "type": {"type": "integer", "enum": [2], "options": {"hidden": true}},
                "data": {"type": "string"}
            },
            "required": ["type", "data"]
        },
        "state_flag_custom_name_visible": {
            "title": "Custom Name Visible",
            "properties": {
                "type": {"type": "integer", "enum": [3], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_crouching": {
            "title": "Crouching",
            "properties": {
                "type": {"type": "integer", "enum": [4], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_eating": {
            "title": "Eating",
            "properties": {
                "type": {"type": "integer", "enum": [5], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_arrow_count": {
            "title": "Arrow Count",
            "properties": {
                "type": {"type": "integer", "enum": [6], "options": {"hidden": true}},
                "data": {"type": "integer"}
            },
            "required": ["type", "data"]
        },
        "state_flag_sprinting": {
            "title": "Sprinting",
            "properties": {
                "type": {"type": "integer", "enum": [7], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_glowing": {
            "title": "Glowing",
            "properties": {
                "type": {"type": "integer", "enum": [8], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_elytra": {
            "title": "Elytra",
            "properties": {
                "type": {"type": "integer", "enum": [9], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_small_armor_stand": {
            "title": "Small Armor Stand",
            "properties": {
                "type": {"type": "integer", "enum": [10], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_horse_tamed": {
            "title": "Horse Tamed",
            "properties": {
                "type": {"type": "integer", "enum": [11], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_horse_saddled": {
            "title": "Horse Saddled",
            "properties": {
                "type": {"type": "integer", "enum": [12], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_horse_chest": {
            "title": "Horse Chest",
            "properties": {
                "type": {"type": "integer", "enum": [13], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_horse_eating": {
            "title": "Horse Eating",
            "properties": {
                "type": {"type": "integer", "enum": [14], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_horse_rearing": {
            "title": "Horse Rearing",
            "properties": {
                "type": {"type": "integer", "enum": [15], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_horse_mouth_open": {
            "title": "Horse Mouth Open",
            "properties": {
                "type": {"type": "integer", "enum": [16], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_horse_variant": {
            "title": "Horse Variant",
            "properties": {
                "type": {"type": "integer", "enum": [17], "options": {"hidden": true}},
                "data": {"type": "integer"}
            },
            "required": ["type", "data"]
        },
        "state_flag_horse_color": {
            "title": "Horse Color",
            "properties": {
                "type": {"type": "integer", "enum": [18], "options": {"hidden": true}},
                "data": {"type": "integer"}
            },
            "required": ["type", "data"]
        },
        "state_flag_horse_armor": {
            "title": "Horse Armor",
            "properties": {
                "type": {"type": "integer", "enum": [19], "options": {"hidden": true}},
                "data": {"type": "integer"}
            },
            "required": ["type", "data"]
        },
        "state_flag_rabbit_type": {
            "title": "Rabbit Type",
            "properties": {
                "type": {"type": "integer", "enum": [20], "options": {"hidden": true}},
                "data": {"type": "integer"}
            },
            "required": ["type", "data"]
        },
        "state_flag_tamed_angry": {
            "title": "Tamed Angry",
            "properties": {
                "type": {"type": "integer", "enum": [21], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_tamed_sitting": {
            "title": "Tamed Sitting",
            "properties": {
                "type": {"type": "integer", "enum": [22], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_tamed_tamed": {
            "title": "Tamed Tamed",
            "properties": {
                "type": {"type": "integer", "enum": [23], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_sheep_color": {
            "title": "Sheep Color",
            "properties": {
                "type": {"type": "integer", "enum": [24], "options": {"hidden": true}},
                "data": {"type": "integer"}
            },
            "required": ["type", "data"]
        },
        "state_flag_sheep_sheared": {
            "title": "Sheep Sheared",
            "properties": {
                "type": {"type": "integer", "enum": [25], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_potion_effect_color": {
            "title": "Potion Effect Color",
            "properties": {
                "type": {"type": "integer", "enum": [26], "options": {"hidden": true}},
                "data": {"type": "integer"}
            },
            "required": ["type", "data"]
        },
        "state_flag_invisible": {
            "title": "Invisible",
            "properties": {
                "type": {"type": "integer", "enum": [27], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_bat_hanging": {
            "title": "Bat Hanging",
            "properties": {
                "type": {"type": "integer", "enum": [28], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_ageable_baby": {
            "title": "Ageable Baby",
            "properties": {
                "type": {"type": "integer", "enum": [29], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_ocelot_type": {
            "title": "Ocelot Type",
            "properties": {
                "type": {"type": "integer", "enum": [30], "options": {"hidden": true}},
                "data": {"type": "integer"}
            },
            "required": ["type", "data"]
        },
        "state_flag_wolf_damage": {
            "title": "Wolf Damage",
            "properties": {
                "type": {"type": "integer", "enum": [31], "options": {"hidden": true}},
                "data": {"type": "number"}
            },
            "required": ["type", "data"]
        },
        "state_flag_wolf_begging": {
            "title": "Wolf Begging",
            "properties": {
                "type": {"type": "integer", "enum": [32], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_wolf_collar_color": {
            "title": "Wolf Collar Color",
            "properties": {
                "type": {"type": "integer", "enum": [33], "options": {"hidden": true}},
                "data": {"type": "integer"}
            },
            "required": ["type", "data"]
        },
        "state_flag_villager_type": {
            "title": "Villager Type",
            "properties": {
                "type": {"type": "integer", "enum": [34], "options": {"hidden": true}},
                "data": {"type": "integer"}
            },
            "required": ["type", "data"]
        },
        "state_flag_irongolem_player_created": {
            "title": "Irongolem Player Created",
            "properties": {
                "type": {"type": "integer", "enum": [35], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_snowman_hide_pumpkin": {
            "title": "Snowman Hide Pumpkin",
            "properties": {
                "type": {"type": "integer", "enum": [36], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_blaze_on_fire": {
            "title": "Blaze On Fire",
            "properties": {
                "type": {"type": "integer", "enum": [37], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_creeper_state": {
            "title": "Creeper State",
            "properties": {
                "type": {"type": "integer", "enum": [38], "options": {"hidden": true}},
                "data": {"type": "integer"}
            },
            "required": ["type", "data"]
        },
        "state_flag_creeper_charged": {
            "title": "Creeper Charged",
            "properties": {
                "type": {"type": "integer", "enum": [39], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_creeper_ignited": {
            "title": "Creeper Ignited",
            "properties": {
                "type": {"type": "integer", "enum": [40], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_guardian_elderly": {
            "title": "Guardian Elderly",
            "properties": {
                "type": {"type": "integer", "enum": [41], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_guardian_retracting_spikes": {
            "title": "Guardian Retracting Spikes",
            "properties": {
                "type": {"type": "integer", "enum": [42], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_skeleton_type": {
            "title": "Skeleton Type",
            "properties": {
                "type": {"type": "integer", "enum": [43], "options": {"hidden": true}},
                "data": {"type": "integer"}
            },
            "required": ["type", "data"]
        },
        "state_flag_skeleton_swinging_arms": {
            "title": "Skeleton Swinging Arms",
            "properties": {
                "type": {"type": "integer", "enum": [44], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_spider_climbing": {
            "title": "Spider Climbing",
            "properties": {
                "type": {"type": "integer", "enum": [45], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_witch_aggressive": {
            "title": "Witch Aggressive",
            "properties": {
                "type": {"type": "integer", "enum": [46], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_zombie_baby": {
            "title": "Zombie Baby",
            "properties": {
                "type": {"type": "integer", "enum": [47], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_zombie_type": {
            "title": "Zombie Type",
            "properties": {
                "type": {"type": "integer", "enum": [48], "options": {"hidden": true}},
                "data": {"type": "integer"}
            },
            "required": ["type", "data"]
        },
        "state_flag_zombie_converting": {
            "title": "Zombie Converting",
            "properties": {
                "type": {"type": "integer", "enum": [49], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_zombie_hands_up": {
            "title": "Zombie Hands Up",
            "properties": {
                "type": {"type": "integer", "enum": [50], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_enderman_block_id": {
            "title": "Enderman Block Id",
            "properties": {
                "type": {"type": "integer", "enum": [51], "options": {"hidden": true}},
                "data": {"type": "string"}
            },
            "required": ["type", "data"]
        },
        "state_flag_enderman_screaming": {
            "title": "Enderman Screaming",
            "properties": {
                "type": {"type": "integer", "enum": [52], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_ghast_attacking": {
            "title": "Ghast Attacking",
            "properties": {
                "type": {"type": "integer", "enum": [53], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_slime_size": {
            "title": "Slime Size",
            "properties": {
                "type": {"type": "integer", "enum": [54], "options": {"hidden": true}},
                "data": {"type": "integer"}
            },
            "required": ["type", "data"]
        },
        "state_flag_minecart_block_id_and_damage": {
            "title": "Minecart Block Id And Damage",
            "properties": {
                "type": {"type": "integer", "enum": [55], "options": {"hidden": true}},
                "data": {"type": "integer"}
            },
            "required": ["type", "data"]
        },
        "state_flag_minecart_block_y": {
            "title": "Minecart Block Y",
            "properties": {
                "type": {"type": "integer", "enum": [56], "options": {"hidden": true}},
                "data": {"type": "integer"}
            },
            "required": ["type", "data"]
        },
        "state_flag_minecart_show_block": {
            "title": "Minecart Show Block",
            "properties": {
                "type": {"type": "integer", "enum": [57], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_minecart_furnace": {
            "title": "Minecart Furnace",
            "properties": {
                "type": {"type": "integer", "enum": [58], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_armorstand_hide_baseplate": {
            "title": "Armorstand Hide Baseplate",
            "properties": {
                "type": {"type": "integer", "enum": [59], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_armorstand_show_arms": {
            "title": "Armorstand Show Arms",
            "properties": {
                "type": {"type": "integer", "enum": [60], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_polar_bear_stand": {
            "title": "Polar Bear Stand",
            "properties": {
                "type": {"type": "integer", "enum": [61], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        },
        "state_flag_no_gravity": {
            "title": "No Gravity",
            "properties": {
                "type": {"type": "integer", "enum": [62], "options": {"hidden": true}},
                "data": {"type": "string", "enum": ["true", "false"]}
            },
            "required": ["type", "data"]
        }
    },
    "required": [
        "preferred_type",
        "target_duration",
        "replay",
        "equipment",
        "state_flags",
        "frame_list"
    ]
}