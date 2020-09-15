export const RUNE_SHARDS = {
	"set1": [{
		"name": "Adaptive Force",
		"apiname": "adaptive",
		"index": 0,
		"active": false,
		"stats": {
			"ad": 5.4,
			"ap": 9,
		},
		"type": "adaptive",
		"img": "assets/images/runes/Rune Shards/Adaptive Force.png",
		"tooltip": "+9 Adaptive Force",
	},
	{
		"name": "Attack Speed",
		"apiname": "as",
		"index": 1,
		"active": false,
		"stats": {
			"as": 10,
		},
		"img": "assets/images/runes/Rune Shards/Attack Speed.png",
		"tooltip": "+10% Attack Speed",
	},
	{
		"name": "Cooldown Reduction",
		"apiname": "cdr",
		"index": 2,
		"active": false,
		"stats": {
			"cdr": 1,
			"cdr_lvl": 0.5294,
		},
		"img": "assets/images/runes/Rune Shards/Cooldown Reduction.png",
		"tooltip": "1-10% Cooldown Reduction",
	}], "set2": [{
		"name": "Adaptive Force",
		"apiname": "adaptive",
		"index": 0,
		"active": false,
		"stats": {
			"ad": 5.4,
			"ap": 9,
		},
		"type": "adaptive",
		"img": "assets/images/runes/Rune Shards/Adaptive Force.png",
		"tooltip": "+9 Adaptive Force",
	},
	{
		"name": "Armor",
		"apiname": "armor",
		"index": 3,
		"active": false,
		"stats": {
			"arm": 6,
		},
		"img": "assets/images/runes/Rune Shards/Armor.png",
		"tooltip": "+6 Armor",
	},
	{
		"name": "Magic Resistance",
		"apiname": "mr",
		"index": 4,
		"active": false,
		"stats": {
			"mr": 8,
		},
		"img": "assets/images/runes/Rune Shards/Magic Resistance.png",
		"tooltip": "+8 Magic Resistance",
	}], "set3": [{
		"name": "Health",
		"apiname": "health",
		"index": 5,
		"active": false,
		"stats": {
			"hp": 15,
			"hp_lvl": 4.411765,
		},
		"img": "assets/images/runes/Rune Shards/Health.png",
		"tooltip": "+15-90 Health",
	}, {
		"name": "Armor",
		"apiname": "armor",
		"index": 3,
		"active": false,
		"stats": {
			"arm": 6,
		},
		"img": "assets/images/runes/Rune Shards/Armor.png",
		"tooltip": "+6 Armor",
	},
	{
		"name": "Magic Resistance",
		"apiname": "mr",
		"index": 4,
		"active": false,
		"stats": {
			"mr": 8,
		},
		"img": "assets/images/runes/Rune Shards/Magic Resistance.png",
		"tooltip": "+8 Magic Resistance",
	}]
};
export const RUNES = [
	{
		"active_primary": false,
		"active_secondary": false,
		"img": "assets/images/runes/Precision/Precision.png",
		"path": "Precision",
		"tooltip": "Precision: Focused on improved attacks and sustained damage.",
		"runes": [
			{
				"keystones": [
					{
						"active": false,
						"apiname": "presstheattack",
						"img": "assets/images/runes/Precision/Press the Attack.png",
						"keyslot": "keystones",
						"name": "Press the Attack",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "31.765+8.235*currentLevel",
						"affects_stat": "",
						"type": "adaptive",
						"tooltip": "Press the Attack<br><br>Passive: Basic attacks against enemy champions apply a stack for 4 seconds. Attacking a new target removes all stacks from the previous target. The third stack consumes them all to deal 40 - 180 (based on level) bonus Adaptive damage and render the target Exposed for 6 seconds, causing them to take 8% - 12% (based on level) increased damage from all subsequent sources (except from true damage)."
					},
					{
						"active": false,
						"apiname": "lethaltempo",
						"img": "assets/images/runes/Precision/Lethal Tempo.png",
						"keyslot": "keystones",
						"name": "Lethal Tempo",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "0.35882+0.04118*currentLevel",
						"affects_stat": "as",
						"tooltip": "Lethal Tempo<br><br>Passive: After 1.5 seconds upon damaging an enemy champion you gain  40% - 110% (based on level) bonus attack speed and your attack speed cap is increased for 3 seconds. Attacking a champion while the effect is active extends the duration to 6 seconds."
					},
					{
						"active": false,
						"apiname": "fleetfootwork",
						"img": "assets/images/runes/Precision/Fleet Footwork.png",
						"keyslot": "keystones",
						"name": "Fleet Footwork",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "",
						"affects_stat": "",
						"tooltip": "Fleet Footwork<br><br>Unique \u2013 Energized: Moving and basic attacking generates Energize stacks, up to 100."
					},
					{
						"active": false,
						"apiname": "conqueror",
						"img": "assets/images/runes/Precision/Conqueror.png",
						"keyslot": "keystones",
						"name": "Conqueror",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "1.5529411764706+0.14705882352941*currentLevel",
						"affects_stat": "",
						"type": "adaptive",
						"tooltip": "Conqueror<br><br>Passive: Ranged basic attacks on-hit against enemy champions grant 1 stack of Conqueror, while melee basic attacks on-hit grant 2 stacks. Abilities and spells that deal damage to an enemy champion always grant 2 stacks."
					}
				],
				"slot1": [
					{
						"active": false,
						"apiname": "overheal",
						"img": "assets/images/runes/Precision/Overheal.png",
						"index": 0,
						"keyslot": "slot1",
						"name": "Overheal",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "",
						"affects_stat": "",
						"tooltip": "Overheal<br><br>Passive: Converts 20% - 100% (based on level) of the  healing in excess of your maximum health into a  shield for an amount of up to 10 (+ 10% of maximum health)."
					},
					{
						"active": false,
						"apiname": "triumph",
						"img": "assets/images/runes/Precision/Triumph.png",
						"index": 1,
						"keyslot": "slot1",
						"name": "Triumph",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "",
						"affects_stat": "",
						"tooltip": "Triumph<br><br>Passive: Champion takedowns, after a 1-second delay, restore 12% of your missing health and grant an additional 20."
					},
					{
						"active": false,
						"apiname": "presenceofmind",
						"img": "assets/images/runes/Precision/Presence of Mind.png",
						"index": 2,
						"keyslot": "slot1",
						"name": "Presence of Mind",
						"stackable": {
							"mp": 500
						},
						"stacked": false,
						"stats": {
							"mp": 0
						},
						"tooltip": "Presence of Mind<br><br>Passive: Champion takedowns, after a 1-second delay, restore 20% of your maximum mana or 20% of your maximum energy and increase maximum mana by 100 or maximum energy by 10, stacking up to 5 times for a maximum of 500 maximum mana or 50 maximum energy."
					}
				],
				"slot2": [
					{
						"active": false,
						"apiname": "legendalacrity",
						"img": "assets/images/runes/Precision/Legend Alacrity.png",
						"index": 0,
						"keyslot": "slot2",
						"name": "Legend: Alacrity",
						"stackable": {
							"as": 15
						},
						"stacked": false,
						"stats": {
							"as": 3
						},
						"tooltip": "Legend: Alacrity<br><br>Passive: Gain 3% (+ 1.5% per Legend stack)  bonus attack speed, up to 18% with 10 stacks."
					},
					{
						"active": false,
						"apiname": "legendtenacity",
						"img": "assets/images/runes/Precision/Legend Tenacity.png",
						"index": 1,
						"keyslot": "slot2",
						"name": "Legend: Tenacity",
						"stackable": {
							"tenacity": 25
						},
						"stacked": false,
						"stats": {
							"tenacity": 5
						},
						"tooltip": "Legend: Tenacity<br><br>Passive: Gain 5% (+ 2.5% per Legend stack) Tenacity, up to 30% with 10 stacks."
					},
					{
						"active": false,
						"apiname": "legendbloodline",
						"img": "assets/images/runes/Precision/Legend Bloodline.png",
						"index": 2,
						"keyslot": "slot2",
						"name": "Legend: Bloodline",
						"stackable": {
							"ls": 12
						},
						"stacked": false,
						"stats": {
							"ls": 0
						},
						"tooltip": "Legend: Bloodline<br><br>Passive: Gain 0.6%  life steal per Legend stack, up to 12% with 20 stacks."
					}
				],
				"slot3": [
					{
						"active": false,
						"apiname": "coupdegrace",
						"img": "assets/images/runes/Precision/Coup de Grace.png",
						"index": 0,
						"keyslot": "slot3",
						"name": "Coup de Grace",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "0.08",
						"affects_stat": "",
						"tooltip": "Coup de Grace<br><br>Passive: Deal 8% increased damage to champions below 40% maximum health."
					},
					{
						"active": false,
						"apiname": "cutdown",
						"img": "assets/images/runes/Precision/Cut Down.png",
						"index": 1,
						"keyslot": "slot3",
						"name": "Cut Down",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "(targetAdditionalMaxHealthPercent-0.1)*1/9+0.05",
						"affects_stat": "",
						"tooltip": "Cut Down<br><br>Passive: Deal 5% to 15% increased damage to champions, based on how much more maximum health they have than you. Bonus damage scales up linearly against enemies with 10% to 100% more maximum health than you."
					},
					{
						"active": false,
						"apiname": "laststand",
						"img": "assets/images/runes/Precision/Last Stand.png",
						"index": 2,
						"keyslot": "slot3",
						"name": "Last Stand",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "",
						"affects_stat": "",
						"tooltip": "Last Stand<br><br>Passive: Deal 5% increased damage to champions while below 60% maximum health. This increases based on your missing health, up to 11% increased damage while below 30% maximum health."
					}
				]
			}
		]
	},
	{
		"active_primary": false,
		"active_secondary": false,
		"img": "assets/images/runes/Domination/Domination.png",
		"path": "Domination",
		"tooltip": "Domination: Focuses on burst damage and target access.",
		"runes": [
			{
				"keystones": [
					{
						"active": false,
						"apiname": "electrocute",
						"img": "assets/images/runes/Domination/Electrocute.png",
						"keyslot": "keystones",
						"name": "Electrocute",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "21.176+8.824*currentLevel+0.4*bonusAD+0.25*AP",
						"affects_stat": "",
						"type": "adaptive",
						"tooltip": "Electrocute<br><br>Passive: Basic attacks, abilities, item effects and summoner spells generate stacks on enemy champions hit, up to one per attack or cast. Applying 3 stacks to a target within a 3 second period causes them to be struck by lightning after a 0.25-second delay, dealing them 30 - 180 (based on level) (+ 40% bonus AD) (+ 25% AP) Adaptive damage."
					},
					{
						"active": false,
						"apiname": "predator",
						"img": "assets/images/runes/Domination/Predator.png",
						"keyslot": "keystones",
						"name": "Predator",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "35.294+4.706*currentLevel+0.2*bonusAD+0.1*AP",
						"affects_stat": "",
						"type": "adaptive",
						"tooltip": "Predator<br><br>Passive: Boots gain the active effect Predator."
					},
					{
						"active": false,
						"apiname": "darkharvest",
						"img": "assets/images/runes/Domination/Dark Harvest.png",
						"keyslot": "keystones",
						"name": "Dark Harvest",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "17.647+2.353*currentLevel+5*soulCount+0.25*bonusAD+0.15*AP",
						"affects_stat": "",
						"type": "adaptive",
						"tooltip": "Dark Harvest<br><br>Passive: Dealing non- periodic damage to an enemy champion below 50% of their maximum health deals 20 - 60 (based on level) (+ 5 per Soul) (+ 25% bonus AD) (+ 15% AP) bonus Adaptive damage and reaps 1 Soul. This cannot occur again for 45 seconds, resetting to 1.5 seconds on champion takedown."
					},
					{
						"active": false,
						"apiname": "hailofblades",
						"img": "assets/images/runes/Domination/Hail of Blades.png",
						"keyslot": "keystones",
						"name": "Hail of Blades",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "1.1",
						"affects_stat": "as",
						"tooltip": "Hail of Blades<br><br>Passive: Basic attacking an enemy champion triggers Hail of Blades on-attack, with 2 stacks remaining."
					}
				],
				"slot1": [
					{
						"active": false,
						"apiname": "cheapshot",
						"img": "assets/images/runes/Domination/Cheap Shot.png",
						"index": 0,
						"keyslot": "slot1",
						"name": "Cheap Shot",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "7.941+2.059*currentLevel",
						"affects_stat": "trueDamage",
						"tooltip": "Cheap Shot<br><br>Passive: Basic attacks and damaging abilities deal 10 - 45 (based on level) bonus true damage to champions with impaired movement or actions."
					},
					{
						"active": false,
						"apiname": "tasteofblood",
						"img": "assets/images/runes/Domination/Taste of Blood.png",
						"index": 1,
						"keyslot": "slot1",
						"name": "Taste of Blood",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "",
						"affects_stat": "",
						"tooltip": "Taste of Blood<br><br>Passive: Damaging an enemy champion heals you for 18 - 35 (based on level) (+ 20% bonus AD) (+ 10% AP)."
					},
					{
						"active": false,
						"apiname": "suddenimpact",
						"img": "assets/images/runes/Domination/Sudden Impact.png",
						"index": 2,
						"keyslot": "slot1",
						"name": "Sudden Impact",
						"stackable": {},
						"stacked": false,
						"stats": {
							"leth": 7,
							"mpen": 6
						},
						"string_expression": "",
						"affects_stat": "",
						"tooltip": "Sudden Impact<br><br>Passive: Going in combat by affecting an enemy champion within 3 seconds of using a dash or blink, or exiting from stealth, grants 7 Lethality (4.36 - 7 (based on level) armor penetration) and 6 Magic Penetration for the next 5 seconds."
					}
				],
				"slot2": [
					{
						"active": false,
						"apiname": "zombieward",
						"img": "assets/images/runes/Domination/Zombie Ward.png",
						"index": 0,
						"keyslot": "slot2",
						"name": "Zombie Ward",
						"stackable": {
							"ad": 18,
							"ap": 30
						},
						"stacked": false,
						"stats": {},
						"string_expression": "",
						"affects_stat": "",
						"type": "adaptive",
						"tooltip": "Zombie Ward<br><br>Passive: Scoring a takedown on an enemy ward summons a friendly Zombie Ward in its place (10 second assist timer).<br><br>Gain 1.2 bonus Attack Damage or 2 Ability Power (Adaptive) for every Zombie Ward spawned, up to 10, for a maximum of 12 bonus Attack Damage or 20 Ability Power (Adaptive). After spawning 10 Zombie Wards, gain an additional 6 bonus Attack Damage or 10 Ability Power (Adaptive).<br><br>Zombie Wards grant sight over 1100 units, are untargetable to your team, are visible to the enemy team, have  1 health, last for 120 seconds and don't count towards your ward limit."
					},
					{
						"active": false,
						"apiname": "ghostporo",
						"img": "assets/images/runes/Domination/Ghost Poro.png",
						"index": 1,
						"keyslot": "slot2",
						"name": "Ghost Poro",
						"stackable": {
							"ad": 18,
							"ap": 30
						},
						"stacked": false,
						"stats": {},
						"string_expression": "",
						"affects_stat": "",
						"type": "adaptive",
						"tooltip": "Ghost Poro<br><br>Passive: When your wards expire, they leave behind a Ghost Poro, which is untargetable and grants sight over a 450-unit area for 60 seconds. Wards killed by enemies don't spawn Ghost Poros.<br><br>Nearby enemy champions that have sight of Ghost Poro scare it away.<br><br>Gain 1.2 bonus Attack Damage or 2 Ability Power (Adaptive) for every Ghost Poro spawned and when your Ghost Poro spots an enemy champion, up to 10 stacks, for a maximum of 12 bonus Attack Damage or 20 Ability Power (Adaptive). After reaching 10 stacks, additionally gain 6 bonus Attack Damage or 10 Ability Power (Adaptive)."
					},
					{
						"active": false,
						"apiname": "eyeballcollection",
						"img": "assets/images/runes/Domination/Eyeball Collection.png",
						"index": 2,
						"keyslot": "slot2",
						"name": "Eyeball Collection",
						"stackable": {
							"ad": 18,
							"ap": 30
						},
						"stacked": false,
						"stats": {},
						"string_expression": "",
						"affects_stat": "",
						"type": "adaptive",
						"tooltip": "Eyeball Collection<br><br>Passive: Collect 1 Eyeball per champion takedown, up to 10.<br><br>Gain 1.2 bonus Attack Damage or 2 Ability Power (Adaptive) per Eyeball collected, up to 12 bonus Attack Damage or 20 Ability Power (Adaptive). Completing your collection awards an additional 6 bonus Attack Damage or 10 Ability Power (Adaptive)."
					}
				],
				"slot3": [
					{
						"active": false,
						"apiname": "ravenoushunter",
						"img": "assets/images/runes/Domination/Ravenous Hunter.png",
						"index": 0,
						"keyslot": "slot3",
						"name": "Ravenous Hunter",
						"stackable": {
							"ls": 12.5,
							"spell_vamp": 12.5
						},
						"stacked": false,
						"stats": {
							"ls": 1.5,
							"spell_vamp": 1.5
						},
						"tooltip": "Ravenous Hunter<br><br> Heal for 1.5% (+ 2.5% per Bounty Hunter stack) of the damage dealt by your abilities, on-hit effects and items, up to 14% at 5 stacks. Benefits from Heal Power."
					},
					{
						"active": false,
						"apiname": "ingenioushunter",
						"img": "assets/images/runes/Domination/Ingenious Hunter.png",
						"index": 1,
						"keyslot": "slot3",
						"name": "Ingenious Hunter",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "",
						"affects_stat": "",
						"tooltip": "Ingenious Hunter<br><br>Passive: Reduces the  cooldown of item actives by 15% (+ 5% per Bounty Hunter stack), up to 40% at 5 stacks. This effect also applies to trinkets."
					},
					{
						"active": false,
						"apiname": "relentlesshunter",
						"img": "assets/images/runes/Domination/Relentless Hunter.png",
						"index": 2,
						"keyslot": "slot3",
						"name": "Relentless Hunter",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "",
						"affects_stat": "",
						"tooltip": "Relentless Hunter<br><br>Passive: Gain 10 (+ 9 per Bounty Hunter stack) out-of-combat  movement speed, up to 55 at 5 stacks."
					},
					{
						"active": false,
						"apiname": "ultimatehunter",
						"img": "assets/images/runes/Domination/Ultimate Hunter.png",
						"index": 3,
						"keyslot": "slot3",
						"name": "Ultimate Hunter",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "",
						"affects_stat": "",
						"tooltip": "Ultimate Hunter<br><br>Reduces the  cooldown of your ultimate ability by 5% (+ 4% per Bounty Hunter stack), up to 25% at 5 stacks."
					}
				]
			}
		]
	},
	{
		"active_primary": false,
		"active_secondary": false,
		"img": "assets/images/runes/Sorcery/Sorcery.png",
		"path": "Sorcery",
		"tooltip": "Sorcery: Focuses on empowered abilities and resource manipulation.",
		"runes": [
			{
				"keystones": [
					{
						"active": false,
						"apiname": "summonaery",
						"img": "assets/images/runes/Sorcery/Summon Aery.png",
						"keyslot": "keystones",
						"name": "Summon Aery",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "8.235+1.765*currentLevel+0.15*bonusAD+0.1*AP",
						"affects_stat": "",
						"type": "adaptive",
						"tooltip": "Summon Aery<br><br>Passive: Basic attacks, abilities, item effects, and summoner spells against an enemy champion signals Aery to dash to them, dealing 10 - 40 (based on level) (+ 15% bonus AD) (+ 10% AP) Adaptive damage. Healing, shielding, or buffing an allied champion signals Aery to dash to them, shielding them for 35 - 80 (based on level) (+ 40% bonus AD) (+ 25% AP) for 2 seconds."
					},
					{
						"active": false,
						"apiname": "arcanecomet",
						"img": "assets/images/runes/Sorcery/Arcane Comet.png",
						"keyslot": "keystones",
						"name": "Arcane Comet",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "25.882+4.118*currentLevel+0.35*bonusAD+0.2*AP",
						"affects_stat": "",
						"type": "adaptive",
						"tooltip": "Arcane Comet<br><br>Passive: Damaging an enemy champion with an ability hurls an Arcane Comet at their current location that lands after 0.75 seconds, dealing 30 - 100 (based on level) (+ 35% bonus AD) (+ 20% AP) Adaptive damage to enemies upon impact."
					},
					{
						"active": false,
						"apiname": "phaserush",
						"img": "assets/images/runes/Sorcery/Phase Rush.png",
						"keyslot": "keystones",
						"name": "Phase Rush",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "0.38824+0.01176*currentLevel",
						"ranged_expression": "0.24118+0.00882*currentLevel",
						"affects_stat": "ms",
						"tooltip": "Phase Rush<br><br>Passive: Basic attacks, abilities, item effects and summoner spells generate stacks on enemy champion hit, up to one per attack or cast. Applying 3 stacks to a target within a 4 second period grants you 40% - 60% (based on level)  movement speed and 75% slow resist for 3 seconds."
					}
				],
				"slot1": [
					{
						"active": false,
						"apiname": "nullifyingorb",
						"img": "assets/images/runes/Sorcery/Nullifying Orb.png",
						"index": 0,
						"keyslot": "slot1",
						"name": "Nullifying Orb",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "",
						"affects_stat": "",
						"tooltip": "Nullifying Orb<br><br>Passive: If you would take magic damage that would reduce you below 30% of your  maximum health, you first gain a shield that absorbs 40 - 120 (based on level) (+ 15% bonus AD) (+ 10% AP) magic damage for 4 seconds."
					},
					{
						"active": false,
						"apiname": "manaflowband",
						"img": "assets/images/runes/Sorcery/Manaflow Band.png",
						"index": 1,
						"keyslot": "slot1",
						"name": "Manaflow Band",
						"stackable": {
							"mp": 250
						},
						"stacked": false,
						"stats": {},
						"string_expression": "",
						"affects_stat": "",
						"tooltip": "Manaflow Band<br><br>Passive: Hitting an enemy champion with an ability permanently increases your  maximum mana by 25, up to 250 mana. This does not increase your current mana."
					},
					{
						"active": false,
						"apiname": "nimbuscloak",
						"img": "assets/images/runes/Sorcery/Nimbus Cloak.png",
						"index": 2,
						"keyslot": "slot1",
						"name": "Nimbus Cloak",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "",
						"affects_stat": "",
						"tooltip": "Nimbus Cloak<br><br>Passive: Casting a summoner spell grants ghosting and 10% - 30% (based on summoner spell cooldown)  bonus movement speed for 2.5 seconds."
					}
				],
				"slot2": [
					{
						"active": false,
						"apiname": "transcendence",
						"img": "assets/images/runes/Sorcery/Transcendence.png",
						"index": 0,
						"keyslot": "slot2",
						"name": "Transcendence",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "",
						"affects_stat": "",
						"tooltip": "Transcendence<br><br>Passive: Gain 10%  cooldown reduction\u200e at Level 10."
					},
					{
						"active": false,
						"apiname": "celerity",
						"img": "assets/images/runes/Sorcery/Celerity.png",
						"index": 1,
						"keyslot": "slot2",
						"name": "Celerity",
						"stackable": {},
						"stacked": false,
						"stats": {
							"ms%": 8
						},
						"tooltip": "Celerity<br><br>Passive: All  movement speed bonuses are 7% more effective on you."
					},
					{
						"active": false,
						"apiname": "absolutefocus",
						"img": "assets/images/runes/Sorcery/Absolute Focus.png",
						"index": 2,
						"keyslot": "slot2",
						"name": "Absolute Focus",
						"stackable": {},
						"stacked": false,
						"stats": {
							"ad": 1.8,
							"ap": 3,
							"ad_lvl": 0.953,
							"ap_lvl": 1.588
						},
						"type": "adaptive",
						"tooltip": "Absolute Focus<br><br>Passive: Gain 1.8 - 18 (based on level) bonus Attack Damage or 3 - 30 (based on level) Ability Power (Adaptive) while above 70% of your maximum health."
					}
				],
				"slot3": [
					{
						"active": false,
						"apiname": "scorch",
						"img": "assets/images/runes/Sorcery/Scorch.png",
						"index": 0,
						"keyslot": "slot3",
						"name": "Scorch",
						"stackable": {
							"spell_m_proc": 15,
							"spell_m_proc_lvl": 1.17647
						},
						"stacked": false,
						"stats": {},
						"string_expression": "",
						"affects_stat": "",
						"tooltip": "Scorch<br><br>Passive: Your next damaging ability hit sets enemy champions on fire, dealing 15 - 35 (based on level) bonus magic damage after 1 second."
					},
					{
						"active": false,
						"apiname": "waterwalking",
						"img": "assets/images/runes/Sorcery/Waterwalking.png",
						"index": 1,
						"keyslot": "slot3",
						"name": "Waterwalking",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "",
						"affects_stat": "",
						"tooltip": "Waterwalking<br><br>Passive: While in the river, you gain 25  bonus movement speed and 3 - 18 (based on level) bonus Attack Damage or 5 - 30 (based on level) Ability Power (Adaptive)."
					},
					{
						"active": false,
						"apiname": "gatheringstorm",
						"img": "assets/images/runes/Sorcery/Gathering Storm.png",
						"index": 2,
						"keyslot": "slot3",
						"name": "Gathering Storm",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "",
						"affects_stat": "",
						"type": "adaptive",
						"tooltip": "Gathering Storm<br><br>Passive: Gain increasing Adaptive Force every 10 minutes that grants a total 0 / 4.8 / 14.4 / 28.8 / 48 / \u221e (based on minutes) bonus Attack Damage or 0 / 8 / 24 / 48 / 80 / \u221e (based on minutes) Ability Power (Adaptive)."
					}
				]
			}
		]
	},
	{
		"active_primary": false,
		"active_secondary": false,
		"img": "assets/images/runes/Resolve/Resolve.png",
		"path": "Resolve",
		"tooltip": "Resolve: Focuses on durability and crowd control.",
		"runes": [
			{
				"keystones": [
					{
						"active": false,
						"apiname": "graspoftheundying",
						"img": "assets/images/runes/Resolve/Grasp of the Undying.png",
						"keyslot": "keystones",
						"name": "Grasp of the Undying",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "0.04*maximumHealth",
						"affects_stat": "magicDamage",
						"tooltip": "Grasp of the Undying<br><br>Passive: Entering combat generates one stack every second for the next 3 seconds. Additional stacks may be generated by re-entering combat after 2 seconds. After reaching 4 stacks, your next basic attack within 6 seconds against an enemy champion consumes all stacks to deal 4% of your maximum health in bonus magic damage, restore 2% of your  maximum health, and permanently grant 5 bonus health. The empowered attack duration refreshes whenever going in combat."
					},
					{
						"active": false,
						"apiname": "aftershock",
						"img": "assets/images/runes/Resolve/Aftershock.png",
						"keyslot": "keystones",
						"name": "Aftershock",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "19.412+5.588*currentLevel+0.08*bonusHealth",
						"affects_stat": "magicDamage",
						"tooltip": "Aftershock<br><br>Passive: Immobilizing an enemy champion grants a static 35 (+ 80% bonus armor) bonus armor and 35 (+ 80% bonus magic resistance) bonus magic resistance for 2.5 seconds. The bonus resistances are capped at 80 - 150 (based on level)."
					},
					{
						"active": false,
						"apiname": "guardian",
						"img": "assets/images/runes/Resolve/Guardian.png",
						"keyslot": "keystones",
						"name": "Guardian",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "",
						"affects_stat": "",
						"tooltip": "Guardian<br><br>Passive: While within 350 units of an allied champion, you raise your Guard. Allied champions you affect with unit-targeted abilities are also Guarded for 3 seconds, regardless of distance."
					}
				],
				"slot1": [
					{
						"active": false,
						"apiname": "demolish",
						"img": "assets/images/runes/Resolve/Demolish.png",
						"index": 0,
						"keyslot": "slot1",
						"name": "Demolish",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "",
						"affects_stat": "",
						"tooltip": "Demolish<br><br>Passive: You generate stacks every 0.5 seconds on enemy turrets within 600 units, up to 6 after 3 seconds. Your next basic attack against a turret with 6 stacks deals 100 (+ 35% of your maximum health) bonus physical damage. Demolish will only go on  cooldown upon triggering the damage."
					},
					{
						"active": false,
						"apiname": "fontoflife",
						"img": "assets/images/runes/Resolve/Font of Life.png",
						"index": 1,
						"keyslot": "slot1",
						"name": "Font of Life",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "",
						"affects_stat": "",
						"tooltip": "Font of Life<br><br>Passive: Slowing or immobilizing an enemy champion marks them for 4 seconds."
					},
					{
						"active": false,
						"apiname": "shieldbash",
						"img": "assets/images/runes/Resolve/Shield Bash.png",
						"index": 2,
						"keyslot": "slot1",
						"name": "Shield Bash",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "",
						"affects_stat": "",
						"tooltip": "Shield Bash<br><br>Passive: While shielded, gain 1 - 10 (based on level)  bonus armor and  bonus magic resistance."
					}
				],
				"slot2": [
					{
						"active": false,
						"apiname": "conditioning",
						"img": "assets/images/runes/Resolve/Conditioning.png",
						"index": 0,
						"keyslot": "slot2",
						"name": "Conditioning",
						"stackable": {},
						"stacked": false,
						"stats": {
							"arm": 9,
							"mr": 9,
							"arm_mult": 5,
							"mr_mult": 5
						},
						"tooltip": "Conditioning<br><br>Passive: After 12 minutes, gain  9 bonus armor and  9 bonus magic resistance and increases your total armor and magic resistance by 5%."
					},
					{
						"active": false,
						"apiname": "secondwind",
						"img": "assets/images/runes/Resolve/Second Wind.png",
						"index": 1,
						"keyslot": "slot2",
						"name": "Second Wind",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "",
						"affects_stat": "",
						"tooltip": "Second Wind<br><br>Passive: After taking damage from an enemy champion,  regenerate 6 (+ 4% of your missing health) over 10 seconds."
					},
					{
						"active": false,
						"apiname": "boneplating",
						"img": "assets/images/runes/Resolve/Bone Plating.png",
						"index": 2,
						"keyslot": "slot2",
						"name": "Bone Plating",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "",
						"affects_stat": "",
						"tooltip": "Bone Plating<br><br>Passive: After taking damage from an enemy champion, for 1.5 seconds, the next 3 spells or attacks you receive from the same enemy champion deal 30 - 60 (based on level) less damage."
					}
				],
				"slot3": [
					{
						"active": false,
						"apiname": "overgrowth",
						"img": "assets/images/runes/Resolve/Overgrowth.png",
						"index": 0,
						"keyslot": "slot3",
						"name": "Overgrowth",
						"stackable": {
							"hp": 45,
							"hp_mult": 3.5
						},
						"stacked": false,
						"stats": {},
						"string_expression": "",
						"affects_stat": "",
						"tooltip": "Overgrowth<br><br>Passive: Every 8 monsters or enemy minions that die near you permanently grants 3 bonus health."
					},
					{
						"active": false,
						"apiname": "revitalize",
						"img": "assets/images/runes/Resolve/Revitalize.png",
						"index": 1,
						"keyslot": "slot3",
						"name": "Revitalize",
						"stackable": {},
						"stacked": false,
						"stats": {
							"heal_shield": 5
						},
						"tooltip": "Revitalize<br><br>Passive: Grants  5% Heal and shield power."
					},
					{
						"active": false,
						"apiname": "unflinching",
						"img": "assets/images/runes/Resolve/Unflinching.png",
						"index": 2,
						"keyslot": "slot3",
						"name": "Unflinching",
						"stackable": {},
						"stacked": false,
						"stats": {
							"tenacity": 10
						},
						"tooltip": "Unflinching<br><br>Passive: Gain 10% slow resist and  tenacity. This increases based on your missing health, up to 30% slow resist and  tenacity at 30% maximum health or below."
					}
				]
			}
		]
	},
	{
		"active_primary": false,
		"active_secondary": false,
		"img": "assets/images/runes/Inspiration/Inspiration.png",
		"path": "Inspiration",
		"tooltip": "Inspiration: Focuses on creative tools and rule bending.",
		"runes": [
			{
				"keystones": [
					{
						"active": false,
						"apiname": "glacialaugment",
						"img": "assets/images/runes/Inspiration/Glacial Augment.png",
						"keyslot": "keystones",
						"name": "Glacial Augment",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "",
						"affects_stat": "",
						"tooltip": "Glacial Augment<br><br>Passive \u2013 Glacial Augment: Basic attacks slow enemy champions for 2 seconds, which increases over the duration. This effect cannot occur on the same target more than once every few seconds. Melee champions: 45% - 55% (based on level) maximum slow. Ranged champions: 30% - 40% (based on level) maximum slow."
					},
					{
						"active": false,
						"apiname": "unsealedspellbook",
						"img": "assets/images/runes/Inspiration/Unsealed Spellbook.png",
						"keyslot": "keystones",
						"name": "Unsealed Spellbook",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "",
						"affects_stat": "",
						"tooltip": "Unsealed Spellbook<br><br>Passive: While not channeling Teleport and being out-of-combat for 5 seconds, swap one of your equipped summoner spells to a new, single use summoner spell. You cannot select a summoner spell you have already equipped."
					},
					{
						"active": false,
						"apiname": "prototypeomnistone",
						"img": "assets/images/runes/Inspiration/Prototype Omnistone.png",
						"keyslot": "keystones",
						"name": "Prototype: Omnistone",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "",
						"affects_stat": "",
						"tooltip": "Prototype: Omnistone<br><br>Passive: Periodically grants a single use of another random keystone. 5 - 3 (based on level) second cooldown between using a keystone and gaining the next (9 - 7 (based on level) seconds for ranged champions). After 40 seconds of not using a given keystone, another random keystone is granted while out of combat. Entering the spawn point will re-roll the current keystone."
					}
				],
				"slot1": [
					{
						"active": false,
						"apiname": "hextechflashtraption",
						"img": "assets/images/runes/Inspiration/Hextech Flashtraption.png",
						"index": 0,
						"keyslot": "slot1",
						"name": "Hextech Flashtraption",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "",
						"affects_stat": "",
						"tooltip": "Hextech Flashtraption<br><br>Passive: While Flash is on cooldown, it is replaced by Hexflash."
					},
					{
						"active": false,
						"apiname": "magicalfootwear",
						"img": "assets/images/runes/Inspiration/Magical Footwear.png",
						"index": 1,
						"keyslot": "slot1",
						"name": "Magical Footwear",
						"stackable": {},
						"stacked": false,
						"stats": {
							"ms": 10
						},
						"tooltip": "Magical Footwear<br><br>Passive: At 12 minutes (reduced by 45 seconds per takedown), you gain Slightly Magical Boots for free. Slightly Magical Boots are identical and can be upgraded as if they were Boots of Speed. If the inventory is full while receiving the boots, they will appear as soon as a slot in the inventory is available."
					},
					{
						"active": false,
						"apiname": "perfecttiming",
						"img": "assets/images/runes/Inspiration/Perfect Timing.png",
						"index": 2,
						"keyslot": "slot1",
						"name": "Perfect Timing",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "",
						"affects_stat": "",
						"tooltip": "Perfect Timing<br><br>Passive: Receive a Perfectly Timed Stopwatch at 14 minutes (reduced by 2 minutes per takedown). The Perfectly Timed Stopwatch is identical to the Stopwatch, except it only contributes for a value of 250. A free cosmetic, Commencing Stopwatch occupies one of your item slots before this time."
					}
				],
				"slot2": [
					{
						"active": false,
						"apiname": "futuresmarket",
						"img": "assets/images/runes/Inspiration/Future's Market.png",
						"index": 0,
						"keyslot": "slot2",
						"name": "Future's Market",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "",
						"affects_stat": "",
						"tooltip": "Future's Market<br><br>Passive: You can enter debt to buy items, up to 145 (+ 5 per Minute), which is displayed as negative gold in your treasury."
					},
					{
						"active": false,
						"apiname": "miniondematerializer",
						"img": "assets/images/runes/Inspiration/Minion Dematerializer.png",
						"index": 1,
						"keyslot": "slot2",
						"name": "Minion Dematerializer",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "",
						"affects_stat": "",
						"tooltip": "Minion Dematerializer<br><br>Passive: Start the game with 3 \u00d7  Minion Dematerializers, which can be activated to execute the target melee minion, caster minion, or siege minion. Dematerializers begin the game on a 180 second  cooldown."
					},
					{
						"active": false,
						"apiname": "biscuitdelivery",
						"img": "assets/images/runes/Inspiration/Biscuit Delivery.png",
						"index": 2,
						"keyslot": "slot2",
						"name": "Biscuit Delivery",
						"stackable": {
							"mp": 150
						},
						"stacked": false,
						"stats": {},
						"string_expression": "",
						"affects_stat": "",
						"tooltip": "Biscuit Delivery<br><br>Passive: Receive a Total Biscuit of Everlasting Will at 2:00, 4:00 and 6:00. If the inventory is full while receiving a biscuit, the biscuit(s) will appear as soon as a slot in the inventory is available."
					}
				],
				"slot3": [
					{
						"active": false,
						"apiname": "cosmicinsight",
						"img": "assets/images/runes/Inspiration/Cosmic Insight.png",
						"index": 0,
						"keyslot": "slot3",
						"name": "Cosmic Insight",
						"stackable": {},
						"stacked": false,
						"stats": {
							"cdr": 5
						},
						"tooltip": "Cosmic Insight<br><br>Passive: Gain 5%  cooldown reduction and increases the Cooldown Reduction cap to 45%. Additionally, reduces the  cooldown of summoner spells and item actives by 5%."
					},
					{
						"active": false,
						"apiname": "approachvelocity",
						"img": "assets/images/runes/Inspiration/Approach Velocity.png",
						"index": 1,
						"keyslot": "slot3",
						"name": "Approach Velocity",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "",
						"affects_stat": "",
						"tooltip": "Approach Velocity<br><br>Passive: Gain 7.5%  bonus movement speed toward enemy champions with impaired movement within 1000 range. This bonus is doubled to 15% and does not have a range cap toward enemy champions whose movement you have impaired."
					},
					{
						"active": false,
						"apiname": "timewarptonic",
						"img": "assets/images/runes/Inspiration/Time Warp Tonic.png",
						"index": 2,
						"keyslot": "slot3",
						"name": "Time Warp Tonic",
						"stackable": {},
						"stacked": false,
						"stats": {},
						"string_expression": "",
						"affects_stat": "",
						"tooltip": "Time Warp Tonic<br><br>Passive: Consuming a potion or biscuit grants 50% of its health immediately, and mana if applicable, but prevents that consumable from being used again until the effect ends. Health/mana per tick is then reduced by half for the effect's regular duration."
					}
				]
			}
		]
	}
];