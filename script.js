const factions = {
	    "Brotherhood of Steel": [
        { name: "Paladin", type: "Champion, Leader",
		stats: { 
        S: 7, P: 5, E: 7, C: 6, I: 5, A: 4, L: 3, W: 4  // SPECIALW stats
            }, 
			weapons: [
            { name: "Laser Rifle", points: 49 },
            { name: "Gatling Laser", points: 57 },
            { name: "Minigun", points: 64 }
        ] },
        { name: "Scribe", type: "Champion",
		stats: { 
        S: 3, P: 3, E: 4, C: 4, I: 7, A: 4, L: 2, W: 2  // SPECIALW stats
            }, 
			weapons: [
            { name: "Laser Pistol", points: 21 },
            { name: "10mm Pistol", points: 26 }
        ] },
        { name: "Knight", type: "Grunt",
		stats: { 
        S: 6, P: 5, E: 6, C: 4, I: 4, A: 4, L: 2, W: 3  // SPECIALW stats
            }, 
			weapons: [
            { name: "Ripper", points: 45 },
            { name: "Ripper and Laser Pistol", points: 49 },
            { name: "Laser Rifle", points: 50 }
        ] },
        { name: "Aspirant", type: "Grunt",
		stats: { 
        S: 4, P: 5, E: 4, C: 5, I: 4, A: 4, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Combat Rifle", points: 24 },
            { name: "Laser Rifle", points: 25 }
        ] },
        { name: "Lancer", type: "Grunt",
		stats: { 
        S: 3, P: 5, E: 4, C: 4, I: 4, A: 5, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Laser Rifle", points: 25 }
        ] }
    ],
	    "Gunners": [
        { name: "Commander", type: "Champion, Leader",
		stats: { 
        S: 4, P: 5, E: 4, C: 6, I: 5, A: 4, L: 3, W: 3  // SPECIALW stats
            }, 
			weapons: [
            { name: "Laser Rifle", points: 35 },
            { name: "Plasma Rifle", points: 38 },
            { name: "Plasma Rifle and Ripper", points: 41 }
        ] },
		{ name: "Commander in Power Armor", type: "Champion, Leader",
		stats: { 
        S: 6, P: 5, E: 6, C: 6, I: 5, A: 4, L: 3, W: 4  // SPECIALW stats
            }, 
			weapons: [
            { name: "Laser Rifle", points: 50 },
            { name: "Plasma Rifle", points: 53 },
            { name: "Plasma Rifle and Ripper", points: 56 }
        ] },
        { name: "Lieutenant", type: "Champion",
		stats: { 
        S: 4, P: 5, E: 4, C: 4, I: 4, A: 5, L: 2, W: 2  // SPECIALW stats
            }, 
			weapons: [
            { name: "Combat Rifle", points: 35 },
            { name: "Precision Combat Rifle", points: 39 },
            { name: "Plasma Pistol and Ripper", points: 40 },
            { name: "Missle Launcher", points: 42 }
        ] },
        { name: "Assaultron", type: "Grunt",
		stats: { 
        S: 6, P: 6, E: 5, C: 1, I: 1, A: 5, L: 1, W: 2  // SPECIALW stats
            }, 
			weapons: [
            { name: "Assaultron Claws & Assaultron Eye Beam", points: 45 }
        ] },
        { name: "Conscript", type: "Grunt",
		stats: { 
        S: 4, P: 5, E: 4, C: 2, I: 4, A: 3, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Laser Rifle", points: 20 },
            { name: "Combat Rifle", points: 22 },
			{ name: "Assault Rifle", points: 23 },
            { name: "Laser Rifle and Stun Baton", points: 25 }
        ] },
        { name: "Corporal", type: "Grunt",
		stats: { 
        S: 4, P: 3, E: 3, C: 2, I: 3, A: 4, L: 1, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Laser Pistol", points: 11 },
            { name: "10mm Pistol and Frag Grenades", points: 13 },
			{ name: "Laser Pistol and Hand Weapon", points: 13 },
            { name: "10mm and Hand Weapon", points: 14 }
        ] }
    ],
	    "Super Mutants": [
        { name: "Master", type: "Champion, Leader",
		stats: { 
        S: 6, P: 5, E: 6, C: 5, I: 5, A: 5, L: 3, W: 3  // SPECIALW stats
            }, 
			weapons: [
            { name: "Heavy Pipe Pistol and Sledgehammer", points: 46 },
            { name: "Assault Rifle and Sledgehammer", points: 48 }
        ] },
        { name: "Brute", type: "Champion",
		stats: { 
        S: 6, P: 5, E: 6, C: 5, I: 4, A: 5, L: 2, W: 2  // SPECIALW stats
            }, 
			weapons: [
            { name: "Sledgehammer", points: 37 },
            { name: "Minigun", points: 48 }
        ] },
        { name: "Skirmisher", type: "Grunt",
		stats: { 
        S: 5, P: 4, E: 5, C: 4, I: 5, A: 4, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Automatic Pipe Rifle", points: 28 },
            { name: "Precision Pipe Rifle", points: 30 }
        ] },
        { name: "Enforcer", type: "Grunt",
		stats: { 
        S: 5, P: 3, E: 5, C: 3, I: 5, A: 4, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Pipe Pistol and Hand Weapon", points: 17 },
            { name: "Hand Weapon and Molotov Cocktails", points: 25 },
            { name: "Heavy Pipe Pistol and Sledgehammer", points: 25 }
        ] },
        { name: "Mutant Hound", type: "Grunt",
		stats: { 
        S: 4, P: 2, E: 4, C: 3, I: 3, A: 5, L: 1, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Claws and Jaws", points: 10 }
        ] }
    ],
	    "Wasteland Raiders": [
        { name: "Butcher", type: "Champion, Leader",
		stats: { 
        S: 5, P: 5, E: 5, C: 5, I: 5, A: 5, L: 3, W: 4  // SPECIALW stats
            }, 
			weapons: [
            { name: "Assault Rifle", points: 46 }
        ] },
        { name: "Veteran", type: "Champion",
		stats: { 
        S: 4, P: 4, E: 4, C: 4, I: 4, A: 4, L: 2, W: 2  // SPECIALW stats
            }, 
			weapons: [
            { name: "Hand Weapon", points: 23 },
            { name: "Hunting Rifle", points: 39 },
            { name: "Minigun", points: 47 }
        ] },
        { name: "Scavver", type: "Grunt",
		stats: { 
        S: 3, P: 4, E: 3, C: 3, I: 3, A: 3, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Short Hunting Rifle", points: 10 },
            { name: "Sawn-off Shotgun", points: 13 },
            { name: "Pipe Rifle", points: 12 },
            { name: "Automatic Pipe Rifle", points: 14 }
        ] },
        { name: "Psycho", type: "Grunt",
		stats: { 
        S: 4, P: 3, E: 3, C: 3, I: 3, A: 4, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Hand Weapon", points: 8 },
            { name: "Pipe Revolver & Hand Weapon", points: 11 },
            { name: "Pipe Pistol & Machete", points: 14 }
        ] },
        { name: "Waster", type: "Grunt",
		stats: { 
        S: 3, P: 3, E: 3, C: 3, I: 3, A: 3, L: 1, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Stripped Pipe Rifle", points: 9 },
            { name: "Pipe Pistol & Molotovs", points: 14 },
            { name: "Pipe Pistol & Hand Weapon", points: 16 },
			{ name: "Molotov Cocktails & Hand Weapon", points: 11 }
        ] }
    ],
	    "Wastelanders": [
        { name: "Protagonist", type: "Champion, Leader",
		stats: { 
        S: 4, P: 5, E: 5, C: 6, I: 6, A: 5, L: 3, W: 3  // SPECIALW stats
            }, 
			weapons: [
            { name: "10mm Pistol and Hunting Rifle", points: 44 }
        ] },
        { name: "Companion", type: "Champion",
		stats: { 
        S: 3, P: 5, E: 4, C: 5, I: 5, A: 4, L: 2, W: 2  // SPECIALW stats
            }, 
			weapons: [
            { name: "Sawn-Off Shotgun and Baseball Bat", points: 23 },
            { name: "Combat Shotgun and Hand Weapon", points: 26 },
            { name: "Assault Rifle", points: 31 }
        ] },
        { name: "Mercenary", type: "Grunt",
		stats: { 
        S: 3, P: 4, E: 5, C: 3, I: 3, A: 4, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Combat Shotgun", points: 17 },
            { name: "Combat Shotgun and Hand Weapon", points: 18 },
            { name: "Assault Rifle ", points: 22 }
        ] },
        { name: "Regular Joe", type: "Grunt",
		stats: { 
        S: 3, P: 4, E: 3, C: 3, I: 4, A: 3, L: 1, W: 1  // SPECIALW stats
            }, 
			weapons: [
			{ name: "Pipe Pistol", points: 7 },
            { name: "10mm Pistol", points: 8 },
            { name: "Double-barrelled Shotgun", points: 12 },
            { name: "Hunting Rifle", points: 13 }
        ] },
        { name: "Good Boy", type: "Grunt",
		stats: { 
        S: 4, P: 3, E: 3, C: 3, I: 3, A: 4, L: 1, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Claws and Jaws", points: 7 }
        ] }
    ],
    "The Operators": [
        { name: "Boss", type: "Champion, Leader",
		stats: { 
        S: 5, P: 6, E: 5, C: 6, I: 5, A: 6, L: 3, W: 3  // SPECIALW stats
            }, 
			weapons: [
            { name: "Marksman's Handmade Rifle", points: 44 },
            { name: "Combat Rifle", points: 50 },
            { name: "Plasma Pistol and Shishkebab", points: 51 }
        ] },
        { name: "Made Man", type: "Champion",
		stats: { 
        S: 4, P: 6, E: 4, C: 4, I: 5, A: 4, L: 2, W: 2  // SPECIALW stats
            }, 
			weapons: [
            { name: "Syringer", points: 31 },
            { name: "Combat Rifle", points: 33 },
            { name: "Combat Shotgun and Frag Grenades", points: 38 },
            { name: "Missle Launcher", points: 48 }
        ] },
        { name: "Psycho", type: "Grunt",
		stats: { 
        S: 4, P: 4, E: 4, C: 3, I: 4, A: 4, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "10mm Pistol", points: 15 },
            { name: "Combat Shotgun", points: 17 },
            { name: "10mm Pistol and Hand Weapon", points: 21 },
            { name: "10mm Pistol and Baseball Bat", points: 22 }
        ] },
        { name: "Scavver", type: "Grunt",
		stats: { 
        S: 6, P: 5, E: 5, C: 5, I: 5, A: 6, L: 3, W: 3  // SPECIALW stats
            }, 
			weapons: [
            { name: "Handmade Rifle", points: 23 },
            { name: "Marksman's Handmade Rifle", points: 24 },
            { name: "Combat Rifle", points: 27 }
        ] },
        { name: "Waster", type: "Grunt",
		stats: { 
        S: 6, P: 5, E: 5, C: 5, I: 5, A: 6, L: 3, W: 3  // SPECIALW stats
            }, 
			weapons: [
            { name: "Baseball Bat", points: 10 },
            { name: "10mm Pistol and Hand Weapon", points: 13 },
            { name: "Handmade Rifle", points: 14 }
        ] }
    ],
    "The Pack": [
        { name: "Alpha", type: "Champion, Leader",
		stats: { 
        S: 5, P: 5, E: 5, C: 6, I: 6, A: 5, L: 3, W: 3  // SPECIALW stats
            }, 
			weapons: [
            { name: "Sawn-off Shotgun", points: 35 },
            { name: "10mm Pistol and Deathclaw Gauntlet", points: 42 },
            { name: "Automatic Handmade Rifle and Baseball Bat", points: 48 }
        ] },
        { name: "Top Dog", type: "Champion",
		stats: { 
        S: 5, P: 4, E: 4, C: 5, I: 4, A: 5, L: 2, W: 2  // SPECIALW stats
            }, 
			weapons: [
            { name: "10mm Pistol and Baseball Bat", points: 23 },
            { name: "Handmade Rifle and Baseball Bat", points: 25 },
            { name: "Sledgehammer and Predator Grenades", points: 33 },
            { name: "Flamer", points: 36 }
        ] },
        { name: "Psycho", type: "Grunt",
		stats: { 
        S: 4, P: 4, E: 4, C: 3, I: 4, A: 4, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Sledgehammer", points: 14 },
            { name: "Light Handmade Rifle", points: 18 },
            { name: "Pipe Revolver and Baseball Bat", points: 23 },
            { name: "10mm Pistol and Hand Weapon", points: 23 },
            { name: "10mm Pistol and Baseball Bat", points: 24 }
        ] },
        { name: "Scavver", type: "Grunt",
		stats: { 
        S: 3, P: 4, E: 4, C: 4, I: 5, A: 3, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Sawn-Off Shotgun", points: 18 },
            { name: "Handmade Rifle", points: 23 },
            { name: "Automatic Handmade Rifle", points: 27 }
        ] },
        { name: "Waster", type: "Grunt",
		stats: { 
        S: 3, P: 4, E: 3, C: 3, I: 3, A: 3, L: 1, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Pipe Revolver", points: 12 },
            { name: "10mm Pistol", points: 13 },
            { name: "Pipe Revolver and Hand Weapon", points: 14 },
            { name: "Light Handmade Rifle", points: 16 }
        ] }
    ],
    "The Disciples": [
        { name: "Tormentor", type: "Champion, Leader", 
		stats: { 
        S: 6, P: 5, E: 5, C: 5, I: 5, A: 6, L: 3, W: 3  // SPECIALW stats
            }, 
			weapons: [
            { name: "Handmade Rifle", points: 44 },
            { name: "Precision Hunting Rifle", points: 45 },
            { name: ".44 Pistol and Machete", points: 47 }
        ] },
        { name: "Butcher", type: "Champion",
		stats: { 
        S: 4, P: 5, E: 4, C: 4, I: 5, A: 5, L: 2, W: 2  // SPECIALW stats
            }, 
		weapons: [
            { name: "Handmade Rifle", points: 30 },
            { name: "Syringer", points: 28 },
            { name: "Marksman's Handmade Rifle", points: 30 },
            { name: "10mm Pistol and Nuka-Grenade", points: 40 }
        ] },
        { name: "Psycho", type: "Grunt",
		stats: { 
        S: 5, P: 3, E: 4, C: 4, I: 3, A: 4, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Short Hunting Rifle", points: 15 },
            { name: "Light Handmade Rifle", points: 20 },
            { name: "Pipe Revolver and Hand Weapon", points: 21 },
            { name: "10mm Pistol and Machete", points: 21 }
        ] },
        { name: "Scavver", type: "Grunt",
		stats: { 
        S: 4, P: 4, E: 4, C: 3, I: 4, A: 4, L: 2, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Hunting Rifle", points: 21 },
            { name: "Handmade Rifle", points: 23 },
            { name: "Ranger's Hunting Rifle", points: 23 }
        ] },
        { name: "Waster", type: "Grunt",
		stats: { 
        S: 4, P: 3, E: 3, C: 3, I: 3, A: 3, L: 1, W: 1  // SPECIALW stats
            }, 
			weapons: [
            { name: "Short Hunting Rifle", points: 10 },
            { name: "Pipe Revolver and Hand Weapon", points: 14 },
            { name: "10mm Pistol and Hand Weapon", points: 15 }
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
    { weapon: "Laser Rifle", type: "Rifle (18\")", test: "4P", traits: "", effect: "Ignite (1)" },
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
    { weapon: "Laser Rifle", type: "Rifle (18\")", test: "4P", traits: "", effect: "Ignite (1)" },
    { weapon: "Plasma Rifle", type: "Rifle (18\")", test: "4P", traits: "", effect: "Meltdown" },
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
let selectedWeapon = null;
let totalPoints = 0;
let unitPoints = 0; // Keep track of unit points separately
let chemPoints = 0; // Keep track of chem points separately
let hasLeader = false;

const factionSelect = document.getElementById("faction-select");
const unitSelect = document.getElementById("unit-select");
const weaponSelect = document.getElementById("weapon-select");
const unitList = document.getElementById("unit-list");
const totalPointsDisplay = document.getElementById("total-points");
const stepUnit = document.getElementById("step-unit");
const stepWeapon = document.getElementById("step-weapon");
const stepAdd = document.getElementById("step-add");
const resetButton = document.getElementById("reset-button");

// Function to update total points display
function updateTotalPoints() {
    document.getElementById("total-points").textContent = totalPoints;
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
        totalPoints = unitPoints + chemPoints; // Recalculate total points
        updateTotalPoints();
    });

    decreaseBtn.addEventListener("click", function () {
        let currentValue = parseInt(quantityInput.value, 10);
        if (currentValue > 0) {
            quantityInput.value = currentValue - 1;
            chemPoints -= chemValue; // Subtract chem points
            totalPoints = unitPoints + chemPoints; // Recalculate total points
            updateTotalPoints();
        }
    });
});

factionSelect.addEventListener("change", () => {
    selectedFaction = factionSelect.value;
    hasLeader = false; // Reset leader restriction when switching factions

    // Reset points and unit list when changing factions
    unitPoints = 0; // Reset unit points only
    unitList.innerHTML = ""; // Clear the current unit list
    chemPoints = 0; // Reset chem points to avoid confusion with previous faction data

    // Reset all chem quantities to "0"
    document.querySelectorAll(".chem-quantity").forEach(input => {
        input.value = "0"; // Reset all chem quantities to 0
    });

    // Now recalculate total points after reset
    totalPoints = unitPoints + chemPoints;
    updateTotalPoints();

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

    // Reset the unit and weapon selections
    unitSelect.value = "";
    weaponSelect.value = "";
    stepWeapon.style.display = "none";
    stepAdd.style.display = "none";
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
    selectedWeapon = weaponSelect.value;
    
    if (selectedWeapon) {
        // Add selected weapon points to unitPoints
        const weaponPoints = parseInt(selectedWeapon, 10); // Convert weapon points to integer
        unitPoints += weaponPoints; // Add the new weapon points to unitPoints

    } else {
        unitPoints = 0; // Reset unit points if no weapon selected
    }

    stepAdd.style.display = selectedWeapon ? "block" : "none"; // Show or hide the add button

    // Update total points if needed (assuming updateTotalPoints handles the display of total points)
    updateTotalPoints();
});





document.getElementById("add-unit").addEventListener("click", () => {
    if (selectedFaction && selectedUnit && selectedWeapon) {
        const selectedUnitData = factions[selectedFaction].find(
            unit => unit.name === selectedUnit
        );
        const isLeader = selectedUnitData.type.includes("Leader");
        if (isLeader) hasLeader = true; // Mark leader as selected

        const li = document.createElement("li");

        // Create formatted text for unit name and type
        const unitName = document.createElement("span");
        unitName.style.fontWeight = "bold"; // Set the unit name to bold
        unitName.textContent = `${selectedUnit} (${selectedUnitData.type})`;

        const weaponText = `${weaponSelect.options[weaponSelect.selectedIndex].text}`;

        // Construct the text for the list item
        li.appendChild(unitName);
        li.appendChild(document.createTextNode(": "));
        li.appendChild(document.createTextNode(`${weaponText}`));

        // Create a table for the SPECIALW stats
        const statsTable = document.createElement("table");
        statsTable.style.marginTop = "10px"; // Add space above the stats table
        statsTable.style.borderCollapse = "collapse";
        statsTable.style.width = "100%";
        
        const tableHeader = document.createElement("thead");
        tableHeader.innerHTML = `
            <tr>
                <th>S</th>
                <th>P</th>
                <th>E</th>
                <th>C</th>
                <th>I</th>
                <th>A</th>
                <th>L</th>
                <th>(W)</th>
            </tr>
        `;
        statsTable.appendChild(tableHeader);

        const tableBody = document.createElement("tbody");
        const statsRow = document.createElement("tr");
        statsRow.innerHTML = `
            <td>${selectedUnitData.stats.S}</td>
            <td>${selectedUnitData.stats.P}</td>
            <td>${selectedUnitData.stats.E}</td>
            <td>${selectedUnitData.stats.C}</td>
            <td>${selectedUnitData.stats.I}</td>
            <td>${selectedUnitData.stats.A}</td>
            <td>${selectedUnitData.stats.L}</td>
            <td>${selectedUnitData.stats.W}</td>
        `;
        tableBody.appendChild(statsRow);
        statsTable.appendChild(tableBody);

        li.appendChild(statsTable);

        // Create remove button for the unit
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            unitList.removeChild(li);
            totalPoints -= selectedWeapon;
            totalPointsDisplay.textContent = totalPoints;
            if (isLeader) hasLeader = false; // Allow adding a leader again
        });

        li.appendChild(removeButton);
        unitList.appendChild(li);

        // Update total points
		totalPoints += parseInt(selectedWeapon) + chemPoints;
		totalPointsDisplay.textContent = totalPoints;


        // Reset selections
        unitSelect.value = "";
        weaponSelect.value = "";
        stepWeapon.style.display = "none";
        stepAdd.style.display = "none";
    }
});




// Reset Button
resetButton.addEventListener("click", () => {
    // Reset all chem quantities to "0"
    document.querySelectorAll(".chem-quantity").forEach(input => {
        input.value = "0"; // Reset all chem quantities to 0
    });

    // Reload the page to reset everything else (like unit points and unit list)
    location.reload();
});

