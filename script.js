const factions = {
	    "Brotherhood of Steel": [
        { name: "Paladin (PA)", type: "Champion, Leader", perks: "Natural Leader, Power Armor",
		stats: { 
        S: 7, P: 5, E: 7, C: 6, I: 5, A: 4, L: 2, W: 4  // SPECIALW stats
            }, 
			weapons: [
            { name: "Flamer", points: 67, type: "Heavy(6\")", test: "4S", traits: "Area(2\") CQB", effect: "Ignite(3)"  },
            { name: "Gatling Laser", points: 72, type: "Heavy (16\")", test: "4S", traits: "Area (1\") Slow", effect: "Ignite(2)" },
            { name: "Minigun", points: 79, type: "Heavy (14\")", test: "4S", traits: "Slow, Storm (3)", effect: "Pierce" }
        ] },
        { name: "Field Scribe", type: "Champion", perks: "Spotter",
		stats: { 
        S: 3, P: 4, E: 4, C: 3, I: 6, A: 4, L: 2, W: 2  // SPECIALW stats
            }, 
			weapons: [
            { name: "Laser Pistol", points: 21, type: "Pistol (10\")", test: "3A", traits: "CQB", effect: "Ignite(2)" },
            { name: "10mm Pistol", points: 26, type: "Pistol (10\")", test: "3A", traits: "CQB, Fast", effect: "-"  },
            { name: "Crusader Pistol", points: 31, type: "Pistol (12\")", test: "4A", traits: "-", effect: "Maim" }
        ] },
        { name: "Knight (PA)", type: "Grunt", perks: "Power Armor",
		stats: { 
        S: 6, P: 5, E: 6, C: 4, I: 4, A: 4, L: 2, W: 3  // SPECIALW stats
            }, 
			weapons: [
            { name: "Laser Pistol and Machete", points: 50, type: "Pistol (10\")", test: "3A", traits: "CQB", effect: "Ignite(2)",type2: "Melee", test2: "4S", traits2: "-", effect2: "Maim"   },
            { name: "Ripper", points: 55, type: "Melee", test: "5S", traits: "Fast", effect: "Maim"},
            { name: "Laser Rifle", points: 60, type: "Rifle (18\")", test: "4P", traits: "-", effect: "Ignite(1)" }
        ] },
        { name: "Aspirant", type: "Grunt",
		stats: { 
        S: 4, P: 5, E: 5, C: 4, I: 4, A: 4, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Laser Pistol and Hand Weapon", points: 20, type: "Pistol (10\")", test: "3A", traits: "CQB", effect: "Ignite(2)",type2: "Melee", test2: "3S", traits2: "Fast", effect2: "-"   },
            { name: "Crusader Pistol and Hand Weapon", points: 23, type: "Pistol (12\")", test: "4A", traits: "-", effect: "Maim", type2: "Melee", test2: "3S", traits2: "Fast", effect2: "-"    },
            { name: "Combat Rifle", points: 24, type: "Rifle (24\")", test: "4P", traits: "Fast", effect: "Maim" },
            { name: "Laser Rifle", points: 25, type: "Rifle (18\")", test: "4P", traits: "-", effect: "Ignite (1)"  }
        ] },
        { name: "Initiate", type: "Grunt", perks: "Sprint",
		stats: { 
        S: 3, P: 4, E: 4, C: 3, I: 4, A: 4, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Recon Hunting Rifle", points: 19, type: "Rifle (24\")", test: "4P", traits: "Aim(+1)", effect: "Pierce" },
            { name: "Laser Rifle", points: 23, type: "Rifle (18\")", test: "4P", traits: "-", effect: "Ignite (1)"  },
			{ name: "Combat Rifle", points: 24, type: "Rifle (24\")", test: "4P", traits: "Fast", effect: "Maim" }
        ] }
    ],
	    "Gunners": [
        { name: "Commander", type: "Champion, Leader", perks: "Natural Leader",
		stats: { 
        S: 4, P: 5, E: 4, C: 6, I: 5, A: 4, L: 3, W: 3  // SPECIALW stats
            }, 
			weapons: [
            { name: "Laser Rifle", points: 35, type: "Rifle (18\")", test: "4P", traits: "-", effect: "Ignite (1)" },
            { name: "Plasma Rifle", points: 38, type: "Rifle (18\")", test: "4P", traits: "-", effect: "Meltdown" },
            { name: "Plasma Rifle and Ripper", points: 41, type: "Rifle (18\")", test: "4P", traits: "-", effect: "Meltdown", type2: "Melee", test2: "5S", traits2: "Fast", effect2: "Maim"}
        ] },
		{ name: "Commander in Power Armor", type: "Champion, Leader", perks: "Natural Leader, Burly, Rad Resistant, Hardy",
		stats: { 
        S: 6, P: 5, E: 6, C: 6, I: 5, A: 4, L: 3, W: 4  // SPECIALW stats
            }, 
			weapons: [
            { name: "Laser Rifle", points: 50, type: "Rifle (18\")", test: "4P", traits: "-", effect: "Ignite (1)" },
            { name: "Plasma Rifle", points: 53, type: "Rifle (18\")", test: "4P", traits: "-", effect: "Meltdown" },
            { name: "Plasma Rifle and Ripper", points: 56, type: "Rifle (18\")", test: "4P", traits: "-", effect: "Meltdown", type2: "Melee", test2: "5S", traits2: "Fast", effect2: "Maim" }
        ] },
        { name: "Lieutenant", type: "Champion",
		stats: { 
        S: 4, P: 5, E: 4, C: 4, I: 4, A: 5, L: 2, W: 2  // SPECIALW stats
            }, 
			weapons: [
            { name: "Combat Rifle", points: 35, type: "Rifle (24\")", test: "4P", traits: "Fast", effect: "Maim"},
            { name: "Precision Combat Rifle", points: 39, type: "Rifle (30\")", test: "4P", traits: "Aim (+2)", effect: "Suppress (2)" },
            { name: "Plasma Pistol and Ripper", points: 40, type: "Pistol (12\")", test: "4A", traits: "CQB Fast", effect: "Meltdown", type2: "Melee", test2: "5S", traits2: "Fast", effect2: "Maim" },
            { name: "Missle Launcher", points: 42, type: "Heavy (26\")", test: "5S", traits: "Area (3\"), Slow", effect: "Maim" }
        ] },
        { name: "Assaultron", type: "Grunt", perks: "Machine, Rad Resistant",
		stats: { 
        S: 6, P: 6, E: 5, C: 1, I: 1, A: 5, L: 1, W: 2  // SPECIALW stats
            }, 
			weapons: [
            { name: "Assaultron Claws and Assaultron Eye Beam", points: 45, type: "Melee", test: "4S", traits: "Fast", effect: "Maim", type2: "Pistol(6\")", test2: "5A", traits2: "CQB Slow", effect2: "Maim" }
        ] },
        { name: "Conscript", type: "Grunt",
		stats: { 
        S: 4, P: 5, E: 4, C: 2, I: 4, A: 3, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Laser Rifle", points: 20, type: "Rifle (18\")", test: "4P", traits: "-", effect: "Ignite (1)" },
            { name: "Combat Rifle", points: 22, type: "Rifle (24\")", test: "4P", traits: "Fast", effect: "Maim" },
			{ name: "Assault Rifle", points: 23, type: "Rifle (20\")", test: "4P", traits: "Storm (1)", effect: "Suppress (2)"  },
            { name: "Laser Rifle and Stun Baton", points: 25, type: "Rifle (18\")", test: "4P", traits: "-", effect: "Ignite (1)", type2: "Melee", test2: "4S", traits2: "Suppress (2)", effect2: "-"  }
        ] },
        { name: "Corporal", type: "Grunt",
		stats: { 
        S: 4, P: 3, E: 3, C: 2, I: 3, A: 4, L: 1, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Laser Pistol", points: 11, type: "Pistol (10\")", test: "3A", traits: "CQB", effect: "Ignite (2)" },
            { name: "10mm Pistol and Frag Grenades", points: 13, type: "Pistol (10\")", test: "3A", traits: "CQB, Fast", effect: "-", type2: "Grenade (10\")", test2: "3A", traits2: "Area (1\"), CQB", effect2: "Suppress (2)" },
			{ name: "Laser Pistol and Hand Weapon", points: 13, type: "Pistol (10\")", test: "3A", traits: "CQB", effect: "Ignite (2)", type2: "Melee", test2: "3S", traits2: "Fast", effect2: "-"  },
            { name: "10mm and Hand Weapon", points: 14, type: "Pistol (10\")", test: "3A", traits: "CQB, Fast", effect: "-", type2: "Melee", test2: "3S", traits2: "Fast", effect2: "-" }
        ] }
    ],
	    "Super Mutants": [
        { name: "Master", type: "Champion, Leader", perks: "Natural Leader, Burly, Rad Resistant",
		stats: { 
        S: 6, P: 5, E: 6, C: 5, I: 5, A: 5, L: 3, W: 3  // SPECIALW stats
            }, 
			weapons: [
            { name: "Plasma Pistol and Sledgehammer", points: 46, type: "Pistol (12\")", test: "4A", traits: "CQB FAST", effect: "Meltdown", type2: "Melee", test2: "4S", traits2: "Unwieldy (5), Wind Up", effect2: "Maim"  },
            { name: "Short Hunting Rifle and Super Sledge", points: 48, type: "Rifle (14\")", test: "3P", traits: "-", effect: "Pierce", type2: "Melee", test2: "6S", traits2: "Unwieldy (6)", effect2: "Maim"  }
        ] },
        { name: "Brute", type: "Champion", perks: "Burly, Rad Resistant",
		stats: { 
        S: 6, P: 5, E: 6, C: 5, I: 4, A: 5, L: 2, W: 2  // SPECIALW stats
            }, 
			weapons: [
            { name: "Laser Rifle", points: 32, type: "Rifle(18\")", test: "4P", traits: "-", effect: "Ignite(1)"  },            
			{ name: "Sledgehammer", points: 37, type: "Melee", test: "4S", traits: "Unwieldy (5), Wind Up", effect: "Maim"  },
            { name: "Minigun", points: 48, type: "Heavy (14\")", test: "4S", traits: "Slow, Storm (3)", effect: "Pierce"  }
        ] },
        { name: "Skirmisher", type: "Grunt", perks: "Burly, Rad Resistant",
		stats: { 
        S: 5, P: 4, E: 5, C: 4, I: 5, A: 4, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Automatic Pipe Rifle", points: 28, type: "Rifle (16\")", test: "3P", traits: "Aim (+1), Storm (1)", effect: "Suppress (2)" },
            { name: "Precision Pipe Rifle", points: 30, type: "Rifle (20\")", test: "3P", traits: "Aim (+2)", effect: "Pierce" },            
			{ name: "Laser Rifle", points: 33, type: "Rifle(18\")", test: "4P", traits: "-", effect: "Ignite(1)" },
            { name: "Assault Rifle", points: 33, type: "Rifle (20\")", test: "4P", traits: "Storm(1)", effect: "Maim" }

        ] },
        { name: "Enforcer", type: "Grunt", perks: "Burly, Rad Resistant",
		stats: { 
        S: 5, P: 3, E: 5, C: 3, I: 4, A: 4, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Pipe Pistol and Hand Weapon", points: 17, type: "Pistol (8\")", test: "4A", traits: "CQB", effect: "-", type2: "Melee", test2: "3S", traits2: "Fast", effect2: "-"  },
            { name: "Hand Weapon and Molotov Cocktails", points: 25, type: "Melee", test: "3S", traits: "Fast", effect: "-", type2: "Grenade (8\")", test2: "2A", traits2: "Area (2\"), CQB", effect2: "Ignite(2)"  },
            { name: "Heavy Pipe Pistol and Sledgehammer", points: 25, type: "Pistol (8\")", test: "4A", traits: "CQB", effect: "Pierce", type2: "Melee", test2: "4S", traits2: "Unwieldy (5), Wind Up", effect2: "Maim" },
            { name: "Super Sledge and Molotov Cocktails", points: 26, type: "Melee", test: "6S", traits: "Unwieldy (6)", effect: "Maim", type2: "Grenade (8\")", test2: "2A", traits2: "Area (2\"), CQB", effect2: "Ignite(2)"   },			
            { name: "Short Hunting Rifle and Molotov Cocktails", points: 28, type: "Rifle(14\")", test: "3P", traits: "-", effect: "Pierce", type2: "Grenade (8\")", test2: "2A", traits2: "Area (2\"), CQB", effect2: "Ignite(2)"  }			
			
        ] },
        { name: "Mutant Hound", type: "Grunt", perks: "Beast, Burly, Rad Resistant, Sic 'Em",
		stats: { 
        S: 4, P: 2, E: 4, C: 3, I: 3, A: 5, L: 1, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Claws and Jaws", points: 10, type: "Melee", test: "4S", traits: "Fast", effect: "Suppress (1)" }
        ] }
    ],
	    "Wasteland Raiders": [
        { name: "Boss (PA)", type: "Champion, Leader", perks: "Natural Leader, Personal Stash, Power Armor",
		stats: { 
        S: 5, P: 5, E: 6, C: 5, I: 5, A: 5, L: 3, W: 3  // SPECIALW stats
            }, 
			weapons: [
            { name: ".44 Pistol and Machete", points: 40, type: "Pistol(14\")", test: "4A", traits: "Aim(+1)", effect: "Pierce",type2: "Melee", test2: "4S", traits2: "-", effect2: "Maim"   },
            { name: "Assault Rifle", points: 45, type: "Rifle (20\")", test: "4P", traits: "Storm (1)", effect: "Maim" },
            { name: "Combat Rifle and Baseball Bat", points: 48, type: "Rifle (24\")", test: "4P", traits: "Fast", effect: "Maim"},
            { name: "Minigun", points: 54, type: "Heavy(14\")", test: "4S", traits: "Slow Storm(3)", effect: "Pierce" }
        ] },
        { name: "Butcher (PA)", type: "Champion", perks: "Sticky Fingers, Power Armor",
		stats: { 
        S: 5, P: 5, E: 5, C: 4, I: 4, A: 5, L: 2, W: 2  // SPECIALW stats
            }, 
			weapons: [
            { name: "Hunting Rifle", points: 41, type: "Rifle(22\")", test: "3A", traits: "Aim(+1)", effect: "Pierce" },
            { name: "Flamer", points: 45, type: "Heavy(6\")", test: "4S", traits: "CQB Area(2\")", effect: "Ignite(3)" },
            { name: "Missile Launcher", points: 56, type: "Heavy(26\")", test: "5S", traits: "Area(3\") Slow", effect: "Maim"}

        ] },
        { name: "Veteran", type: "Champion", perks:"Sticky Fingers",
		stats: { 
        S: 4, P: 4, E: 4, C: 4, I: 4, A: 4, L: 2, W: 2  // SPECIALW stats
            }, 
			weapons: [
            { name: "Pipe Pistol and Hand Weapon", points: 23, type: "Pistol(8\")", test: "4A", traits: "CQB", effect: "-", type2: "Melee", test2: "3S", traits2: "Fast", effect2: "-"  },
            { name: "Pipe Pistol and Machete", points: 24, type: "Pistol(8\")", test: "4A", traits: "CQB", effect: "-", type2: "Melee", test2: "4S", traits2: "-", effect2: "Maim"   },
            { name: "Sawn-off Shotgun", points: 25, type: "Rifle(8\")", test: "4P", traits: "CQB Storm(2)", effect: "Maim"},
            { name: "Pipe Rifle", points: 25, type: "Rifle(20\")", test: "3P", traits: "Aim(+1)", effect: "Suppress(1)"}			
        ] },
        { name: "Scavver", type: "Grunt",
		stats: { 
        S: 3, P: 4, E: 4, C: 3, I: 3, A: 3, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Short Hunting Rifle", points: 16, type: "Rifle (14\")", test: "3P", traits: "-", effect: "Pierce"  },
            { name: "Sawn-off Shotgun", points: 18, type: "Rifle (8\")", test: "4P", traits: "CQB, Storm (2)", effect: "Maim" },
            { name: "Pipe Rifle", points: 18, type: "Rifle (20\")", test: "3P", traits: "Aim (+1)", effect: "Suppress (1)"},
            { name: "Automatic Pipe Rifle", points: 20, type: "Rifle (16\")", test: "3P", traits: "Aim (+1), Storm (1)", effect: "Suppress (2)" }
        ] },
        { name: "Psycho", type: "Grunt",
		stats: { 
        S: 4, P: 3, E: 4, C: 3, I: 3, A: 4, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Pipe Revolver and Hand Weapon", points: 17, type: "Pistol(12\")", test: "3A", traits: "CQB Aim(+1)", effect: "Pierce", type2: "Melee", test2: "3S", traits2: "Fast", effect2: "-" },
            { name: "Pipe Revolver and Baseball Bat", points: 17, type: "Pistol(12\")", test: "3A", traits: "CQB Aim(+1)", effect: "Pierce", test2: "3S", traits2: "WindUp", effect2: "Suppress (1)" },
            { name: "Molotov Cocktails and Baseball Bat", points: 19, type: "Grenade(8\")", test: "2A", traits: "CQB Area(2\")", effect: "Ignite(2)", test2: "3S", traits2: "WindUp", effect2: "Suppress (1)" },
            { name: "Baseball Grenades and Hand Weapon", points: 22, type: "Grenade(8\")", test: "3A", traits: "CQB Area(2\") Big Swing(6\")", effect: "Suppress(1)", type2: "Melee", test2: "3S", traits2: "Fast", effect2: "-" }
        ] },
        { name: "Scum", type: "Grunt",
		stats: { 
        S: 3, P: 3, E: 3, C: 3, I: 3, A: 3, L: 1, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Pipe Revolver and Baseball Bat", points: 17, type: "Pistol(12\")", test: "3A", traits: "CQB Aim(+1)", effect: "Pierce", test2: "3S", traits2: "WindUp", effect2: "Suppress (1)" },
            { name: "Pipe Pistol & Molotov Cocktails", points: 14, type: "Pistol (8\")", test: "4A", traits: "CQB", effect: "-", type2: "Grenade (8\")", test2: "2A", traits2: "Area (2\"), CQB", effect2: "Ignite (2)" },
            { name: "Pipe Pistol & Machete", points: 16, type: "Pistol (8\")", test: "4A", traits: "CQB", effect: "-", type2: "Melee",type2: "Melee", test2: "4S", traits2: "-", effect2: "Maim" },
			{ name: "Pipe Rifle", points: 11, type: "Rifle (20\")", test: "3P", traits: "Aim (+1)", effect: "Suppress (1)" }
        ] }
    ],
	    "Survivors": [
        { name: "Local Leader", type: "Champion, Leader", perks: "Natural Leader, Inspirational, Survivalist",
		stats: { 
        S: 4, P: 5, E: 5, C: 6, I: 6, A: 5, L: 3, W: 3  // SPECIALW stats
            }, 
			weapons: [
            { name: "Junk Jet", points: 34, type: "Heavy(10\")", test: "3S +1 per Part Used", traits: "Creative Projectiles", effect: "Suppress(1) +1 per Part used" },			
            { name: "Sawn-off Shotgun and Officer's Sword", points: 40, type: "Rifle(8\")", test: "4P", traits: "CQB, Storm(2)", effect: "Maim", type2: "Melee", test2: "4S", traits2: "Fast", effect2: "Pierce" },            
			{ name: "Combat Rifle", points: 45, type: "Rifle(24\")", test: "4P", traits: "Fast", effect: "Pierce"}
        ] },
        { name: "Specialist", type: "Champion", perks: "Pick 1: (Hunter: Sniper, Survivalist), (Medic: Medic, Survivalist) (Trader: Fortune Finder, Survivalist)",
		stats: { 
        S: 3, P: 5, E: 4, C: 5, I: 6, A: 4, L: 2, W: 2  // SPECIALW stats
            }, 
			weapons: [
			{ name: "Medic: Hand Weapon", points: 20, type: "Melee", test: "3S", traits: "Fast", effect: "-"},	
			{ name: "Trader: Flare Gun", points: 24, type: "-", test: "-", traits: "Distress Signal)", effect: "-"},
            { name: "Hunter: Precision Hunting Rifle", points: 35, type: "Rifle (24\")", test: "3P", traits: "Aim(+2)", effect: "Pierce"},            
            { name: "Hunter: Double-barreled Shotgun", points: 38, type: "Rifle (12\")", test: "3P", traits: "Storm (2)", effect: "Maim"}
        ] },
        { name: "Security Guard", type: "Grunt", perks: "Survivalist",
		stats: { 
        S: 3, P: 4, E: 5, C: 3, I: 3, A: 4, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Hunting Rifle", points: 22, type: "Rifle (22\")", test: "3P", traits: "Aim(+1)", effect: "Pierce" },
            { name: "Automatic Pipe Rifle", points: 24, type: "Rifle (16\")", test: "3P", traits: "Aim(+1) Storm(1)", effect: "Suppress(2)"  },
            { name: "Combat Rifle", points: 27, type: "Rifle (24\")", test: "4P", traits: "Fast", effect: "Maim" }
        ] },
        { name: "Swatter", type: "Grunt", perks: "Survivalist",
		stats: { 
        S: 4, P: 3, E: 5, C: 3, I: 3, A: 4, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Pipe Revolver and Hand Weapon", points: 21, type: "Pistol(12\")", test: "3A", traits: "CQB Aim(+1)", effect: "Pierce", type2: "Melee", test2: "3S", traits2: "Fast", effect2: "-" },
            { name: "Pipe Revolver and Baseball Bat", points: 21, type: "Pistol(12\")", test: "3A", traits: "CQB Aim(+1)", effect: "Pierce", test2: "3S", traits2: "WindUp", effect2: "Suppress (1)" },
            { name: "Baseball Grenades and Baseball Bat", points: 25, type: "Grenade(8\")", test: "3A", traits: "CQB Area(2\") Big Swing(6\")", effect: "Suppress(1)",type2: "Melee" , test2: "3S", traits2: "WindUp", effect2: "Suppress (1)" },
            { name: "Sawn-off Shotgun and Hand Weapon", points: 27, type: "Rifle(8\")", test: "4A", traits: "CQB Storm(2)", effect: "Maim", type2: "Melee", test2: "3S", traits2: "Fast", effect2: "-" }
        ] },
        { name: "Settler", type: "Grunt", perks: "Survivalist",
		stats: { 
        S: 3, P: 4, E: 3, C: 3, I: 4, A: 3, L: 1, W: 1  // SPECIALW stats
            }, 
			weapons: [
			{ name: "Hand Weapon", points: 8, type: "Melee", test: "3S", traits: "Fast", effect: "-"},
            { name: "Pipe Revolver and Hand Weapon", points: 14, type: "Pistol(12\")", test: "3A", traits: "CQB Aim(+1)", effect: "Pierce", type2: "Melee", test2: "3S", traits2: "Fast", effect2: "-" },
            { name: "Double-barrelled Shotgun", points: 15, type: "Rifle (12\")", test: "3P", traits: "Storm (2)", effect: "Maim" },
            { name: "Pipe Bolt-Action Rifle", points: 16, type: "Rifle (20\")", test: "3P", traits: "Aim (+1)", effect: "Pierce" }
        ] },
        { name: "Good Boy", type: "Grunt",perks: "Beast, Sic 'Em, Survivalist",
		stats: { 
        S: 4, P: 3, E: 3, C: 3, I: 3, A: 4, L: 1, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Claws and Jaws", points: 7, type: "Melee", test: "4S", traits: "Fast", effect: "Suppress (1)" }
        ] }
    ],
    "The Operators": [
        { name: "Boss", type: "Champion, Leader", perks: "Natural Leader",
		stats: { 
        S: 5, P: 6, E: 5, C: 6, I: 5, A: 6, L: 3, W: 3  // SPECIALW stats
            }, 
			weapons: [
            { name: "Marksman's Handmade Rifle", points: 44 , type: "Rifle(30\")", test: "2P", traits: "Aim(+3)", effect: "Suppress(3)"},
            { name: "Combat Rifle", points: 50, type: "Rifle(24\")", test: "4P", traits: "Fast", effect: "Maim"  },
            { name: "Plasma Pistol and Shishkebab", points: 51, type: "Pistol(12\")", test: "4A", traits: "CQB Fast", effect: "Meltdown", type2: "Melee", test2: "4S", traits2: "-", effect2: "Ignite(2)" }
        ] },
        { name: "Made Man", type: "Champion",
		stats: { 
        S: 4, P: 6, E: 4, C: 4, I: 5, A: 4, L: 2, W: 2  // SPECIALW stats
            }, 
			weapons: [
            { name: "Syringer", points: 31, type: "Rifle(16\")", test: "2P", traits: "Aim(+2)", effect: "Poison(3)" },
            { name: "Combat Rifle", points: 33, type: "Rifle(24\")", test: "4P", traits: "Fast", effect: "Maim"  },
            { name: "Combat Shotgun and Frag Grenades", points: 38, type: "Rifle(10\")", test: "4P", traits: "Storm(1)", effect: "Maim", type2: "Grenade(10\")", test2: "3A", traits2: "Area(1\") CQB", effect2: "Suppress(2)" },
            { name: "Missle Launcher", points: 48, type: "Heavy(26\")", test: "5S", traits: "Area(3\") Slow", effect: "Maim"  }
        ] },
        { name: "Psycho", type: "Grunt",
		stats: { 
        S: 4, P: 4, E: 4, C: 3, I: 4, A: 4, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "10mm Pistol", points: 15, type: "Pistol(10\")", test: "3A", traits: "CQB Fast", effect: "-" },
            { name: "Combat Shotgun", points: 17, type: "Rifle(10\")", test: "4P", traits: "Storm(1)", effect: "Maim" },
            { name: "10mm Pistol and Hand Weapon", points: 21, type: "Pistol(10\")", test: "3A", traits: "CQB Fast", effect: "-", type2: "Melee", test2: "3S", traits2: "Fast", effect2: "-" },
            { name: "10mm Pistol and Baseball Bat", points: 22, type: "Pistol(10\")", test: "3A", traits: "CQB Fast", effect: "-", type2: "Melee", test2: "3S", traits2: "WindUp", effect2: "Suppress (1)" }
        ] },
        { name: "Scavver", type: "Grunt",
		stats: { 
        S: 3, P: 4, E: 4, C: 4, I: 5, A: 3, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Handmade Rifle", points: 23, type: "Rifle(18\")", test: "4P", traits: "Fast", effect: "Suppress(2)" },
            { name: "Marksman's Handmade Rifle", points: 24, type: "Rifle(30\")", test: "2P", traits: "Aim(+3)", effect: "Suppress(3)"  },
            { name: "Combat Rifle", points: 27, type: "Rifle(24\")", test: "4P", traits: "Fast", effect: "Maim"  }
        ] },
        { name: "Waster", type: "Grunt",
		stats: { 
        S: 3, P: 4, E: 3, C: 3, I: 3, A: 3, L: 1, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Baseball Bat", points: 10, type: "Melee", test: "3S", traits: "WindUp", effect: "Suppress (1)" },
            { name: "10mm Pistol and Hand Weapon", points: 13, type: "Pistol(10\")", test: "3A", traits: "CQB Fast", effect: "-", type2: "Melee", test2: "3S", traits2: "Fast", effect2: "-" },
            { name: "Handmade Rifle", points: 14, type: "Rifle(18\")", test: "4P", traits: "Fast", effect: "Suppress(2)" }
        ] }
    ],
    "The Pack": [
        { name: "Alpha", type: "Champion, Leader", perks: "Natural Leader",
		stats: { 
        S: 5, P: 5, E: 5, C: 6, I: 6, A: 5, L: 3, W: 3  // SPECIALW stats
            }, 
			weapons: [
            { name: "Sawn-off Shotgun", points: 35, type: "Rifle(8\")", test: "4P", traits: "CQB Storm(2)", effect: "Maim" },
            { name: "10mm Pistol and Deathclaw Gauntlet", points: 42, type: "Pistol(10\")", test: "3A", traits: "CQB Fast", effect: "-", type2: "Melee", test2: "5S", traits2: "WindUp", effect2: "Pierce" },
            { name: "Automatic Handmade Rifle and Baseball Bat", points: 48, type: "Rifle(14\")", test: "3P", traits: "Fast Storm(2)", effect: "Suppress(2)", type2: "Melee", test2: "3S", traits2: "WindUp", effect2: "Suppress (1)" }
        ] },
        { name: "Top Dog", type: "Champion",
		stats: { 
        S: 5, P: 4, E: 4, C: 5, I: 4, A: 5, L: 2, W: 2  // SPECIALW stats
            }, 
			weapons: [
            { name: "10mm Pistol and Baseball Bat", points: 23, type: "Pistol(10\")", test: "3A", traits: "CQB Fast", effect: "-", type2: "Melee", test2: "3S", traits2: "WindUp", effect2: "Suppress (1)" },
            { name: "Handmade Rifle and Baseball Bat", points: 25, type: "Rifle(18\")", test: "4P", traits: "Fast", effect: "Suppress(2)", type2: "Melee", test2: "3S", traits2: "WindUp", effect2: "Suppress (1)" },
            { name: "Sledgehammer and Predator Grenades", points: 33, type: "Melee", test: "4S", traits: "Unwieldy(5) WindUp", effect: "Maim", type2: "Grenade(8\")", test2: "4A", traits2: "Area(3\") CQB", effect2: "Maim" },
            { name: "Flamer", points: 36, type: "Heavy(6\")", test: "4S", traits: "Area(2\") CQB", effect: "Ignite(3)" }
        ] },
        { name: "Psycho", type: "Grunt",
		stats: { 
        S: 4, P: 3, E: 4, C: 4, I: 3, A: 5, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Sledgehammer", points: 14, type: "Melee", test: "4S", traits: "Unwieldy(5) WindUp", effect: "Maim" },
            { name: "Light Handmade Rifle", points: 18, type: "Rifle(12\")", test: "3P", traits: "Bladed Fast", effect: "Suppress(1)" },
            { name: "Pipe Revolver and Baseball Bat", points: 23, type: "Pistol(12\")", test: "3A", traits: "Aim(+1) CQB", effect: "Pierce", type2: "Melee", test2: "3S", traits2: "WindUp", effect2: "Suppress (1)" },
            { name: "10mm Pistol and Hand Weapon", points: 23, type: "Pistol(10\")", test: "3A", traits: "CQB Fast", effect: "-", type2: "Melee", test2: "3S", traits2: "Fast", effect2: "-"  },
            { name: "10mm Pistol and Baseball Bat", points: 24, type: "Pistol(10\")", test: "3A", traits: "CQB Fast", effect: "-", type2: "Melee", test2: "3S", traits2: "WindUp", effect2: "Suppress (1)" }
        ] },
        { name: "Scavver", type: "Grunt",
		stats: { 
        S: 4, P: 4, E: 4, C: 3, I: 4, A: 4, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Sawn-Off Shotgun", points: 18, type: "Rifle(8\")", test: "4P", traits: "CQB Storm(2)", effect: "Maim" },
            { name: "Handmade Rifle", points: 23, type: "Rifle(18\")", test: "4P", traits: "Fast", effect: "Suppress(2)" },
            { name: "Automatic Handmade Rifle", points: 27, type: "Rifle(14\")", test: "3P", traits: "Fast Storm(2)", effect: "Suppress(2)"  }
        ] },
        { name: "Waster", type: "Grunt",
		stats: { 
        S: 3, P: 3, E: 3, C: 4, I: 3, A: 3, L: 1, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Pipe Revolver", points: 12, type: "Pistol(12\")", test: "3A", traits: "Aim(+1) CQB", effect: "Pierce" },
            { name: "10mm Pistol", points: 13, type: "Pistol(10\")", test: "3A", traits: "CQB Fast", effect: "-" },
            { name: "Pipe Revolver and Hand Weapon", points: 14, type: "Pistol(12\")", test: "3A", traits: "Aim(+1) CQB", effect: "Pierce", type2: "Melee", test2: "3S", traits2: "Fast", effect2: "-" },
            { name: "Light Handmade Rifle", points: 16, type: "Rifle(12\")", test: "3P", traits: "Bladed Fast", effect: "Suppress(1)" }
        ] }
    ],
    "The Disciples": [
        { name: "Tormentor", type: "Champion, Leader", perks: "Natural Leader",
		stats: { 
        S: 6, P: 5, E: 5, C: 5, I: 5, A: 6, L: 3, W: 3  // SPECIALW stats
            }, 
			weapons: [
            { name: "Handmade Rifle", points: 44, type: "Rifle(18\")", test: "4P", traits: "Fast", effect: "Suppress(2)" },
            { name: "Precision Hunting Rifle", points: 45, type: "Rifle(24\")", test: "3P", traits: "Aim(+2)", effect: "Pierce"  },
            { name: ".44 Pistol and Machete", points: 47, type: "Pistol(14\")", test: "4A", traits: "Aim(+1)", effect: "Pierce" , type2: "Melee", test2: "4S", traits2: "-", effect2: "Maim"}
        ] },
        { name: "Butcher", type: "Champion",
		stats: { 
        S: 4, P: 5, E: 4, C: 4, I: 5, A: 5, L: 2, W: 2  // SPECIALW stats
            }, 
		weapons: [
            { name: "Handmade Rifle", points: 30, type: "Rifle(18\")", test: "4P", traits: "Fast", effect: "Suppress(2)" },
            { name: "Syringer", points: 28, type: "Rifle(16\")", test: "2P", traits: "Aim(+2)", effect: "Poison(3)" },
            { name: "Marksman's Handmade Rifle", points: 30, type: "Rifle(30\")", test: "2P", traits: "Aim(+3)", effect: "Suppress(3)" },
            { name: "10mm Pistol and Nuka-Grenade", points: 40, type: "Pistol(10\")", test: "3A", traits: "CQB Fast", effect: "-", type2: "Grenade(8\")", test2: "5A", traits2: "Area(2\") CQB Irradiate OneAndDone", effect2: "Maim" }
        ] },
        { name: "Psycho", type: "Grunt",
		stats: { 
        S: 5, P: 3, E: 4, C: 4, I: 3, A: 4, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Short Hunting Rifle", points: 15 , type: "Rifle(14\")", test: "3P", traits: "-", effect: "Pierce"},
            { name: "Light Handmade Rifle", points: 20, type: "Rifle(12\")", test: "3P", traits: "Bladed Fast", effect: "Suppress(1)"  },
            { name: "Pipe Revolver and Hand Weapon", points: 21, type: "Pistol(12\")", test: "3A", traits: "Aim(+1) CQB", effect: "Pierce" , type2: "Melee", test2: "3S", traits2: "Fast", effect2: "-" },
            { name: "10mm Pistol and Machete", points: 21, type: "Pistol(10\")", test: "3A", traits: "CQB Fast", effect: "-" , type2: "Melee", test2: "4S", traits2: "-", effect2: "Maim"}
        ] },
        { name: "Scavver", type: "Grunt",
		stats: { 
        S: 4, P: 4, E: 4, C: 3, I: 4, A: 4, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Hunting Rifle", points: 21, type: "Rifle(22\")", test: "3P", traits: "Aim(+1)", effect: "Pierce" },
            { name: "Handmade Rifle", points: 23, type: "Rifle(18\")", test: "4P", traits: "Fast", effect: "Suppress(2)" },
            { name: "Ranger's Hunting Rifle", points: 23 , type: "Rifle(18\")", test: "3P", traits: "Aim(+1) Bladed", effect: "Pierce" }
        ] },
        { name: "Waster", type: "Grunt",
		stats: { 
        S: 4, P: 3, E: 3, C: 3, I: 3, A: 3, L: 1, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Short Hunting Rifle", points: 10, type: "Rifle(14\")", test: "3P", traits: "-", effect: "Pierce" },
            { name: "Pipe Revolver and Hand Weapon", points: 14, type: "Pistol(12\")", test: "3A", traits: "Aim(+1) CQB", effect: "Pierce" , type2: "Melee", test2: "3S", traits2: "Fast", effect2: "-" },
            { name: "10mm Pistol and Hand Weapon", points: 15, type: "Pistol(10\")", test: "3A", traits: "CQB Fast", effect: "-", type2: "Melee", test2: "3S", traits2: "Fast", effect2: "-" }
        ] }
    ],
		"Cult of the Mothman": [
        { name: "High Priest", type: "Champion, Leader", perks: "Inspirational, Natural Leader, Offering, Ritual",
		stats: { 
        S: 4, P: 5, E: 4, C: 6, I: 6, A: 4, L: 3, W: 3  // SPECIALW stats
            }, 
			weapons: [
            { name: "Hand Weapon", points: 31, type: "Melee", test: "3S", traits: "Fast", effect: "-"  }
        ] },
        { name: "Faithful", type: "Champion", perks: "Ritual",
		stats: { 
        S: 4, P: 5, E: 5, C: 5, I: 4, A: 4, L: 2, W: 2  // SPECIALW stats
            }, 
		weapons: [
            { name: "Flamer", points: 32, type: "Rifle(18\")", test: "4P", traits: "Fast", effect: "Suppress(2)" },
            { name: "Hunting Rifle", points: 36, type: "Rifle(30\")", test: "2P", traits: "Aim(+3)", effect: "Suppress(3)" },
            { name: "Hardened Sniper Rifle", points: 39, type: "Pistol(10\")", test: "3A", traits: "CQB Fast", effect: "-", type2: "Grenade(8\")", test2: "5A", traits2: "Area(2\") CQB Irradiate OneAndDone", effect2: "Maim" }
        ] },
        { name: "Cultist", type: "Grunt", perks: "Ritual",
		stats: { 
        S: 5, P: 3, E: 4, C: 4, I: 3, A: 4, L: 2, W: 2  // SPECIALW stats
            }, 
			weapons: [
            { name: "Molotov Cocktails and Heavy Pipe Pistol", points: 22, type: "Grenade (8\")", test: "2A", traits: "Area (2\"), CQB", effect: "Ignite (2)", type2: "Pistol(8\")", test2: "4A", traits2: "CQB", effect2: "Pierce"},
            { name: "Pipe Revolver and Hand Weapon", points: 23, type: "Pistol(12\")", test: "3A", traits: "Aim(+1) CQB", effect: "Pierce",type2: "Melee", test2: "3S", traits2: "Fast", effect2: "-"  },
            { name: "Heavy Pipe Pistol and Machete", points: 24, type: "Pistol(8\")", test: "4A", traits: "CQB", effect: "Pierce",type2: "Melee", test2: "4S", traits2: "-", effect2: "Maim" }
        ] },
        { name: "Disciple", type: "Grunt", perks: "Ritual",
		stats: { 
        S: 3, P: 4, E: 4, C: 4, I: 3, A: 4, L: 2, W: 2  // SPECIALW stats
            }, 
			weapons: [
            { name: "Double-barrelled Shotgun", points: 21, type: "Rifle (12\")", test: "3P", traits: "Storm (2)", effect: "Maim" },
            { name: "Combat Shotgun", points: 23,type: "Rifle(10\")", test: "4P", traits: "Storm(1)", effect: "Maim"},
            { name: "Handmade Rifle", points: 26 , type: "Rifle(18\")", test: "4P", traits: "Fast", effect: "Suppress(2)"}
        ] },
        { name: "Seeker", type: "Grunt", perks: "Ritual",
		stats: { 
        S: 3, P: 3, E: 4, C: 3, I: 3, A: 3, L: 1, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Pipe Pistol and Machete", points: 12 , type: "Pistol (8\")", test: "4A", traits: "CQB", effect: "-",type2: "Melee", test2: "4S", traits2: "-", effect2: "Maim" },
            { name: "10mm Pistol and Machete", points: 14, type: "Pistol(10\")", test: "3A", traits: "CQB Fast", effect: "-", type2: "Melee", test2: "4S", traits2: "-", effect2: "Maim" },
			{ name: "Pipe Revolver and Machete", points: 15, type: "Pistol(12\")", test: "3A", traits: "Aim(+1) CQB", effect: "Pierce" , type2: "Melee", test2: "4S", traits2: "-", effect2: "Maim" },
            { name: ".44 Pistol and Machete", points: 16, type: "Pistol(14\")", test: "4A", traits: "Aim(+1)", effect: "Pierce", type2: "Melee", test2: "4S", traits2: "-", effect2: "Maim" }
        ] }
	],
		"Legends of the Wasteland": [
        { name: "Lucy", type: "Grunt, Hiring Fee: 33", perks: "The One and Only, Okey Dokey, Wasteland Wanderer",
		stats: { 
        S: 4, P: 5, E: 4, C: 4, I: 5, A: 5, L: 3, W: 2  // SPECIALW stats
            }, 
			weapons: [
            { name: "Tranquilizer Pistol", points: 33, type: "Pistol (10\")", test: "3A", traits: "CQB", effect: "Tranquilize(3)"  }
        ] },
        { name: "The Ghoul", type: "Grunt, Hiring Fee: 65", perks: "Bloody Mess, Fire and Move, Improvised Lasso, Rad Resistant, The One and Only, Wasteland Wanderer",
		stats: { 
        S: 4, P: 6, E: 6, C: 5, I: 4, A: 6, L: 3, W: 3  // SPECIALW stats
            }, 
			weapons: [
            { name: "The Ghoul's Pistol and Rifle", points: 65, type: "Pistol (8\")", test: "5A", traits: "CQB", effect: "Maim",type2: "Rifle (18\")", test2: "5P", traits2: "Fast", effect2: "Suppress(2)"  }
        ] },
        { name: "CX404", type: "Grunt, Hiring Fee: 17", perks: "Beast, Scrapper, Sic 'Em, The One and Only, Wasteland Wanderer",
		stats: { 
        S: 4, P: 4, E: 4, C: 3, I: 4, A: 4, L: 2, W: 2  // SPECIALW stats
            }, 
			weapons: [
            { name: "Claws and Jaws", points: 17, type: "Melee", test: "4S", traits: "Fast", effect: "Suppress(1)"  }
        ] },
        { name: "Maximus", type: "Grunt, Hiring Fee: 42", perks: "Rule No.1: Read the Manual, Burly, Hardy, Rad Resistant, The One and Only, Wasteland Wanderer",
		stats: { 
        S: 6, P: 4, E: 6, C: 4, I: 4, A: 4, L: 2, W: 2  // SPECIALW stats
            }, 
			weapons: [
            { name: "Heavy Assault Rifle and Power Armor Punch", points: 42, type: "Rifle (20\")", test: "5P", traits: "Storm(1)", effect: "Maim", type2: "Melee", test2: "4S", traits2: "-", effect2: "Pushback(3)"  }
        ] },
		{ name: "King of the Park", type: "Champion, Leader, Hiring Fee: 87", perks: "PLOY: Nuka-nuke Launcher, Iron Fist, King of the Castle, Natural Leader, Power Armor",
		stats: { 
        S: 7, P: 5, E: 7, C: 6, I: 5, A: 5, L: 3, W: 4  // SPECIALW stats
            }, 
			weapons: [
            { name: "Iron Fist and PLOY ONLY: Nuka-Nuke Launcher", points: 87, type: "Melee", test: "5S", traits: "Fast", effect: "Maim", type2: "Heavy(20\")", test2: "5S", traits2: "CQB Area(2\") Irradiate One-and-Done", effect2: "-"  }
        ] },
        { name: "Bottle and Cappy", type: "Grunt, Hiring Fee: 48", perks: "Every Minimum Acceptable Safety Standard Met, Four Leaf Clover, Hidden, Zip of Nuka-Cola",
		stats: { 
        S: 4, P: 4, E: 4, C: 6, I: 5, A: 4, L: 4, W: 2  // SPECIALW stats
            }, 
			weapons: [
            { name: "Splattercannon and Bladed Commie Whacker", points: 48, type: "Rifle (22\")", test: "5P", traits: "Fast", effect: "Suppress(3)", type2: "Melee", test2: "2S", traits2: "Fast", effect2: "Pierce"  }
        ] },		
        { name: "Redeye", type: "Champion, Hiring Fee: 50", perks: "Inspirational, Intimidation, Recruiter",
		stats: { 
        S: 5, P: 5, E: 4, C: 6, I: 5, A: 5, L: 2, W: 2  // SPECIALW stats
            }, 
			weapons: [
            { name: "The Real Deal", points: 50, type: "Melee", test: "4S", traits: "Fast", effect: "Maim"  }
        ] },		
        { name: "Mason", type: "Champion, Leader, Hiring Fee: 63", perks: "Inspirational, Natural Leader, Survivalist, Toughness",
		stats: { 
        S: 5, P: 5, E: 5, C: 6, I: 6, A: 5, L: 3, W: 3  // SPECIALW stats
            }, 
			weapons: [
            { name: "Heavy Combat Shotgun", points: 63, type: "Rifle(10\")", test: "5P", traits: "Fast Storm(1)", effect: "Maim"  }
        ] },	
        { name: "Mags Black", type: "Champion, Leader, Hiring Fee: 61", perks: "Making a Withdrawal, Natural Leader, Rifleman",
		stats: { 
        S: 5, P: 6, E: 5, C: 5, I: 6, A: 5, L: 2, W: 3  // SPECIALW stats
            }, 
			weapons: [
            { name: "Suppressing Handmade Rifle", points: 61, type: "Rifle(22\")", test: "4P", traits: "Fast", effect: "Suppress(3)"  }
        ] },
        { name: "Nisha", type: "Champion, Leader, Hiring Fee: 68", perks: "Making a Withdrawal, Natural Leader, Rifleman",
		stats: { 
        S: 6, P: 5, E: 5, C: 6, I: 6, A: 6, L: 3, W: 3  // SPECIALW stats
            }, 
			weapons: [
            { name: "Disciple's Blade and Plasma Pistol", points: 68, type: "Melee", test: "4S", traits: "Fast", effect: "Maim", type2: "Pistol(12\")", test2: "4A", traits2: "CQB Fast", effect2: "Meltdown"  }
        ] },				
        { name: "Overboss Colter (PA)", type: "Champion, Leader, Hiring Fee: 72", perks: "Cheater, Natural Leader, Power Armor",
		stats: { 
        S: 7, P: 5, E: 7, C: 2, I: 3, A: 4, L: 1, W: 4  // SPECIALW stats
            }, 
			weapons: [
            { name: "Powerful Combat Rifle and Iron Fist", points: 72, type: "Rifle(24\")", test: "5P", traits: "Fast", effect: "Maim", type2: "Melee", test2: "5S", traits2: "Fast", effect2: "Maim"  }
        ] },			
        { name: "Nick Valentine", type: "Champion, Hiring Fee: 37", perks: "Adaptable, Informant, Rad Resistant",
		stats: { 
        S: 4, P: 5, E: 5, C: 6, I: 7, A: 4, L: 3, W: 2  // SPECIALW stats
            }, 
			weapons: [
            { name: "Pipe Revolver", points: 37, type: "Pistol(12\")", test: "3A", traits: "Aim(+1) CQB", effect: "Pierce"  }
        ] },	
        { name: "Paladin Danse (PA)", type: "Champion, Leader, Hiring Fee: 78", perks: "Know your Enemy (Super Mutants), Natural Leader, Odd Anatomy, Power Armor",
		stats: { 
        S: 6, P: 6, E: 7, C: 5, I: 5, A: 4, L: 3, W: 4  // SPECIALW stats
            }, 
			weapons: [
            { name: "Laser Rifle", points: 78, type: "Rifle(18\")", test: "4P", traits: "-", effect: "Ignite(1)"  }
        ] },
        { name: "Fist", type: "Champion, Leader, Hiring Fee: 72", perks: "Burly, Natural Leader, Rad Resistant, Toughness, Unending Stamina",
		stats: { 
        S: 7, P: 5, E: 6, C: 5, I: 5, A: 5, L: 2, W: 4  // SPECIALW stats
            }, 
			weapons: [
            { name: "Minigun", points: 72, type: "Heavy(14\")", test: "4S", traits: "Slow Storm(3)", effect: "Pierce"  }
        ] }
	],
		"Robot Companions": [
        { name: "Mr Handy", type: "Companion, Grunt", perks: "Hardy, Machine, Medic(Med Unit Only), Programmed",
		stats: { 
        S: 5, P: 5, E: 5, C: 0, I: 1, A: 4, L: 1, W: 3  // SPECIALW stats
            }, 
			weapons: [
            { name: "Standard Unit Robot Lasers and Various Appendages", points: 52, type: "Rifle (16\")", test: "4P", traits: "Fast", effect: "Suppress(1)", type2: "Melee", test2: "4S", traits2: "Fast", effect2: "Maim Suppress(2) Tranquilize(1)" },
			{ name: "Medical Unit Robot Lasers and Various Appendages", points: 57, type: "Rifle (16\")", test: "4P", traits: "Fast", effect: "Suppress(1)", type2: "Melee", test2: "4S", traits2: "Fast", effect2: "Maim Suppress(2) Tranquilize(1)" },
			{ name: "Combat Unit Robot Lasers and Various Appendages and Flamer", points: 60, type: "Rifle (16\")", test: "4P", traits: "Fast", effect: "Suppress(1)", type2: "Melee", test2: "4S", traits2: "Fast", effect2: "Maim Suppress(2) Tranquilize(1)", type3: "Heavy(6\")", test3: "4S", traits3: "Area(2\") CQB", effect3: "Ignite(3)"}
        ] },
        { name: "Protectron", type: "Companion, Grunt", perks: "Hardy, Machine, Medic(Med Unit Only), Programmed, Self Destruct",
		stats: { 
        S: 4, P: 5, E: 5, C: 0, I: 1, A: 2, L: 1, W: 2  // SPECIALW stats
            }, 
			weapons: [
            { name: "Builder Unit Nail Gun and Robot Bash", points: 30, type: "Rifle (12\")", test: "3P", traits: "CQB Fast", effect: "Pierce", type2: "Melee", test2: "4S", traits2: "-", effect2: "-" },
			{ name: "Standard Unit Robot Lasers and Robot Bash", points: 32, type: "Rifle (16\")", test: "4P", traits: "Fast", effect: "Suppress(1)", type2: "Melee", test2: "4S", traits2: "-", effect2: "-" },
			{ name: "Medical Unit Robot Bash", points: 33, type: "Melee", test: "4S", traits: "-", effect: "-" },
			{ name: "Firefighter Unit Hand Cryojet and Robot Bash", points: 35, type: "Heavy (6\")", test: "3S", traits: "Area(2\") CQB Slow", effect: "Suppress(1)", type2: "Melee", test2: "4S", traits2: "-", effect2: "-" },
			{ name: "Police Unit Robot Lasers and Shock Hand", points: 35, type: "Rifle (16\")", test: "4P", traits: "CQB Fast", effect: "Suppress(1)", type2: "Melee", test2: "4S", traits2: "Non-lethal Fast", effect2: "Suppress(1)"}
        ] },
        { name: "Eyebot", type: "Companion, Grunt", perks: "Bullet Magnet, Eye Catching, Flight, Machine, Programmed",
		stats: { 
        S: 2, P: 4, E: 4, C: 0, I: 1, A: 5, L: 1, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Eyebot Laser", points: 15, type: "Pistol (10\")", test: "3A", traits: "CQB", effect: "Ignite(1)"}
        ] },
        { name: "Securitron MK 1.0", type: "Companion, Grunt", perks: "Burly, Hardy, Machine, Programmed",
		stats: { 
        S: 5, P: 5, E: 6, C: 0, I: 1, A: 2, L: 2, W: 2  // SPECIALW stats
            }, 
			weapons: [
            { name: "Robot Lasers and Securitron SMG and Robot Bash", points: 45, type: "Rifle (16\")", test: "4P", traits: "Fast", effect: "Suppress(1)", type2: "Rife(12\")", test2: "3P", traits2: "Storm(3)", effect2: "Suppress(2)", type3: "Melee", test3: "4S", traits3: "-", effect3: "-" }
		] },	
        { name: "Securitron MK 2.0", type: "Companion, Grunt", perks: "Burly, Hardy, Life Giver, Machine, Programmed",
		stats: { 
        S: 5, P: 6, E: 7, C: 0, I: 1, A: 2, L: 2, W: 2  // SPECIALW stats
            }, 
			weapons: [
            { name: "Robot Lasers and Securitron SMG and Robot Bash and Shoulder Launchers", points: 70, type: "Rifle (16\")", test: "4P", traits: "Fast", effect: "Suppress(1)", type2: "Rife(12\")", test2: "3P", traits2: "Storm(3)", effect2: "Suppress(2)", type3: "Melee", test3: "4S", traits3: "-", effect3: "-", type4: "Heavy(12\")", test4: "3S", traits4: "Area(2\")", effect4: "Maim" }
		] },
        { name: "Nukatron", type: "Companion, Grunt", perks: "Hardy, Machine, Programmed, Self Destruct",
		stats: { 
        S: 4, P: 5, E: 5, C: 0, I: 1, A: 2, L: 1, W: 2  // SPECIALW stats
            }, 
			weapons: [
            { name: "Robot Lasers and Robot Bash", points: 30, type: "Rifle (16\")", test: "4P", traits: "Fast", effect: "Suppress(1)", type2: "Melee", test2: "4S", traits2: "-", effect2: "-" },
			{ name: "Nuka Dispenser and Robot Bash", points: 25, type: "Pistol (8\")", test: "4P", traits: "Fast", effect: "Suppress(1)", type2: "Melee", test2: "4S", traits2: "-", effect2: "-" },
			{ name: "Robot Bash", points: 20, type: "Melee", test: "4S", traits: "-", effect: "-" }
		] },
        { name: "Mr Frothy", type: "Companion, Grunt", perks: "Flight,Hardy, Machine, Programmed, Self Destruct",
		stats: { 
        S: 5, P: 5, E: 6, C: 0, I: 1, A: 4, L: 1, W: 3  // SPECIALW stats
            }, 
			weapons: [
			{ name: "Nuka Dispenser and Robot Bash", points: 40, type: "Pistol (8\")", test: "4P", traits: "Fast", effect: "Suppress(1)", type2: "Melee", test2: "4S", traits2: "-", effect2: "-" }
		] }				
    ],
		"Creature Companions": [
        { name: "Brahmin", type: "Companion, Grunt", perks: "Beast, Rad Resistant",
		stats: { 
        S: 4, P: 3, E: 5, C: 1, I: 1, A: 2, L: 1, W: 2  // SPECIALW stats
            }, 
			weapons: [
            { name: "Trample", points: 15, type: "Melee", test: "4S", traits: "Wind Up", effect: "Pushback(3)"}
        ] },
        { name: "Bloatfly", type: "Companion, Grunt", perks: "Beast, Rad Resistant, Flight, Swarm",
		stats: { 
        S: 2, P: 3, E: 2, C: 1, I: 1, A: 3, L: 1, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Bloatfly Larvae", points: 5, type: "Pistol(10\")", test: "2A", traits: "Fast", effect: "-"}
        ] },
        { name: "Bloodbug", type: "Companion, Grunt", perks: "Beast, Rad Resistant, Flight, Swarm",
		stats: { 
        S: 3, P: 2, E: 3, C: 1, I: 1, A: 3, L: 1, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Bloodbug Proboscis", points: 10, type: "Melee", test: "4S", traits: "-", effect: "Poison(2)"}
        ] },
        { name: "Deathclaw", type: "Companion, Grunt", perks: "Beast, Rad Resistant, Blitz, Burly, Wide Swings",
		stats: { 
        S: 7, P: 2, E: 6, C: 1, I: 1, A: 5, L: 1, W: 3  // SPECIALW stats
            }, 
			weapons: [
            { name: "Deathclaw Claws", points: 70, type: "Melee", test: "5S", traits: "-", effect: "Maim Pushback(1)"}
        ] },
        { name: "Mongrel", type: "Companion, Grunt", perks: "Beast, Rad Resistant, Sprint, Swarm",
		stats: { 
        S: 4, P: 4, E: 4, C: 1, I: 2, A: 4, L: 1, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Claws & Jaws", points: 10, type: "Melee", test: "4S", traits: "Fast", effect: "Suppress(1)"}
        ] },
        { name: "Radstag", type: "Companion, Grunt", perks: "Beast, Rad Resistant",
		stats: { 
        S: 4, P: 3, E: 4, C: 1, I: 1, A: 3, L: 1, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Radstag Antlers", points: 10, type: "Melee", test: "4S", traits: "Wind Up", effect: "Pierce"}
        ] },
        { name: "Radstag Doe", type: "Companion, Grunt", perks: "Beast, Rad Resistant, Swarm",
		stats: { 
        S: 3, P: 3, E: 3, C: 1, I: 1, A: 3, L: 1, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Doe Shove", points: 5, type: "Melee", test: "2S", traits: "-", effect: "-"}
        ] },
        { name: "Yao Guai", type: "Companion, Grunt", perks: "Beast, Rad Resistant, Burly, Hardy, Freight Train",
		stats: { 
        S: 7, P: 3, E: 7, C: 1, I: 1, A: 4, L: 1, W: 3  // SPECIALW stats
            }, 
			weapons: [
            { name: "Yao Guai Claws & Jaws", points: 70, type: "Melee", test: "5S", traits: "-", effect: "Maim Pushback(2)"}
        ] }		
    ]
	
	
};

//Perks data for all factions
const perksData = [
  { perk: "Big Leagues", prereq:"S4", description: "When this model makes a Melee Attack, treat its Luck as being 1 higher." },
  { perk: "Drag", prereq:"S4", description: "After this model makes the Back Off Action, its controller may make a Drag Test (3S). For each Hit rolled, move a model that the moving model was Engaged with (at the beginning of the Back Off Action), into Base contact with the moving model. The normal rules for moving apply and the dragged model cannot be moved within 1” of an opposing model unless it can also be placed into Engagement with that model." },
  { perk: "Mancatcher", prereq:"S5", description: "After this model Incapacitates an Enemy Champion crew member with a Melee Attack, its controller may make a Capture Test (1S). If Passed, the Incapacitated model is Captured and becomes a Captive (see pg. 55), it does not roll on the Aftermath Table during the Story Phase. Otherwise, they are Incapacitated as normal." },
  { perk: "Charge", prereq:"S5", description: "After performing a Get Moving Action, if this model is Engaged with an Enemy model, it may make a Brawl Action without Taking Fatigue." },
  { perk: "Basher", prereq:"S4", description: "When this model makes a Melee Attack, if the Weapon has the Pushback Critical Effect trait, increase its value by 2 until the Attack has resolved. Otherwise, it gains the Pushback (4) Critical effect until the Attack has resolved.." },
  { perk: "Strong Back", prereq:"S3", description: "Once per Turn, during its activation, this model may make the Rummage Action without Taking Fatigue." },
  { perk: "Steady Aim", prereq:"S4", description: "When the Active player declares that this model will make an Open Fire Action with a Rifle or Heavy weapon, and they have not moved this Action, they gain a Bonus Die." },
  { perk: "Grenadier", prereq:"S6", description: "Add 3\" to the Range of any Grenade weapons carried by this model." },
  { perk: "Wide Swings", prereq:"S6", description: "When creating a Dice Pool for a Melee Attack, this model gains 1 Bonus Die for each Enemy model it is Engaged with, beyond the first." },
  { perk: "Iron Fist", prereq:"S7", description: "Add this weapon to the model's Roster Entry: Iron Fist, Melee, 5S, Fast, Maim" },
  
  { perk: "Wayfinder", prereq:"P3", description: "When Scouting as part of a Scout Story Action, this model makes the Scout Test at (3P), rather than (2P)" }, 
  { perk: "Hobble", prereq:"P3", description: "Enemy models Damaged by this model during a Ranged Attack, with a Weapon without the Area (X”) Trait, cannot be activated in the following Turn, unless all other models in the Enemy crew are Exhausted" }, 
  { perk: "Overwatch", prereq:"P4", description: "When this model makes a Ranged Attack, if the Target Model moved in the previous Turn, it is Wide Open until the attack has resolved." }, 
  { perk: "Spotter", prereq:"P4", description: "Friendly models within the Control Area of one or more models with this Perk may Re-roll one dice when making the Rummage Action." }, 
  { perk: "Penetrator", prereq:"P5", description: "When this model makes a Ranged Attack (with a Weapon without the Area trait) against a Target model with an Endurance score of 5 or more, reduce the Target model's Endurance by 1, until the Attack has resolved" }, 
  { perk: "Called Shot", prereq:"P6", description: "When this model makes a Ranged Attack with a Pistol or Rifle, if the Weapon has the Aim Trait, increase its value by 2 until the Attack has resolved. Otherwise, it gains the Aim (+2) Trait until the Attack has resolved" }, 
  { perk: "Sniper", prereq:"P4", description: "When this model makes a Ranged Attack with a Rifle weapon, the Target never counts as being Obscured" },
  { perk: "Pickpocket", prereq:"P5", description: "When this model makes a Back Off Action, its controller may make a Pickpocket Test (3P). If Passed, the opposing player removes one dose of a Chem they have on their Crew Roster, it has been stolen. The Active player then adds one dose of the same Chem to their own Roster, if they have capacity. If the Test scores 3 or more Hits, the Active player can choose which Chem is stolen, instead of the opposing player." },
  { perk: "Rifleman", prereq:"P6", description: "When this model makes a Ranged Attack and uses a Rifle weapon, treat its Luck as being 1 higher" },
  { perk: "Awareness", prereq:"P7", description: "This model can give Supporting Fire even if it is not within the attacking model's Control Area. Other restrictions still apply." },
  
  { perk: "Stonewall", prereq:"E3", description: "This model’s Proximity area is 2”, rather than 1”." },
  { perk: "Selfless", prereq:"E3", description: "If this model is a Target model of an Attack from a Weapon with the Area (X”) Trait, before the Attack Test is made, its controller may declare that it is Shielding Others. If it does, the Attack is resolved with this model as the only Target, and the Dice Pool gains a Bonus Die." },
  { perk: "Immortal", prereq:"E4", description: "When a player rolls on the Serious Injury Table for this model, roll an extra die and choose a result." },
  { perk: "Odd Anatomy", prereq:"E5", description: "When this model is the Target of an Enemy Attack, during the Trigger Critical Effect step its controller may make a Shrug Test (2E). If a number of Hits are rolled equal to, or greater than, the number of Luck Dice left in the Attacker's Dice Pool, no Critical Effects can be triggered until the Attack has resolved." },
  { perk: "Unending Stamina", prereq:"E6", description: "Once per Round, when this Model is Exhausted, its controller may declare it is performing a Relentless Action at the beginning of their Turn, before choosing an Active Model. If they do, this model becomes the Active Model (ignoring the standard rules for selecting an Active Model) and may perform 1 Action without Taking Fatigue. At the end of the Relentless Action, this model Suffers 1 Injury." }, 
  { perk: "Rad Resistant", prereq:"E4", description: "This model is unaffected by Radiation Tokens." },
  { perk: "Cannibal", prereq:"E5", description: "If a model is Incapacitated while in contact with this model, this model recovers all Harm." },
  { perk: "Bullet Magnet", prereq:"E5", description: "When making a Ranged Attack against your models, Enemy models must Target this model if it is the closest Visible Friendly model that can be Targeted. If a model has the Unassuming Perk, it cannot take this Perk." },
  { perk: "Toughness", prereq:"E6", description: "The first time each game that this model would be Incapacitated, make a 2E test for it. If it Passes, it immediately takes enough Harm to bring it to its Harm Limit but remains in play." },
  { perk: "Lifegiver", prereq:"E7", description: "At the start of each Round, this model recovers 2 Harm" },
  
  { perk: "Warden", prereq:"C3", description: "When a player makes a Captive Story Action, if their crew possesses one or more models with this Perk that are not marked as Absent, they may roll twice when determining the Score on their Faction’s Captive Table, picking whichever of the two results they choose." },
  { perk: "Fast Talker", prereq:"C3", description: "If this model is Captured or becomes a Captive, its controller may make a Charm Test (2C). If Passed, the model talks their way out of it and does not become a Captive, it is not listed on the opponents Captives Roster, and it is not listed as Absent on the controllers Crew Roster." },
  { perk: "Lieutenant", prereq:"C4", description: "During the Story Phase, if no model in a crew containing this model has the Natural Leader Perk, this model loses this Perk and gains the Natural Leader Perk. You may then Upgrade this model twice, as described in the Crew Training Story Action. These Upgrades do not cost any XP and do not count toward the model’s Upgrade Limit." },
  { perk: "Unassuming", prereq:"C5", description: "When making a Ranged Attack against your models, Enemy models cannot Target this model, if there is a closer visible Friendly model that can be targeted. If a model has the Bullet Magnet Perk, it cannot take this Perk." },
  { perk: "Partyboy/girl", prereq:"C5", description: "When a Chem is used on this model, it may either: Recover all Harm; or Recover 1 Injury." },
  { perk: "Animal Friend", prereq:"C4", description: "At the start of a game, you may deploy a Dog in Base contact with this model. It is treated as a Friendly model for the rest of the game. It counts as a member of your crew but is removed at the end of a game." },  
  { perk: "Inspirational", prereq:"C4", description: "Increase this model's Control Area by 2\"." },
  { perk: "Lone Wanderer", prereq:"C5", description: "While this model does not have any other Friendly models within its Control Area, add 2 Bonus Die to any Tests you make for it." },
  { perk: "Intimidation", prereq:"C6", description: "When the opposing player makes a Confusion Test for an Enemy model within this model's Influence, they count its Intelligence as 1 lower." },
  { perk: "Cap Collector", prereq:"C7", description: "When trading Chems for Caps, double the number of Caps (During Scavenge or when clearing Rare Chems) that the crew receives if there is at least one model with the Perk in the crew and it is not marked as Absent." },
  
  { perk: "Scrapper", prereq:"I4", description: "When this model makes a Search Action, double the number of Caps and Parts added to the crew's Stash." },
  { perk: "Chemist", prereq:"I5", description: "If this model is not Absent at the start of a game, the crew increases its Chem Budget by 5 (Even if it has a higher Rep than the opposing crew)." },
  { perk: "Medic", prereq:"I6", description: "When this model makes a Patch Up Action, it can either remove up to 3 Harm from itself, or remove up to 3 Harm from a Friendly model within 1\". If this model is not Abesent when the Crew makes a Recuperate, add a Bonus Die to all Endurance Tests made to see whether Champions recover from Serious Injuries." },
  { perk: "Gun Nut", prereq:"I7", description: "If this model is not marked Abest at the end of the Make Story Actions step, you may pay Parts to Modify a single weapon as though the crew had made a Modify Weapons Story Action." },
  { perk: "Adaptable", prereq:"I3", description: "Once per game, when creating this model's Dice Pool for a S.P.E.C.I.A.L. Test, you may use this model's Intelligence in place of any other Statistic for that Test." },
  { perk: "Savant", prereq:"I4", description: "When performing the Crew Training Story Action to purchase an Upgrade for this model, reduce the XP cost by 2." },
  { perk: "Informant", prereq:"I4", description: "When Setting up a Game, after completing the Starting Positions step of an Objective (or Scenario), if this model is on the Battlefield, its controller may Reposition a number of Friendly models equal to its Luck statistic. If both crews have model with this Perk, the player with the Initiative Token may choose who Repositions their models first." },
  { perk: "Strategist", prereq:"I5", description: "When a crew containing one or more models (which are not marked as Absent) with this Perk would spend 1 or more Scouting Points, the crew controller may make a Strategy Test (1I). If passed, the crew gains 1 Scouting Point." },
  { perk: "Trigonometry", prereq:"I4", description: "When creating the Dice Pool for a Ranged Attack with this model, if it is at least 2” higher in elevation than its Target, add 2 Bonus Dice to the Pool." },
  { perk: "Coroner", prereq:"I4", description: "During the Treat the Wounded Step of the Story Phase, if a crew has one or more models with this Perk (who are not Absent), whenever a friendly model rolls either the Broken (Aftermath Table), or Dead (Serious Injury Table) results, its controller may make an Autopsy Test (2I). If Passed, the crew gains 1XP for each Hit rolled." },  

  
  { perk: "Blitz", prereq:"A4", description: "After this model completes a Brawl Action, the Active player can move it up to 3\"." },
  { perk: "Gunslinger", prereq:"A5", description: "Add 4\" to the Effective Range of any Pistols this model is carrying" },
  { perk: "Fire and Move", prereq:"A6", description: "After this model completes an Open Fire Action, the Active player can move it up to 4\"." },
  { perk: "Moving Target", prereq:"A7", description: "When this model is targeted by an Attack Action, its controlling player can declare that it will dodge at the start of the Make the Attack Test step. A model that dodges takes 1 Fatigue, but its Endurance is increased by 2 until the attack has been resolved. (Stacks with Buffout)" },
  { perk: "Sprint", prereq:"A3", description: "When this model uses the Get Moving Action, it may move an extra 2”." },
  { perk: "Parting Shot", prereq:"A4", description: "After making a Back Off Action to move out of an Enemy model’s proximity, this model may make a Ranged Attack using a Pistol Weapon against that model, without Taking Fatigue." },
  { perk: "Hidden", prereq:"A4", description: "This model does not need to be deployed as normal. At the start of the first Round, its controller may place this model anywhere on the Battlefield that isn’t within an Enemy model’s Control Area." },
  { perk: "Hit the Deck", prereq:"A6", description: "When making a Ranged Attack against your models, Enemy models cannot Target this model, unless it is either Wide Open, or has a Fatigue Token." },
  { perk: "Guns Akimbo", prereq:"A6", description: "When this model makes an Attack Action with a Pistol, if that Weapon does not have the Fast Trait, it gains the Fast Trait until the Attack has resolved" },
  { perk: "Reflexes", prereq:"A7", description: "When an Enemy model moves into this model's Proximity, this model may make a Reaction Test (2A). If Passed, this model may make a Ranged Attack with a Weapon without the Slow Trait against the Enemy model." },  
 

  { perk: "Fortune Finder", prereq:"L2", description: "After this model resolves a Rummage Action, its controller rolls a die and gains Caps equal to its result." },
  { perk: "Four Leaf Clover", prereq:"L3", description: "During the Fortune Smiles Step of a S.P.E.C.I.A.L. Test, this model rolls 2 Standard Dice for each Luck Die remaining in the Pool, instead of one." },
  { perk: "Bloody Mess", prereq:"L3", description: "If this model Incapacitates an Enemy model with an Attack, each other Enemy model within 2” of the Incapacitated model Suffers 1 Harm." },
  { perk: "Grim Reaper's Sprint", prereq:"L4", description: "When this Model Incapacitates an Enemy model with an Attack, if at least two Luck Dice Hit, this Model Recovers 1 Fatigue." },
  
  { perk: "Malfunction", prereq:"L2", description: "f an Enemy Ranged Attack Targeting this model scores 0 Hits, the Attacking Model Suffers 1 Harm." },
  { perk: "Ricochet", prereq:"L2", description: "If an Enemy Ranged Attack Targeting this model scores 0 Hits, this model's controller may choose a different model within 6” to become the Target of a Ricochet. The Attacker Re-rolls the Attack Test against the Ricochet Target, as if it were the original Target of the Attack." },
  { perk: "Lend Luck", prereq:"L3", description: "Attacks made by Friendly models against Enemy Targets within 3” of this model, may use this model’s Luck statistic when creating a Dice Pool, instead of their own Luck." },
  { perk: "Lucky Charm", prereq:"L3", description: "When this model's controller uses a Ploy, if they have no Ploy Tokens left, they may make a Luck Test (4L). If Passed, the crew gains 1 Ploy Token." },
  { perk: "Better Criticals", prereq:"L4", description: "When this model triggers a Critical Effect with a numerical value, such as Ignite (X), increase that value by 2 until the Attack is resolved." },
  { perk: "Mysterious Stranger", prereq:"L4", description: "At the start of each Round after the first, this model's controller may make a Mysterious Stranger Test (1L). If Passed, that player deploys a friendly Mysterious Stranger model in Base contact with the edge of the Battlefield closest to this model. Once a player has passed a Mysterious Stranger Test, they may not attempt it again that game. The Mysterious Stranger is counted as part of its controller's crew, but is removed from the roster at the end of the game. S:5 P:5 E:6 C:4 I:5 A:6 L:3 W:1 Mysterious .44 Pistol (18\") 4A Aim(+1) Pierce" },
  
  { perk: "Natural Leader", prereq:"-", description: "This model automatically passes Confusion tests. When making an Intelligence test for a friendly model within this model's Control Area, you can choose to use this model's Intelligence instead. " },
  { perk: "Beast", prereq:"-", description: "This model cannot be a Crew's Leader and never gains perks." },
  { perk: "Burly", prereq:"-", description: "This model's Harm limit is 4 instead of 3." },
  { perk: "Hardy", prereq:"-", description: "This model cannot suffer Fatigue. This model still takes Fatigue by performing an Action or gaining a bonus." },
  { perk: "Improvised Lasso", prereq:"-", description: "Gains the following Action: This Action can target an enemy model within 8\". The opposing player makes a 2S test. If the model Fails, it is moved 4\" towards this model." },
  { perk: "Rule No.1: Read the Manual", prereq:"-", description: "Open Fire Actions made by this model are Unlucky." },
  { perk: "Sic 'Em", prereq:"-", description: "This model can be given Movement Orders even if it is outside of the Active model's Control Area. All other restrictions still apply." },
  { perk: "Okey Dokey", prereq:"-", description: "When creating the Pool for a SPECIAL test for this model, it can take a fatigue to add one Bonus Die to the pool." },
  { perk: "The One and Only", prereq:"-", description: "This is a specific and unique Wasteland Wanderer. If the player with Initiative hires this model first, the other player cannot hire the same model for this game." },
  { perk: "Personal Stash", prereq:"-", description: "This model reduces the cost of Common Chems when purchasing Chems before a game AND during play when any Friendly model makes a Rummage Action by 3 Caps." },
  { perk: "Ritual", prereq:"-", description: "This model can contribute towards a crew's Ritual Count. A crew's Ritual Count starts at 0. For each Luck Die remaining in the Pool during the Fortune Smiles step, the Active player can increase Ritual Count by 1 instead of rolling a Standard Die. This is marked on the Crew Roster. Critical Effects cannot be triggered in a Test that increases Ritual Count." },
  { perk: "Being of Insight", prereq:"-", description: "When this model would suffer an Injury, reduce Ritual Count by 1 on the Crew Roster." },
  { perk: "Being of Rage", prereq:"-", description: "When this model completes an Attack Action or would suffer an Injury, reduce Ritual Count by 1 on the Crew Roster." },
  { perk: "Flight", prereq:"-", description: "This model is unaffected by the Proximity of Enemy models and can take the Get Moving Action whilst Engaged." },
  { perk: "Mythical", prereq:"-", description: "This model does not have a Health Value. When a crew's Ritual Count reaches 0, this model is Incapacitated." },
  { perk: "Offering", prereq:"-", description: "When this model makes a Rummage Action, it may increase the crew's Ritual Count by two instead of Finding Chems or Finding Caps and Parts." },
  { perk: "Pacifist", prereq:"-", description: "This model cannot take the Open Fire or Brawl Actions." },
  { perk: "Recruiter", prereq:"-", description: "If a model with this Perk was not Incapacitated during a game, the crew that contained it may make a Recruit Story Action for free during the next Story Phase." },
  { perk: "True Wisdom of the Mothman", prereq:"-", description: "Friendly models within this model's Control Area may count their Charisma statistic as being 8. When a model within this model's Control Area would Fail a Confusion Test, you may reduce Ritual Count by 1 to have the model Pass the Test instead." },
  { perk: "Take Me Home", prereq:"-", description: "When this model suffers Harm, it may have another friendly model that is not at Harm Limit within 3\" suffer the Harm instead." },
  { perk: "Machine", prereq:"-", description: "This model always passes any Confusion test it is required to make. When this model is Incapacitated, it does not trigger Confusion tests in other models. Additionally, Chems cannot be used on this model, and it is unaffected by Poison(X)." },
  { perk: "Wasteland Wanderer", prereq:"-", description: "This model can be temporarily added to a Crew using the Legends of the Wasteland rules." },
  { perk: "Eye Catching", prereq:"-", description: "This model always counts as being Wide Open." },
  { perk: "Flight", prereq:"-", description: "This model is unaffected by the Proximity of enemy models and can take the Get Moving action whilst Engaged. This model does not count vertical movement towards their total allowed when climbing, and is always considered to have an Agility greater than difference in elevation when dropping down from a Terrain Feature." },
  { perk: "Freight Train", prereq:"-", description: "This model can take the Get Moving Action whilst Engaged." },
  { perk: "Machine", prereq:"-", description: "This model always passes any Confusion Test it is required to make. When this model is Incapacitated, it does not trigger Confusion Tests in other models. In addition, Chems cannot be used on this model, and it is unaffected by the Poison (X) and Tranquilise (X) Critical Effects. Finally, this model is unaffected by Radiation Tokens." },
  { perk: "Programmed", prereq:"-", description: "This model cannot be a crew’s Leader, cannot take the Crew Training Story Action. In addition, it cannot gain Perks, or Experience." },
  { perk: "Self Destruct", prereq:"-", description: "When this model is Incapacitated, each other model within 3” of it Suffers 1 Harm." },
  { perk: "Swarm", prereq:"-", description: "When this model is taken as a Companion, you may add up to three models to your crew, instead of one, adding the Rating of each individual Companion to your Champion's Rating." },
  { perk: "King of the Castle", prereq:"-", description: "This model's crew may use the Nuka-nuke Launcher Ploy. In addition, this model's crew may use the Faction Ploys for The Pack, Operators and Disciples from the Fallout: Factions - Battle for Nuka-World Starter Set." },
  { perk: "Every Minimum Acceptable Safety Standard Met", prereq:"-", description: "This model has no Harm Limit." },
  { perk: "Zip of Nuka-Cola", prereq:"-", description: "When this model would be Incapacitated, if a crew has a model within 2” of this model, they add a dose of Nuka-Cola to their Crew Roster." },
  { perk: "Recruiter", prereq:"-", description: "If at the end of a game, this model was not Incapacitated, its crew may make the Recruit Story Action once for free during the next Story Phase" },
  { perk: "Making a Withdrawal", prereq:"-", description: "When this model would cause an Enemy model to suffer an Injury or Harm, the opposing player may reduce their Stash by 5 Caps per Injury and Harm. For every 5 Caps removed, this model’s crew gains 5 Caps and the Enemy model suffers one less Injury or Harm, as appropriate." },
  { perk: "One Rule", prereq:"-", description: "All Friendly models within this model’s Control Area have the Blitz Perk." },
  { perk: "Cheater", prereq:"-", description: "This model can make the Get Moving, Open Fire, Patch Up, and Rummage Actions while it is Engaged." }, 
  { perk: "Know Your Enemy (Faction)", prereq:"-", description: "When creating the Dice Pool for an Attack Action against an Enemy model from X Faction, this model gains 1 Bonus Dice. If a model gains this Perk, their controller picks the applicable Faction at that time." }, 
  { perk: "Outsider", prereq:"-", description: "This model’s weapon cannot be modified using the Modify Weapons Story Action, and they cannot be upgraded using the Crew Training Story Action. This model does not count toward or affect any Crew Limits. If this model is a Champion, it does not allow a crew to take 5 more Grunts. In addition, the model does not count as a Friendly model for the purposes of Confusion Tests." }, 
  { perk: "Power Armor", prereq:"-", description: "This model gains the following benefits: This model cannot Suffer Fatigue. It can still Take Fatigue by performing Actions, or other effects. This model’s Harm Limit is 4 instead of 3. This model is unaffected by Radiation Tokens." }, 
  { perk: "V.A.T.S.", prereq:"-", description: "After declaring an Attack Action with this model, but before creating the Dice Pool, you may declare the number of Hits you expect to roll. During the Remove Duds step, if your declared number matches the number of Hits left in the Pool, then each Hit counts as 2 Hits instead." }, 
  { perk: "Survivalist", prereq:"-", description: "Whenever this model would Suffer Harm from an Attack, and there is another Friendly model within 3” that has no Harm, the Friendly model may Suffer that Harm instead." }, 
  { perk: "Sticky Fingers", prereq:"-", description: "When this model makes the Rummage Action to Find a Chem, after adding a Chem to the Crew Roster, they may add a second Chem with a Cap cost no higher than the total result of the two rolled dice." }, 
  { perk: "Roboteer (Companion)", prereq:"Champion", description: "When recruiting a Champion, it may gain this Perk at no cost. When a model gains this Perk, you may choose one Companion from the Robot Companions list (pg. 5) to add to your Crew Roster. The Rating of the selected Companion is added to this Champion's Rating. This Perk may only be taken once per model." },
  { perk: "Creature Tamer (Companion)", prereq:"Champion", description: "When recruiting a Champion, it may gain this Perk at no cost. When a model gains this Perk, you may choose one Companion from the Creature Companions list (pg. 8) to add to your Crew Roster. The Rating of the selected Companion is added to this Champions Rating. This Perk may only be taken once per model." }
];

// Critical Effects table
const critData = [
	{crit: "Ignite(X)", effect: "At the start of the Inflict Damage step, the opposing player rolls X Dice. For each one that scores higher than the Target model's Agility, the amount of Damage inflicted is increased by 1." },
	{crit: "Maim", effect: "At the end of the Inflict Damage step, the Target Suffers 1 Harm." },
	{crit: "Pierce", effect: "During the Inflict Damage step, the Target’s Endurance is treated as one lower." },
	{crit: "Suppress(X)", effect: "At the end of the Inflict Damage step, the opposing player rolls X dice. If any of them score higher than the Target’s Intelligence, the Target suffers Fatigue." },
	{crit: "Meltdown", effect: "At the end of the Inflict Damage step, the opposing player makes a Meltdown Test (2E) for the Target. If they score fewer Hits than the amount of Harm that the Target has suffered, the Target suffers an Injury." },
	{crit: "Poison(X)", effect: "At the end of the Inflict Damage step, the opposing player rolls X dice. For each one that scores higher than the Target's Endurance, the Target suffers one Harm with Excess Harm causing an Injury." },
	{crit: "Showstopper", effect: "If this attack inflicts an amount of Damage equal to or greater than the Target's Endurance, any Excess Harm caused will result in the model suffering an Injury." },
	{crit: "Pushback(X)", effect: "At the end of the Inflict Damage step, the opposing player rolls X dice. For each one that scores higher than the Target’s Strength, the Target is moved 1\" directly away from the Active model. If the model cannot move this full distance, it moves as far as it can." },
	{crit: "Tranquilize(X)", effect: "At the end of the Inflict Damage step, the opposing player rolls X dice. For each one that scores higher than the Target's Endurance, the Target suffers one Harm, with Excess Harm causing an Injury. If this causes the Target to be Incapacitated, when you do the Treat the Wounded step, there is no lasting effect, as though you rolled Clean Bill of Health." }
];

let currentSortColumn = "perk"; // Default sort column
let ascendingSort = true; // Default sort order

function renderPerksTable() {
    // Sort the perksData array based on the selected column and order
    const sortedPerks = [...perksData].sort((a, b) => {
        if (currentSortColumn === "perk") {
            return ascendingSort ? a.perk.localeCompare(b.perk) : b.perk.localeCompare(a.perk);
        } else if (currentSortColumn === "prereq") {
            return ascendingSort ? a.prereq.localeCompare(b.prereq) : b.prereq.localeCompare(a.prereq);
        }
    });

    // Get the container where you want to display the table
    const tableContainer = document.getElementById("perks-table-container");
    tableContainer.innerHTML = ""; // Clear existing content

    // Create the table
    const table = document.createElement("table");
    table.classList.add("perks-table");

    // Create the table header
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const headers = [
        { key: "perk", text: "Perk Name (click to sort)" },
        { key: "description", text: "Description" },
        { key: "prereq", text: "Req (click to sort)" }
    ];

    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header.text;
        th.style.cursor = "pointer"; // Indicate it's clickable
        
        // Add click event to sort by this column
        if (header.key !== "description") { // Exclude sorting for "Description"
            th.addEventListener("click", () => {
                if (currentSortColumn === header.key) {
                    ascendingSort = !ascendingSort; // Toggle sort order
                } else {
                    currentSortColumn = header.key;
                    ascendingSort = true; // Default to ascending when switching columns
                }
                renderPerksTable(); // Re-render the table
            });
        }
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create the table body
    const tbody = document.createElement("tbody");
    sortedPerks.forEach(perk => {
        const row = document.createElement("tr");

        const perkCell = document.createElement("td");
        perkCell.textContent = perk.perk;
        row.appendChild(perkCell);

        const descriptionCell = document.createElement("td");
        descriptionCell.textContent = perk.description;
        row.appendChild(descriptionCell);

        const prereqCell = document.createElement("td");
        prereqCell.textContent = perk.prereq;
        row.appendChild(prereqCell);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    tableContainer.appendChild(table);
}

// Initial render
renderPerksTable();

// Function to toggle the visibility of the perks table
document.getElementById("toggle-perks-table").addEventListener("click", function() {
    const tableContainer = document.getElementById("perks-table-container");

    if (tableContainer.style.display === "none" || tableContainer.style.display === "") {
        tableContainer.style.display = "block"; // Show table
    } else {
        tableContainer.style.display = "none"; // Hide table
    }
});


function renderCritsTable() {
  // Sort the critData array alphabetically by crit name (if needed)
  const sortedCrits = critData.sort((a, b) => {
    return a.crit.localeCompare(b.crit); // Sort alphabetically by crit name
  });

  // Get the container where you want to display the table
  const tableContainer = document.getElementById("crits-table-container");

  // Create the table
  const table = document.createElement("table");
  table.classList.add("crits-table");

  // Create the table header
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const headers = ["Crit", "Effect"];
  headers.forEach(headerText => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create the table body
  const tbody = document.createElement("tbody");
  sortedCrits.forEach(crit => {
    const row = document.createElement("tr");

    const critCell = document.createElement("td");
    critCell.textContent = crit.crit;
    row.appendChild(critCell);

    const effectCell = document.createElement("td");
    effectCell.textContent = crit.effect;
    row.appendChild(effectCell);

    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  // Append the table to the container
  tableContainer.appendChild(table);
}

// Call the function to render the crits table
renderCritsTable();

// Function to toggle the visibility of the crits table
document.getElementById("toggle-crits-table").addEventListener("click", function() {
    const tableContainer = document.getElementById("crits-table-container");
    
    // Get the current display value of the table container
    const currentDisplay = window.getComputedStyle(tableContainer).display;
    
    // Toggle the table's display style without affecting the footer
    if (currentDisplay === "none") {
        tableContainer.style.display = "block"; // Show the table
    } else {
        tableContainer.style.display = "none"; // Hide the table
    }
});

function renderQuestTable(faction) {
    const tableContainer = document.getElementById("quest-table-container");
    tableContainer.innerHTML = ""; // Clear previous table before rendering

    if (!questData[faction]) {
        tableContainer.innerHTML = `<p>No quest data available for ${faction}.</p>`;
        return;
    }

    // Create the table
    const table = document.createElement("table");
    table.classList.add("questTable");

    // Create the table header
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const headers = ["Line", "Tier", "Condition", "Target"];
    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create the table body
    const tbody = document.createElement("tbody");

    // Iterate over quests for the selected faction (preserving original order)
    questData[faction].forEach(quest => {
        const row = document.createElement("tr");

        const lineCell = document.createElement("td");
        lineCell.textContent = quest.line;
        row.appendChild(lineCell);

        const tierCell = document.createElement("td");
        tierCell.textContent = quest.tier;
        row.appendChild(tierCell);

        const conditionCell = document.createElement("td");
        conditionCell.textContent = quest.condition;
        row.appendChild(conditionCell);

        const targetCell = document.createElement("td");
        targetCell.textContent = quest.Target;
        row.appendChild(targetCell);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    tableContainer.appendChild(table);
}




//Function to toggle the visibility of the factions weapons table
document.getElementById('toggle-weapon-table').addEventListener('click', function() {
    var tableContainer = document.getElementById('weapon-table-container');
    if (tableContainer.style.display === 'block' || tableContainer.style.display === '') {
        tableContainer.style.display = 'none'; // Show the weapon table
    } else {
        tableContainer.style.display = 'block'; // Hide the weapon table
    }
});







// Example data for different factions
const weaponData = {
	"Brotherhood of Steel": [
    { weapon: "Hand Weapon", type: "Melee", test: "3S", traits: "Fast", effect: "-" },    
	{ weapon: "Ripper", type: "Melee", test: "5S", traits: "Fast", effect: "Maim" },
    { weapon: "Machete", type: "Melee", test: "4S", traits: "-", effect: "Maim" }, 
    { weapon: "Crusader Pistol", type: "Pistol (12\")", test: "4A", traits: "-", effect: "Maim" },
	{ weapon: "Recon Hunting Rifle", type: "Rifle (24\")", test: "4P", traits: "Aim(+1)", effect: "Pierce"},
	{ weapon: "10mm Pistol", type: "Pistol (10\")", test: "3A", traits: "CQB, Fast", effect: "-" },
    { weapon: "Laser Pistol", type: "Pistol (10\")", test: "3A", traits: "CQB", effect: "Ignite (2)" },
    { weapon: "Combat Rifle", type: "Rifle (24\")", test: "4P", traits: "Fast", effect: "Maim" },
    { weapon: "Laser Rifle", type: "Rifle (18\")", test: "4P", traits: "-", effect: "Ignite (1)" },
    { weapon: "Flamer", type: "Heavy (6\")", test: "4S", traits: "Area (2\"), CQB", effect: "Ignite (3)" },
    { weapon: "Gatling Laser", type: "Heavy (16\")", test: "4P", traits: "Area (1\") Slow", effect: "Ignite (2)" },
    { weapon: "Minigun", type: "Heavy (14\")", test: "4S", traits: "Slow, Storm (3)", effect: "Pierce" }
],
	"Legends of the Wasteland": [
    { weapon: "Tranquilizer Pistol", type: "Pistol (10\")", test: "3A", traits: "CQB", effect: "Tranquilize(3)" },
    { weapon: "The Ghoul's Pistol", type: "Pistol (8\")", test: "5A", traits: "CQB", effect: "Maim" },
    { weapon: "The Ghoul's Rifle" ,type: "Rifle (18\")", test: "5P", traits: "Fast", effect: "Suppress(2)"},
    { weapon: "Claws and Jaws", type: "Melee", test: "4S", traits: "Fast", effect: "Suppress(1)"  },
    { weapon: "Iron Fist", type: "Melee", test: "5S", traits: "Fast", effect: "Maim" },
    { weapon: "PLOY ONLY: Nuka-Nuke Launcher", type: "Heavy(20\")", test: "5S", traits: "CQB Area(2\") Irradiate One-and-Done", effect: "-" },
    { weapon: "Splattercannon", type: "Rifle (22\")", test: "5P", traits: "Fast", effect: "Suppress(3)" },
    { weapon: "Bladed Commie Whacker", type: "Melee", test: "2S", traits: "Fast", effect: "Pierce" },
    { weapon: "The Real Deal", type: "Melee", test: "4S", traits: "Fast", effect: "Maim" },
    { weapon: "Heavy Combat Shotgun", type: "Rifle(10\")", test: "5P", traits: "Fast Storm(1)", effect: "Maim" },
    { weapon: "Suppressing Handmade Rifle", type: "Rifle(22\")", test: "4P", traits: "Fast", effect: "Suppress(3)" },
    { weapon: "Disciple's Blade", type: "Melee", test: "4S", traits: "Fast", effect: "Maim" },
    { weapon: "Plasma Pistol", type: "Pistol(12\")", test: "4A", traits: "CQB Fast", effect: "Meltdown" },
    { weapon: "Powerful Combat Rifle", type: "Rifle(24\")", test: "5P", traits: "Fast", effect: "Maim" },
    { weapon: "Pipe Revolver", type: "Pistol(12\")", test: "3A", traits: "Aim(+1) CQB", effect: "Pierce" },
    { weapon: "Laser Rifle", type: "Rifle(18\")", test: "4P", traits: "-", effect: "Ignite(1)" },
    { weapon: "Power Armor Punch", type: "Melee", test: "4S", traits: "-", effect: "Pushback(3)"  }
],
	"Gunners": [
    { weapon: "Assaultron Claws", type: "Melee", test: "4S", traits: "Fast", effect: "Maim" },
    { weapon: "Hand Weapon", type: "Melee", test: "3S", traits: "Fast", effect: "-" },
    { weapon: "Ripper", type: "Melee", test: "5S", traits: "Fast", effect: "Maim" },
    { weapon: "Stun Baton", type: "Melee", test: "4S", traits: "Suppress (2)", effect: "-" },
    { weapon: "10mm Pistol", type: "Pistol (10\")", test: "3A", traits: "CQB, Fast", effect: "-" },
    { weapon: "Assaultron Eye Beam", type: "Pistol (6\")", test: "5A", traits: "CQB, Slow", effect: "Maim" },
    { weapon: "Laser Pistol", type: "Pistol (10\")", test: "3A", traits: "CQB", effect: "Ignite (2)" },
    { weapon: "Plasma Pistol", type: "Pistol (12\")", test: "4A", traits: "CQB, Fast", effect: "Meltdown" },
    { weapon: "Assault Rifle", type: "Rifle (20\")", test: "4P", traits: "Storm (1)", effect: "Suppress (2)" },
    { weapon: "Combat Rifle", type: "Rifle (24\")", test: "4P", traits: "Fast", effect: "Maim" },
    { weapon: "Laser Rifle", type: "Rifle (18\")", test: "4P", traits: "-", effect: "Ignite (1)" },
    { weapon: "Plasma Rifle", type: "Rifle (18\")", test: "4P", traits: "-", effect: "Meltdown" },
    { weapon: "Precision Combat Rifle", type: "Rifle (30\")", test: "4P", traits: "Aim (+2)", effect: "Suppress (2)" },
    { weapon: "Missile Launcher", type: "Heavy (26\")", test: "5S", traits: "Area (3”), Slow", effect: "Maim" },
    { weapon: "Frag Grenades", type: "Grenade (10\")", test: "3A", traits: "Area (1”), CQB", effect: "Suppress (2)" }
],
	"Super Mutants": [
    { weapon: "Claws & Jaws", type: "Melee", test: "4S", traits: "Fast", effect: "Suppress (1)" },
    { weapon: "Hand Weapon", type: "Melee", test: "3S", traits: "Fast", effect: "-" },
    { weapon: "Sledgehammer", type: "Melee", test: "4S", traits: "Unwieldy (5), Wind Up", effect: "Maim" },
    { weapon: "Super Sledger", type: "Melee", test: "6S", traits: "Unwieldy (6)", effect: "Maim" },    
	{ weapon: "Heavy Pipe Pistol", type: "Pistol (8\")", test: "4A", traits: "CQB", effect: "Pierce" },
    { weapon: "Pipe Pistol", type: "Pistol (8\")", test: "4A", traits: "CQB", effect: "-" },
	{ weapon: "Plasma Pistol", type: "Pistol (12\")", test: "4A", traits: "CQB FAST", effect: "Meltdown"},
    { weapon: "Assault Rifle", type: "Rifle (20\")", test: "4P", traits: "Storm (1)", effect: "Maim" },
    { weapon: "Automatic Pipe Rifle", type: "Rifle (16\")", test: "3P", traits: "Aim (+1), Storm (1)", effect: "Suppress (2)" },
	{ weapon: "Laser Rifle", type: "Rifle(18\")", test: "4P", traits: "-", effect: "Ignite(1)" },
	{ weapon: "Precision Pipe Rifle", type: "Rifle (20\")", test: "3P", traits: "Aim (+2)", effect: "Pierce" },
    { weapon: "Short Hunting Rifle", type: "Rifle (14\")", test: "3P", traits: "-", effect: "Pierce" },
	{ weapon: "Minigun", type: "Heavy (14\")", test: "4S", traits: "Slow, Storm (3)", effect: "Pierce" },
    { weapon: "Molotov Cocktails", type: "Grenade (8\")", test: "2A", traits: "Area (2\"), CQB", effect: "Ignite (2)" }
],	
	"Wasteland Raiders": [
    { weapon: "Hand Weapon", type: "Melee", test: "3S", traits: "Fast", effect: "-" },
    { weapon: "Machete", type: "Melee", test: "4S", traits: "-", effect: "Maim" },
    { weapon: "Baseball Bat", type: "Melee", test: "3S", traits: "Wind Up", effect: "Suppress(1)" },
	{ weapon: ".44 Pistol", type: "Pistol(14\")", test: "4A", traits: "Aim(+1)", effect: "Pierce"},
    { weapon: "Pipe Pistol", type: "Pistol (8\")", test: "4A", traits: "CQB", effect: "-" },
    { weapon: "Pipe Revolver", type: "Pistol (12\")", test: "3A", traits: "Aim (+1), CQB", effect: "Pierce" },
    { weapon: "Assault Rifle", type: "Rifle (20\")", test: "4P", traits: "Storm (1)", effect: "Maim" },
    { weapon: "Combat Rifle", type: "Rifle (24\")", test: "4P", traits: "Fast", effect: "Maim" },
    { weapon: "Automatic Pipe Rifle", type: "Rifle (16\")", test: "3P", traits: "Aim (+1), Storm (1)", effect: "Suppress (2)" },
    { weapon: "Hunting Rifle", type: "Rifle (22\")", test: "3P", traits: "Aim (+1)", effect: "Pierce" },
    { weapon: "Pipe Rifle", type: "Rifle (20\")", test: "3P", traits: "Aim (+1)", effect: "Suppress (1)" },
    { weapon: "Sawn-off Shotgun", type: "Rifle (8\")", test: "4P", traits: "CQB, Storm (2)", effect: "Maim" },
    { weapon: "Short Hunting Rifle", type: "Rifle (14\")", test: "3P", traits: "-", effect: "Pierce" },
    { weapon: "Flamer", type: "Heavy (6\")", test: "4S", traits: "Area (2\"), CQB", effect: "Ignite (3)" },
    { weapon: "Minigun", type: "Heavy (14\")", test: "4S", traits: "Slow, Storm (3)", effect: "Pierce" },
	{ weapon: "Missile Launcher", type: "Heavy(26\")", test: "5S", traits: "Area(3\") Slow", effect: "Maim"},
	{ weapon: "Baseball Grenades", type: "Grenade(8\")", test: "3A", traits: "CQB Area(2\") Big Swing(6\")", effect: "Suppress(1)"},
    { weapon: "Molotov Cocktails", type: "Grenade (8\")", test: "2A", traits: "Area (2\"), CQB", effect: "Ignite (2)" }
],
	"Survivors": [
    { weapon: "Baseball Bat", type: "Melee", test: "3S", traits: "Wind Up", effect: "Suppress(1)" },
    { weapon: "Claws & Jaws", type: "Melee", test: "4S", traits: "Fast", effect: "Suppress(1)" },
    { weapon: "Hand Weapon", type: "Melee", test: "3S", traits: "Fast", effect: "-" },
	{ weapon: "Officer's Sword", type: "Melee", test: "4S", traits: "Fast", effect: "Pierce"},
	{ weapon: "Flare Gun", type: "-", test: "-", traits: "Distress Signal)", effect: "-"},
    { weapon: "Automatic Pipe Rifle", type: "Rifle (16\")", test: "3P", traits: "Aim (+1), Storm(1)", effect: "Suppress (2)" },
	{ weapon: "Pipe Bolt-action Rifle", type: "Rifle (20\")", test: "3P", traits: "Aim (+1)", effect: "Pierce"},
	{ weapon: "Precision Hunting Rifle", type: "Rifle (24\")", test: "3P", traits: "Aim(+2)", effect: "Pierce"},
    { weapon: "Combat Rifle", type: "Rifle (24\")", test: "4P", traits: "Fast", effect: "Maim" },
    { weapon: "Double-barrelled Shotgun", type: "Rifle (12\")", test: "3P", traits: "Storm(2)", effect: "Maim" },
    { weapon: "Hunting Rifle", type: "Rifle (22\")", test: "3P", traits: "Aim (+1)", effect: "Pierce" },
    { weapon: "Sawn-off Shotgun", type: "Rifle (8\")", test: "4P", traits: "CQB, Storm(2)", effect: "Maim" },
	{ weapon: "Junk Jet", type: "Heavy(10\")", test: "3S +1 per Part used", traits: "Creative Projectiles", effect: "Suppress(1) +1 per Part Used"},
	{ weapon: "Baseball Grenades", type: "Grenade(8\")", test: "3A", traits: "CQB Area(2\") Big Swing(6\")", effect: "Suppress(1)"}
],
    "The Operators": [
        { weapon: "Baseball Bat", type: "Melee", test: "3S", traits: "WindUp", effect: "Suppress (1)" },
		{ weapon: "Hand Weapon", type: "Melee", test: "3S", traits: "Fast", effect: "-" },
		{ weapon: "Shishkebab", type: "Melee", test: "4S", traits: "-", effect: "Ignite(2)" },
		{ weapon: "10mm Pistol", type: "Pistol(10\")", test: "3A", traits: "CQB Fast", effect: "-" },
		{ weapon: "Plasma Pistol", type: "Pistol(12\")", test: "4A", traits: "CQB Fast", effect: "Meltdown" },
		{ weapon: "Combat Rifle", type: "Rifle(24\")", test: "4P", traits: "Fast", effect: "Maim" },
		{ weapon: "Combat Shotgun", type: "Rifle(10\")", test: "4P", traits: "Storm(1)", effect: "Maim" },
		{ weapon: "Handmade Rifle", type: "Rifle(18\")", test: "4P", traits: "Fast", effect: "Suppress(2)" },
		{ weapon: "Marksman's Handmade Rifle", type: "Rifle(30\")", test: "2P", traits: "Aim(+3)", effect: "Suppress(3)" },
		{ weapon: "Syringer", type: "Rifle(16\")", test: "2P", traits: "Aim(+2)", effect: "Poison(3)" },
		{ weapon: "Missle Launcher", type: "Heavy(26\")", test: "5S", traits: "Area(3\") Slow", effect: "Maim" },
		{ weapon: "Frag Grenades", type: "Grenade(10\")", test: "3A", traits: "Area(1\") CQB", effect: "Suppress(2)" }

    ],
    "The Pack": [
        { weapon: "Baseball Bat", type: "Melee", test: "3S", traits: "WindUp", effect: "Suppress (1)" },
		{ weapon: "Deathclaw Gauntlet", type: "Melee", test: "5S", traits: "WindUp", effect: "Pierce" },
		{ weapon: "Hand Weapon", type: "Melee", test: "3S", traits: "Fast", effect: "-" },
		{ weapon: "Sledgehammer", type: "Melee", test: "4S", traits: "Unwieldy(5) WindUp", effect: "Maim" },
		{ weapon: "10mm Pistol", type: "Pistol(10\")", test: "3A", traits: "CQB Fast", effect: "-" },
		{ weapon: "Pipe Revolver", type: "Pistol(12\")", test: "3A", traits: "Aim(+1) CQB", effect: "Pierce" },
		{ weapon: "Sawn-off Shotgun", type: "Rifle(8\")", test: "4P", traits: "CQB Storm(2)", effect: "Maim" },
		{ weapon: "Light Handmade Rifle", type: "Rifle(12\")", test: "3P", traits: "Bladed Fast", effect: "Suppress(1)" },
		{ weapon: "Handmade Rifle", type: "Rifle(18\")", test: "4P", traits: "Fast", effect: "Suppress(2)" },
		{ weapon: "Automatic Handmade Rifle", type: "Rifle(14\")", test: "3P", traits: "Fast Storm(2)", effect: "Suppress(2)" },
		{ weapon: "Flamer", type: "Heavy(6\")", test: "4S", traits: "Area(2\") CQB", effect: "Ignite(3)" },
		{ weapon: "Predator Grenades", type: "Grenade(8\")", test: "4A", traits: "Area(3\") CQB", effect: "Maim" }

    ],
    "The Disciples": [
        { weapon: "Hand Weapon", type: "Melee", test: "3S", traits: "Fast", effect: "-" },
        { weapon: "Machete", type: "Melee", test: "4S", traits: "-", effect: "Maim" },
		{ weapon: ".44 Pistol", type: "Pistol(14\")", test: "4A", traits: "Aim(+1)", effect: "Pierce" },
		{ weapon: "10mm Pistol", type: "Pistol(10\")", test: "3A", traits: "CQB Fast", effect: "-" },
		{ weapon: "Pipe Revolver", type: "Pistol(12\")", test: "3A", traits: "Aim(+1) CQB", effect: "Pierce" },
		{ weapon: "Handmade Rifle", type: "Rifle(18\")", test: "4P", traits: "Fast", effect: "Suppress(2)" },
		{ weapon: "Hunting Rifle", type: "Rifle(22\")", test: "3P", traits: "Aim(+1)", effect: "Pierce" },
		{ weapon: "Light Handmade Rifle", type: "Rifle(12\")", test: "3P", traits: "Bladed Fast", effect: "Suppress(1)" },
		{ weapon: "Marksman's Handmade Rifle", type: "Rifle(30\")", test: "2P", traits: "Aim(+3)", effect: "Suppress(3)" },
		{ weapon: "Precision Hunting Rifle", type: "Rifle(24\")", test: "3P", traits: "Aim(+2)", effect: "Pierce" },
		{ weapon: "Ranger's Hunting Rifle", type: "Rifle(18\")", test: "3P", traits: "Aim(+1) Bladed", effect: "Pierce" },
		{ weapon: "Short Hunting Rifle", type: "Rifle(14\")", test: "3P", traits: "-", effect: "Pierce" },
		{ weapon: "Nuka Grenade", type: "Grenade(8\")", test: "5A", traits: "Area(2\") CQB Irradiate OneAndDone", effect: "Maim" }

    ],
	"Cult of the Mothman": [
        { weapon: "Hand Weapon", type: "Melee", test: "3S", traits: "Fast", effect: "-" },
        { weapon: "Machete", type: "Melee", test: "4S", traits: "-", effect: "Maim" },
		{ weapon: ".44 Pistol", type: "Pistol(14\")", test: "4A", traits: "Aim(+1)", effect: "Pierce" },
		{ weapon: "10mm Pistol", type: "Pistol(10\")", test: "3A", traits: "CQB Fast", effect: "-" },
		{ weapon: "Mothman Sonic Wave", type: "Melee", test: "5S", traits: "Pulse", effect: "Pushback(2)" },
		{ weapon: "Heavy Pipe Pistol", type: "Pistol(8\")", test: "4A", traits: "CQB", effect: "Pierce" },
		{ weapon: "Pipe Pistol", type: "Pistol (8\")", test: "4A", traits: "CQB", effect: "-" },
		{ weapon: "Mothman Screech", type: "Pistol(10\")", test: "5A", traits: "Pulse", effect: "Pushback(1)" },
		{ weapon: "Pipe Revolver", type: "Pistol(12\")", test: "3A", traits: "Aim(+1) CQB", effect: "Pierce" },
		{ weapon: "Combat Shotgun", type: "Rifle(10\")", test: "4P", traits: "Storm(1)", effect: "Maim" },
		{ weapon: "Handmade Rifle", type: "Rifle(18\")", test: "4P", traits: "Fast", effect: "Suppress(2)" },
		{ weapon: "Double-barrelled Shotgun", type: "Rifle (12\")", test: "3P", traits: "Storm (2)", effect: "Maim" },
		{ weapon: "Hardened Sniper Rifle",type: "Rifle(36\")", test: "2P", traits: "Aim(3)", effect: "Showstopper" },
		{ weapon: "Flamer", type: "Heavy(6\")", test: "4S", traits: "Area(2\") CQB", effect: "Ignite(3)" },
		{ weapon: "Molotov Cocktails", type: "Grenade (8\")", test: "2A", traits: "Area (2\"), CQB", effect: "Ignite (2)" }
    ],
	"Creature Companions": [
        { weapon: "Bloodbug Proboscis", type: "Melee", test: "4S", traits: "-", effect: "Poison(2)"},
        { weapon: "Claws & Jaws", type: "Melee", test: "4S", traits: "Fast", effect: "Suppress(1)" },
		{ weapon: "Deathclaw Claws", type: "Melee", test: "5S", traits: "-", effect: "Maim Pushback(1)" },
		{ weapon: "Doe Shove", type: "Melee", test: "2S", traits: "-", effect: "-"},
		{ weapon: "Radstag Antlers", type: "Melee", test: "4S", traits: "Wind Up", effect: "Pierce"},
		{ weapon: "Trample", type: "Melee", test: "4S", traits: "Wind Up", effect: "Pushback(3)"},
		{ weapon: "Deathclaw Claws", type: "Melee", test: "5S", traits: "-", effect: "Maim Pushback(1)"},
		{ weapon: "Bloatfly Larvae", type: "Pistol(10\")", test: "2A", traits: "Fast", effect: "-" }
    ],
	"Robot Companions": [
        { weapon: "Robot Bash", type: "Melee", test: "4S", traits: "-", effect: "-" },
        { weapon: "Shock Hand", type: "Melee", test: "4S", traits: "Non-lethal Fast", effect: "Suppress(1)" },
		{ weapon: "Various Appendages", type: "Melee", test: "4S", traits: "Fast", effect: "Maim Suppress(2) Tranquilize(1)" },
		{ weapon: "Eyebot Laser", type: "Pistol (10\")", test: "3A", traits: "CQB", effect: "Ignite(1)" },
		{ weapon: "Nuka Dispenser", type: "Pistol (8\")", test: "4P", traits: "Fast", effect: "Suppress(1)" },
		{ weapon: "Nail Gun", type: "Rifle (12\")", test: "3P", traits: "CQB Fast", effect: "Pierce" },
		{ weapon: "Robot Lasers", type: "Rifle (16\")", test: "4P", traits: "CQB Fast", effect: "Suppress(1)" },
		{ weapon: "Securitron SMG", type: "Rife(12\")", test: "3P", traits: "Storm(3)", effect: "Suppress(2)" },
		{ weapon: "Flamer", type: "Heavy(6\")", test: "4S", traits: "Area(2\") CQB", effect: "Ignite(3)" },
		{ weapon: "Hand Cryojet", type: "Heavy (6\")", test: "3S", traits: "Area(2\") CQB Slow", effect: "Suppress(1)" },
		{ weapon: "Shoulder Launchers", type: "Heavy(12\")", test: "3S", traits: "Area(2\")", effect: "Maim" }
    ]	
};

const questData = {
		"Brotherhood of Steel": [
		{line: "Ad Victoriam", tier: "1a", condition: "You use a standard Ploy", target: "3"},
		{line: "Ad Victoriam", tier: "1b", condition: "You win a game as the Underdong", target: "1"},
		{line: "Ad Victoriam", tier: "1c", condition: "Your crew gains at least 4 XP in a single game", target: "3"},
		{line: "Ad Victoriam", tier: "2a", condition: "One of your models Incapacitates an Enemy model with a Ranged Attack", target: "10"},
		{line: "Ad Victoriam", tier: "2b", condition: "You play a game as the Attacker", target: "3"},
		{line: "Ad Victoriam", tier: "2c", condition: "Your crew has at least 6 Reach", target: "1"},
		{line: "Ad Victoriam", tier: "3a", condition: "One of your models Incapacitates an Enemy Leader with a Ranged Attack", target: "3"},
		{line: "Ad Victoriam", tier: "3b", condition: "At the end of the Story Phase, you have 6 Facilities on your Home Turf", target: "3"},
		{line: "Ad Victoriam", tier: "3c", condition: "In a game against you, an Enemy model Fails a Confusion Test", target: "6"},

		{line: "By Steel", tier: "1a", condition: "You use the Recruit Story Action to purchase a Knight", target: "1"},
		{line: "By Steel", tier: "1b", condition: "You use the Vertibird Drop Ploy", target: "3"},
		{line: "By Steel", tier: "1c", condition: "You choose to play the Duel Objective", target: "1"},
		{line: "By Steel", tier: "2a", condition: "You use the Recruit Story Action to purchase a Knight", target: "1"},
		{line: "By Steel", tier: "2b", condition: "You use the Judge Captives Story Action", target: "1"},
		{line: "By Steel", tier: "2c", condition: "One of your models passes a Confusion Test", target: "6"},
		{line: "By Steel", tier: "3a", condition: "You use the Recruit Story Action to purchase a Knight", target: "1"},
		{line: "By Steel", tier: "3b", condition: "At least 5 of your models have a perk that they did not start the campaign with", target: "1"},
		{line: "By Steel", tier: "3c", condition: "One of your models Incapacitates an Enemy Champion with a Ranged Attack.", target: "8"},

		{line: "Protect Humanity From Itself", tier: "1a", condition: "A Scribe ends a game without being Incapacitated.", target: "6"},
		{line: "Protect Humanity From Itself", tier: "1b", condition: "You use the Chain that Binds Ploy.", target: "3"},
		{line: "Protect Humanity From Itself", tier: "1c", condition: "A model in your crew chooses Find Caps and Parts when making a Rummage Action", target: "8"},
		{line: "Protect Humanity From Itself", tier: "2a", condition: "A Scribe in your crew gains a Perk.", target: "4"},
		{line: "Protect Humanity From Itself", tier: "2b", condition: "You modify a weapon", target: "4"},
		{line: "Protect Humanity From Itself", tier: "2c", condition: "Your crew Incapacitates a model with at least one Weapon Modification.", target: "4"},
		{line: "Protect Humanity From Itself", tier: "3a", condition: "A Scribe in your crew has 9 Intelligence.", target: "1"},
		{line: "Protect Humanity From Itself", tier: "3b", condition: "A Scribe chooses to gain Caps and Parts when they make the Rummage Action.", target: "8"},
		{line: "Protect Humanity From Itself", tier: "3c", condition: "Your crew has 6 Facilities on their Home Turf.", target: "3"}

	],
		"Super Mutants": [
		{line: "Survival of the Fittest", tier: "1a", condition: "You Upgrade a model’s Strength or Endurance.", target: "4"},
		{line: "Survival of the Fittest", tier: "1b", condition: "You modify a weapon.", target: "3"},
		{line: "Survival of the Fittest", tier: "1c", condition: "A model in the crew Incapacitates an Enemy Champion.", target: "4"},
		{line: "Survival of the Fittest", tier: "2a", condition: "A model in the crew gains a Strength or Endurance Perk.", target: "2"},
		{line: "Survival of the Fittest", tier: "2b", condition: "An Enemy model Fails a Confusion Test.", target: "5"},
		{line: "Survival of the Fittest", tier: "2c", condition: "You end a game with fewer Incapacitated models than your opponent.", target: "3"},
		{line: "Survival of the Fittest", tier: "3a", condition: "You use a Super Mutant Ploy.", target: "6"},
		{line: "Survival of the Fittest", tier: "3b", condition: "You modify a weapon that already has two Modifications.", target: "3"},
		{line: "Survival of the Fittest", tier: "3c", condition: "You have a model with 8 Upgrades.", target: "1"},

		{line: "Ours by Right", tier: "1a", condition: "You build a Facility.", target: "2"},
		{line: "Ours by Right", tier: "1b", condition: "The crew earns at least 3 XP in a single game.", target: "2"},
		{line: "Ours by Right", tier: "1c", condition: "A model in the crew passes a Confusion Test.", target: "5"},
		{line: "Ours by Right", tier: "2a", condition: "Your crew has at least 5 Reach at the end of the Story Phase.", target: "3"},
		{line: "Ours by Right", tier: "2b", condition: "Your crew finds a dose of Rare Chems.", target: "4"},
		{line: "Ours by Right", tier: "2c", condition: "You force another player to become Nomadic.", target: "1"},
		{line: "Ours by Right", tier: "3a", condition: "Your crew has at least 10 Reach.", target: "1"},
		{line: "Ours by Right", tier: "3b", condition: "You play a Raid Objective as the Attacker.", target: "3"},
		{line: "Ours by Right", tier: "3c", condition: "You have at least 100 Caps in your Stash.", target: "1"},

		{line: "Dawn of a New Age", tier: "1a", condition: "You end a game with a model within 3” of at least 2 Objective or Search Tokens", target: "2"},
		{line: "Dawn of a New Age", tier: "1b", condition: "You choose to play the Hunting Party Objective", target: "1"},
		{line: "Dawn of a New Age", tier: "1c", condition: "A model in the crew gains a Perk.", target: "4"},
		{line: "Dawn of a New Age", tier: "2a", condition: "Your crew has at least 6 Scouting Points.", target: "1"},
		{line: "Dawn of a New Age", tier: "2b", condition: "You take the Devour Captive Story Action.", target: "1"},
		{line: "Dawn of a New Age", tier: "2c", condition: "A model in the crew Incapacitates an Enemy Champion with a Melee Attack.", target: "4"},
		{line: "Dawn of a New Age", tier: "3a", condition: "A model in the crew Incapacitates an Enemy Leader.", target: "3"},
		{line: "Dawn of a New Age", tier: "3b", condition: "You end a Story Phase with a Monument on your Home Turf.", target: "3"},
		{line: "Dawn of a New Age", tier: "3c", condition: "At least 7 of your models have a Perk that they did not start with.", target: "1"}

	],
		"Wasteland Raiders": [
		{line: "Ours for the Taking", tier: "1a", condition: "You play a Pillage Objective as the Attacker.", target: "2"},
		{line: "Ours for the Taking", tier: "1b", condition: "Your crew has at least 6 Scouting Points at the end of a Story Phase.", target: "1"},
		{line: "Ours for the Taking", tier: "1c", condition: "A model in your crew makes a Rummage Action.", target: "10"},
		{line: "Ours for the Taking", tier: "2a", condition: "You play an Ambush Objective as the Attacker.", target: "2"},
		{line: "Ours for the Taking", tier: "2b", condition: "Play a game as the Underdog.", target: "2"},
		{line: "Ours for the Taking", tier: "2c", condition: "A model in your crew takes the Rummage Action.", target: "10"},
		{line: "Ours for the Taking", tier: "3a", condition: "You have at least 100 Caps in your Stash.", target: "1"},
		{line: "Ours for the Taking", tier: "3b", condition: "You have 6 Facilities on your Home Turf.", target: "5"},
		{line: "Ours for the Taking", tier: "3c", condition: "A model in your crew makes the Rummage Action.", target: "10"},

		{line: "It's Party Time", tier: "1a", condition: "The crew earns 1 XP using Failing Forward.", target: "3"},
		{line: "It's Party Time", tier: "1b", condition: "A model in the crew uses a Chem.", target: "16"},
		{line: "It's Party Time", tier: "1c", condition: "You play a game with the Scavenge Chems Objective.", target: "2"},
		{line: "It's Party Time", tier: "2a", condition: "You have a Chem Lab on your Home Turf.", target: "1"},
		{line: "It's Party Time", tier: "2b", condition: "Your crew purchases a Common Chem during the Prepare Advantages step.", target: "5"},
		{line: "It's Party Time", tier: "2c", condition: "You find a Rare Chem while making a Rummage Action.", target: "3"},
		{line: "It's Party Time", tier: "3a", condition: "You use a Raiders Ploy.", target: "8"},
		{line: "It's Party Time", tier: "3b", condition: "Your crew makes the Craft Chems Story Action.", target: "4"},
		{line: "It's Party Time", tier: "3c", condition: "Your crew uses a Rare Chem.", target: "6"},

		{line: "Make Them Fear Us", tier: "1a", condition: "You take the Sell Prisoners Story Action.", target: "1"},
		{line: "Make Them Fear Us", tier: "1b", condition: "You Upgrade a model.", target: "5"},
		{line: "Make Them Fear Us", tier: "1c", condition: "One of your models Incapacitates an Enemy model.", target: "10"},
		{line: "Make Them Fear Us", tier: "2a", condition: "The crew takes the Recruit Story Action.", target: "4"},
		{line: "Make Them Fear Us", tier: "2b", condition: "You modify a weapon.", target: "4"},
		{line: "Make Them Fear Us", tier: "2c", condition: "You Incapacitate an Enemy model with at least 3 of your models within 6”.", target: "4"},
		{line: "Make Them Fear Us", tier: "3a", condition: "An Enemy model Fails a Confusion Test.", target: "10"},
		{line: "Make Them Fear Us", tier: "3b", condition: "You force another crew to become Nomadic.", target: "1"},
		{line: "Make Them Fear Us", tier: "3c", condition: "A model in your crew attains a S.P.E.C.I.A.L. statistic of 9.", target: "1"}

	],
		"Survivors": [
		{line: "Dear Hearts and Gentle People", tier: "1a", condition: "A model in the crew uses the Patch Up Action.", target: "8"},
		{line: "Dear Hearts and Gentle People", tier: "1b", condition: "A Rare Chem is added to the Crew Roster.", target: "2"},
		{line: "Dear Hearts and Gentle People", tier: "1c", condition: "You purchase a Modification for a Pistol or Rifle.", target: "3"},
		{line: "Dear Hearts and Gentle People", tier: "2a", condition: "Your crew takes the Barter Story Action.", target: "4"},
		{line: "Dear Hearts and Gentle People", tier: "2b", condition: "You use the No Place Like Home Survivors Ploy.", target: "3"},
		{line: "Dear Hearts and Gentle People", tier: "2c", condition: "You Upgrade a model.", target: "4"},
		{line: "Dear Hearts and Gentle People", tier: "3a", condition: "You end a game with fewer Incapacitated models than your opponent.", target: "3"},
		{line: "Dear Hearts and Gentle People", tier: "3b", condition: "A Champion recovers from Serious Injuries.", target: "5"},
		{line: "Dear Hearts and Gentle People", tier: "3c", condition: "Your crew has 5 Champions.", target: "1"},

		{line: "My Home Town", tier: "1a", condition: "You build a Facility using the Expand Story Action.", target: "1"},
		{line: "My Home Town", tier: "1b", condition: "You have at least 50 Caps in your Stash.", target: "1"},
		{line: "My Home Town", tier: "1c", condition: "You use a Survivors Ploy.", target: "3"},
		{line: "My Home Town", tier: "2a", condition: "Your crew Incapacitates an Enemy model.", target: "10"},
		{line: "My Home Town", tier: "2b", condition: "A model in your crew gains a Charisma or Intelligence Perk.", target: "4"},
		{line: "My Home Town", tier: "2c", condition: "The crew takes the Recruit Story Action.", target: "5"},
		{line: "My Home Town", tier: "3a", condition: "Your crew has at least 10 Reach.", target: "1"},
		{line: "My Home Town", tier: "3b", condition: "You take the Redeem Captive Story Action.", target: "2"},
		{line: "My Home Town", tier: "3c", condition: "An Enemy model Fails a Confusion Test.", target: "6"},

		{line: "Every Time That I Return", tier: "1a", condition: "Your crew earns at least 4 XP in a single game.", target: "3"},
		{line: "Every Time That I Return", tier: "1b", condition: "You modify a weapon.", target: "3"},
		{line: "Every Time That I Return", tier: "1c", condition: "You take the Scout Story Action.", target: "3"},
		{line: "Every Time That I Return", tier: "2a", condition: "You take the Settle Story Action.", target: "3"},
		{line: "Every Time That I Return", tier: "2b", condition: "You Upgrade one of your models.", target: "5"},
		{line: "Every Time That I Return", tier: "2c", condition: "Your crew Incapacitates an Enemy model with a Ranged Attack.", target: "10"},
		{line: "Every Time That I Return", tier: "3a", condition: "A model in your Crew resolves a 7+ on the Crew Training Table.", target: "4"},
		{line: "Every Time That I Return", tier: "3b", condition: "You rescue a Captured model in a Rescue Objective.", target: "1"},
		{line: "Every Time That I Return", tier: "3c", condition: "A model in your crew attains a S.P.E.C.I.A.L. statistic of 9.", target: "1"}

	],
		"Gunners": [
		{line: "The Bottom Line", tier: "1a", condition: "One of your models makes a Search Action.", target: "6"},
		{line: "The Bottom Line", tier: "1b", condition: "Your crew takes the Barter Story Action.", target: "4"},
		{line: "The Bottom Line", tier: "1c", condition: "You win a game.", target: "1"},
		{line: "The Bottom Line", tier: "2a", condition: "A model in your crew gains a Perception Perk.", target: "5"},
		{line: "The Bottom Line", tier: "2b", condition: "You purchase a Weapon Modification worth at least 3 parts.", target: "3"},
		{line: "The Bottom Line", tier: "2c", condition: "You Upgrade one of your models.", target: "5"},
		{line: "The Bottom Line", tier: "3a", condition: "You have at least 100 Caps in your Stash.", target: "1"},
		{line: "The Bottom Line", tier: "3b", condition: "You purchase the third Modification for a weapon.", target: "3"},
		{line: "The Bottom Line", tier: "3c", condition: "You use a Standard Ploy.", target: "4"},
		{line: "The Bottom Line", tier: "3d", condition: "A model in the Crew uses the Patch Up Action.", target: "10"},

		{line: "Guns for Hire", tier: "1a", condition: "A model in the Crew causes Excess Harm.", target: "2"},
		{line: "Guns for Hire", tier: "1b", condition: "You purchase a Modification for a Pistol or Rifle.", target: "3"},
		{line: "Guns for Hire", tier: "1c", condition: "One of your models Incapacitates an Enemy model with a Ranged Attack.", target: "10"},
		{line: "Guns for Hire", tier: "2a", condition: "A model in the Crew gains a Perk.", target: "8"},
		{line: "Guns for Hire", tier: "2b", condition: "The crew earns at least three Experience Points in a single game.", target: "2"},
		{line: "Guns for Hire", tier: "2c", condition: "You win the Ambush scenario.", target: "3"},
		{line: "Guns for Hire", tier: "2d", condition: "Your crew has at least 3 Control in each Location.", target: "1"},
		{line: "Guns for Hire", tier: "3a", condition: "You win a game on the opposing crew’s Home Turf.", target: "2"},
		{line: "Guns for Hire", tier: "3b", condition: "One of your models Incapacitates an Enemy Champion with a Ranged Attack.", target: "8"},
		{line: "Guns for Hire", tier: "3c", condition: "At least 7 of your models have a Perk that they did not start with.", target: "1"},

		{line: "Take the High Ground", tier: "1a", condition: "Your crew has at least 2 Scouts in three different Locations.", target: "1"},
		{line: "Take the High Ground", tier: "1b", condition: "You choose the Land Grab Scenario.", target: "3"},
		{line: "Take the High Ground", tier: "1c", condition: "A model in your crew chooses Find Caps and Parts when making an Action: Rummage.", target: "10"},
		{line: "Take the High Ground", tier: "2a", condition: "You win the Land Grab Scenario as the Attacker.", target: "3"},
		{line: "Take the High Ground", tier: "2b", condition: "Your crew has at least 3 Control in three different Locations.", target: "1"},
		{line: "Take the High Ground", tier: "2c", condition: "You use a Gunners Ploy.", target: "4"},
		{line: "Take the High Ground", tier: "2d", condition: "One of your models passes a Confusion Test.", target: "6"},
		{line: "Take the High Ground", tier: "3a", condition: "You win a game on your Home Turf.", target: "3"},
		{line: "Take the High Ground", tier: "3b", condition: "Your crew has at least 10 Control in any Location.", target: "1"},
		{line: "Take the High Ground", tier: "3c", condition: "The crew takes the Recruit Story Action.", target: "5"},
		{line: "Take the High Ground", tier: "3d", condition: "An Enemy model fails a Confusion Test.", target: "10"}

	],
		"The Pack": [
		{line: "Rumble In The Jungle", tier: "1a", condition: "You play a game as the Attacker.", target: "3"},
		{line: "Rumble In The Jungle", tier: "1b", condition: "You Upgrade a model.", target: "5"},
		{line: "Rumble In The Jungle", tier: "1c", condition: "You have at least 2 Scouting Points.", target: "1"},
		{line: "Rumble In The Jungle", tier: "2a", condition: "One of your models gains a Strength Perk.", target: "2"},
		{line: "Rumble In The Jungle", tier: "2b", condition: "You spend at least 30 Caps from your Stash on Chems before a game.", target: "1"},
		{line: "Rumble In The Jungle", tier: "2c", condition: "You win the Rumble Scenario.", target: "3"},
		{line: "Rumble In The Jungle", tier: "3a", condition: "You have at least 5 Control in three different locations.", target: "1"},
		{line: "Rumble In The Jungle", tier: "3b", condition: "You spend at least 50 Caps from your stash on Chems before a game.", target: "1"},
		{line: "Rumble In The Jungle", tier: "3c", condition: "One of your models Incapacitates an Enemy Champion.", target: "10"},
		{line: "Rumble In The Jungle", tier: "3d", condition: "One of your models Passes a Confusion Test.", target: "6"},

		{line: "Loot And Plunder", tier: "1a", condition: "One of your models makes a Search Action.", target: "8"},
		{line: "Loot And Plunder", tier: "1b", condition: "You choose to play the Stockpile Raid Scenario.", target: "2"},
		{line: "Loot And Plunder", tier: "1c", condition: "You purchase a weapon Modification.", target: "5"},
		{line: "Loot And Plunder", tier: "2a", condition: "You win the Stockpile Raid scenario as the Attacker.", target: "3"},
		{line: "Loot And Plunder", tier: "2b", condition: "A model in your crew gains a Perception Perk.", target: "2"},
		{line: "Loot And Plunder", tier: "2c", condition: "You have at least 50 Caps in your stash.", target: "1"},
		{line: "Loot And Plunder", tier: "2d", condition: "You purchase a Weapon Modification that costs at least 3 Parts.", target: "5"},
		{line: "Loot And Plunder", tier: "3a", condition: "You win the Retrieval Run Scenario as the Attacker.", target: "3"},
		{line: "Loot And Plunder", tier: "3b", condition: "You have at least 100 Caps in your Stash.", target: "1"},
		{line: "Loot And Plunder", tier: "3c", condition: "You purchase a third Modification for a weapon.", target: "5"},
		{line: "Loot And Plunder", tier: "3d", condition: "You use a Pack Ploy.", target: "4"},

		{line: "Display Dominance", tier: "1a", condition: "You win a game on your Home Turf.", target: "1"},
		{line: "Display Dominance", tier: "1b", condition: "You choose to play the Land Grab Scenario.", target: "2"},
		{line: "Display Dominance", tier: "1c", condition: "One of your models Incapacitates an Enemy model with a Melee Attack.", target: "6"},
		{line: "Display Dominance", tier: "2a", condition: "You win a game on the opposing crew's Home Turf.", target: "2"},
		{line: "Display Dominance", tier: "2b", condition: "You have at least 3 Control in each location.", target: "1"},
		{line: "Display Dominance", tier: "2c", condition: "A model in your crew gains a Charisma Perk.", target: "3"},
		{line: "Display Dominance", tier: "3a", condition: "You play a game as the attacker.", target: "8"},
		{line: "Display Dominance", tier: "3b", condition: "You have at least 10 Control in any Location.", target: "1"},
		{line: "Display Dominance", tier: "3c", condition: "One of your models Incapacitates an Enemy Champion with a Melee Attack.", target: "10"}

	],
		"The Operators": [
		{line: "Best Kept Secrets", tier: "1a", condition: "You choose to play the Retrieval Run Scenario.", target: "3"},
		{line: "Best Kept Secrets", tier: "1b", condition: "Your crew has at least 2 Scouring Points in 3 different Locations.", target: "1"},
		{line: "Best Kept Secrets", tier: "1c", condition: "A model in your crew gains an Intelligence Perk.", target: "2"},
		{line: "Best Kept Secrets", tier: "2a", condition: "Your crew has at least 3 Control in three different Locations.", target: "1"},
		{line: "Best Kept Secrets", tier: "2b", condition: "You win the Retrieval Run Scenario as the Attacker.", target: "2"},
		{line: "Best Kept Secrets", tier: "2c", condition: "One of your models Incapacitates an Enemy model with a Ranged Attack.", target: "10"},
		{line: "Best Kept Secrets", tier: "3a", condition: "One of your models Incapacitates an Enemy Leader with a Ranged Attack.", target: "6"},
		{line: "Best Kept Secrets", tier: "3b", condition: "You win the Land Grab Scenario.", target: "3"},
		{line: "Best Kept Secrets", tier: "3c", condition: "At least 5 of your models have a Perk that they did not start with.", target: "1"},
		{line: "Best Kept Secrets", tier: "3d", condition: "You have at least 100 Caps in your Stash.", target: "1"},

		{line: "Style and Finesse", tier: "1a", condition: "You pass a Confusion Test for one of your models.", target: "6"},
		{line: "Style and Finesse", tier: "1b", condition: "Your crew earns at least 3 XP in a single game.", target: "3"},
		{line: "Style and Finesse", tier: "1c", condition: "One of your models gains a Charisma Perk.", target: "2"},
		{line: "Style and Finesse", tier: "2a", condition: "You spend at least 50 Caps from your Stash on Chems before a game.", target: "1"},
		{line: "Style and Finesse", tier: "2b", condition: "You purchase a weapon Modification worth at least 3 Parts.", target: "3"},
		{line: "Style and Finesse", tier: "2c", condition: "You upgrade one of your models.", target: "5"},
		{line: "Style and Finesse", tier: "3a", condition: "You have at least 100 Caps in your Stash.", target: "1"},
		{line: "Style and Finesse", tier: "3b", condition: "Your crew has at least 3 Control in each Location.", target: "1"},
		{line: "Style and Finesse", tier: "3c", condition: "Your crew has at least 5 doses of Rare Chems.", target: "1"},
		{line: "Style and Finesse", tier: "3d", condition: "You win a game on your Home Turf.", target: "3"},

		{line: "The Professionals", tier: "1a", condition: "You purchase a Modification for a Pistol or Rifle.", target: "3"},
		{line: "The Professionals", tier: "1b", condition: "One of your models makes a Search Action.", target: "6"},
		{line: "The Professionals", tier: "1c", condition: "One of your models Incapacitates an Enemy model with a Ranged Attack.", target: "10"},
		{line: "The Professionals", tier: "2a", condition: "You use an Operators Ploy.", target: "4"},
		{line: "The Professionals", tier: "2b", condition: "A model in your crew gains a Perception Perk.", target: "4"},
		{line: "The Professionals", tier: "2c", condition: "You win a game on your Home Turf.", target: "1"},
		{line: "The Professionals", tier: "2d", condition: "You purchase a Weapon Modification worth at least 3 Parts.", target: "3"},
		{line: "The Professionals", tier: "3a", condition: "You win a game on the opposing crew's Home Turf.", target: "3"},
		{line: "The Professionals", tier: "3b", condition: "One of your models Incapacitates an Enemy Leader with a Ranged Attack.", target: "6"},
		{line: "The Professionals", tier: "3c", condition: "You choose to play the Rumble Scenario.", target: "4"},
		{line: "The Professionals", tier: "3d", condition: "One of your models has seven Upgrades.", target: "1"}

	],
		"The Disciples": [
		{line: "Rise to Power", tier: "1a", condition: "The crew earns at least 4 XP in a single game.", target: "3"},
		{line: "Rise to Power", tier: "1b", condition: "You choose the Land Grab Scenario.", target: "3"},
		{line: "Rise to Power", tier: "1c", condition: "You have at least 50 Caps in your Stash.", target: "1"},
		{line: "Rise to Power", tier: "2a", condition: "You win the Land Grab Scenario as the Attacker.", target: "3"},
		{line: "Rise to Power", tier: "2b", condition: "Your crew has at least 3 Control in three different Locations.", target: "1"},
		{line: "Rise to Power", tier: "2c", condition: "You purchase a Weapon Modification.", target: "5"},
		{line: "Rise to Power", tier: "3a", condition: "Your crew has at least 10 Control in any Location.", target: "1"},
		{line: "Rise to Power", tier: "3b", condition: "A model in the Crew gains a Perk.", target: "8"},
		{line: "Rise to Power", tier: "3c", condition: "Your crew has at least 2 Scouting Points in three different Locations.", target: "1"},
		{line: "Rise to Power", tier: "3d", condition: "One of your models Incapacitates an Enemy Leader.", target: "5"},

		{line: "Let Them Know Fear", tier: "1a", condition: "Your crew has at least 2 Scouting Points in three different Locations.", target: "1"},
		{line: "Let Them Know Fear", tier: "1b", condition: "A model in the opposing crew Fails a Confusion Test.", target: "10"},
		{line: "Let Them Know Fear", tier: "1c", condition: "You use a Disciples Ploy.", target: "4"},
		{line: "Let Them Know Fear", tier: "2a", condition: "Your crew has at least 5 Scouting Points in any Location.", target: "1"},
		{line: "Let Them Know Fear", tier: "2b", condition: "One of your models Incapacitates an Enemy Champion.", target: "8"},
		{line: "Let Them Know Fear", tier: "2c", condition: "You play a game as the Attacker.", target: "5"},
		{line: "Let Them Know Fear", tier: "2d", condition: "You have a model with five Upgrades.", target: "1"},
		{line: "Let Them Know Fear", tier: "3a", condition: "You win the Rumble Scenario.", target: "4"},
		{line: "Let Them Know Fear", tier: "3b", condition: "One of your models Incapacitates an Enemy Leader with a Melee Attack.", target: "5"},
		{line: "Let Them Know Fear", tier: "3c", condition: "At least 7 of your models have a Perk that they did not start with.", target: "1"},
		{line: "Let Them Know Fear", tier: "3d", condition: "An Enemy model Fails a Confusion Test.", target: "10"},

		{line: "The Blooded Blade", tier: "1a", condition: "You purchase a Modification for a Melee Weapon.", target: "5"},
		{line: "The Blooded Blade", tier: "1b", condition: "One of your models gains a Strength Perk.", target: "2"},
		{line: "The Blooded Blade", tier: "1c", condition: "One of your models Incapacitates an Enemy model with a Melee Attack.", target: "10"},
		{line: "The Blooded Blade", tier: "2a", condition: "One of your models Incapacitates an Enemy Leader with a Melee Attack.", target: "3"},
		{line: "The Blooded Blade", tier: "2b", condition: "An Enemy model Fails a Confusion Test.", target: "10"},
		{line: "The Blooded Blade", tier: "2c", condition: "You use a Disciples Ploy.", target: "5"},
		{line: "The Blooded Blade", tier: "3a", condition: "You play a game as the Attacker.", target: "4"},
		{line: "The Blooded Blade", tier: "3b", condition: "At least 5 of your models have a Perk that they did not start with.", target: "1"},
		{line: "The Blooded Blade", tier: "3c", condition: "One of your models Incapacitates an Enemy Champion with a Melee Attack.", target: "8"},
		{line: "The Blooded Blade", tier: "3d", condition: "Your crew has at least 5 Control in three different Locations.", target: "1"}


	],
};

const ployData = {
    "The Operators": [
        {
            name: "Coordinate Fire",
            descr: "Enact this Ploy when one of your models makes an Open Fire Action. Until the end of the Round, when you declare that models will give Supporting Fire, you are not limited to models in the Active model's Control Area. All other restrictions still apply."
        },
        {
            name: "Prepared for Anything",
            descr: "Enact this Ploy at the start of any of your Turns. You may immediately add Common Chems to your Crew Roster with a combined cost of up to 25 Caps."
        }
    ],
    "The Pack": [
        {
            name: "Brutality",
            descr: "Enact this Ploy when one of your models Incapacitates an Enemy with an attack. Your opponent must make Confusion Tests for any of thei models within 5\", rather than 3\". For each of these Tests, they count as Failing if they score fewer than two Hits."
        },
        {
            name: "Pack Hunters",
            descr: "Enact this Ploy when one of your Champions makes a Get Moving Action. You can give Movement Orders to any models in your Crew, even if they are outside of the Champion's Control Area. All other restrictions apply as normal."
        }
    ],
	    "The Disciples": [
        {
            name: "Thrill Kill",
            descr: "Enact this Ploy when an Enemy model is Incapacitated. Each of your models within 3\" Recovers one Fatigue"
        },
        {
            name: "Thin the Herd",
            descr: "Enact this Ploy when one of your models is Incapacitated. Until the end of the Round, add a Bonus Die to any Tests you make for your Champions."
        }
    ],
	    "Brotherhood of Steel": [
        {
            name: "The Chain That Binds",
            descr: "You may enact this Ploy at the start of the game, before the start of the first Turn. Each Grunt model within the Control Area of a Friendly Champion may take a single Action, taking Fatigue as normal."
        },
        {
            name: "Vertibird Drop",
            descr: "Enact this Ploy at the start of the game, before the start of Turn 1. Choose one of your models. They are not deployed at the start of the game. Instead, when you become the Active player on Turn 2, place the model in Base contact of a Battlefield edge of your choice."
        }
    ],
	    "Gunners": [
        {
            name: "Suppressive Fire",
            descr: "Enact this Ploy at the start of the opposing crew’s turn. Choose a Search Token or Objective Token on the Battlefield. Until the end of the turn, any model that finishes an Action within 3” of the chosen token suffers Fatigue."
        },
        {
            name: "Barricades",
            descr: "Enact this Ploy during setup, immediately before you place your first model on the Battlefield. Place two Barricades anywhere on the Battlefield, following the rules for placing Minor Terrain Features. A Barricade cannot be more than 3” long, 2” tall and 1” wide."
        }
    ],
	    "Super Mutants": [
        {
            name: "Surging Advance",
            descr: "Enact this Ploy at the start of any Round after the first. Move each Unengaged model in your crew up to 4”. During this move, models cannot move into Proximity of an enemy model."
        },
        {
            name: "The Next Stage",
            descr: "Enact this Ploy at the start of any of your turns. Remove one Harm from each of your models. Until the start of your next Turn, each of your models counts its Endurance as one higher."
        }
    ],
	    "Wasteland Raiders": [
        {
            name: "In Moderation",
            descr: "Enact this Ploy when a friendly model chooses to Find a Chem when making a Rummage Action. Add a dose of Rare Chems to the Crew’s Roster regardless of the result of the dice"
        },
        {
            name: "Oh Yeah",
            descr: "Enact this Ploy at the start of any of your Turns. As an additional cost, remove either a Chem or Rare Chem from your stash. Choose one of your Exhausted Grunts. Remove all Fatigue from it. Add 3 Bonus Dice to all Attack Tests this model makes. When this model next becomes Exhausted, it cannot Recover Fatigue, or have Fatigue removed from it. At the end of this Round, this model is Incapacitated."
        }
    ],
	    "Survivors": [
        {
            name: "No Place Like Home",
            descr: "You may enact this Ploy when a Friendly model is Incapacitated. Add 1 Bonus Dice to the Dice Pool of all Confusion Tests made as a result of the Friendly model being Incapacitated."
        },
        {
            name: "Some Rain Must Fall",
            descr: "Enact this Ploy when a friendly model is Incapacitated by an enemy model, after any Confusion Tests are made. Every friendly model may make an Open Fire or Brawl action without taking Fatigue against the enemy model that made the Action that Incapacitated the friendly model."
        }
    ],
	    "Legends of the Wasteland": [
        {
            name: "Nuka-nuke Launcher",
            descr: "You may enact this Ploy at the end of any Round if a Friendly King of the Park in on the Battlefield, and not Incapacitated. A Friendly King of the Park model makes a Ranged Attack Action using the Nuka-nuke Launcher Weapon. Nuka-nuke Launcher - type: Heavy(20\"); test: 5S; traits: Area(2\"), CQB, Irradiate, One and Done"
        }
    ],		
		"Cult of the Mothman": [
        {
            name: "The Enlightened",
            descr: "Enact this Ploy at the start of any of your Turns, if your crew's Ritual Count is ten or more and the Ploy The Followers of the Winged One has not been enacted."
        },
        {
            name: "Follower of the Winged One",
            descr: "Enact this Ploy at the start of any of your Turns, if your crew's Ritual Count is ten or more and the Ploy The Enlightened has not been enacted. Place a friendly Holy Mothman within 3\" of a friendly Leader. If there is no friendly Leader on the Battlefield, place the Holy Mothman within 3\" of the center of the Battlefield. Friendly crews can no longer increase Ritual Count."
        }
    ],
    // Add more factions and their ploys here...
};

// Function to update the weapon table based on selected faction
function updateWeaponTable() {
    const faction = document.getElementById('faction-select').value;
    const table = document.querySelector('#weaponsTable');
    const tableBody = document.querySelector('#weaponsTable tbody');
    const tableHead = document.querySelector('#weaponsTable thead');

    // Clear existing rows and headers
    tableBody.innerHTML = '';  
    tableHead.innerHTML = '';

    // Create the table header
    const headerRow = document.createElement("tr");
    const headers = ["Weapon", "Type", "Test", "Traits", "Crit"];
    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    // Append header row to the thead
    tableHead.appendChild(headerRow);

    // Populate the table with weapon data
    if (faction && weaponData[faction]) {
        weaponData[faction].forEach(weapon => {
            const row = document.createElement('tr');

            // Create and append each cell in order: Weapon, Type, Test, Traits, Crit
            const weaponCell = document.createElement('td');
            weaponCell.textContent = weapon.weapon;
            row.appendChild(weaponCell);

            const typeCell = document.createElement('td');
            typeCell.textContent = weapon.type;
            row.appendChild(typeCell);

            const testCell = document.createElement('td');
            testCell.textContent = weapon.test;
            row.appendChild(testCell);

            const traitsCell = document.createElement('td');
            traitsCell.textContent = weapon.traits;
            row.appendChild(traitsCell);

            const critCell = document.createElement('td');
            critCell.textContent = weapon.effect;
            row.appendChild(critCell);

            // Append row to the table body
            tableBody.appendChild(row);
        });
    }
}


// Function to update the quest table based on the selected faction
function updateQuestTable() {
    const faction = document.getElementById('faction-select').value;
    const table = document.querySelector('#questTable');
    const tableHead = document.querySelector('#questTable thead');
    const tableBody = document.querySelector('#questTable tbody');

    // Clear existing rows and headers
    tableHead.innerHTML = '';
    tableBody.innerHTML = ''; 

    // Create the table header
    const headerRow = document.createElement("tr");
    const headers = ["Line", "Tier", "Condition", "Target"];
    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    // Append the header row to the table head
    tableHead.appendChild(headerRow);

    // Populate the table with quest data
    if (faction && questData[faction] && questData[faction].length > 0) {
        questData[faction].forEach(quest => {
            const row = document.createElement('tr');

            // Create table cells for Quest Line, Tier, Condition, and Target
            const lineCell = document.createElement('td');
            lineCell.textContent = quest.line;
            row.appendChild(lineCell);

            const tierCell = document.createElement('td');
            tierCell.textContent = quest.tier;
            row.appendChild(tierCell);

            const conditionCell = document.createElement('td');
            conditionCell.textContent = quest.condition;
            row.appendChild(conditionCell);

            const targetCell = document.createElement('td');
            targetCell.textContent = quest.target;
            row.appendChild(targetCell);

            // Append the row to the table body
            tableBody.appendChild(row);
        });

        // Make sure the table is visible
        document.getElementById("quest-table-container").style.display = "block";
    } else {
        console.warn(`No quest data found for faction: ${faction}`);
    }
}


// Add event listener for faction selection change
document.getElementById("faction-select").addEventListener("change", updateQuestTable);

// Show/Hide Quest Table Button
document.getElementById("toggle-quest-table").addEventListener("click", function() {
    const questContainer = document.getElementById("quest-table-container");
    questContainer.style.display = (questContainer.style.display === "none") ? "block" : "none";
});





// Function to update the ploy table based on selected faction
function updatePloysTable() {
    const faction = document.getElementById('faction-select').value;
    const table = document.getElementById('ploysTable');
    const thead = table.querySelector("thead");
    const tableBody = table.querySelector('tbody');
    
    // Clear existing header and rows
    thead.innerHTML = '';
    tableBody.innerHTML = '';  

    // Create the table header
    const headerRow = document.createElement("tr");
    const headers = ["Ploy", "Description"];
    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    // Populate table body with ploy data
    if (faction && ployData[faction]) {
        ployData[faction].forEach(ploy => {
            const row = document.createElement('tr');
            
            // Create the cells for Ploy Name and Description
            const nameCell = document.createElement('td');
            nameCell.textContent = ploy.name;
            row.appendChild(nameCell);
            
            const descrCell = document.createElement('td');
            descrCell.textContent = ploy.descr;
            row.appendChild(descrCell);
            
            // Append the row to the table body
            tableBody.appendChild(row);
        });
    }
}


// Populate faction options dynamically (You can adjust this if needed)
window.onload = () => {
    const factionSelect = document.getElementById('faction-select');

    // List of faction names (Make sure these match your factions object keys)
    const factionNames = Object.keys(factions);  

    // Populate dropdown dynamically
    factionNames.forEach(faction => {
        const option = document.createElement('option');
        option.value = faction;
        option.textContent = faction;
        factionSelect.appendChild(option);
    });

    console.log("Dropdown populated with factions:", factionNames);
}




let selectedFaction = null;
let selectedUnit = null;
let selectedWeaponPoints = null;
let crewPoints = 0; // Keep track of unit points separately
let partyPoints = 0;// Running sum of active party points (Need to implement a checkbox system)
let chemPoints = 0; // Keep track of chem points separately
let hasLeader = false;

const factionSelect = document.getElementById("faction-select");
const unitSelect = document.getElementById("unit-select");
const weaponSelect = document.getElementById("weapon-select");
const unitList = document.getElementById("unit-list");
const crewPointsDisplay = document.getElementById("crew-points");
const partyPointsDisplay = document.getElementById("party-points");
const chemPointsDisplay = document.getElementById("chem-points");


const stepUnit = document.getElementById("step-unit");
const stepWeapon = document.getElementById("step-weapon");
const stepAdd = document.getElementById("step-add");
const resetButton = document.getElementById("reset-button");

// Function to update crew points display
function updateCrewPoints() {
    document.getElementById("crew-points").textContent = crewPoints;
}
// Function to update party points display
function updatePartyPoints() {
    document.getElementById("party-points").textContent = partyPoints;
}
// Function to update chem points display
function updateChemPoints() {
    document.getElementById("chem-points").textContent = chemPoints;
}

// Chem Points Logic
document.querySelectorAll(".chem-item").forEach(item => {
    const decreaseBtn = item.querySelector(".decrease");
    const increaseBtn = item.querySelector(".increase");
    const quantityInput = item.querySelector(".chem-quantity");
    const chemValue = parseInt(item.dataset.points, 10);

    increaseBtn.addEventListener("click", function () {
        let currentValue = parseInt(quantityInput.value, 10);
        quantityInput.value = currentValue + 1;
        chemPoints += chemValue; // Add chem points
        updateChemPoints();
		chemPointsDisplay.textContent = chemPoints;
    });

    decreaseBtn.addEventListener("click", function () {
        let currentValue = parseInt(quantityInput.value, 10);
        if (currentValue > 0) {
            quantityInput.value = currentValue - 1;
            chemPoints -= chemValue; // Subtract chem points
            updateChemPoints();
			chemPointsDisplay.textContent = chemPoints;
        }
    });
});

factionSelect.addEventListener("change", () => {
    selectedFaction = factionSelect.value;
    hasLeader = false; // Reset leader restriction when switching factions

    if (selectedFaction) {
	// Update the unit list header separately without clearing the list
	const header = unitList.querySelector("h3");
	if (header) {
		header.textContent = selectedFaction;
	} else {
		const newHeader = document.createElement("h3");
		newHeader.textContent = selectedFaction;
		unitList.prepend(newHeader);
	}
        
        // Populate Units
        unitSelect.innerHTML = '<option value="">-- Select Unit --</option>';
        factions[selectedFaction].forEach(unit => {
            const option = document.createElement("option");
            option.value = unit.name;
            option.textContent = `${unit.name} (${unit.type})`;
            unitSelect.appendChild(option);
        });

        stepUnit.style.display = "block";

        // **Update Weapons and Ploys tables dynamically**
        updateWeaponTable(); // Call function to update weapons table
        updatePloysTable();  // Call function to update ploys table

    } else {
        stepUnit.style.display = "none";
        stepWeapon.style.display = "none";
        stepAdd.style.display = "none";
    }


});




unitSelect.addEventListener("change", () => {
    selectedUnit = unitSelect.value;
    const selectedUnitData = factions[selectedFaction].find(
        unit => unit.name === selectedUnit
    );

    if (selectedUnitData) {
        const isLeader = selectedUnitData.type.includes("Leader");
        if (isLeader && hasLeader) {
            alert("You can only have one Leader in your list!");
            unitSelect.value = ""; // Reset selection
            selectedUnit = null;
            return;
        }

        // Populate Weapon Sets
        weaponSelect.innerHTML = '<option value="">-- Select Weapon Set --</option>';
        selectedUnitData.weapons.forEach(weapon => {
            const option = document.createElement("option");
            option.value = weapon.points; // Store weapon points as value
            option.textContent = `${weapon.name} (${weapon.points} points)`;
            weaponSelect.appendChild(option);
        });
        stepWeapon.style.display = "block";

        // Optionally, you can reset the selected weapon in case the user changes the unit
        weaponSelect.value = ""; // Reset weapon selection
        stepAdd.style.display = "none"; // Hide the add button until weapon is selected
    } else {
        stepWeapon.style.display = "none";
        stepAdd.style.display = "none";
    }
});


weaponSelect.addEventListener("change", () => {
    selectedWeapon = weaponSelect.options[weaponSelect.selectedIndex].text.split(" (")[0]; // Extract weapon name
    selectedWeaponPoints = parseInt(weaponSelect.value, 10);
    stepAdd.style.display = selectedWeapon ? "block" : "none";
});



document.getElementById("add-unit").addEventListener("click", () => {
    if (selectedFaction && selectedUnit && selectedWeaponPoints) {
        const selectedUnitData = factions[selectedFaction].find(
            unit => unit.name === selectedUnit
        );
        const isLeader = selectedUnitData.type.includes("Leader");
        if (isLeader) hasLeader = true;

        const li = document.createElement("li");

        const weaponPoints = selectedWeaponPoints;

        const unitName = document.createElement("span");
        unitName.style.fontWeight = "bold";
        unitName.textContent = `${selectedUnit} (${selectedUnitData.type})`;

        li.appendChild(unitName);
        li.appendChild(document.createTextNode(": "));
        const weaponText = document.createElement("span");
		weaponText.textContent = ` ${selectedWeapon} (${selectedWeaponPoints} points)`;
		li.appendChild(weaponText);
		
					// Create a container div for the checkbox and label
			const checkboxContainer = document.createElement("span");
			checkboxContainer.style.display = "inline-flex";
			checkboxContainer.style.flexDirection = "column";
			checkboxContainer.style.alignItems = "center";
			checkboxContainer.style.marginLeft = "10px";

			// Create the label
			const activeLabel = document.createElement("label");
			activeLabel.textContent = "Active Party";
			activeLabel.style.fontSize = "10px";
			activeLabel.style.color = "#B0A050 ";
			activeLabel.style.marginBottom = "2px"; // Small spacing above checkbox
		
		        // Create the Active checkbox
        const activeCheckbox = document.createElement("input");
        activeCheckbox.type = "checkbox";
        activeCheckbox.style.marginLeft = "10px"; // Optional style for spacing

		// Append label and checkbox to the container
		checkboxContainer.appendChild(activeLabel);
		checkboxContainer.appendChild(activeCheckbox);
		
		// Append the container div to the list item
		li.appendChild(checkboxContainer);

        // Event listener for the Active checkbox
        activeCheckbox.addEventListener("change", () => {
            if (activeCheckbox.checked) {
                // Add weapon points to party points when checked
                partyPoints += weaponPoints;
            } else {
                // Subtract weapon points from party points when unchecked
                partyPoints -= weaponPoints;
            }
            updatePartyPoints(); // Update the display
        });


const statsTable = document.createElement("table");
statsTable.style.marginTop = "10px";
statsTable.style.borderCollapse = "collapse";
statsTable.style.width = "100%";

// Create table header
statsTable.innerHTML = `
    <thead>
        <tr><th>S</th><th>P</th><th>E</th><th>C</th><th>I</th><th>A</th><th>L</th><th>(W)</th></tr>
    </thead>
    <tbody>
        <tr>
            <td><input type="number" value="${selectedUnitData.stats.S}" data-stat="S" style="width: 50px; text-align: center;"></td>
            <td><input type="number" value="${selectedUnitData.stats.P}" data-stat="P" style="width: 50px; text-align: center;"></td>
            <td><input type="number" value="${selectedUnitData.stats.E}" data-stat="E" style="width: 50px; text-align: center;"></td>
            <td><input type="number" value="${selectedUnitData.stats.C}" data-stat="C" style="width: 50px; text-align: center;"></td>
            <td><input type="number" value="${selectedUnitData.stats.I}" data-stat="I" style="width: 50px; text-align: center;"></td>
            <td><input type="number" value="${selectedUnitData.stats.A}" data-stat="A" style="width: 50px; text-align: center;"></td>
            <td><input type="number" value="${selectedUnitData.stats.L}" data-stat="L" style="width: 50px; text-align: center;"></td>
            <td><input type="number" value="${selectedUnitData.stats.W}" data-stat="W" style="width: 50px; text-align: center;"></td>
        </tr>
    </tbody>`;

// Append the stats table to the unit list item
li.appendChild(statsTable);

// Add event listeners to update stats when changed
statsTable.querySelectorAll("input").forEach(input => {
    input.addEventListener("change", (event) => {
        const statKey = event.target.dataset.stat; // Get which stat was changed
        selectedUnitData.stats[statKey] = parseInt(event.target.value, 10) || 0; // Update the stat in the data
    });
});


        const weaponDataTable = document.createElement("table");
        weaponDataTable.style.marginTop = "10px";
        weaponDataTable.style.borderCollapse = "collapse";
        weaponDataTable.style.width = "100%";
        
const selectedWeaponData = selectedUnitData.weapons.find(w => w.name === selectedWeapon);

// Start building the table HTML
		//This shit sucks, maybe the better to do things is to create an object for each weapon. That way i don't have to just call them WPN2, WPN3, etc. I probably also would get to avoid typing them in the weapon table and faction weapon table..
		//But i can't, i need the weapon sets as 1 object to pair with the points since points are based on weapon SETS. I think..
let tableHTML = `
    <thead>
        <tr><th>Name</th><th>Type</th><th>Test</th><th>Traits</th><th>Effect</th><th>Points</th></tr>
    </thead>
    <tbody>
        <tr>
            <td>${selectedWeaponData.name}</td>
            <td>${selectedWeaponData.type}</td>
            <td>${selectedWeaponData.test}</td>
            <td>${selectedWeaponData.traits}</td>
            <td>${selectedWeaponData.effect}</td>
            <td>
                <input type="number" value="${selectedWeaponData.points}" data-field="points" 
                style="width: 100%; box-sizing: border-box; text-align: center;">
            </td>
        </tr>`;

// Check if second weapon data exists and add another row if so
if (selectedWeaponData.type2 && selectedWeaponData.test2) {
    tableHTML += `
        <tr>
            <td>${"WPN2 ->"}</td>
            <td>${selectedWeaponData.type2}</td>
            <td>${selectedWeaponData.test2}</td>
            <td>${selectedWeaponData.traits2}</td>
            <td>${selectedWeaponData.effect2}</td>
            <!-- Exclude Points column in second row -->
        </tr>`;
}

// Check if third weapon data exists and add another row if so
if (selectedWeaponData.type3 && selectedWeaponData.test3) {
    tableHTML += `
        <tr>
            <td>${"WPN3 ->"}</td>
            <td>${selectedWeaponData.type3}</td>
            <td>${selectedWeaponData.test3}</td>
            <td>${selectedWeaponData.traits3}</td>
            <td>${selectedWeaponData.effect3}</td>
            <!-- Exclude Points column in third row -->
        </tr>`;
}

// Check if fourth weapon data exists and add another row if so
if (selectedWeaponData.type4 && selectedWeaponData.test4) {
    tableHTML += `
        <tr>
            <td>${"WPN4 ->"}</td>
            <td>${selectedWeaponData.type4}</td>
            <td>${selectedWeaponData.test4}</td>
            <td>${selectedWeaponData.traits4}</td>
            <td>${selectedWeaponData.effect4}</td>
        </tr>`;
}

// Close the tbody and table tags
tableHTML += `</tbody>`;

// Update the table with the generated HTML
weaponDataTable.innerHTML = tableHTML;

li.appendChild(weaponDataTable);


		//unitNotes to autofill with innate perks
		const unitNotes = document.createElement("textarea");
		unitNotes.classList.add("unit-notes");
		unitNotes.placeholder = "Enter Perks, Upgrades, Injuries, etc.";
		unitNotes.rows = 3;
		unitNotes.style.width = "100%";
		unitNotes.style.marginTop = "5px";
		li.appendChild(unitNotes);

		// Auto-fill perks
		if (factions[selectedFaction] && factions[selectedFaction].length > 0) {
			const selectedUnitData = factions[selectedFaction].find(u => u.name === selectedUnit);
			if (selectedUnitData && selectedUnitData.perks !== undefined) {
				unitNotes.value = selectedUnitData.perks; // Set perks if defined
			}
		}
		

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove unit ABOVE";
        removeButton.addEventListener("click", () => {
            unitList.removeChild(li);
            crewPoints -= weaponPoints;
            crewPointsDisplay.textContent = crewPoints;
            if (isLeader) hasLeader = false;
			// Adjust party points if the unit was active
            if (activeCheckbox.checked) {
                partyPoints -= weaponPoints;
                updatePartyPoints();
            }
        });
        li.appendChild(removeButton);
        unitList.appendChild(li);

        crewPoints += weaponPoints;
        crewPointsDisplay.textContent = crewPoints;
		partyPointsDisplay.textContent = partyPoints;

        unitSelect.value = "";
        weaponSelect.value = "";
        stepWeapon.style.display = "none";
        stepAdd.style.display = "none";
    }
});






document.getElementById("generate-txt").addEventListener("click", () => {
    // Initialize an array to store the text content
    let unitListContent = '';
	
    // Get the crew notes from the textarea (same as the save/load functionality)
    const crewNotesTextarea = document.querySelector("#crew-notes");
    const crewNotes = crewNotesTextarea ? crewNotesTextarea.value : '';  // Retrieve crew notes if available

    // Add crew notes at the top of the file with a heading
    if (crewNotes) {
        unitListContent += `==================== Crew Notes ====================\n${crewNotes}\n\n--------------------------------------------------\n`;  // Add crew notes section
    }

// Loop through each list item to gather the unit name, stats, and unit notes
document.querySelectorAll('#unit-list li').forEach(item => {
    const unitName = item.querySelector("span").textContent; // Get unit name
    
    // Create a mapping of labels to their respective indexes in the stats
    const labels = ['S', 'P', 'E', 'C', 'I', 'A', 'L', '(W)', 'Weapon(s)', 'Type', 'Test', 'Traits', 'Crit', 'Pts', '', 'Type2', 'Test2', 'Traits2', 'Crit2'];
    
    // Get all the <td> elements, which represent stats, weapons, and other details
    const stats = Array.from(item.querySelectorAll("td")).map((td, index) => {
        let stat = `${labels[index]}: `;
        
        // Check if there is an input element inside the <td> (for user-inputted values)
        const input = td.querySelector("input");
        if (input) {
            // If input exists, get its value (e.g., user input for stats)
            stat += input.value.trim();
        } else {
            // If no input, fallback to textContent (for static text like weapon names, etc.)
            stat += td.textContent.trim();
        }

        // Add line breaks after (W) and Pts
        if (labels[index] === '(W)' || labels[index] === 'Pts') {
            stat += '\n'; // Add a line break after (W) or Pts
        }

        return stat;
    });

    // Get the Pts value separately and place it at the top of the unit information
    const ptsValue = stats.find(stat => stat.startsWith('Pts'))?.split(': ')[1]; // Extract Pts value
    const filteredStats = stats.filter(stat => !stat.startsWith('Pts')); // Remove Pts from stats
	
    // Get weapon(s) information
    const weapons = item.querySelectorAll('.weapon-info'); // Assuming weapons are in elements with the class 'weapon-info'
    let weaponText = '';
    weapons.forEach((weapon, idx) => {
        const weaponDetails = weapon.textContent.trim();
        weaponText += `- ${weaponDetails}`;
        
        // If there's more than one weapon, add a line break
        if (idx < weapons.length - 1) {
            weaponText += '\n';
        }

        // Add a line break before the second weapon, but make sure it's only for the second weapon.
        if (idx === 1) {
            weaponText = '\n' + weaponText; // Line break before second weapon
        }
    });

    // Get unit notes
    const unitNotes = item.querySelector("textarea") ? item.querySelector("textarea").value : ''; // Get unit notes

    // Add unit information in a structured format
    unitListContent += `==================== ${unitName} ====================\n`;
    
    // Only add the Pts if it's not undefined, and ensure it's above the special stats
    if (ptsValue) {
        unitListContent += `Pts: ${ptsValue}\n`;  // Place Pts value above the unit name
    }

    unitListContent += `Special Stats:\n`;

    // Add special stats (S, P, E, etc.) in a clean, organized format
    unitListContent += `${filteredStats.join('\n')}\n`;  // Add each stat on a new line

    // Add weapons info in a bulleted list (without points)
    if (weaponText) {
        unitListContent += `Weapons:\n${weaponText}\n`;
    }

    // Add notes section
    if (unitNotes) {
        unitListContent += `\nNotes: ${unitNotes}\n\n`;
    }

    unitListContent += `--------------------------------------------------\n\n`;  // Add a separator between units
});


    // Create a blob with the text content
    const blob = new Blob([unitListContent], { type: 'text/plain' });

    // Create an anchor element to download the text file
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "falloutfactionslistbuilder_list.txt";  // Name of the file

    // Trigger the download
    link.click();
});


document.getElementById("generate-pdf").addEventListener("click", () => {
    // Create a wrapper div dynamically
    const wrapper = document.createElement("div");

    // Get the crew-notes section and unit-list
    const crewNotesSection = document.getElementById("crew-notes-section");
    const unitList = document.getElementById("unit-list");

    // Clone the crew-notes-section but replace the textarea with its value
    const crewNotesClone = crewNotesSection.cloneNode(true);
    const textarea = crewNotesClone.querySelector("#crew-notes");
    
    if (textarea) {
        const crewNotesText = textarea.value.trim();
        const textDiv = document.createElement("div");
        textDiv.innerHTML = `<p style="white-space: pre-wrap; border: 1px solid #ccc; padding: 8px;">${crewNotesText || "No notes provided."}</p>`;
        textarea.replaceWith(textDiv); // Replace textarea with formatted text
    }

    // Clone unit-list
    const unitListClone = unitList.cloneNode(true);

    // Append both sections to the wrapper
    wrapper.appendChild(crewNotesClone);
    wrapper.appendChild(document.createElement("hr")); // Add separator
    wrapper.appendChild(unitListClone);
	
	// Ensure all text is black
    wrapper.querySelectorAll("*").forEach(el => {
        el.style.color = "black";  // Force text color to black
    });

    // Options for html2pdf
    const options = {
        margin:       10,  // Adds margin to keep content from touching edges
        filename:     'fallout_factions_list.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 1.2, width: 750 }, // Slightly reduce width to fit better
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Convert the wrapper to a PDF
    html2pdf().from(wrapper).set(options).save();
});












// Reset Button
resetButton.addEventListener("click", () => {
    // Reset all chem quantities to "0"
    document.querySelectorAll(".chem-quantity").forEach(input => {
        input.value = "0"; // Reset all chem quantities to 0
    });

    // Clear the List Name textbox
    const listNameInput = document.querySelector("#list-name"); // Replace with the correct ID of the List Name input
    if (listNameInput) {
        listNameInput.value = ""; // Clear the value of the List Name textbox
    }
	
    // Clear the Crew Notes textbox
    const crewNotesTextarea = document.querySelector("#crew-notes");
    if (crewNotesTextarea) {
        crewNotesTextarea.value = ""; // Clear the value of the Crew Notes textarea
    }

    // Reload the page to reset everything else (like unit points and unit list)
    location.reload();
});

//Saving and Loading lists
document.addEventListener("DOMContentLoaded", function () {
    const saveListButton = document.getElementById("save-list");
    const loadListButton = document.getElementById("load-list");
    const deleteListButton = document.getElementById("delete-list");
    const listNameInput = document.getElementById("list-name");
    const savedListsDropdown = document.getElementById("saved-lists");
    const unitList = document.getElementById("unit-list"); // The UL where units are added
	

    // Function to update the dropdown with saved lists
    function updateSavedListsDropdown() {
        savedListsDropdown.innerHTML = '<option value="">-- Select a Saved List --</option>';
        const savedLists = JSON.parse(localStorage.getItem("savedLists")) || {};
        for (const listName in savedLists) {
            const option = document.createElement("option");
            option.value = listName;
            option.textContent = listName;
            savedListsDropdown.appendChild(option);
        }
    }

    // Save List
    saveListButton.addEventListener("click", function () {
        const listName = listNameInput.value.trim();
        if (!listName) {
            alert("Please enter a list name before saving.");
            return;
        }

        // Collect current unit list items with stats and notes
        const unitItems = [];
		document.querySelectorAll("#unit-list li").forEach(item => {
			const unitName = item.querySelector("span").textContent;
			const statsTable = item.querySelector("table:nth-of-type(1) tbody tr");
			const weaponTable = item.querySelector("table:nth-of-type(2) tbody tr");

        // Extract SPECIALW stats
        const statsTableCells = item.querySelectorAll("table:nth-of-type(1) tbody tr td");
        const stats = Array.from(statsTableCells).map(td => {
            const input = td.querySelector("input");
            return input ? input.value : td.textContent; // Get updated values
        });

			// Extract weapon details, including user-inputted points
			const weaponRows = Array.from(item.querySelectorAll("table:nth-of-type(2) tbody tr")); 
			const weapons = weaponRows.map(row => {
				const cells = row.querySelectorAll("td");
				return {
					name: cells[0]?.textContent || "",
					type: cells[1]?.textContent || "",
					test: cells[2]?.textContent || "",
					traits: cells[3]?.textContent || "",
					effect: cells[4]?.textContent || "",
					points: parseInt(cells[5]?.querySelector("input")?.value, 10) || 0 // Get input value
				};
			});



			const notes = item.querySelector("textarea") ? item.querySelector("textarea").value : "";
			// Find and save the checkbox state
			const activeCheckbox = item.querySelector("input[type='checkbox']");
			const isChecked = activeCheckbox ? activeCheckbox.checked : false;

			unitItems.push({
				unitName: unitName,
				stats: stats,
				weapons: weapons,
				notes: notes,
				active: isChecked // Save checkbox state
			});
		});
		
		    // Collect the crew notes text
		const crewNotesTextarea = document.querySelector("#crew-notes");
    const crewNotes = crewNotesTextarea ? crewNotesTextarea.value : ""; // Save crew notes if it exists
	
	    // Collect the partyPoints and checkbox states
    const partyPointsCheckbox = document.querySelector("#party-points-checkbox");
    const partyPoints = partyPointsCheckbox ? partyPointsCheckbox.checked : false;


        // Save to local storage
        const savedLists = JSON.parse(localStorage.getItem("savedLists")) || {};
		savedLists[listName] = {
		unitItems: unitItems, // save the unit items
		crewNotes: crewNotes,  // save the crew notes
		partyPoints: partyPoints // save the partyPoints checkbox state
	};
        localStorage.setItem("savedLists", JSON.stringify(savedLists));

        // Refresh dropdown
        updateSavedListsDropdown();

        alert(`List "${listName}" saved successfully!`);
    });

    // Load List
loadListButton.addEventListener("click", function () {
    const selectedList = savedListsDropdown.value;
    if (!selectedList) {
        alert("Please select a list to load.");
        return;
    }

    // Retrieve the selected list from storage
    const savedLists = JSON.parse(localStorage.getItem("savedLists")) || {};
    const loadedList = savedLists[selectedList];

    // Clear current list and load saved items
    unitList.innerHTML = "";

    // Initialize total points to 0
    let crewPoints = 0;
    let partyPoints = 0;
    let chemPoints = 0;
    updateCrewPoints();
    updatePartyPoints();
    updateChemPoints();

    // Load crew notes
    const crewNotesTextarea = document.querySelector("#crew-notes");
    const crewNotes = loadedList?.crewNotes || "";
    if (crewNotesTextarea) {
        crewNotesTextarea.value = crewNotes;
    }

	// Sort the unitItems before rendering
		loadedList.unitItems.sort((a, b) => {

			// Sort by total weapon points (descending order)
			const aPoints = a.weapons.reduce((sum, wpn) => sum + (parseInt(wpn.points, 10) || 0), 0);
			const bPoints = b.weapons.reduce((sum, wpn) => sum + (parseInt(wpn.points, 10) || 0), 0);
			if (bPoints !== aPoints) return bPoints - aPoints; // Descending order

			// Sort by name alphabetically
			return a.unitName.localeCompare(b.unitName);
		});

    // Load sorted units into the list
    loadedList?.unitItems.forEach(unit => {
        const li = document.createElement("li");

        // Unit name and weapon text
        const unitName = document.createElement("span");
        unitName.style.fontWeight = "bold";
        unitName.textContent = unit.unitName;
        li.appendChild(unitName);
        li.appendChild(document.createTextNode(": "));

        // Checkbox for Active Party
        const checkboxContainer = document.createElement("span");
        checkboxContainer.style.display = "inline-flex";
        checkboxContainer.style.flexDirection = "column";
        checkboxContainer.style.alignItems = "center";
        checkboxContainer.style.marginLeft = "10px";

        const activeLabel = document.createElement("label");
        activeLabel.textContent = "Active Party";
        activeLabel.style.fontSize = "10px";
        activeLabel.style.color = "#B0A050";
        activeLabel.style.marginBottom = "2px";

        const activeCheckbox = document.createElement("input");
        activeCheckbox.type = "checkbox";
        activeCheckbox.style.marginLeft = "15px";
        activeCheckbox.dataset.points = JSON.stringify(unit.weapons.map(wpn => parseInt(wpn.points, 10) || 0));
        activeCheckbox.checked = false;
        activeCheckbox.addEventListener("change", () => updatePartyPoints());

        checkboxContainer.appendChild(activeLabel);
        checkboxContainer.appendChild(activeCheckbox);
        li.appendChild(checkboxContainer);

        // SPECIALW Stats Table
        const statsTable = document.createElement("table");
        statsTable.innerHTML = `
            <thead>
                <tr><th>S</th><th>P</th><th>E</th><th>C</th><th>I</th><th>A</th><th>L</th><th>(W)</th></tr>
            </thead>
            <tbody>
                <tr>
                    ${unit.stats.map(stat => `<td><input type="number" value="${stat}" style="width: 40px;"></td>`).join('')}
                </tr>
            </tbody>`;
        li.appendChild(statsTable);

        // Weapon Table
        const weaponTable = document.createElement("table");
        weaponTable.style.marginTop = "10px";
        weaponTable.style.borderCollapse = "collapse";
        weaponTable.style.width = "100%";
        weaponTable.innerHTML = `
            <thead>
                <tr>
                    <th>Name</th><th>Type</th><th>Test</th><th>Traits</th><th>Effect</th><th>Points</th>
                </tr>
            </thead>
            <tbody>
                ${unit.weapons.map((wpn, index) => {
                    crewPoints += parseInt(wpn.points, 10) || 0;
                    const pointsCell = (index === 0) ? `<td><input type="number" value="${wpn.points}" class="weapon-points" style="width: 50px;"></td>` : '';
                    return `
                        <tr>
                            <td>${wpn.name}</td>
                            <td>${wpn.type}</td>
                            <td>${wpn.test}</td>
                            <td>${wpn.traits}</td>
                            <td>${wpn.effect}</td>
                            ${pointsCell}
                        </tr>
                    `;
                }).join('')}
            </tbody>
        `;
        li.appendChild(weaponTable);

        // Unit Notes
        const unitNotes = document.createElement("textarea");
        unitNotes.classList.add("unit-notes");
        unitNotes.placeholder = "Enter Perks, Upgrades, Injuries, etc.";
        unitNotes.rows = 3;
        unitNotes.style.width = "100%";
        unitNotes.style.marginTop = "5px";
        unitNotes.value = unit.notes;
        li.appendChild(unitNotes);

        // Remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove unit ABOVE";
        removeButton.addEventListener("click", () => {
            unitList.removeChild(li);
            unit.weapons.forEach(wpn => {
                crewPoints -= parseInt(wpn.points, 10) || 0;
            });
            crewPointsDisplay.textContent = crewPoints;
            if (unit.isLeader) hasLeader = false;
            if (activeCheckbox.checked) {
                unit.weapons.forEach(wpn => {
                    partyPoints -= parseInt(wpn.points, 10) || 0;
                });
                updatePartyPoints();
            }
            updateCrewPoints();
            updatePartyPoints();
        });
        li.appendChild(removeButton);

        // Add unit to the list
        unitList.appendChild(li);
    });

    // Update Party Points dynamically
    function updatePartyPoints() {
        let totalPoints = 0;
        document.querySelectorAll("input[type='checkbox']:checked").forEach(checkbox => {
            const weaponPointsArray = JSON.parse(checkbox.dataset.points);
            totalPoints += weaponPointsArray.reduce((sum, points) => sum + points, 0);
        });
        const partyPointsElement = document.querySelector("#party-points");
        if (partyPointsElement) {
            partyPointsElement.textContent = totalPoints;
        }
    }

    // Update total crew points
    const crewPointsElement = document.querySelector("#crew-points");
    if (crewPointsElement) {
        crewPointsElement.textContent = crewPoints;
    }

    alert(`List "${selectedList}" loaded successfully!`);
});

    // Delete List
    deleteListButton.addEventListener("click", function () {
        const selectedList = savedListsDropdown.value;
        if (!selectedList) {
            alert("Please select a list to delete.");
            return;
        }

        if (confirm(`Are you sure you want to delete "${selectedList}"?`)) {
            const savedLists = JSON.parse(localStorage.getItem("savedLists")) || {};
            delete savedLists[selectedList];
            localStorage.setItem("savedLists", JSON.stringify(savedLists));

            updateSavedListsDropdown();

            alert(`List "${selectedList}" deleted successfully!`);
        }
    });

    // Initialize dropdown on page load
    updateSavedListsDropdown();
});