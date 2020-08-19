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
		"img": "assets/images/runes/Rune Shards/Adaptive Force.png"
	},
	{
		"name": "Attack Speed",
		"apiname": "as",
		"index": 1,
		"active": false,
		"stats": {
			"as": 10,
		},
		"img": "assets/images/runes/Rune Shards/Attack Speed.png"
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
		"img": "assets/images/runes/Rune Shards/Cooldown Reduction.png"
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
		"img": "assets/images/runes/Rune Shards/Adaptive Force.png"
	},
	{
		"name": "Armor",
		"apiname": "armor",
		"index": 3,
		"active": false,
		"stats": {
			"arm": 6,
		},
		"img": "assets/images/runes/Rune Shards/Armor.png"
	},
	{
		"name": "Magic Resistance",
		"apiname": "mr",
		"index": 4,
		"active": false,
		"stats": {
			"mr": 8,
		},
		"img": "assets/images/runes/Rune Shards/Magic Resistance.png"
	}], "set3": [{
		"name": "Health",
		"apiname": "health",
		"index": 5,
		"active": false,
		"stats": {
			"hp": 15,
			"hp_lvl": 4.411765,
		},
		"img": "assets/images/runes/Rune Shards/Health.png"
	}, {
		"name": "Armor",
		"apiname": "armor",
		"index": 3,
		"active": false,
		"stats": {
			"arm": 6,
		},
		"img": "assets/images/runes/Rune Shards/Armor.png"
	},
	{
		"name": "Magic Resistance",
		"apiname": "mr",
		"index": 4,
		"active": false,
		"stats": {
			"mr": 8,
		},
		"img": "assets/images/runes/Rune Shards/Magic Resistance.png"
	}]
};
export const RUNES = [{
	'active_primary': false,
	'active_secondary': false,
	'img': 'assets/images/runes/Precision/Precision.png',
	'path_name': 'Precision',
	'runes': [{
		'keystones': [{
			'active': false,
			'apiname': 'presstheattack',
			'img': 'assets/images/runes/Precision/Press the Attack.png',
			'keyslot': 'keystones',
			'name': 'Press the Attack',
			'stackable': {},
			'stacked': false,
			'stats': {}
		},
		{
			'active': false,
			'apiname': 'lethaltempo',
			'img': 'assets/images/runes/Precision/Lethal Tempo.png',
			'keyslot': 'keystones',
			'name': 'Lethal Tempo',
			'stackable': {},
			'stacked': false,
			'stats': {}
		},
		{
			'active': false,
			'apiname': 'fleetfootwork',
			'img': 'assets/images/runes/Precision/Fleet Footwork.png',
			'keyslot': 'keystones',
			'name': 'Fleet Footwork',
			'stackable': {},
			'stacked': false,
			'stats': {}
		},
		{
			'active': false,
			'apiname': 'conqueror',
			'img': 'assets/images/runes/Precision/Conqueror.png',
			'keyslot': 'keystones',
			'name': 'Conqueror',
			'stackable': {},
			'stacked': false,
			'stats': {}
		}],
		'slot1': [{
			'active': false,
			'apiname': 'overheal',
			'img': 'assets/images/runes/Precision/Overheal.png',
			'index': 0,
			'keyslot': 'slot1',
			'name': 'Overheal',
			'stackable': {},
			'stacked': false,
			'stats': {}
		},
		{
			'active': false,
			'apiname': 'triumph',
			'img': 'assets/images/runes/Precision/Triumph.png',
			'index': 1,
			'keyslot': 'slot1',
			'name': 'Triumph',
			'stackable': {},
			'stacked': false,
			'stats': {}
		},
		{
			'active': false,
			'apiname': 'presenceofmind',
			'img': 'assets/images/runes/Precision/Presence of Mind.png',
			'index': 2,
			'keyslot': 'slot1',
			'name': 'Presence of Mind',
			'stackable': { 'mp': 500 },
			'stacked': false,
			'stats': { 'mp': 0 }
		}],
		'slot2': [{
			'active': false,
			'apiname': 'legendalacrity',
			'img': 'assets/images/runes/Precision/Legend Alacrity.png',
			'index': 0,
			'keyslot': 'slot2',
			'name': 'Legend: Alacrity',
			'stackable': { 'as': 15 },
			'stacked': false,
			'stats': { 'as': 3 }
		},
		{
			'active': false,
			'apiname': 'legendtenacity',
			'img': 'assets/images/runes/Precision/Legend Tenacity.png',
			'index': 1,
			'keyslot': 'slot2',
			'name': 'Legend: Tenacity',
			'stackable': { 'tenacity': 25 },
			'stacked': false,
			'stats': { 'tenacity': 5 }
		},
		{
			'active': false,
			'apiname': 'legendbloodline',
			'img': 'assets/images/runes/Precision/Legend Bloodline.png',
			'index': 2,
			'keyslot': 'slot2',
			'name': 'Legend: Bloodline',
			'stackable': { 'ls': 12 },
			'stacked': false,
			'stats': { 'ls': 0 }
		}],
		'slot3': [{
			'active': false,
			'apiname': 'coupdegrace',
			'img': 'assets/images/runes/Precision/Coup de Grace.png',
			'index': 0,
			'keyslot': 'slot3',
			'name': 'Coup de Grace',
			'stackable': {},
			'stacked': false,
			'stats': {}
		},
		{
			'active': false,
			'apiname': 'cutdown',
			'img': 'assets/images/runes/Precision/Cut Down.png',
			'index': 1,
			'keyslot': 'slot3',
			'name': 'Cut Down',
			'stackable': {},
			'stacked': false,
			'stats': {}
		},
		{
			'active': false,
			'apiname': 'laststand',
			'img': 'assets/images/runes/Precision/Last Stand.png',
			'index': 2,
			'keyslot': 'slot3',
			'name': 'Last Stand',
			'stackable': {},
			'stacked': false,
			'stats': {}
		}]
	}]
},
{
	'active_primary': false,
	'active_secondary': false,
	'img': 'assets/images/runes/Domination/Domination.png',
	'path_name': 'Domination',
	'runes': [{
		'keystones': [{
			'active': false,
			'apiname': 'electrocute',
			'img': 'assets/images/runes/Domination/Electrocute.png',
			'keyslot': 'keystones',
			'name': 'Electrocute',
			'stackable': {},
			'stacked': false,
			'stats': {}
		},
		{
			'active': false,
			'apiname': 'predator',
			'img': 'assets/images/runes/Domination/Predator.png',
			'keyslot': 'keystones',
			'name': 'Predator',
			'stackable': {},
			'stacked': false,
			'stats': {}
		},
		{
			'active': false,
			'apiname': 'darkharvest',
			'img': 'assets/images/runes/Domination/Dark Harvest.png',
			'keyslot': 'keystones',
			'name': 'Dark Harvest',
			'stackable': {},
			'stacked': false,
			'stats': {}
		},
		{
			'active': false,
			'apiname': 'hailofblades',
			'img': 'assets/images/runes/Domination/Hail of Blades.png',
			'keyslot': 'keystones',
			'name': 'Hail of Blades',
			'stackable': {},
			'stacked': false,
			'stats': {}
		}],
		'slot1': [{
			'active': false,
			'apiname': 'cheapshot',
			'img': 'assets/images/runes/Domination/Cheap Shot.png',
			'index': 0,
			'keyslot': 'slot1',
			'name': 'Cheap Shot',
			'stackable': {},
			'stacked': false,
			'stats': {}
		},
		{
			'active': false,
			'apiname': 'tasteofblood',
			'img': 'assets/images/runes/Domination/Taste of Blood.png',
			'index': 1,
			'keyslot': 'slot1',
			'name': 'Taste of Blood',
			'stackable': {},
			'stacked': false,
			'stats': {}
		},
		{
			'active': false,
			'apiname': 'suddenimpact',
			'img': 'assets/images/runes/Domination/Sudden Impact.png',
			'index': 2,
			'keyslot': 'slot1',
			'name': 'Sudden Impact',
			'stackable': {},
			'stacked': false,
			'stats': {}
		}],
		'slot2': [{
			'active': false,
			'apiname': 'zombieward',
			'img': 'assets/images/runes/Domination/Zombie Ward.png',
			'index': 0,
			'keyslot': 'slot2',
			'name': 'Zombie Ward',
			'stackable': { 'ad': 18, 'ap': 30 },
			'stacked': false,
			'stats': {},
			'type': 'adaptive'
		},
		{
			'active': false,
			'apiname': 'ghostporo',
			'img': 'assets/images/runes/Domination/Ghost Poro.png',
			'index': 1,
			'keyslot': 'slot2',
			'name': 'Ghost Poro',
			'stackable': { 'ad': 18, 'ap': 30 },
			'stacked': false,
			'stats': {},
			'type': 'adaptive'
		},
		{
			'active': false,
			'apiname': 'eyeballcollection',
			'img': 'assets/images/runes/Domination/Eyeball Collection.png',
			'index': 2,
			'keyslot': 'slot2',
			'name': 'Eyeball Collection',
			'stackable': { 'ad': 18, 'ap': 30 },
			'stacked': false,
			'stats': {},
			'type': 'adaptive'
		}],
		'slot3': [{
			'active': false,
			'apiname': 'ravenoushunter',
			'img': 'assets/images/runes/Domination/Ravenous Hunter.png',
			'index': 0,
			'keyslot': 'slot3',
			'name': 'Ravenous Hunter',
			'stackable': { 'ls': 12.5, 'spell_vamp': 12.5 },
			'stacked': false,
			'stats': { 'ls': 1.5, 'spell_vamp': 1.5 }
		},
		{
			'active': false,
			'apiname': 'ingenioushunter',
			'img': 'assets/images/runes/Domination/Ingenious Hunter.png',
			'index': 1,
			'keyslot': 'slot3',
			'name': 'Ingenious Hunter',
			'stackable': {},
			'stacked': false,
			'stats': {}
		},
		{
			'active': false,
			'apiname': 'relentlesshunter',
			'img': 'assets/images/runes/Domination/Relentless Hunter.png',
			'index': 2,
			'keyslot': 'slot3',
			'name': 'Relentless Hunter',
			'stackable': {},
			'stacked': false,
			'stats': {}
		},
		{
			'active': false,
			'apiname': 'ultimatehunter',
			'img': 'assets/images/runes/Domination/Ultimate Hunter.png',
			'index': 3,
			'keyslot': 'slot3',
			'name': 'Ultimate Hunter',
			'stackable': {},
			'stacked': false,
			'stats': {}
		}]
	}]
},
{
	'active_primary': false,
	'active_secondary': false,
	'img': 'assets/images/runes/Sorcery/Sorcery.png',
	'path_name': 'Sorcery',
	'runes': [{
		'keystones': [{
			'active': false,
			'apiname': 'summonaery',
			'img': 'assets/images/runes/Sorcery/Summon Aery.png',
			'keyslot': 'keystones',
			'name': 'Summon Aery',
			'stackable': {},
			'stacked': false,
			'stats': {}
		},
		{
			'active': false,
			'apiname': 'arcanecomet',
			'img': 'assets/images/runes/Sorcery/Arcane Comet.png',
			'keyslot': 'keystones',
			'name': 'Arcane Comet',
			'stackable': {},
			'stacked': false,
			'stats': {}
		},
		{
			'active': false,
			'apiname': 'phaserush',
			'img': 'assets/images/runes/Sorcery/Phase Rush.png',
			'keyslot': 'keystones',
			'name': 'Phase Rush',
			'stackable': {},
			'stacked': false,
			'stats': {}
		}],
		'slot1': [{
			'active': false,
			'apiname': 'nullifyingorb',
			'img': 'assets/images/runes/Sorcery/Nullifying Orb.png',
			'index': 0,
			'keyslot': 'slot1',
			'name': 'Nullifying Orb',
			'stackable': {},
			'stacked': false,
			'stats': {}
		},
		{
			'active': false,
			'apiname': 'manaflowband',
			'img': 'assets/images/runes/Sorcery/Manaflow Band.png',
			'index': 1,
			'keyslot': 'slot1',
			'name': 'Manaflow Band',
			'stackable': { 'mp': 250 },
			'stacked': false,
			'stats': {}
		},
		{
			'active': false,
			'apiname': 'nimbuscloak',
			'img': 'assets/images/runes/Sorcery/Nimbus Cloak.png',
			'index': 2,
			'keyslot': 'slot1',
			'name': 'Nimbus Cloak',
			'stackable': {},
			'stacked': false,
			'stats': {}
		}],
		'slot2': [{
			'active': false,
			'apiname': 'transcendence',
			'img': 'assets/images/runes/Sorcery/Transcendence.png',
			'index': 0,
			'keyslot': 'slot2',
			'name': 'Transcendence',
			'stackable': {},
			'stacked': false,
			'stats': {}
		},
		{
			'active': false,
			'apiname': 'celerity',
			'img': 'assets/images/runes/Sorcery/Celerity.png',
			'index': 1,
			'keyslot': 'slot2',
			'name': 'Celerity',
			'stackable': {},
			'stacked': false,
			'stats': { "ms%": 8 }
		},
		{
			'active': false,
			'apiname': 'absolutefocus',
			'img': 'assets/images/runes/Sorcery/Absolute Focus.png',
			'index': 2,
			'keyslot': 'slot2',
			'name': 'Absolute Focus',
			'stackable': {},
			'stacked': false,
			'stats': { 'ad': 1.8, 'ap': 3, 'ad_lvl': 0.953, 'ap_lvl': 1.588 },
			'type': 'adaptive'
		}],
		'slot3': [{
			'active': false,
			'apiname': 'scorch',
			'img': 'assets/images/runes/Sorcery/Scorch.png',
			'index': 0,
			'keyslot': 'slot3',
			'name': 'Scorch',
			'stackable': { "spell_m_proc": 15, "spell_m_proc_lvl": 1.17647 },
			'stacked': false,
			'stats': {}
		},
		{
			'active': false,
			'apiname': 'waterwalking',
			'img': 'assets/images/runes/Sorcery/Waterwalking.png',
			'index': 1,
			'keyslot': 'slot3',
			'name': 'Waterwalking',
			'stackable': {},
			'stacked': false,
			'stats': {}
		},
		{
			'active': false,
			'apiname': 'gatheringstorm',
			'img': 'assets/images/runes/Sorcery/Gathering Storm.png',
			'index': 2,
			'keyslot': 'slot3',
			'name': 'Gathering Storm',
			'stackable': {},
			'stacked': false,
			'stats': {},
			'type': 'adaptive'
		}]
	}]
},
{
	'active_primary': false,
	'active_secondary': false,
	'img': 'assets/images/runes/Resolve/Resolve.png',
	'path_name': 'Resolve',
	'runes': [{
		'keystones': [{
			'active': false,
			'apiname': 'graspoftheundying',
			'img': 'assets/images/runes/Resolve/Grasp of the Undying.png',
			'keyslot': 'keystones',
			'name': 'Grasp of the Undying',
			'stackable': {},
			'stacked': false,
			'stats': {}
		},
		{
			'active': false,
			'apiname': 'aftershock',
			'img': 'assets/images/runes/Resolve/Aftershock.png',
			'keyslot': 'keystones',
			'name': 'Aftershock',
			'stackable': {},
			'stacked': false,
			'stats': {}
		},
		{
			'active': false,
			'apiname': 'guardian',
			'img': 'assets/images/runes/Resolve/Guardian.png',
			'keyslot': 'keystones',
			'name': 'Guardian',
			'stackable': {},
			'stacked': false,
			'stats': {}
		}],
		'slot1': [{
			'active': false,
			'apiname': 'demolish',
			'img': 'assets/images/runes/Resolve/Demolish.png',
			'index': 0,
			'keyslot': 'slot1',
			'name': 'Demolish',
			'stackable': {},
			'stacked': false,
			'stats': {}
		},
		{
			'active': false,
			'apiname': 'fontoflife',
			'img': 'assets/images/runes/Resolve/Font of Life.png',
			'index': 1,
			'keyslot': 'slot1',
			'name': 'Font of Life',
			'stackable': {},
			'stacked': false,
			'stats': {}
		},
		{
			'active': false,
			'apiname': 'shieldbash',
			'img': 'assets/images/runes/Resolve/Shield Bash.png',
			'index': 2,
			'keyslot': 'slot1',
			'name': 'Shield Bash',
			'stackable': {},
			'stacked': false,
			'stats': {}
		}],
		'slot2': [{
			'active': false,
			'apiname': 'conditioning',
			'img': 'assets/images/runes/Resolve/Conditioning.png',
			'index': 0,
			'keyslot': 'slot2',
			'name': 'Conditioning',
			'stackable': {},
			'stacked': false,
			'stats': { "arm": 9, "mr": 9, "arm_mult": 5, "mr_mult": 5 }
		},
		{
			'active': false,
			'apiname': 'secondwind',
			'img': 'assets/images/runes/Resolve/Second Wind.png',
			'index': 1,
			'keyslot': 'slot2',
			'name': 'Second Wind',
			'stackable': {},
			'stacked': false,
			'stats': {}
		},
		{
			'active': false,
			'apiname': 'boneplating',
			'img': 'assets/images/runes/Resolve/Bone Plating.png',
			'index': 2,
			'keyslot': 'slot2',
			'name': 'Bone Plating',
			'stackable': {},
			'stacked': false,
			'stats': {}
		}],
		'slot3': [{
			'active': false,
			'apiname': 'overgrowth',
			'img': 'assets/images/runes/Resolve/Overgrowth.png',
			'index': 0,
			'keyslot': 'slot3',
			'name': 'Overgrowth',
			'stackable': { "hp": 45, "hp_mult": 3.5 },
			'stacked': false,
			'stats': {}
		},
		{
			'active': false,
			'apiname': 'revitalize',
			'img': 'assets/images/runes/Resolve/Revitalize.png',
			'index': 1,
			'keyslot': 'slot3',
			'name': 'Revitalize',
			'stackable': {},
			'stacked': false,
			'stats': { "heal_shield": 5 }
		},
		{
			'active': false,
			'apiname': 'unflinching',
			'img': 'assets/images/runes/Resolve/Unflinching.png',
			'index': 2,
			'keyslot': 'slot3',
			'name': 'Unflinching',
			'stackable': {},
			'stacked': false,
			'stats': { 'tenacity': 10 }
		}]
	}]
},
{
	'active_primary': false,
	'active_secondary': false,
	'img': 'assets/images/runes/Inspiration/Inspiration.png',
	'path_name': 'Inspiration',
	'runes': [{
		'keystones': [{
			'active': false,
			'apiname': 'glacialaugment',
			'img': 'assets/images/runes/Inspiration/Glacial Augment.png',
			'keyslot': 'keystones',
			'name': 'Glacial Augment',
			'stackable': {},
			'stacked': false,
			'stats': {}
		},
		{
			'active': false,
			'apiname': 'unsealedspellbook',
			'img': 'assets/images/runes/Inspiration/Unsealed Spellbook.png',
			'keyslot': 'keystones',
			'name': 'Unsealed Spellbook',
			'stackable': {},
			'stacked': false,
			'stats': {}
		},
		{
			'active': false,
			'apiname': 'prototypeomnistone',
			'img': 'assets/images/runes/Inspiration/Prototype Omnistone.png',
			'keyslot': 'keystones',
			'name': 'Prototype: Omnistone',
			'stackable': {},
			'stacked': false,
			'stats': {}
		}],
		'slot1': [{
			'active': false,
			'apiname': 'hextechflashtraption',
			'img': 'assets/images/runes/Inspiration/Hextech Flashtraption.png',
			'index': 0,
			'keyslot': 'slot1',
			'name': 'Hextech Flashtraption',
			'stackable': {},
			'stacked': false,
			'stats': {}
		},
		{
			'active': false,
			'apiname': 'magicalfootwear',
			'img': 'assets/images/runes/Inspiration/Magical Footwear.png',
			'index': 1,
			'keyslot': 'slot1',
			'name': 'Magical Footwear',
			'stackable': {},
			'stacked': false,
			'stats': { "ms": 10 }
		},
		{
			'active': false,
			'apiname': 'perfecttiming',
			'img': 'assets/images/runes/Inspiration/Perfect Timing.png',
			'index': 2,
			'keyslot': 'slot1',
			'name': 'Perfect Timing',
			'stackable': {},
			'stacked': false,
			'stats': {}
		}],
		'slot2': [{
			'active': false,
			'apiname': 'futuresmarket',
			'img': "assets/images/runes/Inspiration/Future's Market.png",
			'index': 0,
			'keyslot': 'slot2',
			'name': "Future's Market",
			'stackable': {},
			'stacked': false,
			'stats': {}
		},
		{
			'active': false,
			'apiname': 'miniondematerializer',
			'img': 'assets/images/runes/Inspiration/Minion Dematerializer.png',
			'index': 1,
			'keyslot': 'slot2',
			'name': 'Minion Dematerializer',
			'stackable': {},
			'stacked': false,
			'stats': {}
		},
		{
			'active': false,
			'apiname': 'biscuitdelivery',
			'img': 'assets/images/runes/Inspiration/Biscuit Delivery.png',
			'index': 2,
			'keyslot': 'slot2',
			'name': 'Biscuit Delivery',
			'stackable': { "mp": 150 },
			'stacked': false,
			'stats': {}
		}],
		'slot3': [{
			'active': false,
			'apiname': 'cosmicinsight',
			'img': 'assets/images/runes/Inspiration/Cosmic Insight.png',
			'index': 0,
			'keyslot': 'slot3',
			'name': 'Cosmic Insight',
			'stackable': {},
			'stacked': false,
			'stats': { "cdr": 5 }
		},
		{
			'active': false,
			'apiname': 'approachvelocity',
			'img': 'assets/images/runes/Inspiration/Approach Velocity.png',
			'index': 1,
			'keyslot': 'slot3',
			'name': 'Approach Velocity',
			'stackable': {},
			'stacked': false,
			'stats': {}
		},
		{
			'active': false,
			'apiname': 'timewarptonic',
			'img': 'assets/images/runes/Inspiration/Time Warp Tonic.png',
			'index': 2,
			'keyslot': 'slot3',
			'name': 'Time Warp Tonic',
			'stackable': {},
			'stacked': false,
			'stats': {}
		}]
	}]
}];