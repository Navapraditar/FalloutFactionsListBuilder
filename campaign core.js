// ============= QUEST DATA =============
const questData = {
		"Brotherhood of Steel": [
		{line: "Ad Victoriam", tier: "1", condition: "You use a standard Ploy", target: "3"},
		{line: "Ad Victoriam", tier: "1", condition: "You win a game as the Underdong", target: "1"},
		{line: "Ad Victoriam", tier: "1", condition: "Your crew gains at least 4 XP in a single game", target: "3"},
		{line: "Ad Victoriam", tier: "2", condition: "One of your models Incapacitates an Enemy model with a Ranged Attack", target: "10"},
		{line: "Ad Victoriam", tier: "2", condition: "You play a game as the Attacker", target: "3"},
		{line: "Ad Victoriam", tier: "2", condition: "Your crew has at least 6 Reach", target: "1"},
		{line: "Ad Victoriam", tier: "3", condition: "One of your models Incapacitates an Enemy Leader with a Ranged Attack", target: "3"},
		{line: "Ad Victoriam", tier: "3", condition: "At the end of the Story Phase, you have 6 Facilities on your Home Turf", target: "3"},
		{line: "Ad Victoriam", tier: "3", condition: "In a game against you, an Enemy model Fails a Confusion Test", target: "6"},

		{line: "By Steel", tier: "1", condition: "You use the Recruit Story Action to purchase a Knight", target: "1"},
		{line: "By Steel", tier: "1", condition: "You use the Vertibird Drop Ploy", target: "3"},
		{line: "By Steel", tier: "1", condition: "You choose to play the Duel Objective", target: "1"},
		{line: "By Steel", tier: "2", condition: "You use the Recruit Story Action to purchase a Knight", target: "1"},
		{line: "By Steel", tier: "2", condition: "You use the Judge Captives Story Action", target: "1"},
		{line: "By Steel", tier: "2", condition: "One of your models passes a Confusion Test", target: "6"},
		{line: "By Steel", tier: "3", condition: "You use the Recruit Story Action to purchase a Knight", target: "1"},
		{line: "By Steel", tier: "3", condition: "At least 5 of your models have a perk that they did not start the campaign with", target: "1"},
		{line: "By Steel", tier: "3", condition: "One of your models Incapacitates an Enemy Champion with a Ranged Attack.", target: "8"},

		{line: "Protect Humanity From Itself", tier: "1", condition: "A Scribe ends a game without being Incapacitated.", target: "6"},
		{line: "Protect Humanity From Itself", tier: "1", condition: "You use the Chain that Binds Ploy.", target: "3"},
		{line: "Protect Humanity From Itself", tier: "1", condition: "A model in your crew chooses Find Caps and Parts when making a Rummage Action", target: "8"},
		{line: "Protect Humanity From Itself", tier: "2", condition: "A Scribe in your crew gains a Perk.", target: "4"},
		{line: "Protect Humanity From Itself", tier: "2", condition: "You modify a weapon", target: "4"},
		{line: "Protect Humanity From Itself", tier: "2", condition: "Your crew Incapacitates a model with at least one Weapon Modification.", target: "4"},
		{line: "Protect Humanity From Itself", tier: "3", condition: "A Scribe in your crew has 9 Intelligence.", target: "1"},
		{line: "Protect Humanity From Itself", tier: "3", condition: "A Scribe chooses to gain Caps and Parts when they make the Rummage Action.", target: "8"},
		{line: "Protect Humanity From Itself", tier: "3", condition: "Your crew has 6 Facilities on their Home Turf.", target: "3"}

	],
		"Super Mutants": [
		{line: "Survival of the Fittest", tier: "1", condition: "You Upgrade a model’s Strength or Endurance.", target: "4"},
		{line: "Survival of the Fittest", tier: "1", condition: "You modify a weapon.", target: "3"},
		{line: "Survival of the Fittest", tier: "1", condition: "A model in the crew Incapacitates an Enemy Champion.", target: "4"},
		{line: "Survival of the Fittest", tier: "2", condition: "A model in the crew gains a Strength or Endurance Perk.", target: "2"},
		{line: "Survival of the Fittest", tier: "2", condition: "An Enemy model Fails a Confusion Test.", target: "5"},
		{line: "Survival of the Fittest", tier: "2", condition: "You end a game with fewer Incapacitated models than your opponent.", target: "3"},
		{line: "Survival of the Fittest", tier: "3", condition: "You use a Super Mutant Ploy.", target: "6"},
		{line: "Survival of the Fittest", tier: "3", condition: "You modify a weapon that already has two Modifications.", target: "3"},
		{line: "Survival of the Fittest", tier: "3", condition: "You have a model with 8 Upgrades.", target: "1"},

		{line: "Ours by Right", tier: "1", condition: "You build a Facility.", target: "2"},
		{line: "Ours by Right", tier: "1", condition: "The crew earns at least 3 XP in a single game.", target: "2"},
		{line: "Ours by Right", tier: "1", condition: "A model in the crew passes a Confusion Test.", target: "5"},
		{line: "Ours by Right", tier: "2", condition: "Your crew has at least 5 Reach at the end of the Story Phase.", target: "3"},
		{line: "Ours by Right", tier: "2", condition: "Your crew finds a dose of Rare Chems.", target: "4"},
		{line: "Ours by Right", tier: "2", condition: "You force another player to become Nomadic.", target: "1"},
		{line: "Ours by Right", tier: "3", condition: "Your crew has at least 10 Reach.", target: "1"},
		{line: "Ours by Right", tier: "3", condition: "You play a Raid Objective as the Attacker.", target: "3"},
		{line: "Ours by Right", tier: "3", condition: "You have at least 100 Caps in your Stash.", target: "1"},

		{line: "Dawn of a New Age", tier: "1", condition: "You end a game with a model within 3” of at least 2 Objective or Search Tokens", target: "2"},
		{line: "Dawn of a New Age", tier: "1", condition: "You choose to play the Hunting Party Objective", target: "1"},
		{line: "Dawn of a New Age", tier: "1", condition: "A model in the crew gains a Perk.", target: "4"},
		{line: "Dawn of a New Age", tier: "2", condition: "Your crew has at least 6 Scouting Points.", target: "1"},
		{line: "Dawn of a New Age", tier: "2", condition: "You take the Devour Captive Story Action.", target: "1"},
		{line: "Dawn of a New Age", tier: "2", condition: "A model in the crew Incapacitates an Enemy Champion with a Melee Attack.", target: "4"},
		{line: "Dawn of a New Age", tier: "3", condition: "A model in the crew Incapacitates an Enemy Leader.", target: "3"},
		{line: "Dawn of a New Age", tier: "3", condition: "You end a Story Phase with a Monument on your Home Turf.", target: "3"},
		{line: "Dawn of a New Age", tier: "3", condition: "At least 7 of your models have a Perk that they did not start with.", target: "1"}

	],
		"Wasteland Raiders": [
		{line: "Ours for the Taking", tier: "1", condition: "You play a Pillage Objective as the Attacker.", target: "2"},
		{line: "Ours for the Taking", tier: "1", condition: "Your crew has at least 6 Scouting Points at the end of a Story Phase.", target: "1"},
		{line: "Ours for the Taking", tier: "1", condition: "A model in your crew makes a Rummage Action.", target: "10"},
		{line: "Ours for the Taking", tier: "2", condition: "You play an Ambush Objective as the Attacker.", target: "2"},
		{line: "Ours for the Taking", tier: "2", condition: "Play a game as the Underdog.", target: "2"},
		{line: "Ours for the Taking", tier: "2", condition: "A model in your crew takes the Rummage Action.", target: "10"},
		{line: "Ours for the Taking", tier: "3", condition: "You have at least 100 Caps in your Stash.", target: "1"},
		{line: "Ours for the Taking", tier: "3", condition: "You have 6 Facilities on your Home Turf.", target: "5"},
		{line: "Ours for the Taking", tier: "3", condition: "A model in your crew makes the Rummage Action.", target: "10"},

		{line: "It's Party Time", tier: "1", condition: "The crew earns 1 XP using Failing Forward.", target: "3"},
		{line: "It's Party Time", tier: "1", condition: "A model in the crew uses a Chem.", target: "16"},
		{line: "It's Party Time", tier: "1", condition: "You play a game with the Scavenge Chems Objective.", target: "2"},
		{line: "It's Party Time", tier: "2", condition: "You have a Chem Lab on your Home Turf.", target: "1"},
		{line: "It's Party Time", tier: "2", condition: "Your crew purchases a Common Chem during the Prepare Advantages step.", target: "5"},
		{line: "It's Party Time", tier: "2", condition: "You find a Rare Chem while making a Rummage Action.", target: "3"},
		{line: "It's Party Time", tier: "3", condition: "You use a Raiders Ploy.", target: "8"},
		{line: "It's Party Time", tier: "3", condition: "Your crew makes the Craft Chems Story Action.", target: "4"},
		{line: "It's Party Time", tier: "3", condition: "Your crew uses a Rare Chem.", target: "6"},

		{line: "Make Them Fear Us", tier: "1", condition: "You take the Sell Prisoners Story Action.", target: "1"},
		{line: "Make Them Fear Us", tier: "1", condition: "You Upgrade a model.", target: "5"},
		{line: "Make Them Fear Us", tier: "1", condition: "One of your models Incapacitates an Enemy model.", target: "10"},
		{line: "Make Them Fear Us", tier: "2", condition: "The crew takes the Recruit Story Action.", target: "4"},
		{line: "Make Them Fear Us", tier: "2", condition: "You modify a weapon.", target: "4"},
		{line: "Make Them Fear Us", tier: "2", condition: "You Incapacitate an Enemy model with at least 3 of your models within 6”.", target: "4"},
		{line: "Make Them Fear Us", tier: "3", condition: "An Enemy model Fails a Confusion Test.", target: "10"},
		{line: "Make Them Fear Us", tier: "3", condition: "You force another crew to become Nomadic.", target: "1"},
		{line: "Make Them Fear Us", tier: "3", condition: "A model in your crew attains a S.P.E.C.I.A.L. statistic of 9.", target: "1"}

	],
		"Survivors": [
		{line: "Dear Hearts and Gentle People", tier: "1", condition: "A model in the crew uses the Patch Up Action.", target: "8"},
		{line: "Dear Hearts and Gentle People", tier: "1", condition: "A Rare Chem is added to the Crew Roster.", target: "2"},
		{line: "Dear Hearts and Gentle People", tier: "1", condition: "You purchase a Modification for a Pistol or Rifle.", target: "3"},
		{line: "Dear Hearts and Gentle People", tier: "2", condition: "Your crew takes the Barter Story Action.", target: "4"},
		{line: "Dear Hearts and Gentle People", tier: "2", condition: "You use the No Place Like Home Survivors Ploy.", target: "3"},
		{line: "Dear Hearts and Gentle People", tier: "2", condition: "You Upgrade a model.", target: "4"},
		{line: "Dear Hearts and Gentle People", tier: "3", condition: "You end a game with fewer Incapacitated models than your opponent.", target: "3"},
		{line: "Dear Hearts and Gentle People", tier: "3", condition: "A Champion recovers from Serious Injuries.", target: "5"},
		{line: "Dear Hearts and Gentle People", tier: "3", condition: "Your crew has 5 Champions.", target: "1"},

		{line: "My Home Town", tier: "1", condition: "You build a Facility using the Expand Story Action.", target: "1"},
		{line: "My Home Town", tier: "1", condition: "You have at least 50 Caps in your Stash.", target: "1"},
		{line: "My Home Town", tier: "1", condition: "You use a Survivors Ploy.", target: "3"},
		{line: "My Home Town", tier: "2", condition: "Your crew Incapacitates an Enemy model.", target: "10"},
		{line: "My Home Town", tier: "2", condition: "A model in your crew gains a Charisma or Intelligence Perk.", target: "4"},
		{line: "My Home Town", tier: "2", condition: "The crew takes the Recruit Story Action.", target: "5"},
		{line: "My Home Town", tier: "3", condition: "Your crew has at least 10 Reach.", target: "1"},
		{line: "My Home Town", tier: "3", condition: "You take the Redeem Captive Story Action.", target: "2"},
		{line: "My Home Town", tier: "3", condition: "An Enemy model Fails a Confusion Test.", target: "6"},

		{line: "Every Time That I Return", tier: "1", condition: "Your crew earns at least 4 XP in a single game.", target: "3"},
		{line: "Every Time That I Return", tier: "1", condition: "You modify a weapon.", target: "3"},
		{line: "Every Time That I Return", tier: "1", condition: "You take the Scout Story Action.", target: "3"},
		{line: "Every Time That I Return", tier: "2", condition: "You take the Settle Story Action.", target: "3"},
		{line: "Every Time That I Return", tier: "2", condition: "You Upgrade one of your models.", target: "5"},
		{line: "Every Time That I Return", tier: "2", condition: "Your crew Incapacitates an Enemy model with a Ranged Attack.", target: "10"},
		{line: "Every Time That I Return", tier: "3", condition: "A model in your Crew resolves a 7+ on the Crew Training Table.", target: "4"},
		{line: "Every Time That I Return", tier: "3", condition: "You rescue a Captured model in a Rescue Objective.", target: "1"},
		{line: "Every Time That I Return", tier: "3", condition: "A model in your crew attains a S.P.E.C.I.A.L. statistic of 9.", target: "1"}

	],
		"Gunners": [
		{line: "The Bottom Line", tier: "1", condition: "One of your models makes a Search Action.", target: "6"},
		{line: "The Bottom Line", tier: "1", condition: "Your crew takes the Barter Story Action.", target: "4"},
		{line: "The Bottom Line", tier: "1", condition: "You win a game.", target: "1"},
		{line: "The Bottom Line", tier: "2", condition: "A model in your crew gains a Perception Perk.", target: "5"},
		{line: "The Bottom Line", tier: "2", condition: "You purchase a Weapon Modification worth at least 3 parts.", target: "3"},
		{line: "The Bottom Line", tier: "2", condition: "You Upgrade one of your models.", target: "5"},
		{line: "The Bottom Line", tier: "3", condition: "You have at least 100 Caps in your Stash.", target: "1"},
		{line: "The Bottom Line", tier: "3", condition: "You purchase the third Modification for a weapon.", target: "3"},
		{line: "The Bottom Line", tier: "3", condition: "You use a Standard Ploy.", target: "4"},
		{line: "The Bottom Line", tier: "3", condition: "A model in the Crew uses the Patch Up Action.", target: "10"},

		{line: "Guns for Hire", tier: "1", condition: "A model in the Crew causes Excess Harm.", target: "2"},
		{line: "Guns for Hire", tier: "1", condition: "You purchase a Modification for a Pistol or Rifle.", target: "3"},
		{line: "Guns for Hire", tier: "1", condition: "One of your models Incapacitates an Enemy model with a Ranged Attack.", target: "10"},
		{line: "Guns for Hire", tier: "2", condition: "A model in the Crew gains a Perk.", target: "8"},
		{line: "Guns for Hire", tier: "2", condition: "The crew earns at least three Experience Points in a single game.", target: "2"},
		{line: "Guns for Hire", tier: "2", condition: "You win the Ambush scenario.", target: "3"},
		{line: "Guns for Hire", tier: "3", condition: "Your crew has at least 3 Control in each Location.", target: "1"},
		{line: "Guns for Hire", tier: "3", condition: "You win a game on the opposing crew’s Home Turf.", target: "2"},
		{line: "Guns for Hire", tier: "3", condition: "One of your models Incapacitates an Enemy Champion with a Ranged Attack.", target: "8"},
		{line: "Guns for Hire", tier: "3", condition: "At least 7 of your models have a Perk that they did not start with.", target: "1"},

		{line: "Take the High Ground", tier: "1", condition: "Your crew has at least 2 Scouts in three different Locations.", target: "1"},
		{line: "Take the High Ground", tier: "1", condition: "You choose the Land Grab Scenario.", target: "3"},
		{line: "Take the High Ground", tier: "1", condition: "A model in your crew chooses Find Caps and Parts when making an Action: Rummage.", target: "10"},
		{line: "Take the High Ground", tier: "2", condition: "You win the Land Grab Scenario as the Attacker.", target: "3"},
		{line: "Take the High Ground", tier: "2", condition: "Your crew has at least 3 Control in three different Locations.", target: "1"},
		{line: "Take the High Ground", tier: "2", condition: "You use a Gunners Ploy.", target: "4"},
		{line: "Take the High Ground", tier: "3", condition: "One of your models passes a Confusion Test.", target: "6"},
		{line: "Take the High Ground", tier: "3", condition: "You win a game on your Home Turf.", target: "3"},
		{line: "Take the High Ground", tier: "3", condition: "Your crew has at least 10 Control in any Location.", target: "1"},
		{line: "Take the High Ground", tier: "3", condition: "The crew takes the Recruit Story Action.", target: "5"},
		{line: "Take the High Ground", tier: "3", condition: "An Enemy model fails a Confusion Test.", target: "10"}

	],
		"Zetans": [
		{line: "Who Goes There", tier: "1", condition: "Your crew earns at least 3 Experience Points in a single game.", target: "3"},
		{line: "Who Goes There", tier: "1", condition: "A model in the crew gains a Perk. ", target: "8"},
		{line: "Who Goes There", tier: "1", condition: "You use the Recruit Story Action to recruit a Flatwoods Monster. ", target: "1"},
		{line: "Who Goes There", tier: "2", condition: "A Flatwoods Monster ends a game without being Incapacitated.", target: "6"},
		{line: "Who Goes There", tier: "2", condition: "You take the Scout Story Action.", target: "6"},
		{line: "Who Goes There", tier: "2", condition: "You use a Standard Ploy", target: "3"},
		{line: "Who Goes There", tier: "3", condition: "At least 5 of your models have a Perk that they did not start with. ", target: "1"},
		{line: "Who Goes There", tier: "3", condition: "A Flatwoods Monster Incapacitates an enemy model with the weapon of another model.", target: "10"},
		{line: "Who Goes There", tier: "3", condition: "You win the Land Grab scenario as the Attacker.", target: "5"},

		{line: "Invasion of the Zetans", tier: "1", condition: "One of your models triggers the Meltdown Critical Effect.", target: "10"},
		{line: "Invasion of the Zetans", tier: "1", condition: "You play a game as the Attacker. ", target: "3"},
		{line: "Invasion of the Zetans", tier: "1", condition: "You choose to play the Land Grab scenario.", target: "2"},
		{line: "Invasion of the Zetans", tier: "2", condition: "One of your models causes an Injury with a Meltdown Critical Effect. ", target: "8"},
		{line: "Invasion of the Zetans", tier: "2", condition: "You win a game on the opposing crew's Home Turf. ", target: "2"},
		{line: "Invasion of the Zetans", tier: "2", condition: "You have at least 3 Control in each Location.", target: "1"},
		{line: "Invasion of the Zetans", tier: "3", condition: "One of your models Incapacitates an enemy Champion with the Meltdown Critical Effect. ", target: "6"},
		{line: "Invasion of the Zetans", tier: "3", condition: "Your crew has at least 5 Control in three different Locations.", target: "1"},
		{line: "Invasion of the Zetans", tier: "3", condition: "You purchase a Weapon Modification that costs at least 3 Parts.", target: "5"},
		{line: "Invasion of the Zetans", tier: "3", condition: "One of your models has 7 Upgrades.", target: "1"},		

		{line: "Not of This World", tier: "1", condition: "One of your models gains an Intelligence Perk.", target: "2"},
		{line: "Not of This World", tier: "1", condition: "One of your models makes a Search Action. ", target: "8"},
		{line: "Not of This World", tier: "1", condition: "One of your models Incapacitates an enemy Leader. ", target: "5"},
		{line: "Not of This World", tier: "2", condition: "You Upgrade a model.", target: "6"},
		{line: "Not of This World", tier: "2", condition: "One of your models Incapacitates an enemy model with a Ranged Attack.", target: "10"},
		{line: "Not of This World", tier: "2", condition: "You win a game on your Home Turf. ", target: "1"},
		{line: "Not of This World", tier: "3", condition: "You use a Zetans Ploy.", target: "4"},
		{line: "Not of This World", tier: "3", condition: "You win the Retrieval Run scenario as the Attacker.", target: "3"},
		{line: "Not of This World", tier: "3", condition: "An enemy model fails a Confusion Test. ", target: "10"}

	],
		"The Pack": [
		{line: "Ours for the Taking", tier: "1", condition: "You play a Pillage Objective as the Attacker.", target: "2"},
		{line: "Ours for the Taking", tier: "1", condition: "Your crew has at least 6 Scouting Points at the end of a Story Phase.", target: "1"},
		{line: "Ours for the Taking", tier: "1", condition: "A model in your crew makes a Rummage Action.", target: "10"},
		{line: "Ours for the Taking", tier: "2", condition: "You play an Ambush Objective as the Attacker.", target: "2"},
		{line: "Ours for the Taking", tier: "2", condition: "Play a game as the Underdog.", target: "2"},
		{line: "Ours for the Taking", tier: "2", condition: "A model in your crew takes the Rummage Action.", target: "10"},
		{line: "Ours for the Taking", tier: "3", condition: "You have at least 100 Caps in your Stash.", target: "1"},
		{line: "Ours for the Taking", tier: "3", condition: "You have 6 Facilities on your Home Turf.", target: "5"},
		{line: "Ours for the Taking", tier: "3", condition: "A model in your crew makes the Rummage Action.", target: "10"},

		{line: "It's Party Time", tier: "1", condition: "The crew earns 1 XP using Failing Forward.", target: "3"},
		{line: "It's Party Time", tier: "1", condition: "A model in the crew uses a Chem.", target: "16"},
		{line: "It's Party Time", tier: "1", condition: "You play a game with the Scavenge Chems Objective.", target: "2"},
		{line: "It's Party Time", tier: "2", condition: "You have a Chem Lab on your Home Turf.", target: "1"},
		{line: "It's Party Time", tier: "2", condition: "Your crew purchases a Common Chem during the Prepare Advantages step.", target: "5"},
		{line: "It's Party Time", tier: "2", condition: "You find a Rare Chem while making a Rummage Action.", target: "3"},
		{line: "It's Party Time", tier: "3", condition: "You use a Raiders Ploy.", target: "8"},
		{line: "It's Party Time", tier: "3", condition: "Your crew makes the Craft Chems Story Action.", target: "4"},
		{line: "It's Party Time", tier: "3", condition: "Your crew uses a Rare Chem.", target: "6"},

		{line: "Make Them Fear Us", tier: "1", condition: "You take the Sell Prisoners Story Action.", target: "1"},
		{line: "Make Them Fear Us", tier: "1", condition: "You Upgrade a model.", target: "5"},
		{line: "Make Them Fear Us", tier: "1", condition: "One of your models Incapacitates an Enemy model.", target: "10"},
		{line: "Make Them Fear Us", tier: "2", condition: "The crew takes the Recruit Story Action.", target: "4"},
		{line: "Make Them Fear Us", tier: "2", condition: "You modify a weapon.", target: "4"},
		{line: "Make Them Fear Us", tier: "2", condition: "You Incapacitate an Enemy model with at least 3 of your models within 6”.", target: "4"},
		{line: "Make Them Fear Us", tier: "3", condition: "An Enemy model Fails a Confusion Test.", target: "10"},
		{line: "Make Them Fear Us", tier: "3", condition: "You force another crew to become Nomadic.", target: "1"},
		{line: "Make Them Fear Us", tier: "3", condition: "A model in your crew attains a S.P.E.C.I.A.L. statistic of 9.", target: "1"}

	],
		"The Operators": [
		{line: "Ours for the Taking", tier: "1", condition: "You play a Pillage Objective as the Attacker.", target: "2"},
		{line: "Ours for the Taking", tier: "1", condition: "Your crew has at least 6 Scouting Points at the end of a Story Phase.", target: "1"},
		{line: "Ours for the Taking", tier: "1", condition: "A model in your crew makes a Rummage Action.", target: "10"},
		{line: "Ours for the Taking", tier: "2", condition: "You play an Ambush Objective as the Attacker.", target: "2"},
		{line: "Ours for the Taking", tier: "2", condition: "Play a game as the Underdog.", target: "2"},
		{line: "Ours for the Taking", tier: "2", condition: "A model in your crew takes the Rummage Action.", target: "10"},
		{line: "Ours for the Taking", tier: "3", condition: "You have at least 100 Caps in your Stash.", target: "1"},
		{line: "Ours for the Taking", tier: "3", condition: "You have 6 Facilities on your Home Turf.", target: "5"},
		{line: "Ours for the Taking", tier: "3", condition: "A model in your crew makes the Rummage Action.", target: "10"},

		{line: "It's Party Time", tier: "1", condition: "The crew earns 1 XP using Failing Forward.", target: "3"},
		{line: "It's Party Time", tier: "1", condition: "A model in the crew uses a Chem.", target: "16"},
		{line: "It's Party Time", tier: "1", condition: "You play a game with the Scavenge Chems Objective.", target: "2"},
		{line: "It's Party Time", tier: "2", condition: "You have a Chem Lab on your Home Turf.", target: "1"},
		{line: "It's Party Time", tier: "2", condition: "Your crew purchases a Common Chem during the Prepare Advantages step.", target: "5"},
		{line: "It's Party Time", tier: "2", condition: "You find a Rare Chem while making a Rummage Action.", target: "3"},
		{line: "It's Party Time", tier: "3", condition: "You use a Raiders Ploy.", target: "8"},
		{line: "It's Party Time", tier: "3", condition: "Your crew makes the Craft Chems Story Action.", target: "4"},
		{line: "It's Party Time", tier: "3", condition: "Your crew uses a Rare Chem.", target: "6"},

		{line: "Make Them Fear Us", tier: "1", condition: "You take the Sell Prisoners Story Action.", target: "1"},
		{line: "Make Them Fear Us", tier: "1", condition: "You Upgrade a model.", target: "5"},
		{line: "Make Them Fear Us", tier: "1", condition: "One of your models Incapacitates an Enemy model.", target: "10"},
		{line: "Make Them Fear Us", tier: "2", condition: "The crew takes the Recruit Story Action.", target: "4"},
		{line: "Make Them Fear Us", tier: "2", condition: "You modify a weapon.", target: "4"},
		{line: "Make Them Fear Us", tier: "2", condition: "You Incapacitate an Enemy model with at least 3 of your models within 6”.", target: "4"},
		{line: "Make Them Fear Us", tier: "3", condition: "An Enemy model Fails a Confusion Test.", target: "10"},
		{line: "Make Them Fear Us", tier: "3", condition: "You force another crew to become Nomadic.", target: "1"},
		{line: "Make Them Fear Us", tier: "3", condition: "A model in your crew attains a S.P.E.C.I.A.L. statistic of 9.", target: "1"}

	],
		"The Disciples": [
		{line: "Ours for the Taking", tier: "1", condition: "You play a Pillage Objective as the Attacker.", target: "2"},
		{line: "Ours for the Taking", tier: "1", condition: "Your crew has at least 6 Scouting Points at the end of a Story Phase.", target: "1"},
		{line: "Ours for the Taking", tier: "1", condition: "A model in your crew makes a Rummage Action.", target: "10"},
		{line: "Ours for the Taking", tier: "2", condition: "You play an Ambush Objective as the Attacker.", target: "2"},
		{line: "Ours for the Taking", tier: "2", condition: "Play a game as the Underdog.", target: "2"},
		{line: "Ours for the Taking", tier: "2", condition: "A model in your crew takes the Rummage Action.", target: "10"},
		{line: "Ours for the Taking", tier: "3", condition: "You have at least 100 Caps in your Stash.", target: "1"},
		{line: "Ours for the Taking", tier: "3", condition: "You have 6 Facilities on your Home Turf.", target: "5"},
		{line: "Ours for the Taking", tier: "3", condition: "A model in your crew makes the Rummage Action.", target: "10"},

		{line: "It's Party Time", tier: "1", condition: "The crew earns 1 XP using Failing Forward.", target: "3"},
		{line: "It's Party Time", tier: "1", condition: "A model in the crew uses a Chem.", target: "16"},
		{line: "It's Party Time", tier: "1", condition: "You play a game with the Scavenge Chems Objective.", target: "2"},
		{line: "It's Party Time", tier: "2", condition: "You have a Chem Lab on your Home Turf.", target: "1"},
		{line: "It's Party Time", tier: "2", condition: "Your crew purchases a Common Chem during the Prepare Advantages step.", target: "5"},
		{line: "It's Party Time", tier: "2", condition: "You find a Rare Chem while making a Rummage Action.", target: "3"},
		{line: "It's Party Time", tier: "3", condition: "You use a Raiders Ploy.", target: "8"},
		{line: "It's Party Time", tier: "3", condition: "Your crew makes the Craft Chems Story Action.", target: "4"},
		{line: "It's Party Time", tier: "3", condition: "Your crew uses a Rare Chem.", target: "6"},

		{line: "Make Them Fear Us", tier: "1", condition: "You take the Sell Prisoners Story Action.", target: "1"},
		{line: "Make Them Fear Us", tier: "1", condition: "You Upgrade a model.", target: "5"},
		{line: "Make Them Fear Us", tier: "1", condition: "One of your models Incapacitates an Enemy model.", target: "10"},
		{line: "Make Them Fear Us", tier: "2", condition: "The crew takes the Recruit Story Action.", target: "4"},
		{line: "Make Them Fear Us", tier: "2", condition: "You modify a weapon.", target: "4"},
		{line: "Make Them Fear Us", tier: "2", condition: "You Incapacitate an Enemy model with at least 3 of your models within 6”.", target: "4"},
		{line: "Make Them Fear Us", tier: "3", condition: "An Enemy model Fails a Confusion Test.", target: "10"},
		{line: "Make Them Fear Us", tier: "3", condition: "You force another crew to become Nomadic.", target: "1"},
		{line: "Make Them Fear Us", tier: "3", condition: "A model in your crew attains a S.P.E.C.I.A.L. statistic of 9.", target: "1"}

	],
};


// DOM Elements
const factionSelect = document.getElementById('faction');
const questDropdown = document.getElementById('quest-dropdown');
const tierDropdown = document.getElementById('tier-dropdown');
const questGoalsContainer = document.querySelector('.quest-goals');

// Load or Refresh Goals after List Load
function loadQuestData(faction, line, tier) {
    // Trigger displaying goals after the list is loaded
    displayGoals(faction, line, tier);
}

// Populate Factions on Page Load
function populateFactions() {
    // Clear the dropdown first
    factionSelect.innerHTML = '<option value="">Select Faction</option>';

    for (const faction in questData) {
        const option = document.createElement('option');
        option.value = faction;
        option.textContent = faction;
        factionSelect.appendChild(option);
    }
}

// Populate Quests
function populateQuestLines(faction) {
    clearDropdown(questDropdown);
    if (!faction || !questData[faction]) return;

    const uniqueLines = [...new Set(questData[faction].map(q => q.line))];
    uniqueLines.forEach(line => {
        const option = document.createElement('option');
        option.value = line;
        option.textContent = line;
        questDropdown.appendChild(option);
    });

    // After populating quest lines, check if the questline is selected and trigger tier population
    if (questDropdown.value) {
        populateTiers(faction, questDropdown.value);
    }
}

// Handle Quest Selection & Populate Goal/Target/Progress
questDropdown.addEventListener('change', function () {
    const selectedQuest = this.value;
    const faction = document.getElementById('faction').value;

    if (!faction || !questData[faction]) return;

    // Clear the previous goal boxes when a new quest line is selected
    questGoalsContainer.innerHTML = ''; 

    // Find quest details
    const quest = questData[faction].find(q => q.line === selectedQuest);
    if (!quest) return;

    // Create the Goal box for the selected quest
    const goalBox = document.createElement('div');
    goalBox.classList.add('goal');
    goalBox.setAttribute('data-line', selectedQuest); // Store the quest line to identify this goal

    goalBox.innerHTML = `
        <label>Goal:</label>
        <input type="text" class="goal-title" value="${quest.goal}" readonly>

        <div class="progress-target">
            <div class="progress">
                <label>Completed:</label>
                <input type="number" class="completed" placeholder="0">
            </div>
            <div class="target">
                <label>Target:</label>
                <input type="number" class="target-value" value="${quest.target}" readonly>
            </div>
            <div class="user-progress">
                <label>Your Progress:</label>
                <input type="number" class="user-progress-value" placeholder="Enter progress">
            </div>
        </div>
    `;

    questGoalsContainer.appendChild(goalBox);
});

// Handle Tier Selection & Populate Goals
tierDropdown.addEventListener('change', function () {
    const selectedTier = this.value;
    const selectedQuest = questDropdown.value;
    const faction = document.getElementById('faction').value;

    if (!faction || !selectedQuest || !selectedTier || !questData[faction]) return;

    // Clear the quest goal container each time a new tier is selected
    questGoalsContainer.innerHTML = '';

    // Find quest details for the selected line and tier
    const quest = questData[faction].find(q => q.line === selectedQuest && q.tier == selectedTier);
    if (!quest) return;

    // Create a new goal and progress input for the selected quest and tier
    const goalBox = document.createElement('div');
    goalBox.classList.add('goal');
    goalBox.setAttribute('data-line', selectedQuest);
    goalBox.setAttribute('data-tier', selectedTier); // Store the tier information

    goalBox.innerHTML = `
        <label>Goal:</label>
        <input type="text" class="goal-title" value="${quest.goal}" readonly>

        <div class="progress-target">
            <div class="progress">
                <label>Completed:</label>
                <input type="number" class="completed" placeholder="0">
            </div>
            <div class="target">
                <label>Target:</label>
                <input type="number" class="target-value" value="${quest.target}" readonly>
            </div>
            <div class="user-progress">
                <label>Your Progress:</label>
                <input type="number" class="user-progress-value" placeholder="Enter progress">
            </div>
        </div>
    `;

    questGoalsContainer.appendChild(goalBox);
});

// Clear Dropdowns and Goals when a new faction is selected
factionSelect.addEventListener('change', () => {
    populateQuestLines(factionSelect.value);
    clearDropdown(tierDropdown);
    questGoalsContainer.innerHTML = ''; // Clear the container to reset quest goals
});

// Function to populate quest lines for a selected faction
function populateQuestLines(faction) {
    clearDropdown(questDropdown);
    if (!faction || !questData[faction]) return;

    const uniqueLines = [...new Set(questData[faction].map(q => q.line))];
    uniqueLines.forEach(line => {
        const option = document.createElement('option');
        option.value = line;
        option.textContent = line;
        questDropdown.appendChild(option);
    });
}

// Function to clear dropdowns
function clearDropdown(dropdown) {
    dropdown.innerHTML = `<option value="">Select</option>`;
}


// Function to populate tiers based on selected quest line
function populateTiers(faction, line) {
    clearDropdown(tierDropdown);
    if (!faction || !line) return;

    const quests = questData[faction].filter(q => q.line === line);
    const uniqueTiers = [...new Set(quests.map(q => q.tier))];

    uniqueTiers.forEach(tier => {
        const option = document.createElement('option');
        option.value = tier;
        option.textContent = `Tier ${tier}`;
        tierDropdown.appendChild(option);
    });

    // After populating tiers, check if a tier is selected and populate goals
    if (tierDropdown.value) {
        displayGoals(faction, line, tierDropdown.value);
    }
}

// Display Goals
function displayGoals(faction, line, tier) {
    questGoalsContainer.innerHTML = ''; // Clear previous content
    if (!faction || !line || !tier) return;

    const quests = questData[faction].filter(q => q.line === line && q.tier === tier);

    quests.forEach((q, index) => {
        const goalDiv = document.createElement('div');
        goalDiv.className = 'goal';

        goalDiv.innerHTML = `
            <label>Goal:</label>
            <input type="text" value="${q.condition}">

            <label>Target:</label>
            <input type="text" value="${q.target}">

            <label>Your Progress:</label>
            <input type="number" id="progress-input-${index}" placeholder="Enter your progress" min="0" max="${q.target}">
        `;

        questGoalsContainer.appendChild(goalDiv);
    });
}

// Clear Dropdowns
function clearDropdown(dropdown) {
    dropdown.innerHTML = `<option value="">Select</option>`;
}

// Event Listeners
factionSelect.addEventListener('change', () => {
    populateQuestLines(factionSelect.value);
    clearDropdown(tierDropdown);
    questGoalsContainer.innerHTML = '';
});

// Handle Quest and Tier Changes
questDropdown.addEventListener('change', function() {
    const selectedQuest = questDropdown.value;
    const faction = factionSelect.value;
    if (!faction || !selectedQuest) return;

    // Populate tiers and goals dynamically
    populateTiers(faction, selectedQuest);
    questGoalsContainer.innerHTML = ''; // Clear previous goals
});

tierDropdown.addEventListener('change', function() {
    const selectedTier = tierDropdown.value;
    const selectedQuest = questDropdown.value;
    const faction = factionSelect.value;

    if (!faction || !selectedQuest || !selectedTier) return;

    // Display goals based on selected tier
    displayGoals(faction, selectedQuest, selectedTier);
});

// Initialize
populateFactions();


// RESET ===============================================
document.getElementById('reset-button').addEventListener('click', () => {
    if (!confirm("Are you sure you want to reset everything? This cannot be undone.")) return;

    // Reset all input and select fields
    document.querySelectorAll('input').forEach(input => {
        if (input.type === 'number') input.value = 0;
        else input.value = '';
    });

    document.querySelectorAll('select').forEach(select => {
        select.selectedIndex = 0;
    });

    // Clear quest-specific fields
    document.getElementById('goal-input').value = '';
    document.getElementById('target-input').value = '';
    document.getElementById('progress-input').value = '';

    // Clear dynamically generated checkboxes
    const checkboxes = document.getElementById('progress-checkboxes');
    if (checkboxes) {
        checkboxes.innerHTML = '';
    }

    // Optional: clear dynamically added quests
    clearDropdown(questDropdown);
});


//SAVING AND LOADING ==============================
document.addEventListener('DOMContentLoaded', () => {
    populateFactions();
    loadSavedLists();
    setupEventListeners();
});

function setupEventListeners() {
    factionSelect.addEventListener('change', () => {
        populateQuestLines(factionSelect.value);
    });

    document.getElementById('save-list').addEventListener('click', saveList);
    document.getElementById('load-list').addEventListener('click', loadList);
    document.getElementById('delete-list').addEventListener('click', deleteList);
}

// Get all input/select elements
function getAllFields() {
    return document.querySelectorAll('input, select');
}

// Save current state
function saveList() {
    const listName = document.getElementById('list-name').value.trim();
    if (!listName) {
        alert('Please enter a list name.');
        return;
    }

    // Collect all relevant fields
    const fields = getAllFields();
    const data = {};

    fields.forEach(field => {
        if (field.id) {
            data[field.id] = field.value;
        }
    });

    // Save goal and target values from the goal inputs
    const goalInputs = document.querySelectorAll('.goal-title');
    const targetInputs = document.querySelectorAll('.target-value');
    const progressInputs = document.querySelectorAll('.user-progress-value');

    // Initialize arrays to hold the values
    data['goal-values'] = [];
    data['target-values'] = [];
    data['progress-values'] = [];

    // Push the values into the arrays
    goalInputs.forEach(input => {
        data['goal-values'].push(input.value); // Save the goal input value
    });

    targetInputs.forEach(input => {
        data['target-values'].push(input.value); // Save the target input value
    });

    progressInputs.forEach(input => {
        data['progress-values'].push(input.value); // Save the user progress input value
    });

    // Save everything to localStorage
    localStorage.setItem(`campaign_${listName}`, JSON.stringify(data));

    alert(`List "${listName}" saved!`);
    loadSavedLists(); // Refresh dropdown with updated list of saved lists
}


function loadList() {
    const savedListsDropdown = document.getElementById('saved-lists');
    const selected = savedListsDropdown.value;

    if (!selected) {
        alert('Please select a list to load.');
        return;
    }

    const saved = localStorage.getItem(selected);
    if (!saved) {
        alert('No saved data found.');
        return;
    }

    const data = JSON.parse(saved);

    // Set faction and trigger questline population
    if (data['faction']) {
        factionSelect.value = data['faction']; // Set faction
        populateQuestLines(data['faction']);   // Populate quests for the selected faction
    }

    setTimeout(() => {
        // Populate the saved fields from localStorage
        for (const id in data) {
            const element = document.getElementById(id);
            if (element) {
                element.value = data[id]; // Populate fields by ID
            }
        }

        // Trigger questline and tier population
        const faction = data['faction'];
        const questLine = data['questline-select'];
        const tier = data['tier-select'];

        if (faction && questLine) {
            // Set questline
            document.getElementById('questline-select').value = questLine;
            populateTiers(faction, questLine); // Populate the available tiers for the selected questline
        }

        setTimeout(() => {
            if (questLine && tier) {
                // Set tier and trigger goal population
                document.getElementById('tier-select').value = tier;
                populateGoalsAndTargets(faction, questLine, tier); // Populate goals and targets based on tier
                displayGoals(faction, questLine, tier); // Display the goals and progress
            }
        }, 100); // Small delay to ensure tier population

        // If progress values are available, restore progress
        if (data['progress-values']) {
            const progressInputs = document.querySelectorAll('.user-progress-value');
            data['progress-values'].forEach((progress, index) => {
                if (progressInputs[index]) {
                    progressInputs[index].value = progress; // Set saved progress
                }
            });
        }
    }, 100); // Small delay to ensure questlines and tiers are populated first
}









// Delete selected list
function deleteList() {
    const selected = document.getElementById('saved-lists').value;
    if (!selected) {
        alert('Please select a list to delete.');
        return;
    }

    const confirmDelete = confirm(`Are you sure you want to delete "${selected}"?`);
    if (!confirmDelete) return;

    localStorage.removeItem(selected);
    alert(`List "${selected}" deleted.`);
    loadSavedLists();
}

// Load all saved keys into the dropdown
function loadSavedLists() {
    const dropdown = document.getElementById('saved-lists');
    dropdown.innerHTML = '<option value="">-- Select a Saved List --</option>';

    for (let key in localStorage) {
        if (key.startsWith('campaign_')) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = key.replace('campaign_', '');
            dropdown.appendChild(option);
        }
    }
}

// Utility function
function clearDropdown(dropdown) {
    dropdown.innerHTML = '<option value="">Select Quest</option>';
}

