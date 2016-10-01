var schemaParticlePath = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "Particle Path",
    "properties": {
        "paths": {
            "title": "Paths",
            "type": "array",
            "minItems": 1,
            "items": {
                "title": "Path",
                "type": "object",
                "properties": {
                    "particle": {
                        "title": "Particle",
                        "type": "string",
                        "description": "The emitted particle",
                        "enum": [
                            "explode",
                            "largeexplode",
                            "hugeexplosion",
                            "fireworksSpark",
                            "bubble",
                            "splash",
                            "wake",
                            "suspended",
                            "depthsuspend",
                            "crit",
                            "magicCrit",
                            "smoke",
                            "largesmoke",
                            "spell",
                            "instantSpell",
                            "mobSpell",
                            "mobSpellAmbient",
                            "witchMagic",
                            "dripWater",
                            "dripLava",
                            "angryVillager",
                            "happyVillager",
                            "townaura",
                            "note",
                            "portal",
                            "enchantmenttable",
                            "flame",
                            "lava",
                            "footstep",
                            "cloud",
                            "reddust",
                            "snowballpoof",
                            "snowshovel",
                            "slime",
                            "heart",
                            "barrier",
                            "iconcrack",
                            "blockcrack",
                            "blockdust",
                            "droplet",
                            "take",
                            "mobappearance",
                            "dragonbreath",
                            "endRod",
                            "damageIndicator",
                            "sweepAttack"
                        ]
                    },
                    "interpolation": {
                        "type": "string",
                        "description": "Always 'basesmooth' for now",
                        "enum": [
                            "basesmooth"
                        ]
                    },
                    "long_distance": {
                        "description": "If the particles are visible on long distance (over 256 blocks)",
                        "type": "boolean",
                        "default": false
                    },
                    "update_tick": {
                        "description": "The interval at which this particle is updated",
                        "type": ["integer", "null"],
                        "default": 0
                    },
                    "target_duration": {
                        "type": "integer",
                        "description": "The minimum length of this particle path animation in milliseconds",
                        "default": 0
                    },
                    "repeat": {
                        "type": "boolean",
                        "description": "True if the animation should loop while it is enabled"
                    },
                    "nodes": {
                        "title": "Nodes",
                        "type": "array",
                        "minItems": 1,
                        "items": {
                            "title": "Node",
                            "type": "object",
                            "properties": {
                                "tension": {
                                    "type": "integer",
                                    "description": "The smoothness of this path node, 0 = no smoothing, 1 = 'smooth', -1 is inversed 'smooth'. Can be any number, but usually it should be between -1 and 1 for the best results"
                                },
                                "at": {
                                    "type": "integer",
                                    "minimum": 0,
                                    "description": "The milliseconds at which the particle should reach this node"
                                },
                                "x": {
                                    "type": "number"
                                },
                                "y": {
                                    "type": "number"
                                },
                                "z": {
                                    "type": "number"
                                },
                                "offset_x": {
                                    "type": "number",
                                    "minimum": 0
                                },
                                "offset_y": {
                                    "type": "number",
                                    "minimum": 0
                                },
                                "offset_z": {
                                    "type": "number",
                                    "minimum": 0
                                },
                                "particle_data": {
                                    "type": "integer",
                                    "description": "Usually 0, I believe this controls speed/color depending on the particle used"
                                },
                                "data": {
                                    "type": "array",
                                    "description": "Used for iconcrack (2 items), blockcrack (1 item) and blockdust (1 item), else 0 items",
                                    "items": {
                                        "type": "integer"
                                    }
                                },
                                "particle_count": {
                                    "type": "integer",
                                    "minimum": 0
                                }
                            },
                            "required": [
                                "tension",
                                "at",
                                "x",
                                "y",
                                "z",
                                "offset_x",
                                "offset_y",
                                "offset_z",
                                "particle_data",
                                "particle_count"
                            ]
                        }
                    }
                },
                "required": [
                    "particle",
                    "interpolation",
                    "long_distance",
                    "target_duration",
                    "update_tick",
                    "repeat",
                    "nodes"
                ]
            }
        }
    },
    "required": [
        "paths"
    ]
}