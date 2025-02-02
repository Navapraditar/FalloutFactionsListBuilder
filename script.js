const factions = {
	    "Brotherhood of Steel": [
        { name: "Paladin", type: "Champion, Leader", perks: "Natural Leader, Burly, Rad Resistant, Hardy",
		stats: { 
        S: 7, P: 5, E: 7, C: 6, I: 5, A: 4, L: 3, W: 4  // SPECIALW stats
            }, 
			weapons: [
            { name: "Laser Rifle", points: 49, type: "Rifle (18\")", test: "4P", traits: "-", effect: "Ignite (1)"  },
            { name: "Gatling Laser", points: 57, type: "Heavy (16\")", test: "4P", traits: "Area (1\")", effect: "Ignite (2)" },
            { name: "Minigun", points: 64, type: "Heavy (14\")", test: "4S", traits: "Slow, Storm (3)", effect: "Pierce" }
        ] },
        { name: "Scribe", type: "Champion", perks: "Gun Nut",
		stats: { 
        S: 3, P: 3, E: 4, C: 4, I: 7, A: 4, L: 2, W: 2  // SPECIALW stats
            }, 
			weapons: [
            { name: "Laser Pistol", points: 21, type: "Pistol (10\")", test: "3A", traits: "CQB", effect: "Ignite (2)" },
            { name: "10mm Pistol", points: 26, type: "Pistol (10\")", test: "3A", traits: "CQB, Fast", effect: "-"  }
        ] },
        { name: "Knight", type: "Grunt", perks: "Burly, Rad Resistant, Hardy",
		stats: { 
        S: 6, P: 5, E: 6, C: 4, I: 4, A: 4, L: 2, W: 3  // SPECIALW stats
            }, 
			weapons: [
            { name: "Ripper", points: 45, type: "Melee", test: "5S", traits: "Fast", effect: "Maim" },
            { name: "Ripper and Laser Pistol", points: 49, type: "Melee", test: "5S", traits: "Fast", effect: "Maim", type2: "Pistol (10\")", test2: "3A", traits2: "CQB", effect2: "Ignite (2)"  },
            { name: "Laser Rifle", points: 50, type: "Rifle (18\")", test: "4P", traits: "-", effect: "Ignite (1)" }
        ] },
        { name: "Aspirant", type: "Grunt",
		stats: { 
        S: 4, P: 5, E: 4, C: 5, I: 4, A: 4, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Combat Rifle", points: 24, type: "Rifle (24\")", test: "4P", traits: "Fast", effect: "Maim" },
            { name: "Laser Rifle", points: 25, type: "Rifle (18\")", test: "4P", traits: "-", effect: "Ignite (1)"  }
        ] },
        { name: "Lancer", type: "Grunt",
		stats: { 
        S: 3, P: 5, E: 4, C: 4, I: 4, A: 5, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Laser Rifle", points: 25, type: "Rifle (18\")", test: "4P", traits: "-", effect: "Ignite (1)"  }
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
            { name: "Plasma Pistol and Ripper", points: 40, type: "Rifle (18\")", test: "4P", traits: "-", effect: "Meltdown", type2: "Melee", test2: "5S", traits2: "Fast", effect2: "Maim" },
            { name: "Missle Launcher", points: 42, type: "Heavy (26\")", test: "5S", traits: "Area (3\"), Slow", effect: "Maim" }
        ] },
        { name: "Assaultron", type: "Grunt", perks: "Machine, Rad Resistant",
		stats: { 
        S: 6, P: 6, E: 5, C: 1, I: 1, A: 5, L: 1, W: 2  // SPECIALW stats
            }, 
			weapons: [
            { name: "Assaultron Claws & Assaultron Eye Beam", points: 45, type: "Melee", test: "4S", traits: "Fast", effect: "Maim" }
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
            { name: "Heavy Pipe Pistol and Sledgehammer", points: 46, type: "Pistol (8\")", test: "4A", traits: "CQB", effect: "Pierce", type2: "Melee", test2: "4S", traits2: "Unwieldy (5), Wind Up", effect2: "Maim"  },
            { name: "Assault Rifle and Sledgehammer", points: 48, type: "Rifle (20\")", test: "4P", traits: "Storm (1)", effect: "Maim", type2: "Melee", test2: "4S", traits2: "Unwieldy (5), Wind Up", effect2: "Maim"  }
        ] },
        { name: "Brute", type: "Champion", perks: "Burly, Rad Resistant",
		stats: { 
        S: 6, P: 5, E: 6, C: 5, I: 4, A: 5, L: 2, W: 2  // SPECIALW stats
            }, 
			weapons: [
            { name: "Sledgehammer", points: 37, type: "Melee", test: "4S", traits: "Unwieldy (5), Wind Up", effect: "Maim"  },
            { name: "Minigun", points: 48, type: "Heavy (14\")", test: "4S", traits: "Slow, Storm (3)", effect: "Pierce"  }
        ] },
        { name: "Skirmisher", type: "Grunt", perks: "Burly, Rad Resistant",
		stats: { 
        S: 5, P: 4, E: 5, C: 4, I: 5, A: 4, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Automatic Pipe Rifle", points: 28, type: "Rifle (16\")", test: "3P", traits: "Aim (+1), Storm (1)", effect: "Suppress (2)" },
            { name: "Precision Pipe Rifle", points: 30, type: "Rifle (20\")", test: "3P", traits: "Aim (+2)", effect: "Pierce" }
        ] },
        { name: "Enforcer", type: "Grunt", perks: "Burly, Rad Resistant",
		stats: { 
        S: 5, P: 3, E: 5, C: 3, I: 5, A: 4, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Pipe Pistol and Hand Weapon", points: 17, type: "Pistol (8\")", test: "4A", traits: "CQB", effect: "-", type2: "Melee", test2: "3S", traits2: "Fast", effect2: "-"  },
            { name: "Hand Weapon and Molotov Cocktails", points: 25, type: "Melee", test: "3S", traits: "Fast", effect: "-", type2: "Grenade (8\")", test2: "2A", traits2: "Area (2\"), CQB", effect2: "Ignite (2)"  },
            { name: "Heavy Pipe Pistol and Sledgehammer", points: 25, type: "Pistol (8\")", test: "4A", traits: "CQB", effect: "Pierce", type2: "Melee", test2: "4S", traits2: "Unwieldy (5), Wind Up", effect2: "Maim" }
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
        { name: "Butcher in Power Armor", type: "Champion, Leader", perks: "Natural Leader, Burly, Rad Resistant, Hardy, Personal Stash",
		stats: { 
        S: 5, P: 5, E: 5, C: 5, I: 5, A: 5, L: 3, W: 4  // SPECIALW stats
            }, 
			weapons: [
            { name: "Assault Rifle", points: 46, type: "Rifle (20\")", test: "4P", traits: "Storm (1)", effect: "Maim"  }
        ] },
        { name: "Veteran", type: "Champion",
		stats: { 
        S: 4, P: 4, E: 4, C: 4, I: 4, A: 4, L: 2, W: 2  // SPECIALW stats
            }, 
			weapons: [
            { name: "Hand Weapon", points: 23, type: "Melee", test: "3S", traits: "Fast", effect: "-" },
            { name: "Hunting Rifle", points: 39, type: "Rifle (22\")", test: "3P", traits: "Aim (+1)", effect: "Pierce" },
            { name: "Minigun", points: 47, type: "Heavy (14\")", test: "4S", traits: "Slow, Storm (3)", effect: "Pierce" }
        ] },
        { name: "Scavver", type: "Grunt",
		stats: { 
        S: 3, P: 4, E: 3, C: 3, I: 3, A: 3, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Short Hunting Rifle", points: 10, type: "Rifle (14\")", test: "3P", traits: "-", effect: "Pierce"  },
            { name: "Sawn-off Shotgun", points: 13, type: "Rifle (8\")", test: "4P", traits: "CQB, Storm (2)", effect: "Maim" },
            { name: "Pipe Rifle", points: 12, type: "Rifle (20\")", test: "3P", traits: "Aim (+1)", effect: "Suppress (1)"},
            { name: "Automatic Pipe Rifle", points: 14, type: "Rifle (16\")", test: "3P", traits: "Aim (+1), Storm (1)", effect: "Suppress (2)" }
        ] },
        { name: "Psycho", type: "Grunt",
		stats: { 
        S: 4, P: 3, E: 3, C: 3, I: 3, A: 4, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Hand Weapon", points: 8, type: "Melee", test: "3S", traits: "Fast", effect: "-" },
            { name: "Pipe Revolver & Hand Weapon", points: 11, type: "Pistol (12\")", test: "3A", traits: "Aim (+1), CQB", effect: "Pierce", type2: "Melee", test2: "3S", traits2: "Fast", effect2: "-" },
            { name: "Pipe Pistol & Machete", points: 14, type: "Pistol (8\")", test: "4A", traits: "CQB", effect: "-", type2: "Melee", test2: "4S", traits2: "-", effect2: "Maim"  }
        ] },
        { name: "Waster", type: "Grunt",
		stats: { 
        S: 3, P: 3, E: 3, C: 3, I: 3, A: 3, L: 1, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Stripped Pipe Rifle", points: 9, type: "Rifle (12\")", test: "3P", traits: "-", effect: "Suppress (1)" },
            { name: "Pipe Pistol & Molotovs", points: 14, type: "Pistol (8\")", test: "4A", traits: "CQB", effect: "-", type2: "Grenade (8\")", test2: "2A", traits2: "Area (2\"), CQB", effect2: "Ignite (2)" },
            { name: "Pipe Pistol & Hand Weapon", points: 16, type: "Pistol (8\")", test: "4A", traits: "CQB", effect: "-", type2: "Melee", test2: "3S", traits2: "Fast", effect2: "-" },
			{ name: "Molotov Cocktails & Hand Weapon", points: 11, type: "Grenade (8\")", test: "2A", traits: "Area (2\"), CQB", effect: "Ignite (2)", type2: "Melee", test2: "3S", traits2: "Fast", effect2: "-" }
        ] }
    ],
	    "Wastelanders": [
        { name: "Protagonist", type: "Champion, Leader", perks: "Natural Leader, Inspirational, Take Me Home",
		stats: { 
        S: 4, P: 5, E: 5, C: 6, I: 6, A: 5, L: 3, W: 3  // SPECIALW stats
            }, 
			weapons: [
            { name: "10mm Pistol and Hunting Rifle", points: 44, type: "Pistol (10\")", test: "3A", traits: "CQB, Fast", effect: "-", type2: "Rifle (22\")", test2: "3P", traits2: "Aim (+1)", effect2: "Pierce" }
        ] },
        { name: "Companion", type: "Champion", perks: "Take Me Home, Pick 1: (Sniper, Scrapper, or Fortune Finder)",
		stats: { 
        S: 3, P: 5, E: 4, C: 5, I: 5, A: 4, L: 2, W: 2  // SPECIALW stats
            }, 
			weapons: [
            { name: "Sawn-Off Shotgun and Baseball Bat", points: 23, type: "Rifle (8\")", test: "4P", traits: "CQB, Storm (2)", effect: "Maim" , type2: "Melee", test2: "3S", traits2: "Wind Up", effect2: "Suppress (1)" },
            { name: "Combat Shotgun and Hand Weapon", points: 26, type: "Shotgun (10\")", test: "4P", traits: "Storm (1)", effect: "Maim" , type2: "Melee", test2: "3S", traits2: "Fast", effect2: "-"},
            { name: "Assault Rifle", points: 31, type: "Rifle (20\")", test: "4P", traits: "Storm (1)", effect: "Maim" }
        ] },
        { name: "Mercenary", type: "Grunt", perks: "Take Me Home",
		stats: { 
        S: 3, P: 4, E: 5, C: 3, I: 3, A: 4, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Combat Shotgun", points: 17, type: "Shotgun (10\")", test: "4P", traits: "Storm (1)", effect: "Maim" },
            { name: "Combat Shotgun and Hand Weapon", points: 18, type: "Shotgun (10\")", test: "4P", traits: "Storm (1)", effect: "Maim", type2: "Melee", test2: "3S", traits2: "Fast", effect2: "-"  },
            { name: "Assault Rifle ", points: 22, type: "Rifle (20\")", test: "4P", traits: "Storm (1)", effect: "Maim" }
        ] },
        { name: "Regular Joe", type: "Grunt", perks: "Take Me Home",
		stats: { 
        S: 3, P: 4, E: 3, C: 3, I: 4, A: 3, L: 1, W: 1  // SPECIALW stats
            }, 
			weapons: [
			{ name: "Pipe Pistol", points: 7, type: "Pistol (8\")", test: "4A", traits: "CQB", effect: "-" },
            { name: "10mm Pistol", points: 8, type: "Pistol (10\")", test: "3A", traits: "CQB, Fast", effect: "-" },
            { name: "Double-barrelled Shotgun", points: 12, type: "Rifle (12\")", test: "3P", traits: "Storm (2)", effect: "Maim" },
            { name: "Hunting Rifle", points: 13, type: "Rifle (22\")", test: "3P", traits: "Aim (+1)", effect: "Pierce" }
        ] },
        { name: "Good Boy", type: "Grunt",perks: "Beast, Sic 'Em, Take Me Home",
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
        S: 4, P: 4, E: 4, C: 3, I: 4, A: 4, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Sledgehammer", points: 14, type: "Melee", test: "4S", traits: "Unwieldy(5) WindUp", effect: "Maim" },
            { name: "Light Handmade Rifle", points: 18, type: "Rifle(12\")", test: "3P", traits: "Bladed Fast", effect: "Suppress(1)" },
            { name: "Pipe Revolver and Baseball Bat", points: 23, type: "Pistol(12\")", test: "3A", traits: "Aim(1\") CQB", effect: "Pierce", type2: "Melee", test2: "3S", traits2: "WindUp", effect2: "Suppress (1)" },
            { name: "10mm Pistol and Hand Weapon", points: 23, type: "Pistol(10\")", test: "3A", traits: "CQB Fast", effect: "-", type: "Melee", test: "3S", traits: "Fast", effect: "-"  },
            { name: "10mm Pistol and Baseball Bat", points: 24, type: "Pistol(10\")", test: "3A", traits: "CQB Fast", effect: "-", type2: "Melee", test2: "3S", traits2: "WindUp", effect2: "Suppress (1)" }
        ] },
        { name: "Scavver", type: "Grunt",
		stats: { 
        S: 3, P: 4, E: 4, C: 4, I: 5, A: 3, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Sawn-Off Shotgun", points: 18, type: "Rifle(8\")", test: "4P", traits: "CQB Storm(2)", effect: "Maim" },
            { name: "Handmade Rifle", points: 23, type: "Rifle(18\")", test: "4P", traits: "Fast", effect: "Suppress(2)" },
            { name: "Automatic Handmade Rifle", points: 27, type: "Rifle(14\")", test: "3P", traits: "Fast Storm(2)", effect: "Suppress(2)"  }
        ] },
        { name: "Waster", type: "Grunt",
		stats: { 
        S: 3, P: 4, E: 3, C: 3, I: 3, A: 3, L: 1, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Pipe Revolver", points: 12, type: "Pistol(12\")", test: "3A", traits: "Aim(1\") CQB", effect: "Pierce" },
            { name: "10mm Pistol", points: 13, type: "Pistol(10\")", test: "3A", traits: "CQB Fast", effect: "-" },
            { name: "Pipe Revolver and Hand Weapon", points: 14, type: "Pistol(12\")", test: "3A", traits: "Aim(1\") CQB", effect: "Pierce", type: "Melee", test: "3S", traits: "Fast", effect: "-" },
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
            { name: "Pipe Revolver and Hand Weapon", points: 21, type: "Pistol(12\")", test: "3A", traits: "Aim(1\") CQB", effect: "Pierce" , type2: "Melee", test2: "3S", traits2: "Fast", effect2: "-" },
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
            { name: "Pipe Revolver and Hand Weapon", points: 14, type: "Pistol(12\")", test: "3A", traits: "Aim(1\") CQB", effect: "Pierce" , type2: "Melee", test2: "3S", traits2: "Fast", effect2: "-" },
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
            { name: "Pipe Revolver and Hand Weapon", points: 23, type: "Pistol(12\")", test: "3A", traits: "Aim(1\") CQB", effect: "Pierce",type2: "Melee", test2: "3S", traits2: "Fast", effect2: "-"  },
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
			{ name: "Pipe Revolver and Machete", points: 15, type: "Pistol(12\")", test: "3A", traits: "Aim(1\") CQB", effect: "Pierce" , type2: "Melee", test2: "4S", traits2: "-", effect2: "Maim" },
            { name: ".44 Pistol and Machete", points: 16, type: "Pistol(14\")", test: "4A", traits: "Aim(+1)", effect: "Pierce", type2: "Melee", test2: "4S", traits2: "-", effect2: "Maim" }
        ] }
    ]
};

// Example data for different factions
const weaponData = {
	"Brotherhood of Steel": [
    { weapon: "Ripper", type: "Melee", test: "5S", traits: "Fast", effect: "Maim" },
    { weapon: "10mm Pistol", type: "Pistol (10\")", test: "3A", traits: "CQB, Fast", effect: "-" },
    { weapon: "Laser Pistol", type: "Pistol (10\")", test: "3A", traits: "CQB", effect: "Ignite (2)" },
    { weapon: "Combat Rifle", type: "Rifle (24\")", test: "4P", traits: "Fast", effect: "Maim" },
    { weapon: "Laser Rifle", type: "Rifle (18\")", test: "4P", traits: "-", effect: "Ignite (1)" },
    { weapon: "Flamer", type: "Heavy (6\")", test: "4S", traits: "Area (2\"), CQB", effect: "Ignite (3)" },
    { weapon: "Gatling Laser", type: "Heavy (16\")", test: "4P", traits: "Area (1\")", effect: "Ignite (2)" },
    { weapon: "Minigun", type: "Heavy (14\")", test: "4S", traits: "Slow, Storm (3)", effect: "Pierce" }
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
    { weapon: "Heavy Pipe Pistol", type: "Pistol (8\")", test: "4A", traits: "CQB", effect: "Pierce" },
    { weapon: "Pipe Pistol", type: "Pistol (8\")", test: "4A", traits: "CQB", effect: "-" },
    { weapon: "Assault Rifle", type: "Rifle (20\")", test: "4P", traits: "Storm (1)", effect: "Maim" },
    { weapon: "Automatic Pipe Rifle", type: "Rifle (16\")", test: "3P", traits: "Aim (+1), Storm (1)", effect: "Suppress (2)" },
    { weapon: "Precision Pipe Rifle", type: "Rifle (20\")", test: "3P", traits: "Aim (+2)", effect: "Pierce" },
    { weapon: "Minigun", type: "Heavy (14\")", test: "4S", traits: "Slow, Storm (3)", effect: "Pierce" },
    { weapon: "Molotov Cocktails", type: "Grenade (8\")", test: "2A", traits: "Area (2\"), CQB", effect: "Ignite (2)" }
],	
	"Wasteland Raiders": [
    { weapon: "Hand Weapon", type: "Melee", test: "3S", traits: "Fast", effect: "-" },
    { weapon: "Machete", type: "Melee", test: "4S", traits: "-", effect: "Maim" },
    { weapon: "Pipe Pistol", type: "Pistol (8\")", test: "4A", traits: "CQB", effect: "-" },
    { weapon: "Pipe Revolver", type: "Pistol (12\")", test: "3A", traits: "Aim (+1), CQB", effect: "Pierce" },
    { weapon: "Assault Rifle", type: "Rifle (20\")", test: "4P", traits: "Storm (1)", effect: "Maim" },
    { weapon: "Automatic Pipe Rifle", type: "Rifle (16\")", test: "3P", traits: "Aim (+1), Storm (1)", effect: "Suppress (2)" },
    { weapon: "Hunting Rifle", type: "Rifle (22\")", test: "3P", traits: "Aim (+1)", effect: "Pierce" },
    { weapon: "Pipe Rifle", type: "Rifle (20\")", test: "3P", traits: "Aim (+1)", effect: "Suppress (1)" },
    { weapon: "Sawn-off Shotgun", type: "Rifle (8\")", test: "4P", traits: "CQB, Storm (2)", effect: "Maim" },
    { weapon: "Short Hunting Rifle", type: "Rifle (14\")", test: "3P", traits: "-", effect: "Pierce" },
    { weapon: "Stripped Pipe Rifle", type: "Rifle (12\")", test: "3P", traits: "-", effect: "Suppress (1)" },
    { weapon: "Minigun", type: "Heavy (14\")", test: "4S", traits: "Slow, Storm (3)", effect: "Pierce" },
    { weapon: "Molotov Cocktails", type: "Grenade (8\")", test: "2A", traits: "Area (2\"), CQB", effect: "Ignite (2)" }
],
	"Wastelanders": [
    { weapon: "Baseball Bat", type: "Melee", test: "3S", traits: "Wind Up", effect: "Suppress (1)" },
    { weapon: "Claws & Jaws", type: "Melee", test: "4S", traits: "Fast", effect: "Suppress (1)" },
    { weapon: "Hand Weapon", type: "Melee", test: "3S", traits: "Fast", effect: "-" },
    { weapon: "10mm Pistol", type: "Pistol (10\")", test: "3A", traits: "CQB, Fast", effect: "-" },
    { weapon: "Pipe Pistol", type: "Pistol (8\")", test: "4A", traits: "CQB", effect: "-" },
    { weapon: "Assault Rifle", type: "Rifle (20\")", test: "4P", traits: "Storm (1)", effect: "Maim" },
    { weapon: "Combat Shotgun", type: "Shotgun (10\")", test: "4P", traits: "Storm (1)", effect: "Maim" },
    { weapon: "Double-barrelled Shotgun", type: "Rifle (12\")", test: "3P", traits: "Storm (2)", effect: "Maim" },
    { weapon: "Hunting Rifle", type: "Rifle (22\")", test: "3P", traits: "Aim (+1)", effect: "Pierce" },
    { weapon: "Sawn-off Shotgun", type: "Rifle (8\")", test: "4P", traits: "CQB, Storm (2)", effect: "Maim" }
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
		{ weapon: "Pipe Revolver", type: "Pistol(12\")", test: "3A", traits: "Aim(1\") CQB", effect: "Pierce" },
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
		{ weapon: "Pipe Revolver", type: "Pistol(12\")", test: "3A", traits: "Aim(1\") CQB", effect: "Pierce" },
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
		{ weapon: "Mothman Screech", type: "Pistol(10\")", test: "5A", traits: "Pulse", Fase: "Pushback(1)" },
		{ weapon: "Pipe Revolver", type: "Pistol(12\")", test: "3A", traits: "Aim(1\") CQB", effect: "Pierce" },
		{ weapon: "Combat Shotgun", type: "Rifle(10\")", test: "4P", traits: "Storm(1)", effect: "Maim" },
		{ weapon: "Handmade Rifle", type: "Rifle(18\")", test: "4P", traits: "Fast", effect: "Suppress(2)" },
		{ weapon: "Double-barrelled Shotgun", type: "Rifle (12\")", test: "3P", traits: "Storm (2)", effect: "Maim" },
		{ weapon: "Hardened Sniper Rifle",type: "Rifle(36\")", test: "2P", traits: "Aim(3)", effect: "Showstopper" },
		{ weapon: "Flamer", type: "Heavy(6\")", test: "4S", traits: "Area(2\") CQB", effect: "Ignite(3)" },
		{ weapon: "Molotov Cocktails", type: "Grenade (8\")", test: "2A", traits: "Area (2\"), CQB", effect: "Ignite (2)" }
    ]
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
            name: "Pre-War Tech",
            descr: "Enact this Ploy at the start of the game, before the start of Turn 1. Select one of your model’s weapons. It gains Brutalise, Pierce or Suppress(2)."
        },
        {
            name: "Vertibird Drop",
            descr: "Enact this Ploy at the start of the game, before the start of Turn 1. Choose one of your models. They are not deployed at the start of the game, Instead, deploy them anywhere on the board at the start of Turn 2."
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
            descr: "Enact this Ploy at the start of any of your Turns. As an additional cost, remove either a Chem or Rare Chem from your stash. Choose one of your Exhausted Grunts. Remove all Fatigue from it. Add 3 Bonus Dice to all Attack Tests this model makes. At the end of the round, remove this model from play."
        }
    ],
	    "Wastelanders": [
        {
            name: "I Don’t Want To Set the World on Fire",
            descr: "Enact this Ploy when an enemy model completes a Get Moving action. Nominate a piece of Terrain. Until the end of the round, when an enemy model moves within 3” of this Terrain, their controlling player makes an Evade Test (2A). If the model fails the test, it suffers 3 Damage."
        },
        {
            name: "Some Rain Must Fall",
            descr: "Enact this Ploy when a friendly model is Incapacitated by an enemy model. Every friendly model may make an Open Fire or Brawl action without taking Fatigue against the enemy model that made the Action that Incapacitated the friendly model."
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
    const tableBody = document.querySelector('#weaponsTable tbody');
    tableBody.innerHTML = '';  // Clear existing rows

    if (faction && weaponData[faction]) {
        weaponData[faction].forEach(weapon => {
            const row = document.createElement('tr');
            
            // Add cells to the row for each weapon property
            Object.values(weapon).forEach(val => {
                const cell = document.createElement('td');
                cell.textContent = val;
                row.appendChild(cell);
            });
            
            // Append the row to the table body
            tableBody.appendChild(row);
        });
    }
}

// Function to update the ploy table based on selected faction
function updatePloysTable() {
    const faction = document.getElementById('faction-select').value;
    const tableBody = document.querySelector('#ploysTable tbody');
    tableBody.innerHTML = '';  // Clear existing rows

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
        // Update the unit list header with selected faction
        unitList.innerHTML = `<h3>${selectedFaction}</h3>`;
        
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
		
		        // Create the Active checkbox
        const activeCheckbox = document.createElement("input");
        activeCheckbox.type = "checkbox";
        activeCheckbox.style.marginLeft = "10px"; // Optional style for spacing
        li.appendChild(activeCheckbox);

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

        statsTable.innerHTML = `
            <thead>
                <tr><th>S</th><th>P</th><th>E</th><th>C</th><th>I</th><th>A</th><th>L</th><th>(W)</th></tr>
            </thead>
            <tbody>
                <tr>
                    <td>${selectedUnitData.stats.S}</td>
                    <td>${selectedUnitData.stats.P}</td>
                    <td>${selectedUnitData.stats.E}</td>
                    <td>${selectedUnitData.stats.C}</td>
                    <td>${selectedUnitData.stats.I}</td>
                    <td>${selectedUnitData.stats.A}</td>
                    <td>${selectedUnitData.stats.L}</td>
                    <td>${selectedUnitData.stats.W}</td>
                </tr>
            </tbody>`;
        li.appendChild(statsTable);

        const weaponDataTable = document.createElement("table");
        weaponDataTable.style.marginTop = "10px";
        weaponDataTable.style.borderCollapse = "collapse";
        weaponDataTable.style.width = "100%";
        
const selectedWeaponData = selectedUnitData.weapons.find(w => w.name === selectedWeapon);

// Start building the table HTML
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
            <td>${selectedWeaponData.points}</td>
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
            </tr>`;
        }

        // Close the tbody and table tags
        tableHTML += `</tbody>`;

// Update the table with the generated HTML
weaponDataTable.innerHTML = tableHTML;

li.appendChild(weaponDataTable);

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
			if (selectedUnitData) {
				unitNotes.value = selectedUnitData.perks; // Set perks as default text
			}
		}
		

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
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

    // Add crew notes at the top of the file
    if (crewNotes) {
        unitListContent += `Crew Notes:\n${crewNotes}\n\n-----------------------\n`;  // Add crew notes section
    }

    // Loop through each list item to gather the unit name, stats, and unit notes
    document.querySelectorAll('#unit-list li').forEach(item => {
        const unitName = item.querySelector("span").textContent; // Get unit name
        const stats = Array.from(item.querySelectorAll("td")).map((td, index) => {
            // Assuming the stats are in specific order: S, P, E, C, I, A, L, (W)
            const labels = ['S', 'P', 'E', 'C', 'I', 'A', 'L', '(W)','Weapon(s)','Type','Test','Traits','Crit','Pts','','Type2','Test2','Traits2','Crit2'];
                        // If index is the position of (W), add a line break after it
            let stat = `${labels[index]}: ${td.textContent}`;
            
            // Add line breaks after (W) and Pts
            if (labels[index] === '(W)' || labels[index] === 'Pts') {
                stat += '\n'; // Add a line break after (W) or Pts
            }
            
            return stat;
        }).join(' | '); // Join all stats with " | " separator
        
        const unitNotes = item.querySelector("textarea") ? item.querySelector("textarea").value : ''; // Get unit notes

        // Append unit name, "SPECIAL" label, stats, and unit notes to the content, formatted
        unitListContent += `Unit: ${unitName}\n`;
        unitListContent += `${stats}\n`;  // Add "SPECIAL" label before the stats
        unitListContent += `Notes: ${unitNotes}\n\n-----------------------\n`;  // Add unit notes with separation
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
    window.print(); // This triggers the browser's print dialog
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

			// Extract stats
			const stats = Array.from(statsTable.querySelectorAll("td")).map(td => td.textContent);

			// Extract weapon details
			const weaponRows = Array.from(item.querySelectorAll("table:nth-of-type(2) tbody tr")); 
			const weapons = weaponRows.map(row => {
				const cells = row.querySelectorAll("td");
				return {
					name: cells[0]?.textContent || "",
					type: cells[1]?.textContent || "",
					test: cells[2]?.textContent || "",
					traits: cells[3]?.textContent || "",
					effect: cells[4]?.textContent || "",
					points: cells[5]?.textContent || ""
				};
			});


			const notes = item.querySelector("textarea") ? item.querySelector("textarea").value : "";

			unitItems.push({
				unitName: unitName,
				stats: stats,
				weapons: weapons,
				notes: notes
			});
		});
		
		    // Collect the crew notes text
		const crewNotesTextarea = document.querySelector("#crew-notes");
    const crewNotes = crewNotesTextarea ? crewNotesTextarea.value : ""; // Save crew notes if it exists


        // Save to local storage
        const savedLists = JSON.parse(localStorage.getItem("savedLists")) || {};
		savedLists[listName] = {
		unitItems: unitItems, // save the unit items
		crewNotes: crewNotes  // save the crew notes
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
		const crewNotes = loadedList?.crewNotes || "";  // Retrieve crew notes if available
		if (crewNotesTextarea) {
			crewNotesTextarea.value = crewNotes;  // Set crew notes in the textarea
		}		
		
			// Load unit items
			loadedList?.unitItems.forEach(unit => {
            const li = document.createElement("li");

            // Unit name and weapon text
            const unitName = document.createElement("span");
            unitName.style.fontWeight = "bold";
            unitName.textContent = unit.unitName;
            li.appendChild(unitName);
            li.appendChild(document.createTextNode(": "));
 

            // Create a table for the SPECIALW stats
			const statsTable = document.createElement("table");
			statsTable.style.marginTop = "10px";
			statsTable.style.borderCollapse = "collapse";
			statsTable.style.width = "100%";
			statsTable.innerHTML = `
				<thead>
					<tr>
						<th>S</th><th>P</th><th>E</th><th>C</th><th>I</th><th>A</th><th>L</th><th>(W)</th>
					</tr>
				</thead>
				<tbody>
					<tr>${unit.stats.map(stat => `<td>${stat}</td>`).join('')}</tr>
				</tbody>`;
			li.appendChild(statsTable);
			
        // Create a table for weapon details
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
				 ${unit.weapons.map(wpn => {
									// Sum the weapon points into crewPoints
									crewPoints += parseInt(wpn.points, 10) || 0;

									return `
										<tr>
											<td>${wpn.name}</td>
											<td>${wpn.type}</td>
											<td>${wpn.test}</td>
											<td>${wpn.traits}</td>
											<td>${wpn.effect}</td>
											<td>${wpn.points}</td>
										</tr>
									`;
								}).join('')}
							</tbody>
						`;
						li.appendChild(weaponTable);

            // Add a text box for unit notes
            const unitNotes = document.createElement("textarea");
            unitNotes.classList.add("unit-notes");
            unitNotes.placeholder = "Enter Perks, Upgrades, Injuries, etc.";
            unitNotes.rows = 3;
            unitNotes.style.width = "100%";
            unitNotes.style.marginTop = "5px";
            unitNotes.value = unit.notes; // Load the saved notes
            li.appendChild(unitNotes);

            // Add to unit list
            unitList.appendChild(li);
        });
		
	// Update total points (sum of all weapon points)
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


