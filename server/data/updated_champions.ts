export const CHAMPIONS = [
	{
		'adaptivetype': 'Physical',
		'alttype': 'Tank',
		'apiname': 'aatrox',
		'attack': 8,
		'be': 4800,
		'changes': 'V10.15',
		'control': 2,
		'damage': 3,
		'date': '2013-06-13',
		'ddragon_apiname': 'Aatrox',
		'defense': 4,
		'difficulty': 2,
		'herotype': 'Fighter',
		'id': 266,
		'img': 'assets/images/champions/Aatrox/Aatrox.png',
		'index': 0,
		'magic': 3,
		'mobility': 2,
		'name': 'Aatrox',
		'patch': 'V3.8',
		'rangetype': 'Melee',
		'resource': 'None',
		'rp': 880,
		'skill_e':
		{
			'1': 'Umbral Dash',
			'img': 'assets/images/champions/Aatrox/Umbral Dash.png',
			'tooltip': 'Passive: Aatrox heals for ?% of damage he deals to champions.<br><br>Active: Aatrox dashes in a direction.'
		},
		'skill_i':
		{
			'1': 'Deathbringer Stance',
			'img': 'assets/images/champions/Aatrox/Deathbringer Stance.png',
			'tooltip': "Periodically, Aatrox's next basic attack deals bonus physical damage and heals him, based on the target's max health. "
		},
		'skill_q':
		{
			'1': 'The Darkin Blade',
			'img': 'assets/images/champions/Aatrox/The Darkin Blade.png',
			'tooltip': 'Aatrox slams his greatsword down, dealing ? physical damage. The Darkin Blade may be re-cast 2 additional times, each one increasing in damage.<br><br>Each strike can hit with the Edge, briefly knocking enemies up and dealing more damage.'
		},
		'skill_r':
		{
			'1': 'World Ender',
			'img': 'assets/images/champions/Aatrox/World Ender.png',
			'tooltip': 'Aatrox reveals his true demonic form for ? seconds. On activation, he fears nearby enemy minions and gains Movement Speed, decaying over the duration. While World Ender persists, he gains ?% Attack Damage and increases self healing by ?%.<br><br>On enemy champion takedown, World Ender is extended.'
		},
		'skill_w':
		{
			'1': 'Infernal Chains',
			'img': 'assets/images/champions/Aatrox/Infernal Chains.png',
			'tooltip': 'Aatrox smashes the ground, dealing ? physical damage to the first enemy hit and slowing by ?% for ?s.<br><br>Champions or Large Monsters have ?s to leave the impact area or be dragged back and damaged again.'
		},
		'stats':
		{
			'acquisition_radius': 475,
			'ad_base': 60,
			'ad_lvl': 5,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_taken': 0.95,
			'arm_base': 38,
			'arm_lvl': 3.25,
			'as_base': 0.651,
			'as_lvl': 2.5,
			'as_ratio': 0.651000022888183,
			'attack_cast_time': 0.300000011920928,
			'attack_total_time': 1.51999998092651,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 3,
			'hp5_lvl': 1,
			'hp_base': 580,
			'hp_lvl': 90,
			'ls': 0,
			'mp5_base': 0,
			'mp5_lvl': 0,
			'mp_base': 0,
			'mp_lvl': 0,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 345,
			'ms_base': 345,
			'pathing_radius': 35,
			'range': 175,
			'selection_radius': 135,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.2,
			'urf_dmg_taken': 0.75
		},
		'style': 20,
		'title': 'the Darkin Blade',
		'toughness': 3,
		'utility': 2
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Assassin',
		'apiname': 'ahri',
		'attack': 3,
		'be': 4800,
		'changes': 'V10.15',
		'control': 2,
		'damage': 3,
		'date': '2011-12-14',
		'ddragon_apiname': 'Ahri',
		'defense': 4,
		'difficulty': 2,
		'herotype': 'Mage',
		'id': 103,
		'img': 'assets/images/champions/Ahri/Ahri.png',
		'index': 1,
		'magic': 8,
		'mobility': 3,
		'name': 'Ahri',
		'patch': 'V1.0.0.131',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Charm',
			'img': 'assets/images/champions/Ahri/Charm.png',
			'tooltip': "Blows a kiss that deals 60/90/120/150/180 (+0.4) magic damage and charms the first enemy hit, causing them to walk harmlessly towards Ahri for 1.4/1.55/1.7/1.85/2 second(s) and immediately stopping any in-progress movement abilities.<br><br>Enemies hit by Charm become vulnerable for 3 seconds, taking 20% more damage from Ahri's abilities."
		},
		'skill_i':
		{
			'1': 'Vastayan Grace',
			'img': 'assets/images/champions/Ahri/Vastayan Grace.png',
			'tooltip': "Whenever Ahri's spells hit a champion 2 times within a short period, she briefly gains movement speed."
		},
		'skill_q':
		{
			'1': 'Orb of Deception',
			'img': 'assets/images/champions/Ahri/Orb of Deception.png',
			'tooltip': "Deals 40/65/90/115/140 (+0.35) magic damage on the way out, and 40/65/90/115/140 (+0.35) true damage on the way back.<br><br>Ahri's abilities generate Essence Theft stacks when they hit enemies (max ? per cast). At ? stacks, Ahri's next Orb of Deception that lands a hit will restore ? (+?) health for each enemy hit."
		},
		'skill_r':
		{
			'1': 'Spirit Rush',
			'img': 'assets/images/champions/Ahri/Spirit Rush.png',
			'tooltip': 'Nimbly dashes forward firing ? essence bolts at nearby enemies (prioritizing champions) dealing ? magic damage.<br><br>Can be cast up to ? times within ? seconds before going on cooldown.'
		},
		'skill_w':
		{
			'1': 'Fox-Fire',
			'img': 'assets/images/champions/Ahri/Fox-Fire.png',
			'tooltip': 'Releases fox-fires that seek nearby enemies and deal 40/65/90/115/140 (+0.3) magic damage.<br><br>Enemies hit with multiple fox-fires take 30% damage from each additional fox-fire beyond the first, for a maximum of ? damage to a single enemy.<br><br>Fox-fire prioritizes champions recently hit by Charm, then enemies Ahri recently attacked.<br>If Fox-fire cannot find a priority target, it targets champions over the nearest enemy if possible.'
		},
		'stats':
		{
			'acquisition_radius': 525,
			'ad_base': 53.04,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'arm_base': 20.88,
			'arm_lvl': 3.5,
			'as_base': 0.668,
			'as_lvl': 2,
			'as_ratio': 0.667999982833862,
			'attack_delay_offset': -0.0994649976491928,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 6.5,
			'hp5_lvl': 0.6,
			'hp_base': 526,
			'hp_lvl': 92,
			'ls': 0,
			'mp5_base': 8,
			'mp5_lvl': 0.8,
			'mp_base': 418,
			'mp_lvl': 25,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 330,
			'ms_base': 330,
			'pathing_radius': 35,
			'range': 550,
			'selection_radius': 100,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 0.95
		},
		'style': 100,
		'title': 'the Nine-Tailed Fox',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'Mixed,Physical',
		'apiname': 'akali',
		'attack': 5,
		'be': 3150,
		'changes': 'V10.13',
		'control': 1,
		'damage': 3,
		'date': '2010-05-11',
		'ddragon_apiname': 'Akali',
		'defense': 3,
		'difficulty': 2,
		'fullname': 'Akali Jhomen Tethi',
		'herotype': 'Assassin',
		'id': 84,
		'img': 'assets/images/champions/Akali/Akali.png',
		'index': 2,
		'magic': 8,
		'mobility': 3,
		'name': 'Akali',
		'patch': 'V1.0.0.85',
		'rangetype': 'Melee',
		'resource': 'Energy',
		'rp': 790,
		'skill_e':
		{
			'1': 'Shuriken Flip',
			'img': 'assets/images/champions/Akali/Shuriken Flip.png',
			'tooltip': 'Flip backward and fire a shuriken forward, dealing ? magic damage and marking the first enemy or smoke cloud hit.<br><br>Re-cast: Dash to the marked target, dealing ? magic damage.'
		},
		'skill_i':
		{
			'1': "Assassin's Mark",
			'img': "assets/images/champions/Akali/Assassin's Mark.png",
			'tooltip': "Dealing spell damage to a champion creates a ring of energy around them. Exiting that ring empowers Akali's next autoattack with bonus range and damage."
		},
		'skill_q':
		{
			'1': 'Five Point Strike',
			'img': 'assets/images/champions/Akali/Five Point Strike.png',
			'tooltip': 'Slings kunai in an arc, dealing ? magic damage. Enemies at the tip are briefly slowed.<br><br>At max rank, deals ? damage to minions and monsters.'
		},
		'skill_r':
		{
			'1': 'Perfect Execution',
			'img': 'assets/images/champions/Akali/Perfect Execution.png',
			'tooltip': 'Two dashes: The first vaults over target enemy champion, dealing ? physical damage to all enemies Akali dashes over. Akali can dash again after ? seconds.<br><br>The second is an untargeted piercing thrust that executes, dealing ? to ? magic damage based on missing health.'
		},
		'skill_w':
		{
			'1': 'Twilight Shroud',
			'img': 'assets/images/champions/Akali/Twilight Shroud.png',
			'tooltip': 'Drops a smoke bomb, unleashing a spreading cover of smoke lasting ? seconds.<br><br>Akali gains 30/35/40/45/50% decaying movement speed for ? seconds.<br><br>The smoke grants Akali invisibility while she is in it.  <br><br>Stealth - Invisible: Akali can only be revealed by nearby enemy Turrets or True Sight.'
		},
		'stats':
		{
			'acquisition_radius': 400,
			'ad_base': 62.4,
			'ad_lvl': 3.3,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 1.18,
			'aram_dmg_taken': 0.85,
			'arm_base': 23,
			'arm_lvl': 3.5,
			'as_base': 0.625,
			'as_lvl': 3.2,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.160999998450279,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 8,
			'hp5_lvl': 0.5,
			'hp_base': 575,
			'hp_lvl': 95,
			'ls': 0,
			'mp5_base': 50,
			'mp5_lvl': 0,
			'mp_base': 200,
			'mp_lvl': 0,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 37,
			'mr_lvl': 1.25,
			'ms': 345,
			'ms_base': 345,
			'nb_dmg_dealt': 1.05,
			'nb_dmg_taken': 0.9,
			'ofa_dmg_dealt': 1.05,
			'ofa_dmg_taken': 0.97,
			'pathing_radius': 30,
			'range': 125,
			'selection_radius': 100,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.1,
			'urf_dmg_taken': 0.9
		},
		'style': 65,
		'title': 'the Rogue Assassin',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Support',
		'apiname': 'alistar',
		'attack': 6,
		'be': 1350,
		'changes': 'V10.14',
		'control': 3,
		'damage': 1,
		'date': '2009-02-21',
		'ddragon_apiname': 'Alistar',
		'defense': 9,
		'difficulty': 1,
		'herotype': 'Tank',
		'id': 12,
		'img': 'assets/images/champions/Alistar/Alistar.png',
		'index': 3,
		'magic': 5,
		'mobility': 1,
		'name': 'Alistar',
		'nickname': 'Cow',
		'patch': 'Alpha Week 2',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 585,
		'skill_e':
		{
			'1': 'Trample',
			'img': 'assets/images/champions/Alistar/Trample.png',
			'tooltip': 'Alistar tramples the ground, ignoring unit collision and dealing ? (+?) magic damage over 5 seconds to nearby enemies. Each pulse that damages at least one enemy champion grants Alistar a Trample stack.<br><br>At 5 Trample stacks Alistar empowers his next basic attack against an enemy champion to deal an additional ? magic damage and stun for 1 second.'
		},
		'skill_i':
		{
			'1': 'Triumphant Roar',
			'img': 'assets/images/champions/Alistar/Triumphant Roar.png',
			'tooltip': 'Alistar charges his roar by stunning or displacing enemy champions or when nearby enemies die. When fully charged he heals himself all nearby allied champions.'
		},
		'skill_q':
		{
			'1': 'Pulverize',
			'img': 'assets/images/champions/Alistar/Pulverize.png',
			'tooltip': 'Alistar smashes the ground, dealing 60/105/150/195/240 (+0.5) magic damage and tossing nearby enemy units into the air for 1 second.'
		},
		'skill_r':
		{
			'1': 'Unbreakable Will',
			'img': 'assets/images/champions/Alistar/Unbreakable Will.png',
			'tooltip': 'Removes all disables from Alistar. For ? seconds Alistar takes ?% reduced physical and magical damage.'
		},
		'skill_w':
		{
			'1': 'Headbutt',
			'img': 'assets/images/champions/Alistar/Headbutt.png',
			'tooltip': 'Alistar rams into an enemy, dealing 55/110/165/220/275 (+0.7) magic damage and knocking them back.'
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 62,
			'ad_lvl': 3.75,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 0.95,
			'aram_dmg_taken': 1.05,
			'aram_healing': 0.9,
			'arm_base': 44,
			'arm_lvl': 3.5,
			'as_base': 0.625,
			'as_lvl': 2.125,
			'as_ratio': 0.625,
			'critdmg': 0,
			'gameplay_radius': 80,
			'heal_shield': 0,
			'hp5_base': 8.5,
			'hp5_lvl': 0.85,
			'hp_base': 600,
			'hp_lvl': 106,
			'ls': 0,
			'mp5_base': 8.5,
			'mp5_lvl': 0.8,
			'mp_base': 350,
			'mp_lvl': 40,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 330,
			'ms_base': 330,
			'nb_dmg_taken': 1.05,
			'pathing_radius': 50,
			'range': 125,
			'selection_radius': 145,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.05,
			'urf_dmg_taken': 0.95
		},
		'style': 65,
		'title': 'the Minotaur',
		'toughness': 3,
		'utility': 2
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Mage',
		'apiname': 'amumu',
		'attack': 2,
		'be': 450,
		'changes': 'V10.5',
		'control': 3,
		'damage': 2,
		'date': '2009-06-26',
		'ddragon_apiname': 'Amumu',
		'defense': 6,
		'difficulty': 1,
		'herotype': 'Tank',
		'id': 32,
		'img': 'assets/images/champions/Amumu/Amumu.png',
		'index': 4,
		'magic': 8,
		'mobility': 1,
		'name': 'Amumu',
		'patch': 'June 26, 2009 Patch',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 260,
		'skill_e':
		{
			'1': 'Tantrum',
			'img': 'assets/images/champions/Amumu/Tantrum.png',
			'tooltip': "Passive: Amumu takes 2/4/6/8/10 (+?)(+?) reduced physical damage.<br><br>Active: Amumu tantrums, dealing 75/100/125/150/175 (+0.5) magic damage to surrounding units. Basic attacks that hit Amumu reduce Tantrum's cooldown by 0.5 seconds.<br><br>Tantrum's passive effect increases in potency with bonus Armor and Magic Resist."
		},
		'skill_i':
		{
			'1': 'Cursed Touch',
			'img': 'assets/images/champions/Amumu/Cursed Touch.png',
			'tooltip': "Amumu's basic attacks Curse his enemies, causing them to take bonus true damage from incoming magic damage."
		},
		'skill_q':
		{
			'1': 'Bandage Toss',
			'img': 'assets/images/champions/Amumu/Bandage Toss.png',
			'tooltip': 'Launches a bandage in a direction. If it hits an enemy unit, Amumu pulls himself to them, dealing 80/130/180/230/280 (+0.7) magic damage and stunning for 1 second. '
		},
		'skill_r':
		{
			'1': 'Curse of the Sad Mummy',
			'img': 'assets/images/champions/Amumu/Curse of the Sad Mummy.png',
			'tooltip': 'Amumu entangles nearby enemy units, dealing ? magic damage and applying Curse. Entangled enemies are unable to attack or move for ? seconds.'
		},
		'skill_w':
		{
			'1': 'Despair',
			'img': 'assets/images/champions/Amumu/Despair.png',
			'tooltip': 'Toggle: Amumu cries, refreshing Curses on nearby enemies and dealing magic damage equal to 10/15/20/25/30 plus 1/1.25/1.5/1.75/2 (+0.01)% of their maximum health each second.'
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 53.38,
			'ad_lvl': 3.8,
			'apen': 0,
			'apen%': 0,
			'arm_base': 33,
			'arm_lvl': 3.8,
			'as_base': 0.736,
			'as_lvl': 2.18,
			'as_ratio': 0.638000011444091,
			'attack_delay_offset': -0.0661564618349075,
			'critdmg': 0,
			'gameplay_radius': 55,
			'heal_shield': 0,
			'hp5_base': 9,
			'hp5_lvl': 0.85,
			'hp_base': 613.12,
			'hp_lvl': 84,
			'ls': 0,
			'mp5_base': 7.382,
			'mp5_lvl': 0.525,
			'mp_base': 287.2,
			'mp_lvl': 40,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 335,
			'ms_base': 335,
			'nb_dmg_dealt': 0.95,
			'nb_dmg_taken': 1.05,
			'ofa_dmg_taken': 1.05,
			'pathing_radius': 30,
			'range': 125,
			'selection_radius': 100,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 90,
		'title': 'the Sad Mummy',
		'toughness': 3,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Support',
		'apiname': 'anivia',
		'attack': 1,
		'be': 3150,
		'changes': 'V10.6',
		'control': 3,
		'damage': 3,
		'date': '2009-07-10',
		'ddragon_apiname': 'Anivia',
		'defense': 4,
		'difficulty': 3,
		'herotype': 'Mage',
		'id': 34,
		'img': 'assets/images/champions/Anivia/Anivia.png',
		'index': 5,
		'magic': 10,
		'mobility': 1,
		'name': 'Anivia',
		'patch': 'July 10, 2009 Patch',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 790,
		'skill_e':
		{
			'1': 'Frostbite',
			'img': 'assets/images/champions/Anivia/Frostbite.png',
			'tooltip': 'Anivia blasts her target with a freezing wind, dealing 50/75/100/125/150 (+0.5) magic damage.<br><br>If a target was recently stunned by Anivia or damaged by a fully formed Glacial Storm, they take double damage.'
		},
		'skill_i':
		{
			'1': 'Rebirth',
			'img': 'assets/images/champions/Anivia/Rebirth.png',
			'tooltip': 'Upon taking fatal damage, Anivia reverts to an egg and is reborn with full health.'
		},
		'skill_q':
		{
			'1': 'Flash Frost',
			'img': 'assets/images/champions/Anivia/Flash Frost.png',
			'tooltip': 'A massive chunk of ice flies toward target location, dealing 60/85/110/135/160 (+0.45) magic damage. <br><br>At the end of its range or if Anivia activates the spell again, the missile detonates, doing 60/85/110/135/160 (+0.45) magic damage in a small area and stunning units for 1.1/1.2/1.3/1.4/1.5 seconds.<br><br>Enemies damaged by Flash Frost are also slowed by ?% for 3 seconds.'
		},
		'skill_r':
		{
			'1': 'Glacial Storm',
			'img': 'assets/images/champions/Anivia/Glacial Storm.png',
			'tooltip': "Activate: Drains ? Mana per second. <br><br>Anivia calls forth a driving rain of ice and hail that increases in size over ? seconds, dealing ? magic damage per second to targets and slowing their Movement Speed by ?%. <br><br>When the Glacial Storm is fully formed, it slows targets' Movement Speed by ?% and does ?% damage instead."
		},
		'skill_w':
		{
			'1': 'Crystallize',
			'img': 'assets/images/champions/Anivia/Crystallize.png',
			'tooltip': 'Anivia summons an impassable wall of ice 400/500/600/700/800 units wide, blocking all movement. The wall lasts for 5 seconds before it melts.'
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 51.376,
			'ad_lvl': 3.2,
			'apen': 0,
			'apen%': 0,
			'arm_base': 21.22,
			'arm_lvl': 4,
			'as_base': 0.625,
			'as_lvl': 1.68,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.00833333283662796,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 5.5,
			'hp5_lvl': 0.55,
			'hp_base': 480,
			'hp_lvl': 82,
			'ls': 0,
			'mp5_base': 8,
			'mp5_lvl': 0.8,
			'mp_base': 495,
			'mp_lvl': 25,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 325,
			'ms_base': 325,
			'pathing_radius': 35,
			'range': 600,
			'selection_radius': 140,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.15,
			'urf_dmg_taken': 0.9
		},
		'style': 100,
		'title': 'the Cryophoenix',
		'toughness': 1,
		'utility': 2
	},
	{
		'adaptivetype': 'magic',
		'apiname': 'annie',
		'attack': 2,
		'be': 450,
		'changes': 'V10.15',
		'control': 3,
		'damage': 3,
		'date': '2009-02-21',
		'ddragon_apiname': 'Annie',
		'defense': 3,
		'difficulty': 1,
		'fullname': 'Annie Hastur',
		'herotype': 'Mage',
		'id': 1,
		'img': 'assets/images/champions/Annie/Annie.png',
		'index': 6,
		'magic': 10,
		'mobility': 1,
		'name': 'Annie',
		'patch': 'Alpha Week 2',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 260,
		'skill_e':
		{
			'1': 'Molten Shield',
			'img': 'assets/images/champions/Annie/Molten Shield.png',
			'tooltip': 'Annie grants herself ?% damage reduction for ? seconds and ? Movement Speed that decays over ? seconds.<br><br>While the shield is active, enemies who basic attack it take ? (+0.2) magic damage.'
		},
		'skill_i':
		{
			'1': 'Pyromania',
			'img': 'assets/images/champions/Annie/Pyromania.png',
			'tooltip': "After casting 4 spells, Annie's next offensive spell will stun the target."
		},
		'skill_q':
		{
			'1': 'Disintegrate',
			'img': 'assets/images/champions/Annie/Disintegrate.png',
			'tooltip': 'Deals ? (+0.8) magic damage. Mana cost and half the cooldown are refunded if Disintegrate kills the target.'
		},
		'skill_r':
		{
			'1': 'Summon Tibbers',
			'2': 'Command Tibbers',
			'img': 'assets/images/champions/Annie/Summon Tibbers.png',
			'tooltip': 'Summons Tibbers, dealing ? magic damage to enemies in the target area. For the next ? seconds, Tibbers burns nearby enemies for ? magic damage per second and attacks for ? magic damage. Annie can control Tibbers by reactivating this ability.<br><br>When Annie dies, Tibbers Enrages, gaining 275% Attack Speed and 100% Movement Speed, decaying over 3 seconds.'
		},
		'skill_w':
		{
			'1': 'Incinerate',
			'img': 'assets/images/champions/Annie/Incinerate.png',
			'tooltip': 'Casts a cone of fire dealing ? (+0.85) magic damage to all enemies in the area.'
		},
		'stats':
		{
			'acquisition_radius': 625,
			'ad_base': 50.41,
			'ad_lvl': 2.625,
			'apen': 0,
			'apen%': 0,
			'arm_base': 19.22,
			'arm_lvl': 4,
			'as_base': 0.579,
			'as_lvl': 1.36,
			'as_ratio': 0.578999996185302,
			'attack_delay_offset': -0.10420524328947,
			'critdmg': 0,
			'gameplay_radius': 55,
			'heal_shield': 0,
			'hp5_base': 5.5,
			'hp5_lvl': 0.55,
			'hp_base': 524,
			'hp_lvl': 88,
			'ls': 0,
			'mp5_base': 8,
			'mp5_lvl': 0.8,
			'mp_base': 418,
			'mp_lvl': 25,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 335,
			'ms_base': 335,
			'pathing_radius': 30,
			'range': 625,
			'selection_radius': 100,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 0.95
		},
		'style': 100,
		'title': 'the Dark Child',
		'toughness': 1,
		'utility': 2
	},
	{
		'adaptivetype': 'physical',
		'apiname': 'aphelios',
		'attack': 6,
		'be': 6300,
		'changes': 'V10.15',
		'control': 2,
		'damage': 3,
		'date': '2019-12-11',
		'ddragon_apiname': 'Aphelios',
		'defense': 2,
		'difficulty': 3,
		'herotype': 'Marksman',
		'id': 523,
		'img': 'assets/images/champions/Aphelios/Aphelios.png',
		'index': 7,
		'magic': 1,
		'mobility': 1,
		'name': 'Aphelios',
		'patch': 'V9.24',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 975,
		'skill_e':
		{
			'1': 'Weapon Queue System',
			'img': 'assets/images/champions/Aphelios/Weapon Queue System.png',
			'tooltip': ''
		},
		'skill_i':
		{
			'1': 'The Hitman and the Seer',
			'2': 'Calibrum',
			'3': 'Severum',
			'4': 'Gravitum',
			'5': 'Infernum',
			'6': 'Crescendum',
			'img': 'assets/images/champions/Aphelios/The Hitman and the Seer.png',
			'tooltip': "Aphelios wields 5 Lunari Weapons made by his sister Alune. He has access to two at a time: one main-hand and one off-hand. Each weapon has a unique Basic Attack and Activated Ability. Attacks and abilities consume a weapon's ammo. When out of ammo, Aphelios discards the weapon and Alune summons the next of the 5. "
		},
		'skill_q':
		{
			'1': 'Weapons of the Faithful',
			'2': 'Moonshot',
			'3': 'Onslaught',
			'4': 'Binding Eclipse',
			'5': 'Duskwave',
			'6': 'Sentry',
			'img': 'assets/images/champions/Aphelios/Weapons of the Faithful.png',
			'tooltip': ''
		},
		'skill_r':
		{
			'1': 'Moonlight Vigil',
			'img': 'assets/images/champions/Aphelios/Moonlight Vigil.png',
			'tooltip': 'Fire a concentrated blast of moonlight that explodes when it hits an enemy champion to deal ? physical damage in the area.<br><br>Then, Aphelios attacks all champions hit with his main-hand weapon. (Applies on-hits. Critical strikes deal ? damage.). ?'
		},
		'skill_w':
		{
			'1': 'Phase',
			'img': 'assets/images/champions/Aphelios/Phase.png',
			'tooltip': 'Swap main-hand and off-hand weapons, equipping Gravitum.'
		},
		'stats':
		{
			'ad_base': 57,
			'ad_lvl': 2,
			'apen': 0,
			'apen%': 0,
			'arm_base': 28,
			'arm_lvl': 3,
			'as_base': 0.64,
			'as_lvl': 2.1,
			'as_ratio': 0.6399999856948853,
			'attack_cast_time': 0.23000000417232513,
			'attack_total_time': 1.5,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 3.25,
			'hp5_lvl': 0.55,
			'hp_base': 530,
			'hp_lvl': 88,
			'ls': 0,
			'mp5_base': 6.5,
			'mp5_lvl': 0.4,
			'mp_base': 348,
			'mp_lvl': 42,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 26,
			'mr_lvl': 0.5,
			'ms': 325,
			'ms_base': 325,
			'ofa_dmg_dealt': 1.05,
			'pathing_radius': 35,
			'range': 550,
			'selection_radius': 110,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_taken': 0.95
		},
		'style': 20,
		'title': 'the Weapon of the Faithful',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Support',
		'apiname': 'ashe',
		'attack': 7,
		'be': 450,
		'changes': 'V10.11',
		'control': 3,
		'damage': 2,
		'date': '2009-02-21',
		'ddragon_apiname': 'Ashe',
		'defense': 3,
		'difficulty': 1,
		'herotype': 'Marksman',
		'id': 22,
		'img': 'assets/images/champions/Ashe/Ashe.png',
		'index': 8,
		'magic': 2,
		'mobility': 1,
		'name': 'Ashe',
		'patch': 'Alpha Week 2',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 260,
		'skill_e':
		{
			'1': 'Hawkshot',
			'img': 'assets/images/champions/Ashe/Hawkshot.png',
			'tooltip': 'Reveals terrain as it flies toward target location anywhere on the map. Grants vision for 5 seconds. Ashe can store up to 2 charges of Hawkshot.<br><br>Hawkshot grants Ashe assists on enemy champions that it reveals - but only if they were otherwise unseen.'
		},
		'skill_i':
		{
			'1': 'Frost Shot',
			'2': 'Frost Shot 2',
			'img': 'assets/images/champions/Ashe/Frost Shot.png',
			'tooltip': "Ashe's attacks slow their target, causing her to deal increased damage to these targets.<br><br>Ashe's critical strikes deal no bonus damage but apply an empowered slow to the target."
		},
		'skill_q':
		{
			'1': "Ranger's Focus",
			'2': "Ranger's Focus 2",
			'img': "assets/images/champions/Ashe/Ranger's Focus.png",
			'tooltip': "Passive: Basic attacks grant Focus for 4 seconds, stacking up to 4 times. Stacks fall off one at a time, and at 4 stacks, Ranger's Focus can be cast, consuming all Focus.<br><br>Active: For 4 seconds, Ashe gains 20/25/30/35/40% Attack Speed, and her basic attacks fire a flurry of arrows dealing ? physical damage. During this time, she does not stack Focus. Ranger's Focus applies Frost Shot."
		},
		'skill_r':
		{
			'1': 'Enchanted Crystal Arrow',
			'img': 'assets/images/champions/Ashe/Enchanted Crystal Arrow.png',
			'tooltip': 'Launches a crystal arrow of ice that stuns the first enemy Champion hit, dealing ? magic damage. The farther the arrow flies, the longer the stun, up to ? seconds. Surrounding enemies take half damage.'
		},
		'skill_w':
		{
			'1': 'Volley',
			'img': 'assets/images/champions/Ashe/Volley.png',
			'tooltip': 'Fires arrows in a cone, each dealing ? physical damage. Enemies can block multiple arrows, but only take damage from the first.<br><br>Champion hits count as Critical Strikes for the purposes of Frost Shot.'
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 61,
			'ad_lvl': 2.96,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 0.95,
			'arm_base': 26,
			'arm_lvl': 3.4,
			'as_base': 0.658,
			'as_lvl': 3.33,
			'as_ratio': 0.657999992370605,
			'attack_delay_offset': -0.0807017534971237,
			'crit_base': 100,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 3.5,
			'hp5_lvl': 0.55,
			'hp_base': 570,
			'hp_lvl': 87,
			'ls': 0,
			'missile_speed': 2500,
			'mp5_base': 6.972,
			'mp5_lvl': 0.4,
			'mp_base': 280,
			'mp_lvl': 32,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 325,
			'ms_base': 325,
			'nb_dmg_dealt': 0.97,
			'pathing_radius': 35,
			'range': 600,
			'selection_radius': 120,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.1,
			'urf_dmg_taken': 0.95
		},
		'style': 20,
		'title': 'the Frost Archer',
		'toughness': 1,
		'utility': 2
	},
	{
		'adaptivetype': 'magic',
		'apiname': 'aurelionsol',
		'attack': 2,
		'be': 6300,
		'changes': 'V10.15',
		'control': 2,
		'damage': 3,
		'date': '2016-03-24',
		'ddragon_apiname': 'AurelionSol',
		'defense': 3,
		'difficulty': 3,
		'herotype': 'Mage',
		'id': 136,
		'img': 'assets/images/champions/Aurelion Sol/Aurelion Sol.png',
		'index': 9,
		'magic': 8,
		'mobility': 2,
		'name': 'Aurelion Sol',
		'patch': 'V6.6',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 975,
		'skill_e':
		{
			'1': 'Comet of Legend',
			'2': 'Comet of Legend 2',
			'img': 'assets/images/champions/Aurelion Sol/Comet of Legend.png',
			'tooltip': 'Fly for 5500/6000/6500/7000/7500 units in the chosen direction. Only castable outside of combat. Aurelion Sol can see and be seen over walls while flying.<br><br>Taking champion or turret damage will force a landing.<br>'
		},
		'skill_i':
		{
			'1': 'Center of the Universe',
			'img': 'assets/images/champions/Aurelion Sol/Center of the Universe.png',
			'tooltip': 'Stars orbit Aurelion Sol, dealing magic damage when they hit an enemy.'
		},
		'skill_q':
		{
			'1': 'Starsurge',
			'2': 'Starsurge 2',
			'img': 'assets/images/champions/Aurelion Sol/Starsurge.png',
			'tooltip': 'First Press: Aurelion Sol creates a new stellar core, which grows over time and grants him 20% Movement Speed.<br><br>The core will detonate when it reaches his Outer Limit, applying 70/110/150/190/230 (+0.65) magic damage and stunning enemies for ? to 2.2/2.4/2.6/2.8/3 second(s) based on size.<br><br>Second Press: Detonate the core early.<br>'
		},
		'skill_r':
		{
			'1': 'Voice of Light',
			'img': 'assets/images/champions/Aurelion Sol/Voice of Light.png',
			'tooltip': "Breathes out a blast of pure starfire, dealing 150/250/350 (+0.7) magic damage and slowing by 40/50/60% for 2 seconds. <br><br>The blast will also knock nearby enemies back to Aurelion Sol's Outer Limit.<br>"
		},
		'skill_w':
		{
			'1': 'Celestial Expansion',
			'2': 'Celestial Expansion 2',
			'img': 'assets/images/champions/Aurelion Sol/Celestial Expansion.png',
			'tooltip': "Passive: Increases Star base damage by ?.<br><br>Active: Aurelion Sol's Stars expand their orbit to his Outer Limit, rotating more quickly and dealing ?% damage for a total of ? (+?) magic damage. Upon reactivation or after 3 seconds, the Stars retract and Aurelion Sol gains 40% Movement Speed, decaying over 1.5 seconds.<br>"
		},
		'stats':
		{
			'acquisition_radius': 400,
			'ad_base': 57,
			'ad_lvl': 3.2,
			'apen': 0,
			'apen%': 0,
			'arm_base': 19,
			'arm_lvl': 3.6,
			'as_base': 0.625,
			'as_lvl': 1.36,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.100000001490116,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 7,
			'hp5_lvl': 0.6,
			'hp_base': 575,
			'hp_lvl': 92,
			'ls': 0,
			'mp5_base': 6,
			'mp5_lvl': 0.8,
			'mp_base': 350,
			'mp_lvl': 50,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 325,
			'ms_base': 325,
			'pathing_radius': 35,
			'range': 550,
			'selection_radius': 165,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 100,
		'title': 'The Star Forger',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Marksman',
		'apiname': 'azir',
		'attack': 6,
		'be': 6300,
		'changes': 'V10.9',
		'control': 2,
		'damage': 3,
		'date': '2014-09-16',
		'ddragon_apiname': 'Azir',
		'defense': 3,
		'difficulty': 2,
		'fullname': 'Omah Azir',
		'herotype': 'Mage',
		'id': 268,
		'img': 'assets/images/champions/Azir/Azir.png',
		'index': 10,
		'magic': 8,
		'mobility': 2,
		'name': 'Azir',
		'patch': 'V4.16',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 975,
		'skill_e':
		{
			'1': 'Shifting Sands',
			'img': 'assets/images/champions/Azir/Shifting Sands.png',
			'tooltip': 'Azir shields himself for 1.5 seconds, blocking up to 80/120/160/200/240 (+0.7) damage and dashes to one of his Sand Soldiers, damaging enemies hit for 60/90/120/150/180 (+0.4) magic damage.<br><br>If Azir hits an enemy champion, he halts his dash and instantly prepares a new Sand Soldier.'
		},
		'skill_i':
		{
			'1': "Shurima's Legacy",
			'img': "assets/images/champions/Azir/Shurima's Legacy.png",
			'tooltip': 'Azir can summon the Disc of the Sun from the ruins of allied or enemy turrets.'
		},
		'skill_q':
		{
			'1': 'Conquering Sands',
			'img': 'assets/images/champions/Azir/Conquering Sands.png',
			'tooltip': 'Azir sends all Sand Soldiers towards a location. Sand Soldiers deal 70/90/110/130/150 (+0.3) magic damage to enemies they pass through and apply a 25% slow for 1 second.<br><br>Enemies hit by multiple Sand Soldiers will not take additional damage.'
		},
		'skill_r':
		{
			'1': "Emperor's Divide",
			'img': "assets/images/champions/Azir/Emperor's Divide.png",
			'tooltip': "Azir summons a wall of armored soldiers that charge forward, knocking back enemies and dealing 175/325/475 (+0.6) magic damage. The soldiers then remain as a wall for 5 seconds.<br><br>Azir and his allies can pass freely through Emperor's Divide.<br><br>Emperor's Divide does not interact with Azir's basic attacks or spells."
		},
		'skill_w':
		{
			'1': 'Arise!',
			'img': 'assets/images/champions/Azir/Arise!.png',
			'tooltip': "Passive: Azir gains 20/30/40/50/60% attack speed. When Azir has 3 or more Sand Soldiers, he gains 20/30/40/50/60% additional attack speed for 5 seconds.<br><br>Active: Azir summons a Sand Soldier for 10 seconds. When Azir attacks an enemy in a soldier's range, the soldier attacks in his stead, stabbing the target for ? (+0.6) magic damage. Other enemies caught in the soldier's attack take ?% of the stab's damage.<br><br>Azir stores up to ? Sand Soldiers and prepares a new one every ? seconds.<br><br>Sand Soldiers that strike the same targets deal 25% damage after the first.<br>Sand Soldiers can attack targets outside of Azir's basic attack range.<br>Sand Soldiers expire twice as fast when near an enemy turret."
		},
		'stats':
		{
			'acquisition_radius': 700,
			'ad_base': 52,
			'ad_lvl': 2.8,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 1.1,
			'arm_base': 19.04,
			'arm_lvl': 3,
			'as_base': 0.625,
			'as_lvl': 3,
			'as_ratio': 0.625,
			'attack_cast_time': 0.25,
			'attack_delay_offset': -0.150000005960464,
			'attack_total_time': 1.60000002384185,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 7,
			'hp5_lvl': 0.75,
			'hp_base': 552,
			'hp_lvl': 92,
			'ls': 0,
			'missile_speed': 0,
			'mp5_base': 8,
			'mp5_lvl': 0.8,
			'mp_base': 480,
			'mp_lvl': 21,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 335,
			'ms_base': 335,
			'ofa_dmg_dealt': 1.05,
			'ofa_dmg_taken': 0.97,
			'pathing_radius': 35,
			'range': 525,
			'selection_radius': 88.8889007568359,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 45,
		'title': 'the Emperor of the Sands',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Mage',
		'apiname': 'bard',
		'attack': 4,
		'be': 6300,
		'changes': 'V10.12',
		'control': 3,
		'damage': 1,
		'date': '2015-03-12',
		'ddragon_apiname': 'Bard',
		'defense': 4,
		'difficulty': 3,
		'fullname': 'Bard',
		'herotype': 'Support',
		'id': 432,
		'img': 'assets/images/champions/Bard/Bard.png',
		'index': 11,
		'magic': 5,
		'mobility': 2,
		'name': 'Bard',
		'patch': 'V5.5',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 975,
		'skill_e':
		{
			'1': 'Magical Journey',
			'img': 'assets/images/champions/Bard/Magical Journey.png',
			'tooltip': 'Bard opens a one-way corridor through nearby terrain. Both allies and enemies can use the corridor by right-clicking on any part of it while near its entrance, with allies travelling 33% faster than enemies.<br><br>The corridor disappears after 10 seconds.<br>'
		},
		'skill_i':
		{
			'1': "Traveler's Call",
			'2': "Traveler's Call 2",
			'img': "assets/images/champions/Bard/Traveler's Call.png",
			'tooltip': 'Meeps: Bard attracts lesser spirits that assist with his basic attacks to deal extra magic damage. When Bard has collected enough  Chimes, his meeps will also deal damage in an area and slow enemies hit.<br><br>Chimes: Ancient chimes randomly appear for Bard to collect. These grant experience, maximum mana, and out-of-combat movement speed stacks.<br>'
		},
		'skill_q':
		{
			'1': 'Cosmic Binding',
			'img': 'assets/images/champions/Bard/Cosmic Binding.png',
			'tooltip': 'Bard fires an energy bolt, dealing 80/125/170/215/260 (+0.65) magic damage to one or two enemies. The first target hit will be slowed by 60% for 1/1.2/1.4/1.6/1.8 second(s).<br><br>If the bolt hits another enemy or a wall, any enemies hit are stunned for 1/1.2/1.4/1.6/1.8 second(s).<br>'
		},
		'skill_r':
		{
			'1': 'Tempered Fate',
			'img': 'assets/images/champions/Bard/Tempered Fate.png',
			'tooltip': 'Bard sends magical energy arcing to a target location. On impact, all champions, minions, monsters, and turrets in the target area are put in stasis, becoming invincible, untargetable, and unable to act for ? seconds.<br><br>Epic monsters are also put into stasis, despite normally being immune to disables.'
		},
		'skill_w':
		{
			'1': "Caretaker's Shrine",
			'img': "assets/images/champions/Bard/Caretaker's Shrine.png",
			'tooltip': "Bard raises a health shrine that immediately offers 30/60/90/120/150 (+0.3) health, but restores up to 55/95/135/175/215 (+0.6) health as it gathers power for 10 seconds. The shrine's effect also grants 30% decaying movement speed for 1.5 seconds. <br><br>Bard can have up to 3 shrines active at once, which remain until visited by an ally champion or crushed by an enemy champion.<br><br>Active Shrines: ? / ?<br>"
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 52,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 1.15,
			'aram_dmg_taken': 0.85,
			'arm_base': 34,
			'arm_lvl': 4,
			'as_base': 0.625,
			'as_lvl': 2,
			'as_ratio': 0.625,
			'attack_cast_time': 0.300000011920928,
			'attack_delay_offset': -0.100000001490116,
			'attack_total_time': 1.60000002384185,
			'critdmg': 0,
			'gameplay_radius': 80,
			'heal_shield': 0,
			'hp5_base': 5.5,
			'hp5_lvl': 0.55,
			'hp_base': 575,
			'hp_lvl': 89,
			'ls': 0,
			'mp5_base': 6,
			'mp5_lvl': 0.45,
			'mp_base': 350,
			'mp_lvl': 50,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 330,
			'ms_base': 330,
			'ofa_dmg_dealt': 1.1,
			'ofa_dmg_taken': 0.9,
			'pathing_radius': 35,
			'range': 500,
			'selection_radius': 88.8889007568359,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.2,
			'urf_dmg_taken': 0.9
		},
		'style': 65,
		'title': 'the Wandering Caretaker',
		'toughness': 1,
		'utility': 3
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Fighter',
		'apiname': 'blitzcrank',
		'attack': 4,
		'be': 3150,
		'changes': 'V10.6',
		'control': 3,
		'damage': 1,
		'date': '2009-09-02',
		'ddragon_apiname': 'Blitzcrank',
		'defense': 8,
		'difficulty': 1,
		'herotype': 'Tank',
		'id': 53,
		'img': 'assets/images/champions/Blitzcrank/Blitzcrank.png',
		'index': 12,
		'magic': 5,
		'mobility': 1,
		'name': 'Blitzcrank',
		'patch': 'V0.9.22.16',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 790,
		'skill_e':
		{
			'1': 'Power Fist',
			'img': 'assets/images/champions/Blitzcrank/Power Fist.png',
			'tooltip': 'Blitzcrank charges up his fist to make his next attack deal double his total attack damage as physical damage and pop his target up in the air.'
		},
		'skill_i':
		{
			'1': 'Mana Barrier',
			'img': 'assets/images/champions/Blitzcrank/Mana Barrier.png',
			'tooltip': 'Blitzcrank gains a shield based on his mana when dropping to low health.'
		},
		'skill_q':
		{
			'1': 'Rocket Grab',
			'img': 'assets/images/champions/Blitzcrank/Rocket Grab.png',
			'tooltip': 'Blitzcrank fires his right hand. If it encounters an enemy unit it will stun them and deal ? magic damage while he pulls them to himself.'
		},
		'skill_r':
		{
			'1': 'Static Field',
			'img': 'assets/images/champions/Blitzcrank/Static Field.png',
			'tooltip': "Passive: While this spell is available, lightning charges Blitzcrank's fists, marking enemies. After 1 second, they are shocked for ? magic damage. This stacks up to ? times.<br><br>Active: Destroys damage shields on nearby enemies, deals ? magic damage, and silences for 0.75 seconds."
		},
		'skill_w':
		{
			'1': 'Overdrive',
			'img': 'assets/images/champions/Blitzcrank/Overdrive.png',
			'tooltip': "Blitzcrank supercharges himself, gaining ?% Movement Speed and 30/38/46/54/62% Attack Speed for 5 seconds. The Movement Speed bonus decays over the duration.<br><br>When Overdrive ends, Blitzcrank's Movement Speed is slowed by 30% for 1.5 seconds."
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 61.54,
			'ad_lvl': 3.5,
			'apen': 0,
			'apen%': 0,
			'arm_base': 37,
			'arm_lvl': 3.5,
			'as_base': 0.625,
			'as_lvl': 1.13,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.0299999993294477,
			'critdmg': 0,
			'gameplay_radius': 80,
			'heal_shield': 0,
			'hp5_base': 8.5,
			'hp5_lvl': 0.75,
			'hp_base': 582.6,
			'hp_lvl': 95,
			'ls': 0,
			'mp5_base': 8.5,
			'mp5_lvl': 0.8,
			'mp_base': 267.2,
			'mp_lvl': 40,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 325,
			'ms_base': 325,
			'ofa_dmg_dealt': 1.03,
			'pathing_radius': 50,
			'range': 125,
			'selection_radius': 165,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 90,
		'title': 'the Great Steam Golem',
		'toughness': 2,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'apiname': 'brand',
		'attack': 2,
		'be': 4800,
		'changes': 'V10.12',
		'control': 2,
		'damage': 3,
		'date': '2011-04-12',
		'ddragon_apiname': 'Brand',
		'defense': 2,
		'difficulty': 2,
		'fullname': 'Kegan Rodhe',
		'herotype': 'Mage',
		'id': 63,
		'img': 'assets/images/champions/Brand/Brand.png',
		'index': 13,
		'magic': 9,
		'mobility': 1,
		'name': 'Brand',
		'patch': 'V1.0.0.115',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Conflagration',
			'img': 'assets/images/champions/Brand/Conflagration.png',
			'tooltip': 'Brand conjures a powerful blast at his target, dealing 70/95/120/145/170 (+0.45) magic damage.<br><br>Blaze: If the target is ablaze, Conflagration spreads to nearby enemies. '
		},
		'skill_i':
		{
			'1': 'Blaze',
			'img': 'assets/images/champions/Brand/Blaze.png',
			'tooltip': "Brand's spells light his targets ablaze, dealing damage over 4 seconds, stacking up to 3 times. If Brand kills an enemy while it is ablaze he regains mana. When Blaze reaches max stacks on a Champion or large monster, it becomes unstable. It detonates in 2 seconds, applying spell effects and dealing massive damage in an area around the victim."
		},
		'skill_q':
		{
			'1': 'Sear',
			'img': 'assets/images/champions/Brand/Sear.png',
			'tooltip': 'Brand launches a ball of fire forward that deals 80/110/140/170/200 (+0.55) magic damage.<br><br>Blaze: If the target is ablaze, Sear will stun the target for 1.5 seconds.'
		},
		'skill_r':
		{
			'1': 'Pyroclasm',
			'img': 'assets/images/champions/Brand/Pyroclasm.png',
			'tooltip': 'Brand unleashes a devastating torrent of fire, dealing ? magic damage each time it bounces up to 5 bounces. Bounces prioritize stacking Blaze to max on Champions.<br><br>Blaze: If the target is ablaze, Pyroclasm will briefly slow the target by ?%.'
		},
		'skill_w':
		{
			'1': 'Pillar of Flame',
			'img': 'assets/images/champions/Brand/Pillar of Flame.png',
			'tooltip': 'After a short delay, Brand creates a Pillar of Flame at a location, dealing 75/120/165/210/255 (+0.6) magic damage to enemies.<br><br>Blaze: Units that are ablaze take an additional 25% damage from Pillar of Flame.'
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 57.04,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 0.95,
			'arm_base': 21.88,
			'arm_lvl': 3.5,
			'as_base': 0.625,
			'as_lvl': 1.36,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.112499997019767,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 5.5,
			'hp5_lvl': 0.55,
			'hp_base': 519.68,
			'hp_lvl': 88,
			'ls': 0,
			'mp5_base': 10.665,
			'mp5_lvl': 0.6,
			'mp_base': 469,
			'mp_lvl': 21,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 340,
			'ms_base': 340,
			'nb_dmg_dealt': 0.95,
			'nb_dmg_taken': 1.05,
			'pathing_radius': 35,
			'range': 550,
			'selection_radius': 88.8889007568359,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 100,
		'title': 'the Burning Vengeance',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Tank',
		'apiname': 'braum',
		'attack': 3,
		'be': 6300,
		'changes': 'V10.13',
		'control': 3,
		'damage': 1,
		'date': '2014-05-12',
		'ddragon_apiname': 'Braum',
		'defense': 9,
		'difficulty': 2,
		'herotype': 'Support',
		'id': 201,
		'img': 'assets/images/champions/Braum/Braum.png',
		'index': 14,
		'magic': 4,
		'mobility': 1,
		'name': 'Braum',
		'patch': 'V4.7',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 975,
		'skill_e':
		{
			'1': 'Unbreakable',
			'img': 'assets/images/champions/Braum/Unbreakable.png',
			'tooltip': 'Braum reduces incoming damage and blocks for allies behind him.<br>Braum raises his shield in a direction for 3/3.25/3.5/3.75/4 seconds negating the damage of the next attack from that direction. Subsequent attacks deal 30/32.5/35/37.5/40% reduced damage.<br><br>Braum intercepts projectiles, causing them to hit him and be destroyed.<br><br>Braum gains 10% Movement Speed for the duration.'
		},
		'skill_i':
		{
			'1': 'Concussive Blows',
			'img': 'assets/images/champions/Braum/Concussive Blows.png',
			'tooltip': "Braum's basic attacks apply Concussive Blows. Once the first stack is applied, ally basic attacks also stack Concussive Blows. <br><br>Upon reaching 4 stacks, the target is stunned and takes magic damage. For the next few seconds they cannot receive new stacks, but take bonus magic damage from Braum's attacks."
		},
		'skill_q':
		{
			'1': "Winter's Bite",
			'img': "assets/images/champions/Braum/Winter's Bite.png",
			'tooltip': "Braum propels freezing ice from his shield dealing 60/110/160/210/260 (+?) [2.5% of Braum's Max Health] magic damage to the first enemy hit and slowing them by 70%, decaying over the next 2 seconds.<br><br>Applies a stack of Concussive Blows. "
		},
		'skill_r':
		{
			'1': 'Glacial Fissure',
			'img': 'assets/images/champions/Braum/Glacial Fissure.png',
			'tooltip': 'Braum slams the ground, knocking up enemies nearby and in a line in front of him. A fissure is left along the line for ? seconds, slowing enemies above it by ?%.<br><br>Enemies hit take ? magic damage. The first target is knocked up for between ? and ? seconds, depending on distance from Braum. All others hit are knocked up for ? seconds.'
		},
		'skill_w':
		{
			'1': 'Stand Behind Me',
			'img': 'assets/images/champions/Braum/Stand Behind Me.png',
			'tooltip': 'Braum leaps to target allied champion or minion.<br><br>On arrival, Braum grants the target ? Armor and ? Magic Resist for 3 seconds. Braum grants himself ? Armor and  ? Magic Resist for the same duration.'
		},
		'stats':
		{
			'acquisition_radius': 800,
			'ad_base': 55.376,
			'ad_lvl': 3.2,
			'apen': 0,
			'apen%': 0,
			'arm_base': 47,
			'arm_lvl': 4,
			'as_base': 0.644,
			'as_lvl': 3.5,
			'as_ratio': 0.643999993801116,
			'attack_delay_offset': -0.0700000002980232,
			'critdmg': 0,
			'gameplay_radius': 80,
			'heal_shield': 0,
			'hp5_base': 8.5,
			'hp5_lvl': 1,
			'hp_base': 540,
			'hp_lvl': 98,
			'ls': 0,
			'mp5_base': 6,
			'mp5_lvl': 0.8,
			'mp_base': 310.6,
			'mp_lvl': 45,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 335,
			'ms_base': 335,
			'ofa_dmg_taken': 0.95,
			'pathing_radius': 50,
			'range': 125,
			'selection_radius': 100,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.1,
			'urf_dmg_taken': 0.75
		},
		'style': 90,
		'title': 'the Heart of the Freljord',
		'toughness': 2,
		'utility': 2
	},
	{
		'adaptivetype': 'physical',
		'apiname': 'caitlyn',
		'attack': 8,
		'be': 4800,
		'changes': 'V10.15',
		'control': 2,
		'damage': 3,
		'date': '2011-01-04',
		'ddragon_apiname': 'Caitlyn',
		'defense': 2,
		'difficulty': 1,
		'herotype': 'Marksman',
		'id': 51,
		'img': 'assets/images/champions/Caitlyn/Caitlyn.png',
		'index': 15,
		'magic': 2,
		'mobility': 2,
		'name': 'Caitlyn',
		'patch': 'V1.0.0.108',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': '90 Caliber Net',
			'img': 'assets/images/champions/Caitlyn/90 Caliber Net.png',
			'tooltip': 'Fires a net, knocking Caitlyn backwards. The net deals 70/110/150/190/230 (+0.8) magic damage and slows the first enemy hit by 50% for 1 second.'
		},
		'skill_i':
		{
			'1': 'Headshot',
			'img': 'assets/images/champions/Caitlyn/Headshot.png',
			'tooltip': "Every few basic attacks, or against a target she has trapped or netted, Caitlyn will fire a headshot dealing bonus damage that scales with her critical strike chance. On trapped or netted targets, Caitlyn's Headshot attack range is doubled."
		},
		'skill_q':
		{
			'1': 'Piltover Peacemaker',
			'img': 'assets/images/champions/Caitlyn/Piltover Peacemaker.png',
			'tooltip': 'Revs the rifle for 1 second to fire a narrow piercing shot dealing 50/90/130/170/210 (+?) physical damage. After hitting any target, it opens into a wider shot that deals 40% less damage. <br><br>Always deals full damage to trap revealed targets.'
		},
		'skill_r':
		{
			'1': 'Ace in the Hole',
			'img': 'assets/images/champions/Caitlyn/Ace in the Hole.png',
			'tooltip': 'Takes a second to line up the perfect shot on an enemy Champion at up to ? range. The shot deals ? physical damage, but other enemy Champions can intercept it.<br><br>Grants True Sight of the target during the channel.'
		},
		'skill_w':
		{
			'1': 'Yordle Snap Trap',
			'img': 'assets/images/champions/Caitlyn/Yordle Snap Trap.png',
			'tooltip': 'Sets traps that an enemy Champion can spring, immobilizing them for 1.5 seconds and granting True Sight for a short duration.<br><br>Traps last for 30/35/40/45/50 seconds. 3/3/4/4/5 traps may be active at once.<br><br>Trapped enemies take an additional 60/105/150/195/240 (+?) increased damage from Headshot.'
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 64,
			'ad_lvl': 2.88,
			'apen': 0,
			'apen%': 0,
			'arm_base': 28,
			'arm_lvl': 3.5,
			'as_base': 0.681,
			'as_lvl': 4,
			'as_ratio': 0.568000018596649,
			'attack_delay_offset': -0.122916668653488,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 3.5,
			'hp5_lvl': 0.55,
			'hp_base': 510,
			'hp_lvl': 93,
			'ls': 0,
			'mp5_base': 7.4,
			'mp5_lvl': 0.55,
			'mp_base': 313.7,
			'mp_lvl': 35,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 330,
			'ms_base': 330,
			'pathing_radius': 35,
			'range': 650,
			'selection_radius': 120,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.05,
			'urf_dmg_taken': 0.95
		},
		'style': 10,
		'title': 'the Sheriff of Piltover',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Tank',
		'apiname': 'camille',
		'attack': 8,
		'be': 6300,
		'changes': 'V10.8',
		'control': 2,
		'damage': 3,
		'date': '2016-12-07',
		'ddragon_apiname': 'Camille',
		'defense': 6,
		'difficulty': 3,
		'fullname': 'Camille Ferros',
		'herotype': 'Fighter',
		'id': 164,
		'img': 'assets/images/champions/Camille/Camille.png',
		'index': 16,
		'magic': 3,
		'mobility': 3,
		'name': 'Camille',
		'patch': 'V6.24',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 975,
		'skill_e':
		{
			'1': 'Hookshot',
			'2': 'Wall Dive',
			'img': 'assets/images/champions/Camille/Hookshot.png',
			'tooltip': 'First Cast: Fire a hookshot that attaches to terrain, pulling Camille to it and allowing Hookshot to be recast for 1 second.<br><br>Second Cast: Camille leaps from the wall, colliding with the first enemy champion hit. Upon landing, she deals ? physical damage to enemies and stuns nearby enemy champions for ? seconds. Dashes towards enemy champions travel twice as far and grant ?% attack speed for ? seconds on impact.'
		},
		'skill_i':
		{
			'1': 'Adaptive Defenses',
			'img': 'assets/images/champions/Camille/Adaptive Defenses.png',
			'tooltip': "Basic attacks on champions grant a shield equal to 20% of Camille's maximum health against their damage type (Physical or Magic) for a brief duration."
		},
		'skill_q':
		{
			'1': 'Precision Protocol',
			'2': 'Precision Protocol 2',
			'3': 'Precision Protocol 3',
			'img': 'assets/images/champions/Camille/Precision Protocol.png',
			'tooltip': "Camille's next basic attack deals ? bonus physical damage and increases her movement speed by ?% for ? second. This ability can be recast in the next ? seconds at no cost.<br><br>If the second Precision Protocol attack hits at least ? seconds after the first, the bonus damage is increased by ?% to ? and ? of the attack is converted into true damage.<br><br>Precision Protocol cannot critically strike."
		},
		'skill_r':
		{
			'1': 'The Hextech Ultimatum',
			'img': 'assets/images/champions/Camille/The Hextech Ultimatum.png',
			'tooltip': 'Camille briefly becomes untargetable and leaps onto an enemy champion, interrupting channels and locking them into an area they cannot escape by any means for ? seconds. Other nearby enemies are knocked away. Her basic attacks against the trapped enemy deal bonus magic damage equal to ? plus ?% of their current health.<br><br>The Hextech Ultimatum ends if Camille leaves the area.'
		},
		'skill_w':
		{
			'1': 'Tactical Sweep',
			'img': 'assets/images/champions/Camille/Tactical Sweep.png',
			'tooltip': 'Camille winds up and then slices in a direction, dealing ? physical damage to enemies hit.<br><br>Enemies hit by the outer half are slowed by ?%, decaying over ? seconds. They take extra physical damage equal to ? of their maximum health, and Camille heals for ?% of the bonus damage dealt to champions.<br><br>Tactical Sweep does ?% less damage to non-epic monsters.'
		},
		'stats':
		{
			'acquisition_radius': 550,
			'ad_base': 68,
			'ad_lvl': 3.5,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 1.06,
			'aram_dmg_taken': 0.94,
			'arm_base': 35,
			'arm_lvl': 3.8,
			'as_base': 0.644,
			'as_lvl': 2.5,
			'as_ratio': 0.643999993801116,
			'attack_cast_time': 0.300000011920928,
			'attack_total_time': 1.55200004577636,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 8.5,
			'hp5_lvl': 0.8,
			'hp_base': 575.6,
			'hp_lvl': 85,
			'ls': 0,
			'mp5_base': 8.15,
			'mp5_lvl': 0.75,
			'mp_base': 338.8,
			'mp_lvl': 32,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 340,
			'ms_base': 340,
			'nb_dmg_taken': 0.95,
			'pathing_radius': 35,
			'range': 125,
			'selection_radius': 100,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_taken': 0.95
		},
		'style': 40,
		'title': 'the Steel Shadow',
		'toughness': 2,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'apiname': 'cassiopeia',
		'attack': 2,
		'be': 4800,
		'changes': 'V10.13',
		'control': 3,
		'damage': 3,
		'date': '2010-12-14',
		'ddragon_apiname': 'Cassiopeia',
		'defense': 3,
		'difficulty': 2,
		'fullname': 'Cassiopeia Du Couteau',
		'herotype': 'Mage',
		'id': 69,
		'img': 'assets/images/champions/Cassiopeia/Cassiopeia.png',
		'index': 17,
		'magic': 9,
		'mobility': 1,
		'name': 'Cassiopeia',
		'patch': 'v1.0.0.107',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Twin Fang',
			'img': 'assets/images/champions/Cassiopeia/Twin Fang.png',
			'tooltip': 'Deal 0.55 (+0.1) magic damage to a target. If the target is killed by Twin Fang, or is killed during its flight, Cassiopeia gains ? Mana.<br><br>If the victim is Poisoned when Twin Fang hits, it takes 10/30/50/70/90 (+0.6) additional magic damage and Cassiopeia heals for ? (?% of her Ability Power, with ?% effectiveness against minions and small monsters).'
		},
		'skill_i':
		{
			'1': 'Serpentine Grace',
			'img': 'assets/images/champions/Cassiopeia/Serpentine Grace.png',
			'tooltip': 'Cassiopeia gains Movement Speed per level, but she cannot purchase Boots items.'
		},
		'skill_q':
		{
			'1': 'Noxious Blast',
			'img': 'assets/images/champions/Cassiopeia/Noxious Blast.png',
			'tooltip': 'Blasts enemies in an area with Noxious Poison. If a champion is hit, Cassiopeia gains 30/35/40/45/50% Movement Speed decaying over 3 seconds.<br><br>Noxious Poison deals 75/110/145/180/215 (+0.9) magic damage over 3 seconds.'
		},
		'skill_r':
		{
			'1': 'Petrifying Gaze',
			'img': 'assets/images/champions/Cassiopeia/Petrifying Gaze.png',
			'tooltip': 'Cassiopeia deals ? magic damage to all enemies in front of her. Enemies facing her turn to stone and are stunned for ? seconds while enemies facing away are slowed by ?%.'
		},
		'skill_w':
		{
			'1': 'Miasma',
			'img': 'assets/images/champions/Cassiopeia/Miasma.png',
			'tooltip': 'Cassiopeia spews venom in an arc, leaving toxic clouds for 5 seconds.<br><br>Enemies in the clouds are continually afflicted with Debilitating Poison, inflicting a decaying 40/50/60/70/80% slow and grounding them, prohibiting the use of Movement abilities. They also take 20/25/30/35/40 (+0.15) magic damage per second.'
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 53,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'arm_base': 18,
			'arm_lvl': 3.5,
			'as_base': 0.647,
			'as_lvl': 1.5,
			'as_ratio': 0.647000014781951,
			'attack_delay_offset': -0.108000002801418,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 5.5,
			'hp5_lvl': 0.5,
			'hp_base': 560,
			'hp_lvl': 90,
			'ls': 0,
			'mp5_base': 8,
			'mp5_lvl': 0.8,
			'mp_base': 350,
			'mp_lvl': 40,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32,
			'mr_lvl': 0.5,
			'ms': 328,
			'ms_base': 328,
			'pathing_radius': 35,
			'range': 550,
			'selection_radius': 120,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 0.85,
			'urf_healing': 0.9
		},
		'style': 100,
		'title': "the Serpent's Embrace",
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Mage',
		'apiname': 'chogath',
		'attack': 3,
		'be': 1350,
		'changes': 'V10.14',
		'control': 2,
		'damage': 2,
		'date': '2009-06-26',
		'ddragon_apiname': 'Chogath',
		'defense': 7,
		'difficulty': 1,
		'herotype': 'Tank',
		'id': 31,
		'img': 'assets/images/champions/Chogath/Chogath.png',
		'index': 18,
		'magic': 7,
		'mobility': 1,
		'name': 'Chogath',
		'patch': 'June 26, 2009 Patch',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 585,
		'skill_e':
		{
			'1': 'Vorpal Spikes',
			'img': 'assets/images/champions/Chogath/Vorpal Spikes.png',
			'tooltip': "Cho'Gath's next 3 basic attacks launch spikes that deal 22/37/52/67/82 (+0.3) plus ?% of enemies' maximum Health as magic damage and slow by 30/35/40/45/50% for 1.5 seconds, decaying over the duration.<br><br>Spikes grow wider as Cho'Gath gains Feast stacks.<br>Spikes deal an additional 0.5% of enemies' maximum Health per Feast stack.<br>Percent Health damage against minions and monsters is capped at 60/80/100/120/140."
		},
		'skill_i':
		{
			'1': 'Carnivore',
			'img': 'assets/images/champions/Chogath/Carnivore.png',
			'tooltip': "Whenever Cho'Gath kills a unit, he recovers Health and Mana. The values restored increase with Cho'Gath's level."
		},
		'skill_q':
		{
			'1': 'Rupture',
			'img': 'assets/images/champions/Chogath/Rupture.png',
			'tooltip': 'Ruptures the ground at target location. Enemies caught in the rupture are launched into the air for 1 second, take 80/135/190/245/300 (+1) magic damage, and are slowed by 60% for 1.5 seconds.'
		},
		'skill_r':
		{
			'1': 'Feast',
			'img': 'assets/images/champions/Chogath/Feast.png',
			'tooltip': "Ravenously feed on an enemy, dealing ? true damage to champions or ? to minions and monsters. If the target is killed, Cho'Gath gains a stack of Feast, which causes him to grow in size and gain ? maximum health.<br><br>Only ? total stacks can be gained from minions and non-epic monsters. (Current: ?/?)"
		},
		'skill_w':
		{
			'1': 'Feral Scream',
			'img': 'assets/images/champions/Chogath/Feral Scream.png',
			'tooltip': 'Silences enemies in a cone for 1.6/1.7/1.8/1.9/2 seconds and deals 75/125/175/225/275 (+0.7) magic damage.'
		},
		'stats':
		{
			'acquisition_radius': 500,
			'ad_base': 69,
			'ad_lvl': 4.2,
			'apen': 0,
			'apen%': 0,
			'arm_base': 38,
			'arm_lvl': 3.5,
			'as_base': 0.625,
			'as_lvl': 1.44,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.0810000002384185,
			'critdmg': 0,
			'gameplay_radius': 80,
			'heal_shield': 0,
			'hp5_base': 9,
			'hp5_lvl': 0.85,
			'hp_base': 574.4,
			'hp_lvl': 80,
			'ls': 0,
			'mp5_base': 7.206,
			'mp5_lvl': 0.45,
			'mp_base': 272.2,
			'mp_lvl': 40,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 345,
			'ms_base': 345,
			'pathing_radius': 50,
			'range': 125,
			'selection_radius': 130,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_taken': 0.95
		},
		'style': 65,
		'title': 'the Terror of the Void',
		'toughness': 3,
		'utility': 1
	},
	{
		'adaptivetype': 'Mixed,Physical',
		'apiname': 'corki',
		'attack': 8,
		'be': 3150,
		'changes': 'V10.7',
		'control': 1,
		'damage': 3,
		'date': '2009-09-19',
		'ddragon_apiname': 'Corki',
		'defense': 3,
		'difficulty': 2,
		'herotype': 'Marksman',
		'id': 42,
		'img': 'assets/images/champions/Corki/Corki.png',
		'index': 19,
		'magic': 6,
		'mobility': 2,
		'name': 'Corki',
		'patch': 'V0.9.25.21',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 790,
		'skill_e':
		{
			'1': 'Gatling Gun',
			'img': 'assets/images/champions/Corki/Gatling Gun.png',
			'tooltip': "Corki's gatling gun fires continuously at targets in front of him for 4 seconds, dealing up to 120/170/220/270/320 (+1.6) damage and reducing up to 8/11/14/17/20 armor and magic resist.<br><br>Gatling Gun's damage is 50% physical, 50% magic.<br>Defense reductions last for 2 seconds after last being damaged by Gatling Gun."
		},
		'skill_i':
		{
			'1': 'Hextech Munitions',
			'2': 'The Package',
			'img': 'assets/images/champions/Corki/Hextech Munitions.png',
			'tooltip': "Corki's basic attack deals a percentage of their damage as magic instead of physical. Every once in a while, The Package arrives in Corki's base to be picked up, temporarily granting him out of combat Movement Speed and upgrading Valkyrie into Special Delivery."
		},
		'skill_q':
		{
			'1': 'Phosphorus Bomb',
			'img': 'assets/images/champions/Corki/Phosphorus Bomb.png',
			'tooltip': 'Corki lobs a bomb, dealing 75/120/165/210/255 (+0.5) (+0.5) magic damage to enemies in the target area. In addition, the blast reveals the area and champions hit by the blast for 6 seconds (does not reveal stealth).'
		},
		'skill_r':
		{
			'1': 'Missile Barrage',
			'2': 'Big One',
			'img': 'assets/images/champions/Corki/Missile Barrage.png',
			'tooltip': 'Active: Corki fires a missile that explodes at the first enemy it hits, dealing ? magic damage to all nearby enemies.<br><br>Corki can store up to 7 missiles, and every 3rd missile will be a Big One, dealing ?% damage (?).'
		},
		'skill_w':
		{
			'1': 'Valkyrie',
			'2': 'Special Delivery',
			'img': 'assets/images/champions/Corki/Valkyrie.png',
			'tooltip': 'Active: Corki flies a short distance, dealing ? magic damage per second to enemies in the fire left along his path.<br><br>Special Delivery: Corki flies a great distance, dropping bombs that leaves a burning trail for ? seconds. The trail slows enemies by ?% and burns them for ? magic damage per second.<br><br>Enemies hit directly are knocked aside, but are slowed and burned for at least ? seconds.'
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 55,
			'ad_lvl': 2.5,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_taken': 0.95,
			'arm_base': 28,
			'arm_lvl': 3.5,
			'as_base': 0.638,
			'as_lvl': 2.3,
			'as_ratio': 0.638000011444091,
			'attack_delay_offset': -0.200000002980232,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 5.5,
			'hp5_lvl': 0.55,
			'hp_base': 518,
			'hp_lvl': 87,
			'ls': 0,
			'mp5_base': 7.424,
			'mp5_lvl': 0.55,
			'mp_base': 350.16,
			'mp_lvl': 34,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 325,
			'ms_base': 325,
			'nb_dmg_taken': 0.95,
			'pathing_radius': 35,
			'range': 550,
			'selection_radius': 135,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_taken': 0.95
		},
		'style': 45,
		'title': 'the Daring Bombardier',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Tank',
		'apiname': 'darius',
		'attack': 9,
		'be': 4800,
		'changes': 'V10.6',
		'control': 2,
		'damage': 3,
		'date': '2012-05-23',
		'ddragon_apiname': 'Darius',
		'defense': 5,
		'difficulty': 2,
		'herotype': 'Fighter',
		'id': 122,
		'img': 'assets/images/champions/Darius/Darius.png',
		'index': 20,
		'magic': 1,
		'mobility': 1,
		'name': 'Darius',
		'patch': 'V1.0.0.140',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Apprehend',
			'img': 'assets/images/champions/Darius/Apprehend.png',
			'tooltip': 'Passive: Darius gains 15/20/25/30/35% Armor Penetration.<br><br>Active: Pulls in all enemies in front of Darius and slows them by 40% for 1 second(s).'
		},
		'skill_i':
		{
			'1': 'Hemorrhage',
			'img': 'assets/images/champions/Darius/Hemorrhage.png',
			'tooltip': "Darius's attacks and damaging abilities cause enemies to bleed for physical damage over 5 seconds, stacking up to 5 times."
		},
		'skill_q':
		{
			'1': 'Decimate',
			'img': 'assets/images/champions/Darius/Decimate.png',
			'tooltip': "After a short delay, Darius swings his axe around himself, striking enemies in its path. Enemies hit by the axe's blade take 50/80/110/140/170 (+1.05) physical damage. Enemies hit by the handle take 35% damage (does not apply Hemorrhage).<br><br>Darius heals for 15% of his missing Health per enemy champion and large monster hit by the blade (max: 45%)."
		},
		'skill_r':
		{
			'1': 'Noxian Guillotine',
			'img': 'assets/images/champions/Darius/Noxian Guillotine.png',
			'tooltip': 'Leaps to target enemy champion and strikes a lethal blow, dealing ? true damage. For each stack of Hemorrhage on the target, Noxian Guillotine deals an additional ?% damage.<br><br>Maximum Damage: 0.75<br><br>If Noxian Guillotine kills the target, it may be re-cast at no cost within ? seconds.<br><br>At rank 3, Noxian Guillotine unlocks - its cooldown resets entirely on kills and it no longer has a Mana cost.'
		},
		'skill_w':
		{
			'1': 'Crippling Strike',
			'img': 'assets/images/champions/Darius/Crippling Strike.png',
			'tooltip': "Darius's next basic attack deals ? physical damage and slows the target by 90% for 1 second(s).<br><br>Crippling Strike refunds its Mana cost and 50% of its cooldown if it kills the target."
		},
		'stats':
		{
			'acquisition_radius': 400,
			'ad_base': 64,
			'ad_lvl': 5,
			'apen': 0,
			'apen%': 0,
			'arm_base': 39,
			'arm_lvl': 4,
			'as_base': 0.625,
			'as_lvl': 1,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.100000001490116,
			'critdmg': 0,
			'gameplay_radius': 80,
			'heal_shield': 0,
			'hp5_base': 10,
			'hp5_lvl': 0.95,
			'hp_base': 582.24,
			'hp_lvl': 100,
			'ls': 0,
			'mp5_base': 6.6,
			'mp5_lvl': 0.35,
			'mp_base': 263,
			'mp_lvl': 37.5,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 340,
			'ms_base': 340,
			'nb_dmg_dealt': 0.95,
			'ofa_dmg_dealt': 0.95,
			'ofa_healing': 0.95,
			'pathing_radius': 25.7665996551513,
			'range': 175,
			'selection_radius': 125,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.1,
			'urf_dmg_taken': 0.9,
			'windup_modifier': 0.5
		},
		'style': 55,
		'title': 'the Hand of Noxus',
		'toughness': 2,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Mage',
		'apiname': 'diana',
		'attack': 7,
		'be': 4800,
		'changes': 'V10.14',
		'control': 2,
		'damage': 3,
		'date': '2012-08-07',
		'ddragon_apiname': 'Diana',
		'defense': 6,
		'difficulty': 1,
		'herotype': 'Fighter',
		'id': 131,
		'img': 'assets/images/champions/Diana/Diana.png',
		'index': 21,
		'magic': 8,
		'mobility': 2,
		'name': 'Diana',
		'patch': 'V1.0.0.144',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Lunar Rush',
			'img': 'assets/images/champions/Diana/Lunar Rush.png',
			'tooltip': 'Becomes the living embodiment of the vengeful moon, dashing to an enemy and dealing ? magic damage, resetting its cooldown if the enemy is affected by Moonlight.'
		},
		'skill_i':
		{
			'1': 'Moonsilver Blade',
			'img': 'assets/images/champions/Diana/Moonsilver Blade.png',
			'tooltip': 'Every third strike cleaves nearby enemies for an additional magic damage. After casting a spell, Diana gains attack speed for her next 3 attacks.'
		},
		'skill_q':
		{
			'1': 'Crescent Strike',
			'img': 'assets/images/champions/Diana/Crescent Strike.png',
			'tooltip': 'Unleashes a bolt of lunar energy in an arc dealing ? magic damage.<br><br>Afflicts enemies struck with Moonlight, revealing them if they are not stealthed for ? seconds.'
		},
		'skill_r':
		{
			'1': 'Moonfall',
			'img': 'assets/images/champions/Diana/Moonfall.png',
			'tooltip': 'Reveals and draws in all nearby enemies and slows them by ?% for ? seconds.<br><br>If Diana pulls in one or more enemy champions, the moonlight crashes down onto her after ? second, dealing ? magic damage in an area around her, increased by ? for each target beyond the first pulled.'
		},
		'skill_w':
		{
			'1': 'Pale Cascade',
			'img': 'assets/images/champions/Diana/Pale Cascade.png',
			'tooltip': 'Creates three orbiting spheres that explode on contact with enemies, each dealing ? magic damage (? Maximum Damage). Lasts ? seconds.<br><br>Grants a temporary shield that absorbs ? damage. If the third sphere detonates, the shield increases by ?.'
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 57,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'arm_base': 31,
			'arm_lvl': 3.6,
			'as_base': 0.625,
			'as_lvl': 2.25,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.0916666686534881,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 7.5,
			'hp5_lvl': 0.85,
			'hp_base': 570,
			'hp_lvl': 95,
			'ls': 0,
			'mp5_base': 8,
			'mp5_lvl': 0.8,
			'mp_base': 375,
			'mp_lvl': 25,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 345,
			'ms_base': 345,
			'pathing_radius': 35,
			'range': 150,
			'selection_radius': 75,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 0.95
		},
		'style': 65,
		'title': 'Scorn of the Moon',
		'toughness': 2,
		'utility': 1
	},
	{
		'adaptivetype': 'Mixed,Physical',
		'alttype': 'Tank',
		'apiname': 'drmundo',
		'attack': 5,
		'be': 450,
		'changes': 'V10.4',
		'control': 1,
		'damage': 2,
		'date': '2009-09-02',
		'ddragon_apiname': 'DrMundo',
		'defense': 7,
		'difficulty': 1,
		'fullname': "'Doctor' Mundo",
		'herotype': 'Fighter',
		'id': 36,
		'img': 'assets/images/champions/Dr. Mundo/Dr. Mundo.png',
		'index': 22,
		'magic': 6,
		'mobility': 1,
		'name': 'Dr. Mundo',
		'patch': 'V0.9.22.16',
		'rangetype': 'Melee',
		'resource': 'Health',
		'rp': 260,
		'skill_e':
		{
			'1': 'Masochism',
			'img': 'assets/images/champions/Dr. Mundo/Masochism.png',
			'tooltip': "Passive: When Dr. Mundo suffers magic damage or pays a health cost, his magic resist is increased by 3% for ? seconds, up to a maximum of 6/15/24/33/42%.<br><br>Active: Dr. Mundo's next basic attack will headbutt the enemy, dealing an additional ? physical damage (3/3.5/4/4.5/5% of maximum health) at the cost of 25/35/45/55/65 health.<br><br>Upon activation, Dr. Mundo gains up to 60/90/120/150/180 attack damage (no less than 40/55/70/85/100) for 5 seconds based on his missing health.<br><br>Masochism grants ? attack damage above the minimum for every 1% of missing health (?)."
		},
		'skill_i':
		{
			'1': 'Adrenaline Rush',
			'img': 'assets/images/champions/Dr. Mundo/Adrenaline Rush.png',
			'tooltip': 'Dr. Mundo regenerates 0.3% of his maximum Health each second.'
		},
		'skill_q':
		{
			'1': 'Infected Cleaver',
			'img': 'assets/images/champions/Dr. Mundo/Infected Cleaver.png',
			'tooltip': "Dr. Mundo hurls his cleaver, dealing 20/22.5/25/27.5/30% of the target's current health as magic damage (no less than 80/130/180/230/280) and slowing them by 40% for 2 seconds.<br><br>If the cleaver hits, ? health is refunded (? if the cleaver kills).<br><br>Infected Cleaver deals no more than 300/350/400/450/500 damage against monsters."
		},
		'skill_r':
		{
			'1': 'Sadism',
			'img': 'assets/images/champions/Dr. Mundo/Sadism.png',
			'tooltip': 'Dr. Mundo regenerates ? Health (50/75/100% of max health) over 12 seconds, and gains 15/25/35% movement speed for the duration.'
		},
		'skill_w':
		{
			'1': 'Burning Agony',
			'img': 'assets/images/champions/Dr. Mundo/Burning Agony.png',
			'tooltip': 'Toggle: Dr. Mundo sets himself on fire, dealing ? (+0.2) magic damage to nearby enemies every second.<br><br>While on fire, the duration of disables against Dr. Mundo are reduced by 30%.'
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 61.27,
			'ad_lvl': 3.5,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_taken': 1.1,
			'arm_base': 36,
			'arm_lvl': 3.5,
			'as_base': 0.721,
			'as_lvl': 2.8,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.139687493443489,
			'critdmg': 0,
			'gameplay_radius': 80,
			'heal_shield': 0,
			'hp5_base': 8,
			'hp5_lvl': 0.75,
			'hp_base': 582.52,
			'hp_lvl': 89,
			'ls': 0,
			'mp5_base': 0,
			'mp5_lvl': 0,
			'mp_base': 0,
			'mp_lvl': 0,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 345,
			'ms_base': 345,
			'ofa_dmg_dealt': 0.95,
			'ofa_healing': 0.95,
			'pathing_radius': 50,
			'range': 125,
			'selection_radius': 135,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 55,
		'title': 'the Madman of Zaun',
		'toughness': 3,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'apiname': 'draven',
		'attack': 9,
		'be': 4800,
		'changes': 'V10.11',
		'control': 1,
		'damage': 3,
		'date': '2012-06-06',
		'ddragon_apiname': 'Draven',
		'defense': 3,
		'difficulty': 2,
		'herotype': 'Marksman',
		'id': 119,
		'img': 'assets/images/champions/Draven/Draven.png',
		'index': 23,
		'magic': 1,
		'mobility': 2,
		'name': 'Draven',
		'patch': 'V1.0.0.140b',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Stand Aside',
			'img': 'assets/images/champions/Draven/Stand Aside.png',
			'tooltip': 'Draven throws his axes, dealing 75/110/145/180/215 (+0.5) physical damage to targets hit and knocking them aside. Targets hit are slowed by 20/25/30/35/40% for 2 seconds.'
		},
		'skill_i':
		{
			'1': 'League of Draven',
			'img': 'assets/images/champions/Draven/League of Draven.png',
			'tooltip': "Draven gains his fans' Adoration when he catches a Spinning Axe or kills a minion, monster, or tower. Killing enemy champions grants Draven bonus gold based on how much Adoration he has."
		},
		'skill_q':
		{
			'1': 'Spinning Axe',
			'img': 'assets/images/champions/Draven/Spinning Axe.png',
			'tooltip': "Draven's next attack will deal [0.45, 0.55, 0.65, 0.75, 0.85] bonus physical damage. The bonus is equal to 35/40/45/50/55 plus 65/75/85/95/105% of his bonus Attack Damage.<br><br>This axe will ricochet off the target high up into the air. If Draven catches it, he automatically readies another Spinning Axe.<br><br>Draven can have two Spinning Axes at once."
		},
		'skill_r':
		{
			'1': 'Whirling Death',
			'2': 'Whirling Death 2',
			'img': 'assets/images/champions/Draven/Whirling Death.png',
			'tooltip': 'Draven hurls two massive axes to deal ? physical damage to each unit struck.<br><br>Whirling Death slowly reverses direction and returns to Draven after striking an enemy champion. Draven may also activate this ability while the axes are in flight to cause it to return early. Deals ?% less damage for each unit hit (Minimum ?%) and resets when the axes reverse direction.'
		},
		'skill_w':
		{
			'1': 'Blood Rush',
			'img': 'assets/images/champions/Draven/Blood Rush.png',
			'tooltip': 'Draven gains 50/55/60/65/70% increased Movement Speed for 1.5 seconds and 20/25/30/35/40% increased Attack Speed for 3 seconds. The Movement Speed bonus decreases rapidly over its duration.<br><br>Catching a Spinning Axe will refresh the cooldown of Blood Rush.'
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 60,
			'ad_lvl': 3.61,
			'apen': 0,
			'apen%': 0,
			'arm_base': 29,
			'arm_lvl': 3.3,
			'as_base': 0.679,
			'as_lvl': 2.7,
			'as_ratio': 0.67900002002716,
			'attack_cast_time': 0.230000004172325,
			'attack_delay_offset': -0.118840597569942,
			'attack_total_time': 1.47300004959106,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 3.75,
			'hp5_lvl': 0.7,
			'hp_base': 605,
			'hp_lvl': 90,
			'ls': 0,
			'missile_speed': 1600,
			'mp5_base': 8.042,
			'mp5_lvl': 0.65,
			'mp_base': 360.56,
			'mp_lvl': 39,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 330,
			'ms_base': 330,
			'pathing_radius': 35,
			'range': 550,
			'selection_radius': 111.111099243164,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 10,
		'title': 'the Glorious Executioner',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Fighter',
		'apiname': 'ekko',
		'attack': 5,
		'be': 6300,
		'changes': 'V10.3',
		'control': 2,
		'damage': 3,
		'date': '2015-05-29',
		'ddragon_apiname': 'Ekko',
		'defense': 3,
		'difficulty': 3,
		'herotype': 'Assassin',
		'id': 245,
		'img': 'assets/images/champions/Ekko/Ekko.png',
		'index': 24,
		'magic': 7,
		'mobility': 3,
		'name': 'Ekko',
		'patch': 'V5.10',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 975,
		'skill_e':
		{
			'1': 'Phase Dive',
			'img': 'assets/images/champions/Ekko/Phase Dive.png',
			'tooltip': ' Ekko dashes a short distance in the targeted direction. His next attack will deal 50/75/100/125/150 (+0.4) bonus magic damage and teleport him to his target.'
		},
		'skill_i':
		{
			'1': 'Z-Drive Resonance',
			'img': 'assets/images/champions/Ekko/Z-Drive Resonance.png',
			'tooltip': "Ekko's Zero-Drive charges his spells and attacks with temporal energy. The third hit deals bonus damage and, if the target is a champion, Ekko gains accelerated movement speed."
		},
		'skill_q':
		{
			'1': 'Timewinder',
			'img': 'assets/images/champions/Ekko/Timewinder.png',
			'tooltip': 'Ekko throws a device that deals 60/75/90/105/120 (+0.3) magic damage to enemies it passes through. It expands into a slowing field on the first champion hit, slowing everything inside by 32/39/46/53/60%. It then returns to him after a delay, dealing 40/65/90/115/140 (+0.6) magic damage to all targets hit upon return.'
		},
		'skill_r':
		{
			'1': 'Chronobreak',
			'img': 'assets/images/champions/Ekko/Chronobreak.png',
			'tooltip': 'Ekko turns back time, going briefly untargetable and invulnerable. He teleports to where he was 4 seconds ago and deals ? magic damage to nearby enemies on arrival. Additionally, Ekko heals for ?, increased by ?% for each 1% of his health lost over the last 4 seconds.'
		},
		'skill_w':
		{
			'1': 'Parallel Convergence',
			'img': 'assets/images/champions/Ekko/Parallel Convergence.png',
			'tooltip': "Passive: Ekko's basic attacks deal bonus magic damage to enemies under 30% health equal to 3% (+0.03%) of their missing health. Deals a minimum of 15 damage, and a maximum of 150 damage vs. minions and monsters.<br><br>Active: After a 3 second delay, Ekko creates a short-lived chronosphere at the target location that slows enemies who enter by ?%. If Ekko enters the sphere, he will detonate it, gaining a shield that absorbs up to 80/100/120/140/160 (+1.5) damage for 2 seconds. Enemies caught inside are stunned for 2.25 seconds."
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 58,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'arm_base': 32,
			'arm_lvl': 3,
			'as_base': 0.688,
			'as_lvl': 3.3,
			'as_ratio': 0.625,
			'attack_cast_time': 0.259999990463256,
			'attack_total_time': 1.60000002384185,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 9,
			'hp5_lvl': 0.9,
			'hp_base': 585,
			'hp_lvl': 85,
			'ls': 0,
			'mp5_base': 7,
			'mp5_lvl': 0.8,
			'mp_base': 280,
			'mp_lvl': 50,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32,
			'mr_lvl': 1.25,
			'ms': 340,
			'ms_base': 340,
			'pathing_radius': 35,
			'range': 125,
			'selection_radius': 120,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 75,
		'title': 'the Boy Who Shattered Time',
		'toughness': 2,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Fighter',
		'apiname': 'elise',
		'attack': 6,
		'be': 4800,
		'changes': 'V10.15',
		'control': 2,
		'damage': 2,
		'date': '2012-10-26',
		'ddragon_apiname': 'Elise',
		'defense': 5,
		'difficulty': 2,
		'fullname': 'Elise Kythera Zaavan',
		'herotype': 'Mage',
		'id': 60,
		'img': 'assets/images/champions/Elise/Elise.png',
		'index': 25,
		'magic': 7,
		'mobility': 2,
		'name': 'Elise',
		'patch': 'V1.0.0.150',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Cocoon',
			'2': 'Rappel',
			'img': 'assets/images/champions/Elise/Cocoon.png',
			'tooltip': 'Stuns the first enemy hit for 1.6/1.7/1.8/1.9/2 seconds and reveals them if they are not stealthed.'
		},
		'skill_i':
		{
			'1': 'Spider Queen',
			'img': 'assets/images/champions/Elise/Spider Queen.png',
			'tooltip': "Human Form: When Elise's abilities hit an enemy, she gains a dormant Spiderling.<br><br>Spider Form: Basic attacks deal bonus magic damage and restore health to Elise."
		},
		'skill_q':
		{
			'1': 'Neurotoxin',
			'2': 'Venomous Bite',
			'img': 'assets/images/champions/Elise/Neurotoxin.png',
			'tooltip': "Deals magic damage equal to 40/75/110/145/180 plus 4% (+0.03%) of the target's current health. Maximum bonus against monsters: 75/100/125/150/175."
		},
		'skill_r':
		{
			'1': 'Spider Form',
			'2': 'Human Form',
			'img': 'assets/images/champions/Elise/Spider Form.png',
			'tooltip': 'Elise transforms into a menacing spider, sacrificing 425 attack range in exchange for 25 movement speed and access to arachnid abilities. All dormant Spiderlings are awakened and will attack nearby foes.<br><br>Spiderlings: Spiderlings deal 10/15/20/25 (+0.15) damage and take 25% reduced damage from multi-target abilities.'
		},
		'skill_w':
		{
			'1': 'Volatile Spiderling',
			'2': 'Skittering Frenzy',
			'img': 'assets/images/champions/Elise/Volatile Spiderling.png',
			'tooltip': 'Summons a venom-gorged Spiderling that moves to target location and explodes, dealing 60/105/150/195/240 (+0.95) magic damage when it nears an enemy or after 3 seconds.'
		},
		'stats':
		{
			'acquisition_radius': 550,
			'ad_base': 55,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 1.05,
			'aram_dmg_taken': 0.9,
			'arm_base': 27,
			'arm_lvl': 3.35,
			'as_base': 0.625,
			'as_lvl': 1.75,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.112499997019767,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 5.5,
			'hp5_lvl': 0.6,
			'hp_base': 534,
			'hp_lvl': 93,
			'ls': 0,
			'mp5_base': 6,
			'mp5_lvl': 0.8,
			'mp_base': 324,
			'mp_lvl': 50,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 330,
			'ms_base': 330,
			'ofa_dmg_taken': 0.95,
			'pathing_radius': 35,
			'range': 550,
			'selection_radius': 120,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.05,
			'urf_dmg_taken': 0.9
		},
		'style': 65,
		'title': 'the Spider Queen',
		'toughness': 2,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Mage',
		'apiname': 'evelynn',
		'attack': 4,
		'be': 1350,
		'changes': 'V10.12',
		'control': 1,
		'damage': 2,
		'date': '2009-05-01',
		'ddragon_apiname': 'Evelynn',
		'defense': 2,
		'difficulty': 2,
		'herotype': 'Assassin',
		'id': 28,
		'img': 'assets/images/champions/Evelynn/Evelynn.png',
		'index': 26,
		'magic': 7,
		'mobility': 2,
		'name': 'Evelynn',
		'patch': 'May 1, 2009 Patch',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 585,
		'skill_e':
		{
			'1': 'Whiplash',
			'2': 'Empowered Whiplash',
			'img': 'assets/images/champions/Evelynn/Whiplash.png',
			'tooltip': "Whip target with Lashers, applying on hit effects and dealing magic damage equal to 0.4 plus 3% (+0.015%) of their max health. Then, gain 30% movement speed for 2 seconds.<br><br>Entering Demon Shade resets Whiplash's cooldown and empowers it. When empowered, Whiplash pulls Evelynn to her target, dealing magic damage to them and enemies in the way equal to ? plus 4% (+0.025%) of their max health."
		},
		'skill_i':
		{
			'1': 'Demon Shade',
			'img': 'assets/images/champions/Evelynn/Demon Shade.png',
			'tooltip': 'When out of combat, Evelynn enters Demon Shade. Demon Shade heals Evelynn when she is low on health and grants Camouflage after level 6.'
		},
		'skill_q':
		{
			'1': 'Hate Spike',
			'img': 'assets/images/champions/Evelynn/Hate Spike.png',
			'tooltip': "Evelynn's Lasher strikes in the target direction, dealing 30/35/40/45/50 (+0.3) magic damage to the first unit hit and causing Evelynn's next 3 spells or attacks on that unit deal 10/20/30/40/50 (+0.25) bonus magic damage. Then, Evelynn can recast this ability up to 3 times.<br><br>Recast: Fires spikes through the nearest enemy, dealing 30/35/40/45/50 (+0.3) magic damage to all units hit.<br><br>Hate Spike prioritizes the target Evelynn is attacking."
		},
		'skill_r':
		{
			'1': 'Last Caress',
			'img': 'assets/images/champions/Evelynn/Last Caress.png',
			'tooltip': 'Evelynn unleashes her demonic energy, becoming untargetable and decimating enemies in front of her. She then warps backwards. Deals 125/250/375 (+0.75) magic damage, increased to ? (+?) to enemies below 30% health.'
		},
		'skill_w':
		{
			'1': 'Allure',
			'img': 'assets/images/champions/Evelynn/Allure.png',
			'tooltip': 'Curses target champion or monster for 5 seconds. If Evelynn hits the target with a basic attack or ability, she will expunge the Curse, refund its mana cost, and briefly slow the target by 65%.<br><br>If the Curse lasts at least 2.5 seconds, expunging it Charms the target for 1/1.25/1.5/1.75/2 second(s) and:Against champions: shreds Magic Resist by 25/27.5/30/32.5/35% for ? seconds.Against monsters: deals 250/300/350/400/450 (+0.6) magic damage. Charm duration increased by 2 seconds.Casting Allure does not remove Evelynn from Demon Shade.'
		},
		'stats':
		{
			'acquisition_radius': 400,
			'ad_base': 61,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 1.15,
			'aram_dmg_taken': 0.85,
			'arm_base': 37,
			'arm_lvl': 3.5,
			'as_base': 0.667,
			'as_lvl': 2.1,
			'as_ratio': 0.666999995708465,
			'attack_cast_time': 0.230000004172325,
			'attack_total_time': 1.5,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 8.5,
			'hp5_lvl': 0.75,
			'hp_base': 572,
			'hp_lvl': 84,
			'ls': 0,
			'mp5_base': 8.108,
			'mp5_lvl': 0.6,
			'mp_base': 315.6,
			'mp_lvl': 42,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 335,
			'ms_base': 335,
			'nb_dmg_dealt': 1.05,
			'nb_dmg_taken': 0.9,
			'ofa_dmg_dealt': 1.07,
			'ofa_dmg_taken': 0.93,
			'pathing_radius': 35,
			'range': 125,
			'selection_radius': 120,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.1,
			'urf_dmg_taken': 0.95
		},
		'style': 75,
		'title': "Agony's Embrace",
		'toughness': 2,
		'utility': 2
	},
	{
		'adaptivetype': 'Mixed,Physical',
		'alttype': 'Mage',
		'apiname': 'ezreal',
		'attack': 7,
		'be': 4800,
		'changes': 'V10.14',
		'control': 1,
		'damage': 3,
		'date': '2010-03-16',
		'ddragon_apiname': 'Ezreal',
		'defense': 2,
		'difficulty': 1,
		'herotype': 'Marksman',
		'id': 81,
		'img': 'assets/images/champions/Ezreal/Ezreal.png',
		'index': 27,
		'magic': 6,
		'mobility': 3,
		'name': 'Ezreal',
		'patch': 'V1.0.0.79',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Arcane Shift',
			'img': 'assets/images/champions/Ezreal/Arcane Shift.png',
			'tooltip': 'Ezreal teleports to a nearby location and fires a bolt at the nearest enemy, dealing ? magic damage.<br><br>Arcane Shift will prioritize targets stuck with Essence Flux.'
		},
		'skill_i':
		{
			'1': 'Rising Spell Force',
			'img': 'assets/images/champions/Ezreal/Rising Spell Force.png',
			'tooltip': 'Ezreal gains increasing Attack Speed each time he successfully hits a spell, stacking up to 5 times.'
		},
		'skill_q':
		{
			'1': 'Mystic Shot',
			'img': 'assets/images/champions/Ezreal/Mystic Shot.png',
			'tooltip': "Ezreal fires a bolt of energy, dealing ? physical damage (applies on-hit effects). <br><br>Ezreal's cooldowns are reduced by ? seconds if Mystic Shot hits a target."
		},
		'skill_r':
		{
			'1': 'Trueshot Barrage',
			'img': 'assets/images/champions/Ezreal/Trueshot Barrage.png',
			'tooltip': 'Ezreal winds up for 1 second to fire a long range missile that deals ? magic damage to each enemy it passes through.<br><br>Deals ?% damage to minions and non-epic monsters.'
		},
		'skill_w':
		{
			'1': 'Essence Flux',
			'img': 'assets/images/champions/Ezreal/Essence Flux.png',
			'tooltip': 'Ezreal fires an orb that sticks to the first champion or objective hit for ? seconds.<br><br>Hitting the orb with an ability or attack detonates it dealing ? magic damage. Detonating with an ability refunds the cost of that ability +? mana.'
		},
		'stats':
		{
			'acquisition_radius': 550,
			'ad_base': 60,
			'ad_lvl': 2.5,
			'apen': 0,
			'apen%': 0,
			'arm_base': 22,
			'arm_lvl': 3.5,
			'as_base': 0.625,
			'as_lvl': 2.5,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.111613474786281,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 4,
			'hp5_lvl': 0.55,
			'hp_base': 530,
			'hp_lvl': 88,
			'ls': 0,
			'mp5_base': 8.5,
			'mp5_lvl': 0.65,
			'mp_base': 375,
			'mp_lvl': 50,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 325,
			'ms_base': 325,
			'pathing_radius': 35,
			'range': 550,
			'selection_radius': 115,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.05,
			'urf_dmg_taken': 0.95
		},
		'style': 45,
		'title': 'the Prodigal Explorer',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Support',
		'apiname': 'fiddlesticks',
		'attack': 2,
		'be': 1350,
		'changes': 'V10.15',
		'control': 3,
		'damage': 3,
		'date': '2009-02-21',
		'ddragon_apiname': 'Fiddlesticks',
		'defense': 3,
		'difficulty': 2,
		'herotype': 'Mage',
		'id': 9,
		'img': 'assets/images/champions/Fiddlesticks/Fiddlesticks.png',
		'index': 28,
		'magic': 9,
		'mobility': 1,
		'name': 'Fiddlesticks',
		'patch': 'Alpha Week 2',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 585,
		'skill_e':
		{
			'1': 'Reap',
			'img': 'assets/images/champions/Fiddlesticks/Reap.png',
			'tooltip': 'Unleash dark magic at a target position, dealing ? magic damage to and slowing enemies hit by ?% for ? seconds in a crescent shaped area.<br><br>Enemies in the center of the crescent are silenced for the duration as well as slowed.<br>'
		},
		'skill_i':
		{
			'1': 'A Harmless Scarecrow',
			'img': 'assets/images/champions/Fiddlesticks/A Harmless Scarecrow.png',
			'tooltip': "Fiddlesticks' trinket is replaced by scarecrow effigies."
		},
		'skill_q':
		{
			'1': 'Terrify',
			'img': 'assets/images/champions/Fiddlesticks/Terrify.png',
			'tooltip': "Passive: While unseen and out of combat or posing as an Effigy, damaging an enemy with a spell terrifies them for ? seconds.<br><br>Active: Terrifies a target for ? seconds and deals ?% (+1% per 50AP) of the target's current health (minimum ?) as magic damage. <br><br>If the target has recently been terrified, instead deal ?% (+2% per 50AP) of the target's current health (minimum ?) as magic damage. <br><br>Max 400 damage vs monsters.<br>"
		},
		'skill_r':
		{
			'1': 'Crowstorm',
			'img': 'assets/images/champions/Fiddlesticks/Crowstorm.png',
			'tooltip': 'Channel for ? seconds, then blink to the target point unleashing a murder of crows, dealing ? (+?) magic damage per second to all enemy units in the area.<br><br>The effect lasts for ? seconds, dealing up to ? (+?) total magic damage.'
		},
		'skill_w':
		{
			'1': 'Bountiful Harvest',
			'img': 'assets/images/champions/Fiddlesticks/Bountiful Harvest.png',
			'tooltip': 'Drains the souls of nearby enemies, dealing ? magic damage per second over 2 seconds plus ?% of their missing health on the final instance of damage.<br><br>Fiddlesticks heals for ?% of the damage dealt before mitigation, reduced to ?% vs minions.<br><br>On a completed channel or if nothing remains to be harvested, refund 60% of the remaining cooldown.<br><br>Damage dealt to minions is reduced to ?%<br>'
		},
		'stats':
		{
			'acquisition_radius': 520,
			'ad_base': 55.36,
			'ad_lvl': 2.625,
			'apen': 0,
			'apen%': 0,
			'arm_base': 34,
			'arm_lvl': 3.5,
			'as_base': 0.625,
			'as_lvl': 2.11,
			'as_ratio': 0.625,
			'attack_delay_offset': 0,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 5.5,
			'hp5_lvl': 0.6,
			'hp_base': 580.4,
			'hp_lvl': 92,
			'ls': 0,
			'mp5_base': 8,
			'mp5_lvl': 0.8,
			'mp_base': 500,
			'mp_lvl': 28,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 335,
			'ms_base': 335,
			'nb_dmg_dealt': 0.95,
			'ofa_dmg_dealt': 1.03,
			'ofa_dmg_taken': 0.95,
			'pathing_radius': 35,
			'range': 480,
			'selection_radius': 135,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.1,
			'urf_dmg_taken': 0.9,
			'urf_healing': 1.1
		},
		'style': 100,
		'title': 'the Ancient Fear',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Assassin',
		'apiname': 'fiora',
		'attack': 10,
		'be': 4800,
		'changes': 'V10.15',
		'control': 2,
		'damage': 3,
		'date': '2012-02-29',
		'ddragon_apiname': 'Fiora',
		'defense': 4,
		'difficulty': 2,
		'fullname': 'Fiora Laurent',
		'herotype': 'Fighter',
		'id': 114,
		'img': 'assets/images/champions/Fiora/Fiora.png',
		'index': 29,
		'magic': 2,
		'mobility': 2,
		'name': 'Fiora',
		'patch': 'V1.0.0.135',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Bladework',
			'img': 'assets/images/champions/Fiora/Bladework.png',
			'tooltip': 'Fiora gains 50/60/70/80/90% attack speed for her next two attacks. The first attack cannot critically strike, but will apply a 30% slow for 1 second. The second attack is guaranteed to critically strike for ?% damage (?).'
		},
		'skill_i':
		{
			'1': "Duelist's Dance",
			'2': "Duelist's Dance 2",
			'img': "assets/images/champions/Fiora/Duelist's Dance.png",
			'tooltip': 'Fiora challenges nearby enemy Champions to dodge her. She calls out a direction from which she will try to strike. If she can complete her own challenge, she receives a small bonus and calls out a new direction.'
		},
		'skill_q':
		{
			'1': 'Lunge',
			'img': 'assets/images/champions/Fiora/Lunge.png',
			'tooltip': 'Fiora lunges in a direction and stabs a nearby enemy, dealing 70/80/90/100/110 (+0.6) physical damage and applying on-hit effects. This attack prioritizes Vitals and enemies it will kill.<br><br>If this ability hits an enemy, 50% of its cooldown is refunded. '
		},
		'skill_r':
		{
			'1': 'Grand Challenge',
			'2': 'Grand Challenge 2',
			'img': 'assets/images/champions/Fiora/Grand Challenge.png',
			'tooltip': "Fiora reveals all four Vitals on target champion, for a potential ? max health true damage. In addition, Fiora gains Duelist's Dance's movement speed bonus (?%) while near the target.<br><br>If Fiora hits all 4 Vitals in ? seconds or if the target dies after she has hit at least one, Fiora and her allies in the area are healed for ? each second for between ? to ? seconds, scaling with the amount of Vitals hit."
		},
		'skill_w':
		{
			'1': 'Riposte',
			'img': 'assets/images/champions/Fiora/Riposte.png',
			'tooltip': 'Fiora parries all incoming damage, debuffs, and disables for the next 0.75 seconds and then stabs in the target direction.<br><br>The stab deals 110/150/190/230/270 (+?) magic damage to the first enemy champion hit and slows their movement and attack speed by 50% for 2 seconds. <br><br>If Fiora parries an immobilizing effect, Riposte stuns instead of slowing.'
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 68,
			'ad_lvl': 3.3,
			'apen': 0,
			'apen%': 0,
			'arm_base': 33,
			'arm_lvl': 3.5,
			'as_base': 0.69,
			'as_lvl': 3.2,
			'as_ratio': 0.689999997615814,
			'attack_cast_time': 0.200000002980232,
			'attack_total_time': 1.45000004768371,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 8.5,
			'hp5_lvl': 0.55,
			'hp_base': 550,
			'hp_lvl': 85,
			'ls': 0,
			'mp5_base': 8,
			'mp5_lvl': 0.7,
			'mp_base': 300,
			'mp_lvl': 40,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 345,
			'ms_base': 345,
			'pathing_radius': 35,
			'range': 150,
			'selection_radius': 100,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 0.95,
			'urf_healing': 0.95
		},
		'style': 20,
		'title': 'the Grand Duelist',
		'toughness': 2,
		'utility': 2
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Fighter',
		'apiname': 'fizz',
		'attack': 6,
		'be': 4800,
		'changes': 'V9.22',
		'control': 2,
		'damage': 3,
		'date': '2011-11-15',
		'ddragon_apiname': 'Fizz',
		'defense': 4,
		'difficulty': 2,
		'herotype': 'Assassin',
		'id': 105,
		'img': 'assets/images/champions/Fizz/Fizz.png',
		'index': 30,
		'magic': 7,
		'mobility': 3,
		'name': 'Fizz',
		'patch': 'V1.0.0.129',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Playful',
			'2': 'Trickster',
			'img': 'assets/images/champions/Fizz/Playful.png',
			'tooltip': 'Fizz hops on his trident towards the cursor, becoming briefly untargetable.<br><br>Reactivation: Fizz cancels the spell early, jumping towards the cursor a second time and dealing ? magic damage to nearby enemies.<br><br>If Fizz does not reactivate, he deals damage in a larger area and slows all enemies hit by 40/45/50/55/60% for 2 seconds.'
		},
		'skill_i':
		{
			'1': 'Nimble Fighter',
			'img': 'assets/images/champions/Fizz/Nimble Fighter.png',
			'tooltip': 'Fizz can move through units and takes a flat amount of reduced damage from all sources'
		},
		'skill_q':
		{
			'1': 'Urchin Strike',
			'img': 'assets/images/champions/Fizz/Urchin Strike.png',
			'tooltip': 'Fizz dashes through his target, dealing 1 physical damage plus ? magic damage. This spell applies on-hit effects. '
		},
		'skill_r':
		{
			'1': 'Chum the Waters',
			'img': 'assets/images/champions/Fizz/Chum the Waters.png',
			'tooltip': 'Fizz launches a fish that attaches to the first enemy champion it hits, slowing them, granting True Sight, and attracting a shark. After ? seconds, the shark erupts out of the ground, knocking its target up and knocking other enemies aside.<br><br>The farther the fish travels before attaching, the bigger the shark it attracts, dealing ? to ? magic damage and slowing by 40% to 80%.'
		},
		'skill_w':
		{
			'1': 'Seastone Trident',
			'img': 'assets/images/champions/Fizz/Seastone Trident.png',
			'tooltip': "Passive: Fizz's basic attacks bleed his enemies, dealing ? magic damage over ? seconds. <br><br>Active: Fizz's next basic attack deals an additional ? bonus magic damage and empowers Fizz's attacks for ? seconds, dealing an additional ? magic damage on hit.<br><br>If the first attack kills a target, it refunds ? mana, resets its cooldown to ? second and does not grant the ? second on-hit buff."
		},
		'stats':
		{
			'acquisition_radius': 400,
			'ad_base': 58.04,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 1.05,
			'aram_dmg_taken': 0.95,
			'arm_base': 22.412,
			'arm_lvl': 3.4,
			'as_base': 0.658,
			'as_lvl': 3.1,
			'as_ratio': 0.657999992370605,
			'attack_delay_offset': -0.0970000028610229,
			'critdmg': 0,
			'gameplay_radius': 55,
			'heal_shield': 0,
			'hp5_base': 8,
			'hp5_lvl': 0.7,
			'hp_base': 570,
			'hp_lvl': 98,
			'ls': 0,
			'mp5_base': 6,
			'mp5_lvl': 0.8,
			'mp_base': 317.2,
			'mp_lvl': 37,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 335,
			'ms_base': 335,
			'pathing_radius': 30,
			'range': 175,
			'selection_radius': 108.333297729492,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 0.9,
			'urf_dmg_taken': 1.05
		},
		'style': 90,
		'title': 'the Tidal Trickster',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Mage',
		'apiname': 'galio',
		'attack': 1,
		'be': 3150,
		'changes': 'V10.10',
		'control': 3,
		'damage': 2,
		'date': '2010-08-10',
		'ddragon_apiname': 'Galio',
		'defense': 10,
		'difficulty': 2,
		'herotype': 'Tank',
		'id': 3,
		'img': 'assets/images/champions/Galio/Galio.png',
		'index': 31,
		'magic': 6,
		'mobility': 2,
		'name': 'Galio',
		'patch': 'v1.0.0.98',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 790,
		'skill_e':
		{
			'1': 'Justice Punch',
			'img': 'assets/images/champions/Galio/Justice Punch.png',
			'tooltip': 'Galio lunges forward with a mighty blow, dealing ? magic damage to the first champion and knocking him into the air for ? seconds. Enemies in the way take ? magic damage.<br><br>Galio will stop upon hitting terrain with Justice Punch.'
		},
		'skill_i':
		{
			'1': 'Colossal Smash',
			'img': 'assets/images/champions/Galio/Colossal Smash.png',
			'tooltip': "Every few seconds, Galio's next basic attack deals bonus magic damage in an area."
		},
		'skill_q':
		{
			'1': 'Winds of War',
			'img': 'assets/images/champions/Galio/Winds of War.png',
			'tooltip': "Galio fires two windblasts that deal ? magic damage.<br><br>When the windblasts meet, they combine into a giant tornado that deals ?% of enemies' maximum Health (max ? vs. monsters) as magic damage over ? seconds."
		},
		'skill_r':
		{
			'1': "Hero's Entrance",
			'img': "assets/images/champions/Galio/Hero's Entrance.png",
			'tooltip': "Galio designates an allied champion's current position as his landing spot, granting all allied champions in the area Shield of Durand's magic damage shield for ? seconds.<br><br>When Galio lands, enemies in the area take ? magic damage and are knocked into the air for ? seconds."
		},
		'skill_w':
		{
			'1': 'Shield of Durand',
			'2': 'Shield of Durand 2',
			'img': 'assets/images/champions/Galio/Shield of Durand.png',
			'tooltip': 'Passive: After not taking damage for ? seconds Galio gains a shield that absorbs ? magic damage.<br><br>First Cast: Galio starts to charge, gaining 20/25/30/35/40 (+?)(+?)% damage reduction from magic damage and ?% of that amount as damage reduction from physical damage. While charging, Galio slows himself by 15%.<br><br>Second Cast: Galio taunts nearby enemy champions for 0.5 to 1.5 seconds, deals ? (+?) to ? (+?) magic damage, and refreshes the damage reduction for 2 seconds. Taunt duration, damage, and radius increase with charge time.'
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 59,
			'ad_lvl': 3.5,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 0.95,
			'aram_dmg_taken': 1.05,
			'arm_base': 24,
			'arm_lvl': 3.5,
			'as_base': 0.625,
			'as_lvl': 1.5,
			'as_ratio': 0.625,
			'attack_cast_time': 0.330000013113021,
			'attack_total_time': 1.60000002384185,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 8,
			'hp5_lvl': 0.8,
			'hp_base': 562,
			'hp_lvl': 112,
			'ls': 0,
			'mp5_base': 9.5,
			'mp5_lvl': 0.7,
			'mp_base': 500,
			'mp_lvl': 40,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32,
			'mr_lvl': 1.25,
			'ms': 335,
			'ms_base': 335,
			'pathing_radius': 50,
			'range': 150,
			'selection_radius': 125,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 100,
		'title': 'the Colossus',
		'toughness': 3,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'apiname': 'gangplank',
		'attack': 7,
		'be': 3150,
		'changes': 'V10.11',
		'control': 1,
		'damage': 3,
		'date': '2009-08-19',
		'ddragon_apiname': 'Gangplank',
		'defense': 6,
		'difficulty': 3,
		'herotype': 'Fighter',
		'id': 41,
		'img': 'assets/images/champions/Gangplank/Gangplank.png',
		'index': 32,
		'magic': 4,
		'mobility': 1,
		'name': 'Gangplank',
		'nickname': 'GP',
		'patch': 'V0.9.22.15',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 790,
		'skill_e':
		{
			'1': 'Powder Keg',
			'img': 'assets/images/champions/Gangplank/Powder Keg.png',
			'tooltip': "Places a powder keg that can be attacked by Gangplank or his enemies at a location for 25 seconds.<br><br>If Gangplank destroys a keg, it explodes dealing the attack's damage as physical damage (ignores ?% Armor) to enemies and slowing them by 40/50/60/70/80% for 2 seconds. Champions take 80/105/130/155/180 bonus physical damage from the explosion.<br><br>When a keg explodes, other kegs with overlapping blast zones chain explode (damage does not stack).<br><br>Kegs health decays every ? seconds. (Decay rate increases at level 7 and 13)<br><br>Keg explosions apply Parrrley's plunder effect."
		},
		'skill_i':
		{
			'1': 'Trial by Fire',
			'2': 'Trial by Fire 2',
			'img': 'assets/images/champions/Gangplank/Trial by Fire.png',
			'tooltip': "Every few seconds, Gangplank's melee strike will set his opponent on fire."
		},
		'skill_q':
		{
			'1': 'Parrrley',
			'img': 'assets/images/champions/Gangplank/Parrrley.png',
			'tooltip': 'Fires a bullet that deals 20/45/70/95/120 (+1) physical damage (can crit and applies on-hit effects).<br><br>If Parrrley kills the target, Gangplank plunders 3/4/5/6/7 bonus Gold and 4/5/6/7/8 Silver Serpents. (Trade Silver Serpents at the shop to upgrade Cannon Barrage).<br><br>'
		},
		'skill_r':
		{
			'1': 'Cannon Barrage',
			'img': 'assets/images/champions/Gangplank/Cannon Barrage.png',
			'tooltip': "Signals Gangplank's ship to fire ? waves of cannonballs at an area over 8 seconds. Each wave deals 40/70/100 (+0.1) magic damage and slows enemies by 30% for 0.5 seconds.<br><br>Collect Silver Serpents with Parrrley to upgrade in the shop."
		},
		'skill_w':
		{
			'1': 'Remove Scurvy',
			'img': 'assets/images/champions/Gangplank/Remove Scurvy.png',
			'tooltip': 'Gangplank consumes a large quantity of citrus fruit, curing all disabling effects and healing him for 50/75/100/125/150 (+0.9) + 15% of his missing Health.'
		},
		'stats':
		{
			'acquisition_radius': 400,
			'ad_base': 64,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'arm_base': 35,
			'arm_lvl': 3,
			'as_base': 0.658,
			'as_lvl': 3.2,
			'as_ratio': 0.69,
			'attack_cast_time': 0.25,
			'attack_total_time': 1.51999998092651,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 6,
			'hp5_lvl': 0.6,
			'hp_base': 540,
			'hp_lvl': 82,
			'ls': 0,
			'mp5_base': 7.5,
			'mp5_lvl': 0.7,
			'mp_base': 282,
			'mp_lvl': 40,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 345,
			'ms_base': 345,
			'ofa_dmg_dealt': 1.05,
			'ofa_dmg_taken': 0.95,
			'pathing_radius': 35,
			'range': 125,
			'selection_radius': 85,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.15
		},
		'style': 75,
		'title': 'the Saltwater Scourge',
		'toughness': 1,
		'utility': 2
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Tank',
		'apiname': 'garen',
		'attack': 7,
		'be': 450,
		'changes': 'V10.7',
		'control': 1,
		'damage': 2,
		'date': '2010-04-27',
		'ddragon_apiname': 'Garen',
		'defense': 7,
		'difficulty': 1,
		'fullname': 'Garen Crownguard',
		'herotype': 'Fighter',
		'id': 86,
		'img': 'assets/images/champions/Garen/Garen.png',
		'index': 33,
		'magic': 1,
		'mobility': 1,
		'name': 'Garen',
		'patch': 'V1.0.0.83',
		'rangetype': 'Melee',
		'resource': 'None',
		'rp': 260,
		'skill_e':
		{
			'1': 'Judgment',
			'2': 'Judgment 2',
			'img': 'assets/images/champions/Garen/Judgment.png',
			'tooltip': 'Garen rapidly spins his sword around his body for ? seconds, dealing ? physical damage ? times, increased to ? to the nearest enemy. (Attack speed from items and levels increases the number of strikes)<br><br>Enemy champions hit by ? spins lose ?% of their armor for ? seconds.'
		},
		'skill_i':
		{
			'1': 'Perseverance',
			'img': 'assets/images/champions/Garen/Perseverance.png',
			'tooltip': 'If Garen has not recently been struck by damage or enemy abilities, he regenerates a percentage of his total health each second.'
		},
		'skill_q':
		{
			'1': 'Decisive Strike',
			'img': 'assets/images/champions/Garen/Decisive Strike.png',
			'tooltip': 'Garen breaks free from all slows affecting him, and gains ?% movement speed for ? second(s).<br><br>His next basic attack within ? seconds deals ? physical damage and silences his target for ? seconds.'
		},
		'skill_r':
		{
			'1': 'Demacian Justice',
			'img': 'assets/images/champions/Garen/Demacian Justice.png',
			'tooltip': "Garen calls upon the might of Demacia to attempt to execute an enemy champion, dealing true damage equal to ? plus ?% of the target's missing health."
		},
		'skill_w':
		{
			'1': 'Courage',
			'img': 'assets/images/champions/Garen/Courage.png',
			'tooltip': 'Passive: Killing units permanently grants ? armor and magic resist, up to a maximum of ?. At max stacks, Garen increases his bonus armor and magic resist by ?%. <br>Current Bonus: ?+? Armor and ?+? Magic Resist. <br><br>Active: Garen steels his courage for ? seconds, reducing all incoming damage by ?%. For the first ? seconds, he also gains a shield that blocks ? damage and ?% Tenacity.'
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 66,
			'ad_lvl': 4.5,
			'apen': 0,
			'apen%': 0,
			'arm_base': 36,
			'arm_lvl': 3,
			'as_base': 0.625,
			'as_lvl': 3.65,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.11999999731779,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 8,
			'hp5_lvl': 0.5,
			'hp_base': 620,
			'hp_lvl': 84,
			'ls': 0,
			'mp5_base': 0,
			'mp5_lvl': 0,
			'mp_base': 0,
			'mp_lvl': 0,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 0.75,
			'ms': 340,
			'ms_base': 340,
			'pathing_radius': 35,
			'range': 175,
			'selection_radius': 75,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_taken': 1.1,
			'windup_modifier': 0.5
		},
		'style': 75,
		'title': 'The Might of Demacia',
		'toughness': 3,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Tank',
		'apiname': 'gnar',
		'attack': 6,
		'be': 6300,
		'changes': 'V10.14',
		'control': 1,
		'damage': 2,
		'date': '2014-08-14',
		'ddragon_apiname': 'Gnar',
		'defense': 5,
		'difficulty': 2,
		'herotype': 'Fighter',
		'id': 150,
		'img': 'assets/images/champions/Gnar/Gnar.png',
		'index': 34,
		'magic': 5,
		'mobility': 2,
		'name': 'Gnar',
		'patch': 'V4.14',
		'rangetype': 'Ranged',
		'resource': 'Rage',
		'rp': 975,
		'skill_e':
		{
			'1': 'Hop',
			'2': 'Crunch',
			'3': 'Hop and Crunch',
			'img': 'assets/images/champions/Gnar/Hop.png',
			'tooltip': 'Mini Gnar: Leaps to a location, gaining ?% Attack Speed for ? seconds. If Gnar lands on a unit he will bounce off it, traveling further. Deals ? physical damage and slows briefly if the unit landed on was an enemy.<br><br>Mega Gnar: Leaps to a location and deals ? physical damage to nearby enemies on landing. Enemies Gnar lands directly on top of are slowed briefly.<br><br>If Crunch is used to transform, Gnar will still be able to bounce.'
		},
		'skill_i':
		{
			'1': 'Rage Gene',
			'img': 'assets/images/champions/Gnar/Rage Gene.png',
			'tooltip': 'While in combat Gnar generates Rage. At maximum Rage his next ability will transform him into Mega Gnar, granting increased survivability and access to new spells.'
		},
		'skill_q':
		{
			'1': 'Boomerang Throw',
			'2': 'Boulder Toss',
			'img': 'assets/images/champions/Gnar/Boomerang Throw.png',
			'tooltip': 'Mini Gnar: Throws a boomerang that deals ? physical damage and slows enemies by ?% for ? seconds. The boomerang returns towards Gnar after hitting an enemy, dealing ?% damage to subsequent targets. Each enemy can only be hit once. Catching the boomerang reduces its cooldown by ?%.<br><br>Mega Gnar: Throws a boulder that stops when it hits an enemy, slowing all nearby enemies and dealing ? physical damage. Picking up the boulder reduces its cooldown by ?%.'
		},
		'skill_r':
		{
			'1': 'GNAR!',
			'img': 'assets/images/champions/Gnar/GNAR!.png',
			'tooltip': "Mini Gnar: Passive: Increases Hyper's Movement Speed bonus to ?%.<br><br>Mega Gnar: Knocks nearby enemies in the specified direction, dealing ? physical damage and slowing them by ?% for ? seconds. Enemies that hit a wall take ?% damage and are stunned instead of slowed."
		},
		'skill_w':
		{
			'1': 'Hyper',
			'2': 'Wallop',
			'img': 'assets/images/champions/Gnar/Hyper.png',
			'tooltip': "Mini Gnar: Passive: Every 3rd attack or spell on the same target deals an additional ? +?% of the target's max Health as magic damage and grants Gnar ?% Movement Speed that decays over 3 seconds (max ? damage vs. monsters). <br><br>Mega Gnar: Stuns enemies in an area for ? seconds, dealing ? physical damage.<br><br>Gnar gains Hyper's Movement Speed bonus when he leaves Mega form."
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 59,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'arm_base': 32,
			'arm_lvl': 2.5,
			'as_base': 0.625,
			'as_lvl': 6,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.153999999165534,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 4.5,
			'hp5_lvl': 1.75,
			'hp_base': 510,
			'hp_lvl': 65,
			'ls': 0,
			'mp5_base': 0,
			'mp5_lvl': 0,
			'mp_base': 100,
			'mp_lvl': 0,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 335,
			'ms_base': 335,
			'nb_dmg_taken': 0.95,
			'pathing_radius': 30,
			'range': 400,
			'range_lvl': 5.882,
			'selection_radius': 100,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.1,
			'urf_dmg_taken': 0.85
		},
		'style': 45,
		'title': 'the Missing Link',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Mage',
		'apiname': 'gragas',
		'attack': 4,
		'be': 3150,
		'changes': 'V10.15',
		'control': 3,
		'damage': 2,
		'date': '2010-02-02',
		'ddragon_apiname': 'Gragas',
		'defense': 7,
		'difficulty': 2,
		'herotype': 'Fighter',
		'id': 79,
		'img': 'assets/images/champions/Gragas/Gragas.png',
		'index': 35,
		'magic': 6,
		'mobility': 2,
		'name': 'Gragas',
		'patch': 'V1.0.0.72',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 790,
		'skill_e':
		{
			'1': 'Body Slam',
			'img': 'assets/images/champions/Gragas/Body Slam.png',
			'tooltip': "Gragas charges forward, colliding with the first enemy unit. He deals 80/130/180/230/280 (+0.6) magic damage to enemies in the area and bumps them back, stunning them for 1 second.<br><br>Body Slam's Cooldown is reduced by ? seconds if Gragas collides with a unit."
		},
		'skill_i':
		{
			'1': 'Happy Hour',
			'img': 'assets/images/champions/Gragas/Happy Hour.png',
			'tooltip': 'Gragas periodically heals upon using a skill.'
		},
		'skill_q':
		{
			'1': 'Barrel Roll',
			'2': 'Barrel Roll 2',
			'img': 'assets/images/champions/Gragas/Barrel Roll.png',
			'tooltip': 'Gragas rolls his cask to a location. When reactivated, or after 4 seconds, the cask will explode, dealing 80/120/160/200/240 (+0.7) magic damage to nearby enemies and slowing their movement speed by 40/45/50/55/60% for 2 seconds.<br><br>The damage and slow amount increase as the cask ferments, up to 150% after 2 seconds. Deals 70% damage to minions.'
		},
		'skill_r':
		{
			'1': 'Explosive Cask',
			'img': 'assets/images/champions/Gragas/Explosive Cask.png',
			'tooltip': 'Gragas hurls his cask, causing it to explode when it lands. Enemies hit take ? (+0.8) magic damage and are knocked away from the explosion.'
		},
		'skill_w':
		{
			'1': 'Drunken Rage',
			'2': 'Drunken Rage 2',
			'img': 'assets/images/champions/Gragas/Drunken Rage.png',
			'tooltip': 'Gragas guzzles down his brew, taking 10/12/14/16/18% (+?%) reduced damage for 2.5 seconds.<br><br>After finishing his drink, his next basic attack deals magic damage to nearby enemies equal to 20/50/80/110/140 (+0.6) plus 7% of their max Health (max 300 vs monsters).'
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 64,
			'ad_lvl': 3.5,
			'apen': 0,
			'apen%': 0,
			'arm_base': 35,
			'arm_lvl': 3.6,
			'as_base': 0.675,
			'as_lvl': 2.05,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.050000000745058,
			'critdmg': 0,
			'gameplay_radius': 80,
			'heal_shield': 0,
			'hp5_base': 5.5,
			'hp5_lvl': 0.5,
			'hp_base': 600,
			'hp_lvl': 95,
			'ls': 0,
			'mp5_base': 6,
			'mp5_lvl': 0.8,
			'mp_base': 400,
			'mp_lvl': 47,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 330,
			'ms_base': 330,
			'pathing_radius': 50,
			'range': 125,
			'selection_radius': 155,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 90,
		'title': 'the Rabble Rouser',
		'toughness': 3,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'apiname': 'graves',
		'attack': 8,
		'be': 4800,
		'changes': 'V10.13',
		'control': 1,
		'damage': 3,
		'date': '2011-10-19',
		'ddragon_apiname': 'Graves',
		'defense': 5,
		'difficulty': 2,
		'fullname': 'Malcolm Graves',
		'herotype': 'Marksman',
		'id': 104,
		'img': 'assets/images/champions/Graves/Graves.png',
		'index': 36,
		'magic': 3,
		'mobility': 2,
		'name': 'Graves',
		'patch': 'V1.0.0.127',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Quickdraw',
			'img': 'assets/images/champions/Graves/Quickdraw.png',
			'tooltip': 'Dashes in a direction, reloading one shell. Graves gains True Grit for 4 seconds. If Graves dashes towards an enemy champion, gain two stacks of True Grit instead. <br><br>Basic attack hits lower the cooldown of Quickdraw by 0.5 seconds. Damage against non-minions also refreshes True Grit.<br><br>True Grit grants 8/11/14/17/20 Armor (stacks up to ? times).'
		},
		'skill_i':
		{
			'1': 'New Destiny',
			'img': 'assets/images/champions/Graves/New Destiny.png',
			'tooltip': "Graves's shotgun holds two shells. After firing them he must reload. Each attack fires several bullets in a cone. Hitting an enemy with multiple bullets does bonus damage. These bullets cannot pass through units."
		},
		'skill_q':
		{
			'1': 'End of the Line',
			'img': 'assets/images/champions/Graves/End of the Line.png',
			'tooltip': 'Fires a powder round that deals ? physical damage to enemies in a line.<br><br>After 2 seconds or ? seconds on collision with terrain, the round detonates, dealing ? physical damage to all nearby enemies.'
		},
		'skill_r':
		{
			'1': 'Collateral Damage',
			'img': 'assets/images/champions/Graves/Collateral Damage.png',
			'tooltip': 'Fires an explosive shell with such force that it knocks Graves back. The shell deals ? physical damage to the first enemy hit. After hitting an enemy Champion or reaching the end of its range, the shell explodes, dealing ? physical damage in a cone.'
		},
		'skill_w':
		{
			'1': 'Smoke Screen',
			'img': 'assets/images/champions/Graves/Smoke Screen.png',
			'tooltip': 'Creates a cloud of Black Smoke lasting 4 seconds. Enemies inside Black Smoke cannot see out.<br><br>Enemies caught in the initial impact are dealt 60/110/160/210/260 (+0.6) magic damage and have their movement speed reduced by 50% for 0.5 seconds.'
		},
		'stats':
		{
			'ad_base': 68,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'arm_base': 33,
			'arm_lvl': 3.4,
			'as_base': 0.475,
			'as_lvl': 2.6,
			'as_ratio': 0.490000009536743,
			'attack_delay_offset': -0.294999986886978,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 8,
			'hp5_lvl': 0.7,
			'hp_base': 555,
			'hp_lvl': 92,
			'ls': 0,
			'mp5_base': 8,
			'mp5_lvl': 0.7,
			'mp_base': 325,
			'mp_lvl': 40,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32,
			'mr_lvl': 1.25,
			'ms': 340,
			'ms_base': 340,
			'pathing_radius': 10,
			'range': 425,
			'selection_radius': 110,
			'spell_vamp': 0,
			'tenacity': 0,
			'windup_modifier': 0.100000001490116
		},
		'style': 20,
		'title': 'the Outlaw',
		'toughness': 2,
		'utility': 2
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Tank',
		'apiname': 'hecarim',
		'attack': 8,
		'be': 4800,
		'changes': 'V10.12',
		'control': 2,
		'damage': 2,
		'date': '2012-04-18',
		'ddragon_apiname': 'Hecarim',
		'defense': 6,
		'difficulty': 2,
		'herotype': 'Fighter',
		'id': 120,
		'img': 'assets/images/champions/Hecarim/Hecarim.png',
		'index': 37,
		'magic': 4,
		'mobility': 2,
		'name': 'Hecarim',
		'patch': 'V1.0.0.138',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Devastating Charge',
			'img': 'assets/images/champions/Hecarim/Devastating Charge.png',
			'tooltip': "Hecarim gains increasing Movement Speed and can move through units for 4 seconds. His next attack knocks the target back dealing 45/75/105/135/165 (+0.5) to 90/150/210/270/330 (+1) physical damage based on how far Hecarim has traveled during Devastating Charge (knockback distance also scales).<br><br>Devastating Charge's remaining duration pauses during Onslaught of Shadows."
		},
		'skill_i':
		{
			'1': 'Warpath',
			'img': 'assets/images/champions/Hecarim/Warpath.png',
			'tooltip': 'Hecarim gains Attack Damage equal to a percentage of his bonus Movement Speed.'
		},
		'skill_q':
		{
			'1': 'Rampage',
			'img': 'assets/images/champions/Hecarim/Rampage.png',
			'tooltip': 'Hecarim cleaves nearby enemies for ? (+0.6) physical damage. (?% damage to minions)<br><br>If Hecarim damages at least one enemy with this attack he gains a stack of Rampage, reducing the base cooldown of this skill by ? second and increasing its damage by ?% for a short duration. This effect can stack up to ? times.'
		},
		'skill_r':
		{
			'1': 'Onslaught of Shadows',
			'img': 'assets/images/champions/Hecarim/Onslaught of Shadows.png',
			'tooltip': 'Hecarim summons spectral riders and charges forward, dealing ? (+1) magic damage to enemies hit. <br><br>Hecarim releases a shockwave at the end of his charge, causing nearby enemies to flee from him for ? to ? seconds (increases by charge distance).<br><br>Hecarim himself will only move to the targeted location. The riders will always move the full distance.'
		},
		'skill_w':
		{
			'1': 'Spirit of Dread',
			'img': 'assets/images/champions/Hecarim/Spirit of Dread.png',
			'tooltip': 'Hecarim deals 80/120/160/200/240 (+0.8) magic damage over 4 seconds to all nearby enemies. Hecarim is healed for 30% of the damage these enemies take from any source.<br><br>Hecarim cannot heal more than 90/120/150/180/210 Health from minions or monsters.'
		},
		'stats':
		{
			'ad_base': 66,
			'ad_lvl': 3.2,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_taken': 0.9,
			'arm_base': 36,
			'arm_lvl': 4,
			'as_base': 0.67,
			'as_lvl': 2.5,
			'as_ratio': 0.6700000166893,
			'attack_delay_offset': -0.050000000745058,
			'critdmg': 0,
			'gameplay_radius': 80,
			'heal_shield': 0,
			'hp5_base': 7,
			'hp5_lvl': 0.75,
			'hp_base': 580,
			'hp_lvl': 90,
			'ls': 0,
			'mp5_base': 6.5,
			'mp5_lvl': 0.6,
			'mp_base': 277.2,
			'mp_lvl': 40,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 345,
			'ms_base': 345,
			'pathing_radius': 50,
			'range': 175,
			'selection_radius': 140,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 65,
		'title': 'the Shadow of War',
		'toughness': 2,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Support',
		'apiname': 'heimerdinger',
		'attack': 2,
		'be': 3150,
		'changes': 'V10.15',
		'control': 2,
		'damage': 3,
		'date': '2009-10-10',
		'ddragon_apiname': 'Heimerdinger',
		'defense': 6,
		'difficulty': 2,
		'fullname': 'Cecil B. Heimerdinger',
		'herotype': 'Mage',
		'id': 74,
		'img': 'assets/images/champions/Heimerdinger/Heimerdinger.png',
		'index': 38,
		'magic': 8,
		'mobility': 1,
		'name': 'Heimerdinger',
		'patch': 'V0.9.25.34',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 790,
		'skill_e':
		{
			'1': 'CH-2 Electron Storm Grenade',
			'2': 'CH-3X Lightning Grenade',
			'img': 'assets/images/champions/Heimerdinger/CH-2 Electron Storm Grenade.png',
			'tooltip': 'Hurls a grenade that deals ? magic damage to enemies and slows their Movement Speed by ?% for ? seconds. Enemies in the center of the blast are also stunned for ? seconds.<br><br>Hitting a champion fully charges nearby turret beams.'
		},
		'skill_i':
		{
			'1': 'Hextech Affinity',
			'img': 'assets/images/champions/Heimerdinger/Hextech Affinity.png',
			'tooltip': 'Gain Movement Speed while near allied towers and turrets deployed by Heimerdinger.'
		},
		'skill_q':
		{
			'1': 'H-28G Evolution Turret',
			'2': 'H-28Q Apex Turret',
			'img': 'assets/images/champions/Heimerdinger/H-28G Evolution Turret.png',
			'tooltip': "Places a Turret. Turret attacks prioritize Heimerdinger's targets and enemies attacking Heimerdinger. Heimerdinger generates a Turret Kit every ?s and can hold ? Kits at once."
		},
		'skill_r':
		{
			'1': 'UPGRADE!!!',
			'img': 'assets/images/champions/Heimerdinger/UPGRADE!!!.png',
			'tooltip': "Makes Heimerdinger's next ability free and gives it bonus effects. Reactivate to cancel. <br><br>H-28Q Apex Turret: Places a Turret for 8 seconds that deals ? magic damage with its cannon and ? magic damage with its beam. It has splash damage, immunity to disables, its attacks slow by 25% for 2 seconds and it doesn't count toward the Turret limit. <br><br>Hextech Rocket Swarm: Fires 4 waves of rockets that each deal ? magic damage. Champions and Monsters hit by multiple rockets take reduced damage, max ?. <br><br>CH-3X Lightning Grenade: Throws a bouncing grenade that discharges three times, dealing ? magic damage. Both the stun and slow areas are larger."
		},
		'skill_w':
		{
			'1': 'Hextech Micro-Rockets',
			'2': 'Hextech Rocket Swarm',
			'img': 'assets/images/champions/Heimerdinger/Hextech Micro-Rockets.png',
			'tooltip': 'Unleashes a barrage of ? rockets that converge towards the cursor and fan out past it. Rockets deal ? magic damage. Additional rocket hits deal reduced damage:<br><br>Champions and Monsters: ? magic damage, max ? total damage<br>Minions: ? magic damage<br><br>Rocket hits against champions charge nearby turret beam attacks.'
		},
		'stats':
		{
			'acquisition_radius': 550,
			'ad_base': 55.536,
			'ad_lvl': 2.7,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 0.94,
			'aram_dmg_taken': 1.06,
			'arm_base': 19.04,
			'arm_lvl': 3,
			'as_base': 0.625,
			'as_lvl': 1.36,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.0992187485098838,
			'critdmg': 0,
			'gameplay_radius': 55,
			'heal_shield': 0,
			'hp5_base': 7,
			'hp5_lvl': 0.55,
			'hp_base': 488,
			'hp_lvl': 87,
			'ls': 0,
			'mp5_base': 8,
			'mp5_lvl': 0.8,
			'mp_base': 385,
			'mp_lvl': 20,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 340,
			'ms_base': 340,
			'pathing_radius': 30.5443992614746,
			'range': 550,
			'selection_radius': 100,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 0.95
		},
		'style': 100,
		'title': 'the Revered Inventor',
		'toughness': 1,
		'utility': 2
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Tank',
		'apiname': 'illaoi',
		'attack': 8,
		'be': 6300,
		'changes': 'V10.8',
		'control': 1,
		'damage': 3,
		'date': '2015-11-24',
		'ddragon_apiname': 'Illaoi',
		'defense': 6,
		'difficulty': 2,
		'herotype': 'Fighter',
		'id': 420,
		'img': 'assets/images/champions/Illaoi/Illaoi.png',
		'index': 39,
		'magic': 3,
		'mobility': 1,
		'name': 'Illaoi',
		'patch': 'V5.23',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 975,
		'skill_e':
		{
			'1': 'Test of Spirit',
			'2': 'Vessel',
			'img': 'assets/images/champions/Illaoi/Test of Spirit.png',
			'tooltip': 'Illaoi pulls the spirit from an enemy champion for 7 seconds. The spirit can be attacked, with 25/30/35/40/45% (+?%) of the damage taken echoing to its owner.<br><br>If the spirit dies or the target leaves its range, the target becomes a Vessel for 10 seconds and is slowed by 80% for 1.5 seconds. Vessels spawn Tentacles every ? seconds if no other Tentacles are nearby.<br><br>Tentacles will automatically Slam at spirits and Vessels once every ? seconds.'
		},
		'skill_i':
		{
			'1': 'Prophet of an Elder God',
			'img': 'assets/images/champions/Illaoi/Prophet of an Elder God.png',
			'tooltip': "Illaoi and the Vessels she creates spawn Tentacles on nearby impassible terrain. Tentacles swing at spirits, Vessels, and victims of Illaoi's Harsh lesson. Tentacles deal physical damage to enemies hit, and will heal Illaoi if they damage a champion."
		},
		'skill_q':
		{
			'1': 'Tentacle Smash',
			'img': 'assets/images/champions/Illaoi/Tentacle Smash.png',
			'tooltip': 'Passive: Slam damage is increased by 10/15/20/25/30% (?).<br><br>Active: Illaoi swings her idol, causing a Tentacle to Slam forward.'
		},
		'skill_r':
		{
			'1': 'Leap of Faith',
			'img': 'assets/images/champions/Illaoi/Leap of Faith.png',
			'tooltip': "Illaoi smashes her idol into the ground, dealing ? physical damage to nearby enemies and spawning a Tentacle for each enemy champion hit.<br><br>For the next ? seconds Tentacles are untargetable and will Slam 50% faster, and Harsh Lesson has a 2 second cooldown.<br><br>'There are kind and gentle gods. Mine isn't one of those.'"
		},
		'skill_w':
		{
			'1': 'Harsh Lesson',
			'img': 'assets/images/champions/Illaoi/Harsh Lesson.png',
			'tooltip': "Illaoi leaps at her target on her next basic attack, dealing bonus physical damage equal to ?% of their maximum health [3/3.5/4/4.5/5% + ?% per 100 attack damage].<br><br>When she strikes, nearby Tentacles will Slam at the target.<br><br>Harsh Lesson's bonus damage does a minimum of ? damage. Against monsters the damage is capped at 300."
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 68,
			'ad_lvl': 5,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 0.95,
			'aram_dmg_taken': 1.05,
			'arm_base': 35,
			'arm_lvl': 3.8,
			'as_base': 0.571,
			'as_lvl': 2.5,
			'as_ratio': 0.570999979972839,
			'attack_cast_time': 0.375,
			'attack_total_time': 1.75,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 9.5,
			'hp5_lvl': 0.8,
			'hp_base': 585.6,
			'hp_lvl': 95,
			'ls': 0,
			'mp5_base': 7.5,
			'mp5_lvl': 0.75,
			'mp_base': 300,
			'mp_lvl': 40,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 340,
			'ms_base': 340,
			'nb_dmg_dealt': 0.95,
			'ofa_dmg_dealt': 0.97,
			'pathing_radius': 35,
			'range': 125,
			'selection_radius': 100,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.05,
			'urf_dmg_taken': 0.9
		},
		'style': 65,
		'title': 'the Kraken Priestess',
		'toughness': 2,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Assassin',
		'apiname': 'irelia',
		'attack': 7,
		'be': 4800,
		'changes': 'V10.15',
		'control': 2,
		'damage': 2,
		'date': '2010-11-16',
		'ddragon_apiname': 'Irelia',
		'defense': 4,
		'difficulty': 2,
		'fullname': 'Xan Irelia',
		'herotype': 'Fighter',
		'id': 39,
		'img': 'assets/images/champions/Irelia/Irelia.png',
		'index': 40,
		'magic': 5,
		'mobility': 3,
		'name': 'Irelia',
		'patch': 'V1.0.0.105',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Flawless Duet',
			'img': 'assets/images/champions/Irelia/Flawless Duet.png',
			'tooltip': 'Irelia readies 2 blades that will fly towards each other once placed, dealing ? magic damage and stunning for ? second(s).<br><br>Champions and large monsters are Marked for ? seconds.'
		},
		'skill_i':
		{
			'1': 'Ionian Fervor',
			'img': 'assets/images/champions/Irelia/Ionian Fervor.png',
			'tooltip': 'When Irelia strikes enemies with spells she gains stacking bonus Attack Speed. At maximum stacks she also gains bonus damage on hit.'
		},
		'skill_q':
		{
			'1': 'Bladesurge',
			'img': 'assets/images/champions/Irelia/Bladesurge.png',
			'tooltip': "Irelia dashes to an enemy, dealing ? physical damage, applying on-hit effects and healing for ? health.<br><br>Bladesurge's cooldown is reset if the target was Marked or dies to Bladesurge.<br><br>Bladesurge deals ? damage to minions."
		},
		'skill_r':
		{
			'1': "Vanguard's Edge",
			'img': "assets/images/champions/Irelia/Vanguard's Edge.png",
			'tooltip': 'Irelia launches a storm of blades that explode outward upon hitting a champion. The blades deal ? magic damage and Mark champions and large monsters for ? seconds.<br><br>Irelia then forms the blades into a wall for ? seconds. Passing through the wall deals ? magic damage and slows by ?% for ? seconds.'
		},
		'skill_w':
		{
			'1': 'Defiant Dance',
			'img': 'assets/images/champions/Irelia/Defiant Dance.png',
			'tooltip': 'First Cast: Irelia aligns her blades into a defensive formation, gaining ?% physical damage reduction, but she is unable to act while holding her formation.<br><br>Second Cast: Irelia swipes her blades, dealing ? physical damage. Damage increases with charge time, up to ? after ? seconds.<br><br>Defiant Dance cannot be interrupted.'
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 63,
			'ad_lvl': 4,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 1.05,
			'aram_dmg_taken': 0.95,
			'arm_base': 36,
			'arm_lvl': 3,
			'as_base': 0.656,
			'as_lvl': 2.5,
			'as_ratio': 0.656000018119812,
			'attack_cast_time': 0.300000011920928,
			'attack_total_time': 1.52499997615814,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 8.5,
			'hp5_lvl': 0.85,
			'hp_base': 580,
			'hp_lvl': 95,
			'ls': 0,
			'mp5_base': 8,
			'mp5_lvl': 0.8,
			'mp_base': 350,
			'mp_lvl': 30,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32,
			'mr_lvl': 1.25,
			'ms': 335,
			'ms_base': 335,
			'pathing_radius': 35,
			'range': 200,
			'selection_radius': 100,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.05,
			'urf_dmg_taken': 0.85
		},
		'style': 30,
		'title': 'the Blade Dancer',
		'toughness': 2,
		'utility': 2
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Mage',
		'apiname': 'ivern',
		'attack': 3,
		'be': 6300,
		'changes': 'V10.15',
		'control': 3,
		'damage': 1,
		'date': '2016-10-05',
		'ddragon_apiname': 'Ivern',
		'defense': 5,
		'difficulty': 3,
		'fullname': 'Ivern Bramblefoot',
		'herotype': 'Support',
		'id': 427,
		'img': 'assets/images/champions/Ivern/Ivern.png',
		'index': 41,
		'magic': 7,
		'mobility': 2,
		'name': 'Ivern',
		'patch': 'V6.20',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 975,
		'skill_e':
		{
			'1': 'Triggerseed',
			'img': 'assets/images/champions/Ivern/Triggerseed.png',
			'tooltip': 'Ivern shields an ally, absorbing up to 80/115/150/185/220 (+?) damage. After 2 seconds, the shield bursts dealing 70/95/120/145/170 (+?) magic damage and slowing enemies by 40/45/50/55/60% for 2 seconds.<br><br>Can also be cast on Daisy.'
		},
		'skill_i':
		{
			'1': 'Friend of the Forest',
			'img': 'assets/images/champions/Ivern/Friend of the Forest.png',
			'tooltip': 'Ivern cannot attack or be attacked by non-epic monsters. Ivern can create magical groves on jungle camps which grow over time. When the grove is fully grown, Ivern may free the monsters to receive gold and experience. After level 5 Ivern can share jungle buffs with allies.'
		},
		'skill_q':
		{
			'1': 'Rootcaller',
			'img': 'assets/images/champions/Ivern/Rootcaller.png',
			'tooltip': 'Ivern conjures a vine dealing 80/125/170/215/260 (+?) magic damage and rooting the first enemy hit for 1.2/1.4/1.6/1.8/2 second(s). Allies can click on rooted enemies to dash into attack range.'
		},
		'skill_r':
		{
			'1': 'Daisy!',
			'2': 'Daisy, wait!',
			'img': 'assets/images/champions/Ivern/Daisy!.png',
			'tooltip': 'Ivern summons his sentinel friend Daisy for ? seconds. If Daisy attacks the same champion three times in a row, she will create a shockwave knocking enemies up for 1 second (3s cooldown). Daisy has:Health: ?Armor and Magic Resist: ?Attack Damage: ?<br>Recast to manually issue orders to Daisy.'
		},
		'skill_w':
		{
			'1': 'Brushmaker',
			'img': 'assets/images/champions/Ivern/Brushmaker.png',
			'tooltip': "Passive: In brush, Ivern's attacks deal 30/37.5/45/52.5/60 (+?) bonus magic damage.<br><br>Active: Ivern grows a patch of brush for 30 seconds. For 3 seconds the area in and around the brush is revealed."
		},
		'stats':
		{
			'ad_base': 50,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'arm_base': 27,
			'arm_lvl': 3.5,
			'as_base': 0.644,
			'as_lvl': 3.4,
			'as_ratio': 0.643999993801116,
			'attack_delay_offset': -0.0700000002980232,
			'critdmg': 0,
			'gameplay_radius': 70,
			'heal_shield': 0,
			'hp5_base': 7,
			'hp5_lvl': 0.85,
			'hp_base': 585,
			'hp_lvl': 95,
			'ls': 0,
			'mp5_base': 6,
			'mp5_lvl': 0.75,
			'mp_base': 450,
			'mp_lvl': 60,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 330,
			'ms_base': 330,
			'ofa_dmg_dealt': 1.03,
			'ofa_dmg_taken': 0.97,
			'pathing_radius': 40,
			'range': 475,
			'selection_radius': 140,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 10,
		'title': 'the Green Father',
		'toughness': 1,
		'utility': 3
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Mage',
		'apiname': 'janna',
		'attack': 3,
		'be': 1350,
		'changes': 'V10.11',
		'control': 3,
		'damage': 1,
		'date': '2009-09-02',
		'ddragon_apiname': 'Janna',
		'defense': 5,
		'difficulty': 1,
		'fullname': 'Janna Windforce',
		'herotype': 'Support',
		'id': 40,
		'img': 'assets/images/champions/Janna/Janna.png',
		'index': 42,
		'magic': 7,
		'mobility': 1,
		'name': 'Janna',
		'patch': 'V0.9.22.16',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 585,
		'skill_e':
		{
			'1': 'Eye of the Storm',
			'img': 'assets/images/champions/Janna/Eye of the Storm.png',
			'tooltip': "Grants an allied champion or turret a shield that decays over 5 seconds. The shield absorbs up to 80/115/150/185/220 (+0.7) damage and grants 10/17.5/25/32.5/40 (+0.1) attack damage until it is fully depleted.<br><br>Each Janna ability that slows or knocks an enemy champion airborne will reduce Eye of the Storm's cooldown by ?%."
		},
		'skill_i':
		{
			'1': 'Tailwind',
			'img': 'assets/images/champions/Janna/Tailwind.png',
			'tooltip': "Janna passively gains bonus Movement Speed, and nearby allied champions gain this bonus when moving toward her.<br><br>Additionally, Janna's basic attacks cause additional magic damage based on her bonus Movement Speed."
		},
		'skill_q':
		{
			'1': 'Howling Gale',
			'img': 'assets/images/champions/Janna/Howling Gale.png',
			'tooltip': 'Summons a whirlwind, which deals 60/85/110/135/160 (+0.35) magic damage to enemies in its path and knocks them into the air for 0.5 seconds.<br><br>The whirlwind can be charged up to 3 seconds. For each second charged, it:Deals 15/20/25/30/35 (+0.1) bonus damageKnocks up for an additional 0.25 secondsTravels 25% furtherHowling Gale always reaches its destination in 1.5 seconds.<br><br>Activate again to release the whirlwind early.'
		},
		'skill_r':
		{
			'1': 'Monsoon',
			'img': 'assets/images/champions/Janna/Monsoon.png',
			'tooltip': 'Summons forth the might of the wind to knock surrounding enemies back and restores 100/150/200 (+0.5) Health to nearby allies each second for 3 seconds.'
		},
		'skill_w':
		{
			'1': 'Zephyr',
			'img': 'assets/images/champions/Janna/Zephyr.png',
			'tooltip': 'Passive: While Zephyr is not on cooldown, Janna gains 6/7/8/9/10% (+0.02%) Movement Speed and can move through units.<br><br>Active: Deals 55/85/115/145/175 (+0.5) (+?) magic damage to an enemy and slows their Movement Speed by 24/28/32/36/40% (+0.06%) for 2 seconds.'
		},
		'stats':
		{
			'acquisition_radius': 550,
			'ad_base': 46,
			'ad_lvl': 1.5,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_taken': 1.1,
			'aram_healing': 0.9,
			'aram_shielding': 0.9,
			'arm_base': 28,
			'arm_lvl': 3.8,
			'as_base': 0.625,
			'as_lvl': 2.95,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.0799999982118606,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 5.5,
			'hp5_lvl': 0.55,
			'hp_base': 500,
			'hp_lvl': 70,
			'ls': 0,
			'mp5_base': 11.5,
			'mp5_lvl': 0.4,
			'mp_base': 350,
			'mp_lvl': 64,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 315,
			'ms_base': 315,
			'pathing_radius': 35,
			'range': 550,
			'selection_radius': 125,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 100,
		'title': "the Storm's Fury",
		'toughness': 1,
		'utility': 3
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Fighter',
		'apiname': 'jarvaniv',
		'attack': 6,
		'be': 4800,
		'changes': 'V10.6',
		'control': 2,
		'damage': 2,
		'date': '2011-03-01',
		'ddragon_apiname': 'JarvanIV',
		'defense': 8,
		'difficulty': 1,
		'fullname': 'Jarvan Lightshield IV',
		'herotype': 'Tank',
		'id': 59,
		'img': 'assets/images/champions/Jarvan IV/Jarvan IV.png',
		'index': 43,
		'magic': 3,
		'mobility': 2,
		'name': 'Jarvan IV',
		'nickname': 'J4, Jman',
		'patch': 'V1.0.0.112',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Demacian Standard',
			'img': 'assets/images/champions/Jarvan IV/Demacian Standard.png',
			'tooltip': 'Passive: Gains 20/22.5/25/27.5/30% Attack Speed.<br><br>Active: Throws a Demacian Standard to a nearby area dealing 80/120/160/200/240 (+0.8) magic damage to enemies. The Standard lasts for 8 seconds and grants surrounding allied champions 20/22.5/25/27.5/30% Attack Speed.'
		},
		'skill_i':
		{
			'1': 'Martial Cadence',
			'img': 'assets/images/champions/Jarvan IV/Martial Cadence.png',
			'tooltip': "Jarvan's first basic attack on an enemy deals bonus physical damage based on their current Health. This effect cannot occur again on the same enemy for a few seconds."
		},
		'skill_q':
		{
			'1': 'Dragon Strike',
			'img': 'assets/images/champions/Jarvan IV/Dragon Strike.png',
			'tooltip': "Extends Jarvan IV's lance dealing 80/120/160/200/240 (+1.2) physical damage and lowering the Armor of enemies hit by 10/14/18/22/26% for 3 seconds.<br><br>If the lance contacts Demacian Standard it will pull Jarvan IV to its location, knocking up enemies in his path. This effect can be triggered even while immobilized."
		},
		'skill_r':
		{
			'1': 'Cataclysm',
			'img': 'assets/images/champions/Jarvan IV/Cataclysm.png',
			'tooltip': 'Heroically leaps to an enemy Champion dealing ? physical damage to nearby enemies and creating an arena of impassable terrain around them for ? seconds.<br><br>Activate again to collapse the terrain.'
		},
		'skill_w':
		{
			'1': 'Golden Aegis',
			'img': 'assets/images/champions/Jarvan IV/Golden Aegis.png',
			'tooltip': 'Grants a shield that absorbs 60/85/110/135/160 (+? [1.5% max Health] for each nearby enemy champion) damage for 5 seconds, and slows surrounding enemies by 15/20/25/30/35% for 2 seconds.'
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 64,
			'ad_lvl': 3.4,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_taken': 0.95,
			'arm_base': 34,
			'arm_lvl': 3.6,
			'as_base': 0.658,
			'as_lvl': 2.5,
			'as_ratio': 0.657999992370605,
			'attack_delay_offset': -0.124559998512268,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 8,
			'hp5_lvl': 0.7,
			'hp_base': 570,
			'hp_lvl': 90,
			'ls': 0,
			'mp5_base': 6.5,
			'mp5_lvl': 0.45,
			'mp_base': 300,
			'mp_lvl': 40,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 340,
			'ms_base': 340,
			'pathing_radius': 35,
			'range': 175,
			'selection_radius': 125,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 55,
		'title': 'the Exemplar of Demacia',
		'toughness': 2,
		'utility': 2
	},
	{
		'adaptivetype': 'Mixed,Physical',
		'alttype': 'Assassin',
		'apiname': 'jax',
		'attack': 7,
		'be': 1350,
		'changes': 'V10.13',
		'control': 2,
		'damage': 3,
		'date': '2009-02-21',
		'ddragon_apiname': 'Jax',
		'defense': 5,
		'difficulty': 1,
		'fullname': 'Saijax Cail-Rynx Kohari Icath�un',
		'herotype': 'Fighter',
		'id': 24,
		'img': 'assets/images/champions/Jax/Jax.png',
		'index': 44,
		'magic': 7,
		'mobility': 2,
		'name': 'Jax',
		'patch': 'Alpha Week 2',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 585,
		'skill_e':
		{
			'1': 'Counter Strike',
			'img': 'assets/images/champions/Jax/Counter Strike.png',
			'tooltip': 'Jax enters a defensive stance for up to 2 seconds, dodging all incoming basic attacks and taking 25% less damage from area of effect abilities.<br><br>After 2 seconds or if activated again, Jax stuns surrounding enemies for 1 second and deals 55/80/105/130/155 (+0.5) physical damage to them.<br><br>Counter Strike deals 20% more damage for each attack Jax dodged (max: 100% increased damage).'
		},
		'skill_i':
		{
			'1': 'Relentless Assault',
			'img': 'assets/images/champions/Jax/Relentless Assault.png',
			'tooltip': "Jax's consecutive basic attacks continuously increase his Attack Speed."
		},
		'skill_q':
		{
			'1': 'Leap Strike',
			'img': 'assets/images/champions/Jax/Leap Strike.png',
			'tooltip': 'Jax leaps to target unit, dealing 65/105/145/185/225 (+1) (+0.6) physical damage if it is an enemy.'
		},
		'skill_r':
		{
			'1': "Grandmaster's Might",
			'img': "assets/images/champions/Jax/Grandmaster's Might.png",
			'tooltip': 'Passive: Every third consecutive strike Jax deals ? additional magic damage.<br><br>Active: Jax strengthens his resolve, granting him ? Armor and ? Magic Resist for ? seconds.'
		},
		'skill_w':
		{
			'1': 'Empower',
			'img': 'assets/images/champions/Jax/Empower.png',
			'tooltip': 'Jax charges his weapon with energy, causing his next basic attack or Leap Strike to deal an additional 40/75/110/145/180 (+0.6) magic damage.'
		},
		'stats':
		{
			'acquisition_radius': 400,
			'ad_base': 68,
			'ad_lvl': 3.375,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_taken': 0.95,
			'arm_base': 36,
			'arm_lvl': 3,
			'as_base': 0.638,
			'as_lvl': 3.4,
			'as_ratio': 0.638000011444091,
			'attack_delay_offset': -0.0918904393911361,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 8.5,
			'hp5_lvl': 0.55,
			'hp_base': 592.8,
			'hp_lvl': 85,
			'ls': 0,
			'mp5_base': 7.576,
			'mp5_lvl': 0.7,
			'mp_base': 338.8,
			'mp_lvl': 32,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 350,
			'ms_base': 350,
			'nb_dmg_dealt': 0.95,
			'pathing_radius': 35,
			'range': 125,
			'selection_radius': 120,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 0.95,
			'urf_dmg_taken': 1.05
		},
		'style': 10,
		'title': 'Grandmaster at Arms',
		'toughness': 2,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Marksman',
		'apiname': 'jayce',
		'attack': 8,
		'be': 4800,
		'changes': 'V10.4',
		'control': 1,
		'damage': 3,
		'date': '2012-07-07',
		'ddragon_apiname': 'Jayce',
		'defense': 4,
		'difficulty': 2,
		'fullname': 'Jayce Giopara',
		'herotype': 'Fighter',
		'id': 126,
		'img': 'assets/images/champions/Jayce/Jayce.png',
		'index': 45,
		'magic': 3,
		'mobility': 2,
		'name': 'Jayce',
		'patch': 'V1.0.0.142',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Thundering Blow',
			'2': 'Acceleration Gate',
			'img': 'assets/images/champions/Jayce/Thundering Blow.png',
			'tooltip': "Deals ?% of the target's maximum health (+?) as magic damage and knocks them back a short distance. (? Maximum Damage against monsters)"
		},
		'skill_i':
		{
			'1': 'Hextech Capacitor',
			'img': 'assets/images/champions/Jayce/Hextech Capacitor.png',
			'tooltip': 'After casting Transform Jayce gains 40 Movement Speed and can move through units for the next 1.25 seconds.'
		},
		'skill_q':
		{
			'1': 'To the Skies!',
			'2': 'Shock Blast',
			'img': 'assets/images/champions/Jayce/To the Skies!.png',
			'tooltip': 'Leaps to an enemy dealing ? physical damage to nearby enemies and slowing them by ?% for ? seconds.'
		},
		'skill_r':
		{
			'1': 'Transform Mercury Cannon',
			'2': 'Transform Mercury Hammer',
			'img': 'assets/images/champions/Jayce/Transform Mercury Cannon.png',
			'tooltip': "Active: Transforms the Mercury Hammer into the Mercury Cannon gaining new abilities and ranged attacks.<br><br>The next attack in Cannon Stance reduces the target's Armor and Magic Resist by ? for ? seconds."
		},
		'skill_w':
		{
			'1': 'Lightning Field',
			'2': 'Hyper Charge',
			'img': 'assets/images/champions/Jayce/Lightning Field.png',
			'tooltip': 'Passive: Gains ? Mana per strike while in Hammer Stance.<br><br>Active: Creates an electric aura dealing ? magic damage over ? seconds to nearby enemies.'
		},
		'stats':
		{
			'acquisition_radius': 200,
			'ad_base': 54,
			'ad_lvl': 4.25,
			'apen': 0,
			'apen%': 0,
			'arm_base': 27,
			'arm_lvl': 3.5,
			'as_base': 0.658,
			'as_lvl': 3,
			'as_ratio': 0.657999992370605,
			'attack_delay_offset': -0.20499999821186,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 6,
			'hp5_lvl': 0.6,
			'hp_base': 560,
			'hp_lvl': 90,
			'ls': 0,
			'mp5_base': 6,
			'mp5_lvl': 0.8,
			'mp_base': 375,
			'mp_lvl': 45,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 335,
			'ms_base': 335,
			'pathing_radius': 35,
			'range': 125,
			'selection_radius': 75,
			'spell_vamp': 0,
			'tenacity': 0,
			'windup_modifier': 0.00499999988824129
		},
		'style': 45,
		'title': 'the Defender of Tomorrow',
		'toughness': 1,
		'utility': 2
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Mage',
		'apiname': 'jhin',
		'attack': 10,
		'be': 6300,
		'changes': 'V10.15',
		'control': 2,
		'damage': 3,
		'date': '2016-02-01',
		'ddragon_apiname': 'Jhin',
		'defense': 2,
		'difficulty': 2,
		'fullname': 'Khada Jhin',
		'herotype': 'Marksman',
		'id': 202,
		'img': 'assets/images/champions/Jhin/Jhin.png',
		'index': 46,
		'magic': 6,
		'mobility': 1,
		'name': 'Jhin',
		'patch': 'V6.2',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 975,
		'skill_e':
		{
			'1': 'Captive Audience',
			'img': 'assets/images/champions/Jhin/Captive Audience.png',
			'tooltip': 'Passive: Champions Jhin kills will create and detonate a Lotus Trap at their location.<br><br>Active: Jhin places an invisible Lotus Trap that creates a zone that Slows by ?% when stepped on by an enemy. After ? seconds, the trap detonates, dealing ? magic damage.<br><br>Traps last for ? minutes. This ability has 2 charges.'
		},
		'skill_i':
		{
			'1': 'Whisper',
			'img': 'assets/images/champions/Jhin/Whisper.png',
			'tooltip': "Jhin's hand cannon, Whisper, is a precise instrument designed to deal superior damage. It fires at a fixed rate and carries only four shots. Jhin imbues the final bullet with dark magics to critically strike and deal bonus execute damage. Whenever Whisper crits, it inspires Jhin with a burst of movement speed."
		},
		'skill_q':
		{
			'1': 'Dancing Grenade',
			'img': 'assets/images/champions/Jhin/Dancing Grenade.png',
			'tooltip': 'Jhin launches a cartridge that deals ? physical damage before bouncing to a nearby enemy that has not been hit yet.<br><br>The cartridge can hit a maximum of ? times. Enemies that die shortly after being hit increase the damage of subsequent hits by ?%.'
		},
		'skill_r':
		{
			'1': 'Curtain Call',
			'2': 'Curtain Call 2',
			'3': 'Curtain Call 3',
			'img': 'assets/images/champions/Jhin/Curtain Call.png',
			'tooltip': 'Jhin sets up and channels, enabling him to fire 4 super shots, each dealing between ? and ? physical damage to the first champion hit based on their percentage missing health and Slowing them by ?% for ? seconds. The fourth shot critically strikes for ?% damage.'
		},
		'skill_w':
		{
			'1': 'Deadly Flourish',
			'2': 'Caught Out',
			'img': 'assets/images/champions/Jhin/Deadly Flourish.png',
			'tooltip': "Jhin fires a long range shot dealing ? physical damage to the first champion hit, and ? damage to other enemies along the way.<br><br>If this skill strikes a champion that has been damaged by an allied champion within the last ? seconds, it will Root them for ? second(s) and grant Jhin Whisper's Move Speed."
		},
		'stats':
		{
			'acquisition_radius': 800,
			'ad_base': 59,
			'ad_lvl': 4.7,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 0.9,
			'arm_base': 24,
			'arm_lvl': 3.5,
			'as_base': 0.625,
			'as_lvl': 3,
			'as_ratio': 0,
			'attack_cast_time': 0.25,
			'attack_total_time': 1.60000002384185,
			'crit_mod': 0.75,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 3.75,
			'hp5_lvl': 0.55,
			'hp_base': 585,
			'hp_lvl': 93,
			'ls': 0,
			'mp5_base': 6,
			'mp5_lvl': 0.8,
			'mp_base': 300,
			'mp_lvl': 50,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 330,
			'ms_base': 330,
			'pathing_radius': 35,
			'range': 550,
			'selection_radius': 120,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.2
		},
		'style': 20,
		'title': 'the Virtuoso',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'apiname': 'jinx',
		'attack': 9,
		'be': 4800,
		'changes': 'V10.13',
		'control': 2,
		'damage': 3,
		'date': '2013-10-10',
		'ddragon_apiname': 'Jinx',
		'defense': 2,
		'difficulty': 2,
		'herotype': 'Marksman',
		'id': 222,
		'img': 'assets/images/champions/Jinx/Jinx.png',
		'index': 47,
		'magic': 4,
		'mobility': 1,
		'name': 'Jinx',
		'patch': 'V3.12',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Flame Chompers!',
			'2': 'Flame Chompers! 2',
			'img': 'assets/images/champions/Jinx/Flame Chompers!.png',
			'tooltip': 'Jinx tosses out 3 chompers that, once armed, explode on contact with enemy champions, rooting the target for 1.5 seconds and stopping in-progress movement abilities on the spot before dealing 70/120/170/220/270 (+1) magic damage over 1.5 seconds to nearby enemies. Chompers last for 5 seconds.'
		},
		'skill_i':
		{
			'1': 'Get Excited!',
			'img': 'assets/images/champions/Jinx/Get Excited!.png',
			'tooltip': 'Jinx receives massively increased Movement Speed and Attack Speed whenever she damages an enemy champion, epic monster, or structure that is then killed or destroyed within 3 seconds.'
		},
		'skill_q':
		{
			'1': 'Switcheroo!',
			'2': 'Pow-Pow',
			'3': "Rev'd up",
			'img': 'assets/images/champions/Jinx/Switcheroo!.png',
			'tooltip': "Jinx swaps weapons.<br><br>Fishbones, the Rocket Launcher: Basic attacks deal 110% Damage to the target and nearby enemies, gain 75/100/125/150/175 range, drain Mana, and scale 25% less with bonus Attack Speed.<br><br>Pow-Pow, the Minigun: Basic attacks grant bonus Attack Speed for 2.5 seconds. This effect stacks up to 3 times for a total bonus of 30/55/80/105/130%.<br><br>Stacks fall off one at a time and only benefit Jinx's first attack after switching to Rocket Launcher."
		},
		'skill_r':
		{
			'1': 'Super Mega Death Rocket!',
			'img': 'assets/images/champions/Jinx/Super Mega Death Rocket!.png',
			'tooltip': "Jinx fires a rocket that gains damage over the first second it travels. It explodes on the first enemy champion hit, dealing ? to ? physical damage plus ?% of the target's missing Health. Nearby enemies take 80% Damage."
		},
		'skill_w':
		{
			'1': 'Zap!',
			'img': 'assets/images/champions/Jinx/Zap!.png',
			'tooltip': "Jinx fires a shock blast that deals 10/60/110/160/210 (+1.6) physical damage to the first enemy hit, revealing it and slowing it by 30/40/50/60/70% for 2 seconds.<br><br>Zap!'s cast time decreases as Jinx gains Attack Speed."
		},
		'stats':
		{
			'acquisition_radius': 550,
			'ad_base': 57,
			'ad_lvl': 3.4,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 0.95,
			'arm_base': 28,
			'arm_lvl': 3.5,
			'as_base': 0.625,
			'as_lvl': 1,
			'as_ratio': 0.625,
			'attack_cast_time': 0.270000010728836,
			'attack_total_time': 1.60000002384185,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 3.75,
			'hp5_lvl': 0.5,
			'hp_base': 610,
			'hp_lvl': 86,
			'ls': 0,
			'mp5_base': 6.7,
			'mp5_lvl': 1,
			'mp_base': 245,
			'mp_lvl': 45,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 325,
			'ms_base': 325,
			'pathing_radius': 35,
			'range': 525,
			'selection_radius': 120,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.05,
			'urf_dmg_taken': 0.95
		},
		'style': 10,
		'title': 'the Loose Cannon',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'apiname': 'kaisa',
		'attack': 8,
		'be': 6300,
		'changes': 'V10.13',
		'control': 1,
		'damage': 3,
		'date': '2018-03-07',
		'ddragon_apiname': 'Kaisa',
		'defense': 5,
		'difficulty': 1,
		'herotype': 'Marksman',
		'id': 145,
		'img': "assets/images/champions/Kai'Sa/Kai'Sa.png",
		'index': 48,
		'magic': 3,
		'mobility': 3,
		'name': "Kai'Sa",
		'patch': 'V8.5',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 975,
		'skill_e':
		{
			'1': 'Supercharge',
			'2': 'Supercharge 2',
			'img': "assets/images/champions/Kai'Sa/Supercharge.png",
			'tooltip': "Kai'Sa spends ? seconds Supercharging her Void Energy. She gains ?% Movement Speed during the charge, and 40/45/50/55/60% Attack Speed for 4 seconds when charged.<br><br>Living Weapon - 100% Attack Speed (current: ?%) - Supercharge grants Invisibility for 0.5 seconds.<br><br>Basic attacks reduce Supercharge's cooldown by 0.5 seconds. Supercharge's cast time and Movement Speed improve with Attack Speed."
		},
		'skill_i':
		{
			'1': 'Second Skin',
			'img': "assets/images/champions/Kai'Sa/Second Skin.png",
			'tooltip': "Kai'Sa's basic attacks stack Plasma, dealing increasing bonus magic damage. Allies' immobilizing effects help stack Plasma. Additionally, Kai'Sa's item purchases upgrade her basic spells to have more powerful properties."
		},
		'skill_q':
		{
			'1': 'Icathian Rain',
			'2': 'Icathian Rain 2',
			'img': "assets/images/champions/Kai'Sa/Icathian Rain.png",
			'tooltip': "Kai'Sa launches 6 missiles that split among nearby enemies, each dealing 45/61.25/77.5/93.75/110 (+[0.6, 0.75, 0.9, 1.05, 1.2]) (+?) physical damage. Additional hits on a champion or monster deal 25% damage (max: ? (+?) (+?)).<br><br>Living Weapon - 100 Bonus Attack Damage (current: ?) - Icathian Rain fires 12 missiles.<br><br>Minions below 35% health take 200% damage."
		},
		'skill_r':
		{
			'1': 'Killer Instinct',
			'img': "assets/images/champions/Kai'Sa/Killer Instinct.png",
			'tooltip': "Kai'Sa warps to a location near an enemy champion affected by Plasma, gaining a shield that absorbs ? damage for ? seconds."
		},
		'skill_w':
		{
			'1': 'Void Seeker',
			'2': 'Void Seeker 2',
			'img': "assets/images/champions/Kai'Sa/Void Seeker.png",
			'tooltip': "Kai'Sa fires a Void blast that grants True Sight on the first enemy hit, and triggers 2 stacks of Plasma, dealing magic damage based on the target's stacks.<br><br>Min Damage: 30/55/80/105/130 (+?) (+0.6) (+?)<br>Max Damage: 30/55/80/105/130 (+?) (+0.6) (+?)<br><br>Living Weapon - 100 Ability Power (current: ?) - Void Seeker triggers 3 stacks of Plasma and refunds 70% cooldown on champion hit."
		},
		'stats':
		{
			'acquisition_radius': 800,
			'ad_base': 59,
			'ad_lvl': 1.7,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 1.05,
			'arm_base': 28,
			'arm_lvl': 3,
			'as_base': 0.644,
			'as_lvl': 1.8,
			'as_ratio': 0.643999993801116,
			'attack_cast_time': 0.25,
			'attack_total_time': 1.55200004577636,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 3.5,
			'hp5_lvl': 0.55,
			'hp_base': 600,
			'hp_lvl': 88,
			'ls': 0,
			'mp5_base': 8.2,
			'mp5_lvl': 0.45,
			'mp_base': 344.88,
			'mp_lvl': 38,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 335,
			'ms_base': 335,
			'nb_dmg_dealt': 1.03,
			'nb_dmg_taken': 0.95,
			'pathing_radius': 40.6800003051757,
			'range': 525,
			'selection_radius': 100,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 10,
		'title': 'Daughter of the Void',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'apiname': 'kalista',
		'attack': 8,
		'be': 6300,
		'changes': 'V10.13',
		'control': 1,
		'damage': 3,
		'date': '2014-11-20',
		'ddragon_apiname': 'Kalista',
		'defense': 2,
		'difficulty': 3,
		'herotype': 'Marksman',
		'id': 429,
		'img': 'assets/images/champions/Kalista/Kalista.png',
		'index': 49,
		'magic': 4,
		'mobility': 3,
		'name': 'Kalista',
		'patch': 'V4.20',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 975,
		'skill_e':
		{
			'1': 'Rend',
			'img': 'assets/images/champions/Kalista/Rend.png',
			'tooltip': "Passive: Kalista's spears pierce their target, lingering for 4 seconds.<br><br>Active: Rip the spears from nearby targets, dealing 20/30/40/50/60 (+0.6) physical damage and slowing their Movement Speed by 10/18/26/34/42% for 2 seconds.<br><br>Each additional spear deals 10/14/19/25/32 (+?) physical damage.<br><br>If Rend kills at least one target, its cooldown is reset and it refunds 10/15/20/25/30 mana.<br><br>Rend deals ?% damage to Epic Monsters."
		},
		'skill_i':
		{
			'1': 'Martial Poise',
			'img': 'assets/images/champions/Kalista/Martial Poise.png',
			'tooltip': "Enter a movement command while winding up Kalista's basic attack or Pierce to lunge a short distance when she launches her attack."
		},
		'skill_q':
		{
			'1': 'Pierce',
			'img': 'assets/images/champions/Kalista/Pierce.png',
			'tooltip': 'Hurl a fast but narrow spear that deals 20/85/150/215/280 (+1) physical damage. Triggers Martial Poise (P), Sentinel (W), and Rend (E).<br><br>If it kills a target, Pierce continues onward, passing all stacks of Rend to the next target.'
		},
		'skill_r':
		{
			'1': "Fate's Call",
			'img': "assets/images/champions/Kalista/Fate's Call.png",
			'tooltip': "Draw Kalista's Oathsworn to her. For up to 4 seconds, the Oathsworn is untargetable and pacified.<br><br>The Oathsworn may mouse click to fly toward target position, stopping at the first enemy champion hit and knocking all enemies in a small radius back.<br><br>Kalista's Oathsworn must be within 1100 units for her to cast this ability."
		},
		'skill_w':
		{
			'1': 'Sentinel',
			'img': 'assets/images/champions/Kalista/Sentinel.png',
			'tooltip': 'Passive: When Kalista and her Oathsworn both basic attack the same target, she deals 14/15/16/17/18% of their max health as magic damage. 10 second cooldown per target.<br><br>Active: Send a soul Sentinel to patrol an unseen area. Champions spotted are revealed for 4 seconds. Sentinels last 3 laps.<br><br>Kalista gains a charge of Sentinel every 90/80/70/60/50 seconds.'
		},
		'stats':
		{
			'acquisition_radius': 900,
			'ad_base': 69,
			'ad_lvl': 3.5,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 1.05,
			'arm_base': 21,
			'arm_lvl': 4,
			'as_base': 0.694,
			'as_lvl': 4,
			'as_ratio': 0.694000005722045,
			'attack_delay_offset': 0.0599999986588954,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 3.75,
			'hp5_lvl': 0.55,
			'hp_base': 534,
			'hp_lvl': 100,
			'ls': 0,
			'mp5_base': 6.3,
			'mp5_lvl': 0.4,
			'mp_base': 250,
			'mp_lvl': 45,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 325,
			'ms_base': 325,
			'pathing_radius': 35,
			'range': 525,
			'selection_radius': 100,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.1,
			'windup_modifier': 0.75
		},
		'style': 10,
		'title': 'the Spear of Vengeance',
		'toughness': 1,
		'utility': 2
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Support',
		'apiname': 'karma',
		'attack': 1,
		'be': 3150,
		'changes': 'V10.2',
		'control': 2,
		'damage': 2,
		'date': '2011-02-01',
		'ddragon_apiname': 'Karma',
		'defense': 7,
		'difficulty': 1,
		'herotype': 'Mage',
		'id': 43,
		'img': 'assets/images/champions/Karma/Karma.png',
		'index': 50,
		'magic': 8,
		'mobility': 1,
		'name': 'Karma',
		'patch': 'V1.0.0.110',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 790,
		'skill_e':
		{
			'1': 'Inspire',
			'2': 'Defiance',
			'img': 'assets/images/champions/Karma/Inspire.png',
			'tooltip': "Target ally gains a shield, granting 40/45/50/55/60% Movement Speed for 1.5 seconds and absorbing 80/110/140/170/200 (+0.5) damage for 2.5 seconds.<br><br>Mantra Bonus - Defiance: The shield overflows with energy, absorbing an additional [60, 140, 220, 300] (+0.5) damage. Nearby allied champions gain shields that absorb ?% as much as the initial target's shield. All champions shielded gain ?% movement speed for 1.5 seconds."
		},
		'skill_i':
		{
			'1': 'Gathering Fire',
			'img': 'assets/images/champions/Karma/Gathering Fire.png',
			'tooltip': "Reduces Mantra's cooldown each time Karma damages an enemy champion with one of her abilities (Half-effect for Karma's basic attacks)"
		},
		'skill_q':
		{
			'1': 'Inner Flame',
			'2': 'Soulflare',
			'img': 'assets/images/champions/Karma/Inner Flame.png',
			'tooltip': 'Fires a blast of energy that explodes upon enemy contact, dealing 90/135/180/225/270 (+0.4) magic damage and slowing Movement Speed by 35% for 1.5 seconds. <br><br>Mantra Bonus - Soulflare: Deals [25, 75, 125, 175] (+0.3) additional magic damage and leaves a circle of flame that slows enemies by ?%. After 1.5 seconds the circle erupts, dealing [50, 150, 250, 350] (+?) magic damage to enemies in the area.'
		},
		'skill_r':
		{
			'1': 'Mantra',
			'img': 'assets/images/champions/Karma/Mantra.png',
			'tooltip': 'Karma empowers her next ability within 8 seconds for an additional effect. <br><br>Soulflare: Deals bonus damage and leaves behind a circle of flame, slowing enemies and dealing additional damage. <br><br>Renewal: Karma heals for a portion of her missing health. If the link is unbroken the root is longer and Karma is healed again.<br><br>Defiance: The shield is stronger and allied champions around the target also gain a shield and movement speed.'
		},
		'skill_w':
		{
			'1': 'Focused Resolve',
			'2': 'Renewal',
			'img': 'assets/images/champions/Karma/Focused Resolve.png',
			'tooltip': 'Links Karma to an enemy champion or monster, granting True Sight and dealing ? (+?) magic damage. If the link is unbroken for 2 seconds, the target is rooted for 1.4/1.55/1.7/1.85/2 second(s) and takes an additional ? (+?) magic damage.<br><br>Mantra Bonus - Renewal: Karma is healed for [75, 150, 225, 300]% (+?%) of her missing health. If the link is not broken or the target dies, the root duration is increased by ? second(s) and Karma is healed for [75, 150, 225, 300]% (+?%) of her missing health.'
		},
		'stats':
		{
			'acquisition_radius': 525,
			'ad_base': 53.544,
			'ad_lvl': 3.3,
			'apen': 0,
			'apen%': 0,
			'arm_base': 26,
			'arm_lvl': 3.8,
			'as_base': 0.625,
			'as_lvl': 2.3,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.138541668653488,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 5.5,
			'hp5_lvl': 0.55,
			'hp_base': 534,
			'hp_lvl': 95,
			'ls': 0,
			'mp5_base': 11.5,
			'mp5_lvl': 0.5,
			'mp_base': 374,
			'mp_lvl': 50,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 335,
			'ms_base': 335,
			'pathing_radius': 35,
			'range': 525,
			'selection_radius': 120,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 100,
		'title': 'the Enlightened One',
		'toughness': 1,
		'utility': 2
	},
	{
		'adaptivetype': 'magic',
		'apiname': 'karthus',
		'attack': 2,
		'be': 3150,
		'changes': 'V10.15',
		'control': 1,
		'damage': 3,
		'date': '2009-06-12',
		'ddragon_apiname': 'Karthus',
		'defense': 2,
		'difficulty': 2,
		'herotype': 'Mage',
		'id': 30,
		'img': 'assets/images/champions/Karthus/Karthus.png',
		'index': 51,
		'magic': 10,
		'mobility': 1,
		'name': 'Karthus',
		'patch': 'June 12, 2009 Patch',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 790,
		'skill_e':
		{
			'1': 'Defile',
			'img': 'assets/images/champions/Karthus/Defile.png',
			'tooltip': 'Passive: When Karthus kills a unit, he restores 20/27/34/41/48 Mana.<br><br>Active: Drains ? Mana to deal 30/50/70/90/110 (+0.2) magic damage to nearby enemies each second. '
		},
		'skill_i':
		{
			'1': 'Death Defied',
			'img': 'assets/images/champions/Karthus/Death Defied.png',
			'tooltip': 'Upon dying, Karthus enters a spirit form that allows him to continue casting spells for 7 seconds.'
		},
		'skill_q':
		{
			'1': 'Lay Waste',
			'img': 'assets/images/champions/Karthus/Lay Waste.png',
			'tooltip': "Creates a delayed blast at Karthus' cursor position dealing ? magic damage to each nearby enemy.<br><br>If the blast hits only a single unit it deals double damage."
		},
		'skill_r':
		{
			'1': 'Requiem',
			'img': 'assets/images/champions/Karthus/Requiem.png',
			'tooltip': 'After channeling for 3 seconds, Karthus deals ? magic damage to all enemy champions (regardless of distance). '
		},
		'skill_w':
		{
			'1': 'Wall of Pain',
			'img': 'assets/images/champions/Karthus/Wall of Pain.png',
			'tooltip': 'Creates a wall that lasts for 5 seconds. Enemies that pass through the wall have their Magic Resist reduced by 15% and Movement Speed reduced by 40/50/60/70/80% for 5 seconds (their Movement Speed gradually recovers over the duration).'
		},
		'stats':
		{
			'acquisition_radius': 450,
			'ad_base': 45.66,
			'ad_lvl': 3.25,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 0.95,
			'arm_base': 20.88,
			'arm_lvl': 3.5,
			'as_base': 0.625,
			'as_lvl': 2.11,
			'as_ratio': 0.625,
			'attack_delay_offset': 0.0437499992549419,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 6.5,
			'hp5_lvl': 0.55,
			'hp_base': 550,
			'hp_lvl': 87,
			'ls': 0,
			'mp5_base': 8,
			'mp5_lvl': 0.8,
			'mp_base': 467,
			'mp_lvl': 30.5,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 335,
			'ms_base': 335,
			'pathing_radius': 35,
			'range': 450,
			'selection_radius': 100,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 0.9
		},
		'style': 100,
		'title': 'the Deathsinger',
		'toughness': 1,
		'utility': 2
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Mage',
		'apiname': 'kassadin',
		'attack': 3,
		'be': 3150,
		'changes': 'V10.6',
		'control': 1,
		'damage': 3,
		'date': '2009-08-07',
		'ddragon_apiname': 'Kassadin',
		'defense': 5,
		'difficulty': 2,
		'herotype': 'Assassin',
		'id': 38,
		'img': 'assets/images/champions/Kassadin/Kassadin.png',
		'index': 52,
		'magic': 8,
		'mobility': 3,
		'name': 'Kassadin',
		'patch': 'v0.9.22.7',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 790,
		'skill_e':
		{
			'1': 'Force Pulse',
			'img': 'assets/images/champions/Kassadin/Force Pulse.png',
			'tooltip': 'Kassadin draws energy from spells cast in his vicinity, gaining a charge whenever a spell is cast near him.<br><br>Upon reaching 6 charges, Kassadin can use Force Pulse to deal 80/105/130/155/180 (+0.8) magic damage and slow enemies by 50/60/70/80/90% for 1 second in a cone in front of him.'
		},
		'skill_i':
		{
			'1': 'Void Stone',
			'img': 'assets/images/champions/Kassadin/Void Stone.png',
			'tooltip': 'Kassadin takes 15% reduced magic damage and ignores unit collision.'
		},
		'skill_q':
		{
			'1': 'Null Sphere',
			'img': 'assets/images/champions/Kassadin/Null Sphere.png',
			'tooltip': 'Kassadin fires an orb of void energy that deals 65/95/125/155/185 (+0.7) magic damage and interrupts channels.<br><br>The excess energy forms around himself, granting a shield that absorbs 60/85/110/135/160 (+0.3) magic damage for 1.5 seconds.'
		},
		'skill_r':
		{
			'1': 'Riftwalk',
			'img': 'assets/images/champions/Kassadin/Riftwalk.png',
			'tooltip': 'Kassadin teleports to a nearby location dealing 80/100/120 (+?) (+0.4) magic damage to surrounding enemy units.<br><br>Each subsequent Riftwalk within the next 15 seconds doubles the Mana cost and deals an additional 40/50/60 (+?) (+?) magic damage per stack, stacking up to 4 times.'
		},
		'skill_w':
		{
			'1': 'Nether Blade',
			'img': 'assets/images/champions/Kassadin/Nether Blade.png',
			'tooltip': "Passive: Kassadin's basic attacks draw energy from the void, dealing 20 (+0.1) bonus magic damage.<br><br>Active: Kassadin charges his Nether Blade, causing his next basic attack to deal 70/95/120/145/170 (+0.8) bonus magic damage and restore 4/4.5/5/5.5/6% of his missing Mana (increases to 20/22.5/25/27.5/30% against champions)."
		},
		'stats':
		{
			'acquisition_radius': 400,
			'ad_base': 58.852,
			'ad_lvl': 3.9,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_taken': 0.95,
			'arm_base': 19,
			'arm_lvl': 2.8,
			'as_base': 0.64,
			'as_lvl': 3.7,
			'as_ratio': 0.639999985694885,
			'attack_delay_offset': -0.150000005960464,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 6,
			'hp5_lvl': 0.5,
			'hp_base': 576,
			'hp_lvl': 90,
			'ls': 0,
			'mp5_base': 6,
			'mp5_lvl': 0.8,
			'mp_base': 397.6,
			'mp_lvl': 67,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 335,
			'ms_base': 335,
			'pathing_radius': 35,
			'range': 150,
			'selection_radius': 120,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_taken': 0.95
		},
		'style': 90,
		'title': 'the Void Walker',
		'toughness': 2,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Mage',
		'apiname': 'katarina',
		'attack': 4,
		'be': 3150,
		'changes': 'V10.10',
		'control': 1,
		'damage': 3,
		'date': '2009-09-19',
		'ddragon_apiname': 'Katarina',
		'defense': 3,
		'difficulty': 2,
		'fullname': 'Katarina Du Couteau',
		'herotype': 'Assassin',
		'id': 55,
		'img': 'assets/images/champions/Katarina/Katarina.png',
		'index': 53,
		'magic': 9,
		'mobility': 3,
		'name': 'Katarina',
		'patch': 'V0.9.25.21',
		'rangetype': 'Melee',
		'resource': 'None',
		'rp': 790,
		'skill_e':
		{
			'1': 'Shunpo',
			'img': 'assets/images/champions/Katarina/Shunpo.png',
			'tooltip': "Katarina dashes in the blink of an eye to the target ally, enemy, or Dagger. If it is an enemy, Katarina strikes for 15/30/45/60/75 (+0.5) (+0.25) magic damage - otherwise she strikes the nearest enemy in range.<br><br>Picking up a Dagger will reduce Shunpo's cooldown by ? seconds (?%).<br><br>Katarina can blink to any location near the target."
		},
		'skill_i':
		{
			'1': 'Voracity',
			'2': 'Sinister Steel',
			'img': 'assets/images/champions/Katarina/Voracity.png',
			'tooltip': 'Whenever an enemy champion dies that Katarina has damaged recently, her remaining ability cooldowns are dramatically reduced.<br><br>If Katarina picks up a Dagger, she uses it to slash through all nearby enemies, dealing magic damage.'
		},
		'skill_q':
		{
			'1': 'Bouncing Blade',
			'img': 'assets/images/champions/Katarina/Bouncing Blade.png',
			'tooltip': 'Katarina throws a Dagger, dealing 75/105/135/165/195 (+0.3) magic damage to the target and 2 nearby enemies. The dagger then ricochets onto the ground behind the primary target.<br><br>The dagger always lands 350 units on the opposite side from where it struck the first target, getting there in the same amount of time regardless of how many times it bounces.'
		},
		'skill_r':
		{
			'1': 'Death Lotus',
			'img': 'assets/images/champions/Katarina/Death Lotus.png',
			'tooltip': 'Katarina becomes a flurry of blades, rapidly throwing knives at the three nearest enemy champions, dealing ? magic damage per knife. Total over ? seconds to each enemy: ? magic damage.<br><br>Applies Grievous Wounds to all enemies struck, reducing their healing and regeneration by ?% for ? seconds.'
		},
		'skill_w':
		{
			'1': 'Preparation',
			'img': 'assets/images/champions/Katarina/Preparation.png',
			'tooltip': 'Katarina tosses a Dagger into the air and gains 50/60/70/80/90% decaying movement speed over 1.25 seconds.'
		},
		'stats':
		{
			'acquisition_radius': 400,
			'ad_base': 58,
			'ad_lvl': 3.2,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 1.05,
			'aram_dmg_taken': 0.95,
			'arm_base': 27.88,
			'arm_lvl': 3.5,
			'as_base': 0.658,
			'as_lvl': 2.74,
			'as_ratio': 0.657999992370605,
			'attack_delay_offset': -0.150000005960464,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 7.5,
			'hp5_lvl': 0.7,
			'hp_base': 602,
			'hp_lvl': 94,
			'ls': 0,
			'mp5_base': 0,
			'mp5_lvl': 0,
			'mp_base': 0,
			'mp_lvl': 0,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 340,
			'ms_base': 340,
			'pathing_radius': 35,
			'range': 125,
			'selection_radius': 120,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.05,
			'urf_dmg_taken': 0.95
		},
		'style': 100,
		'title': 'the Sinister Blade',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Support',
		'apiname': 'kayle',
		'attack': 6,
		'be': 450,
		'changes': 'V9.22',
		'control': 1,
		'damage': 3,
		'date': '2009-02-21',
		'ddragon_apiname': 'Kayle',
		'defense': 6,
		'difficulty': 2,
		'herotype': 'Fighter',
		'id': 10,
		'img': 'assets/images/champions/Kayle/Kayle.png',
		'index': 54,
		'magic': 7,
		'mobility': 1,
		'name': 'Kayle',
		'patch': 'Alpha Week 2',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 260,
		'skill_e':
		{
			'1': 'Starfire Spellblade',
			'img': 'assets/images/champions/Kayle/Starfire Spellblade.png',
			'tooltip': "Passive: Attacks deal ? bonus magic damage.<br><br>Active: Kayle's next attack becomes ranged and deals ? of the target's missing health as bonus magic damage. This attack upgrades when Kayle reaches Level ?, causing it to explode when it hits the target, dealing damage to nearby enemies."
		},
		'skill_i':
		{
			'1': 'Divine Ascent',
			'img': 'assets/images/champions/Kayle/Divine Ascent.png',
			'tooltip': "Kayle's attacks are empowered by the heavens as she levels up and spends skill points. Her wings are lit aflame as she progressively gains Attack Speed, Movement Speed, Attack Range, and waves of fire on her attacks."
		},
		'skill_q':
		{
			'1': 'Radiant Blast',
			'img': 'assets/images/champions/Kayle/Radiant Blast.png',
			'tooltip': 'Kayle summons a celestial sword that stops on the first enemy hit. <br><br>The sword deals ? magic damage to the target and enemies behind it, slows by ?% for ? seconds, and shreds Armor and Magic Resistance by ?% for ? seconds. Radiant Blast refunds ?% of its mana cost for each champion hit.'
		},
		'skill_r':
		{
			'1': 'Divine Judgment',
			'img': 'assets/images/champions/Kayle/Divine Judgment.png',
			'tooltip': 'Kayle makes an allied champion invulnerable for ? seconds.<br><br>Then, after a cast time, she purifies the area around them dealing ? magic damage to nearby enemies.'
		},
		'skill_w':
		{
			'1': 'Celestial Blessing',
			'img': 'assets/images/champions/Kayle/Celestial Blessing.png',
			'tooltip': 'Kayle and target allied champion are healed for ? health and gain ? Movement Speed for ? seconds.'
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 50,
			'ad_lvl': 2.5,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_taken': 1.06,
			'arm_base': 26,
			'arm_lvl': 3,
			'as_base': 0.625,
			'as_lvl': 1.5,
			'as_ratio': 0.666999995708465,
			'attack_cast_time': 0.300000011920928,
			'attack_total_time': 1.54999995231628,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 5,
			'hp5_lvl': 0.5,
			'hp_base': 600,
			'hp_lvl': 85,
			'ls': 0,
			'mp5_base': 8,
			'mp5_lvl': 0.8,
			'mp_base': 330,
			'mp_lvl': 50,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 34,
			'mr_lvl': 0.5,
			'ms': 335,
			'ms_base': 335,
			'nb_dmg_dealt': 0.95,
			'nb_dmg_taken': 1.05,
			'ofa_dmg_dealt': 0.97,
			'ofa_dmg_taken': 1.03,
			'pathing_radius': 35,
			'range': 175,
			'selection_radius': 140,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 0.95,
			'urf_healing': 0.9
		},
		'style': 20,
		'title': 'the Righteous',
		'toughness': 1,
		'utility': 3
	},
	{
		'adaptivetype': 'Physical',
		'alttype': 'Assassin',
		'apiname': 'kayn',
		'attack': 10,
		'be': 6300,
		'changes': 'V10.12',
		'control': 1,
		'damage': 3,
		'date': '2017-07-12',
		'ddragon_apiname': 'Kayn',
		'defense': 6,
		'difficulty': 3,
		'fullname': 'Shieda Kayn',
		'herotype': 'Fighter',
		'id': 141,
		'img': 'assets/images/champions/Kayn/Kayn.png',
		'index': 55,
		'magic': 1,
		'mobility': 3,
		'name': 'Kayn',
		'nickname': 'Rhaast, Darkin, Shadow Assassin',
		'patch': 'V7.14',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 975,
		'skill_e':
		{
			'1': 'Shadow Step',
			'2': 'Shadow Step A',
			'3': 'Shadow Step R',
			'img': 'assets/images/champions/Kayn/Shadow Step.png',
			'tooltip': 'Kayn gains 40% movement speed and the ability to walk through terrain for 7/7.5/8/8.5/9 seconds. When he first enters terrain, he is healed for 100/115/130/145/160 (+0.4).<br>Shadow Assassin: Cooldown is set to ? seconds, gain more movement speed, and slow immunity.<br><br>Maximum duration in combat with enemy champions: 1.5 seconds.<br>Immobilizing effects and spending more than 1.5 consecutive seconds outside of terrain end Shadow Step immediately.'
		},
		'skill_i':
		{
			'1': 'The Darkin Scythe',
			'2': 'The Darkin Scythe A',
			'3': 'The Darkin Scythe R',
			'img': 'assets/images/champions/Kayn/The Darkin Scythe.png',
			'tooltip': 'Kayn wields an ancient weapon and fights Rhaast, the darkin within it, for control. Either the Darkin will triumph, or Kayn will master Rhaast and become the Shadow Assassin.<br><br>Darkin: Heal for a percentage of spell damage dealt to champions.<br><br>Shadow Assassin: For the first few seconds in combat with enemy champions, deal bonus damage.'
		},
		'skill_q':
		{
			'1': 'Reaping Slash',
			'2': 'Reaping Slash A',
			'3': 'Reaping Slash R',
			'img': 'assets/images/champions/Kayn/Reaping Slash.png',
			'tooltip': "Kayn dashes forward to strike nearby enemies. Both dash and strike deal 75/95/115/135/155 (+0.65) physical damage.<br>Darkin: Deal a percentage of the target's maximum health instead.<br><br>Deals 40 bonus physical damage to minions and monsters."
		},
		'skill_r':
		{
			'1': 'Umbral Trespass',
			'2': 'Umbral Trespass R',
			'3': 'Umbral Trespass 2',
			'4': 'Umbral Trespass 2 R',
			'img': 'assets/images/champions/Kayn/Umbral Trespass.png',
			'tooltip': "Kayn infests an enemy champion he has recently damaged, becoming untargetable for up to ? seconds. Reactivate to end this effect early. When Umbral Trespass ends, the target takes ? physical damage. Shadow Assassin: Gains extra range (both when entering and exiting Kayn's victim) and refreshes The Darkin Scythe on exit.<br><br>Darkin: Deals percent maximum health damage and heals for a percentage of target maximum health."
		},
		'skill_w':
		{
			'1': "Blade's Reach",
			'2': "Blade's Reach A",
			'3': "Blade's Reach R",
			'img': "assets/images/champions/Kayn/Blade's Reach.png",
			'tooltip': "Kayn deals 90/135/180/225/270 (+1.3) physical damage and slows enemies hit by 90%, decaying over the next 1.5 seconds.<br>Shadow Assassin: Gain extra range and the ability to move during Blade's Reach.<br><br>Darkin: Gain a knock up."
		},
		'stats':
		{
			'acquisition_radius': 400,
			'ad_base': 68,
			'ad_lvl': 3.3,
			'apen': 0,
			'apen%': 0,
			'arm_base': 38,
			'arm_lvl': 3.3,
			'as_base': 0.669,
			'as_lvl': 2.7,
			'as_ratio': 0.669000029563903,
			'attack_cast_time': 0.280000001192092,
			'attack_delay_offset': -0.100000001490116,
			'attack_total_time': 1.49500000476837,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 8,
			'hp5_lvl': 0.75,
			'hp_base': 585,
			'hp_lvl': 85,
			'ls': 0,
			'mp5_base': 11.5,
			'mp5_lvl': 0.95,
			'mp_base': 410,
			'mp_lvl': 50,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 340,
			'ms_base': 340,
			'pathing_radius': 35,
			'range': 175,
			'selection_radius': 135,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 0,
		'title': 'the Shadow Reaper',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Marksman',
		'apiname': 'kennen',
		'attack': 6,
		'be': 4800,
		'changes': 'V10.13',
		'control': 3,
		'damage': 3,
		'date': '2010-04-08',
		'ddragon_apiname': 'Kennen',
		'defense': 4,
		'difficulty': 2,
		'herotype': 'Mage',
		'id': 85,
		'img': 'assets/images/champions/Kennen/Kennen.png',
		'index': 56,
		'magic': 7,
		'mobility': 1,
		'name': 'Kennen',
		'patch': 'V1.0.0.82',
		'rangetype': 'Ranged',
		'resource': 'Energy',
		'rp': 880,
		'skill_e':
		{
			'1': 'Lightning Rush',
			'img': 'assets/images/champions/Kennen/Lightning Rush.png',
			'tooltip': 'Kennen turns into a ball of lightning for up to ? seconds, dealing ? (+0.8) magic damage to enemies he passes through.<br><br>While a ball of lightning, Kennen gains ?% movement speed. Kennen is refunded ? energy if he damages at least one enemy in this form.<br><br>Upon returning to his normal form, Kennen gains ?% attack speed for ? seconds.<br><br>Lightning Rush deals ?% damage to minions.<br>Kennen ignores unit collision while he is a ball of lightning.'
		},
		'skill_i':
		{
			'1': 'Mark of the Storm',
			'img': 'assets/images/champions/Kennen/Mark of the Storm.png',
			'tooltip': 'Kennen stuns enemies he hits 3 times with his abilities.'
		},
		'skill_q':
		{
			'1': 'Thundering Shuriken',
			'img': 'assets/images/champions/Kennen/Thundering Shuriken.png',
			'tooltip': 'Throws a shuriken that deals 75/115/155/195/235 (+0.75) magic damage to the first enemy it hits.'
		},
		'skill_r':
		{
			'1': 'Slicing Maelstrom',
			'img': 'assets/images/champions/Kennen/Slicing Maelstrom.png',
			'tooltip': "Summons a magical storm for ? seconds that grants him ? Armor and Magic Resist and deals ? magic damage to all enemies near Kennen every ? seconds. Each maelstrom hit applies Mark of the Storm, up to a maximum of 3.<br><br>Successive maelstrom hits against the same enemy deal an additional ?% damage for each hit they've already suffered from this storm."
		},
		'skill_w':
		{
			'1': 'Electrical Surge',
			'img': 'assets/images/champions/Kennen/Electrical Surge.png',
			'tooltip': 'Passive: Every 5 attacks, Kennen deals bonus magic damage equal to 10/20/30/40/50 (+?) (+0.2) and adds a Mark of the Storm to his target.<br><br>Active: Sends a surge of electricity through all nearby enemies affected by Mark of the Storm or Slicing Maelstrom, dealing 60/85/110/135/160 (+0.8) magic damage.'
		},
		'stats':
		{
			'acquisition_radius': 550,
			'ad_base': 48,
			'ad_lvl': 3.75,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_taken': 0.95,
			'arm_base': 29,
			'arm_lvl': 3.75,
			'as_base': 0.625,
			'as_lvl': 3.4,
			'as_ratio': 0.689999997615814,
			'attack_delay_offset': -0.100000001490116,
			'critdmg': 0,
			'gameplay_radius': 55,
			'heal_shield': 0,
			'hp5_base': 5.5,
			'hp5_lvl': 0.65,
			'hp_base': 541,
			'hp_lvl': 84,
			'ls': 0,
			'mp5_base': 50,
			'mp5_lvl': 0,
			'mp_base': 200,
			'mp_lvl': 0,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 335,
			'ms_base': 335,
			'pathing_radius': 30,
			'range': 550,
			'selection_radius': 100,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 65,
		'title': 'the Heart of the Tempest',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'apiname': 'khazix',
		'attack': 9,
		'be': 4800,
		'changes': 'V10.14',
		'control': 1,
		'damage': 3,
		'date': '2012-09-27',
		'ddragon_apiname': 'Khazix',
		'defense': 4,
		'difficulty': 2,
		'herotype': 'Assassin',
		'id': 121,
		'img': "assets/images/champions/Kha'Zix/Kha'Zix.png",
		'index': 57,
		'magic': 3,
		'mobility': 2,
		'name': "Kha'Zix",
		'patch': 'V1.0.0.148',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Leap',
			'2': 'Evolved Wings',
			'img': "assets/images/champions/Kha'Zix/Leap.png",
			'tooltip': "Leaps to target area, dealing 65/100/135/170/205 (+0.2) physical damage.<br><br>Evolved Wings: Increases Leap's range by 200, and the cooldown resets on champion kill or assist."
		},
		'skill_i':
		{
			'1': 'Unseen Threat',
			'img': "assets/images/champions/Kha'Zix/Unseen Threat.png",
			'tooltip': "Nearby enemies that are Isolated from their allies are marked. Kha'Zix's abilities have interactions with Isolated targets.<br><br>When Kha'Zix is not visible to the enemy team, he gains Unseen Threat, causing his next basic attack against an enemy champion to deal bonus magic damage and slow them for a few seconds."
		},
		'skill_q':
		{
			'1': 'Taste Their Fear',
			'2': 'Evolved Reaper Claws',
			'img': "assets/images/champions/Kha'Zix/Taste Their Fear.png",
			'tooltip': "Deals 60/85/110/135/160 (+1.3) physical damage. If the target is Isolated, the damage is increased by 110% (?).<br><br>Evolved Reaper Claws: Increases the range of Taste Their Fear and Kha'Zix's basic attacks by 50. If target is Isolated, refunds 45% of Taste Their Fear's cooldown."
		},
		'skill_r':
		{
			'1': 'Void Assault',
			'2': 'Evolved Adaptive Cloaking',
			'3': 'Void Assault 2',
			'img': "assets/images/champions/Kha'Zix/Void Assault.png",
			'tooltip': "Passive: Ranking up Void Assault allows Kha'Zix to evolve one of his abilities.<br><br>Active: Kha'Zix becomes Invisible for ? seconds and activates Unseen Threat. While Invisible, he gains ?% movement speed and ignores unit collision.<br><br>Void Assault can be used again within ? seconds of the initial use, up to ? times total.<br><br>Evolved Adaptive Cloaking: Void Assault's uses are increased to ? within ? seconds, and its stealth duration is increased to ? seconds.<br><br>Stealth - Invisible: Kha'Zix can only be revealed by nearby enemy Turrets or True Sight."
		},
		'skill_w':
		{
			'1': 'Void Spike',
			'2': 'Evolved Spike Racks',
			'img': "assets/images/champions/Kha'Zix/Void Spike.png",
			'tooltip': "Fires exploding spikes, dealing 85/115/145/175/205 (+1) physical damage to enemies hit. Heals Kha'Zix for 60/85/110/135/160 (+0.5) if he is within the explosion radius.<br><br>Evolved Spike Racks: Void Spike fires three spikes in a cone and slows targets hit by 60% for 2 seconds. Reveals enemy champions hit for 2 seconds. Isolated targets are slowed for 90% instead."
		},
		'stats':
		{
			'acquisition_radius': 400,
			'ad_base': 63,
			'ad_lvl': 3.1,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 1.08,
			'aram_dmg_taken': 0.92,
			'arm_base': 36,
			'arm_lvl': 3,
			'as_base': 0.668,
			'as_lvl': 2.7,
			'as_ratio': 0.667999982833862,
			'attack_delay_offset': -0.0994652435183525,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 7.5,
			'hp5_lvl': 0.75,
			'hp_base': 572.8,
			'hp_lvl': 85,
			'ls': 0,
			'mp5_base': 7.59,
			'mp5_lvl': 0.5,
			'mp_base': 327.2,
			'mp_lvl': 40,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 350,
			'ms_base': 350,
			'pathing_radius': 35,
			'range': 125,
			'selection_radius': 130,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 55,
		'title': 'the Voidreaver',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'apiname': 'kindred',
		'attack': 8,
		'be': 6300,
		'changes': 'V10.15',
		'control': 2,
		'damage': 3,
		'date': '2015-10-14',
		'ddragon_apiname': 'Kindred',
		'defense': 2,
		'difficulty': 3,
		'fullname': 'Lamb and Wolf',
		'herotype': 'Marksman',
		'id': 203,
		'img': 'assets/images/champions/Kindred/Kindred.png',
		'index': 58,
		'magic': 2,
		'mobility': 3,
		'name': 'Kindred',
		'patch': 'V5.20',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 975,
		'skill_e':
		{
			'1': 'Mounting Dread',
			'img': 'assets/images/champions/Kindred/Mounting Dread.png',
			'tooltip': "Cripple an enemy, slowing their movement speed by 50% for 1 second.<br><br>After Lamb attacks the target twice, her third attack instead directs Wolf to pounce on the enemy, dealing 80/100/120/140/160 (+0.8) plus ?% of the target's missing health as bonus physical damage.<br><br>Wolf's attack critically strikes targets for 50% increased damage if they are below 15% (+?%) health (Increased by Critical Strike Chance).<br><br>[Maximum ? vs. monsters]"
		},
		'skill_i':
		{
			'1': 'Mark of the Kindred',
			'img': 'assets/images/champions/Kindred/Mark of the Kindred.png',
			'tooltip': "Kindred can mark targets to Hunt. Successfully completing a Hunt permanently empowers Kindred's basic abilities. Every 4 hunts completed also increases Kindred's basic attack range."
		},
		'skill_q':
		{
			'1': 'Dance of Arrows',
			'img': 'assets/images/champions/Kindred/Dance of Arrows.png',
			'tooltip': "Lamb vaults, firing up to 3 arrows at nearby enemies, dealing 60/80/100/120/140 (+0.65) physical damage and gains ?% bonus attack speed for 4 seconds.<br><br>Casting Wolf's Frenzy or vaulting inside of its effect reduces the cooldown of this spell to 4/3.5/3/2.5/2 seconds."
		},
		'skill_r':
		{
			'1': "Lamb's Respite",
			'img': "assets/images/champions/Kindred/Lamb's Respite.png",
			'tooltip': 'Lamb blesses the ground underneath her for 4 seconds, creating an area in which no living things, ally or enemy, can die. Upon reaching 10% Health, units become immune to further damage or healing.<br><br>When the blessing ends all living things inside heal for 250/325/400.'
		},
		'skill_w':
		{
			'1': "Wolf's Frenzy",
			'img': "assets/images/champions/Kindred/Wolf's Frenzy.png",
			'tooltip': "Passive: As Kindred move and attack they build stacks of Hunter's Vigor, up to a maximum of 100. At full stacks Lamb's next basic attack restores up to ? health based on how much health Kindred is missing.<br><br>Active: Wolf claims a territory, attacking nearby enemies inside it for 8.5 seconds. Lamb can redirect Wolf to new targets by attacking them. If Lamb leaves Wolf's territory he will cease attacking and join her.<br><br>Wolf's attacks deal magic damage equal to 25/30/35/40/45 (+0.2) plus ?% of the target's current health.<br><br>Wolf attacks faster based on Kindred's attack speed. His attacks maim monsters for 50% increased damage and reduce their Movement Speed by 50% for 2 seconds."
		},
		'stats':
		{
			'acquisition_radius': 525,
			'ad_base': 65,
			'ad_lvl': 2.5,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 1.1,
			'arm_base': 29,
			'arm_lvl': 3.5,
			'as_base': 0.625,
			'as_lvl': 3.5,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.12456139922142,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 7,
			'hp5_lvl': 0.55,
			'hp_base': 540,
			'hp_lvl': 85,
			'ls': 0,
			'mp5_base': 7,
			'mp5_lvl': 0.4,
			'mp_base': 300,
			'mp_lvl': 35,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 325,
			'ms_base': 325,
			'pathing_radius': 35,
			'range': 500,
			'selection_radius': 120,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 20,
		'title': 'The Eternal Hunters',
		'toughness': 1,
		'utility': 2
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Tank',
		'apiname': 'kled',
		'attack': 8,
		'be': 6300,
		'changes': 'V10.12',
		'control': 1,
		'damage': 3,
		'date': '2016-08-10',
		'ddragon_apiname': 'Kled',
		'defense': 2,
		'difficulty': 2,
		'fullname': 'Kled and Skaarl',
		'herotype': 'Fighter',
		'id': 240,
		'img': 'assets/images/champions/Kled/Kled.png',
		'index': 59,
		'magic': 2,
		'mobility': 2,
		'name': 'Kled',
		'patch': 'V6.16',
		'rangetype': 'Melee',
		'resource': 'Courage',
		'rp': 975,
		'skill_e':
		{
			'1': 'Unmounted Jousting',
			'img': 'assets/images/champions/Kled/Unmounted Jousting.png',
			'tooltip': 'Kled dashes, dealing 35/60/85/110/135 (+0.6) physical damage to enemies in his path. Cannot cross walls.<br><br>If Jousting hits an enemy champion or large monster, Kled gains 50% movement speed for 1 second and True Sight of the target. He can cast this ability again within 3 seconds to dash back through the same target, dealing the same damage.'
		},
		'skill_i':
		{
			'1': 'Dismounted Skaarl the Cowardly Lizard',
			'img': 'assets/images/champions/Kled/Dismounted Skaarl the Cowardly Lizard.png',
			'tooltip': "Kled rides his trusty steed, Skaarl, who takes damage for him. When Skaarl's health depletes, Kled dismounts.<br><br>While dismounted, Kled's abilities change and he deals less damage to champions. Kled can restore Skaarl's courage by fighting enemies. At maximum courage, Kled remounts with a portion of Skaarl's health."
		},
		'skill_q':
		{
			'1': 'Pocket Pistol',
			'img': 'assets/images/champions/Kled/Pocket Pistol.png',
			'tooltip': 'Kled throws a bear trap that deals 60/110/160/210/260 (+0.6) physical damage and hooks onto the first enemy champion or large monster hit, granting True Sight. Deals 150% damage to minions passed through.<br><br>If Kled stays near a hooked enemy for 1.75 seconds, yanks the enemy toward him, dealing 60/110/160/210/260 (+?) physical damage, slowing them by ?% for ? seconds, and reducing incoming healing on them by ?% for ? seconds.<br><br>Dismounted: Becomes Pocket Pistol, a ranged ability that restores courage.'
		},
		'skill_r':
		{
			'1': 'Unmounted Chaaaaaaaarge!!!',
			'img': 'assets/images/champions/Kled/Unmounted Chaaaaaaaarge!!!.png',
			'tooltip': "Kled charges toward a location, leaving a trail that grants allies increasing movement speed. While charging, Kled gains a shield that increases over time to a maximum of 200/300/400 (+3) and lasts for 2 seconds after the charge ends.<br><br>Skaarl rams the first enemy champion encountered, dealing up to ?% (+?%) of the target's maximum health as physical damage based on distance traveled."
		},
		'skill_w':
		{
			'1': 'Violent Tendencies',
			'img': 'assets/images/champions/Kled/Violent Tendencies.png',
			'tooltip': "Passive: When Kled basic attacks, he frenzies, gaining 150% attack speed for four attacks or 4 seconds. Violent Tendencies then goes on cooldown.<br><br>The fourth hit deals bonus physical damage equal to 20/30/40/50/60 plus 4.5/5/5.5/6/6.5% (+?%) of the target's maximum health (maximum 200 vs monsters)."
		},
		'stats':
		{
			'ad_base': 65,
			'ad_lvl': 3.5,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_taken': 0.95,
			'arm_base': 35,
			'arm_lvl': 4,
			'as_base': 0.625,
			'as_lvl': 3.5,
			'as_ratio': 0.625,
			'attack_cast_time': 0.280000001192092,
			'attack_total_time': 1.60000002384185,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 6,
			'hp5_lvl': 0.75,
			'hp_base': 340,
			'hp_lvl': 70,
			'ls': 0,
			'mp5_base': 0,
			'mp5_lvl': 0,
			'mp_base': 100,
			'mp_lvl': 0,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 285,
			'ms_base': 285,
			'pathing_radius': 35,
			'range': 250,
			'selection_radius': 140,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 30,
		'title': 'the Cantankerous Cavalier',
		'toughness': 2,
		'utility': 1
	},
	{
		'adaptivetype': 'Mixed,Physical',
		'alttype': 'Mage',
		'apiname': 'kogmaw',
		'attack': 8,
		'be': 4800,
		'changes': 'V10.15',
		'control': 1,
		'damage': 3,
		'date': '2010-06-24',
		'ddragon_apiname': 'KogMaw',
		'defense': 2,
		'difficulty': 2,
		'herotype': 'Marksman',
		'id': 96,
		'img': "assets/images/champions/Kog'Maw/Kog'Maw.png",
		'index': 60,
		'magic': 5,
		'mobility': 1,
		'name': "Kog'Maw",
		'patch': 'V1.0.0.94',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Void Ooze',
			'img': "assets/images/champions/Kog'Maw/Void Ooze.png",
			'tooltip': 'Deals 75/120/165/210/255 (+0.5) Magic Damage to enemies hit and leaves a trail on the ground for 4 seconds, slowing enemies in it by 20/28/36/44/52%.'
		},
		'skill_i':
		{
			'1': 'Icathian Surprise',
			'img': "assets/images/champions/Kog'Maw/Icathian Surprise.png",
			'tooltip': "Upon dying, Kog'Maw starts a chain reaction in his body which causes him to move faster and detonate after 4 seconds; dealing 100 + (25 x lvl) true damage to surrounding enemies."
		},
		'skill_q':
		{
			'1': 'Caustic Spittle',
			'img': "assets/images/champions/Kog'Maw/Caustic Spittle.png",
			'tooltip': "Passive:  Kog'Maw gains 15/20/25/30/35% bonus attack speed.<br><br>Active: Launches a corrosive projectile that deals 90/140/190/240/290 (+0.7) Magic Damage to the first enemy hit and shreds its Armor and Magic Resist by 20/22/24/26/28% for 4 seconds."
		},
		'skill_r':
		{
			'1': 'Living Artillery',
			'img': "assets/images/champions/Kog'Maw/Living Artillery.png",
			'tooltip': 'Fires an artillery shot, damaging enemies above 40% health for ? to ? magic damage based on their missing health.<br><br>If enemies are below 40% health, they take ? magic damage instead.<br><br>Each subsequent shot within ? seconds costs ? more Mana (max ?).'
		},
		'skill_w':
		{
			'1': 'Bio-Arcane Barrage',
			'img': "assets/images/champions/Kog'Maw/Bio-Arcane Barrage.png",
			'tooltip': "For 8 seconds, Kog'Maw's basic attacks gain 130/150/170/190/210 range and deal 3/3.75/4.5/5.25/6% (+?)% of the target's maximum health as bonus magic damage."
		},
		'stats':
		{
			'acquisition_radius': 900,
			'ad_base': 61,
			'ad_lvl': 3.11,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 0.9,
			'aram_dmg_taken': 1.05,
			'arm_base': 24,
			'arm_lvl': 3.5,
			'as_base': 0.665,
			'as_lvl': 2.65,
			'as_ratio': 0.665000021457672,
			'attack_delay_offset': -0.13377659022808,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 3.75,
			'hp5_lvl': 0.55,
			'hp_base': 565,
			'hp_lvl': 90,
			'ls': 0,
			'mp5_base': 8.75,
			'mp5_lvl': 0.7,
			'mp_base': 325,
			'mp_lvl': 40,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 330,
			'ms_base': 330,
			'nb_dmg_dealt': 0.9,
			'nb_dmg_taken': 1.05,
			'pathing_radius': 30,
			'range': 500,
			'selection_radius': 130,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 10,
		'title': 'the Mouth of the Abyss',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Mage',
		'apiname': 'leblanc',
		'attack': 1,
		'be': 3150,
		'changes': 'V10.6',
		'control': 2,
		'damage': 3,
		'date': '2010-11-02',
		'ddragon_apiname': 'Leblanc',
		'defense': 4,
		'difficulty': 2,
		'fullname': 'Emilia (Evaine) LeBlanc',
		'herotype': 'Assassin',
		'id': 7,
		'img': 'assets/images/champions/Leblanc/Leblanc.png',
		'index': 61,
		'magic': 10,
		'mobility': 3,
		'name': 'Leblanc',
		'nickname': 'LB',
		'patch': 'V1.0.0.104',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 790,
		'skill_e':
		{
			'1': 'Ethereal Chains',
			'img': 'assets/images/champions/Leblanc/Ethereal Chains.png',
			'tooltip': 'LeBlanc launches a chain that shackles the first enemy hit, dealing 40/60/80/100/120 (+0.3) magic damage and granting True Sight of the target.<br><br>If the target remains shackled for 1.5 seconds, LeBlanc roots them for 1.5 seconds and deals an additional 70/110/150/190/230 (+0.7) magic damage. '
		},
		'skill_i':
		{
			'1': 'Mirror Image',
			'img': 'assets/images/champions/Leblanc/Mirror Image.png',
			'tooltip': 'When LeBlanc drops below 40% health, she becomes invisible for 1 second and creates a Mirror Image that deals no damage and lasts for up to 8 seconds.'
		},
		'skill_q':
		{
			'1': 'Sigil of Malice',
			'img': 'assets/images/champions/Leblanc/Sigil of Malice.png',
			'tooltip': 'LeBlanc projects a sigil, dealing 55/80/105/130/155 (+0.4) magic damage and marking the target for 3.5 seconds.<br><br>Damaging the marked target with an ability detonates the sigil, dealing 55/80/105/130/155 (+0.4) magic damage.'
		},
		'skill_r':
		{
			'1': 'Mimic',
			'2': 'Mimic Sigil of Malice',
			'3': 'Mimic Distortion',
			'4': 'Mimic Ethereal Chains',
			'img': 'assets/images/champions/Leblanc/Mimic.png',
			'tooltip': 'LeBlanc mimics her most recent spell, casting it again.<br><br>Mimicked Sigil of Malice and Ethereal Chains deal ? magic damage, plus ? magic damage from their mark and root, respectively.<br><br>Mimicked Distortion deals ? magic damage.'
		},
		'skill_w':
		{
			'1': 'Distortion',
			'2': 'Distortion 2',
			'img': 'assets/images/champions/Leblanc/Distortion.png',
			'tooltip': 'LeBlanc dashes to a location, dealing 75/115/155/195/235 (+0.6) magic damage to enemies near her destination.<br><br>For the next 4 seconds, activate Distortion again to return LeBlanc to her starting location.'
		},
		'stats':
		{
			'acquisition_radius': 525,
			'ad_base': 54.88,
			'ad_lvl': 3.5,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 1.15,
			'aram_dmg_taken': 0.85,
			'arm_base': 21.88,
			'arm_lvl': 3.5,
			'as_base': 0.625,
			'as_lvl': 1.4,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.133333340287208,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 7.5,
			'hp5_lvl': 0.55,
			'hp_base': 528,
			'hp_lvl': 92,
			'ls': 0,
			'mp5_base': 6,
			'mp5_lvl': 0.8,
			'mp_base': 334,
			'mp_lvl': 50,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 340,
			'ms_base': 340,
			'nb_dmg_taken': 0.95,
			'pathing_radius': 35,
			'range': 525,
			'selection_radius': 100,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.1
		},
		'style': 100,
		'title': 'the Deceiver',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Assassin',
		'apiname': 'leesin',
		'attack': 8,
		'be': 4800,
		'changes': 'V10.15',
		'control': 2,
		'damage': 3,
		'date': '2011-04-01',
		'ddragon_apiname': 'LeeSin',
		'defense': 5,
		'difficulty': 2,
		'herotype': 'Fighter',
		'id': 64,
		'img': 'assets/images/champions/Lee Sin/Lee Sin.png',
		'index': 62,
		'magic': 3,
		'mobility': 3,
		'name': 'Lee Sin',
		'patch': 'V1.0.0.114',
		'rangetype': 'Melee',
		'resource': 'Energy',
		'rp': 880,
		'skill_e':
		{
			'1': 'Tempest',
			'2': 'Cripple',
			'img': 'assets/images/champions/Lee Sin/Tempest.png',
			'tooltip': 'Tempest: Lee Sin smashes the ground, sending out a shockwave that deals 80/120/160/200/240 (+1) magic damage. If Tempest hits an enemy, Lee Sin can cast Cripple for the next 3 seconds.<br><br>Cripple: Lee Sin cripples nearby enemies struck by Tempest for 4 seconds, slowing their Movement Speed by 20/30/40/50/60%. Movement Speed recovers gradually over the duration.'
		},
		'skill_i':
		{
			'1': 'Flurry',
			'img': 'assets/images/champions/Lee Sin/Flurry.png',
			'tooltip': 'After Lee Sin uses an ability, his next 2 basic attacks gain Attack Speed and return Energy.'
		},
		'skill_q':
		{
			'1': 'Sonic Wave',
			'2': 'Resonating Strike',
			'img': 'assets/images/champions/Lee Sin/Sonic Wave.png',
			'tooltip': "Sonic Wave: Lee Sin projects a discordant wave of sound to locate his enemies, dealing 55/80/105/130/155 (+1) physical damage to the first enemy it encounters, granting True Sight of the target. If Sonic Wave hits, Lee Sin can cast Resonating Strike for the next 3 seconds.<br><br>Resonating Strike: Lee Sin dashes to the enemy hit by Sonic Wave, dealing 55/80/105/130/155 (+1) to 110/160/210/260/310 (+2) physical damage based on the target's missing Health."
		},
		'skill_r':
		{
			'1': "Dragon's Rage",
			'img': "assets/images/champions/Lee Sin/Dragon's Rage.png",
			'tooltip': "Lee Sin performs a powerful roundhouse kick knocking an enemy champion back and dealing ? physical damage.<br><br>Enemies the target collides with are knocked into the air briefly and take physical damage equal to ? plus ?% of the initial target's bonus health."
		},
		'skill_w':
		{
			'1': 'Safeguard',
			'2': 'Iron Will',
			'img': 'assets/images/champions/Lee Sin/Safeguard.png',
			'tooltip': "Safeguard: Lee Sin rushes to target ally. If the ally is a champion, Lee Sin shields the ally and himself for 55/110/165/220/275 (+0.8) damage for 2 seconds and Safeguard's cooldown is reduced by 50%. After using Safeguard, Lee Sin can cast Iron Will for the next 3 seconds.<br><br>Iron Will: Lee Sin gains 10/15/20/25/30% Life Steal and Spell Vamp for 4 seconds."
		},
		'stats':
		{
			'acquisition_radius': 400,
			'ad_base': 70,
			'ad_lvl': 3.2,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 1.08,
			'aram_dmg_taken': 0.9,
			'arm_base': 33,
			'arm_lvl': 3.7,
			'as_base': 0.651,
			'as_lvl': 3,
			'as_ratio': 0.651000022888183,
			'attack_delay_offset': -0.104687497019767,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 7.5,
			'hp5_lvl': 0.7,
			'hp_base': 575,
			'hp_lvl': 85,
			'ls': 0,
			'mp5_base': 50,
			'mp5_lvl': 0,
			'mp_base': 200,
			'mp_lvl': 0,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 345,
			'ms_base': 345,
			'pathing_radius': 35,
			'range': 125,
			'selection_radius': 102.777801513671,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.05,
			'urf_dmg_taken': 0.95
		},
		'style': 55,
		'title': 'the Blind Monk',
		'toughness': 2,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Support',
		'apiname': 'leona',
		'attack': 4,
		'be': 4800,
		'changes': 'V10.14',
		'control': 3,
		'damage': 1,
		'date': '2011-07-13',
		'ddragon_apiname': 'Leona',
		'defense': 8,
		'difficulty': 1,
		'herotype': 'Tank',
		'id': 89,
		'img': 'assets/images/champions/Leona/Leona.png',
		'index': 63,
		'magic': 3,
		'mobility': 1,
		'name': 'Leona',
		'patch': 'V1.0.0.121',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Zenith Blade',
			'img': 'assets/images/champions/Leona/Zenith Blade.png',
			'tooltip': 'Strikes all enemies in a line dealing 50/90/130/170/210 (+0.4) magic damage. The last enemy Champion struck will be rooted for 0.5 seconds and Leona will dash to them.'
		},
		'skill_i':
		{
			'1': 'Sunlight',
			'img': 'assets/images/champions/Leona/Sunlight.png',
			'tooltip': 'Damaging spells afflict enemies with Sunlight for 1.5 seconds. When allied Champions deal damage to those targets, they consume the Sunlight to deal additional magic damage.'
		},
		'skill_q':
		{
			'1': 'Shield of Daybreak',
			'img': 'assets/images/champions/Leona/Shield of Daybreak.png',
			'tooltip': 'Next basic attack deals 10/35/60/85/110 (+0.3) bonus magic damage and stuns for 1 seconds.'
		},
		'skill_r':
		{
			'1': 'Solar Flare',
			'img': 'assets/images/champions/Leona/Solar Flare.png',
			'tooltip': 'Calls down a radiant beam of solar energy dealing ? magic damage and slowing enemies by ?% for ? seconds. Enemies in the center of the flare are stunned instead of slowed.'
		},
		'skill_w':
		{
			'1': 'Eclipse',
			'img': 'assets/images/champions/Leona/Eclipse.png',
			'tooltip': 'For 3 seconds, Leona reduces incoming damage by ? and gains 20/25/30/35/40 (+0.2) Armor and 20/25/30/35/40 (+0.2) Magic Resist. When the effect ends, nearby enemies struck take 60/95/130/165/200 (+0.4) magic damage and Leona retains her defensive bonuses for 3 seconds.<br><br>Damage reduction effect will not exceed ?% of incoming damage.'
		},
		'stats':
		{
			'acquisition_radius': 400,
			'ad_base': 60.04,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'arm_base': 47,
			'arm_lvl': 3.6,
			'as_base': 0.625,
			'as_lvl': 2.9,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.0708333328366279,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 8.5,
			'hp5_lvl': 0.85,
			'hp_base': 576.16,
			'hp_lvl': 87,
			'ls': 0,
			'mp5_base': 6,
			'mp5_lvl': 0.8,
			'mp_base': 302.2,
			'mp_lvl': 40,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 335,
			'ms_base': 335,
			'pathing_radius': 35,
			'range': 125,
			'selection_radius': 75,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 90,
		'title': 'the Radiant Dawn',
		'toughness': 3,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'apiname': 'lillia',
		'attack': 0,
		'be': 7800,
		'changes': 'V10.15',
		'control': 2,
		'damage': 3,
		'date': '2020-07-22',
		'ddragon_apiname': 'Lillia',
		'defense': 0,
		'difficulty': 3,
		'herotype': 'Mage',
		'id': 876,
		'img': 'assets/images/champions/Lillia/Lillia.png',
		'index': 64,
		'magic': 0,
		'mobility': 2,
		'name': 'Lillia',
		'patch': 'V10.15',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 975,
		'skill_e':
		{
			'1': 'Swirlseed',
			'img': 'assets/images/champions/Lillia/Swirlseed.png',
			'tooltip': 'Lillia lobs a swirlseed overhead, dealing ? magic damage where it lands and revealing and Slowing them by ?% for ? seconds. If no enemies are hit, the seed rolls until it hits an enemy or collides with terrain.'
		},
		'skill_i':
		{
			'1': 'Dream-Laden Bough',
			'img': 'assets/images/champions/Lillia/Dream-Laden Bough.png',
			'tooltip': 'Hitting a champion or monster with a skill will deal additional max Health damage over time.'
		},
		'skill_q':
		{
			'1': 'Prance',
			'2': 'Blooming Blows',
			'img': 'assets/images/champions/Lillia/Prance.png',
			'tooltip': "Passive: Lillia's ability hits grant ? Move Speed for ? seconds, stacking up to ? times.<br><br>Active: Lillia whirls her censer, dealing ? magic damage plus ? true damage at the outer edge."
		},
		'skill_r':
		{
			'1': 'Lilting Lullaby',
			'img': 'assets/images/champions/Lillia/Lilting Lullaby.png',
			'tooltip': 'Lillia causes all enemy champions with Dream Dust to become Drowsy for ? seconds. Afterward, they fall Asleep for ? seconds.<br><br>When awakened by damage, they take an additional ? magic damage.'
		},
		'skill_w':
		{
			'1': 'Watch Out! Eep!',
			'img': 'assets/images/champions/Lillia/Watch Out! Eep!.png',
			'tooltip': 'Lillia winds up a huge strike, dealing ? magic damage. Enemies in the center take ? damage instead.'
		},
		'stats':
		{
			'acquisition_radius': 400,
			'ad_base': 61,
			'ad_lvl': 3.1,
			'apen': 0,
			'apen%': 0,
			'arm_base': 20,
			'arm_lvl': 4,
			'as_base': 0.625,
			'as_lvl': 2.7,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.1529411765,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 9,
			'hp5_lvl': 0.75,
			'hp_base': 580,
			'hp_lvl': 90,
			'ls': 0,
			'missile_speed': 0,
			'mp5_base': 11.5,
			'mp5_lvl': 0.95,
			'mp_base': 410,
			'mp_lvl': 50,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 0.5,
			'ms': 330,
			'ms_base': 330,
			'pathing_radius': 35,
			'range': 325,
			'selection_radius': 135,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 80,
		'title': 'the Bashful Bloom',
		'toughness': 1,
		'utility': 2
	},
	{
		'adaptivetype': 'magic',
		'apiname': 'lissandra',
		'attack': 2,
		'be': 4800,
		'changes': 'V10.11',
		'control': 3,
		'damage': 3,
		'date': '2013-04-30',
		'ddragon_apiname': 'Lissandra',
		'defense': 5,
		'difficulty': 2,
		'herotype': 'Mage',
		'id': 127,
		'img': 'assets/images/champions/Lissandra/Lissandra.png',
		'index': 65,
		'magic': 8,
		'mobility': 2,
		'name': 'Lissandra',
		'patch': 'V3.6',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Glacial Path',
			'img': 'assets/images/champions/Lissandra/Glacial Path.png',
			'tooltip': "Casts an ice claw that deals 70/105/140/175/210 (+0.6) magic damage to enemies hit.<br><br>Reactivating this ability transports Lissandra to the claw's current location."
		},
		'skill_i':
		{
			'1': 'Iceborn Subjugation',
			'img': 'assets/images/champions/Lissandra/Iceborn Subjugation.png',
			'tooltip': 'When an enemy champion dies near Lissandra they become a Frozen Thrall. Frozen Thralls slow nearby enemies and then, after a delay, shatter from the intense cold, dealing magic damage to nearby targets.'
		},
		'skill_q':
		{
			'1': 'Ice Shard',
			'img': 'assets/images/champions/Lissandra/Ice Shard.png',
			'tooltip': 'Throws a spear of ice that shatters when it hits an enemy, dealing 70/100/130/160/190 (+0.8) magic damage and slowing Movement Speed by 16/19/22/25/28% for 1.5 seconds. Shards then pass through the target, dealing the same damage to other enemies hit.'
		},
		'skill_r':
		{
			'1': 'Frozen Tomb',
			'img': 'assets/images/champions/Lissandra/Frozen Tomb.png',
			'tooltip': 'On Enemy Cast: Freezes target champion solid, stunning it for ? seconds.<br><br>On Self Cast: Lissandra encases herself in dark ice for ? seconds, healing for ?, increased by ?% for each ?% Health she is missing. During this time Lissandra is untargetable and invulnerable but is unable to take any actions.<br><br>Dark ice then emanates from the target dealing ? magic damage to enemies. The ice lasts for ? seconds and slows enemy Movement Speed by ?%.'
		},
		'skill_w':
		{
			'1': 'Ring of Frost',
			'img': 'assets/images/champions/Lissandra/Ring of Frost.png',
			'tooltip': 'Deals 70/105/140/175/210 (+0.7) magic damage to nearby enemies and roots them for 1.1/1.2/1.3/1.4/1.5 seconds.'
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 53,
			'ad_lvl': 2.7,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 0.95,
			'arm_base': 22,
			'arm_lvl': 3.7,
			'as_base': 0.656,
			'as_lvl': 1.36,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.112499997019767,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 7,
			'hp5_lvl': 0.55,
			'hp_base': 550,
			'hp_lvl': 90,
			'ls': 0,
			'mp5_base': 8,
			'mp5_lvl': 0.4,
			'mp_base': 475,
			'mp_lvl': 30,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 325,
			'ms_base': 325,
			'nb_dmg_dealt': 0.95,
			'pathing_radius': 35,
			'range': 550,
			'selection_radius': 88.8889007568359,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 100,
		'title': 'the Ice Witch',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'apiname': 'lucian',
		'attack': 8,
		'be': 4800,
		'changes': 'V10.13',
		'control': 1,
		'damage': 3,
		'date': '2013-08-22',
		'ddragon_apiname': 'Lucian',
		'defense': 5,
		'difficulty': 2,
		'herotype': 'Marksman',
		'id': 236,
		'img': 'assets/images/champions/Lucian/Lucian.png',
		'index': 66,
		'magic': 3,
		'mobility': 3,
		'name': 'Lucian',
		'patch': 'V3.10a',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Relentless Pursuit',
			'img': 'assets/images/champions/Lucian/Relentless Pursuit.png',
			'tooltip': "Quickly dashes a short distance.<br><br>Whenever Lightslinger hits an enemy, Relentless Pursuit's cooldown is reduced by 1 second (doubles to 2 seconds against champions)."
		},
		'skill_i':
		{
			'1': 'Lightslinger',
			'img': 'assets/images/champions/Lucian/Lightslinger.png',
			'tooltip': 'Whenever Lucian uses an ability, his next attack becomes a double-shot.'
		},
		'skill_q':
		{
			'1': 'Piercing Light',
			'img': 'assets/images/champions/Lucian/Piercing Light.png',
			'tooltip': "Shoots a bolt of piercing light through an enemy unit, damaging enemies in a line for 95/130/165/200/235 (+[0.6, 0.75, 0.9, 1.05, 1.2]) (60/75/90/105/120% of bonus Attack Damage) physical damage.<br><br>Piercing Light's cast time decreases slightly as Lucian gains levels."
		},
		'skill_r':
		{
			'1': 'The Culling',
			'img': 'assets/images/champions/Lucian/The Culling.png',
			'tooltip': 'Lucian moves freely while firing rapidly in a single direction for ? seconds. His shots collide with the first enemy they hit and each do ? physical damage.  The Culling does ?% damage to minions.<br><br>Lucian may use Relentless Pursuit during The Culling.<br><br>Reactivate The Culling to cancel early.'
		},
		'skill_w':
		{
			'1': 'Ardent Blaze',
			'2': 'Ardent Blaze 2',
			'3': 'Ardent Blaze 3',
			'img': 'assets/images/champions/Lucian/Ardent Blaze.png',
			'tooltip': 'Fires a shot that explodes upon enemy contact or reaching the end of its path. The explosion deals 75/110/145/180/215 (+0.9) magic damage, marks enemies for 6 seconds, and briefly reveals them.<br><br>When Lucian or his allies damage a marked target, Lucian gains 60/65/70/75/80 Movement Speed for 1 second.'
		},
		'stats':
		{
			'acquisition_radius': 800,
			'ad_base': 64,
			'ad_lvl': 2.75,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 1.05,
			'arm_base': 28,
			'arm_lvl': 3,
			'as_base': 0.638,
			'as_lvl': 3.3,
			'as_ratio': 0.638000011444091,
			'attack_delay_offset': -0.150000005960464,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 3.75,
			'hp5_lvl': 0.65,
			'hp_base': 571,
			'hp_lvl': 86,
			'ls': 0,
			'mp5_base': 8.176,
			'mp5_lvl': 0.7,
			'mp_base': 348.88,
			'mp_lvl': 38,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 335,
			'ms_base': 335,
			'pathing_radius': 40.6800003051757,
			'range': 500,
			'selection_radius': 100,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_taken': 0.95
		},
		'style': 30,
		'title': 'the Purifier',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Mage',
		'apiname': 'lulu',
		'attack': 4,
		'be': 4800,
		'changes': 'V10.2',
		'control': 2,
		'damage': 2,
		'date': '2012-03-20',
		'ddragon_apiname': 'Lulu',
		'defense': 5,
		'difficulty': 2,
		'herotype': 'Support',
		'id': 117,
		'img': 'assets/images/champions/Lulu/Lulu.png',
		'index': 67,
		'magic': 7,
		'mobility': 1,
		'name': 'Lulu',
		'patch': 'V1.0.0.136',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Help, Pix!',
			'img': 'assets/images/champions/Lulu/Help, Pix!.png',
			'tooltip': "On Ally Cast: Commands Pix to jump to an ally and then follow and aid their attacks instead of Lulu's for 6 seconds. If the ally is a champion, Pix shields them from 80/120/160/200/240 (+0.6) damage for 2.5 seconds.<br><br>On Enemy Cast: Pix deals 80/120/160/200/240 (+0.4) magic damage to target enemy unit. Pix then follows and grants True Sight of them for 4 seconds."
		},
		'skill_i':
		{
			'1': 'Pix, Faerie Companion',
			'img': 'assets/images/champions/Lulu/Pix, Faerie Companion.png',
			'tooltip': "Pix fires magical bolts of energy whenever the champion he's following attacks another enemy unit. These bolts are homing, but can be intercepted by other units."
		},
		'skill_q':
		{
			'1': 'Glitterlance',
			'img': 'assets/images/champions/Lulu/Glitterlance.png',
			'tooltip': 'Lulu and Pix each fire a piercing bolt dealing 80/125/170/215/260 (+0.5) magic damage to the first enemy hit and ? (+?) to all additional enemies. Enemies hit are slowed by 80%, decaying over the next 2 second(s).<br><br>An enemy can only be damaged for up to a total of ? damage per cast.'
		},
		'skill_r':
		{
			'1': 'Wild Growth',
			'img': 'assets/images/champions/Lulu/Wild Growth.png',
			'tooltip': 'Lulu enlarges her ally, knocking nearby enemies into the air. For ? seconds, her ally gains ? bonus health and slows nearby enemies by ?%.'
		},
		'skill_w':
		{
			'1': 'Whimsy',
			'img': 'assets/images/champions/Lulu/Whimsy.png',
			'tooltip': 'On Ally Cast: Target ally gains 30 (+0.05)% Movement Speed and 25/30/35/40/45% Attack Speed for 3/3.25/3.5/3.75/4 seconds.<br><br>On Enemy Cast: Polymorphs an enemy champion for 1.25/1.5/1.75/2/2.25 seconds, disabling their ability to attack or cast spells and reducing their base Movement Speed by 60.'
		},
		'stats':
		{
			'acquisition_radius': 625,
			'ad_base': 47,
			'ad_lvl': 2.6,
			'apen': 0,
			'apen%': 0,
			'arm_base': 29,
			'arm_lvl': 3.7,
			'as_base': 0.625,
			'as_lvl': 2.25,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.112499997019767,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 6,
			'hp5_lvl': 0.6,
			'hp_base': 525,
			'hp_lvl': 74,
			'ls': 0,
			'mp5_base': 11,
			'mp5_lvl': 0.6,
			'mp_base': 350,
			'mp_lvl': 55,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 330,
			'ms_base': 330,
			'pathing_radius': 30,
			'range': 550,
			'selection_radius': 100,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 80,
		'title': 'the Fae Sorceress',
		'toughness': 1,
		'utility': 3
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Support',
		'apiname': 'lux',
		'attack': 2,
		'be': 3150,
		'changes': 'V10.11',
		'control': 2,
		'damage': 3,
		'date': '2010-10-19',
		'ddragon_apiname': 'Lux',
		'defense': 4,
		'difficulty': 1,
		'fullname': 'Luxanna Crownguard',
		'herotype': 'Mage',
		'id': 99,
		'img': 'assets/images/champions/Lux/Lux.png',
		'index': 68,
		'magic': 9,
		'mobility': 1,
		'name': 'Lux',
		'patch': 'V1.0.0.103',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 790,
		'skill_e':
		{
			'1': 'Lucent Singularity',
			'img': 'assets/images/champions/Lux/Lucent Singularity.png',
			'tooltip': 'Creates a zone that slows enemies by 25/30/35/40/45% and illuminates the area. After 5 seconds the zone detonates dealing 60/105/150/195/240 (+0.6) magic damage, slowing enemies hit for an additional ? second.<br><br>Activate again to detonate early.'
		},
		'skill_i':
		{
			'1': 'Illumination',
			'img': 'assets/images/champions/Lux/Illumination.png',
			'tooltip': "Lux's damaging spells charge the target with energy for 6 seconds. Lux's next attack ignites the energy, dealing bonus magic damage (depending on Lux's level) to the target."
		},
		'skill_q':
		{
			'1': 'Light Binding',
			'img': 'assets/images/champions/Lux/Light Binding.png',
			'tooltip': 'Fires a ball of light, rooting up to two enemies for 2 seconds and dealing 80/125/170/215/260 (+0.6) magic damage to each.'
		},
		'skill_r':
		{
			'1': 'Final Spark',
			'img': 'assets/images/champions/Lux/Final Spark.png',
			'tooltip': 'Fires a dazzling ray of light dealing ? magic damage to all enemies in a line.<br><br>Final Spark ignites and refreshes the Illumination debuff.'
		},
		'skill_w':
		{
			'1': 'Prismatic Barrier',
			'img': 'assets/images/champions/Lux/Prismatic Barrier.png',
			'tooltip': "Throws Lux's wand in target direction, shielding allied champions it touches from 50/75/100/125/150 (+0.3) damage for 2.5 seconds. Upon reaching its destination it returns, stacking the effect."
		},
		'stats':
		{
			'acquisition_radius': 625,
			'ad_base': 53.54,
			'ad_lvl': 3.3,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 0.85,
			'aram_dmg_taken': 1.1,
			'arm_base': 18.72,
			'arm_lvl': 4,
			'as_base': 0.669,
			'as_lvl': 1,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.143749997019767,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 5.5,
			'hp5_lvl': 0.55,
			'hp_base': 490,
			'hp_lvl': 85,
			'ls': 0,
			'mp5_base': 8,
			'mp5_lvl': 0.8,
			'mp_base': 480,
			'mp_lvl': 23.5,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 330,
			'ms_base': 330,
			'pathing_radius': 35,
			'range': 550,
			'selection_radius': 100,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 90,
		'title': 'the Lady of Luminosity',
		'toughness': 1,
		'utility': 2
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Fighter',
		'apiname': 'malphite',
		'attack': 5,
		'be': 1350,
		'changes': 'V10.13',
		'control': 3,
		'damage': 1,
		'date': '2009-09-02',
		'ddragon_apiname': 'Malphite',
		'defense': 9,
		'difficulty': 1,
		'herotype': 'Tank',
		'id': 54,
		'img': 'assets/images/champions/Malphite/Malphite.png',
		'index': 69,
		'magic': 7,
		'mobility': 1,
		'name': 'Malphite',
		'patch': 'V0.9.22.16',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 585,
		'skill_e':
		{
			'1': 'Ground Slam',
			'img': 'assets/images/champions/Malphite/Ground Slam.png',
			'tooltip': "Malphite slams the ground dealing 60/95/130/165/200 (+0.3) (+0.6) magic damage to surrounding enemies, reducing their Attack Speed by 30/35/40/45/50% for 3 seconds.<br><br>This ability gains damage equal to 40% of Malphite's Armor."
		},
		'skill_i':
		{
			'1': 'Granite Shield',
			'img': 'assets/images/champions/Malphite/Granite Shield.png',
			'tooltip': 'Malphite is shielded by a layer of rock which absorbs damage up to 10% of his maximum Health. If Malphite has not been hit for 10 seconds, this effect recharges.'
		},
		'skill_q':
		{
			'1': 'Seismic Shard',
			'img': 'assets/images/champions/Malphite/Seismic Shard.png',
			'tooltip': "Deals 70/120/170/220/270 (+0.6) magic damage and steals 20/25/30/35/40% of the target's movement speed for 3 seconds."
		},
		'skill_r':
		{
			'1': 'Unstoppable Force',
			'img': 'assets/images/champions/Malphite/Unstoppable Force.png',
			'tooltip': 'Malphite charges to target area. Upon his arrival he deals 200/300/400 (+0.8) magic damage to nearby enemies and knocks them into the air for 1.5 seconds.'
		},
		'skill_w':
		{
			'1': 'Thunderclap',
			'img': 'assets/images/champions/Malphite/Thunderclap.png',
			'tooltip': "Passive: Malphite's armor is increased by 10/15/20/25/30% (?). This effect is tripled while Granite Shield is active.<br><br>Active: Malphite's basic attacks create aftershocks for the next 5 seconds, dealing ? physical damage in a cone.  His first attack after activating Thunderclap deals ? bonus physical damage to his target."
		},
		'stats':
		{
			'acquisition_radius': 400,
			'ad_base': 61.97,
			'ad_lvl': 4,
			'apen': 0,
			'apen%': 0,
			'arm_base': 37,
			'arm_lvl': 3.75,
			'as_base': 0.736,
			'as_lvl': 3.4,
			'as_ratio': 0.638000011444091,
			'attack_delay_offset': -0.0503188781440258,
			'critdmg': 0,
			'gameplay_radius': 80,
			'heal_shield': 0,
			'hp5_base': 7,
			'hp5_lvl': 0.55,
			'hp_base': 574.2,
			'hp_lvl': 90,
			'ls': 0,
			'mp5_base': 7.324,
			'mp5_lvl': 0.55,
			'mp_base': 282.2,
			'mp_lvl': 40,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 335,
			'ms_base': 335,
			'pathing_radius': 50,
			'range': 125,
			'selection_radius': 125,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 0.95
		},
		'style': 75,
		'title': 'Shard of the Monolith',
		'toughness': 3,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Assassin',
		'apiname': 'malzahar',
		'attack': 2,
		'be': 4800,
		'changes': 'V10.15',
		'control': 3,
		'damage': 3,
		'date': '2010-06-01',
		'ddragon_apiname': 'Malzahar',
		'defense': 2,
		'difficulty': 1,
		'herotype': 'Mage',
		'id': 90,
		'img': 'assets/images/champions/Malzahar/Malzahar.png',
		'index': 70,
		'magic': 9,
		'mobility': 1,
		'name': 'Malzahar',
		'patch': 'V1.0.0.86',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Malefic Visions',
			'img': 'assets/images/champions/Malzahar/Malefic Visions.png',
			'tooltip': 'Deal 80/115/150/185/220 (+0.8) magic damage to an enemy target over 4 seconds. Applying Call of the Void or Nether Grasp to the victim during this time refreshes the visions.<br><br>If the victim is killed, Malzahar gains ? Mana (2% of max mana) and the visions spread to the nearest enemy.'
		},
		'skill_i':
		{
			'1': 'Void Shift',
			'img': 'assets/images/champions/Malzahar/Void Shift.png',
			'tooltip': "When he hasn't recently taken damage or been crowd controlled, Malzahar gains massive damage reduction and crowd control immunity, lingering for a short period after taking damage."
		},
		'skill_q':
		{
			'1': 'Call of the Void',
			'img': 'assets/images/champions/Malzahar/Call of the Void.png',
			'tooltip': 'Malzahar opens two portals to the Void that fire projectiles inward, dealing 70/105/140/175/210 (+0.65) magic damage and silencing enemies hit for 1/1.25/1.5/1.75/2 second(s).'
		},
		'skill_r':
		{
			'1': 'Nether Grasp',
			'img': 'assets/images/champions/Malzahar/Nether Grasp.png',
			'tooltip': 'Malzahar suppresses a target champion for 2.5 seconds, dealing 125/200/275 (+0.8) magic damage over the duration. A zone of negative energy is created around his target for 5 seconds, dealing 2/3/4% (+0.005%) of nearby enemies max health as magic damage per second.'
		},
		'skill_w':
		{
			'1': 'Void Swarm',
			'img': 'assets/images/champions/Malzahar/Void Swarm.png',
			'tooltip': "Passive: Casting Malzahar's other spells gives him a Zz'Rot Swarm, increasing the number of Voidlings summoned by Void Swarm (max 2).<br><br>Active: Summons one or more Voidlings. Voidlings last 8/8/9/9/10 seconds and deal an additional 12/14/16/18/20 (+0.2) (+0.4) magic damage each hit.<br><br>Voidlings deal 300% damage to lane minions affected by Malefic Visions.<br>Voidlings deal 50% damage to epic monsters."
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 55,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 0.92,
			'aram_dmg_taken': 1.08,
			'arm_base': 18,
			'arm_lvl': 3.5,
			'as_base': 0.625,
			'as_lvl': 1.5,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.109999999403953,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 6,
			'hp5_lvl': 0.6,
			'hp_base': 537,
			'hp_lvl': 87,
			'ls': 0,
			'mp5_base': 8,
			'mp5_lvl': 0.8,
			'mp_base': 375,
			'mp_lvl': 27.5,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 335,
			'ms_base': 335,
			'pathing_radius': 35,
			'range': 500,
			'selection_radius': 88.8889007568359,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 0.85
		},
		'style': 100,
		'title': 'the Prophet of the Void',
		'toughness': 1,
		'utility': 2
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Mage',
		'apiname': 'maokai',
		'attack': 3,
		'be': 4800,
		'changes': 'V10.10',
		'control': 3,
		'damage': 1,
		'date': '2011-02-16',
		'ddragon_apiname': 'Maokai',
		'defense': 8,
		'difficulty': 1,
		'herotype': 'Tank',
		'id': 57,
		'img': 'assets/images/champions/Maokai/Maokai.png',
		'index': 71,
		'magic': 6,
		'mobility': 1,
		'name': 'Maokai',
		'patch': 'V1.0.0.111',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Sapling Toss',
			'img': 'assets/images/champions/Maokai/Sapling Toss.png',
			'tooltip': 'Maokai flings a sapling, which stands watch for ? seconds. Saplings will chase nearby enemies, detonating on proximity, dealing 25/50/75/100/125 +7/7.25/7.5/7.75/8% [+0.01%] Target Max Health magic damage and slowing enemies struck by 35% for 2 seconds.<br><br>Saplings placed in brush last for ? seconds and cause a larger explosion, dealing double damage over 2 seconds to all enemies hit.<br><br>Maximum 300 Damage to non-Champions, doubled for brush.'
		},
		'skill_i':
		{
			'1': 'Sap Magic',
			'2': 'Sap Magic 2',
			'img': 'assets/images/champions/Maokai/Sap Magic.png',
			'tooltip': "Maokai's basic attack also heal him on a moderate cooldown. Each time Maokai casts a spell or is struck by an enemy's spell, this cooldown is reduced."
		},
		'skill_q':
		{
			'1': 'Bramble Smash',
			'img': 'assets/images/champions/Maokai/Bramble Smash.png',
			'tooltip': 'Maokai smashes his fist into the ground, releasing a shockwave. Nearby enemies are knocked away from him and all affected enemies take 70/115/160/205/250 (+0.4) magic damage and are slowed briefly.'
		},
		'skill_r':
		{
			'1': "Nature's Grasp",
			'img': "assets/images/champions/Maokai/Nature's Grasp.png",
			'tooltip': 'Maokai summons a colossal wall of brambles and thorns that slowly advances forwards, dealing 150/225/300 (+0.75) magic damage and rooting any enemies struck for (? to ?) seconds, increasing with distance travelled.'
		},
		'skill_w':
		{
			'1': 'Twisted Advance',
			'img': 'assets/images/champions/Maokai/Twisted Advance.png',
			'tooltip': 'Maokai transforms into a moving mass of roots, becoming untargetable and dashing to the target.<br><br>Upon arrival, he deals 70/95/120/145/170 (+0.4) magic damage and roots the target for 1/1.1/1.2/1.3/1.4 second(s).'
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 63.54,
			'ad_lvl': 3.3,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 0.85,
			'aram_dmg_taken': 1.12,
			'arm_base': 39,
			'arm_lvl': 4,
			'as_base': 0.8,
			'as_lvl': 2.125,
			'as_ratio': 0.694999992847442,
			'attack_delay_offset': 0,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 5,
			'hp5_lvl': 0.75,
			'hp_base': 565,
			'hp_lvl': 95,
			'ls': 0,
			'mp5_base': 7.2,
			'mp5_lvl': 0.6,
			'mp_base': 375,
			'mp_lvl': 43,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 335,
			'ms_base': 335,
			'nb_dmg_dealt': 0.9,
			'nb_dmg_taken': 1.05,
			'ofa_dmg_taken': 1.05,
			'pathing_radius': 50,
			'range': 125,
			'selection_radius': 125,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 0.9,
			'urf_dmg_taken': 1.05,
			'urf_healing': 0.9
		},
		'style': 75,
		'title': 'the Twisted Treant',
		'toughness': 3,
		'utility': 2
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Fighter',
		'apiname': 'masteryi',
		'attack': 10,
		'be': 450,
		'changes': 'V10.8',
		'control': 1,
		'damage': 3,
		'date': '2009-02-21',
		'ddragon_apiname': 'MasterYi',
		'defense': 4,
		'difficulty': 1,
		'herotype': 'Assassin',
		'id': 11,
		'img': 'assets/images/champions/Master Yi/Master Yi.png',
		'index': 72,
		'magic': 2,
		'mobility': 2,
		'name': 'Master Yi',
		'patch': 'Alpha Week 2',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 260,
		'skill_e':
		{
			'1': 'Wuju Style',
			'img': 'assets/images/champions/Master Yi/Wuju Style.png',
			'tooltip': 'Basic attacks deal 18/26/34/42/50 (+[0.1, 0.125, 0.15, 0.175, 0.2]) bonus true damage for 5 seconds.'
		},
		'skill_i':
		{
			'1': 'Double Strike',
			'img': 'assets/images/champions/Master Yi/Double Strike.png',
			'tooltip': 'Every few consecutive basic attack, Master Yi strikes twice.'
		},
		'skill_q':
		{
			'1': 'Alpha Strike',
			'img': 'assets/images/champions/Master Yi/Alpha Strike.png',
			'tooltip': "Master Yi becomes untargetable and teleports to rapidly strike enemies near his target, dealing 25/60/95/130/165 (+1) physical damage to all enemies hit after 4 hits.<br><br>Alpha Strike can critically strike for 0.6 additional damage.<br>Monsters take 75/100/125/150/175 bonus damage.<br>Repeat strikes instantly deal ?% damage.<br>Basic attacks reduce Alpha Strike's cooldown by 1 second.<br>"
		},
		'skill_r':
		{
			'1': 'Highlander',
			'img': 'assets/images/champions/Master Yi/Highlander.png',
			'tooltip': "Passive: Champion kills and assists reduce the remaining cooldown of Master Yi's basic abilities by ?%.<br><br>Active: Increases Movement Speed by ?%, Attack Speed by ?%, and grants immunity to slows for ? seconds. While active, champion kills and assists extend the duration of Highlander by ? seconds."
		},
		'skill_w':
		{
			'1': 'Meditate',
			'img': 'assets/images/champions/Master Yi/Meditate.png',
			'tooltip': "Master Yi channels, reducing incoming damage by 60/62.5/65/67.5/70% and restoring 120/200/280/360/440 (+1) health over ? seconds. This healing is increased by up to ?% based on missing health.<br><br>In addition, Master Yi will gain stacks of Double Strike and pause the remaining duration on Wuju Style and Highlander for each second he channels.<br><br>Meditate's damage reduction is halved against structures."
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 66,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'arm_base': 33,
			'arm_lvl': 3,
			'as_base': 0.679,
			'as_lvl': 2,
			'as_ratio': 0.67900002002716,
			'attack_delay_offset': -0.0562499985098838,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 7.5,
			'hp5_lvl': 0.65,
			'hp_base': 598.56,
			'hp_lvl': 92,
			'ls': 0,
			'mp5_base': 7.256,
			'mp5_lvl': 0.45,
			'mp_base': 250.56,
			'mp_lvl': 42,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 355,
			'ms_base': 355,
			'nb_dmg_dealt': 0.95,
			'nb_dmg_taken': 1.05,
			'pathing_radius': 35,
			'range': 125,
			'selection_radius': 125,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_taken': 1.1,
			'urf_healing': 0.9
		},
		'style': 10,
		'title': 'the Wuju Bladesman',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'apiname': 'missfortune',
		'attack': 8,
		'be': 3150,
		'changes': 'V10.13',
		'control': 1,
		'damage': 3,
		'date': '2010-09-08',
		'ddragon_apiname': 'MissFortune',
		'defense': 2,
		'difficulty': 1,
		'fullname': 'Sarah Fortune',
		'herotype': 'Marksman',
		'id': 21,
		'img': 'assets/images/champions/Miss Fortune/Miss Fortune.png',
		'index': 73,
		'magic': 5,
		'mobility': 1,
		'name': 'Miss Fortune',
		'nickname': 'MF',
		'patch': 'V1.0.0.100',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 790,
		'skill_e':
		{
			'1': 'Make It Rain',
			'img': 'assets/images/champions/Miss Fortune/Make It Rain.png',
			'tooltip': 'Miss Fortune reveals an area, raining down bullets that deal 80/115/150/185/220 (+0.8) magic damage over 2 seconds and slow enemies hit by 40/45/50/55/60%.'
		},
		'skill_i':
		{
			'1': 'Love Tap',
			'img': 'assets/images/champions/Miss Fortune/Love Tap.png',
			'tooltip': 'Miss Fortune deals bonus physical damage whenever she basic attacks a new target.'
		},
		'skill_q':
		{
			'1': 'Double Up',
			'img': 'assets/images/champions/Miss Fortune/Double Up.png',
			'tooltip': 'Miss Fortune fires a bouncing shot through an enemy, dealing 20/40/60/80/100 (+1) (+0.35) physical damage to each target hit. Both apply on-hit effects.<br><br>The second shot can critically strike for ?% damage, and it always critically strikes if the first shot kills its target.'
		},
		'skill_r':
		{
			'1': 'Bullet Time',
			'img': 'assets/images/champions/Miss Fortune/Bullet Time.png',
			'tooltip': 'Miss Fortune channels a barrage of bullets for ? seconds, dealing ? physical damage per wave (? waves total).<br><br>Each wave of Bullet Time can critically strike for ? damage.<br><br>Total Damage: ?'
		},
		'skill_w':
		{
			'1': 'Strut',
			'2': 'Impure Shots',
			'img': 'assets/images/champions/Miss Fortune/Strut.png',
			'tooltip': "Passive: After 5 seconds of not taking direct damage, Miss Fortune gains 25 Movement Speed. After another 5 seconds, this bonus increases to 50/60/70/80/90.<br><br>Active: Fully activates Strut's Movement Speed and grants 40/55/70/85/100% Attack Speed for 4 seconds.<br><br>Love Taps reduce the cooldown of Strut by ? seconds."
		},
		'stats':
		{
			'acquisition_radius': 800,
			'ad_base': 50,
			'ad_lvl': 2.7,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 0.92,
			'arm_base': 28,
			'arm_lvl': 3,
			'as_base': 0.656,
			'as_lvl': 2.25,
			'as_ratio': 0.656000018119812,
			'attack_delay_offset': -0.151993364095687,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 3.75,
			'hp5_lvl': 0.65,
			'hp_base': 570,
			'hp_lvl': 93,
			'ls': 0,
			'mp5_base': 8.042,
			'mp5_lvl': 0.65,
			'mp_base': 325.84,
			'mp_lvl': 35,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 325,
			'ms_base': 325,
			'pathing_radius': 35,
			'range': 550,
			'selection_radius': 100,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.1,
			'urf_dmg_taken': 0.95
		},
		'style': 30,
		'title': 'the Bounty Hunter',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'apiname': 'mordekaiser',
		'attack': 4,
		'be': 1350,
		'changes': 'V10.12',
		'control': 1,
		'damage': 3,
		'date': '2010-02-24',
		'ddragon_apiname': 'Mordekaiser',
		'defense': 6,
		'difficulty': 2,
		'herotype': 'Fighter',
		'id': 82,
		'img': 'assets/images/champions/Mordekaiser/Mordekaiser.png',
		'index': 74,
		'magic': 7,
		'mobility': 1,
		'name': 'Mordekaiser',
		'patch': 'V1.0.0.75',
		'rangetype': 'Melee',
		'resource': 'Shield',
		'rp': 585,
		'skill_e':
		{
			'1': "Death's Grasp",
			'img': "assets/images/champions/Mordekaiser/Death's Grasp.png",
			'tooltip': 'Passive: Mordekaiser gains ?% Magic Penetration.<br><br>Active: Mordekaiser pulls enemies in the chosen area dealing ? magic damage.'
		},
		'skill_i':
		{
			'1': 'Darkness Rise',
			'img': 'assets/images/champions/Mordekaiser/Darkness Rise.png',
			'tooltip': 'Mordekaiser gains a powerful damage aura and movement speed after landing 3 attacks or spells against champions.'
		},
		'skill_q':
		{
			'1': 'Obliterate',
			'img': 'assets/images/champions/Mordekaiser/Obliterate.png',
			'tooltip': 'Mordekaiser smashes the ground with Nightfall dealing ? magic damage to all enemies in the area, increased by ?% if it hits only a single enemy.'
		},
		'skill_r':
		{
			'1': 'Realm of Death',
			'img': 'assets/images/champions/Mordekaiser/Realm of Death.png',
			'tooltip': 'Mordekaiser banishes a target to the Death Realm with him for ?s, stealing ?% of their core stats for the duration.<br><br>If Mordekaiser kills his target in the Death Realm he consumes their soul, keeping the stats he stole until the target respawns.'
		},
		'skill_w':
		{
			'1': 'Indestructible',
			'2': 'Indestructible 2',
			'img': 'assets/images/champions/Mordekaiser/Indestructible.png',
			'tooltip': 'Mordekaiser stores (?%/?%) of all damage he (deals/takes) as a potential shield.<br><br>Indestructible grants him the shield and may be cast a second time to consume it, healing for ?% of the remaining value.'
		},
		'stats':
		{
			'acquisition_radius': 400,
			'ad_base': 61,
			'ad_lvl': 4,
			'apen': 0,
			'apen%': 0,
			'arm_base': 37,
			'arm_lvl': 3,
			'as_base': 0.625,
			'as_lvl': 1,
			'as_ratio': 0.625,
			'attack_cast_time': 0.5,
			'attack_delay_offset': -0.100000001490116,
			'attack_total_time': 2.36599993705749,
			'critdmg': 0,
			'gameplay_radius': 80,
			'heal_shield': 0,
			'hp5_base': 5,
			'hp5_lvl': 0.75,
			'hp_base': 575,
			'hp_lvl': 90,
			'ls': 0,
			'mp5_base': 0,
			'mp5_lvl': 0,
			'mp_base': 0,
			'mp_lvl': 0,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32,
			'mr_lvl': 1.25,
			'ms': 335,
			'ms_base': 335,
			'pathing_radius': 35,
			'range': 175,
			'selection_radius': 125,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.05,
			'urf_dmg_taken': 0.95,
			'windup_modifier': 0.5
		},
		'style': 80,
		'title': 'the Iron Revenant',
		'toughness': 2,
		'utility': 2
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Support',
		'apiname': 'morgana',
		'attack': 1,
		'be': 1350,
		'changes': 'V10.6',
		'control': 3,
		'damage': 2,
		'date': '2009-02-21',
		'ddragon_apiname': 'Morgana',
		'defense': 6,
		'difficulty': 1,
		'herotype': 'Mage',
		'id': 25,
		'img': 'assets/images/champions/Morgana/Morgana.png',
		'index': 75,
		'magic': 8,
		'mobility': 1,
		'name': 'Morgana',
		'patch': 'Alpha Week 2',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 585,
		'skill_e':
		{
			'1': 'Black Shield',
			'img': 'assets/images/champions/Morgana/Black Shield.png',
			'tooltip': 'Shields an allied Champion for ? seconds. The shield absorbs ? magic damage and prevents disables until it breaks.'
		},
		'skill_i':
		{
			'1': 'Soul Siphon',
			'img': 'assets/images/champions/Morgana/Soul Siphon.png',
			'tooltip': 'Morgana drains spirit from her enemies, healing as she deals damage to champions, large minions, and large monsters.'
		},
		'skill_q':
		{
			'1': 'Dark Binding',
			'img': 'assets/images/champions/Morgana/Dark Binding.png',
			'tooltip': 'Hurls a blast of starfire that roots the first enemy hit for ? seconds and deals ? magic damage.'
		},
		'skill_r':
		{
			'1': 'Soul Shackles',
			'img': 'assets/images/champions/Morgana/Soul Shackles.png',
			'tooltip': 'Morgana chains herself to nearby enemy Champions, dealing ? magic damage and slowing them by ?%. After ? seconds, enemies unable to break the chains take an additional ? magic damage and are stunned for ? seconds.<br><br>While casting Soul Shackles, Morgana gains ?% Movement Speed towards enemies she has chained.'
		},
		'skill_w':
		{
			'1': 'Tormented Soil',
			'img': 'assets/images/champions/Morgana/Tormented Soil.png',
			'tooltip': "Ignites an area for ? seconds, dealing ? magic damage every second to enemies inside. Damage is increased by up to ?% based on targets' missing Health.<br><br>Tormented Shadow's cooldown is reduced by ?% every time Morgana is healed by Soul Siphon."
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 56,
			'ad_lvl': 3.5,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 0.94,
			'arm_base': 25,
			'arm_lvl': 3.8,
			'as_base': 0.625,
			'as_lvl': 1.53,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.159999996423721,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 5.5,
			'hp5_lvl': 0.4,
			'hp_base': 560,
			'hp_lvl': 90,
			'ls': 0,
			'mp5_base': 11,
			'mp5_lvl': 0.4,
			'mp_base': 340,
			'mp_lvl': 60,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 335,
			'ms_base': 335,
			'pathing_radius': 35,
			'range': 450,
			'selection_radius': 120,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 0.92
		},
		'style': 100,
		'title': 'the Fallen',
		'toughness': 1,
		'utility': 2
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Mage',
		'apiname': 'nami',
		'attack': 4,
		'be': 4800,
		'changes': 'V10.9',
		'control': 3,
		'damage': 1,
		'date': '2012-12-07',
		'ddragon_apiname': 'Nami',
		'defense': 3,
		'difficulty': 2,
		'herotype': 'Support',
		'id': 267,
		'img': 'assets/images/champions/Nami/Nami.png',
		'index': 76,
		'magic': 7,
		'mobility': 1,
		'name': 'Nami',
		'patch': 'V1.0.0.152',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': "Tidecaller's Blessing",
			'img': "assets/images/champions/Nami/Tidecaller's Blessing.png",
			'tooltip': "Empowers an allied champion's next 3 basic attacks and spells, causing them to slow the target by 15/20/25/30/35% (+0.05%) for 1 second and deal 25/40/55/70/85 (+0.2) bonus magic damage. Lasts for 6 seconds.<br><br><br>Deal ? damage to non-champions when empowering Area of Effect spells.<br>"
		},
		'skill_i':
		{
			'1': 'Surging Tides',
			'img': 'assets/images/champions/Nami/Surging Tides.png',
			'tooltip': "When Nami's abilities hit allied champions they gain Movement Speed for a short duration."
		},
		'skill_q':
		{
			'1': 'Aqua Prison',
			'img': 'assets/images/champions/Nami/Aqua Prison.png',
			'tooltip': 'Sends a bubble to target area, dealing 75/130/185/240/295 (+0.5) magic damage to enemies, and stunning them for 1.5 seconds.'
		},
		'skill_r':
		{
			'1': 'Tidal Wave',
			'img': 'assets/images/champions/Nami/Tidal Wave.png',
			'tooltip': "Summons a Tidal Wave from Nami's position. The wave knocks up enemies and slows them by 50/60/70%, dealing 150/250/350 (+0.6) magic damage. The duration of the slow increases based on how far the Tidal Wave has traveled, with a minimum duration of 2 seconds and a maximum of 4 seconds.<br><br>Allies hit by the wave gain double the effect of Surging Tides."
		},
		'skill_w':
		{
			'1': 'Ebb and Flow',
			'img': 'assets/images/champions/Nami/Ebb and Flow.png',
			'tooltip': 'Unleashes a stream of water that bounces back and forth between allied and visible enemy champions.<br><br>On Ally Hit: Heals 60/85/110/135/160 (+0.3) Health and will bounce to a nearby visible enemy champion.<br><br>On Enemy Hit: Deals 70/110/150/190/230 (+0.5) magic damage and bounces to a nearby allied champion.<br><br>Bounces to each target only once, and hits up to 3 targets. The damage and healing value is modified by (?%) each bounce. '
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 51.208,
			'ad_lvl': 3.1,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_taken': 1.05,
			'aram_healing': 0.85,
			'arm_base': 29,
			'arm_lvl': 4,
			'as_base': 0.644,
			'as_lvl': 2.61,
			'as_ratio': 0.643999993801116,
			'attack_delay_offset': -0.11999999731779,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 5.5,
			'hp5_lvl': 0.55,
			'hp_base': 475,
			'hp_lvl': 74,
			'ls': 0,
			'mp5_base': 11.5,
			'mp5_lvl': 0.4,
			'mp_base': 365,
			'mp_lvl': 43,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 335,
			'ms_base': 335,
			'pathing_radius': 35,
			'range': 550,
			'selection_radius': 125,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_taken': 1.05,
			'urf_healing': 0.95
		},
		'style': 90,
		'title': 'the Tidecaller',
		'toughness': 1,
		'utility': 2
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Tank',
		'apiname': 'nasus',
		'attack': 7,
		'be': 1350,
		'changes': 'V10.7',
		'control': 2,
		'damage': 2,
		'date': '2009-10-01',
		'ddragon_apiname': 'Nasus',
		'defense': 5,
		'difficulty': 1,
		'herotype': 'Fighter',
		'id': 75,
		'img': 'assets/images/champions/Nasus/Nasus.png',
		'index': 77,
		'magic': 6,
		'mobility': 1,
		'name': 'Nasus',
		'patch': 'V0.9.25.24',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 585,
		'skill_e':
		{
			'1': 'Spirit Fire',
			'img': 'assets/images/champions/Nasus/Spirit Fire.png',
			'tooltip': 'Nasus unleashes a spirit flame at target location, dealing 55/95/135/175/215 (+0.6) magic damage.<br><br>For the next 5 seconds, enemies in the area have their Armor reduced by 25/30/35/40/45% and are dealt an additional 11/19/27/35/43 (+0.12) magic damage each second.'
		},
		'skill_i':
		{
			'1': 'Soul Eater',
			'img': 'assets/images/champions/Nasus/Soul Eater.png',
			'tooltip': "Nasus drains his foe's spiritual energy, giving him bonus Life Steal."
		},
		'skill_q':
		{
			'1': 'Siphoning Strike',
			'img': 'assets/images/champions/Nasus/Siphoning Strike.png',
			'tooltip': "Nasus' next basic attack will deal 30/50/70/90/110 (+1) (+3) physical damage.<br><br>Siphoning Strike permanently gains 3 damage if it kills an enemy. This bonus is increased to 12 against Champions, large minions and large monsters."
		},
		'skill_r':
		{
			'1': 'Fury of the Sands',
			'img': 'assets/images/champions/Nasus/Fury of the Sands.png',
			'tooltip': "Nasus becomes empowered in the sandstorm for 15 seconds, increasing his maximum Health by ? and Armor and Magic Resistance by ?.<br><br>While the storm rages, he deals ? of nearby enemies' maximum Health each second as magic damage (? damage max per second), gains an additional ? Armor and Magic Resistance each second, and Siphoning Strike has a ?% reduced cooldown."
		},
		'skill_w':
		{
			'1': 'Wither',
			'img': 'assets/images/champions/Nasus/Wither.png',
			'tooltip': "Nasus ages target champion over 5 seconds, slowing their Movement Speed by 35%, increasing to 47/59/71/83/95% over the duration. The target's Attack Speed is reduced by half the amount."
		},
		'stats':
		{
			'acquisition_radius': 350,
			'ad_base': 67,
			'ad_lvl': 3.5,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 0.95,
			'arm_base': 34,
			'arm_lvl': 3.5,
			'as_base': 0.638,
			'as_lvl': 3.48,
			'as_ratio': 0.638000011444091,
			'attack_delay_offset': -0.0986036509275436,
			'critdmg': 0,
			'gameplay_radius': 80,
			'heal_shield': 0,
			'hp5_base': 9,
			'hp5_lvl': 0.9,
			'hp_base': 561.2,
			'hp_lvl': 90,
			'ls': 0,
			'mp5_base': 7.44,
			'mp5_lvl': 0.5,
			'mp_base': 325.6,
			'mp_lvl': 42,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 350,
			'ms_base': 350,
			'pathing_radius': 50,
			'range': 125,
			'selection_radius': 135,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 20,
		'title': 'the Curator of the Sands',
		'toughness': 3,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Fighter',
		'apiname': 'nautilus',
		'attack': 4,
		'be': 4800,
		'changes': 'V10.13',
		'control': 3,
		'damage': 1,
		'date': '2012-02-14',
		'ddragon_apiname': 'Nautilus',
		'defense': 6,
		'difficulty': 2,
		'herotype': 'Tank',
		'id': 111,
		'img': 'assets/images/champions/Nautilus/Nautilus.png',
		'index': 78,
		'magic': 6,
		'mobility': 1,
		'name': 'Nautilus',
		'patch': 'V1.0.0.134',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Riptide',
			'img': 'assets/images/champions/Nautilus/Riptide.png',
			'tooltip': 'Nautilus slams the ground, causing the earth to explode around him. Each explosion deals 55/85/115/145/175 (+0.3) magic damage to enemies in the area and slows them by 30/35/40/45/50% for 1.25 seconds. This slow diminishes over time.<br><br>A unit can be hit by more than one explosion, but they take 50% less damage from additional explosions.'
		},
		'skill_i':
		{
			'1': 'Staggering Blow',
			'img': 'assets/images/champions/Nautilus/Staggering Blow.png',
			'tooltip': "Nautilus' basic attacks deal increased physical damage and roots his target briefly. Staggering blow cannot trigger more than once every few seconds on the same target."
		},
		'skill_q':
		{
			'1': 'Dredge Line',
			'img': 'assets/images/champions/Nautilus/Dredge Line.png',
			'tooltip': 'Nautilus hurls his anchor forward. If it hits an enemy unit, Nautilus drags himself and the target together dealing 70/115/160/205/250 (+0.9) magic damage and stunning them briefly.<br><br>If the anchor hits terrain, Nautilus will drag himself forward, the cooldown is reduced by 50% (0.5), and 50% of the Mana cost is refunded.'
		},
		'skill_r':
		{
			'1': 'Depth Charge',
			'2': 'Depth Charge 2',
			'img': 'assets/images/champions/Nautilus/Depth Charge.png',
			'tooltip': 'Nautilus fires a shockwave that chases an enemy champion, dealing ? magic damage to other enemies it passes through, knocking them into the air, and stunning them for ? seconds.<br><br>The shockwave explodes upon hitting its target dealing ? magic damage, launching them into the air and stunning them for ? seconds. '
		},
		'skill_w':
		{
			'1': "Titan's Wrath",
			'img': "assets/images/champions/Nautilus/Titan's Wrath.png",
			'tooltip': "Nautilus surrounds himself with dark energies for 6 seconds, shielding him from the next 45/55/65/75/85 (+0.1) (9/10/11/12/13% of his max Health) damage.<br><br>While the shield persists, Nautilus' basic attacks deal 30/40/50/60/70 (+0.4) bonus magic damage over 2 seconds to all enemies around his target."
		},
		'stats':
		{
			'acquisition_radius': 400,
			'ad_base': 61,
			'ad_lvl': 3.3,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_taken': 1.08,
			'arm_base': 39,
			'arm_lvl': 3.75,
			'as_base': 0.706,
			'as_lvl': 1,
			'as_ratio': 0.611999988555908,
			'attack_delay_offset': 0.00637254910543561,
			'critdmg': 0,
			'gameplay_radius': 80,
			'heal_shield': 0,
			'hp5_base': 8.5,
			'hp5_lvl': 0.55,
			'hp_base': 576.48,
			'hp_lvl': 86,
			'ls': 0,
			'mp5_base': 8.626,
			'mp5_lvl': 0.5,
			'mp_base': 400,
			'mp_lvl': 47,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 325,
			'ms_base': 325,
			'pathing_radius': 50,
			'range': 175,
			'selection_radius': 125,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 80,
		'title': 'the Titan of the Depths',
		'toughness': 3,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Support',
		'apiname': 'neeko',
		'attack': 1,
		'be': 6300,
		'changes': 'V10.15',
		'control': 3,
		'damage': 3,
		'date': '2018-12-05',
		'ddragon_apiname': 'Neeko',
		'defense': 1,
		'difficulty': 1,
		'herotype': 'Mage',
		'id': 518,
		'img': 'assets/images/champions/Neeko/Neeko.png',
		'index': 79,
		'magic': 9,
		'mobility': 1,
		'name': 'Neeko',
		'patch': 'V8.24',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 975,
		'skill_e':
		{
			'1': 'Tangle-Barbs',
			'img': 'assets/images/champions/Neeko/Tangle-Barbs.png',
			'tooltip': 'Neeko slings a tangle that deals ? magic damage and roots for ? seconds.<br><br>The tangle becomes empowered after hitting an enemy, growing larger, moving faster, and rooting for ? seconds.'
		},
		'skill_i':
		{
			'1': 'Inherent Glamour',
			'img': 'assets/images/champions/Neeko/Inherent Glamour.png',
			'tooltip': 'Neeko can look like an ally champion. Taking damage from enemy Champions or casting damaging spells breaks the disguise.'
		},
		'skill_q':
		{
			'1': 'Blooming Burst',
			'img': 'assets/images/champions/Neeko/Blooming Burst.png',
			'tooltip': 'Neeko throws a seed that blooms to deal ? magic damage. If it kills a unit or hits a champion or large monster, it will bloom again, dealing ? magic damage. Max 2 extra blooms.'
		},
		'skill_r':
		{
			'1': 'Pop Blossom',
			'img': 'assets/images/champions/Neeko/Pop Blossom.png',
			'tooltip': 'After ? seconds Neeko leaps into the air. She gains a shield that absorbs ? damage (+? for each nearby enemy champion).<br><br>When Neeko lands she deals ? magic damage and stuns nearby enemies for ? seconds.<br><br>This ability can be prepared in secret if Neeko is disguised.'
		},
		'skill_w':
		{
			'1': 'Shapesplitter',
			'img': 'assets/images/champions/Neeko/Shapesplitter.png',
			'tooltip': "Passive: Every 3rd attack deals ? bonus magic damage and increases Neeko's Movement Speed by ?% for ? second.<br><br>Active: Neeko becomes invisible for ? seconds and projects a clone that lasts ? seconds. Neeko and the clone gain ?% Movement Speed for ? seconds."
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 48,
			'ad_lvl': 2.5,
			'apen': 0,
			'apen%': 0,
			'arm_base': 21,
			'arm_lvl': 4,
			'as_base': 0.625,
			'as_lvl': 3.5,
			'as_ratio': 0.67,
			'attack_cast_time': 0.333000004291534,
			'attack_total_time': 1.54999995231628,
			'critdmg': 0,
			'gameplay_radius': 80,
			'heal_shield': 0,
			'hp5_base': 7.5,
			'hp5_lvl': 0.75,
			'hp_base': 540,
			'hp_lvl': 90,
			'ls': 0,
			'mp5_base': 7,
			'mp5_lvl': 0.7,
			'mp_base': 450,
			'mp_lvl': 30,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 340,
			'ms_base': 340,
			'nb_dmg_taken': 0.95,
			'pathing_radius': 35,
			'range': 550,
			'selection_radius': 90,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 80,
		'title': 'the Curious Chameleon',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Mage',
		'apiname': 'nidalee',
		'attack': 5,
		'be': 3150,
		'changes': 'V10.15',
		'control': 1,
		'damage': 3,
		'date': '2009-12-17',
		'ddragon_apiname': 'Nidalee',
		'defense': 4,
		'difficulty': 2,
		'herotype': 'Assassin',
		'id': 76,
		'img': 'assets/images/champions/Nidalee/Nidalee.png',
		'index': 80,
		'magic': 7,
		'mobility': 3,
		'name': 'Nidalee',
		'patch': 'V1.0.0.63',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 790,
		'skill_e':
		{
			'1': 'Primal Surge',
			'2': 'Swipe',
			'img': 'assets/images/champions/Nidalee/Primal Surge.png',
			'tooltip': 'Human: Nidalee heals target ally champion for 35/55/75/95/115 (+0.325) to 70/110/150/190/230 (+?) based on their missing health and grants them 20/30/40/50/60% Attack Speed for 7 seconds.<br><br>Cougar: Nidalee claws at enemies in target direction.'
		},
		'skill_i':
		{
			'1': 'Prowl',
			'img': 'assets/images/champions/Nidalee/Prowl.png',
			'tooltip': "Moving through brush increases Nidalee's Movement Speed by 10% for 2 seconds, increased to 30% toward visible enemy champions within 1400 range.<br><br>Hitting champions or monsters with Javelin Toss or Bushwhack triggers a Hunt, granting True Sight of them for 4 seconds. During this time, Nidalee gains 10% Movement Speed (increased to 30% toward the Hunted target) and her Takedown and Pounce are enhanced against them."
		},
		'skill_q':
		{
			'1': 'Javelin Toss',
			'2': 'Takedown',
			'img': 'assets/images/champions/Nidalee/Javelin Toss.png',
			'tooltip': "Human: Nidalee throws her javelin, dealing 70/85/100/115/130 (+0.5) magic damage. If it exceeds her basic attack range, it gains damage based on distance flown, up to a potential 210/255/300/345/390 (+1.5) total damage.<br><br>Cougar: Nidalee's next attack deals additional damage, greatly increased on low health targets."
		},
		'skill_r':
		{
			'1': 'Aspect of the Cougar',
			'2': 'Aspect of the Cougar 2',
			'img': 'assets/images/champions/Nidalee/Aspect of the Cougar.png',
			'tooltip': 'Human: Nidalee transforms into a vicious cougar with the basic abilities Takedown, Pounce, and Swipe.<br><br>Cougar: Nidalee transforms back into human form. While in human form, triggering a Hunt resets the cooldown of Aspect of the Cougar.'
		},
		'skill_w':
		{
			'1': 'Bushwhack',
			'2': 'Pounce',
			'img': 'assets/images/champions/Nidalee/Bushwhack.png',
			'tooltip': 'Human: Nidalee places an invisible trap that lasts for 2 minutes. The trap triggers when an enemy walks over it, revealing the victim and bleeding them for 40/80/120/160/200 (+0.2) magic damage over 4 seconds.<br><br>? traps may be active at once. (Maximum traps increases at level 6, 11 and 16)<br><br>Cougar: Nidalee lunges in target direction, dealing damage to nearby enemies.'
		},
		'stats':
		{
			'ad_base': 61,
			'ad_lvl': 3.5,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 1.12,
			'arm_base': 28,
			'arm_lvl': 3.5,
			'as_base': 0.638,
			'as_lvl': 3.22,
			'as_ratio': 0.638000011444091,
			'attack_delay_offset': -0.150000005960464,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 6,
			'hp5_lvl': 0.6,
			'hp_base': 545,
			'hp_lvl': 85,
			'ls': 0,
			'mp5_base': 6,
			'mp5_lvl': 0.8,
			'mp_base': 295.6,
			'mp_lvl': 45,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 335,
			'ms_base': 335,
			'nb_dmg_dealt': 1.05,
			'nb_dmg_taken': 0.95,
			'ofa_dmg_dealt': 1.05,
			'ofa_dmg_taken': 0.95,
			'pathing_radius': 35,
			'range': 525,
			'selection_radius': 110,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.1,
			'urf_dmg_taken': 0.9
		},
		'style': 75,
		'title': 'the Bestial Huntress',
		'toughness': 1,
		'utility': 2
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Fighter',
		'apiname': 'nocturne',
		'attack': 9,
		'be': 4800,
		'changes': 'V10.13',
		'control': 2,
		'damage': 3,
		'date': '2011-03-15',
		'ddragon_apiname': 'Nocturne',
		'defense': 5,
		'difficulty': 1,
		'herotype': 'Assassin',
		'id': 56,
		'img': 'assets/images/champions/Nocturne/Nocturne.png',
		'index': 81,
		'magic': 2,
		'mobility': 2,
		'name': 'Nocturne',
		'patch': 'V1.0.0.113',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Unspeakable Horror',
			'img': 'assets/images/champions/Nocturne/Unspeakable Horror.png',
			'tooltip': "Passive: Nocturne gains massively increased Movement Speed toward feared enemies.<br><br>Active: Nocturne plants a nightmare into his target's mind, dealing 80/125/170/215/260 (+1) magic damage over 2 seconds. If Nocturne stays within range of the target for the full duration, the target becomes feared for 1.25/1.5/1.75/2/2.25 second(s)."
		},
		'skill_i':
		{
			'1': 'Umbra Blades',
			'img': 'assets/images/champions/Nocturne/Umbra Blades.png',
			'tooltip': "Every few seconds, Nocturne's next attack strikes surrounding enemies for bonus physical damage and heals himself. <br><br>Nocturne's basic attacks reduce this cooldown."
		},
		'skill_q':
		{
			'1': 'Duskbringer',
			'img': 'assets/images/champions/Nocturne/Duskbringer.png',
			'tooltip': 'Nocturne throws a shadow blade that deals 65/110/155/200/245 (+0.75) physical damage and leaves a Dusk Trail for 5 seconds. Enemy champions hit also leave a Dusk Trail.<br><br>While on the trail, Nocturne can move through units and gains 15/20/25/30/35% Movement Speed and 20/30/40/50/60 Attack Damage.'
		},
		'skill_r':
		{
			'1': 'Paranoia',
			'img': 'assets/images/champions/Nocturne/Paranoia.png',
			'tooltip': 'Nocturne reduces the sight radius of all enemy champions and removes their ally vision for ? seconds.<br><br>While Paranoia is active, Nocturne can launch himself at an enemy champion, dealing ? physical damage.'
		},
		'skill_w':
		{
			'1': 'Shroud of Darkness',
			'img': 'assets/images/champions/Nocturne/Shroud of Darkness.png',
			'tooltip': "Passive: Nocturne gains 30/35/40/45/50% Attack Speed.<br><br>Active: Nocturne creates a magical barrier for 1.5 seconds, which blocks the next enemy ability.<br><br>If an ability is blocked by the shield, Nocturne's passive Attack Speed bonus doubles for 5 seconds.<br><br>Shroud of Darkness will remain active during Paranoia's flight."
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 62,
			'ad_lvl': 3.1,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 1.1,
			'aram_dmg_taken': 0.9,
			'arm_base': 38,
			'arm_lvl': 3.5,
			'as_base': 0.721,
			'as_lvl': 2.7,
			'as_ratio': 0.667999982833862,
			'attack_delay_offset': -0.0994652435183525,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 7,
			'hp5_lvl': 0.75,
			'hp_base': 585,
			'hp_lvl': 85,
			'ls': 0,
			'mp5_base': 7,
			'mp5_lvl': 0.45,
			'mp_base': 275,
			'mp_lvl': 35,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 0.75,
			'ms': 345,
			'ms_base': 345,
			'pathing_radius': 35,
			'range': 125,
			'selection_radius': 120,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 0.95
		},
		'style': 30,
		'title': 'the Eternal Nightmare',
		'toughness': 1,
		'utility': 2
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Fighter',
		'apiname': 'nunu',
		'attack': 4,
		'be': 450,
		'changes': 'V10.15',
		'control': 2,
		'damage': 1,
		'date': '2009-02-21',
		'ddragon_apiname': 'Nunu',
		'defense': 6,
		'difficulty': 1,
		'fullname': 'Nunu & Willump',
		'herotype': 'Tank',
		'id': 20,
		'img': 'assets/images/champions/Nunu/Nunu.png',
		'index': 82,
		'magic': 7,
		'mobility': 1,
		'name': 'Nunu',
		'patch': 'Alpha Week 2',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 260,
		'skill_e':
		{
			'1': 'Snowball Barrage',
			'img': 'assets/images/champions/Nunu/Snowball Barrage.png',
			'tooltip': "Nunu throws 3 snowballs.  Snowball Barrage can be cast two additional times to throw even more snowballs.  Enemies hit take ? magic damage per snowball.  Enemies hit by 3 consecutive snowballs are slowed by ?% for ?s.  Champions and large monsters become Snowbound.<br><br>Willump's Turn: After ? seconds, all enemies within range that are Snowbound take ? magic damage and become rooted for ?s.<br>"
		},
		'skill_i':
		{
			'1': 'Call of the Freljord',
			'img': 'assets/images/champions/Nunu/Call of the Freljord.png',
			'tooltip': "Nunu increases the attack speed and movement speed of Willump and a nearby ally, and causes Willump's basic attacks to damage enemies around the target."
		},
		'skill_q':
		{
			'1': 'Consume',
			'img': 'assets/images/champions/Nunu/Consume.png',
			'tooltip': 'Willump takes a bite of an enemy, dealing damage and healing himself.  This healing increases by ?% when he is below ?% health.<br><br>Monsters and minions: Deals ? true damage and heals for ?.<br><br>Champions: Deals ? magic damage and heals for ?.'
		},
		'skill_r':
		{
			'1': 'Absolute Zero',
			'img': 'assets/images/champions/Nunu/Absolute Zero.png',
			'tooltip': "Willump channels for ? seconds, creating a powerful blizzard. Enemies in the blizzard are slowed by ?%, increasing to ?% over the duration. Nunu & Willump receive a shield that absorbs ? damage that decays over ? seconds after the blizzard ends.<br><br>When the blizzard ends, enemies in the area take up to ? magic damage, based on the blizzard's duration."
		},
		'skill_w':
		{
			'1': 'Biggest Snowball Ever!',
			'img': 'assets/images/champions/Nunu/Biggest Snowball Ever!.png',
			'tooltip': 'Willump rolls a snowball that grows in size and speed.  When it collides with an enemy champion, large monster, or wall, it explodes, dealing up to ? magic damage to nearby enemies and knocking them up for up to ?s.<br> <br>Reactivating the ability releases the snowball and rolls it forward on a straight path.<br><br>Holding a turn causes Willump to turn faster in that direction.'
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 61,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_taken': 0.95,
			'arm_base': 32,
			'arm_lvl': 3,
			'as_base': 0.625,
			'as_lvl': 2.25,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.106413997709751,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 5,
			'hp5_lvl': 0.8,
			'hp_base': 570,
			'hp_lvl': 82,
			'ls': 0,
			'mp5_base': 7,
			'mp5_lvl': 0.5,
			'mp_base': 280,
			'mp_lvl': 42,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 345,
			'ms_base': 345,
			'nb_dmg_dealt': 1.05,
			'nb_dmg_taken': 0.95,
			'ofa_dmg_dealt': 1.03,
			'ofa_dmg_taken': 0.95,
			'ofa_healing': 1.05,
			'pathing_radius': 35,
			'range': 125,
			'selection_radius': 140,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.1,
			'urf_dmg_taken': 0.9,
			'urf_healing': 1.1
		},
		'style': 80,
		'title': 'the Boy and His Yeti',
		'toughness': 3,
		'utility': 2
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Tank',
		'apiname': 'olaf',
		'attack': 9,
		'be': 3150,
		'changes': 'V10.6',
		'control': 2,
		'damage': 2,
		'date': '2010-06-09',
		'ddragon_apiname': 'Olaf',
		'defense': 5,
		'difficulty': 1,
		'herotype': 'Fighter',
		'id': 2,
		'img': 'assets/images/champions/Olaf/Olaf.png',
		'index': 83,
		'magic': 3,
		'mobility': 1,
		'name': 'Olaf',
		'patch': 'V1.0.0.87',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 790,
		'skill_e':
		{
			'1': 'Reckless Swing',
			'img': 'assets/images/champions/Olaf/Reckless Swing.png',
			'tooltip': "Olaf ferociously swings his axes, dealing 70/115/160/205/250 (+0.5) true damage to his target. This ability's cost is equal to 30% of the total damage dealt, but the cost is refunded if it kills the target.<br><br>Basic attacks lower the cooldown of Reckless Swing by 1 second."
		},
		'skill_i':
		{
			'1': 'Berserker Rage',
			'img': 'assets/images/champions/Olaf/Berserker Rage.png',
			'tooltip': "Olaf's Attack Speed is increased by 1% for each 1% of his Health he is missing."
		},
		'skill_q':
		{
			'1': 'Undertow',
			'img': 'assets/images/champions/Olaf/Undertow.png',
			'tooltip': "Olaf throws an axe to target location, dealing 80/125/170/215/260 (+1) physical damage to units it passes through and slowing them by 29/33/37/41/45% for up to 2.5 seconds. The further the Axe flies, the longer the slow lasts, but it is never less than 1.5 seconds.<br><br>If Olaf picks up the axe, the ability's cooldown is reduced by 4.5 seconds."
		},
		'skill_r':
		{
			'1': 'Ragnarok',
			'img': 'assets/images/champions/Olaf/Ragnarok.png',
			'tooltip': 'Passive: Olaf gains ? Armor and ? Magic Resist.<br><br>Active: Olaf removes all disables from himself and becomes immune to them for the next ? seconds. Olaf also receives a ?% Movement Speed bonus towards enemy champions for ? second. During this time, Olaf loses the passive portion of Ragnarok and gains ? Attack Damage.'
		},
		'skill_w':
		{
			'1': 'Vicious Strikes',
			'img': 'assets/images/champions/Olaf/Vicious Strikes.png',
			'tooltip': 'For 6 seconds, Olaf gains 14/16/18/20/22% Life Steal and his Attack Speed is increased by 55/65/75/85/95%.<br><br>During this time, Olaf also receives 1% increased healing from all sources for every 2% of Health he is missing.'
		},
		'stats':
		{
			'acquisition_radius': 400,
			'ad_base': 68,
			'ad_lvl': 3.5,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_taken': 0.95,
			'arm_base': 35,
			'arm_lvl': 3,
			'as_base': 0.694,
			'as_lvl': 2.7,
			'as_ratio': 0.694000005722045,
			'attack_delay_offset': -0.0656249970197677,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 8.5,
			'hp5_lvl': 0.9,
			'hp_base': 597.24,
			'hp_lvl': 93,
			'ls': 0,
			'mp5_base': 7.466,
			'mp5_lvl': 0.575,
			'mp_base': 315.6,
			'mp_lvl': 42,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 350,
			'ms_base': 350,
			'pathing_radius': 35,
			'range': 125,
			'selection_radius': 111.111099243164,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_taken': 0.95
		},
		'style': 30,
		'title': 'the Berserker',
		'toughness': 2,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Support',
		'apiname': 'orianna',
		'attack': 4,
		'be': 4800,
		'changes': 'V10.8',
		'control': 2,
		'damage': 2,
		'date': '2011-06-01',
		'ddragon_apiname': 'Orianna',
		'defense': 3,
		'difficulty': 2,
		'fullname': 'Orianna Reveck',
		'herotype': 'Mage',
		'id': 61,
		'img': 'assets/images/champions/Orianna/Orianna.png',
		'index': 84,
		'magic': 9,
		'mobility': 1,
		'name': 'Orianna',
		'patch': 'v1.0.0.119',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Command Protect',
			'img': 'assets/images/champions/Orianna/Command Protect.png',
			'tooltip': 'Passive: The Ball adds 10/15/20/25/30 Armor and Magic Resist to the allied champion it is attached to.<br><br>Active: Orianna commands her Ball to travel to and attach onto an allied champion, shielding them for 2.5 seconds from the next 60/100/140/180/220 (+0.5) damage. Enemies the Ball passes through along the way are damaged for 60/90/120/150/180 (+0.3) magic damage.'
		},
		'skill_i':
		{
			'1': 'Clockwork Windup',
			'2': 'Clockwork Winding',
			'img': 'assets/images/champions/Orianna/Clockwork Windup.png',
			'tooltip': "Orianna's autoattack deals additional magic damage. This damage increases the more Orianna attacks the same target."
		},
		'skill_q':
		{
			'1': 'Command Attack',
			'img': 'assets/images/champions/Orianna/Command Attack.png',
			'tooltip': 'Orianna commands her Ball to shoot toward a target location, dealing 60/90/120/150/180 (+0.5) magic damage to targets along the way. However, it deals 10% less damage for each unit it hits (Minimum 40%).<br><br>Her Ball remains behind at the target location afterwards.'
		},
		'skill_r':
		{
			'1': 'Command Shockwave',
			'img': 'assets/images/champions/Orianna/Command Shockwave.png',
			'tooltip': 'Orianna commands her Ball to unleash a shockwave after a brief delay, dealing ? magic damage to nearby enemies and flinging them into the air a set distance in the direction of the Ball.'
		},
		'skill_w':
		{
			'1': 'Command Dissonance',
			'img': 'assets/images/champions/Orianna/Command Dissonance.png',
			'tooltip': 'Orianna commands her Ball to release an electric pulse, dealing 60/105/150/195/240 (+0.7) magic damage to nearby enemies.<br><br>The pulse leaves behind an energy field for 3 seconds, lowering enemy Movement Speed by 30/35/40/45/50% and increasing ally Movement Speed by 30/35/40/45/50% for 2 seconds. This effect diminishes over time.'
		},
		'stats':
		{
			'acquisition_radius': 525,
			'ad_base': 40.368,
			'ad_lvl': 2.6,
			'apen': 0,
			'apen%': 0,
			'arm_base': 17.04,
			'arm_lvl': 3,
			'as_base': 0.658,
			'as_lvl': 3.5,
			'as_ratio': 0.657999992370605,
			'attack_delay_offset': -0.124561406672,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 7,
			'hp5_lvl': 0.55,
			'hp_base': 530,
			'hp_lvl': 91,
			'ls': 0,
			'mp5_base': 8,
			'mp5_lvl': 0.8,
			'mp_base': 418,
			'mp_lvl': 25,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 26,
			'mr_lvl': 0.5,
			'ms': 325,
			'ms_base': 325,
			'pathing_radius': 35,
			'range': 525,
			'selection_radius': 120,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 0.95,
			'urf_dmg_taken': 1.05
		},
		'style': 90,
		'title': 'the Lady of Clockwork',
		'toughness': 1,
		'utility': 2
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Fighter',
		'apiname': 'ornn',
		'attack': 5,
		'be': 6300,
		'changes': 'V10.15',
		'control': 3,
		'damage': 1,
		'date': '2017-08-23',
		'ddragon_apiname': 'Ornn',
		'defense': 9,
		'difficulty': 2,
		'herotype': 'Tank',
		'id': 516,
		'img': 'assets/images/champions/Ornn/Ornn.png',
		'index': 85,
		'magic': 3,
		'mobility': 1,
		'name': 'Ornn',
		'patch': 'V7.17',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 975,
		'skill_e':
		{
			'1': 'Searing Charge',
			'img': 'assets/images/champions/Ornn/Searing Charge.png',
			'tooltip': "Ornn charges, dealing ? physical damage to enemies hit.<br><br>If Ornn rams into terrain, he creates a shockwave that knocks up enemies for ? second and applies Searing Charge's damage to those not hit by the charge.<br><br>The shockwave destroys magma pillars and terrain created by enemy champions."
		},
		'skill_i':
		{
			'1': 'Living Forge',
			'2': 'Master Craftsman',
			'img': 'assets/images/champions/Ornn/Living Forge.png',
			'tooltip': 'Ornn gains an additional bonus Armor and Magic Resistance from all sources.<br><br>Ornn can spend gold to forge non-consumable items anywhere.<br><br>Additionally, he can create masterwork items for himself and for his allies.'
		},
		'skill_q':
		{
			'1': 'Volcanic Rupture',
			'img': 'assets/images/champions/Ornn/Volcanic Rupture.png',
			'tooltip': "Ornn slams the ground, creating a fissure which deals 20/45/70/95/120 (+0.6) physical damage and slows by 40% for 2 seconds. A magma pillar then forms at the fissure's end for 4 seconds.<br><br>The fissure stops shortly after hitting an enemy champion."
		},
		'skill_r':
		{
			'1': 'Call of the Forge God',
			'img': 'assets/images/champions/Ornn/Call of the Forge God.png',
			'tooltip': 'Ornn summons a massive lava elemental which stampedes toward him. Enemies run over by the elemental take ? magic damage, are slowed by up to ?% based on distance traveled by the elemental for ? seconds and become Brittle for ? seconds.<br><br>Ornn can recast this ability to smash into the elemental to redirect and empower it. The empowered elemental knocks the first enemy champion hit up for ? second (?% duration for subsequent champion hits), deals ? magic damage and applies Brittle.'
		},
		'skill_w':
		{
			'1': 'Bellows Breath',
			'img': 'assets/images/champions/Ornn/Bellows Breath.png',
			'tooltip': "Ornn stomps forwards, breathing fire and becoming unstoppable for ? seconds. The fire deals up to ?% target Max Health as magic damage.<br><br>Enemies hit by the final gout of flame become Brittle for ? seconds. The next immobilizing effect against a Brittle enemy has its duration increased by 30% and deals ? of their max health as magic damage.<br><br>Ornn's basic attacks knock back Brittle targets.<br>Minimum of ? against Champions and Minions, and maximum of ? against monsters.<br>"
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 69,
			'ad_lvl': 3.5,
			'apen': 0,
			'apen%': 0,
			'arm_base': 33,
			'arm_lvl': 4,
			'as_base': 0.625,
			'as_lvl': 2,
			'as_ratio': 0.625,
			'attack_cast_time': 0.349999994039535,
			'attack_total_time': 1.60000002384185,
			'critdmg': 0,
			'gameplay_radius': 80,
			'heal_shield': 0,
			'hp5_base': 9,
			'hp5_lvl': 0.9,
			'hp_base': 590,
			'hp_lvl': 95,
			'ls': 0,
			'mp5_base': 8.01,
			'mp5_lvl': 0.6,
			'mp_base': 340.6,
			'mp_lvl': 45,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 335,
			'ms_base': 335,
			'pathing_radius': 25.7665996551513,
			'range': 175,
			'selection_radius': 125,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.1,
			'urf_dmg_taken': 0.85
		},
		'style': 60,
		'title': 'The Fire below the Mountain',
		'toughness': 3,
		'utility': 2
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Assassin',
		'apiname': 'pantheon',
		'attack': 9,
		'be': 3150,
		'changes': 'V9.22',
		'control': 2,
		'damage': 3,
		'date': '2010-02-02',
		'ddragon_apiname': 'Pantheon',
		'defense': 4,
		'difficulty': 1,
		'fullname': 'Atreus',
		'herotype': 'Fighter',
		'id': 80,
		'img': 'assets/images/champions/Pantheon/Pantheon.png',
		'index': 86,
		'magic': 3,
		'mobility': 2,
		'name': 'Pantheon',
		'patch': 'V1.0.0.72',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 790,
		'skill_e':
		{
			'1': 'Aegis Assault',
			'img': 'assets/images/champions/Pantheon/Aegis Assault.png',
			'tooltip': "Pantheon braces his shield and engages enemies in a chosen direction for ? seconds, becoming immune to damage from that direction and dealing ? physical damage over the duration.<br><br>The last hit slams with Pantheon's shield, dealing ? physical damage. <br><br>Mortal Will Bonus: Duration is increased to ? seconds (dealing ? physical damage over the duration)."
		},
		'skill_i':
		{
			'1': 'Mortal Will',
			'img': 'assets/images/champions/Pantheon/Mortal Will.png',
			'tooltip': "Every few spells or attacks, Pantheon's next spell is empowered."
		},
		'skill_q':
		{
			'1': 'Comet Spear',
			'img': 'assets/images/champions/Pantheon/Comet Spear.png',
			'tooltip': "Tap: Pantheon thrusts his spear, dealing ? physical damage to enemies hit. Refunds ?% of Comet Spear's cooldown.<br><br>Hold: Pantheon hurls his spear, dealing ? physical damage to the first enemy hit and ?% less to further targets. <br><br>Comet Spear critically strikes enemies below ?% health for ? physical damage instead.<br><br>Mortal Will Bonus: Deals an additional ? physical damage and slow the target by ?% for ? seconds."
		},
		'skill_r':
		{
			'1': 'Grand Starfall',
			'img': 'assets/images/champions/Pantheon/Grand Starfall.png',
			'tooltip': 'Pantheon gathers his strength to leap high into the air, then crashes down as a meteor at the target area a few seconds later. Deals up to ? magic damage to enemies in a line (decreased by up to ?% at the edges of the area).<br><br>Grand Starfall instantly readies Mortal Will.'
		},
		'skill_w':
		{
			'1': 'Shield Vault',
			'img': 'assets/images/champions/Pantheon/Shield Vault.png',
			'tooltip': "Pantheon dashes to an enemy, dealing ? physical damage and stunning them for ? second.<br><br>Mortal Will Bonus: Pantheon's next attack strikes ? times, dealing a total of ? physical damage."
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 64,
			'ad_lvl': 3.3,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 1.05,
			'arm_base': 40,
			'arm_lvl': 3.75,
			'as_base': 0.644,
			'as_lvl': 2.95,
			'as_ratio': 0.643999993801116,
			'attack_delay_offset': -0.109687499701976,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 10,
			'hp5_lvl': 0.65,
			'hp_base': 580,
			'hp_lvl': 95,
			'ls': 0,
			'mp5_base': 7.356,
			'mp5_lvl': 0.45,
			'mp_base': 317.12,
			'mp_lvl': 31,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 28,
			'mr_lvl': 1.25,
			'ms': 355,
			'ms_base': 355,
			'pathing_radius': 35,
			'range': 175,
			'selection_radius': 125,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.1,
			'urf_dmg_taken': 0.9
		},
		'style': 75,
		'title': 'the Unbreakable Spear',
		'toughness': 2,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Fighter',
		'apiname': 'poppy',
		'attack': 6,
		'be': 450,
		'changes': 'V10.5',
		'control': 3,
		'damage': 2,
		'date': '2010-01-13',
		'ddragon_apiname': 'Poppy',
		'defense': 7,
		'difficulty': 2,
		'herotype': 'Tank',
		'id': 78,
		'img': 'assets/images/champions/Poppy/Poppy.png',
		'index': 87,
		'magic': 2,
		'mobility': 2,
		'name': 'Poppy',
		'patch': 'V1.0.0.70',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 260,
		'skill_e':
		{
			'1': 'Heroic Charge',
			'img': 'assets/images/champions/Poppy/Heroic Charge.png',
			'tooltip': 'Poppy tackles an enemy, dealing 60/80/100/120/140 (+0.5) physical damage and carrying them forward. If Poppy carries the target into terrain, the enemy takes 60/80/100/120/140 (+0.5) additional physical damage and is stunned for 1.6/1.7/1.8/1.9/2 seconds.'
		},
		'skill_i':
		{
			'1': 'Iron Ambassador',
			'2': 'Iron Ambassador 2',
			'img': 'assets/images/champions/Poppy/Iron Ambassador.png',
			'tooltip': 'Poppy throws her buckler that bounces off the target. Poppy can pick it up to gain a temporary shield.'
		},
		'skill_q':
		{
			'1': 'Hammer Shock',
			'img': 'assets/images/champions/Poppy/Hammer Shock.png',
			'tooltip': "Poppy smashes the ground, dealing 40/60/80/100/120 (+0.9) plus 8% of the enemies' maximum Health as physical damage, and leaving an unstable area.<br><br>The area slows enemies inside it by 20/25/30/35/40% and erupts after 1 second, dealing the initial damage again."
		},
		'skill_r':
		{
			'1': "Keeper's Verdict",
			'img': "assets/images/champions/Poppy/Keeper's Verdict.png",
			'tooltip': "First Cast: Poppy channels for up to ? seconds, slowing herself by ?%.<br><br>Second Cast: Poppy smashes the ground, emanating a shockwave that deals ? physical damage to enemies around the first champion hit and knocking them a large distance toward their Summoning Platform. The shockwave length and knockback distance increases with channel duration.<br><br>An uncharged Keeper's Verdict deals half damage and knocks enemies up for ? seconds.<br><br>Enemies hit with a charged Keeper's Verdict are untargetable."
		},
		'skill_w':
		{
			'1': 'Steadfast Presence',
			'2': 'Stubborn to a Fault',
			'img': 'assets/images/champions/Poppy/Steadfast Presence.png',
			'tooltip': 'Passive: Poppy gains ? Armor and ? Magic Resist (10% of Armor and Magic Resist). This bonus is doubled if Poppy is below 40% Health.<br><br>Active: For 2 seconds, Poppy gains 40% Movement Speed. During this time, she stops nearby enemy dashes, dealing 70/110/150/190/230 (+0.7) magic damage, grounding and slowing them by ?% for ? seconds.'
		},
		'stats':
		{
			'acquisition_radius': 400,
			'ad_base': 64,
			'ad_lvl': 4,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_taken': 0.95,
			'arm_base': 38,
			'arm_lvl': 3.5,
			'as_base': 0.625,
			'as_lvl': 2.5,
			'as_ratio': 0.625,
			'attack_cast_time': 0.375,
			'attack_total_time': 1.60000002384185,
			'critdmg': 0,
			'gameplay_radius': 55,
			'heal_shield': 0,
			'hp5_base': 8,
			'hp5_lvl': 0.8,
			'hp_base': 540,
			'hp_lvl': 90,
			'ls': 0,
			'mp5_base': 7,
			'mp5_lvl': 0.7,
			'mp_base': 280,
			'mp_lvl': 40,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32,
			'mr_lvl': 1.25,
			'ms': 345,
			'ms_base': 345,
			'pathing_radius': 35,
			'range': 125,
			'selection_radius': 95,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 75,
		'title': 'Keeper of the Hammer',
		'toughness': 3,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Assassin',
		'apiname': 'pyke',
		'attack': 9,
		'be': 6300,
		'changes': 'V10.14',
		'control': 3,
		'damage': 2,
		'date': '2018-05-31',
		'ddragon_apiname': 'Pyke',
		'defense': 3,
		'difficulty': 2,
		'herotype': 'Support',
		'id': 555,
		'img': 'assets/images/champions/Pyke/Pyke.png',
		'index': 88,
		'magic': 1,
		'mobility': 3,
		'name': 'Pyke',
		'patch': 'V8.11',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 975,
		'skill_e':
		{
			'1': 'Phantom Undertow',
			'img': 'assets/images/champions/Pyke/Phantom Undertow.png',
			'tooltip': 'Pyke dashes, leaving a drowned phantom behind him. After a short delay the phantom returns to Pyke, striking enemy champions along its path, stunning them for 1.25 (+?) seconds. Champions hit also take 105/135/165/195/225 (+1) physical damage.'
		},
		'skill_i':
		{
			'1': 'Gift of the Drowned Ones',
			'img': 'assets/images/champions/Pyke/Gift of the Drowned Ones.png',
			'tooltip': 'When Pyke is hidden from enemies, he regenerates damage that he has recently taken from champions. Pyke also cannot gain extra Maximum Health from any source, and instead gains Bonus AD.'
		},
		'skill_q':
		{
			'1': 'Bone Skewer',
			'img': 'assets/images/champions/Pyke/Bone Skewer.png',
			'tooltip': 'Tap: Pyke stabs in a direction, damaging the nearest enemy (preferring champions).<br><br>Hold: Pyke throws his harpoon, pulling the first enemy struck towards him.<br><br>'
		},
		'skill_r':
		{
			'1': 'Death from Below',
			'2': 'Death from Below 2',
			'img': 'assets/images/champions/Pyke/Death from Below.png',
			'tooltip': 'Pyke strikes all enemy champions in an X, blinking to and executing targets below ? (+?) (+?) health. Enemies not executed instead take physical damage equal to ?% of the threshold.<br><br>When an enemy champion dies in the X from any source, Pyke and an assisting ally both receive an additional Cut equal to full kill gold, and Pyke may re-cast Death From Below again within ? seconds.<br><br>Total gold shared with allies: ?<br>Total gold kept for self: ?'
		},
		'skill_w':
		{
			'1': 'Ghostwater Dive',
			'img': 'assets/images/champions/Pyke/Ghostwater Dive.png',
			'tooltip': 'Pyke gains Camouflage and 40% (+?%) decaying movement speed for ? seconds.<br><br>Stealth - Camouflage: Pyke is hidden from view while enemy champions remain outside his detection radius. Attacking or casting spells ends Camouflage.'
		},
		'stats':
		{
			'acquisition_radius': 400,
			'ad_base': 62,
			'ad_lvl': 2,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 1.05,
			'aram_dmg_taken': 0.95,
			'arm_base': 45,
			'arm_lvl': 3.5,
			'as_base': 0.667,
			'as_lvl': 2.5,
			'as_ratio': 0.666999995708465,
			'attack_cast_time': 0.300000011920928,
			'attack_total_time': 1.5,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 7,
			'hp5_lvl': 0.5,
			'hp_base': 600,
			'hp_lvl': 90,
			'ls': 0,
			'mp5_base': 8,
			'mp5_lvl': 1,
			'mp_base': 415,
			'mp_lvl': 50,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32,
			'mr_lvl': 1.25,
			'ms': 330,
			'ms_base': 330,
			'nb_dmg_taken': 0.95,
			'pathing_radius': 35,
			'range': 150,
			'selection_radius': 120,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.05,
			'urf_dmg_taken': 0.9
		},
		'style': 50,
		'title': 'the Bloodharbor Ripper',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'Physical',
		'alttype': 'Fighter',
		'apiname': 'qiyana',
		'attack': 0,
		'be': 6300,
		'changes': 'V10.13',
		'control': 2,
		'damage': 3,
		'date': '2019-06-28',
		'ddragon_apiname': 'Qiyana',
		'defense': 2,
		'difficulty': 2,
		'herotype': 'Assassin',
		'id': 246,
		'img': 'assets/images/champions/Qiyana/Qiyana.png',
		'index': 89,
		'magic': 4,
		'mobility': 2,
		'name': 'Qiyana',
		'patch': 'V9.13',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 975,
		'skill_e':
		{
			'1': 'Audacity',
			'img': 'assets/images/champions/Qiyana/Audacity.png',
			'tooltip': 'Dash through target enemy and deal ? physical damage to them.<br><br>If Elemental Wrath / Edge of Ixtal [?] is cast while this ability is targeting a champion, Qiyana will automatically aim it at her target.'
		},
		'skill_i':
		{
			'1': 'Royal Privilege',
			'img': 'assets/images/champions/Qiyana/Royal Privilege.png',
			'tooltip': "Qiyana's first basic attack or ability against each enemy deals bonus damage."
		},
		'skill_q':
		{
			'1': 'Edge of Ixtal',
			'2': 'Elemental Wrath',
			'img': 'assets/images/champions/Qiyana/Edge of Ixtal.png',
			'tooltip': "Elemental Wrath: Blast your weapon's enchantment in the target direction, consuming it. This projectile detonates to deal ? physical damage and:<br>Ice Enchantment: Briefly root enemies hit, then slow them by ?% for ?s.Rock Enchantment: ? bonus damage to units below ?% health.Wild Enchantment: Leaves a canopy trail that stealths you and grants ?% movement speed. Canopy fades after attacking from it, exiting it, or after ?s.<br><br>Edge Of Ixtal: If you do not have an enchantment, slash in the target direction, dealing ? physical damage to enemies in a small area.<br><br>Both abilities deal ? damage to targets beyond the first."
		},
		'skill_r':
		{
			'1': 'Supreme Display of Talent',
			'img': 'assets/images/champions/Qiyana/Supreme Display of Talent.png',
			'tooltip': 'Launch a shockwave that knocks back enemies and detonates when it hits a Wall. The entire Wall then explodes to stun nearby enemies for up to ?s and deal them physical damage equal to ? + ? of their max health.<br><br>Any River or Brush the shockwave passes through also explode after a delay for the same damage and stun.'
		},
		'skill_w':
		{
			'1': 'Terrashape',
			'img': 'assets/images/champions/Qiyana/Terrashape.png',
			'tooltip': "Active: Target River, Wall, or Brush. Conjure elemental power from the environment and dash towards it to enchant your weapon with it and reset Elemental Wrath [?]'s cooldown.<br><br>Passive: While your weapon is enchanted, you gain ?% Attack Speed and your attacks and basic abilities deal ? bonus magic damage. Additionally, you gain ?% movement speed while out of combat and near the corresponding terrain type."
		},
		'stats':
		{
			'ad_base': 64,
			'ad_lvl': 3.1,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 1.1,
			'aram_dmg_taken': 0.9,
			'arm_base': 28,
			'arm_lvl': 3.5,
			'as_base': 0.625,
			'as_lvl': 2.1,
			'as_ratio': 0.625,
			'attack_cast_time': 0.230000004172325,
			'attack_total_time': 1.5,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 8.5,
			'hp5_lvl': 0.65,
			'hp_base': 590,
			'hp_lvl': 90,
			'ls': 0,
			'mp5_base': 8,
			'mp5_lvl': 0.7,
			'mp_base': 320,
			'mp_lvl': 50,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 335,
			'ms_base': 335,
			'nb_dmg_taken': 0.95,
			'ofa_dmg_taken': 0.95,
			'pathing_radius': 35,
			'range': 150,
			'selection_radius': 120,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.05,
			'urf_dmg_taken': 0.95
		},
		'style': 70,
		'title': 'Empress of the Elements',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Assassin',
		'apiname': 'quinn',
		'attack': 9,
		'be': 4800,
		'changes': 'V10.9',
		'control': 2,
		'damage': 3,
		'date': '2013-03-01',
		'ddragon_apiname': 'Quinn',
		'defense': 4,
		'difficulty': 2,
		'fullname': 'Quinn and Valor',
		'herotype': 'Marksman',
		'id': 133,
		'img': 'assets/images/champions/Quinn/Quinn.png',
		'index': 90,
		'magic': 2,
		'mobility': 3,
		'name': 'Quinn',
		'patch': 'V3.03',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Vault',
			'img': 'assets/images/champions/Quinn/Vault.png',
			'tooltip': 'Quinn dashes to an enemy, dealing 40/70/100/130/160 (+0.2) physical damage while Valor marks it as Vulnerable.<br><br>Upon reaching the target, Quinn leaps off, briefly displacing and slowing it by 50% (diminishing over 1.5 seconds).'
		},
		'skill_i':
		{
			'1': 'Harrier',
			'img': 'assets/images/champions/Quinn/Harrier.png',
			'tooltip': "Valor, Quinn's Demacian eagle, periodically marks enemies as Vulnerable. Quinn's first basic attack against Vulnerable targets will deal bonus physical damage."
		},
		'skill_q':
		{
			'1': 'Blinding Assault',
			'img': 'assets/images/champions/Quinn/Blinding Assault.png',
			'tooltip': 'Valor flies in a line, marking the first enemy he hits as Vulnerable and reducing its vision radius dramatically for 1.75 seconds. He then deals 20/45/70/95/120 (+?) (+0.5) physical damage to all nearby enemies.<br><br>If the primary target is not a champion, it cannot attack for 1.75 seconds.'
		},
		'skill_r':
		{
			'1': 'Behind Enemy Lines',
			'2': 'Skystrike',
			'img': 'assets/images/champions/Quinn/Behind Enemy Lines.png',
			'tooltip': 'Quinn calls down Valor to assist her. After a 2 second channel, they unite, gaining ?% Total Movement Speed and the ability to cast Skystrike by recasting this ability or taking offensive action.<br><br>Skystrike: Quinn and Valor deal ? physical damage to nearby enemies and mark champions with Vulnerable. Casting Skystrike or taking other offensive actions will end Behind Enemy Lines.<br><br>Being damaged by non-minions removes the movement speed bonus for ? seconds. '
		},
		'skill_w':
		{
			'1': 'Heightened Senses',
			'img': 'assets/images/champions/Quinn/Heightened Senses.png',
			'tooltip': "Passive: Attacking a Vulnerable target increases Quinn's Attack Speed by 20/35/50/65/80% and Movement Speed by 20/25/30/35/40% for 2 seconds.<br><br>Active: Valor reveals a large area nearby for 2 seconds."
		},
		'stats':
		{
			'ad_base': 59,
			'ad_lvl': 2.4,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 1.08,
			'aram_dmg_taken': 0.92,
			'arm_base': 28,
			'arm_lvl': 3.5,
			'as_base': 0.668,
			'as_lvl': 3.1,
			'as_ratio': 0.667999982833862,
			'attack_delay_offset': -0.12456139922142,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 5.5,
			'hp5_lvl': 0.55,
			'hp_base': 532.8,
			'hp_lvl': 85,
			'ls': 0,
			'mp5_base': 6.972,
			'mp5_lvl': 0.4,
			'mp_base': 268.8,
			'mp_lvl': 35,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 335,
			'ms_base': 335,
			'pathing_radius': 35,
			'range': 525,
			'selection_radius': 120,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.05,
			'urf_dmg_taken': 0.9
		},
		'style': 20,
		'title': "Demacia's Wings",
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'apiname': 'rakan',
		'attack': 2,
		'be': 6300,
		'changes': 'V10.15',
		'control': 3,
		'damage': 1,
		'date': '2017-04-19',
		'ddragon_apiname': 'Rakan',
		'defense': 4,
		'difficulty': 2,
		'herotype': 'Support',
		'id': 497,
		'img': 'assets/images/champions/Rakan/Rakan.png',
		'index': 91,
		'magic': 8,
		'mobility': 3,
		'name': 'Rakan',
		'patch': 'V7.8',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 975,
		'skill_e':
		{
			'1': 'Battle Dance',
			'2': 'Battle Dance 2',
			'img': 'assets/images/champions/Rakan/Battle Dance.png',
			'tooltip': "Flies to an allied champion, granting them a 40/65/90/115/140 (+0.8) health shield for 3 seconds.<br><br>Can be re-cast at no cost once within 5 seconds.<br><br>Battle Dance's cast range is increased when cast on Xayah."
		},
		'skill_i':
		{
			'1': 'Fey Feathers',
			'2': "Lover's Leap",
			'img': 'assets/images/champions/Rakan/Fey Feathers.png',
			'tooltip': 'Rakan periodically gains a shield.'
		},
		'skill_q':
		{
			'1': 'Gleaming Quill',
			'img': 'assets/images/champions/Rakan/Gleaming Quill.png',
			'tooltip': 'Flings a magical feather that deals 70/115/160/205/250 (+0.6) magic damage to the first enemy hit.<br><br>If the feather hits a champion or epic monster, Rakan restores ? (+0.7) health to himself and nearby allies after 3 seconds or when he touches an ally.'
		},
		'skill_r':
		{
			'1': 'The Quickness',
			'img': 'assets/images/champions/Rakan/The Quickness.png',
			'tooltip': "Gain 75% movement speed for 4 seconds.<br><br>Touching enemies deals 100/200/300 (+0.5) magic damage and charms them for 1/1.25/1.5 second(s) the first time they're hit. The first champion charmed grants Rakan 150% decaying movement speed."
		},
		'skill_w':
		{
			'1': 'Grand Entrance',
			'img': 'assets/images/champions/Rakan/Grand Entrance.png',
			'tooltip': 'Dashes to a location. Upon arrival Rakan spirals into the air, dealing ? magic damage and knocking up enemies for ? second.'
		},
		'stats':
		{
			'acquisition_radius': 475,
			'ad_base': 62,
			'ad_lvl': 3.5,
			'apen': 0,
			'apen%': 0,
			'arm_base': 32,
			'arm_lvl': 3.9,
			'as_base': 0.635,
			'as_lvl': 3,
			'as_ratio': 0.634999990463256,
			'attack_cast_time': 0.270000010728836,
			'attack_total_time': 1.57500004768371,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 5,
			'hp5_lvl': 0.5,
			'hp_base': 540,
			'hp_lvl': 85,
			'ls': 0,
			'missile_speed': 0,
			'mp5_base': 8.75,
			'mp5_lvl': 0.5,
			'mp_base': 315,
			'mp_lvl': 50,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 335,
			'ms_base': 335,
			'pathing_radius': 35,
			'range': 300,
			'selection_radius': 125,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 90,
		'title': 'The Charmer',
		'toughness': 2,
		'utility': 3
	},
	{
		'adaptivetype': 'Mixed,Physical',
		'alttype': 'Fighter',
		'apiname': 'rammus',
		'attack': 4,
		'be': 1350,
		'changes': 'V10.5',
		'control': 3,
		'damage': 2,
		'date': '2009-07-10',
		'ddragon_apiname': 'Rammus',
		'defense': 10,
		'difficulty': 1,
		'herotype': 'Tank',
		'id': 33,
		'img': 'assets/images/champions/Rammus/Rammus.png',
		'index': 92,
		'magic': 5,
		'mobility': 2,
		'name': 'Rammus',
		'patch': 'July 10, 2009 Patch',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 585,
		'skill_e':
		{
			'1': 'Frenzying Taunt',
			'img': 'assets/images/champions/Rammus/Frenzying Taunt.png',
			'tooltip': "Taunt an enemy champion or monster for 1.25/1.5/1.75/2/2.25 seconds and gain 20/25/30/35/40% Attack Speed for the same duration.<br><br>While any of Rammus' other spells are active, Frenzying Taunt's Attack Speed bonus is refreshed."
		},
		'skill_i':
		{
			'1': 'Spiked Shell',
			'img': 'assets/images/champions/Rammus/Spiked Shell.png',
			'tooltip': "Rammus' basic attacks deal bonus magic damage, scaling with his Armor."
		},
		'skill_q':
		{
			'1': 'Powerball',
			'img': 'assets/images/champions/Rammus/Powerball.png',
			'tooltip': 'Rammus accelerates in a ball, gaining up to ?% Movement Speed over 6 seconds. On enemy collision, he stops, dealing 100/135/170/205/240 (+1) magic damage to nearby enemies, knocking them back, and slowing them by 40/50/60/70/80% for 1 second.<br><br>Can be reactivated to end the effect early and put Powerball on cooldown.<br>Powerball is a channeled spell and is subject to interruption by spells that prevent casting.<br>Casting Powerball cancels Defensive Ball Curl and puts it on cooldown.'
		},
		'skill_r':
		{
			'1': 'Tremors',
			'img': 'assets/images/champions/Rammus/Tremors.png',
			'tooltip': 'Shake the earth for ? seconds, dealing ? magic damage to nearby enemies and slowing them by ?% for ? seconds, stacking up to ? times.<br><br>Tremors deals ?% damage to turrets.'
		},
		'skill_w':
		{
			'1': 'Defensive Ball Curl',
			'img': 'assets/images/champions/Rammus/Defensive Ball Curl.png',
			'tooltip': 'Rammus enters a defensive formation for up to 6 seconds, increasing Armor by 30 plus 60/70/80/90/100% (0.1) and Magic Resist by 10 plus 30/35/40/45/50% (?) but becoming slowed by 30%.<br><br>During this time, Spiked Shell deals 150% damage and also deals its damage to enemies that basic attack Rammus.<br><br>Can be reactivated to end the effect early and put Defensive Ball Curl on cooldown.<br>Casting Defensive Ball Curl cancels Powerball and puts it on cooldown.'
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 55.88,
			'ad_lvl': 3.5,
			'apen': 0,
			'apen%': 0,
			'arm_base': 36,
			'arm_lvl': 4.3,
			'as_base': 0.656,
			'as_lvl': 2.215,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.0708333328366279,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 8,
			'hp5_lvl': 0.55,
			'hp_base': 564.48,
			'hp_lvl': 95,
			'ls': 0,
			'mp5_base': 7.84,
			'mp5_lvl': 0.5,
			'mp_base': 310.44,
			'mp_lvl': 33,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 335,
			'ms_base': 335,
			'pathing_radius': 35,
			'range': 125,
			'selection_radius': 120,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.1,
			'urf_dmg_taken': 0.88
		},
		'style': 65,
		'title': 'the Armordillo',
		'toughness': 3,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'apiname': 'reksai',
		'attack': 8,
		'be': 6300,
		'changes': 'V10.6',
		'control': 2,
		'damage': 2,
		'date': '2014-12-11',
		'ddragon_apiname': 'RekSai',
		'defense': 5,
		'difficulty': 2,
		'herotype': 'Fighter',
		'id': 421,
		'img': "assets/images/champions/Rek'Sai/Rek'Sai.png",
		'index': 93,
		'magic': 2,
		'mobility': 2,
		'name': "Rek'Sai",
		'patch': 'V4.21',
		'rangetype': 'Melee',
		'resource': 'Rage',
		'rp': 975,
		'skill_e':
		{
			'1': 'Furious Bite',
			'2': 'Tunnel',
			'img': "assets/images/champions/Rek'Sai/Furious Bite.png",
			'tooltip': "Un-Burrowed: Rek'Sai bites a target dealing 50/60/70/80/90 (+0.85) Physical Damage. At max Fury, the bite does 100% more and deals True Damage.<br><br>Maximum Damage: ?<br><br>Burrowed: Rek'Sai tunnels forward leaving two connected Tunnel Entrances. Clicking a Tunnel Entrance will make Rek'Sai dive to the other entrance.<br><br>Tunnel Entrances last for 10 minutes and can be destroyed by enemies. Rek'Sai may have 8 tunnels at one time. Tunnels have a 10/8/6/4/2 second cooldown on use."
		},
		'skill_i':
		{
			'1': "Fury of the Xer'Sai",
			'img': "assets/images/champions/Rek'Sai/Fury of the Xer'Sai.png",
			'tooltip': "While unburrowed Rek'Sai generates Fury with her basic attacks and spells. When burrowed Rek'Sai consumes Fury to heal herself."
		},
		'skill_q':
		{
			'1': "Queen's Wrath",
			'2': 'Prey Seeker',
			'img': "assets/images/champions/Rek'Sai/Queen's Wrath.png",
			'tooltip': "Un-Burrowed: Rek'Sai's next 3 basic attacks within 5 seconds deal 20/25/30/35/40 (+0.5) bonus Physical Damage to nearby enemies.<br><br>Burrowed: Rek'Sai launches a burst of void-charged earth that explodes on first enemy hit, dealing 60/90/120/150/180 (+0.7) (+0.5) Physical Damage and revealing non-stealthed enemies for 2.5 seconds. If it hits a Champion, it also generates 25 Fury."
		},
		'skill_r':
		{
			'1': 'Void Rush',
			'img': "assets/images/champions/Rek'Sai/Void Rush.png",
			'tooltip': "Passive: Dealing damage to enemy Champions marks them for the next ? seconds.<br><br>Active: Rek'Sai lets out a harrowing scream before burrowing underground seeking out a marked target. Moments later she leaps from underground, dealing ? physical damage plus ?% of their missing Health."
		},
		'skill_w':
		{
			'1': 'Burrow',
			'2': 'Unburrow',
			'img': "assets/images/champions/Rek'Sai/Burrow.png",
			'tooltip': "Un-Burrowed: Burrow into the ground. <br><br>Burrowed: Un-burrow, dealing 55/70/85/100/115 (+0.8) Physical Damage and knocking up the closest enemy for 1 second. All other nearby enemies will be knocked back. An enemy who has been knocked up will be immune from further Un-burrow effects for 10 seconds.<br><br>Burrowed Effects: New abilities, +? Movement Speed, reduced vision range, disabled basic attacks, and gains Tremor Sense: Nearby enemies that move in Fog of War have their position revealed to Rek'Sai and her allies."
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 64,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 1.12,
			'aram_dmg_taken': 0.88,
			'arm_base': 36,
			'arm_lvl': 3.75,
			'as_base': 0.667,
			'as_lvl': 2,
			'as_ratio': 0.666999995708465,
			'attack_cast_time': 0.400000005960464,
			'attack_delay_offset': -0.0916666686534881,
			'attack_total_time': 1.5,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 7.5,
			'hp5_lvl': 0.65,
			'hp_base': 570,
			'hp_lvl': 85,
			'ls': 0,
			'mp5_base': 0,
			'mp5_lvl': 0,
			'mp_base': 100,
			'mp_lvl': 0,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 335,
			'ms_base': 335,
			'nb_dmg_dealt': 1.05,
			'nb_dmg_taken': 0.9,
			'ofa_dmg_dealt': 1.05,
			'ofa_dmg_taken': 0.95,
			'pathing_radius': 30,
			'range': 175,
			'selection_radius': 100,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.1,
			'urf_dmg_taken': 0.9
		},
		'style': 30,
		'title': 'the Void Burrower',
		'toughness': 2,
		'utility': 2
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Tank',
		'apiname': 'renekton',
		'attack': 8,
		'be': 4800,
		'changes': 'V10.15',
		'control': 2,
		'damage': 2,
		'date': '2011-01-18',
		'ddragon_apiname': 'Renekton',
		'defense': 5,
		'difficulty': 1,
		'herotype': 'Fighter',
		'id': 58,
		'img': 'assets/images/champions/Renekton/Renekton.png',
		'index': 94,
		'magic': 2,
		'mobility': 2,
		'name': 'Renekton',
		'patch': 'V1.0.0.109',
		'rangetype': 'Melee',
		'resource': 'Fury',
		'rp': 880,
		'skill_e':
		{
			'1': 'Slice',
			'2': 'Dice',
			'img': 'assets/images/champions/Renekton/Slice.png',
			'tooltip': 'Slice: Renekton dashes, dealing 40/70/100/130/160 (+0.9) physical damage to enemies he passes through. Hitting an enemy grants the ability to use Dice for 4 seconds.<br><br>Dice: Renekton dashes, dealing 40/70/100/130/160 (+0.9) physical damage to enemies he passes through.<br><br>He generates 2 Fury for each non-champion hit and 10 Fury for each champion hit, up to a maximum of ? Fury.<br><br>Dice - 50 Fury Bonus: Damage increased to 70/115/160/205/250 (+1.35). Enemies hit have 25/27.5/30/32.5/35% reduced Armor for 4 seconds. No longer generates Fury.'
		},
		'skill_i':
		{
			'1': 'Reign of Anger',
			'img': 'assets/images/champions/Renekton/Reign of Anger.png',
			'tooltip': "Renekton's attacks generate Fury, increased when he is low on life. This Fury can empower his abilities with bonus effects."
		},
		'skill_q':
		{
			'1': 'Cull the Meek',
			'img': 'assets/images/champions/Renekton/Cull the Meek.png',
			'tooltip': 'Renekton swings his blade, dealing 65/100/135/170/205 (+0.8) physical damage to nearby enemies and healing himself for 3/4.5/6/7.5/9 (+0.8) Health for each non-champion hit and 1.2 (+?) Health for each champion hit, up to 50/75/100/125/150 Health.<br><br>He generates 2.5 Fury for each non-champion hit and 10 Fury for each champion hit, up to a maximum of 30 Fury.<br><br>50 Fury Bonus: Damage increased to 100/150/200/250/300 (+1.2). Heal increased to 9/13.5/18/22.5/27 (+?) per non-champion and ? (+?) per champion, up to 200/300/400/500/600. No longer generates Fury.'
		},
		'skill_r':
		{
			'1': 'Dominus',
			'img': 'assets/images/champions/Renekton/Dominus.png',
			'tooltip': 'Renekton surrounds himself with dark energies for ? seconds, gaining ? Health and ? Fury. While active, he deals ? magic damage to nearby enemies and gains ? Fury per second.'
		},
		'skill_w':
		{
			'1': 'Ruthless Predator',
			'img': 'assets/images/champions/Renekton/Ruthless Predator.png',
			'tooltip': "Renekton's next attack strikes twice, stunning his target for 0.75 seconds and dealing 5/15/25/35/45 (+1.5) physical damage per hit (10/30/50/70/90 (+2.25) total).<br><br>Each strike applies on-hit effects and generates Fury. Hitting a champion generates an additional 10 Fury.<br><br>50 Fury Bonus: Renekton attacks three times, instantly destroying damage shields on the target before dealing a total of 15/45/75/105/135 (+?) damage and stunning his target for 1.5 seconds. No longer generates Fury."
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 69,
			'ad_lvl': 3.75,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_taken': 0.95,
			'arm_base': 35,
			'arm_lvl': 4,
			'as_base': 0.665,
			'as_lvl': 2.75,
			'as_ratio': 0.665000021457672,
			'attack_delay_offset': -0.122695036232471,
			'critdmg': 0,
			'gameplay_radius': 80,
			'heal_shield': 0,
			'hp5_base': 8,
			'hp5_lvl': 0.75,
			'hp_base': 575,
			'hp_lvl': 87,
			'ls': 0,
			'mp5_base': 0,
			'mp5_lvl': 0,
			'mp_base': 100,
			'mp_lvl': 0,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 345,
			'ms_base': 345,
			'pathing_radius': 50,
			'range': 125,
			'selection_radius': 125,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 45,
		'title': 'the Butcher of the Sands',
		'toughness': 2,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Fighter',
		'apiname': 'rengar',
		'attack': 7,
		'be': 4800,
		'changes': 'V10.12',
		'control': 2,
		'damage': 3,
		'date': '2012-08-21',
		'ddragon_apiname': 'Rengar',
		'defense': 4,
		'difficulty': 2,
		'herotype': 'Assassin',
		'id': 107,
		'img': 'assets/images/champions/Rengar/Rengar.png',
		'index': 95,
		'magic': 2,
		'mobility': 2,
		'name': 'Rengar',
		'patch': 'V1.0.0.145',
		'rangetype': 'Melee',
		'resource': 'Ferocity',
		'rp': 880,
		'skill_e':
		{
			'1': 'Bola Strike',
			'img': 'assets/images/champions/Rengar/Bola Strike.png',
			'tooltip': 'Throw a bola, dealing 55/100/145/190/235 (+0.8) physical damage and slowing the first enemy hit by 30/45/60/75/90% for 1.75 seconds.<br><br>Ferocity effect:<br>Deals ? (+0.8) physical damage and roots the target for 1.75 seconds.'
		},
		'skill_i':
		{
			'1': 'Unseen Predator',
			'2': 'Bonetooth Necklace',
			'img': 'assets/images/champions/Rengar/Unseen Predator.png',
			'tooltip': "While in brush, Rengar leaps at his target with his basic attack. Leaping while at no Ferocity generates Ferocity.<br><br>At Max Ferocity, his next ability is empowered. Casting an empowered ability increases Rengar's Movement Speed for a few seconds.<br><br>Killing enemy champions awards trophies on Rengar's Bonetooth Necklace, granting bonus attack damage."
		},
		'skill_q':
		{
			'1': 'Savagery',
			'img': 'assets/images/champions/Rengar/Savagery.png',
			'tooltip': "Rengar gains 40% Attack Speed for his next 2 attacks. The first attack deals 30/60/90/120/150 (+?) physical damage.<br><br>Ferocity effect:<br>Savagery's damage is increased to ? (+1.4) and grants Rengar ?% Attack Speed for 5 seconds."
		},
		'skill_r':
		{
			'1': 'Thrill of the Hunt',
			'img': 'assets/images/champions/Rengar/Thrill of the Hunt.png',
			'tooltip': 'Rengar gains ?% Movement Speed and True Sight of the nearest enemy champion within ? range for ? seconds.<br><br>After the first ? seconds, Rengar becomes Camouflaged and can leap to an enemy without being in brush. Leaping to the nearest champion deals ? physical damage and reduces their Armor by ? for ? seconds.<br><br>Enemy champions within ? range and their nearby allies can sense Rengar during Thrill of the Hunt.<br>Enemies revealed by Thrill of the Hunt stay revealed while they remain in tracking range.<br>Attacking or casting most spells ends Thrill of the Hunt.<br>Stealth - Camouflaged: This character is hidden from view. It is revealed by nearby enemy champions and turrets.'
		},
		'skill_w':
		{
			'1': 'Battle Roar',
			'img': 'assets/images/champions/Rengar/Battle Roar.png',
			'tooltip': 'Deals 50/80/110/140/170 (+0.8) magic damage to nearby enemies and heals Rengar for 50% of the damage he took in the last 1.5 seconds.<br><br>Ferocity effect: <br>Deals ? (+0.8) magic damage and removes existing crowd control effects, in addition to its normal effect.<br><br>Damage healed from monster attacks is increased by 50%.'
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 68,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 1.05,
			'aram_dmg_taken': 0.9,
			'arm_base': 34,
			'arm_lvl': 3,
			'as_base': 0.667,
			'as_lvl': 3,
			'as_ratio': 0.666999995708465,
			'attack_cast_time': 0.300000011920928,
			'attack_total_time': 1.5,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 7,
			'hp5_lvl': 0.5,
			'hp_base': 585,
			'hp_lvl': 90,
			'ls': 0,
			'mp5_base': 0,
			'mp5_lvl': 0,
			'mp_base': 4,
			'mp_lvl': 0,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 345,
			'ms_base': 345,
			'pathing_radius': 35,
			'range': 125,
			'selection_radius': 70,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 30,
		'title': 'the Pridestalker',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Assassin',
		'apiname': 'riven',
		'attack': 8,
		'be': 4800,
		'changes': 'V10.15',
		'control': 2,
		'damage': 3,
		'date': '2011-09-14',
		'ddragon_apiname': 'Riven',
		'defense': 5,
		'difficulty': 1,
		'fullname': 'Konte Riven',
		'herotype': 'Fighter',
		'id': 92,
		'img': 'assets/images/champions/Riven/Riven.png',
		'index': 96,
		'magic': 1,
		'mobility': 3,
		'name': 'Riven',
		'patch': 'V1.0.0.125',
		'rangetype': 'Melee',
		'resource': 'None',
		'rp': 880,
		'skill_e':
		{
			'1': 'Valor',
			'img': 'assets/images/champions/Riven/Valor.png',
			'tooltip': 'Riven does a quick dash in the direction of your cursor and becomes shielded, blocking up to 95/125/155/185/215 (+1) incoming damage for 1.5 seconds.'
		},
		'skill_i':
		{
			'1': 'Runic Blade',
			'img': 'assets/images/champions/Riven/Runic Blade.png',
			'tooltip': "Riven's abilities charge her blade, and her basic attacks expend charges to deal an additional damage."
		},
		'skill_q':
		{
			'1': 'Broken Wings',
			'img': 'assets/images/champions/Riven/Broken Wings.png',
			'tooltip': 'Riven strikes out in front of her in a short line. This ability may be re-cast 2 additional times.<br><br>1st and 2nd Use: Slashes forward, dealing 15/35/55/75/95 (+[0.4, 0.45, 0.5, 0.55, 0.6]) physical damage to all units she comes in contact with.<br>3rd Use: Leaps forward and slams the ground dealing 15/35/55/75/95 (+[0.4, 0.45, 0.5, 0.55, 0.6]) physical damage and knocking nearby enemies up. This leap can cross unpathable terrain.<br><br>Riven will target the unit your cursor is hovering over, or if no targets are present, Riven will simply strike the direction she is currently facing.'
		},
		'skill_r':
		{
			'1': 'Blade of the Exile',
			'2': 'Wind Slash',
			'img': 'assets/images/champions/Riven/Blade of the Exile.png',
			'tooltip': "Riven's weapon surges with spiritual energy for ? seconds, granting her ?% extra Attack Damage (?), increased Range on her damaging spells and attacks, and the ability to use Wind Slash once.<br><br>Wind Slash: Riven fires a shockwave that deals from ? to ? physical damage to all enemies hit, increasing based on how much Health they are missing."
		},
		'skill_w':
		{
			'1': 'Ki Burst',
			'img': 'assets/images/champions/Riven/Ki Burst.png',
			'tooltip': "Riven's sword emits a burst of runic energy that shocks nearby enemies, dealing 55/85/115/145/175 (+1) physical damage and stunning them for 0.75 seconds."
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 64,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 1.05,
			'aram_dmg_taken': 0.9,
			'arm_base': 33,
			'arm_lvl': 3.2,
			'as_base': 0.625,
			'as_lvl': 3.5,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.133333340287208,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 8.5,
			'hp5_lvl': 0.5,
			'hp_base': 560,
			'hp_lvl': 86,
			'ls': 0,
			'mp5_base': 0,
			'mp5_lvl': 0,
			'mp_base': 0,
			'mp_lvl': 0,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 340,
			'ms_base': 340,
			'pathing_radius': 35,
			'range': 125,
			'selection_radius': 130,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_taken': 0.9
		},
		'style': 75,
		'title': 'the Exile',
		'toughness': 2,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Mage',
		'apiname': 'rumble',
		'attack': 3,
		'be': 4800,
		'changes': 'V10.6',
		'control': 2,
		'damage': 3,
		'date': '2011-04-26',
		'ddragon_apiname': 'Rumble',
		'defense': 6,
		'difficulty': 2,
		'herotype': 'Fighter',
		'id': 68,
		'img': 'assets/images/champions/Rumble/Rumble.png',
		'index': 97,
		'magic': 8,
		'mobility': 1,
		'name': 'Rumble',
		'patch': 'V1.0.0.116',
		'rangetype': 'Melee',
		'resource': 'Heat',
		'rp': 880,
		'skill_e':
		{
			'1': 'Electro Harpoon',
			'2': 'Electro Harpoon 2',
			'img': 'assets/images/champions/Rumble/Electro Harpoon.png',
			'tooltip': 'Rumble launches an electrified harpoon, dealing 60/85/110/135/160 (+0.4) magic damage and applying a stacking slow of 15/20/25/30/35% for 2 seconds. Rumble can store up to two harpoons at a time, which recharge once every ? seconds (modified by cooldown reduction).<br><br>Danger Zone Bonus: Damage and slow percentage increased by 50%.'
		},
		'skill_i':
		{
			'1': 'Junkyard Titan',
			'2': 'Junkyard Titan 2',
			'3': 'Junkyard Titan 3',
			'img': 'assets/images/champions/Rumble/Junkyard Titan.png',
			'tooltip': 'Every spell Rumble casts gives him Heat. When he reaches 50% Heat he reaches Danger Zone, granting all his basic abilities bonus effects. When he reaches 100% Heat, he starts Overheating, granting his basic attacks bonus damage, but making him unable to cast spells for a few seconds.'
		},
		'skill_q':
		{
			'1': 'Flamespitter',
			'img': 'assets/images/champions/Rumble/Flamespitter.png',
			'tooltip': 'Rumble torches his opponents, dealing 175/210/245/280/315 (+1.1) magic damage in a cone over 3 seconds. This spell deals 60/65/70/75/80% damage to minions.<br><br>Danger Zone Bonus: Deals 150% damage.'
		},
		'skill_r':
		{
			'1': 'The Equalizer',
			'img': 'assets/images/champions/Rumble/The Equalizer.png',
			'tooltip': 'Rumble launches a line of rockets that creates a burning trail for ? seconds. Enemies in the area have their Movement Speed slowed by ?% and take ? magic damage each second.<br><br>You can control the placement of this attack by clicking and dragging your mouse in a line.'
		},
		'skill_w':
		{
			'1': 'Scrap Shield',
			'2': 'Scrap Shield 2',
			'img': 'assets/images/champions/Rumble/Scrap Shield.png',
			'tooltip': 'Rumble tosses up a shield for 1.5 seconds that absorbs 60/95/130/165/200 (+0.5) damage. Rumble also gains an additional 15/20/25/30/35% Movement Speed for 1 second.<br><br>Danger Zone Bonus: 50% increase in shield health and Movement Speed.'
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 61,
			'ad_lvl': 3.2,
			'apen': 0,
			'apen%': 0,
			'arm_base': 31,
			'arm_lvl': 3.5,
			'as_base': 0.644,
			'as_lvl': 1.85,
			'as_ratio': 0.643999993801116,
			'attack_delay_offset': -0.0708333328366279,
			'critdmg': 0,
			'gameplay_radius': 80,
			'heal_shield': 0,
			'hp5_base': 8,
			'hp5_lvl': 0.6,
			'hp_base': 589,
			'hp_lvl': 85,
			'ls': 0,
			'mp5_base': 0,
			'mp5_lvl': 0,
			'mp_base': 100,
			'mp_lvl': 0,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 345,
			'ms_base': 345,
			'pathing_radius': 35,
			'range': 125,
			'selection_radius': 165,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 0.9
		},
		'style': 90,
		'title': 'the Mechanized Menace',
		'toughness': 2,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Fighter',
		'apiname': 'ryze',
		'attack': 2,
		'be': 450,
		'changes': 'V10.13',
		'control': 2,
		'damage': 3,
		'date': '2009-02-21',
		'ddragon_apiname': 'Ryze',
		'defense': 2,
		'difficulty': 2,
		'herotype': 'Mage',
		'id': 13,
		'img': 'assets/images/champions/Ryze/Ryze.png',
		'index': 98,
		'magic': 10,
		'mobility': 2,
		'name': 'Ryze',
		'patch': 'Alpha Week 2',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 260,
		'skill_e':
		{
			'1': 'Spell Flux',
			'img': 'assets/images/champions/Ryze/Spell Flux.png',
			'tooltip': 'Fire an orb that deals ? magic damage, spreading Flux to the target and all nearby enemies for ? seconds.<br><br>If attempting to apply Flux to an enemy that already has it, it further spreads.<br>'
		},
		'skill_i':
		{
			'1': 'Arcane Mastery',
			'img': 'assets/images/champions/Ryze/Arcane Mastery.png',
			'tooltip': "Ryze's spells deal extra damage based on his Bonus Mana, and he gains a percentage increase to his maximum Mana based on his Ability Power."
		},
		'skill_q':
		{
			'1': 'Overload',
			'2': 'Overload 2',
			'3': 'Overload 3',
			'4': 'Overload 4',
			'5': 'Overload 5',
			'img': 'assets/images/champions/Ryze/Overload.png',
			'tooltip': "Passive: Rune Prison and Spell Flux reset Overload's cooldown and charge a rune (up to ?) for ? seconds. Overload discharges all runes, granting ?% Movement Speed for ? seconds if ? runes are charged.<br><br>Active: Unleash a blast that deals ? magic damage to the first enemy struck. If the target has Flux on it, Overload consumes it, dealing ?% increased damage and bouncing to nearby enemies with Flux."
		},
		'skill_r':
		{
			'1': 'Realm Warp',
			'img': 'assets/images/champions/Ryze/Realm Warp.png',
			'tooltip': 'Passive: Overload damage bonus against targets with Flux increased to ?%.<br><br>Active: Ryze opens a portal to another location. After ? seconds, all allies near the portal are teleported to that location.<br><br>If Ryze becomes unable to cast or move, Realm Warp is cancelled.'
		},
		'skill_w':
		{
			'1': 'Rune Prison',
			'img': 'assets/images/champions/Ryze/Rune Prison.png',
			'tooltip': 'Instantly deal ? magic damage and slow an enemy by ?% for ? seconds. If the target has Flux on it, it is rooted instead, consuming Flux in the process.'
		},
		'stats':
		{
			'acquisition_radius': 575,
			'ad_base': 58,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 1.05,
			'aram_dmg_taken': 0.95,
			'arm_base': 22,
			'arm_lvl': 3,
			'as_base': 0.625,
			'as_lvl': 2.112,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.100000001490116,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 8,
			'hp5_lvl': 0.8,
			'hp_base': 575,
			'hp_lvl': 98,
			'ls': 0,
			'mp5_base': 8,
			'mp5_lvl': 1,
			'mp_base': 300,
			'mp_lvl': 50,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 36,
			'mr_lvl': 0.5,
			'ms': 340,
			'ms_base': 340,
			'pathing_radius': 35,
			'range': 550,
			'selection_radius': 120,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.05,
			'urf_dmg_taken': 0.9
		},
		'style': 100,
		'title': 'the Rune Mage',
		'toughness': 1,
		'utility': 2
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Fighter',
		'apiname': 'sejuani',
		'attack': 5,
		'be': 4800,
		'changes': 'V10.14',
		'control': 3,
		'damage': 2,
		'date': '2012-01-17',
		'ddragon_apiname': 'Sejuani',
		'defense': 7,
		'difficulty': 2,
		'herotype': 'Tank',
		'id': 113,
		'img': 'assets/images/champions/Sejuani/Sejuani.png',
		'index': 99,
		'magic': 6,
		'mobility': 2,
		'name': 'Sejuani',
		'patch': 'V1.0.0.132',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Permafrost',
			'img': 'assets/images/champions/Sejuani/Permafrost.png',
			'tooltip': "Passive: Nearby melee allied champions' basic attacks apply Frost to enemy champions, large monsters, medium monsters, and large minions.<br><br>Active: Target enemy with 4 stacks of Frost takes 55/105/155/205/255 (+0.6) magic damage, is stunned for 1 second(s), and is briefly displaced.<br><br>Enemy champions stunned by Sejuani cannot gain Frost for ? seconds."
		},
		'skill_i':
		{
			'1': 'Fury of the North',
			'img': 'assets/images/champions/Sejuani/Fury of the North.png',
			'tooltip': 'After being out of combat, Sejuani gains Frost Armor which grants Armor and Magic Resist and immunity to slows. Frost Armor persists for a short time after Sejuani takes damage.  Sejuani can damage a stunned enemy to shatter it, dealing massive magic damage.'
		},
		'skill_q':
		{
			'1': 'Arctic Assault',
			'img': 'assets/images/champions/Sejuani/Arctic Assault.png',
			'tooltip': 'Sejuani charges, dealing 80/130/180/230/280 (+0.6) magic damage to enemies and knocking them up. The charge ends after hitting an enemy champion.'
		},
		'skill_r':
		{
			'1': 'Glacial Prison',
			'img': 'assets/images/champions/Sejuani/Glacial Prison.png',
			'tooltip': 'Sejuani throws her True Ice bola that deals 100/125/150 (+0.4) magic damage to the first enemy champion hit and stuns them for 1 second.<br><br>The bola becomes more powerful as it travels, dealing 150/250/350 (+0.8) magic damage, stunning for 1.5 seconds and creating a storm that slows other enemies by 30%. After 2 seconds, the storm deals 150/250/350 (+0.8) magic damage and slows by 80% for 1 second.'
		},
		'skill_w':
		{
			'1': "Winter's Wrath",
			'img': "assets/images/champions/Sejuani/Winter's Wrath.png",
			'tooltip': 'Sejuani swings her flail, dealing 20/25/30/35/40 (+?) (+?) physical damage and applying Frost to enemies hit and knocking minions and monsters back.<br><br>She then lashes out with her flail, dealing 30/70/110/150/190 (+?) (+?) physical damage, applying Frost and slowing enemies hit by ?% for ? second.'
		},
		'stats':
		{
			'ad_base': 66,
			'ad_lvl': 4,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_taken': 0.92,
			'arm_base': 34,
			'arm_lvl': 4.25,
			'as_base': 0.688,
			'as_lvl': 3.5,
			'as_ratio': 0.625,
			'attack_cast_time': 0.300000011920928,
			'attack_total_time': 1.60000002384185,
			'critdmg': 0,
			'gameplay_radius': 80,
			'heal_shield': 0,
			'hp5_base': 8.5,
			'hp5_lvl': 1,
			'hp_base': 560,
			'hp_lvl': 100,
			'ls': 0,
			'mp5_base': 7,
			'mp5_lvl': 0.7,
			'mp_base': 400,
			'mp_lvl': 40,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 340,
			'ms_base': 340,
			'pathing_radius': 50,
			'range': 150,
			'selection_radius': 140,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_taken': 0.95
		},
		'style': 75,
		'title': 'Fury of the North',
		'toughness': 2,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Support',
		'apiname': 'senna',
		'attack': 7,
		'be': 6300,
		'changes': 'V10.12',
		'control': 2,
		'damage': 2,
		'date': '2019-11-10',
		'ddragon_apiname': 'Senna',
		'defense': 2,
		'difficulty': 2,
		'herotype': 'Marksman',
		'id': 235,
		'img': 'assets/images/champions/Senna/Senna.png',
		'index': 100,
		'magic': 6,
		'mobility': 1,
		'name': 'Senna',
		'patch': 'V9.22',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 975,
		'skill_e':
		{
			'1': 'Curse of the Black Mist',
			'img': 'assets/images/champions/Senna/Curse of the Black Mist.png',
			'tooltip': 'Senna dissolves into a cloud of Mist for ? seconds, becoming a wraith. Allied champions who enter the Mist are Camouflaged and become wraiths when they leave. Wraiths gain ? Movement Speed. They are unselectable and hide their identities as long as no enemy champions are nearby. '
		},
		'skill_i':
		{
			'1': 'Absolution',
			'img': 'assets/images/champions/Senna/Absolution.png',
			'tooltip': "When units die near Senna, their souls are periodically trapped by the Black Mist. Senna can attack these souls to free them, absorbing the Mist that held them in death. Mist fuels her Relic Cannon's power with increased Attack Damage, Attack Range, and Critical Strike Chance. <br><br>Attacks from Senna's Relic Cannon take longer to fire, deals bonus damage , and briefly grant her a portion of her target's Movement Speed."
		},
		'skill_q':
		{
			'1': 'Piercing Darkness',
			'img': 'assets/images/champions/Senna/Piercing Darkness.png',
			'tooltip': "Senna shoots a bolt of piercing shadow through an ally or enemy. Enemies hit take ? physical damage. Allied champions hit are healed for ? health. <br><br>Basic attacks reduce Piercing Darkness's cooldown by ? seconds."
		},
		'skill_r':
		{
			'1': 'Dawning Shadow',
			'img': 'assets/images/champions/Senna/Dawning Shadow.png',
			'tooltip': "Senna fires a blast of light with global range. Enemy champions hit take ? physical damage. Allied champions hit in a wider area receive a shield for ? seconds that absorbs ? damage. The shield's power scales with the amount of Mist Senna has collected."
		},
		'skill_w':
		{
			'1': 'Last Embrace',
			'img': 'assets/images/champions/Senna/Last Embrace.png',
			'tooltip': 'Senna sends forth the Black Mist, dealing ? physical damage to the first enemy hit. After a ? second delay the target and other nearby enemies are rooted for ? seconds.'
		},
		'stats':
		{
			'acquisition_radius': 800,
			'ad_base': 50,
			'ad_lvl': 0,
			'apen': 0,
			'apen%': 0,
			'arm_base': 28,
			'arm_lvl': 3.5,
			'as_base': 0.625,
			'as_lvl': 4,
			'as_ratio': 0.2,
			'attack_cast_time': 0.5,
			'attack_total_time': 1.60000002384185,
			'crit_mod': 0.65,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 3.5,
			'hp5_lvl': 0.55,
			'hp_base': 520,
			'hp_lvl': 75,
			'ls': 0,
			'missile_speed': 0,
			'mp5_base': 11.5,
			'mp5_lvl': 0.4,
			'mp_base': 350,
			'mp_lvl': 45,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 330,
			'ms_base': 330,
			'ofa_dmg_dealt': 1.05,
			'pathing_radius': 35,
			'range': 600,
			'selection_radius': 115,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.1,
			'urf_dmg_taken': 0.95,
			'windup_modifier': 0.600000023841857
		},
		'style': 30,
		'title': 'the Redeemer',
		'toughness': 1,
		'utility': 3
	},
	{
		'adaptivetype': 'Physical',
		'alttype': 'Tank',
		'apiname': 'sett',
		'attack': 8,
		'be': 6300,
		'changes': 'V10.14',
		'control': 2,
		'damage': 2,
		'date': '2020-01-14',
		'ddragon_apiname': 'Sett',
		'defense': 5,
		'difficulty': 2,
		'herotype': 'Fighter',
		'id': 875,
		'img': 'assets/images/champions/Sett/Sett.png',
		'index': 101,
		'magic': 1,
		'mobility': 2,
		'name': 'Sett',
		'patch': 'V10.1',
		'rangetype': 'Melee',
		'resource': 'Grit',
		'rp': 975,
		'skill_e':
		{
			'1': 'Facebreaker',
			'img': 'assets/images/champions/Sett/Facebreaker.png',
			'tooltip': 'Sett smashes enemies on either side of him into each other, dealing ? (+?) physical damage and slowing them by ?% for ? seconds. If Sett grabbed at least one enemy on each side, all enemies are stunned for ? second.'
		},
		'skill_i':
		{
			'1': 'Pit Grit',
			'img': 'assets/images/champions/Sett/Pit Grit.png',
			'tooltip': "Sett's basic attacks alternate between left and right punch. Right punch is slightly stronger and faster. Sett also hates losing, gaining additional health regeneration based off of his missing health."
		},
		'skill_q':
		{
			'1': 'Knuckle Down',
			'img': 'assets/images/champions/Sett/Knuckle Down.png',
			'tooltip': "Sett itches for a fight, gaining ?% movement speed for ? seconds while moving towards enemy champions.<br><br>Sett's next two basic attacks deal ? bonus physical damage, plus ? of the target's maximum health [?% + ? per 100 attack damage].<br><br>Against monsters the damage is capped at 400 per punch."
		},
		'skill_r':
		{
			'1': 'The Show Stopper',
			'img': 'assets/images/champions/Sett/The Show Stopper.png',
			'tooltip': "Sett grabs an enemy champion, carries them forward, then slams them into the ground. All enemies near the impact take ? (+?) (+? of the grabbed enemy's bonus health) physical damage and are slowed by ?% for ? second. Enemies take less damage the further they are from where Sett lands."
		},
		'skill_w':
		{
			'1': 'Haymaker',
			'img': 'assets/images/champions/Sett/Haymaker.png',
			'tooltip': "Passive: Sett stores ?% of damage taken as Grit, to a cap of ? (?% of Sett's max health). Grit decays quickly ? seconds after the damage was taken.<br><br>Active: Sett winds up a giant punch in a direction, expending all Grit to deal ? (+? of expended Grit) as true damage to all enemies in the center line. Enemies not in the center line take physical damage instead.<br><br>Maximum Damage: ?<br><br>Sett also gains a rapidly decaying shield equal to Grit expended for ? seconds."
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 60,
			'ad_lvl': 4,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 0.95,
			'aram_dmg_taken': 1.05,
			'arm_base': 33,
			'arm_lvl': 4,
			'as_base': 0.625,
			'as_lvl': 1.75,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.0857142857,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 7,
			'hp5_lvl': 0.5,
			'hp_base': 600,
			'hp_lvl': 93,
			'ls': 0,
			'mp5_base': 0,
			'mp5_lvl': 0,
			'mp_base': 0,
			'mp_lvl': 0,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32,
			'mr_lvl': 1.25,
			'ms': 340,
			'ms_base': 340,
			'nb_dmg_dealt': 0.97,
			'pathing_radius': 35,
			'range': 125,
			'selection_radius': 100,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.05,
			'urf_dmg_taken': 0.9
		},
		'style': 40,
		'title': 'the Boss',
		'toughness': 2,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'apiname': 'shaco',
		'attack': 8,
		'be': 3150,
		'changes': 'V10.14',
		'control': 2,
		'damage': 3,
		'date': '2009-10-10',
		'ddragon_apiname': 'Shaco',
		'defense': 4,
		'difficulty': 2,
		'herotype': 'Assassin',
		'id': 35,
		'img': 'assets/images/champions/Shaco/Shaco.png',
		'index': 102,
		'magic': 6,
		'mobility': 2,
		'name': 'Shaco',
		'patch': 'V0.9.25.34',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 790,
		'skill_e':
		{
			'1': 'Two-Shiv Poison',
			'img': 'assets/images/champions/Shaco/Two-Shiv Poison.png',
			'tooltip': "Passive: While Two-Shiv Poison is ready to cast, Shaco's basic attacks reduce the target's Movement Speed by ?% for ? seconds.<br><br>Active: Shaco throws a shiv that deals ? magic damage and reduces the target's Movement Speed by ?% for ? seconds. If the target has less than ?% health, the shiv deals ?% damage (? total)."
		},
		'skill_i':
		{
			'1': 'Backstab',
			'img': 'assets/images/champions/Shaco/Backstab.png',
			'tooltip': "Shaco's basic attacks and Two-Shiv Poison deal additional damage when striking from behind."
		},
		'skill_q':
		{
			'1': 'Deceive',
			'img': 'assets/images/champions/Shaco/Deceive.png',
			'tooltip': 'Shaco teleports nearby and becomes Invisible for ? seconds. Shaco remains Invisible even if he uses Jack in the Box or Hallucinate. <br><br>His next basic attack during Invisibility deals ? bonus physical damage (this damage can crit). If attacking from behind, this attack also critically strikes for ?% damage.<br><br>Stealth - Invisible: Shaco can only be revealed by nearby enemy Turrets or True Sight.'
		},
		'skill_r':
		{
			'1': 'Hallucinate',
			'2': 'Command Hallucinate',
			'img': 'assets/images/champions/Shaco/Hallucinate.png',
			'tooltip': "Shaco vanishes briefly and reappears with a clone. The clone lasts up to ? seconds and detonates when it dies, dealing ? magic damage to nearby enemies and spawning three mini Jack in the Boxes that trigger immediately. <br><br>Mini boxes deal ? damage (? if attacking only one enemy) and make enemies flee for ? second(s).Clone deals ?% of Shaco's damage and receives ?% increased damage.<br>The clone can be controlled by holding the Alt key and using the Right Mouse button or by reactivating this ability."
		},
		'skill_w':
		{
			'1': 'Jack in the Box',
			'img': 'assets/images/champions/Shaco/Jack in the Box.png',
			'tooltip': 'Shaco creates a Jack in the Box that hides from view after 2 seconds. It pops out when an enemy comes near or when uncovered by a ward or trinket, making nearby enemies flee very slowly for 0.5/0.75/1/1.25/1.5 seconds (? seconds for minions and monsters).<br><br>It attacks all nearby enemies for ? magic damage, increased to 35/50/65/80/95 (+0.2) if it is attacking only one enemy. It lasts for 40 (+0.05) seconds while hidden or 5 seconds while firing. '
		},
		'stats':
		{
			'acquisition_radius': 400,
			'ad_base': 63,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'arm_base': 30,
			'arm_lvl': 3.5,
			'as_base': 0.694,
			'as_lvl': 3,
			'as_ratio': 0.694000005722045,
			'attack_delay_offset': -0.0784961655735969,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 8.5,
			'hp5_lvl': 0.55,
			'hp_base': 587,
			'hp_lvl': 89,
			'ls': 0,
			'mp5_base': 7.156,
			'mp5_lvl': 0.45,
			'mp_base': 297.2,
			'mp_lvl': 40,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 350,
			'ms_base': 350,
			'pathing_radius': 35,
			'range': 125,
			'selection_radius': 135,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 0.85,
			'urf_dmg_taken': 1.1
		},
		'style': 45,
		'title': 'the Demon Jester',
		'toughness': 1,
		'utility': 2
	},
	{
		'adaptivetype': 'Mixed,Physical',
		'apiname': 'shen',
		'attack': 3,
		'be': 3150,
		'changes': 'V10.15',
		'control': 2,
		'damage': 2,
		'date': '2010-03-24',
		'ddragon_apiname': 'Shen',
		'defense': 9,
		'difficulty': 2,
		'herotype': 'Tank',
		'id': 98,
		'img': 'assets/images/champions/Shen/Shen.png',
		'index': 103,
		'magic': 3,
		'mobility': 2,
		'name': 'Shen',
		'patch': 'V1.0.0.81',
		'rangetype': 'Melee',
		'resource': 'Energy',
		'rp': 790,
		'skill_e':
		{
			'1': 'Shadow Dash',
			'img': 'assets/images/champions/Shen/Shadow Dash.png',
			'tooltip': 'Passive: Dealing damage with Shadow Dash or Twilight Assault recovers ? Energy.<br><br>Active: Shen dashes in a direction, dealing 60/85/110/135/160 [+?] physical damage to enemy champions and neutral monsters in his path and taunting them for 1.5 seconds.'
		},
		'skill_i':
		{
			'1': 'Ki Barrier',
			'img': 'assets/images/champions/Shen/Ki Barrier.png',
			'tooltip': 'After casting a spell, Shen gets a shield. Affecting other champions reduces the cooldown of this effect.'
		},
		'skill_q':
		{
			'1': 'Twilight Assault',
			'2': 'Twilight Assault 2',
			'3': 'Twilight Assault 3',
			'img': 'assets/images/champions/Shen/Twilight Assault.png',
			'tooltip': "Shen recalls his spirit blade and draws it. Enemies it collides with are slowed by 15/20/25/30/35% when moving away from Shen for the next 2 seconds.<br><br>Shen's next 3 attacks deal ? plus 2/2.5/3/3.5/4 (+?)% of their target's max health as bonus magic damage. If the spirit blade collided with an enemy champion, those attacks deal ? plus 5/5.5/6/6.5/7 (+?)% instead and have +50% Attack Speed.<br><br>Each attack deals 100% increased damage to monsters (capped at 120/140/160/180/200)."
		},
		'skill_r':
		{
			'1': 'Stand United',
			'2': 'Stand United 2',
			'img': 'assets/images/champions/Shen/Stand United.png',
			'tooltip': "Shen grants a shield to a target allied champion that lasts ? seconds and absorbs up to ? to ? damage based on their missing health. After channeling for ? seconds, Shen and his spirit blade teleport to the ally's location."
		},
		'skill_w':
		{
			'1': "Spirit's Refuge",
			'img': "assets/images/champions/Shen/Spirit's Refuge.png",
			'tooltip': "Shen's spirit blade creates a defensive zone for 1.75 seconds. Basic attacks that would hit Shen or an allied champion in the zone are blocked.<br><br>If there are no champions to protect in the zone when it starts, the spirit blade will not activate until one enters or 2 seconds pass."
		},
		'stats':
		{
			'acquisition_radius': 400,
			'ad_base': 60,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'arm_base': 34,
			'arm_lvl': 3,
			'as_base': 0.751,
			'as_lvl': 3,
			'as_ratio': 0.651000022888183,
			'attack_cast_time': 0.266660004854202,
			'attack_total_time': 1.53600001335144,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 8.5,
			'hp5_lvl': 0.75,
			'hp_base': 540,
			'hp_lvl': 85,
			'ls': 0,
			'mp5_base': 50,
			'mp5_lvl': 0,
			'mp_base': 400,
			'mp_lvl': 0,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 340,
			'ms_base': 340,
			'pathing_radius': 35,
			'range': 125,
			'selection_radius': 100,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 45,
		'title': 'the Eye of Twilight',
		'toughness': 3,
		'utility': 3
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Tank',
		'apiname': 'shyvana',
		'attack': 8,
		'be': 3150,
		'changes': 'V10.14',
		'control': 1,
		'damage': 2,
		'date': '2011-11-01',
		'ddragon_apiname': 'Shyvana',
		'defense': 6,
		'difficulty': 1,
		'herotype': 'Fighter',
		'id': 102,
		'img': 'assets/images/champions/Shyvana/Shyvana.png',
		'index': 104,
		'magic': 3,
		'mobility': 2,
		'name': 'Shyvana',
		'patch': 'V1.0.0.128',
		'rangetype': 'Melee',
		'resource': 'Fury',
		'rp': 790,
		'skill_e':
		{
			'1': 'Flame Breath',
			'img': 'assets/images/champions/Shyvana/Flame Breath.png',
			'tooltip': "Shyvana unleashes a fireball that stops after hitting a champion. All enemies hit take ? magic damage and are marked for ? seconds.<br><br>Shyvana's basic attacks against marked targets deal ?% of their maximum health as magic damage on hit.<br><br>Dragon Form: Flame Breath explodes on impact or at target location, dealing ? bonus magic damage and scorching the earth for 4 seconds. Enemies on scorched earth take ? magic damage per second.<br><br>Flame Breath's on-hit damage against monsters is capped at ? damage per hit."
		},
		'skill_i':
		{
			'1': 'Fury of the Dragonborn',
			'img': 'assets/images/champions/Shyvana/Fury of the Dragonborn.png',
			'tooltip': 'Shyvana deals bonus damage to dragons and gains Armor and Magic Resistance. As Shyvana and her allies slay more dragons, she gains more bonus Armor and Magic Resistance.'
		},
		'skill_q':
		{
			'1': 'Twin Bite',
			'img': 'assets/images/champions/Shyvana/Twin Bite.png',
			'tooltip': "Shyvana strikes twice on her next attack, dealing ? and ? physical damage on the first and second hits respectively.<br><br>While Twin Bite is on cooldown, basic attacks reduce the remaining cooldown duration by ? seconds.<br><br>Dragon Form: Twin Bite cleaves all units in front Shyvana.<br><br>Twin Bite's second hit damage is equal to ?% of Shyvana's attack damage."
		},
		'skill_r':
		{
			'1': "Dragon's Descent",
			'img': "assets/images/champions/Shyvana/Dragon's Descent.png",
			'tooltip': 'Active: Shyvana transforms into a dragon, gaining ? Health and flying to target location. Enemies along her path take ? magic damage and are knocked toward her target location.<br><br>Passive: Shyvana generates ? Fury every second. Basic Attacks generate ? Fury.'
		},
		'skill_w':
		{
			'1': 'Burnout',
			'img': 'assets/images/champions/Shyvana/Burnout.png',
			'tooltip': 'Shyvana deals ? magic damage per second to nearby enemies and gains a bonus ?% movement speed that decays over ? seconds.<br><br>While Burnout is active, basic attacks deal ? magic damage to nearby enemies and extend its duration by ? second.<br><br>Dragon Form: Burnout grows in size.<br><br>Burnout has a maximum duration of ? seconds.'
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 66,
			'ad_lvl': 3.4,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 1.05,
			'aram_dmg_taken': 0.95,
			'arm_base': 38,
			'arm_lvl': 3.35,
			'as_base': 0.658,
			'as_lvl': 2.5,
			'as_ratio': 0.657999992370605,
			'attack_delay_offset': -0.102631576359272,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 8.5,
			'hp5_lvl': 0.8,
			'hp_base': 595,
			'hp_lvl': 95,
			'ls': 0,
			'mp5_base': 0,
			'mp5_lvl': 0,
			'mp_base': 100,
			'mp_lvl': 0,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 350,
			'ms_base': 350,
			'pathing_radius': 35,
			'range': 125,
			'selection_radius': 100,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 55,
		'title': 'the Half-Dragon',
		'toughness': 2,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Fighter',
		'apiname': 'singed',
		'attack': 4,
		'be': 450,
		'changes': 'V10.14',
		'control': 2,
		'damage': 2,
		'date': '2009-04-18',
		'ddragon_apiname': 'Singed',
		'defense': 8,
		'difficulty': 2,
		'herotype': 'Tank',
		'id': 27,
		'img': 'assets/images/champions/Singed/Singed.png',
		'index': 105,
		'magic': 7,
		'mobility': 2,
		'name': 'Singed',
		'patch': 'April 18, 2009 Patch',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 260,
		'skill_e':
		{
			'1': 'Fling',
			'img': 'assets/images/champions/Singed/Fling.png',
			'tooltip': "Singed flings an enemy over his shoulder, dealing 50/65/80/95/110 (+0.75) plus 6/6.5/7/7.5/8% of the target's maximum Health as magic damage. Max 300 bonus damage against minions and monsters.<br><br>If the target Singed flings lands in his Mega Adhesive, they are also rooted for 1/1.25/1.5/1.75/2 second(s)."
		},
		'skill_i':
		{
			'1': 'Noxious Slipstream',
			'img': 'assets/images/champions/Singed/Noxious Slipstream.png',
			'tooltip': 'Singed drafts off nearby champions, gaining a burst of movement speed when passing them.'
		},
		'skill_q':
		{
			'1': 'Poison Trail',
			'img': 'assets/images/champions/Singed/Poison Trail.png',
			'tooltip': 'Toggle: Singed lays a poisonous trail that deals 20/30/40/50/60 (+?) magic damage per second.'
		},
		'skill_r':
		{
			'1': 'Insanity Potion',
			'img': 'assets/images/champions/Singed/Insanity Potion.png',
			'tooltip': 'Singed drinks a potent brew of chemicals, granting him ? Ability Power, Armor, Magic Resist, Movement Speed, Health Regen, and Mana Regen for ? seconds.'
		},
		'skill_w':
		{
			'1': 'Mega Adhesive',
			'img': 'assets/images/champions/Singed/Mega Adhesive.png',
			'tooltip': 'Singed leaves a sticky area on the ground for 3 seconds. Enemies in the area are slowed by 60% and grounded, prohibiting the use of Movement abilities.<br><br>If Singed flings a target into the zone, it will root them.'
		},
		'stats':
		{
			'acquisition_radius': 300,
			'ad_base': 63,
			'ad_lvl': 3.375,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 0.95,
			'arm_base': 34,
			'arm_lvl': 3.5,
			'as_base': 0.613,
			'as_lvl': 1.9,
			'as_ratio': 0.612999975681304,
			'attack_delay_offset': -0.0638512670993805,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 9.5,
			'hp5_lvl': 0.55,
			'hp_base': 580,
			'hp_lvl': 85,
			'ls': 0,
			'mp5_base': 7.5,
			'mp5_lvl': 0.55,
			'mp_base': 330,
			'mp_lvl': 45,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 345,
			'ms_base': 345,
			'nb_dmg_dealt': 0.95,
			'pathing_radius': 35,
			'range': 125,
			'selection_radius': 135,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 100,
		'title': 'the Mad Chemist',
		'toughness': 3,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Fighter',
		'apiname': 'sion',
		'attack': 5,
		'be': 1350,
		'changes': 'V10.13',
		'control': 3,
		'damage': 2,
		'date': '2009-02-21',
		'ddragon_apiname': 'Sion',
		'defense': 9,
		'difficulty': 1,
		'herotype': 'Tank',
		'id': 14,
		'img': 'assets/images/champions/Sion/Sion.png',
		'index': 106,
		'magic': 3,
		'mobility': 1,
		'name': 'Sion',
		'patch': 'Alpha Week 2',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 585,
		'skill_e':
		{
			'1': 'Roar of the Slayer',
			'img': 'assets/images/champions/Sion/Roar of the Slayer.png',
			'tooltip': 'Sion fires a shockwave, dealing 65/100/135/170/205 (+0.55) magic damage to the first enemy hit and knocking it back if it is not a champion (significantly increasing its range). <br><br>Targets hit by the shockwave or the knocked back unit take the same damage and are slowed by 40/45/50/55/60% for 2.5 seconds and have their Armor reduced by 20% for 4 seconds.'
		},
		'skill_i':
		{
			'1': 'Glory in Death',
			'2': 'Death Surge',
			'img': 'assets/images/champions/Sion/Glory in Death.png',
			'tooltip': "After being killed, Sion will temporarily reanimate with rapidly decaying Health. His attacks become very rapid, heal him, and deal bonus damage based on his target's maximum Health."
		},
		'skill_q':
		{
			'1': 'Decimating Smash',
			'img': 'assets/images/champions/Sion/Decimating Smash.png',
			'tooltip': 'Sion charges up a heavy blow for up to 2 seconds. When released, he deals 30/50/70/90/110 (+0.6) to 70/135/200/265/330 (+1.8) physical damage to enemies hit (60% damage to minions) and briefly slows them.<br><br>If Sion charges for at least 1 second, enemies are knocked up and stunned for 1.25 to 2.25 seconds.'
		},
		'skill_r':
		{
			'1': 'Unstoppable Onslaught',
			'2': 'Unstoppable Onslaught 2',
			'img': 'assets/images/champions/Sion/Unstoppable Onslaught.png',
			'tooltip': "Sion charges in a direction for 8 seconds and can steer slowly towards the mouse cursor. While charging, Sion is immune to all Crowd Control. Reactivating will cancel Sion's charge early.<br><br>When Sion collides with an enemy champion or wall, he deals ? physical damage and knocks up enemies in a small area for ? seconds. Enemies in a larger area take the same damage and are slowed by ?% for 3 seconds.<br><br>The damage increases to ? and the stun increases to ? seconds as Sion charges farther."
		},
		'skill_w':
		{
			'1': 'Soul Furnace',
			'2': 'Soul Furnace 2',
			'img': 'assets/images/champions/Sion/Soul Furnace.png',
			'tooltip': "Passive: Sion gains 4 maximum Health when he kills a unit (15 for champion kills, assists, large minions and large monsters). Current Bonus: 0.1 <br><br>Active: Sion shields himself for 50/75/100/125/150 (+0.4) (+?) (8/9/10/11/12% of maximum Health) for 6 seconds. After 3 seconds, while the shield holds, Sion can reactivate to deal 40/65/90/115/140 (+0.4) plus 10/11/12/13/14% of the target's maximum Health as magic damage to nearby enemies. Max 400 bonus damage to minions and monsters."
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 68,
			'ad_lvl': 4,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 0.92,
			'aram_dmg_taken': 1.08,
			'arm_base': 32,
			'arm_lvl': 3,
			'as_base': 0.679,
			'as_lvl': 1.3,
			'as_ratio': 0.67900002002716,
			'attack_delay_offset': -0.0509057976305484,
			'critdmg': 0,
			'gameplay_radius': 80,
			'heal_shield': 0,
			'hp5_base': 7.5,
			'hp5_lvl': 0.8,
			'hp_base': 545,
			'hp_lvl': 73,
			'ls': 0,
			'mp5_base': 8,
			'mp5_lvl': 0.6,
			'mp_base': 330,
			'mp_lvl': 42,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 345,
			'ms_base': 345,
			'nb_dmg_dealt': 0.95,
			'nb_dmg_taken': 1.05,
			'pathing_radius': 25.7665996551513,
			'range': 175,
			'selection_radius': 125,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.1,
			'urf_dmg_taken': 0.9
		},
		'style': 65,
		'title': 'The Undead Juggernaut',
		'toughness': 3,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'apiname': 'sivir',
		'attack': 9,
		'be': 450,
		'changes': 'V10.11',
		'control': 1,
		'damage': 3,
		'date': '2009-02-21',
		'ddragon_apiname': 'Sivir',
		'defense': 3,
		'difficulty': 2,
		'herotype': 'Marksman',
		'id': 15,
		'img': 'assets/images/champions/Sivir/Sivir.png',
		'index': 107,
		'magic': 1,
		'mobility': 1,
		'name': 'Sivir',
		'patch': 'Alpha Week 2',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 260,
		'skill_e':
		{
			'1': 'Spell Shield',
			'img': 'assets/images/champions/Sivir/Spell Shield.png',
			'tooltip': 'Sivir creates a magical barrier for 1.5 seconds that blocks the next incoming enemy ability.<br><br>If an ability is blocked by the shield, Sivir regains 110/120/130/140/150 Mana.'
		},
		'skill_i':
		{
			'1': 'Fleet of Foot',
			'img': 'assets/images/champions/Sivir/Fleet of Foot.png',
			'tooltip': 'Sivir gains a short burst of Movement Speed when she attacks an enemy champion.'
		},
		'skill_q':
		{
			'1': 'Boomerang Blade',
			'img': 'assets/images/champions/Sivir/Boomerang Blade.png',
			'tooltip': 'Sivir hurls her crossblade like a boomerang, dealing ? physical damage to all enemies it cuts through.<br><br>Hitting non-Champions reduces the damage to subsequent targets by ?%, down to a minimum of ?%.'
		},
		'skill_r':
		{
			'1': 'On the Hunt',
			'img': 'assets/images/champions/Sivir/On the Hunt.png',
			'tooltip': 'Passive: Sivir gains ?% Attack Speed while Ricochet is active.<br><br>Active: Sivir rallies her allies for ? seconds, granting all nearby allies an initial ?% Movement Speed bonus that reduces to ?% after the first ? seconds of On The Hunt elapse.'
		},
		'skill_w':
		{
			'1': 'Ricochet',
			'img': 'assets/images/champions/Sivir/Ricochet.png',
			'tooltip': "Sivir's next ? basic attacks bounce to nearby targets, dealing ? physical damage  to the first target and ? physical damage to each subsequent target.<br><br>If a given Ricochet attack critically strikes its first target, all subsequent bounces from that attack will also critically strike.<br><br>Targets cannot be hit more than once by a given Ricochet attack and on-hit effects are applied only to the first target of each attack."
		},
		'stats':
		{
			'acquisition_radius': 500,
			'ad_base': 63,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 0.92,
			'arm_base': 26,
			'arm_lvl': 3.25,
			'as_base': 0.625,
			'as_lvl': 1.6,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.180000007152557,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 3.25,
			'hp5_lvl': 0.55,
			'hp_base': 562,
			'hp_lvl': 90,
			'ls': 0,
			'mp5_base': 8,
			'mp5_lvl': 0.9,
			'mp_base': 284,
			'mp_lvl': 50,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 335,
			'ms_base': 335,
			'pathing_radius': 35,
			'range': 500,
			'selection_radius': 115,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 0.92
		},
		'style': 10,
		'title': 'the Battle Mistress',
		'toughness': 1,
		'utility': 2
	},
	{
		'adaptivetype': 'Mixed',
		'alttype': 'Tank',
		'apiname': 'skarner',
		'attack': 7,
		'be': 4800,
		'changes': 'V10.15',
		'control': 3,
		'damage': 1,
		'date': '2011-08-09',
		'ddragon_apiname': 'Skarner',
		'defense': 6,
		'difficulty': 1,
		'herotype': 'Fighter',
		'id': 72,
		'img': 'assets/images/champions/Skarner/Skarner.png',
		'index': 108,
		'magic': 5,
		'mobility': 1,
		'name': 'Skarner',
		'patch': 'V1.0.0.123',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Fracture',
			'2': 'Crystal Venom',
			'img': 'assets/images/champions/Skarner/Fracture.png',
			'tooltip': "Passive: Crystallizing enemies with Fracture and Impale grants Crystal Charge for the disable duration and reduces the cooldown of Fracture by the same amount.<br><br>Active: Skarner summons a blast of crystalline energy, dealing 40/65/90/115/140 (+0.2) magic damage, slowing targets hit by 30/35/40/45/50% for 2.5 seconds.<br><br>Enemies hit by Fracture are afflicted with Crystal Venom for 5 seconds, causing Skarner's next basic attack against them to deal 30/50/70/90/110 additional physical damage and stun the target for 1.25 second."
		},
		'skill_i':
		{
			'1': 'Crystal Spires',
			'img': 'assets/images/champions/Skarner/Crystal Spires.png',
			'tooltip': "Skarner's presence causes crystals to spawn in set locations around the map. While near crystals his team owns, Skarner gains tremendous movement speed, attack speed, and mana regeneration."
		},
		'skill_q':
		{
			'1': 'Crystal Slash',
			'img': 'assets/images/champions/Skarner/Crystal Slash.png',
			'tooltip': "Skarner slashes wildly, causing all nearby enemies to take physical damage equal to ? plus ?% of their maximum health. If a unit is struck, he charges himself with energy for 5 seconds, causing Crystal Slash to strike twice and deal 100% (+?) additional magic damage. <br><br>Basic attacks against non-structures lower Crystal Slash's cooldown by 0.25 seconds (quadrupled against champions)."
		},
		'skill_r':
		{
			'1': 'Impale',
			'img': 'assets/images/champions/Skarner/Impale.png',
			'tooltip': "Skarner suppresses an enemy champion for ? seconds, dealing ? physical damage plus ? magic damage. Skarner can move freely during this time, and will drag his helpless victim around with him. When the effect ends, Skarner's target will be dealt the same damage again."
		},
		'skill_w':
		{
			'1': 'Crystalline Exoskeleton',
			'img': 'assets/images/champions/Skarner/Crystalline Exoskeleton.png',
			'tooltip': 'Skarner is shielded for ? (10/11/12/13/14% of his maximum health) (+0.8) damage for 6 seconds. While the shield persists, Skarner gains movement speed that ramps up to 16/20/24/28/32% over 3 seconds.'
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 65,
			'ad_lvl': 4.5,
			'apen': 0,
			'apen%': 0,
			'arm_base': 38,
			'arm_lvl': 3.8,
			'as_base': 0.625,
			'as_lvl': 2.1,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.11999999731779,
			'critdmg': 0,
			'gameplay_radius': 80,
			'heal_shield': 0,
			'hp5_base': 9,
			'hp5_lvl': 0.85,
			'hp_base': 601.28,
			'hp_lvl': 90,
			'ls': 0,
			'mp5_base': 7.206,
			'mp5_lvl': 0.45,
			'mp_base': 320,
			'mp_lvl': 40,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 335,
			'ms_base': 335,
			'pathing_radius': 50,
			'range': 125,
			'selection_radius': 130,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 0.95,
			'windup_modifier': 0.5
		},
		'style': 45,
		'title': 'the Crystal Vanguard',
		'toughness': 3,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Mage',
		'apiname': 'sona',
		'attack': 5,
		'be': 3150,
		'changes': 'V10.6',
		'control': 2,
		'damage': 2,
		'date': '2010-09-21',
		'ddragon_apiname': 'Sona',
		'defense': 2,
		'difficulty': 1,
		'fullname': 'Sona Buvelle',
		'herotype': 'Support',
		'id': 37,
		'img': 'assets/images/champions/Sona/Sona.png',
		'index': 109,
		'magic': 8,
		'mobility': 1,
		'name': 'Sona',
		'patch': 'V1.0.0.101',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 790,
		'skill_e':
		{
			'1': 'Song of Celerity',
			'img': 'assets/images/champions/Sona/Song of Celerity.png',
			'tooltip': "Active: Grants Sona ?% Movement Speed [20% + ?% per 100 ability power] for 7 seconds (or until damaged) and changes her Power Chord bonus to Tempo.<br><br>Melody: Sona gains an aura for 3 seconds. Allied champions that enter the aura will gain ?% Movement Speed for 3 seconds. Granting an ally this aura effect will refund Sona ? mana once per cast.<br><br>Sona's personal Movement Speed increase will always last at least 3 seconds."
		},
		'skill_i':
		{
			'1': 'Power Chord',
			'img': 'assets/images/champions/Sona/Power Chord.png',
			'tooltip': "After 3 spell casts, Sona's next attack will deal bonus magic damage in addition to an additional effect based on what song Sona last activated."
		},
		'skill_q':
		{
			'1': 'Hymn of Valor',
			'img': 'assets/images/champions/Sona/Hymn of Valor.png',
			'tooltip': 'Active: Deals 40/70/100/130/160 (+0.5) magic damage to the nearest two enemies (prioritizes champions) and changes her Power Chord bonus to Staccato.<br><br>Melody: Sona gains an aura for 3 seconds. Allied champions that enter the aura will gain an additional 10/15/20/25/30 (+0.2) magic damage on their next attack. Granting an ally this aura effect will refund Sona ? mana once per cast.'
		},
		'skill_r':
		{
			'1': 'Crescendo',
			'img': 'assets/images/champions/Sona/Crescendo.png',
			'tooltip': "Active: Strikes an irresistible chord, stunning enemy Champions and forcing them to dance for 1.5 seconds and take 150/250/350 (+0.5) magic damage.<br><br>Passive: Reduces the base cooldown of Sona's basic abilities by 10/25/40%."
		},
		'skill_w':
		{
			'1': 'Aria of Perseverance',
			'img': 'assets/images/champions/Sona/Aria of Perseverance.png',
			'tooltip': 'Active: Restores 30/50/70/90/110 (+0.25) health to Sona and a nearby allied champion (prioritizes most wounded) and changes her Power Chord bonus to Diminuendo.<br><br>Melody: Sona gains an aura for 3 seconds. Allied champions that enter the aura will gain a shield that prevents up to 25/50/75/100/125 (+0.3) damage within the next 1.5 seconds. Granting an ally this aura effect will refund Sona ? mana once per cast.'
		},
		'stats':
		{
			'acquisition_radius': 800,
			'ad_base': 49,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 0.85,
			'aram_dmg_taken': 1.15,
			'aram_healing': 0.8,
			'aram_shielding': 0.8,
			'arm_base': 28,
			'arm_lvl': 3.3,
			'as_base': 0.644,
			'as_lvl': 2.3,
			'as_ratio': 0.643999993801116,
			'attack_delay_offset': -0.12817870080471,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 5.5,
			'hp5_lvl': 0.55,
			'hp_base': 482.36,
			'hp_lvl': 77,
			'ls': 0,
			'mp5_base': 11.5,
			'mp5_lvl': 0.4,
			'mp_base': 340.6,
			'mp_lvl': 45,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 325,
			'ms_base': 325,
			'nb_dmg_dealt': 0.95,
			'nb_dmg_taken': 1.05,
			'pathing_radius': 35,
			'range': 550,
			'selection_radius': 110,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 90,
		'title': 'Maven of the Strings',
		'toughness': 1,
		'utility': 2
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Mage',
		'apiname': 'soraka',
		'attack': 2,
		'be': 450,
		'changes': 'V10.10',
		'control': 2,
		'damage': 1,
		'date': '2009-02-21',
		'ddragon_apiname': 'Soraka',
		'defense': 5,
		'difficulty': 1,
		'herotype': 'Support',
		'id': 16,
		'img': 'assets/images/champions/Soraka/Soraka.png',
		'index': 110,
		'magic': 7,
		'mobility': 1,
		'name': 'Soraka',
		'patch': 'Alpha Week 2',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 260,
		'secondary attributes': 'Health',
		'skill_e':
		{
			'1': 'Equinox',
			'img': 'assets/images/champions/Soraka/Equinox.png',
			'tooltip': 'Creates a zone at target location for ? seconds, dealing ? magic damage to enemy Champions in the cast radius. Enemy Champions standing in the zone are silenced until they leave. <br><br>When the zone disappears, all enemy Champions still standing in the zone are rooted for ? second(s) and take an additional ? magic damage.'
		},
		'skill_i':
		{
			'1': 'Salvation',
			'img': 'assets/images/champions/Soraka/Salvation.png',
			'tooltip': 'Soraka runs faster towards nearby low health allies.'
		},
		'skill_q':
		{
			'1': 'Starcall',
			'img': 'assets/images/champions/Soraka/Starcall.png',
			'tooltip': 'Calls down a star from Soraka to a target location. Enemies standing in the explosion radius take ? magic damage and are slowed by ?% for ? seconds.<br><br>If Starcall hits a champion Soraka gains Rejuvenation for ? seconds, which restores ? Health over that duration and grants ?% decaying Movement Speed. '
		},
		'skill_r':
		{
			'1': 'Wish',
			'img': 'assets/images/champions/Soraka/Wish.png',
			'tooltip': "Calls upon divine powers to restore ? Health to all allied Champions. Wish's power is increased by ?% on each Champion below 40% Health (?)."
		},
		'skill_w':
		{
			'1': 'Astral Infusion',
			'img': 'assets/images/champions/Soraka/Astral Infusion.png',
			'tooltip': 'Restores ? Health to another champion ally.<br><br>If cast while affected by Rejuvenation, the Max Health cost will be reduced by ?% and also grant her target Rejuvenation, healing them for ? and granting them ?% Movement Speed decaying over ? seconds.<br><br>Cannot be cast if Soraka is below ?Health (5% of her Max Health).'
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 50,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'arm_base': 32,
			'arm_lvl': 3.8,
			'as_base': 0.625,
			'as_lvl': 2.14,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.112999998033046,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 2.5,
			'hp5_lvl': 0.5,
			'hp_base': 535,
			'hp_lvl': 74,
			'ls': 0,
			'mp5_base': 11.5,
			'mp5_lvl': 0.4,
			'mp_base': 425,
			'mp_lvl': 40,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 325,
			'ms_base': 325,
			'ofa_dmg_dealt': 1.03,
			'ofa_dmg_taken': 0.97,
			'ofa_healing': 1.1,
			'pathing_radius': 44.2000007629394,
			'range': 550,
			'selection_radius': 110,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 100,
		'title': 'the Starchild',
		'toughness': 1,
		'utility': 3
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Fighter',
		'apiname': 'swain',
		'attack': 2,
		'be': 4800,
		'changes': 'V10.15',
		'control': 2,
		'damage': 2,
		'date': '2010-10-05',
		'ddragon_apiname': 'Swain',
		'defense': 6,
		'difficulty': 2,
		'fullname': 'Jericho Swain',
		'herotype': 'Mage',
		'id': 50,
		'img': 'assets/images/champions/Swain/Swain.png',
		'index': 111,
		'magic': 9,
		'mobility': 1,
		'name': 'Swain',
		'patch': 'V1.0.0.102',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Nevermove',
			'img': 'assets/images/champions/Swain/Nevermove.png',
			'tooltip': 'Swain launches a wave of demonic power, dealing 35/70/105/140/175 (+0.25) magic damage to enemies it passes through.<br><br>Swain then commands the wave to return, detonating it on the first enemy hit. Enemies hit take 35/45/55/65/75 (+0.25) magic damage and are rooted for 1.5 seconds.'
		},
		'skill_i':
		{
			'1': 'Ravenous Flock',
			'img': 'assets/images/champions/Swain/Ravenous Flock.png',
			'tooltip': "Swain's ravens collect Soul Fragments that heal him and permanently increase his maximum health. Swain can right-click an immobilized enemy champions to pull them closer to him, dealing damage and ripping out a Soul Fragment."
		},
		'skill_q':
		{
			'1': "Death's Hand",
			'img': "assets/images/champions/Swain/Death's Hand.png",
			'tooltip': 'Swain unleashes 5 bolts of eldritch power that pierce through enemies. Enemies hit take 55/75/95/115/135 (+0.4) magic damage, plus 15/20/25/30/35% per additional bolt. Max Damage: ?.<br>'
		},
		'skill_r':
		{
			'1': 'Demonic Ascension',
			'2': 'Demonflare',
			'img': 'assets/images/champions/Swain/Demonic Ascension.png',
			'tooltip': 'Swain frees the demon within for ? seconds, gaining ? health and doubling the bonus health that he has collected from Soul Fragments. Every second, he drains all nearby enemy champions, minions, and neutral monsters for ? magic damage, healing him for ? health. After a brief delay, and upon draining any amount of health, Swain can cast Demonflare.<br><br>Demonflare: Swain unleashes a nova of soulfire dealing magic damage equal to ? plus  ?% of the damage he healed (up to a total of  ?) and ends his transformation.<br><br><br>Swain can drain non-champions to heal for ?% of the normal amount.'
		},
		'skill_w':
		{
			'1': 'Vision of Empire',
			'img': 'assets/images/champions/Swain/Vision of Empire.png',
			'tooltip': 'Swain opens a demon eye up to ? range away that deals 80/120/160/200/240 (+0.7) magic damage and slows for 25/35/45/55/65% for 2.5 seconds.<br><br>Champions hit grant Swain a Soul Fragment and are revealed for 4/5/6/7/8 seconds.<br><br>Damage is reduced by 50% against minions.'
		},
		'stats':
		{
			'acquisition_radius': 525,
			'ad_base': 58,
			'ad_lvl': 2.7,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 0.94,
			'aram_dmg_taken': 1.06,
			'arm_base': 22.72,
			'arm_lvl': 4,
			'as_base': 0.625,
			'as_lvl': 2.11,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.159999996423721,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 7,
			'hp5_lvl': 0.65,
			'hp_base': 525,
			'hp_lvl': 85,
			'ls': 0,
			'mp5_base': 8,
			'mp5_lvl': 0.8,
			'mp_base': 468,
			'mp_lvl': 28.5,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 325,
			'ms_base': 325,
			'nb_dmg_dealt': 0.95,
			'pathing_radius': 35,
			'range': 525,
			'selection_radius': 100,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 100,
		'title': 'the Noxian Grand General',
		'toughness': 2,
		'utility': 1
	},
	{
		'adaptivetype': 'Magic',
		'alttype': 'Assassin',
		'apiname': 'sylas',
		'attack': 3,
		'be': 6300,
		'changes': 'V10.14',
		'control': 1,
		'damage': 2,
		'date': '2019-01-25',
		'ddragon_apiname': 'Sylas',
		'defense': 4,
		'difficulty': 3,
		'herotype': 'Mage',
		'id': 517,
		'img': 'assets/images/champions/Sylas/Sylas.png',
		'index': 112,
		'magic': 8,
		'mobility': 3,
		'name': 'Sylas',
		'patch': 'V9.2',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 975,
		'skill_e':
		{
			'1': 'Abscond',
			'2': 'Abduct',
			'img': 'assets/images/champions/Sylas/Abscond.png',
			'tooltip': 'Sylas dashes to a location.<br><br>Recast: Sylas throws out his chain in a direction, pulling himself to the first enemy hit dealing ? magic damage and knocking them up for ? seconds.'
		},
		'skill_i':
		{
			'1': 'Petricite Burst',
			'img': 'assets/images/champions/Sylas/Petricite Burst.png',
			'tooltip': "After casting a spell, Sylas stores a charge of Petricite Burst.  Sylas's basic attacks will expend a charge and whirl his energized chains around him dealing bonus magic damage to enemies hit. While Sylas has a charge of Petricite Burst, he gains attack speed. "
		},
		'skill_q':
		{
			'1': 'Chain Lash',
			'img': 'assets/images/champions/Sylas/Chain Lash.png',
			'tooltip': 'Sylas lashes his chains out in an X-shaped area, intersecting at his targeted location dealing ? magic damage to and slowing enemies by ? for ? seconds. <br><br>After ? seconds, magical energy explodes from the intersection point dealing ?.<br><br>The explosion deals ?% damage to minions and monsters.'
		},
		'skill_r':
		{
			'1': 'Hijack',
			'img': 'assets/images/champions/Sylas/Hijack.png',
			'tooltip': "Sylas hijacks a targeted enemy, allowing him to cast their ultimate ability as they would cast it, based on his Ultimate level and using his stats.<br><br>Hijacking an enemy places a cooldown on them for 200% (modified by Sylas' Cooldown Reduction, minimum ? seconds) of the enemy's ultimate's cooldown, during which time Sylas cannot hijack them again.<br><br>Sylas converts non-hybrid AD ratios into AP ratios, granting him .4 AP: 1 Bonus AD and .6 AP: 1 Total AD respectively."
		},
		'skill_w':
		{
			'1': 'Kingslayer',
			'img': 'assets/images/champions/Sylas/Kingslayer.png',
			'tooltip': 'Sylas lunges at an enemy with magical force dealing ? magic damage.<br><br>If used against a champion, Sylas heals for ? - ? based on his missing health (maximum heal at ?% health). '
		},
		'stats':
		{
			'acquisition_radius': 525,
			'ad_base': 61,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'arm_base': 27,
			'arm_lvl': 4,
			'as_base': 0.645,
			'as_lvl': 3.5,
			'as_ratio': 0.644999980926513,
			'attack_cast_time': 0.259999990463256,
			'attack_delay_offset': -0.0994649976491928,
			'attack_total_time': 1.54999995231628,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 9,
			'hp5_lvl': 0.9,
			'hp_base': 525,
			'hp_lvl': 115,
			'ls': 0,
			'mp5_base': 7,
			'mp5_lvl': 0.8,
			'mp_base': 280,
			'mp_lvl': 50,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32,
			'mr_lvl': 1.75,
			'ms': 340,
			'ms_base': 340,
			'pathing_radius': 35,
			'range': 175,
			'selection_radius': 100,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 70,
		'title': 'the Unshackled',
		'toughness': 2,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Support',
		'apiname': 'syndra',
		'attack': 2,
		'be': 4800,
		'changes': 'V10.15',
		'control': 2,
		'damage': 3,
		'date': '2012-09-13',
		'ddragon_apiname': 'Syndra',
		'defense': 3,
		'difficulty': 2,
		'herotype': 'Mage',
		'id': 134,
		'img': 'assets/images/champions/Syndra/Syndra.png',
		'index': 113,
		'magic': 9,
		'mobility': 1,
		'name': 'Syndra',
		'patch': 'V1.0.0.147',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Scatter the Weak',
			'img': 'assets/images/champions/Syndra/Scatter the Weak.png',
			'tooltip': 'Knocks enemies and Dark Spheres back dealing 85/130/175/220/265 (+0.6) magic damage to them and any enemies they collide with.<br><br>Dark Spheres that are knocked back stun all enemies in their path for 1.5 seconds.'
		},
		'skill_i':
		{
			'1': 'Transcendent',
			'img': 'assets/images/champions/Syndra/Transcendent.png',
			'tooltip': 'Spells gain extra effects at max rank.<br><br>Dark Sphere: Deals 25% more damage against champions.<br>Force of Will: Deals 20% bonus true damage.<br>Scatter the Weak: Spell width increased by 50%.<br>Unleashed Power: Range increased by 75.'
		},
		'skill_q':
		{
			'1': 'Dark Sphere',
			'img': 'assets/images/champions/Syndra/Dark Sphere.png',
			'tooltip': "Conjures a Dark Sphere dealing 70/105/140/175/210 (+0.65) magic damage. The sphere remains for 6 seconds and can be manipulated by Syndra's other abilities.<br><br>This spell can be cast while moving."
		},
		'skill_r':
		{
			'1': 'Unleashed Power',
			'img': 'assets/images/champions/Syndra/Unleashed Power.png',
			'tooltip': "Draws upon Syndra's full cataclysmic power, harnessing Dark Spheres to deal magic damage to target enemy Champion. Unleashed Power manipulates the three Dark Spheres orbiting Syndra, in addition to up to 4 Dark Spheres previously created.<br><br>Damage per sphere: ?.<br>Minimum total damage: ?."
		},
		'skill_w':
		{
			'1': 'Force of Will',
			'2': 'Force of Will 2',
			'img': 'assets/images/champions/Syndra/Force of Will.png',
			'tooltip': 'First Cast: Grabs target Dark Sphere or enemy minion. If no target is selected, grabs nearest Dark Sphere.<br><br>Second Cast: Throws the grabbed unit. Enemies hit take 70/110/150/190/230 (+0.7) magic damage and are slowed by 25/30/35/40/45% for 1.5 seconds.<br><br>This spell can be cast while moving.'
		},
		'stats':
		{
			'acquisition_radius': 575,
			'ad_base': 53.872,
			'ad_lvl': 2.9,
			'apen': 0,
			'apen%': 0,
			'arm_base': 24.712,
			'arm_lvl': 3.4,
			'as_base': 0.625,
			'as_lvl': 2,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.112499997019767,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 6.5,
			'hp5_lvl': 0.6,
			'hp_base': 523,
			'hp_lvl': 90,
			'ls': 0,
			'mp5_base': 8,
			'mp5_lvl': 0.8,
			'mp_base': 480,
			'mp_lvl': 40,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 330,
			'ms_base': 330,
			'pathing_radius': 35,
			'range': 550,
			'selection_radius': 125,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 0.9,
			'urf_dmg_taken': 0.95
		},
		'style': 100,
		'title': 'the Dark Sovereign',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Tank',
		'apiname': 'tahmkench',
		'attack': 3,
		'be': 6300,
		'changes': 'V10.8',
		'control': 2,
		'damage': 2,
		'date': '2015-07-09',
		'ddragon_apiname': 'TahmKench',
		'defense': 9,
		'difficulty': 1,
		'herotype': 'Support',
		'id': 223,
		'img': 'assets/images/champions/Tahm Kench/Tahm Kench.png',
		'index': 114,
		'magic': 6,
		'mobility': 1,
		'name': 'Tahm Kench',
		'patch': 'V5.13',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 975,
		'skill_e':
		{
			'1': 'Thick Skin',
			'img': 'assets/images/champions/Tahm Kench/Thick Skin.png',
			'tooltip': 'Passive: 45/50/55/60/65% of the Damage taken while this ability is inactive is converted to gray health. If allowed to decay, ? of it is regenerated as health.<br><br>Active: Convert all of your gray health into a shield that lasts 2 seconds.'
		},
		'skill_i':
		{
			'1': 'An Acquired Taste',
			'img': 'assets/images/champions/Tahm Kench/An Acquired Taste.png',
			'tooltip': 'Tahm Kench puts the heft of his immense body behind his attacks and abilities, gaining extra damage based on his total health. Damaging enemy champions builds stacks of An Acquired Taste. At three stacks, he can use Devour on an enemy champion.'
		},
		'skill_q':
		{
			'1': 'Tongue Lash',
			'img': 'assets/images/champions/Tahm Kench/Tongue Lash.png',
			'tooltip': 'Damage the first enemy hit for 80/130/180/230/280 (+0.7) magic damage and slow them by 30/40/50/60/70% for 3s. Champions with 3 stacks of An Acquired Taste will also be stunned for 2 seconds.<br><br>Activate Devour while your tongue is in midair to devour monsters/minions from a distance.'
		},
		'skill_r':
		{
			'1': 'Abyssal Voyage',
			'2': 'Abyssal Voyage 2',
			'img': 'assets/images/champions/Tahm Kench/Abyssal Voyage.png',
			'tooltip': 'Begin to channel for up to 6 seconds. During this time, one ally champion can right click Tahm Kench to join in. Alternatively, reactivate this ability to travel alone. On reactivation or once an ally has opted in, Tahm travels to the target location.<br><br>Taking damage from champions cancels the channel.<br>Allies in combat with champions cannot take Abyssal Voyage.'
		},
		'skill_w':
		{
			'1': 'Devour',
			'2': 'Regurgitate',
			'img': 'assets/images/champions/Tahm Kench/Devour.png',
			'tooltip': "Devour a target for 4s (half that for enemy champions.) Enemies are dealt 60/105/150/195/240 (+11%) (+0.02%) of their maximum health as magic damage (maximum of 500 against neutral monsters).<br><br>Enemy Champions: Requires 3 stacks of An Acquired Taste to be devoured. While holding any champion, Tahm Kench is slowed by 95% and grounded.<br><br>Minions and Monsters: Reactivate to spit them, dealing 60/105/150/195/240 (+0.6) magic damage to targets hit.<br><br>When used on an enemy, half of Devour's cooldown and mana cost are refunded."
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 56,
			'ad_lvl': 3.2,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_taken': 0.95,
			'arm_base': 47,
			'arm_lvl': 3.5,
			'as_base': 0.658,
			'as_lvl': 2.5,
			'as_ratio': 0.657999992370605,
			'attack_cast_time': 0.379999995231628,
			'attack_total_time': 1.51900005340576,
			'critdmg': 0,
			'gameplay_radius': 80,
			'heal_shield': 0,
			'hp5_base': 6.5,
			'hp5_lvl': 0.55,
			'hp_base': 600,
			'hp_lvl': 100,
			'ls': 0,
			'mp5_base': 8,
			'mp5_lvl': 1,
			'mp_base': 325,
			'mp_lvl': 40,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 335,
			'ms_base': 335,
			'nb_dmg_dealt': 1.05,
			'nb_dmg_taken': 0.95,
			'pathing_radius': 50,
			'range': 175,
			'selection_radius': 125,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.3,
			'urf_dmg_taken': 0.7,
			'urf_healing': 1.1,
			'urf_shielding': 1.1
		},
		'style': 65,
		'title': 'the River King',
		'toughness': 3,
		'utility': 3
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Support',
		'apiname': 'taliyah',
		'attack': 1,
		'be': 6300,
		'changes': 'V9.18',
		'control': 2,
		'damage': 3,
		'date': '2016-05-18',
		'ddragon_apiname': 'Taliyah',
		'defense': 7,
		'difficulty': 2,
		'herotype': 'Mage',
		'id': 163,
		'img': 'assets/images/champions/Taliyah/Taliyah.png',
		'index': 115,
		'magic': 8,
		'mobility': 1,
		'name': 'Taliyah',
		'patch': 'V6.10',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 975,
		'skill_e':
		{
			'1': 'Unraveled Earth',
			'img': 'assets/images/champions/Taliyah/Unraveled Earth.png',
			'tooltip': 'Places a field of dash-sensitive traps that deal 50/75/100/125/150 (+0.4) magic damage and slow enemies in the area by ?%. After 4 seconds, the traps explode, dealing damage again.<br><br>Enemies dashing, being pushed, or being pulled through Unraveled Earth will trigger traps, taking ? (+?) magic damage from each trap (maximum 4, each hit after the first deals ?% less damage).'
		},
		'skill_i':
		{
			'1': 'Rock Surfing',
			'img': 'assets/images/champions/Taliyah/Rock Surfing.png',
			'tooltip': 'Taliyah gains movement speed near walls.'
		},
		'skill_q':
		{
			'1': 'Threaded Volley',
			'2': 'Threaded Volley 2',
			'img': 'assets/images/champions/Taliyah/Threaded Volley.png',
			'tooltip': 'Hurls 5 rocks in a direction, each dealing 70/95/120/145/170 (+0.45) magic damage. Subsequent hits on the same enemy deal 50% reduced damage. Creates Worked Ground for 45 seconds.<br><br>Casting Threaded Volley on Worked Ground only hurls one rock but its cost is reduced to 1 mana.'
		},
		'skill_r':
		{
			'1': "Weaver's Wall",
			'2': "Weaver's Wall 2",
			'img': "assets/images/champions/Taliyah/Weaver's Wall.png",
			'tooltip': "Cast once to create a wall. Recast immediately to ride ahead of the wall. Moving or receiving damage will cause Taliyah to stop.<br><br>Weaver's Wall lasts for 5 seconds. Deactivate this spell to break the wall early."
		},
		'skill_w':
		{
			'1': 'Seismic Shove',
			'img': 'assets/images/champions/Taliyah/Seismic Shove.png',
			'tooltip': 'Taliyah targets an area. After a short delay, enemies caught within the area will be pushed and dealt 60/80/100/120/140 (+0.4) magic damage.<br><br>You can control the direction enemies will be pushed by clicking and dragging your mouse in a line.'
		},
		'stats':
		{
			'acquisition_radius': 550,
			'ad_base': 58,
			'ad_lvl': 3.3,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 1.05,
			'arm_base': 20,
			'arm_lvl': 3.5,
			'as_base': 0.625,
			'as_lvl': 1.36,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.138541668653488,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 7,
			'hp5_lvl': 0.7,
			'hp_base': 532,
			'hp_lvl': 90,
			'ls': 0,
			'mp5_base': 9.335,
			'mp5_lvl': 0.85,
			'mp_base': 425,
			'mp_lvl': 30,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 335,
			'ms_base': 335,
			'nb_dmg_taken': 0.97,
			'ofa_dmg_dealt': 1.05,
			'ofa_dmg_taken': 0.95,
			'pathing_radius': 35,
			'range': 525,
			'selection_radius': 120,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.1,
			'urf_dmg_taken': 0.95
		},
		'style': 100,
		'title': 'the Stoneweaver',
		'toughness': 1,
		'utility': 3
	},
	{
		'adaptivetype': 'physical',
		'apiname': 'talon',
		'attack': 9,
		'be': 4800,
		'changes': 'V10.11',
		'control': 1,
		'damage': 3,
		'date': '2011-08-24',
		'ddragon_apiname': 'Talon',
		'defense': 3,
		'difficulty': 2,
		'fullname': 'Talon Du Couteau',
		'herotype': 'Assassin',
		'id': 91,
		'img': 'assets/images/champions/Talon/Talon.png',
		'index': 116,
		'magic': 1,
		'mobility': 2,
		'name': 'Talon',
		'patch': 'V1.0.0.124',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': "Assassin's Path",
			'img': "assets/images/champions/Talon/Assassin's Path.png",
			'tooltip': "Talon vaults up to ? units over the nearest structure or terrain in the target direction. The vault's speed is affected by Talon's movement speed.<br><br>Talon cannot dash over the same section of terrain more than once every ? seconds."
		},
		'skill_i':
		{
			'1': "Blade's End",
			'img': "assets/images/champions/Talon/Blade's End.png",
			'tooltip': "Talon's spells Wound champions and large monsters, stacking up to 3 times. When Talon attacks a champion with 3 stacks of Wound, they bleed for heavy damage over time."
		},
		'skill_q':
		{
			'1': 'Noxian Diplomacy',
			'img': 'assets/images/champions/Talon/Noxian Diplomacy.png',
			'tooltip': 'Talon leaps to target and deals 65/90/115/140/165 (+1.1) physical damage. If cast from melee range, Talon does not leap but instead critically strikes, dealing ?% damage (?).<br><br>When Noxian Diplomacy kills a unit, Talon regains ? health and refunds 50% of its cooldown.'
		},
		'skill_r':
		{
			'1': 'Shadow Assault',
			'img': 'assets/images/champions/Talon/Shadow Assault.png',
			'tooltip': "Talon disperses a ring of blades that deal ? physical damage to all units they hit, gains ?% increased movement speed, and becomes Invisible for up to ? seconds. When the Invisibility ends, the blades converge, dealing the same damage again to enemies they pass through.<br><br>If Talon cancels Invisibility with an attack or Noxian Diplomacy, the blades converge on his target's location instead.<br><br>Stealth - Invisible: Talon can only be revealed by nearby enemy Turrets or True Sight."
		},
		'skill_w':
		{
			'1': 'Rake',
			'img': 'assets/images/champions/Talon/Rake.png',
			'tooltip': 'Talon tosses a volley of blades, dealing ? physical damage to units hit and returning to him after a delay.<br><br>On their way back to Talon, the blades deal ? additional physical damage and slow the enemy by ?% for ? second.'
		},
		'stats':
		{
			'acquisition_radius': 400,
			'ad_base': 68,
			'ad_lvl': 3.1,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 1.05,
			'aram_dmg_taken': 0.95,
			'arm_base': 30,
			'arm_lvl': 3.5,
			'as_base': 0.625,
			'as_lvl': 2.9,
			'as_ratio': 0.625,
			'attack_cast_time': 0.197999998927116,
			'attack_total_time': 1.60000002384185,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 8.5,
			'hp5_lvl': 0.75,
			'hp_base': 588,
			'hp_lvl': 95,
			'ls': 0,
			'mp5_base': 7.6,
			'mp5_lvl': 0.8,
			'mp_base': 377.2,
			'mp_lvl': 37,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 39,
			'mr_lvl': 1.25,
			'ms': 335,
			'ms_base': 335,
			'nb_dmg_taken': 0.95,
			'pathing_radius': 35,
			'range': 125,
			'selection_radius': 120,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 65,
		'title': "the Blade's Shadow",
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Fighter',
		'apiname': 'taric',
		'attack': 4,
		'be': 1350,
		'changes': 'V10.14',
		'control': 2,
		'damage': 1,
		'date': '2009-08-19',
		'ddragon_apiname': 'Taric',
		'defense': 8,
		'difficulty': 2,
		'herotype': 'Support',
		'id': 44,
		'img': 'assets/images/champions/Taric/Taric.png',
		'index': 117,
		'magic': 5,
		'mobility': 1,
		'name': 'Taric',
		'patch': 'V0.9.22.15',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 585,
		'skill_e':
		{
			'1': 'Dazzle',
			'img': 'assets/images/champions/Taric/Dazzle.png',
			'tooltip': 'Readies a beam of starlight that, after 1 second, deals 90/130/170/210/250 (+0.5) (+?) magic damage and stuns enemies for 1.25 second(s).'
		},
		'skill_i':
		{
			'1': 'Bravado',
			'img': 'assets/images/champions/Taric/Bravado.png',
			'tooltip': "Spellcasts empower Taric's next 2 basic attacks to deal bonus magic damage, reduce his spell cooldowns, and attack in quick succession."
		},
		'skill_q':
		{
			'1': "Starlight's Touch",
			'img': "assets/images/champions/Taric/Starlight's Touch.png",
			'tooltip': "Spends all charges to heal nearby allied champions for 30 (+0.2) (+?) (1% of maximum Health) per charge, up to 30/60/90/120/150 (+?) (+?) at maximum charges.<br>Maximum charges: 1/2/3/4/5<br><br>Bravado-empowered attacks grant 1 charge of Starlight's Touch."
		},
		'skill_r':
		{
			'1': 'Cosmic Radiance',
			'img': 'assets/images/champions/Taric/Cosmic Radiance.png',
			'tooltip': 'After a ? second delay, pulses cosmic energy onto nearby allied champions, making them invulnerable for ? seconds.'
		},
		'skill_w':
		{
			'1': 'Bastion',
			'2': 'Bastion 2',
			'img': 'assets/images/champions/Taric/Bastion.png',
			'tooltip': "Taric's spells will also cast from a nearby ally protected by Bastion.<br><br>Passive: Bastion increases Armor by ? (10/11/12/13/14% of Taric's Armor).<br><br>Active: Blesses an ally with Bastion and shields them for 8/9/10/11/12% of their maximum Health for 2.5 seconds. Bastion lasts on the target until a new one is chosen."
		},
		'stats':
		{
			'acquisition_radius': 350,
			'ad_base': 55,
			'ad_lvl': 3.5,
			'apen': 0,
			'apen%': 0,
			'arm_base': 40,
			'arm_lvl': 3.4,
			'as_base': 0.625,
			'as_lvl': 2,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.11999999731779,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 6,
			'hp5_lvl': 0.5,
			'hp_base': 575,
			'hp_lvl': 85,
			'ls': 0,
			'mp5_base': 8.5,
			'mp5_lvl': 0.8,
			'mp_base': 300,
			'mp_lvl': 60,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 340,
			'ms_base': 340,
			'nb_dmg_dealt': 0.95,
			'nb_dmg_taken': 1.05,
			'nb_healing': 0.95,
			'pathing_radius': 35,
			'range': 150,
			'selection_radius': 135,
			'spell_vamp': 0,
			'tenacity': 0,
			'windup_modifier': 0.25
		},
		'style': 75,
		'title': 'the Shield of Valoran',
		'toughness': 2,
		'utility': 3
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Assassin',
		'apiname': 'teemo',
		'attack': 5,
		'be': 1350,
		'changes': 'V10.6',
		'control': 2,
		'damage': 3,
		'date': '2009-02-21',
		'ddragon_apiname': 'Teemo',
		'defense': 3,
		'difficulty': 1,
		'herotype': 'Marksman',
		'id': 17,
		'img': 'assets/images/champions/Teemo/Teemo.png',
		'index': 118,
		'magic': 7,
		'mobility': 1,
		'name': 'Teemo',
		'patch': 'Alpha Week 2',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 585,
		'skill_e':
		{
			'1': 'Toxic Shot',
			'img': 'assets/images/champions/Teemo/Toxic Shot.png',
			'tooltip': "Teemo's basic attacks poison their target, dealing ? magical damage upon impact and ? magical damage each second for ? seconds."
		},
		'skill_i':
		{
			'1': 'Guerrilla Warfare',
			'img': 'assets/images/champions/Teemo/Guerrilla Warfare.png',
			'tooltip': "If Teemo stands still and takes no actions for a short duration, he becomes Invisible indefinitely. If he's in brush, Teemo can enter and maintain his Invisibility while moving. After leaving Invisibility, Teemo gains the Element of Surprise, increasing his Attack Speed for 3 seconds."
		},
		'skill_q':
		{
			'1': 'Blinding Dart',
			'img': 'assets/images/champions/Teemo/Blinding Dart.png',
			'tooltip': 'Deals ? magic damage and blinds the target for ? seconds. '
		},
		'skill_r':
		{
			'1': 'Noxious Trap',
			'img': 'assets/images/champions/Teemo/Noxious Trap.png',
			'tooltip': 'Tosses a stored mushroom as a trap that detonates if an enemy steps on it, spreading poison to nearby enemies that slows Movement Speed by ?%, reveals them and deals ? magic damage over ? seconds. <br><br>Traps last ? minutes and take ? second to arm and stealth. Up to ? Traps can be held at once. If a thrown trap lands on another trap, it will bounce up to ? Teemos further before planting.'
		},
		'skill_w':
		{
			'1': 'Move Quick',
			'img': 'assets/images/champions/Teemo/Move Quick.png',
			'tooltip': "Passive: Teemo's Movement Speed is increased by ?% unless he has been damaged by an enemy champion or turret in the last 5 seconds.<br><br>Active: Teemo sprints, gaining twice his normal bonus for ? seconds. This bonus is not lost when struck."
		},
		'stats':
		{
			'acquisition_radius': 500,
			'ad_base': 54,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 0.85,
			'aram_dmg_taken': 1.1,
			'arm_base': 24.3,
			'arm_lvl': 3.75,
			'as_base': 0.69,
			'as_lvl': 3.38,
			'as_ratio': 0.689999997615814,
			'attack_delay_offset': -0.0842565968632698,
			'critdmg': 0,
			'gameplay_radius': 55,
			'heal_shield': 0,
			'hp5_base': 5.5,
			'hp5_lvl': 0.65,
			'hp_base': 528,
			'hp_lvl': 90,
			'ls': 0,
			'mp5_base': 9.6,
			'mp5_lvl': 0.45,
			'mp_base': 334,
			'mp_lvl': 20,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 330,
			'ms_base': 330,
			'pathing_radius': 30,
			'range': 500,
			'selection_radius': 100,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 0.95
		},
		'style': 30,
		'title': 'the Swift Scout',
		'toughness': 1,
		'utility': 2
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Fighter',
		'apiname': 'thresh',
		'attack': 5,
		'be': 4800,
		'changes': 'V10.15',
		'control': 3,
		'damage': 1,
		'date': '2013-01-23',
		'ddragon_apiname': 'Thresh',
		'defense': 6,
		'difficulty': 3,
		'herotype': 'Support',
		'id': 412,
		'img': 'assets/images/champions/Thresh/Thresh.png',
		'index': 119,
		'magic': 6,
		'mobility': 1,
		'name': 'Thresh',
		'patch': 'V1.0.0.154',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Flay',
			'2': 'Flay 2',
			'3': 'Flay 3',
			'4': 'Flay 4',
			'5': 'Flay 5',
			'img': 'assets/images/champions/Thresh/Flay.png',
			'tooltip': "Passive: Thresh's basic attacks deal from ? to ? (+?) additional magic damage, which builds up while not attacking (total souls collected plus up to 100/125/150/175/200% total Attack Damage).<br><br>Active: Deals 65/95/125/155/185 (+0.4) magic damage in a line beginning behind Thresh. Enemies hit are pushed in the direction of the swing, then slowed by 20/25/30/35/40% for 1 second.<br><br>Cast forward to push; cast backward to pull."
		},
		'skill_i':
		{
			'1': 'Damnation',
			'img': 'assets/images/champions/Thresh/Damnation.png',
			'tooltip': 'Thresh can harvest the souls of enemies that die near him, permanently granting him Armor and Ability Power.'
		},
		'skill_q':
		{
			'1': 'Death Sentence',
			'2': 'Deathly Leap',
			'img': 'assets/images/champions/Thresh/Death Sentence.png',
			'tooltip': "Thresh throws out his scythe, dealing 80/120/160/200/240 (+0.5) magic damage, granting True Sight and stunning the first unit hit, pulling them in for 1.5 seconds.<br><br>Reactivating this ability will pull Thresh to the bound enemy.<br><br>Death Sentence's cooldown is reduced by 3 seconds if it hits an enemy."
		},
		'skill_r':
		{
			'1': 'The Box',
			'img': 'assets/images/champions/Thresh/The Box.png',
			'tooltip': 'Thresh creates a prison of spectral walls around himself. Enemy champions who walk through a wall suffer 250/400/550 (+1) magic damage and are slowed by 99% for 2 seconds, but break that wall.  <br><br>Once one wall is broken, the remaining walls deal no damage and apply half slow duration. An enemy cannot be affected by multiple walls simultaneously.'
		},
		'skill_w':
		{
			'1': 'Dark Passage',
			'img': 'assets/images/champions/Thresh/Dark Passage.png',
			'tooltip': 'Thresh throws the Lantern to a target location. If an ally clicks on it Thresh will pull both the Lantern and his ally to him.<br><br>The Lantern grants a shield lasting 4 seconds that absorbs up to 60/100/140/180/220 (+?) damage to Thresh and up to one ally if they come near it. The shield amount scales with the number of souls Thresh has collected.'
		},
		'stats':
		{
			'acquisition_radius': 475,
			'ad_base': 56,
			'ad_lvl': 2.2,
			'apen': 0,
			'apen%': 0,
			'arm_base': 28,
			'arm_lvl': 0,
			'as_base': 0.625,
			'as_lvl': 3.5,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.0604166686534881,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 7,
			'hp5_lvl': 0.55,
			'hp_base': 560.52,
			'hp_lvl': 93,
			'ls': 0,
			'missile_speed': 0,
			'mp5_base': 6,
			'mp5_lvl': 0.8,
			'mp_base': 273.92,
			'mp_lvl': 44,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 335,
			'ms_base': 335,
			'nb_dmg_dealt': 1.05,
			'nb_dmg_taken': 0.95,
			'ofa_dmg_dealt': 1.08,
			'ofa_dmg_taken': 0.92,
			'pathing_radius': 36,
			'range': 450,
			'selection_radius': 125,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.15,
			'urf_dmg_taken': 0.85,
			'windup_modifier': 0.25
		},
		'style': 75,
		'title': 'the Chain Warden',
		'toughness': 2,
		'utility': 3
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Assassin',
		'apiname': 'tristana',
		'attack': 9,
		'be': 1350,
		'changes': 'V10.11',
		'control': 2,
		'damage': 3,
		'date': '2009-02-21',
		'ddragon_apiname': 'Tristana',
		'defense': 3,
		'difficulty': 1,
		'herotype': 'Marksman',
		'id': 18,
		'img': 'assets/images/champions/Tristana/Tristana.png',
		'index': 120,
		'magic': 5,
		'mobility': 2,
		'name': 'Tristana',
		'patch': 'Alpha Week 2',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 585,
		'skill_e':
		{
			'1': 'Explosive Charge',
			'img': 'assets/images/champions/Tristana/Explosive Charge.png',
			'tooltip': "Passive: Enemies explode when slain by Tristana's basic attacks, dealing ? Magic Damage to nearby enemies.<br><br>Active: Places a bomb on an enemy or turret that explodes after ? seconds, dealing ? Physical Damage. Each attack and ability charges the bomb's damage by +?%, up to a maximum of ?.<br><br>At ? charges, the bomb explodes immediately. The detonation radius is twice as large if used on a turret."
		},
		'skill_i':
		{
			'1': 'Draw a Bead',
			'img': 'assets/images/champions/Tristana/Draw a Bead.png',
			'tooltip': "Increases Tristana's Attack Range as she levels."
		},
		'skill_q':
		{
			'1': 'Rapid Fire',
			'img': 'assets/images/champions/Tristana/Rapid Fire.png',
			'tooltip': "Active: Increases Tristana's Attack Speed by 50/65/80/95/110% for 7 seconds."
		},
		'skill_r':
		{
			'1': 'Buster Shot',
			'img': 'assets/images/champions/Tristana/Buster Shot.png',
			'tooltip': 'Tristana fires a massive cannonball at an enemy unit. This deals ? Magic Damage and knocks surrounding units back ? distance.'
		},
		'skill_w':
		{
			'1': 'Rocket Jump',
			'img': 'assets/images/champions/Tristana/Rocket Jump.png',
			'tooltip': "Tristana launches herself to target location, dealing 95/145/195/245/295 (+0.5) Magic Damage and slowing surrounding enemies by 60% for 1/1.5/2/2.5/3 seconds.<br><br>Kills, Assists, and max stack Explosive Charge detonations on Champions reset Rocket Jump's cooldown."
		},
		'stats':
		{
			'acquisition_radius': 800,
			'ad_base': 61,
			'ad_lvl': 3.3,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 1.05,
			'arm_base': 26,
			'arm_lvl': 3,
			'as_base': 0.656,
			'as_lvl': 1.5,
			'as_ratio': 0.679,
			'attack_delay_offset': -0.151993364095687,
			'critdmg': 0,
			'gameplay_radius': 55,
			'heal_shield': 0,
			'hp5_base': 3.75,
			'hp5_lvl': 0.65,
			'hp_base': 559,
			'hp_lvl': 88,
			'ls': 0,
			'mp5_base': 7.2,
			'mp5_lvl': 0.45,
			'mp_base': 250,
			'mp_lvl': 32,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 325,
			'ms_base': 325,
			'pathing_radius': 30,
			'range': 525,
			'selection_radius': 100,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 20,
		'title': 'the Yordle Gunner',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Tank',
		'apiname': 'trundle',
		'attack': 7,
		'be': 3150,
		'changes': 'V10.14',
		'control': 1,
		'damage': 2,
		'date': '2010-12-01',
		'ddragon_apiname': 'Trundle',
		'defense': 6,
		'difficulty': 1,
		'herotype': 'Fighter',
		'id': 48,
		'img': 'assets/images/champions/Trundle/Trundle.png',
		'index': 121,
		'magic': 2,
		'mobility': 1,
		'name': 'Trundle',
		'patch': 'V1.0.0.106',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 790,
		'skill_e':
		{
			'1': 'Pillar of Ice',
			'img': 'assets/images/champions/Trundle/Pillar of Ice.png',
			'tooltip': 'Trundle creates an icy pillar at target location for 6 seconds, becoming impassable terrain and slowing all nearby enemy units by 20/30/40/50/60%.'
		},
		'skill_i':
		{
			'1': "King's Tribute",
			'img': "assets/images/champions/Trundle/King's Tribute.png",
			'tooltip': 'When an enemy unit dies near Trundle, he heals for a percent of its maximum Health.'
		},
		'skill_q':
		{
			'1': 'Chomp',
			'img': 'assets/images/champions/Trundle/Chomp.png',
			'tooltip': "Trundle lunges at his opponent with his next basic attack, dealing 20/40/60/80/100 (+[0.8, 0.9, 1, 1.1, 1.2]) physical damage and briefly slowing his target.<br><br>This attack increases Trundle's Attack Damage by 20/25/30/35/40 for 5 seconds, with his opponent losing half of this amount."
		},
		'skill_r':
		{
			'1': 'Subjugate',
			'img': 'assets/images/champions/Trundle/Subjugate.png',
			'tooltip': "Trundle drains ? of an enemy champion's maximum Health as Magic Damage and ?% of their Armor and Magic Resist, half immediately and half over ? seconds. The Armor and Magic Resist is returned ? seconds after the drain ends."
		},
		'skill_w':
		{
			'1': 'Frozen Domain',
			'img': 'assets/images/champions/Trundle/Frozen Domain.png',
			'tooltip': 'Trundle coats target location with ice for 8 seconds, gaining 20/28/36/44/52% Movement Speed, 20/40/60/80/100% Attack Speed and 25% increased healing and regeneration from all sources.'
		},
		'stats':
		{
			'acquisition_radius': 400,
			'ad_base': 68,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'aram_healing': 0.95,
			'arm_base': 37,
			'arm_lvl': 2.7,
			'as_base': 0.67,
			'as_lvl': 2.9,
			'as_ratio': 0.6700000166893,
			'attack_delay_offset': -0.0916666686534881,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 6,
			'hp5_lvl': 0.75,
			'hp_base': 616,
			'hp_lvl': 96,
			'ls': 0,
			'mp5_base': 7.5,
			'mp5_lvl': 0.6,
			'mp_base': 281,
			'mp_lvl': 45,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 350,
			'ms_base': 350,
			'ofa_dmg_dealt': 0.95,
			'ofa_dmg_taken': 1.05,
			'pathing_radius': 25.7665996551513,
			'range': 175,
			'selection_radius': 135,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 20,
		'title': 'the Troll King',
		'toughness': 3,
		'utility': 2
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Assassin',
		'apiname': 'tryndamere',
		'attack': 10,
		'be': 1350,
		'changes': 'V9.13',
		'control': 1,
		'damage': 3,
		'date': '2009-05-01',
		'ddragon_apiname': 'Tryndamere',
		'defense': 5,
		'difficulty': 1,
		'herotype': 'Fighter',
		'id': 23,
		'img': 'assets/images/champions/Tryndamere/Tryndamere.png',
		'index': 122,
		'magic': 2,
		'mobility': 2,
		'name': 'Tryndamere',
		'patch': 'May 1, 2009 Patch',
		'rangetype': 'Melee',
		'resource': 'Fury',
		'rp': 585,
		'skill_e':
		{
			'1': 'Spinning Slash',
			'img': 'assets/images/champions/Tryndamere/Spinning Slash.png',
			'tooltip': "Tryndamere spins through his enemies, dealing 80/110/140/170/200 (+1.3) (+0.8) physical damage to enemies in his path and generating Fury.<br><br>Spinning Slash's cooldown is reduced by 1 second whenever Tryndamere critically strikes. This reduction is increased to 2 seconds against champions."
		},
		'skill_i':
		{
			'1': 'Battle Fury',
			'img': 'assets/images/champions/Tryndamere/Battle Fury.png',
			'tooltip': 'Tryndamere gains Fury for each attack, critical strike, and killing blow he makes. Fury passively increases his Critical Strike Chance and can be consumed with his Bloodlust spell.'
		},
		'skill_q':
		{
			'1': 'Bloodlust',
			'img': 'assets/images/champions/Tryndamere/Bloodlust.png',
			'tooltip': 'Passive: Tryndamere thirsts for blood, gaining 5/10/15/20/25 Attack Damage plus 0.15/0.2/0.25/0.3/0.35 per 1% Health missing.<br><br>Active: Tryndamere consumes his Fury, restoring 30/40/50/60/70 (+0.3) Health, plus 0.5/0.95/1.4/1.85/2.3 (+?) Health per Fury consumed.'
		},
		'skill_r':
		{
			'1': 'Undying Rage',
			'img': 'assets/images/champions/Tryndamere/Undying Rage.png',
			'tooltip': 'Tryndamere becomes completely immune to death for 5 seconds, refusing to be reduced below 30/50/70 Health and instantly gaining 50/75/100 Fury.'
		},
		'skill_w':
		{
			'1': 'Mocking Shout',
			'img': 'assets/images/champions/Tryndamere/Mocking Shout.png',
			'tooltip': "Decreases surrounding champions' Attack Damage by 20/35/50/65/80 for 4 seconds, and enemies with their backs turned also have their Movement Speed reduced by 30/37.5/45/52.5/60% for 4 seconds."
		},
		'stats':
		{
			'acquisition_radius': 400,
			'ad_base': 69,
			'ad_lvl': 3.7,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 1.1,
			'aram_dmg_taken': 0.9,
			'arm_base': 33,
			'arm_lvl': 3.1,
			'as_base': 0.67,
			'as_lvl': 2.9,
			'as_ratio': 0.6700000166893,
			'attack_delay_offset': -0.109999999403953,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 8.5,
			'hp5_lvl': 0.9,
			'hp_base': 625.64,
			'hp_lvl': 98,
			'ls': 0,
			'mp5_base': 0,
			'mp5_lvl': 0,
			'mp_base': 100,
			'mp_lvl': 0,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 345,
			'ms_base': 345,
			'pathing_radius': 35,
			'range': 125,
			'selection_radius': 135,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 10,
		'title': 'the Barbarian King',
		'toughness': 2,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'apiname': 'twistedfate',
		'attack': 6,
		'be': 1350,
		'changes': 'V10.15',
		'control': 2,
		'damage': 3,
		'date': '2009-02-21',
		'ddragon_apiname': 'TwistedFate',
		'defense': 2,
		'difficulty': 3,
		'fullname': 'Tobias',
		'herotype': 'Mage',
		'id': 4,
		'img': 'assets/images/champions/Twisted Fate/Twisted Fate.png',
		'index': 123,
		'magic': 6,
		'mobility': 2,
		'name': 'Twisted Fate',
		'nickname': 'TF',
		'patch': 'Alpha Week 2',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 585,
		'skill_e':
		{
			'1': 'Stacked Deck',
			'img': 'assets/images/champions/Twisted Fate/Stacked Deck.png',
			'tooltip': 'Passive: Every 4 attacks, Twisted Fate deals an additional 65/90/115/140/165 (+0.5) Magic Damage.<br><br>In addition, his Attack Speed is increased by 20/25/30/35/40%.'
		},
		'skill_i':
		{
			'1': 'Loaded Dice',
			'img': 'assets/images/champions/Twisted Fate/Loaded Dice.png',
			'tooltip': "Upon killing a unit, Twisted Fate rolls his 'lucky' dice receiving anywhere between 1 and 6 bonus gold."
		},
		'skill_q':
		{
			'1': 'Wild Cards',
			'img': 'assets/images/champions/Twisted Fate/Wild Cards.png',
			'tooltip': 'Throws three cards that deal 60/105/150/195/240 (+0.65) Magic Damage to each enemy unit they pass through.'
		},
		'skill_r':
		{
			'1': 'Destiny',
			'2': 'Gate',
			'img': 'assets/images/champions/Twisted Fate/Destiny.png',
			'tooltip': 'Grants True Sight on all enemy champions on the map for 6/8/10 seconds.<br><br>While Destiny is active, Twisted Fate can teleport up to 5500 units away in 1.5 seconds.'
		},
		'skill_w':
		{
			'1': 'Pick a Card',
			'2': 'Blue Card',
			'3': 'Red Card',
			'4': 'Gold Card',
			'img': 'assets/images/champions/Twisted Fate/Pick a Card.png',
			'tooltip': 'Cast once to shuffle the deck and again to choose your card, enhancing your next attack.<br><br>Blue Card deals ? Magic Damage and restores 50/75/100/125/150 Mana.<br><br>Red Card deals ? Magic Damage to units around the target and slows their Movement Speed by 30/35/40/45/50% for 2.5 seconds.<br><br>Gold Card deals ? Magic Damage and stuns for 1/1.25/1.5/1.75/2 seconds.'
		},
		'stats':
		{
			'ad_base': 52,
			'ad_lvl': 3.3,
			'apen': 0,
			'apen%': 0,
			'arm_base': 21,
			'arm_lvl': 3.15,
			'as_base': 0.651,
			'as_lvl': 3.22,
			'as_ratio': 0.651000022888183,
			'attack_delay_offset': -0.0559643805027008,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 5.5,
			'hp5_lvl': 0.6,
			'hp_base': 534,
			'hp_lvl': 94,
			'ls': 0,
			'mp5_base': 8,
			'mp5_lvl': 0.8,
			'mp_base': 333,
			'mp_lvl': 19,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 335,
			'ms_base': 335,
			'pathing_radius': 35,
			'range': 525,
			'selection_radius': 110,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 65,
		'title': 'the Card Master',
		'toughness': 1,
		'utility': 2
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Assassin',
		'apiname': 'twitch',
		'attack': 9,
		'be': 3150,
		'changes': 'V10.13',
		'control': 1,
		'damage': 3,
		'date': '2009-05-01',
		'ddragon_apiname': 'Twitch',
		'defense': 2,
		'difficulty': 2,
		'herotype': 'Marksman',
		'id': 29,
		'img': 'assets/images/champions/Twitch/Twitch.png',
		'index': 124,
		'magic': 3,
		'mobility': 2,
		'name': 'Twitch',
		'patch': 'May 1, 2009 Patch',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 790,
		'skill_e':
		{
			'1': 'Contaminate',
			'img': 'assets/images/champions/Twitch/Contaminate.png',
			'tooltip': 'Deals 20/30/40/50/60 physical damage plus 15/20/25/30/35 (+0.2) (+?) per stack of Deadly Venom to all nearby enemies affected by Deadly Venom. (Max Stack Damage: ?)'
		},
		'skill_i':
		{
			'1': 'Deadly Venom',
			'img': 'assets/images/champions/Twitch/Deadly Venom.png',
			'tooltip': "Twitch's basic attacks infect the target, dealing true damage each second."
		},
		'skill_q':
		{
			'1': 'Ambush',
			'2': 'Ambush 2',
			'3': 'Ambush 3',
			'img': 'assets/images/champions/Twitch/Ambush.png',
			'tooltip': 'Twitch becomes Camouflaged and gains 10% Movement Speed for 10/11/12/13/14 seconds. This bonus triples when he is nearby an enemy champion that cannot see him. <br><br>Twitch gains 30/35/40/45/50% Attack Speed for 5 seconds after exiting Ambush. Ambush resets when a champion dies while affected by Deadly Venom.<br><br>Stealth - Camouflage: Twitch is hidden from view while enemy champions remain outside his detection radius. Attacking or casting spells ends Camouflage.'
		},
		'skill_r':
		{
			'1': 'Spray and Pray',
			'img': 'assets/images/champions/Twitch/Spray and Pray.png',
			'tooltip': 'For 5 seconds Twitch gains 300 Attack Range and 20/30/40 Bonus Attack Damage.<br><br>For the duration, his basic attacks become piercing bolts that deal 20% less damage to subsequent targets, down to a minimum of 40% damage.<br><br>Stealth - Camouflage: Activating Spray and Pray does not end Camouflage.'
		},
		'skill_w':
		{
			'1': 'Venom Cask',
			'img': 'assets/images/champions/Twitch/Venom Cask.png',
			'tooltip': 'Twitch hurls a cask that adds a stack of Deadly Venom to all enemies struck and leaves behind a toxic cloud that persists for 3 seconds.<br><br>Enemies that remain within the cloud have 25/30/35/40/45% reduced Movement Speed and receive an additional stack of Deadly Venom each second.'
		},
		'stats':
		{
			'acquisition_radius': 575,
			'ad_base': 59,
			'ad_lvl': 3.11,
			'apen': 0,
			'apen%': 0,
			'arm_base': 27,
			'arm_lvl': 3,
			'as_base': 0.679,
			'as_lvl': 3.38,
			'as_ratio': 0.67900002002716,
			'attack_delay_offset': -0.0980840176343917,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 3.75,
			'hp5_lvl': 0.6,
			'hp_base': 612,
			'hp_lvl': 86,
			'ls': 0,
			'mp5_base': 7.256,
			'mp5_lvl': 0.45,
			'mp_base': 287.2,
			'mp_lvl': 40,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 330,
			'ms_base': 330,
			'pathing_radius': 35,
			'range': 550,
			'selection_radius': 135,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 0,
		'title': 'the Plague Rat',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'Mixed,Physical',
		'alttype': 'Tank',
		'apiname': 'udyr',
		'attack': 8,
		'be': 1350,
		'changes': 'V10.15',
		'control': 2,
		'damage': 2,
		'date': '2009-12-02',
		'ddragon_apiname': 'Udyr',
		'defense': 7,
		'difficulty': 1,
		'herotype': 'Fighter',
		'id': 77,
		'img': 'assets/images/champions/Udyr/Udyr.png',
		'index': 125,
		'magic': 4,
		'mobility': 2,
		'name': 'Udyr',
		'patch': 'V1.0.0.61',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 585,
		'skill_e':
		{
			'1': 'Bear Stance',
			'img': 'assets/images/champions/Udyr/Bear Stance.png',
			'tooltip': 'Persistent Effect: Basic attacks stun the target for 1 second. This effect cannot occur on the same target again for 5 seconds.<br><br>Activation: Increases Movement Speed by 15/20/25/30/35/40% and ignores unit collision for 2/2.25/2.5/2.75/3/3.25 seconds.'
		},
		'skill_i':
		{
			'1': "Monkey's Agility",
			'img': "assets/images/champions/Udyr/Monkey's Agility.png",
			'tooltip': 'Entering a stance grants Udyr bonus Attack Speed and Movement Speed for a short duration. This effect can stack multiple times.'
		},
		'skill_q':
		{
			'1': 'Tiger Stance',
			'img': 'assets/images/champions/Udyr/Tiger Stance.png',
			'tooltip': "Persistent Effect: Udyr's first attack and every third attack after will perform a Tiger Strike, dealing bonus 30/60/90/120/150/180 (+[1.2, 1.3, 1.4, 1.5, 1.6]) physical damage over 2 seconds. <br><br>If a target is affected by Tiger Strike, a new application of Tiger Strike will deal the remaining damage instantly.<br><br>Activation: Increases Attack Speed by 30/40/50/60/70/80% for 5 seconds.<br>"
		},
		'skill_r':
		{
			'1': 'Phoenix Stance',
			'img': 'assets/images/champions/Udyr/Phoenix Stance.png',
			'tooltip': "Persistent Effect: Udyr's first attack and every third attack after burns enemies in front of him, dealing ? magic damage.<br><br>Activation: Unleashes pulsing waves of fire, dealing ? magic damage each second to nearby enemies for ? seconds."
		},
		'skill_w':
		{
			'1': 'Turtle Stance',
			'img': 'assets/images/champions/Udyr/Turtle Stance.png',
			'tooltip': "Persistent Effect: Udyr's first attack and every third attack after heals him for (+?) (2.5% of his maximum health), increasing by 1% for every percent of Udyr's missing health.<br><br>Activation: Gains a shield that absorbs 60/95/130/165/200/235 (+0.5) damage for 5 seconds."
		},
		'stats':
		{
			'acquisition_radius': 400,
			'ad_base': 66,
			'ad_lvl': 5,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 1.08,
			'aram_dmg_taken': 0.92,
			'arm_base': 34,
			'arm_lvl': 4,
			'as_base': 0.658,
			'as_lvl': 2.67,
			'as_ratio': 0.657999992370605,
			'attack_delay_offset': -0.101577997207641,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 6,
			'hp5_lvl': 0.75,
			'hp_base': 594,
			'hp_lvl': 99,
			'ls': 0,
			'mp5_base': 7.5,
			'mp5_lvl': 0.45,
			'mp_base': 271,
			'mp_lvl': 30,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 350,
			'ms_base': 350,
			'pathing_radius': 35,
			'range': 125,
			'selection_radius': 125,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.05,
			'urf_dmg_taken': 0.9
		},
		'style': 35,
		'title': 'the Spirit Walker',
		'toughness': 3,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Tank',
		'apiname': 'urgot',
		'attack': 8,
		'be': 3150,
		'changes': 'V10.13',
		'control': 2,
		'damage': 2,
		'date': '2010-08-24',
		'ddragon_apiname': 'Urgot',
		'defense': 5,
		'difficulty': 2,
		'herotype': 'Fighter',
		'id': 6,
		'img': 'assets/images/champions/Urgot/Urgot.png',
		'index': 126,
		'magic': 3,
		'mobility': 1,
		'name': 'Urgot',
		'patch': 'V1.0.0.99',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 790,
		'skill_e':
		{
			'1': 'Disdain',
			'img': 'assets/images/champions/Urgot/Disdain.png',
			'tooltip': 'Urgot charges forwards, shielding himself for ? for ? seconds. If he catches an enemy champion, he will stop and hurl them behind him, dealing ? physical damage and stunning them for ? seconds.<br><br>Non-champions take the same damage but are knocked aside.<br><br>Cannot cross terrain.'
		},
		'skill_i':
		{
			'1': 'Echoing Flames',
			'img': 'assets/images/champions/Urgot/Echoing Flames.png',
			'tooltip': "Urgot's basic attacks and Purge periodically trigger blasts of flame from his legs, dealing physical damage."
		},
		'skill_q':
		{
			'1': 'Corrosive Charge',
			'img': 'assets/images/champions/Urgot/Corrosive Charge.png',
			'tooltip': 'Urgot fires an explosive charge, dealing ? physical damage and slowing enemies hit by ?% for ? seconds.'
		},
		'skill_r':
		{
			'1': 'Fear Beyond Death',
			'img': 'assets/images/champions/Urgot/Fear Beyond Death.png',
			'tooltip': "Urgot fires a chem-drill, impaling the first enemy champion hit. Deals ? physical damage and slows for ? seconds by up to ?% based on the victim's missing health.<br><br>If the victim falls below ?% health while impaled, Urgot may recast this ability, suppressing the victim and dragging them in for execution. Activates automatically if the target is below ?% at the end of the effect.<br><br>When Urgot executes a victim, nearby enemies flee in terror for ? seconds."
		},
		'skill_w':
		{
			'1': 'Purge',
			'img': 'assets/images/champions/Urgot/Purge.png',
			'tooltip': 'For 4/4/4/4/25000 seconds, Urgot shoots at a nearby enemy 3 times a second, dealing 12 (+?) physical damage per shot, locking onto champions recently damaged by his other abilities.<br><br>While firing, Urgot loses 125 movement speed but has 40% slow resistance and can walk over minions and non-epic monsters.<br><br>At max rank, Purge lasts for an infinite duration and has no cooldown.<br><br>Applies on-hits at ?% damage. Cannot critically strike. Minimum of ? damage to minions.'
		},
		'stats':
		{
			'acquisition_radius': 550,
			'ad_base': 63,
			'ad_lvl': 4,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 0.95,
			'arm_base': 36,
			'arm_lvl': 4.25,
			'as_base': 0.625,
			'as_lvl': 3.75,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.150000005960464,
			'critdmg': 0,
			'gameplay_radius': 80,
			'heal_shield': 0,
			'hp5_base': 7.5,
			'hp5_lvl': 0.7,
			'hp_base': 585,
			'hp_lvl': 88,
			'ls': 0,
			'mp5_base': 7.25,
			'mp5_lvl': 0.8,
			'mp_base': 340,
			'mp_lvl': 45,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 330,
			'ms_base': 330,
			'pathing_radius': 50,
			'range': 350,
			'selection_radius': 136.111099243164,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.1,
			'urf_dmg_taken': 0.9
		},
		'style': 55,
		'title': 'the Dreadnought',
		'toughness': 2,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Mage',
		'apiname': 'varus',
		'attack': 7,
		'be': 4800,
		'changes': 'V10.14',
		'control': 2,
		'damage': 3,
		'date': '2012-05-08',
		'ddragon_apiname': 'Varus',
		'defense': 3,
		'difficulty': 2,
		'herotype': 'Marksman',
		'id': 110,
		'img': 'assets/images/champions/Varus/Varus.png',
		'index': 127,
		'magic': 4,
		'mobility': 1,
		'name': 'Varus',
		'nickname': 'Darkin, Valmar, Kai',
		'patch': 'V1.0.0.139',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Hail of Arrows',
			'img': 'assets/images/champions/Varus/Hail of Arrows.png',
			'tooltip': 'Varus fires a hail of arrows that deals 50/90/130/170/210 (+0.6) physical damage and desecrates the ground for 4 seconds.<br><br>Desecrated Ground slows enemy Movement Speed by 25/30/35/40/45% and reduces healing effects by 40%.'
		},
		'skill_i':
		{
			'1': 'Living Vengeance',
			'img': 'assets/images/champions/Varus/Living Vengeance.png',
			'tooltip': 'On kill or assist, Varus temporarily gains Attack Speed. This bonus is larger if the enemy is a champion.'
		},
		'skill_q':
		{
			'1': 'Piercing Arrow',
			'img': 'assets/images/champions/Varus/Piercing Arrow.png',
			'tooltip': "First Cast: Varus starts drawing back his next shot, gradually increasing its range and damage. While preparing to shoot, Varus' Movement Speed is slowed by 20%. After 4 seconds, Piercing Arrow fails but refunds 50% of its Mana cost.<br><br>Second Cast: Varus fires, dealing ? to ? physical damage, reduced by 15% per enemy hit (minimum 33%).<br><br>Piercing Arrow's cooldown is reduced by 1 seconds if the arrow detonates Blight stacks on at least one enemy champion."
		},
		'skill_r':
		{
			'1': 'Chain of Corruption',
			'img': 'assets/images/champions/Varus/Chain of Corruption.png',
			'tooltip': 'Varus flings out a tendril of corruption that deals 150/200/250 (+1) magic damage and immobilizes the first enemy champion hit for 2 seconds.<br><br>The corruption then spreads towards nearby uninfected enemy champions. If it reaches them, they take the same damage and are also immobilized. Immobilized units gain 3 Blight stacks over the duration.'
		},
		'skill_w':
		{
			'1': 'Blighted Quiver',
			'img': 'assets/images/champions/Varus/Blighted Quiver.png',
			'tooltip': " Passive: Varus' basic attacks deal 7/10.5/14/17.5/20 (+0.25) bonus magic damage and apply Blight for 6 seconds (stacks 3 times).<br><br>Varus' other abilities detonate Blight, dealing magic damage equal to 3/3.5/4/4.5/5% (+0.02%) of the target's maximum Health per stack.<br><br>Active: Varus' next Piercing Arrow deals bonus magic damage equal to ?% to ?% of the target's missing health (scales with Piercing Arrow charge).<br><br>Blighted Quiver is capped at 360 damage against monsters."
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 61,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 0.95,
			'arm_base': 27,
			'arm_lvl': 3.4,
			'as_base': 0.658,
			'as_lvl': 3,
			'as_ratio': 0.657999992370605,
			'attack_delay_offset': -0.124561406672,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 3.5,
			'hp5_lvl': 0.55,
			'hp_base': 530,
			'hp_lvl': 91,
			'ls': 0,
			'mp5_base': 8,
			'mp5_lvl': 0.8,
			'mp_base': 360,
			'mp_lvl': 33,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 330,
			'ms_base': 330,
			'pathing_radius': 35,
			'range': 575,
			'selection_radius': 120,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 20,
		'title': 'the Arrow of Retribution',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Assassin',
		'apiname': 'vayne',
		'attack': 10,
		'be': 4800,
		'changes': 'V10.11',
		'control': 2,
		'damage': 3,
		'date': '2011-05-10',
		'ddragon_apiname': 'Vayne',
		'defense': 1,
		'difficulty': 2,
		'fullname': 'Shauna Vayne',
		'herotype': 'Marksman',
		'id': 67,
		'img': 'assets/images/champions/Vayne/Vayne.png',
		'index': 128,
		'magic': 1,
		'mobility': 2,
		'name': 'Vayne',
		'patch': 'v1.0.0.118',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Condemn',
			'img': 'assets/images/champions/Vayne/Condemn.png',
			'tooltip': 'Fires a bolt that knocks back a target and deals ? damage. If the target collides with terrain, the damage is increased by ?% and the target is stunned for ? seconds. '
		},
		'skill_i':
		{
			'1': 'Night Hunter',
			'img': 'assets/images/champions/Vayne/Night Hunter.png',
			'tooltip': 'Vayne ruthlessly hunts evil-doers, gaining 30 movement speed when moving toward nearby enemy champions.'
		},
		'skill_q':
		{
			'1': 'Tumble',
			'img': 'assets/images/champions/Vayne/Tumble.png',
			'tooltip': "Vayne rolls a short distance, and deals ? bonus physical damage on her next basic attack within ? seconds. <br><br>Tumble's bonus damage is equal to ?% of her Attack Damage"
		},
		'skill_r':
		{
			'1': 'Final Hour',
			'img': 'assets/images/champions/Vayne/Final Hour.png',
			'tooltip': "Vayne gains ? bonus attack damage and improvements to Night Hunter and Tumble for ? seconds. The Duration of Final Hour is extended by ? seconds whenever a champion damaged by Vayne dies within ? seconds. <br><br>Night Hunter: Vayne instead gains ? movement speed<br>Tumble: Tumble's cooldown is reduced by ?%, and Vayne gains Invisibility for ? second when she Tumbles.<br><br>Stealth - Invisible: Vayne can only be revealed by nearby enemy turrets or True Sight.<br>Final Hour's duration can't be increased beyond its original maximum duration"
		},
		'skill_w':
		{
			'1': 'Silver Bolts',
			'img': 'assets/images/champions/Vayne/Silver Bolts.png',
			'tooltip': "Every third consecutive attack or ability against an enemy deals an additional ?% of the enemy's maximum health as true damage (no less than ?)<br><br>Silver Bolts deals no more than ? damage against monsters. "
		},
		'stats':
		{
			'acquisition_radius': 575,
			'ad_base': 60,
			'ad_lvl': 2.36,
			'apen': 0,
			'apen%': 0,
			'arm_base': 23,
			'arm_lvl': 3.4,
			'as_base': 0.658,
			'as_lvl': 3.3,
			'as_ratio': 0.657999992370605,
			'attack_delay_offset': -0.124561406672,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 3.5,
			'hp5_lvl': 0.55,
			'hp_base': 515,
			'hp_lvl': 89,
			'ls': 0,
			'mp5_base': 6.972,
			'mp5_lvl': 0.4,
			'mp_base': 231.8,
			'mp_lvl': 35,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 330,
			'ms_base': 330,
			'pathing_radius': 35,
			'range': 550,
			'selection_radius': 120,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_taken': 0.95
		},
		'style': 0,
		'title': 'the Night Hunter',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'apiname': 'veigar',
		'attack': 2,
		'be': 1350,
		'changes': 'V10.6',
		'control': 3,
		'damage': 3,
		'date': '2009-07-24',
		'ddragon_apiname': 'Veigar',
		'defense': 2,
		'difficulty': 2,
		'herotype': 'Mage',
		'id': 45,
		'img': 'assets/images/champions/Veigar/Veigar.png',
		'index': 129,
		'magic': 10,
		'mobility': 1,
		'name': 'Veigar',
		'patch': 'V0.8.22.115',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 585,
		'skill_e':
		{
			'1': 'Event Horizon',
			'img': 'assets/images/champions/Veigar/Event Horizon.png',
			'tooltip': 'After a 0.5 second delay, Veigar twists the edges of space around the target location for 3 seconds, forming a pentagon of walls. Enemies who attempt to pass through the perimeter are stopped and stunned for 1.5/1.75/2/2.25/2.5 seconds.'
		},
		'skill_i':
		{
			'1': 'Phenomenal Evil Power',
			'img': 'assets/images/champions/Veigar/Phenomenal Evil Power.png',
			'tooltip': "Veigar is the greatest Evil to ever strike at the hearts of Runeterra - and he's only getting bigger! Striking an enemy Champion with a spell or scoring a takedown grants Veigar permanently increased Ability Power."
		},
		'skill_q':
		{
			'1': 'Baleful Strike',
			'img': 'assets/images/champions/Veigar/Baleful Strike.png',
			'tooltip': 'Unleashes a bolt of dark energy, dealing 80/120/160/200/240 (+0.6) magic damage to the first two enemies hit.<br><br>Killing a unit with this also grants Veigar a stack of Phenomenal Evil. Large minions and large monsters grant two.'
		},
		'skill_r':
		{
			'1': 'Primordial Burst',
			'img': 'assets/images/champions/Veigar/Primordial Burst.png',
			'tooltip': "Blasts the target enemy champion with primal magic to deal 175/250/325 (+0.75) to 350/500/650 (+1.5) magic damage, increasing based on the target's missing health.<br><br>Damage is maximized against enemies below 33% health."
		},
		'skill_w':
		{
			'1': 'Dark Matter',
			'img': 'assets/images/champions/Veigar/Dark Matter.png',
			'tooltip': "After 1.2 seconds, dark matter falls from the sky to the target location, dealing 100/150/200/250/300 (+1) magic damage.<br><br>Every 50 stacks of Phenomenal Evil reduce Dark Matter's cooldown by 10% (currently ?%)."
		},
		'stats':
		{
			'acquisition_radius': 525,
			'ad_base': 52,
			'ad_lvl': 2.7,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 0.92,
			'aram_dmg_taken': 1.1,
			'arm_base': 23,
			'arm_lvl': 3.75,
			'as_base': 0.625,
			'as_lvl': 2.24,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.109062500298023,
			'critdmg': 0,
			'gameplay_radius': 55,
			'heal_shield': 0,
			'hp5_base': 6.5,
			'hp5_lvl': 0.6,
			'hp_base': 505,
			'hp_lvl': 94,
			'ls': 0,
			'mp5_base': 8,
			'mp5_lvl': 0.8,
			'mp_base': 490,
			'mp_lvl': 26,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 340,
			'ms_base': 340,
			'nb_dmg_dealt': 0.95,
			'pathing_radius': 30,
			'range': 550,
			'selection_radius': 93,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 0.95
		},
		'style': 100,
		'title': 'the Tiny Master of Evil',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'apiname': 'velkoz',
		'attack': 2,
		'be': 6300,
		'changes': 'V10.6',
		'control': 2,
		'damage': 3,
		'date': '2014-02-27',
		'ddragon_apiname': 'Velkoz',
		'defense': 2,
		'difficulty': 2,
		'herotype': 'Mage',
		'id': 161,
		'img': "assets/images/champions/Vel'Koz/Vel'Koz.png",
		'index': 130,
		'magic': 10,
		'mobility': 1,
		'name': "Vel'Koz",
		'patch': 'V4.3',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 975,
		'skill_e':
		{
			'1': 'Tectonic Disruption',
			'img': "assets/images/champions/Vel'Koz/Tectonic Disruption.png",
			'tooltip': "Vel'Koz disrupts a nearby area which, after a delay, deals 70/100/130/160/190 (+0.3) Magic Damage and knocks up enemies hit for 0.75 seconds.<br><br>Any enemies hit that are close to Vel'Koz will be pushed slightly in the direction the ability was cast."
		},
		'skill_i':
		{
			'1': 'Organic Deconstruction',
			'img': "assets/images/champions/Vel'Koz/Organic Deconstruction.png",
			'tooltip': "Vel'Koz's abilities apply Organic Deconstruction to enemies on hit. If 3 stacks are accumulated, the enemy will take a burst of true damage."
		},
		'skill_q':
		{
			'1': 'Plasma Fission',
			'2': 'Plasma Fission 2',
			'img': "assets/images/champions/Vel'Koz/Plasma Fission.png",
			'tooltip': "Vel'Koz shoots a plasma bolt that deals ? magic damage and slows enemies by ?% decaying over ? second(s).<br><br>Upon reactivation or upon hitting an enemy, the bolt splits at a 90 degree angle.<br><br>Killing a unit with this refunds ?% of the Mana Cost."
		},
		'skill_r':
		{
			'1': 'Life Form Disintegration Ray',
			'2': 'Researched',
			'img': "assets/images/champions/Vel'Koz/Life Form Disintegration Ray.png",
			'tooltip': "Passive: Deconstructing enemy Champions Researches them for 7 seconds. Basic attacks and all abilities refresh Research.<br><br>Active: Vel'Koz channels a ray of energy that follows the cursor for 2.5 seconds, dealing Magic Damage up to a total of 450/625/800 (+1.25) and slowing units hit by 20%.<br><br>Enemies that stay in the beam will periodically gain Organic Deconstruction stacks. Deals True Damage instead of Magic against Researched units."
		},
		'skill_w':
		{
			'1': 'Void Rift',
			'img': "assets/images/champions/Vel'Koz/Void Rift.png",
			'tooltip': "Vel'Koz opens a rift to the void that deals 30/50/70/90/110 (+0.15) Magic Damage. After a delay, it deals an additional 45/75/105/135/165 (+0.25) Magic Damage.<br><br>Void Rift has a 2 second cooldown between casts."
		},
		'stats':
		{
			'acquisition_radius': 575,
			'ad_base': 54.9379,
			'ad_lvl': 3.1416,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 0.9,
			'arm_base': 21.88,
			'arm_lvl': 3.5,
			'as_base': 0.625,
			'as_lvl': 1.36,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.100000001490116,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 5.5,
			'hp5_lvl': 0.55,
			'hp_base': 520,
			'hp_lvl': 88,
			'ls': 0,
			'missile_speed': 0,
			'mp5_base': 8,
			'mp5_lvl': 0.8,
			'mp_base': 469,
			'mp_lvl': 21,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 340,
			'ms_base': 340,
			'pathing_radius': 35,
			'range': 525,
			'selection_radius': 88.8889007568359,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 100,
		'title': 'the Eye of the Void',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Assassin',
		'apiname': 'vi',
		'attack': 8,
		'be': 4800,
		'changes': 'V10.13',
		'control': 3,
		'damage': 2,
		'date': '2012-12-19',
		'ddragon_apiname': 'Vi',
		'defense': 5,
		'difficulty': 1,
		'herotype': 'Fighter',
		'id': 254,
		'img': 'assets/images/champions/Vi/Vi.png',
		'index': 131,
		'magic': 3,
		'mobility': 2,
		'name': 'Vi',
		'nickname': '6',
		'patch': 'V1.0.0.153',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Excessive Force',
			'2': 'Excessive Force 2',
			'img': 'assets/images/champions/Vi/Excessive Force.png',
			'tooltip': 'Causes next basic attack to deal 10/30/50/70/90 (+1.15) (+0.9) physical damage to the target and enemies behind it.<br><br>Vi charges a new punch every ? seconds and can hold 2 charges at once.'
		},
		'skill_i':
		{
			'1': 'Blast Shield',
			'img': 'assets/images/champions/Vi/Blast Shield.png',
			'tooltip': 'Vi charges a shield over time. The shield can be activated by hitting an enemy with an ability.'
		},
		'skill_q':
		{
			'1': 'Vault Breaker',
			'img': 'assets/images/champions/Vi/Vault Breaker.png',
			'tooltip': 'Charges a powerful punch that carries Vi forward.<br><br>First Cast: Slows Movement Speed by 15% while increasing damage and dash range over 1.25 seconds.<br><br>Second Cast: Dashes forward dealing 55/80/105/130/155 (+?) to ? (+1.4) physical damage and applying Denting Blows to all enemies hit. Stops upon colliding with an enemy champion, knocking it back.'
		},
		'skill_r':
		{
			'1': 'Assault and Battery',
			'img': 'assets/images/champions/Vi/Assault and Battery.png',
			'tooltip': 'Targets an enemy champion and chases it down, knocking it up for ? seconds. Deals ? physical damage.<br><br>While charging, Vi cannot be stopped and has True Sight of the target. Any enemies in the way are dealt damage, knocked aside, and stunned for ? seconds.'
		},
		'skill_w':
		{
			'1': 'Denting Blows',
			'2': 'Denting Blows 2',
			'img': 'assets/images/champions/Vi/Denting Blows.png',
			'tooltip': "Every 3rd attack on the same target deals an additional 4/5.5/7/8.5/10% (+35%) of the target's maximum Health as physical damage, reduces its Armor by 20% and grants Vi 30/37.5/45/52.5/60% Attack Speed for 4 seconds (max 300 damage vs. monsters).<br><br>Triggering Denting Blows reduces the cooldown of Blast Shield by 3 seconds."
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 63,
			'ad_lvl': 3.5,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 1.05,
			'arm_base': 30,
			'arm_lvl': 4,
			'as_base': 0.644,
			'as_lvl': 2,
			'as_ratio': 0.643999993801116,
			'attack_cast_time': 0.360000014305114,
			'attack_total_time': 1.60000002384185,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 10,
			'hp5_lvl': 1,
			'hp_base': 585,
			'hp_lvl': 85,
			'ls': 0,
			'mp5_base': 8,
			'mp5_lvl': 0.65,
			'mp_base': 295,
			'mp_lvl': 45,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 340,
			'ms_base': 340,
			'pathing_radius': 35,
			'range': 125,
			'selection_radius': 100,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 55,
		'title': 'the Piltover Enforcer',
		'toughness': 2,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'apiname': 'viktor',
		'attack': 2,
		'be': 4800,
		'changes': 'V10.12',
		'control': 2,
		'damage': 3,
		'date': '2011-12-29',
		'ddragon_apiname': 'Viktor',
		'defense': 4,
		'difficulty': 3,
		'herotype': 'Mage',
		'id': 112,
		'img': 'assets/images/champions/Viktor/Viktor.png',
		'index': 132,
		'magic': 10,
		'mobility': 1,
		'name': 'Viktor',
		'patch': 'V1.0.0.131',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Death Ray',
			'img': 'assets/images/champions/Viktor/Death Ray.png',
			'tooltip': "Viktor uses his robotic arm to fire a chaos beam that cuts across the field in a line, dealing 70/110/150/190/230 (+0.6) magic damage to every enemy in its path.<br><br>Augment - Aftershock: An explosion follows the Death Ray's wake, dealing 20/60/100/140/180 (+0.7) magic damage."
		},
		'skill_i':
		{
			'1': 'Glorious Evolution',
			'img': 'assets/images/champions/Viktor/Glorious Evolution.png',
			'tooltip': 'Viktor starts with the Prototype Hex Core that can be upgraded three times in the store to augment his abilities.'
		},
		'skill_q':
		{
			'1': 'Siphon Power',
			'img': 'assets/images/champions/Viktor/Siphon Power.png',
			'tooltip': "Viktor blasts an enemy unit, dealing ? (+0.4) magic damage while granting Viktor a shield that absorbs up to ? damage over the next ? seconds.<br><br>Viktor's next basic attack deals ?(+0.55) bonus magic damage.<br><br>Augment - Turbocharge: Siphon Power's shield is increased by ?% and Viktor gains ?% Movement Speed for ? seconds."
		},
		'skill_r':
		{
			'1': 'Chaos Storm',
			'2': 'Chaos Storm 2',
			'img': 'assets/images/champions/Viktor/Chaos Storm.png',
			'tooltip': 'Viktor conjures a singularity at target location, dealing ? (+0.5) magic damage and interrupting enemy channels.<br><br>Viktor can redirect the singularity for ? seconds, which will discharge ? (+0.45) magic damage every ? second to nearby enemies. The singularity will move slower as it attempts to move farther away from Viktor.<br><br>Augment - Perfect Storm: Chaos Storm moves ?% Faster.'
		},
		'skill_w':
		{
			'1': 'Gravity Field',
			'img': 'assets/images/champions/Viktor/Gravity Field.png',
			'tooltip': "Viktor deploys a gravitational imprisonment device for ? seconds, slowing enemy units by ?% and adding a stack every ? seconds. At ? stacks the target is stunned for ? seconds.<br><br>Augment - Magnetize: Viktor's non-periodic spells apply a ?% slow to enemies for 1 second.<br><br>"
		},
		'stats':
		{
			'acquisition_radius': 525,
			'ad_base': 53,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'arm_base': 23,
			'arm_lvl': 4,
			'as_base': 0.658,
			'as_lvl': 2.11,
			'as_ratio': 0.657999992370605,
			'attack_delay_offset': -0.11999999731779,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 8,
			'hp5_lvl': 0.65,
			'hp_base': 530,
			'hp_lvl': 90,
			'ls': 0,
			'mp5_base': 8,
			'mp5_lvl': 0.8,
			'mp_base': 405,
			'mp_lvl': 25,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 335,
			'ms_base': 335,
			'pathing_radius': 35,
			'range': 525,
			'selection_radius': 160,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 0.95
		},
		'style': 90,
		'title': 'the Machine Herald',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'apiname': 'vladimir',
		'attack': 2,
		'be': 3150,
		'changes': 'V8.13',
		'control': 1,
		'damage': 3,
		'date': '2010-07-27',
		'ddragon_apiname': 'Vladimir',
		'defense': 6,
		'difficulty': 2,
		'herotype': 'Mage',
		'id': 8,
		'img': 'assets/images/champions/Vladimir/Vladimir.png',
		'index': 133,
		'magic': 8,
		'mobility': 1,
		'name': 'Vladimir',
		'patch': 'V1.0.0.97',
		'rangetype': 'Ranged',
		'resource': 'Bloodthirst',
		'rp': 790,
		'secondary attributes': 'Health',
		'skill_e':
		{
			'1': 'Tides of Blood',
			'img': 'assets/images/champions/Vladimir/Tides of Blood.png',
			'tooltip': "First Cast: Vladimir charges up a reservoir of blood, spending up to 8% of his max Health (?) to increase this spell's damage. While at full charge, Vladimir is slowed.<br><br>Second Cast: Vladimir unleashes a nova of blood at surrounding enemies which deals between 30/45/60/75/90 (+?) (+0.35) and ? (+?) (+0.8) magic damage and, at full charge, briefly slows by 40/45/50/55/60%. Targets hit block a portion of the nova.<br><br>Tides of Blood will release automatically if held for more than 1.5 seconds."
		},
		'skill_i':
		{
			'1': 'Crimson Pact',
			'img': 'assets/images/champions/Vladimir/Crimson Pact.png',
			'tooltip': 'Every 40 points of bonus Health gives Vladimir 1 Ability Power and every 1 point of Ability Power gives Vladimir 1.4 bonus Health (does not stack with itself).'
		},
		'skill_q':
		{
			'1': 'Transfusion',
			'2': 'Crimson Rush',
			'img': 'assets/images/champions/Vladimir/Transfusion.png',
			'tooltip': 'Vladimir drains the lifeforce of his target, dealing 80/100/120/140/160 (+0.6) magic damage and healing himself for 20/25/30/35/40 (+0.35) health. After casting Transfusion twice, Vladimir gains Crimson Rush the next time it becomes available to cast.<br><br>Crimson Rush: Vladimir is briefly hasted and for the next 2.5 seconds Transfusion deals 85% increased damage and heals for an additional ? plus 5% (+?%) of his missing health (empowered heal has 35% effectiveness against minions). '
		},
		'skill_r':
		{
			'1': 'Hemoplague',
			'img': 'assets/images/champions/Vladimir/Hemoplague.png',
			'tooltip': 'Vladimir infects enemies in a target area with a virulent plague, causing them to take 10% increased damage from all sources for 4 seconds.<br><br>After 4 seconds, Vladimir deals 150/250/350 (+0.7) magic damage to all infected targets. If Hemoplague damages an enemy Champion, Vladimir heals himself for ? (+?), plus 50% for each Champion beyond the first.'
		},
		'skill_w':
		{
			'1': 'Sanguine Pool',
			'img': 'assets/images/champions/Vladimir/Sanguine Pool.png',
			'tooltip': 'Vladimir sinks into a pool of blood for 2 seconds, gaining a brief haste and becoming untargetable while slowing enemies above him by 40%.<br><br>Vladimir deals 80/135/190/245/300 (+0.15) [10% of bonus Health] magic damage over the duration and heals himself for 15% of that amount.<br><br>Sanguine Pool can be cast while charging Tides of Blood.'
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 55,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'arm_base': 23,
			'arm_lvl': 3.3,
			'as_base': 0.658,
			'as_lvl': 2,
			'as_ratio': 0.657999992370605,
			'attack_cast_time': 0.300000011920928,
			'attack_delay_offset': -0.0721089988946914,
			'attack_total_time': 1.51999998092651,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 7,
			'hp5_lvl': 0.6,
			'hp_base': 537,
			'hp_lvl': 96,
			'ls': 0,
			'mp5_base': 0,
			'mp5_lvl': 0,
			'mp_base': 2,
			'mp_lvl': 0,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 330,
			'ms_base': 330,
			'pathing_radius': 35,
			'range': 450,
			'selection_radius': 120,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 0.92,
			'urf_dmg_taken': 1.08,
			'urf_healing': 0.95
		},
		'style': 100,
		'title': 'the Crimson Reaper',
		'toughness': 2,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Tank',
		'apiname': 'volibear',
		'attack': 7,
		'be': 3150,
		'changes': 'V10.14',
		'control': 2,
		'damage': 2,
		'date': '2011-11-29',
		'ddragon_apiname': 'Volibear',
		'defense': 7,
		'difficulty': 1,
		'herotype': 'Fighter',
		'id': 106,
		'img': 'assets/images/champions/Volibear/Volibear.png',
		'index': 134,
		'magic': 4,
		'mobility': 2,
		'name': 'Volibear',
		'patch': 'V1.0.0.130',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 790,
		'skill_e':
		{
			'1': 'Sky Splitter',
			'img': 'assets/images/champions/Volibear/Sky Splitter.png',
			'tooltip': "After a delay, Volibear summons a lightning bolt at a target location.  This deals ? (+?)  (+?% of the target's maximum health) magic damage and slows enemies by ?% for 2 seconds.  Damage against non-champions is capped at ?.<br><br>If Volibear is inside the blast zone, he gains a shield equal to ?% of his maximum health (+?) for 3 seconds."
		},
		'skill_i':
		{
			'1': 'The Relentless Storm',
			'img': 'assets/images/champions/Volibear/The Relentless Storm.png',
			'tooltip': "Volibear's attacks and abilities grant attack speed, and eventually cause his basic attacks to deal bonus magic damage to nearby enemies."
		},
		'skill_q':
		{
			'1': 'Thundering Smash',
			'img': 'assets/images/champions/Volibear/Thundering Smash.png',
			'tooltip': "Volibear gains ?% movement speed for 4 seconds (or ?% towards enemy champions) and the ability to move through units. While active, Volibear's next basic attack deals ? (+?) bonus damage and stuns the target for ? second.<br><br>Volibear becomes enraged if an enemy immobilizes him before he stuns a target, resetting this ability and its cooldown."
		},
		'skill_r':
		{
			'1': 'Stormbringer',
			'img': 'assets/images/champions/Volibear/Stormbringer.png',
			'tooltip': 'Volibear transforms and leaps toward a target location, gaining ? health, ? attack range, and the ability to move through units for the next ? seconds.<br><br>Upon landing, nearby enemy towers are disabled for ? seconds and suffer ? (+?) (+?) physical damage. Nearby enemies are slowed by ?%, decaying over 1 second. Enemies directly underneath Volibear suffer ? (+?) (+?) physical damage.'
		},
		'skill_w':
		{
			'1': 'Frenzied Maul',
			'img': 'assets/images/champions/Volibear/Frenzied Maul.png',
			'tooltip': 'Volibear mauls an enemy, dealing ? (+?) (+?) physical damage, applying on-hit effects, and wounding the target for 8 seconds.<br><br>If Frenzied Maul is used on a wounded target, its damage is increased by 50% and Volibear restores ? health +?% of his missing health (?% effective against minions and monsters).'
		},
		'stats':
		{
			'acquisition_radius': 400,
			'ad_base': 60,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'arm_base': 31,
			'arm_lvl': 4,
			'as_base': 0.625,
			'as_lvl': 2,
			'as_ratio': 0.7,
			'attack_delay_offset': 0,
			'critdmg': 0,
			'gameplay_radius': 80,
			'heal_shield': 0,
			'hp5_base': 9,
			'hp5_lvl': 0.75,
			'hp_base': 580,
			'hp_lvl': 90,
			'ls': 0,
			'mp5_base': 6.25,
			'mp5_lvl': 0.5,
			'mp_base': 350,
			'mp_lvl': 50,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32,
			'mr_lvl': 1.25,
			'ms': 340,
			'ms_base': 340,
			'nb_dmg_dealt': 0.97,
			'ofa_dmg_dealt': 0.93,
			'ofa_dmg_taken': 1.07,
			'pathing_radius': 50,
			'range': 150,
			'selection_radius': 125,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 30,
		'title': 'the Relentless Storm',
		'toughness': 3,
		'utility': 1
	},
	{
		'adaptivetype': 'Mixed,Physical',
		'alttype': 'Tank',
		'apiname': 'warwick',
		'attack': 9,
		'be': 450,
		'changes': 'V10.9',
		'control': 2,
		'damage': 2,
		'date': '2009-02-21',
		'ddragon_apiname': 'Warwick',
		'defense': 5,
		'difficulty': 1,
		'herotype': 'Fighter',
		'id': 19,
		'img': 'assets/images/champions/Warwick/Warwick.png',
		'index': 135,
		'magic': 3,
		'mobility': 1,
		'name': 'Warwick',
		'patch': 'Alpha Week 2',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 260,
		'skill_e':
		{
			'1': 'Primal Howl',
			'img': 'assets/images/champions/Warwick/Primal Howl.png',
			'tooltip': 'Warwick gains 35/40/45/50/55% damage reduction for 2.5 seconds. At the end of the duration, or if activated again, Warwick howls, causing all nearby enemies to flee for 1 second.'
		},
		'skill_i':
		{
			'1': 'Eternal Hunger',
			'img': 'assets/images/champions/Warwick/Eternal Hunger.png',
			'tooltip': "Warwick's basic attacks deal bonus magic damage. If Warwick is below 50% health, he heals the same amount. If Warwick is below 25% health, this healing triples."
		},
		'skill_q':
		{
			'1': 'Jaws of the Beast',
			'img': 'assets/images/champions/Warwick/Jaws of the Beast.png',
			'tooltip': "Warwick lunges forward and bites his target. While the key is held down, he will attach to the target then leap behind them.<br><br>On release, deals 1.2+1 plus 6/7/8/9/10% of your target's maximum health as magic damage (applies On Hit effects). Heal 30/45/60/75/90% of damage dealt.<br><br>While attached, Warwick follows any movements they make and cannot be displaced."
		},
		'skill_r':
		{
			'1': 'Infinite Duress',
			'img': 'assets/images/champions/Warwick/Infinite Duress.png',
			'tooltip': 'Warwick leaps 2.5 seconds worth of movement speed in a direction, suppressing the first champion he collides with for ? seconds. Deals ? magic damage and applies on-hit effects 3 times. Warwick heals for 100% of all damage he deals during Infinite Duress.'
		},
		'skill_w':
		{
			'1': 'Blood Hunt',
			'img': 'assets/images/champions/Warwick/Blood Hunt.png',
			'tooltip': 'Passive: Warwick gains 70/80/90/100/110% attack speed against enemies below 50% health. He also senses low health champions globally, moving 35/40/45/50/55% faster toward them when out of combat. These bonuses are tripled against enemies below 20% health.<br><br>Active: Warwick briefly senses all enemies. The nearest sensed champion is Blood Hunted for 8 seconds. Cast only while not in combat with a champion.<br><br>While no enemies are being hunted, Blood Hunt cools down twice as fast.'
		},
		'stats':
		{
			'acquisition_radius': 400,
			'ad_base': 65,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_taken': 0.92,
			'arm_base': 33,
			'arm_lvl': 3.2,
			'as_base': 0.638,
			'as_lvl': 2.3,
			'as_ratio': 0.638000011444091,
			'attack_delay_offset': -0.125,
			'critdmg': 0,
			'gameplay_radius': 55,
			'heal_shield': 0,
			'hp5_base': 4,
			'hp5_lvl': 0.75,
			'hp_base': 550,
			'hp_lvl': 85,
			'ls': 0,
			'mp5_base': 7.466,
			'mp5_lvl': 0.575,
			'mp_base': 280,
			'mp_lvl': 35,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 335,
			'ms_base': 335,
			'nb_dmg_taken': 0.95,
			'pathing_radius': 35,
			'range': 125,
			'selection_radius': 111.111099243164,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 30,
		'title': 'the Uncaged Wrath of Zaun',
		'toughness': 2,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Tank',
		'apiname': 'monkeyking',
		'attack': 8,
		'be': 4800,
		'changes': 'V10.14',
		'control': 2,
		'damage': 2,
		'date': '2011-07-26',
		'ddragon_apiname': 'MonkeyKing',
		'defense': 5,
		'difficulty': 1,
		'herotype': 'Fighter',
		'id': 62,
		'img': 'assets/images/champions/Wukong/Wukong.png',
		'index': 136,
		'magic': 2,
		'mobility': 2,
		'name': 'Wukong',
		'patch': 'V1.0.0.122',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Nimbus Strike',
			'img': 'assets/images/champions/Wukong/Nimbus Strike.png',
			'tooltip': 'Wukong dashes to an enemy, sending out clones that mimic the dash to up to ? additional enemies nearby. Each enemy struck takes ? magic damage. He and his clone then gain ?% Attack Speed for ? seconds.<br>'
		},
		'skill_i':
		{
			'1': 'Stone Skin',
			'img': 'assets/images/champions/Wukong/Stone Skin.png',
			'tooltip': 'Wukong gains stacking armor and max health regeneration while fighting champions and monsters.'
		},
		'skill_q':
		{
			'1': 'Crushing Blow',
			'img': 'assets/images/champions/Wukong/Crushing Blow.png',
			'tooltip': "Wukong and his clone's next attack gains ? extra range, deals ? bonus physical damage, and reduces the target's armor by ?% for ? seconds.<br><br>Crushing Blow's cooldown is reduced by ? seconds every time Wukong or his clone hits an enemy with an attack or spell."
		},
		'skill_r':
		{
			'1': 'Cyclone',
			'img': 'assets/images/champions/Wukong/Cyclone.png',
			'tooltip': "Wukong spins his staff around for ? seconds, gaining ?% Movement Speed. While spinning, he deals ? (+? of the target's maximum health) physical damage per second to nearby enemies and knocks them up for ? seconds.<br><br>Cyclone can be cast a second time within ? seconds before going on cooldown."
		},
		'skill_w':
		{
			'1': 'Warrior Trickster',
			'img': 'assets/images/champions/Wukong/Warrior Trickster.png',
			'tooltip': 'Wukong dashes and becomes Invisible for ? second, leaving behind a stationary clone for ? seconds.<br><br>The clone attacks nearby enemies Wukong has recently damaged and will mimic his ultimate, dealing ?% of normal damage.'
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 68,
			'ad_lvl': 4,
			'apen': 0,
			'apen%': 0,
			'arm_base': 31,
			'arm_lvl': 3.5,
			'as_base': 0.711,
			'as_lvl': 3,
			'as_ratio': 0.657999992370605,
			'attack_delay_offset': -0.0916666686534881,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 4,
			'hp5_lvl': 0.65,
			'hp_base': 540,
			'hp_lvl': 85,
			'ls': 0,
			'mp5_base': 8,
			'mp5_lvl': 0.65,
			'mp_base': 300,
			'mp_lvl': 45,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 28,
			'mr_lvl': 1.25,
			'ms': 345,
			'ms_base': 345,
			'nb_dmg_dealt': 0.95,
			'nb_dmg_taken': 1.03,
			'ofa_dmg_dealt': 0.95,
			'ofa_dmg_taken': 1.05,
			'pathing_radius': 35,
			'range': 175,
			'selection_radius': 100,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 0.95,
			'urf_dmg_taken': 1.05
		},
		'style': 55,
		'title': 'the Monkey King',
		'toughness': 2,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'apiname': 'xayah',
		'attack': 10,
		'be': 6300,
		'changes': 'V10.12',
		'control': 3,
		'damage': 3,
		'date': '2017-04-19',
		'ddragon_apiname': 'Xayah',
		'defense': 6,
		'difficulty': 2,
		'herotype': 'Marksman',
		'id': 498,
		'img': 'assets/images/champions/Xayah/Xayah.png',
		'index': 137,
		'magic': 1,
		'mobility': 1,
		'name': 'Xayah',
		'patch': 'V7.8',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 975,
		'skill_e':
		{
			'1': 'Bladecaller',
			'img': 'assets/images/champions/Xayah/Bladecaller.png',
			'tooltip': 'Xayah calls all Feathers back to her, dealing ? physical damage to enemies they pass through.<br><br>Hitting an enemy with ? Feathers roots them for ? second(s).<br><br>Minions take ?% damage from Bladecaller.<br><br>Critical Strike Chance multiplies feather damage.'
		},
		'skill_i':
		{
			'1': 'Clean Cuts',
			'2': "Lover's Leap",
			'img': 'assets/images/champions/Xayah/Clean Cuts.png',
			'tooltip': "After using an ability, Xayah's next basic attacks will hit all targets along their path and leave a Feather."
		},
		'skill_q':
		{
			'1': 'Double Daggers',
			'img': 'assets/images/champions/Xayah/Double Daggers.png',
			'tooltip': 'Xayah throws two knives dealing ? physical damage each and leaving two Feathers. Targets hit after the first take ?% damage.'
		},
		'skill_r':
		{
			'1': 'Featherstorm',
			'img': 'assets/images/champions/Xayah/Featherstorm.png',
			'tooltip': 'Xayah leaps into the air becoming untargetable. She then rains down daggers which deal ? physical damage and leave behind a line of Feathers.<br><br>Xayah can move while in the air.'
		},
		'skill_w':
		{
			'1': 'Deadly Plumage',
			'img': 'assets/images/champions/Xayah/Deadly Plumage.png',
			'tooltip': 'Xayah creates a storm of blades for 4 seconds that grant her 35/40/45/50/55% attack speed and cause her basic attacks to strike an additional time for 20% damage. <br><br>If Deadly Plumage strikes an enemy champion, allies under the effects of Deadly Plumage gain 30% movement speed for 1.5 seconds.<br><br>If Rakan is nearby he will also gain the effects of Deadly Plumage.'
		},
		'stats':
		{
			'acquisition_radius': 800,
			'ad_base': 60,
			'ad_lvl': 2.9,
			'apen': 0,
			'apen%': 0,
			'arm_base': 25,
			'arm_lvl': 3,
			'as_base': 0.625,
			'as_lvl': 3.3,
			'as_ratio': 0.625,
			'attack_cast_time': 0.282999992370605,
			'attack_total_time': 1.60000002384185,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 3.25,
			'hp5_lvl': 0.75,
			'hp_base': 590,
			'hp_lvl': 88,
			'ls': 0,
			'mp5_base': 8.25,
			'mp5_lvl': 0.75,
			'mp_base': 340,
			'mp_lvl': 40,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 325,
			'ms_base': 325,
			'pathing_radius': 35,
			'range': 525,
			'selection_radius': 120,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 0.95
		},
		'style': 30,
		'title': 'the Rebel',
		'toughness': 2,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'apiname': 'xerath',
		'attack': 1,
		'be': 4800,
		'changes': 'V10.9',
		'control': 2,
		'damage': 3,
		'date': '2011-10-05',
		'ddragon_apiname': 'Xerath',
		'defense': 3,
		'difficulty': 2,
		'herotype': 'Mage',
		'id': 101,
		'img': 'assets/images/champions/Xerath/Xerath.png',
		'index': 138,
		'magic': 10,
		'mobility': 1,
		'name': 'Xerath',
		'patch': 'V1.0.0.126',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Shocking Orb',
			'img': 'assets/images/champions/Xerath/Shocking Orb.png',
			'tooltip': 'Xerath fires an orb of raw magic. The first enemy hit takes 80/110/140/170/200 (+0.45) magic damage and is stunned for between 0.5 and 2 seconds. The stun duration lengthens based on how far the orb travels.'
		},
		'skill_i':
		{
			'1': 'Mana Surge',
			'img': 'assets/images/champions/Xerath/Mana Surge.png',
			'tooltip': "Xerath's basic attacks periodically restore Mana."
		},
		'skill_q':
		{
			'1': 'Arcanopulse',
			'img': 'assets/images/champions/Xerath/Arcanopulse.png',
			'tooltip': "First cast: Xerath charges Arcanopulse, gradually decreasing his Movement Speed while increasing the spell's range.<br><br>Second cast: Xerath fires Arcanopulse, dealing 80/120/160/200/240 (+0.75) magic damage to all enemies in a line.<br><br>While charging Arcanopulse, Xerath cannot attack or cast other spells. If Xerath does not fire the spell, half the Mana cost is refunded."
		},
		'skill_r':
		{
			'1': 'Rite of the Arcane',
			'img': 'assets/images/champions/Xerath/Rite of the Arcane.png',
			'tooltip': 'Xerath ascends to his true form, becoming rooted in place and gaining 3/4/5 Arcane Barrages. This magic artillery deals 200/250/300 (+0.45) magic damage to all enemies hit.<br><br>The root ends after 10 seconds, when all shots have been fired or when manually deactivated by issuing a move command. If no barrages are fired, 50% of the cooldown is refunded.'
		},
		'skill_w':
		{
			'1': 'Eye of Destruction',
			'img': 'assets/images/champions/Xerath/Eye of Destruction.png',
			'tooltip': 'Xerath calls down a blast of arcane energy, dealing ? magic damage to all enemies within the target area, slowing them by ?% for ? seconds. Enemies in the center of the blast take ? magic damage and are slowed by ?%, decaying down to ?%.'
		},
		'stats':
		{
			'acquisition_radius': 600,
			'ad_base': 54.7,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 0.95,
			'arm_base': 21.88,
			'arm_lvl': 3.5,
			'as_base': 0.625,
			'as_lvl': 1.36,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.0492600016295909,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 5.5,
			'hp5_lvl': 0.55,
			'hp_base': 526,
			'hp_lvl': 92,
			'ls': 0,
			'mp5_base': 8,
			'mp5_lvl': 0.8,
			'mp_base': 459,
			'mp_lvl': 22,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 340,
			'ms_base': 340,
			'pathing_radius': 35,
			'range': 525,
			'selection_radius': 88.8889007568359,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 90,
		'title': 'the Magus Ascendant',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Assassin',
		'apiname': 'xinzhao',
		'attack': 8,
		'be': 1350,
		'changes': 'V10.7',
		'control': 2,
		'damage': 2,
		'date': '2010-07-13',
		'ddragon_apiname': 'XinZhao',
		'defense': 6,
		'difficulty': 1,
		'fullname': 'Xin Zhao',
		'herotype': 'Fighter',
		'id': 5,
		'img': 'assets/images/champions/Xin Zhao/Xin Zhao.png',
		'index': 139,
		'magic': 3,
		'mobility': 2,
		'name': 'Xin Zhao',
		'patch': 'V1.0.0.96',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 585,
		'skill_e':
		{
			'1': 'Audacious Charge',
			'img': 'assets/images/champions/Xin Zhao/Audacious Charge.png',
			'tooltip': 'Xin Zhao charges to an enemy. The charge deals 50/75/100/125/150 (+0.6) magic damage to nearby enemies and slows them by 30% for 0.5 seconds.  Charging grants Xin Zhao 40/45/50/55/60% attack speed for 5 seconds.'
		},
		'skill_i':
		{
			'1': 'Determination',
			'img': 'assets/images/champions/Xin Zhao/Determination.png',
			'tooltip': 'Every third attack deals bonus damage and heals Xin Zhao.'
		},
		'skill_q':
		{
			'1': 'Three Talon Strike',
			'img': 'assets/images/champions/Xin Zhao/Three Talon Strike.png',
			'tooltip': "Xin Zhao's next 3 basic attacks deal 20/28/36/44/52 (+?) extra physical damage and reduce his other cooldowns by 1 second. The final strike also knocks the target into the air for 0.75 seconds."
		},
		'skill_r':
		{
			'1': 'Crescent Guard',
			'img': 'assets/images/champions/Xin Zhao/Crescent Guard.png',
			'tooltip': "Xin Zhao unleashes a sweep around him that deals ? plus ?% of target's current Health in physical damage and knocks them back (max 600 vs monsters).<br><br>For ? seconds after casting this ability, Xin Zhao has increased Awareness and will completely block damage from enemies that are far away. Xin Zhao's attacks and spell casts increase the duration of Awareness by ? seconds each.<br><br>The last champion hit by Xin Zhao's basic attacks or Audacious Charge is not knocked back."
		},
		'skill_w':
		{
			'1': 'Wind Becomes Lightning',
			'img': 'assets/images/champions/Xin Zhao/Wind Becomes Lightning.png',
			'tooltip': "Xin Zhao slashes in front of himself with his spear, then thrusts it forward.<br><br>Slash: 30/40/50/60/70 (+0.3) damage.<br>Thrust: 30/65/100/135/170 (+0.75) damage and slows by 50% for 1.5 seconds.<br><br>Cast time is reduced with Attack Speed provided from items and levels (minimum of 0.4 seconds). Current cast time: ?<br><br>Deals 50% less damage to minions.<br>Lifesteal is 33% effective on both attacks.<br>Extends the current duration of Xin Zhao's other abilities by ? seconds."
		},
		'stats':
		{
			'ad_base': 66,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'arm_base': 35,
			'arm_lvl': 3.5,
			'as_base': 0.645,
			'as_lvl': 3.5,
			'as_ratio': 0.644999980926513,
			'attack_cast_time': 0.289999991655349,
			'attack_total_time': 1.54999995231628,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 8,
			'hp5_lvl': 0.7,
			'hp_base': 570,
			'hp_lvl': 92,
			'ls': 0,
			'mp5_base': 7.256,
			'mp5_lvl': 0.45,
			'mp_base': 273.8,
			'mp_lvl': 35,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 345,
			'ms_base': 345,
			'pathing_radius': 35,
			'range': 175,
			'selection_radius': 108.333297729492,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 35,
		'title': 'the Seneschal of Demacia',
		'toughness': 2,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'alttype': 'Assassin',
		'apiname': 'yasuo',
		'attack': 8,
		'be': 4800,
		'changes': 'V10.12',
		'control': 2,
		'damage': 3,
		'date': '2013-12-13',
		'ddragon_apiname': 'Yasuo',
		'defense': 4,
		'difficulty': 3,
		'herotype': 'Fighter',
		'id': 157,
		'img': 'assets/images/champions/Yasuo/Yasuo.png',
		'index': 140,
		'magic': 4,
		'mobility': 3,
		'name': 'Yasuo',
		'patch': 'V3.15',
		'rangetype': 'Melee',
		'resource': 'Flow',
		'rp': 880,
		'skill_e':
		{
			'1': 'Sweeping Blade',
			'img': 'assets/images/champions/Yasuo/Sweeping Blade.png',
			'tooltip': "Dashes through target enemy, dealing 60/70/80/90/100 (+0.6) (+0.2) magic damage. Each cast increases your next dash's base Damage by 25%, up to +50%.<br><br>Cannot be re-cast on the same enemy for 10/9/8/7/6 seconds.<br><br>If Steel Tempest is cast while dashing, it will strike as a circle."
		},
		'skill_i':
		{
			'1': 'Way of the Wanderer',
			'img': 'assets/images/champions/Yasuo/Way of the Wanderer.png',
			'tooltip': "Yasuo's Critical Strike Chance is doubled. Additionally, Yasuo builds toward a shield whenever he is moving. The shield triggers when he takes damage from a champion or monster."
		},
		'skill_q':
		{
			'1': 'Steel Tempest',
			'2': 'Steel Tempest 2',
			'3': 'Steel Tempest 3',
			'img': 'assets/images/champions/Yasuo/Steel Tempest.png',
			'tooltip': 'Thrusts forward, dealing 20/45/70/95/120 (+1) physical damage.<br><br>On hit, grants a stack of Gathering Storm for 6 seconds. At 2 stacks, Steel Tempest fires a whirlwind that knocks Airborne.<br><br>Steel Tempest is treated as a basic attack: It can critically strike, applies on-hit effects, is interruptible by crowd control and its cooldown and cast time are reduced by Attack Speed.<br><br>If cast while dashing, Steel Tempest will strike as a circle.'
		},
		'skill_r':
		{
			'1': 'Last Breath',
			'img': 'assets/images/champions/Yasuo/Last Breath.png',
			'tooltip': "Blinks to an Airborne enemy champion, dealing ? physical damage and holding all Airborne enemies in the area in the air for an additional ? second(s). Grants maximum Flow but resets all stacks of Gathering Storm.<br><br>For ? second(s), Yasuo's critical strikes gain ?% Bonus Armor Penetration - this affects Armor from items, buffs, and runes."
		},
		'skill_w':
		{
			'1': 'Wind Wall',
			'img': 'assets/images/champions/Yasuo/Wind Wall.png',
			'tooltip': 'Creates a moving wall that blocks all enemy projectiles for 4 seconds.'
		},
		'stats':
		{
			'acquisition_radius': 400,
			'ad_base': 60,
			'ad_lvl': 3.2,
			'apen': 0,
			'apen%': 0,
			'arm_base': 30,
			'arm_lvl': 3.4,
			'as_base': 0.697,
			'as_lvl': 2.5,
			'as_ratio': 0.6700000166893,
			'attack_delay_offset': -0.0799999982118606,
			'crit_mod': 0.9,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 6.5,
			'hp5_lvl': 0.9,
			'hp_base': 490,
			'hp_lvl': 87,
			'ls': 0,
			'mp5_base': 0,
			'mp5_lvl': 0,
			'mp_base': 100,
			'mp_lvl': 0,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 1.25,
			'ms': 345,
			'ms_base': 345,
			'pathing_radius': 32,
			'range': 175,
			'selection_radius': 75,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.1,
			'urf_dmg_taken': 0.95
		},
		'style': 20,
		'title': 'the Unforgiven',
		'toughness': 1,
		'utility': 2
	},
	{
		'adaptivetype': 'physical',
		'apiname': 'yone',
		'attack': 0,
		'be': 7800,
		'changes': 'V10.16',
		'control': 2,
		'damage': 3,
		'date': '2020-08-06',
		'ddragon_apiname': 'Yone',
		'defense': 0,
		'difficulty': 3,
		'herotype': 'Assassin',
		'id': 777,
		'img': 'assets/images/champions/Yone/Yone.png',
		'index': 141,
		'magic': 0,
		'mobility': 3,
		'name': 'Yone',
		'patch': 'V10.16',
		'rangetype': 'Melee',
		'resource': 'None',
		'rp': 975,
		'skill_e':
		{
			'1': 'Soul Unbound',
			'img': 'assets/images/champions/Yone/Soul Unbound.png',
			'tooltip': 'Yone enters a spirit form for ? seconds, leaving your body behind for the duration and gaining ?% ramping Move Speed. <br><br>When the spirit form ends, Yone snaps back to his body and repeat ?% of all damage he dealt to champions during this time. You may Recast this skill during spirit form.<br><br>Recast: End spirit form early.'
		},
		'skill_i':
		{
			'1': 'Way of the Hunter',
			'img': 'assets/images/champions/Yone/Way of the Hunter.png',
			'tooltip': 'Yone deals magic damage with every second Attack. In addition, his critical strike chance is doubled.'
		},
		'skill_q':
		{
			'1': 'Mortal Steel',
			'img': 'assets/images/champions/Yone/Mortal Steel.png',
			'tooltip': 'Yone thrusts forward, dealing ? physical damage.<br><br>On hit, grants a stack of for ? seconds. At 2 stacks, this skill causes Yone to dash forward with a wave of wind that Knocks Up for ? seconds and deal ? physical damage. '
		},
		'skill_r':
		{
			'1': 'Fate Sealed',
			'img': 'assets/images/champions/Yone/Fate Sealed.png',
			'tooltip': 'Yone strikes all enemies along a path for ? physical damage and ? magic damage, teleporting behind the last champion hit and Knocking Up victims towards Yone.'
		},
		'skill_w':
		{
			'1': 'Spirit Cleave',
			'img': 'assets/images/champions/Yone/Spirit Cleave.png',
			'tooltip': 'Yone cleaves forward, dealing ? + ?% max Health physical damage and ? + ?% max Health magic damage.<br><br>If Yone hits, he gains ? Shield for ? seconds. The amount of Shield increases for each champion struck. '
		},
		'stats':
		{
			'acquisition_radius': 400,
			'ad_base': 60,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'arm_base': 28,
			'arm_lvl': 3.4,
			'as_base': 0.625,
			'as_lvl': 2.5,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.0799999982118606,
			'crit_mod': 0.9,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 7.5,
			'hp5_lvl': 0.75,
			'hp_base': 550,
			'hp_lvl': 85,
			'ls': 0,
			'mp5_base': 0,
			'mp5_lvl': 0,
			'mp_base': 0,
			'mp_lvl': 0,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32,
			'mr_lvl': 1.25,
			'ms': 345,
			'ms_base': 345,
			'pathing_radius': 32,
			'range': 175,
			'selection_radius': 75,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 45,
		'title': 'the Unforgotten',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'Mixed,Physical',
		'alttype': 'Tank',
		'apiname': 'yorick',
		'attack': 6,
		'be': 4800,
		'changes': 'V10.15',
		'control': 2,
		'damage': 2,
		'date': '2011-06-22',
		'ddragon_apiname': 'Yorick',
		'defense': 6,
		'difficulty': 2,
		'fullname': 'Yorick Mori',
		'herotype': 'Fighter',
		'id': 83,
		'img': 'assets/images/champions/Yorick/Yorick.png',
		'index': 142,
		'magic': 4,
		'mobility': 1,
		'name': 'Yorick',
		'patch': 'v1.0.0.120',
		'rangetype': 'Melee',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Mourning Mist',
			'img': 'assets/images/champions/Yorick/Mourning Mist.png',
			'tooltip': "Yorick throws a globule of Black Mist that deals 15% of enemy's current Health as magic damage (minimum 70/105/140/175/210 (+0.7)), slows by 30% for 2 seconds, and marks champions and monsters for 4 seconds.<br><br>Yorick and his minions are hasted by 20% while moving toward the mark."
		},
		'skill_i':
		{
			'1': 'Shepherd of Souls',
			'img': 'assets/images/champions/Yorick/Shepherd of Souls.png',
			'tooltip': 'The Cursed Horde: Yorick can summon Mist Walkers to swarm and attack nearby enemies.'
		},
		'skill_q':
		{
			'1': 'Last Rites',
			'2': 'Awakening',
			'img': 'assets/images/champions/Yorick/Last Rites.png',
			'tooltip': "Yorick's next basic attack deals 30/55/80/105/130 (+1.4) physical damage and restores ? Health (doubled when below half Health). Last Rites will leave a grave if it kills the target.<br><br>When there are three or more graves nearby and Last Rites has been used, Yorick can cast Awakening to raise Mist Walkers from graves."
		},
		'skill_r':
		{
			'1': 'Eulogy of the Isles',
			'img': 'assets/images/champions/Yorick/Eulogy of the Isles.png',
			'tooltip': "Yorick summons The Maiden of the Mist and ? Mist Walkers. The Maiden has ? Health, deals ? magic damage, and raises Mist Walkers from nearby enemy deaths.<br><br>When Yorick damages the Maiden's target he will deal ?% of their max Health as bonus magic damage. (? sec cooldown)<br><br>Yorick can free the Maiden reactivating the ability, sending her down the nearest lane."
		},
		'skill_w':
		{
			'1': 'Dark Procession',
			'img': 'assets/images/champions/Yorick/Dark Procession.png',
			'tooltip': 'Yorick summons a destructible wall of spirits with 2/2/3/3/4 Health around target area for 4 seconds. Allies can walk through the wall freely.'
		},
		'stats':
		{
			'acquisition_radius': 400,
			'ad_base': 62,
			'ad_lvl': 5,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 0.95,
			'arm_base': 39,
			'arm_lvl': 4,
			'as_base': 0.625,
			'as_lvl': 2,
			'as_ratio': 0.625,
			'attack_cast_time': 0.330000013113021,
			'attack_total_time': 1.60000002384185,
			'critdmg': 0,
			'gameplay_radius': 80,
			'heal_shield': 0,
			'hp5_base': 8,
			'hp5_lvl': 0.8,
			'hp_base': 580,
			'hp_lvl': 100,
			'ls': 0,
			'mp5_base': 7.5,
			'mp5_lvl': 0.75,
			'mp_base': 300,
			'mp_lvl': 40,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32,
			'mr_lvl': 1.25,
			'ms': 340,
			'ms_base': 340,
			'pathing_radius': 50,
			'range': 175,
			'selection_radius': 125,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_taken': 0.95
		},
		'style': 55,
		'title': 'Shepherd of Souls',
		'toughness': 2,
		'utility': 2
	},
	{
		'adaptivetype': 'Magic',
		'alttype': 'Mage',
		'apiname': 'yuumi',
		'attack': 5,
		'be': 6300,
		'changes': 'V10.15',
		'control': 1,
		'damage': 1,
		'date': '2019-05-14',
		'ddragon_apiname': 'Yuumi',
		'defense': 1,
		'difficulty': 1,
		'herotype': 'Support',
		'id': 350,
		'img': 'assets/images/champions/Yuumi/Yuumi.png',
		'index': 143,
		'magic': 8,
		'mobility': 3,
		'name': 'Yuumi',
		'patch': 'V9.10',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 975,
		'skill_e':
		{
			'1': 'Zoomies',
			'img': 'assets/images/champions/Yuumi/Zoomies.png',
			'tooltip': 'Yuumi heals herself for ? and gains ?% movement speed and ?% Attack Speed for ? seconds. If Yuumi is Attached, this spell affects that ally instead.'
		},
		'skill_i':
		{
			'1': "Bop 'n' Block",
			'img': "assets/images/champions/Yuumi/Bop 'n' Block.png",
			'tooltip': "Periodically, when Yuumi attacks a champion, she restores mana and gains a shield that follows her, protecting her and the ally she's attached to."
		},
		'skill_q':
		{
			'1': 'Prowling Projectile',
			'img': 'assets/images/champions/Yuumi/Prowling Projectile.png',
			'tooltip': "Yuumi summons an errant missile that deals ? magic damage to the first enemy hit. <br><br>If the missile travels for ? second before impacting, it deals ? (+?% of the target's current health) magic damage instead and slows champions by ?% for ? second.<br><br>If cast while Attached, Yuumi can control the missile using her mouse."
		},
		'skill_r':
		{
			'1': 'Final Chapter',
			'img': 'assets/images/champions/Yuumi/Final Chapter.png',
			'tooltip': 'Yuumi channels for ? seconds, launching ? waves dealing ? magic damage (extra missiles deal ?% damage). Champions hit by ? or more waves are rooted for ? seconds.<br><br>Yuumi can move and cast You and Me! and Zoomies while channeling.<br>'
		},
		'skill_w':
		{
			'1': 'You and Me!',
			'img': 'assets/images/champions/Yuumi/You and Me!.png',
			'tooltip': "Passive: Yuumi increases her Attached ally's Adaptive Force by ? + ?%, and grants herself the same amount.<br><br>Active: Yuumi dashes to an ally champion and Attaches to them. While Yuumi is Attached, she follows her partner's movement and is untargetable except from towers.<br><br>You and Me! has a ? second cooldown, but Yuumi can cast it anytime she is already Attached to switch between friends or Unattach.<br><br>Immobilizing effects on Yuumi place You and Me! on a ? second cooldown."
		},
		'stats':
		{
			'acquisition_radius': 550,
			'ad_base': 55,
			'ad_lvl': 3.1,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 1.05,
			'arm_base': 25,
			'arm_lvl': 3,
			'as_base': 0.625,
			'as_lvl': 1,
			'as_ratio': 0.625,
			'attack_cast_time': 0.25,
			'attack_total_time': 1.60000002384185,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 7,
			'hp5_lvl': 0.55,
			'hp_base': 480,
			'hp_lvl': 70,
			'ls': 0,
			'mp5_base': 10,
			'mp5_lvl': 0.4,
			'mp_base': 400,
			'mp_lvl': 45,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 25,
			'mr_lvl': 0.3,
			'ms': 330,
			'ms_base': 330,
			'ofa_dmg_dealt': 1.15,
			'ofa_dmg_taken': 0.8,
			'pathing_radius': 35,
			'range': 500,
			'selection_radius': 120,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 0.8,
			'urf_healing': 0.7
		},
		'style': 100,
		'title': 'the Magical Cat',
		'toughness': 1,
		'utility': 3
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Fighter',
		'apiname': 'zac',
		'attack': 3,
		'be': 4800,
		'changes': 'V9.19',
		'control': 3,
		'damage': 2,
		'date': '2013-03-29',
		'ddragon_apiname': 'Zac',
		'defense': 7,
		'difficulty': 1,
		'herotype': 'Tank',
		'id': 154,
		'img': 'assets/images/champions/Zac/Zac.png',
		'index': 144,
		'magic': 7,
		'mobility': 2,
		'name': 'Zac',
		'nickname': 'Zaun Amorphous Combatant, Z.A.C.',
		'patch': 'V3.5',
		'rangetype': 'Melee',
		'resource': 'Health',
		'rp': 880,
		'skill_e':
		{
			'1': 'Elastic Slingshot',
			'img': 'assets/images/champions/Zac/Elastic Slingshot.png',
			'tooltip': "First cast: Zac faces the cursor and charges up over 0.9/1/1.1/1.2/1.3 seconds.<br><br>Second cast: Launches Zac towards a location, knocking up nearby enemies for ? to ? seconds (based on charge time) and dealing 60/110/160/210/260 (+0.9) magic damage. Zac spawns extra chunks of Goo for each enemy champion hit.<br><br>Can be cancelled by moving, refunding half of the ability's cooldown and cost."
		},
		'skill_i':
		{
			'1': 'Cell Division',
			'2': 'Cell Division 2',
			'img': 'assets/images/champions/Zac/Cell Division.png',
			'tooltip': "Each time Zac hits an enemy with an ability, he sheds a chunk of himself that can be reabsorbed to restore Health. Upon taking fatal damage, Zac splits into 4 bloblets that attempt to recombine. If any bloblets remain, he will revive with an amount of Health depending on the Health of the surviving bloblets. Each bloblet has a percentage of Zac's maximum Health, Armor and Magic Resistance. This ability has a 5 minute cooldown."
		},
		'skill_q':
		{
			'1': 'Stretching Strikes',
			'img': 'assets/images/champions/Zac/Stretching Strikes.png',
			'tooltip': "Zac's arm stretches and grabs the first enemy it hits, dealing 40/55/70/85/100 (+0.3) (+?) magic damage and briefly slowing them. Zac's next basic attack is replaced with a long range smack that repeats the initial magic damage and slow effect.<br><br>If Zac grabs a different enemy with each attack he'll throw them towards each other, dealing 40/55/70/85/100 (+0.3) (+?) magic damage in an area if they collide."
		},
		'skill_r':
		{
			'1': "Let's Bounce!",
			'img': "assets/images/champions/Zac/Let's Bounce!.png",
			'tooltip': "Passive: Healing from Cell Division Goo chunks increased to ?% of your maximum health.<br><br>Active: Zac bounces ? times, knocking back enemies for ? second and dealing ? magic damage. Enemies hit with multiple bounces take ?% less damage and are not knocked up. <br><br>Enemies hit by Let's Bounce! are slowed by ?% for ? second.<br><br>Zac gains movement speed over the duration and can cast Unstable Matter while bouncing."
		},
		'skill_w':
		{
			'1': 'Unstable Matter',
			'img': 'assets/images/champions/Zac/Unstable Matter.png',
			'tooltip': "Zac's body erupts, dealing ? + (?+?) of the enemy's max health as magic damage to nearby enemies.<br><br>Absorbing Goo reduces Unstable Matter's cooldown by 1 second.<br><br>Max health damage is capped at 200 versus minions and monsters"
		},
		'stats':
		{
			'acquisition_radius': 400,
			'ad_base': 60,
			'ad_lvl': 3.4,
			'apen': 0,
			'apen%': 0,
			'arm_base': 33,
			'arm_lvl': 3.5,
			'as_base': 0.736,
			'as_lvl': 1.6,
			'as_ratio': 0.638000011444091,
			'attack_cast_time': 0.363000005483627,
			'attack_total_time': 1.567999958992,
			'critdmg': 0,
			'gameplay_radius': 80,
			'heal_shield': 0,
			'hp5_base': 8,
			'hp5_lvl': 0.5,
			'hp_base': 615,
			'hp_lvl': 95,
			'ls': 0,
			'mp5_base': 0,
			'mp5_lvl': 0,
			'mp_base': 0,
			'mp_lvl': 0,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32,
			'mr_lvl': 1.25,
			'ms': 340,
			'ms_base': 340,
			'pathing_radius': 43.0749015808105,
			'range': 175,
			'selection_radius': 90,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 100,
		'title': 'the Secret Weapon',
		'toughness': 3,
		'utility': 1
	},
	{
		'adaptivetype': 'physical',
		'apiname': 'zed',
		'attack': 9,
		'be': 4800,
		'changes': 'V10.14',
		'control': 1,
		'damage': 3,
		'date': '2012-11-13',
		'ddragon_apiname': 'Zed',
		'defense': 2,
		'difficulty': 3,
		'herotype': 'Assassin',
		'id': 238,
		'img': 'assets/images/champions/Zed/Zed.png',
		'index': 145,
		'magic': 1,
		'mobility': 3,
		'name': 'Zed',
		'patch': 'V1.0.0.151',
		'rangetype': 'Melee',
		'resource': 'Energy',
		'rp': 880,
		'skill_e':
		{
			'1': 'Shadow Slash',
			'img': 'assets/images/champions/Zed/Shadow Slash.png',
			'tooltip': "Zed and his shadows slash, dealing ? physical damage to nearby enemies.<br><br>Each enemy champion hit by Zed's slash reduces Living Shadow's cooldown by ? seconds.<br><br>Enemies hit by a Shadow's slash are slowed by ?% for ? seconds. Enemies hit by multiple slashes take no additional damage but are slowed by ?% instead."
		},
		'skill_i':
		{
			'1': 'Contempt for the Weak',
			'img': 'assets/images/champions/Zed/Contempt for the Weak.png',
			'tooltip': "Zed's basic attacks against low health targets deals bonus Magic Damage. This effect can only occur once every few seconds on the same target."
		},
		'skill_q':
		{
			'1': 'Razor Shuriken',
			'img': 'assets/images/champions/Zed/Razor Shuriken.png',
			'tooltip': 'Zed and his shadows throw their shurikens, each dealing ? physical damage to the first enemy they pass through, and ? physical damage to each additional enemy.'
		},
		'skill_r':
		{
			'1': 'Death Mark',
			'2': 'Death Mark 2',
			'img': 'assets/images/champions/Zed/Death Mark.png',
			'tooltip': 'Zed becomes untargetable and dashes to an enemy champion, marking them. After ? seconds, the mark triggers, dealing physical damage equal to ? + ?% of all damage dealt to the target by Zed while the mark was active.<br><br>The dash leaves a shadow behind for ? seconds. Reactivating Death Mark causes Zed to switch positions with this shadow.'
		},
		'skill_w':
		{
			'1': 'Living Shadow',
			'2': 'Living Shadow 2',
			'img': 'assets/images/champions/Zed/Living Shadow.png',
			'tooltip': "Passive: Zed gains 30/35/40/45/50 energy whenever he and his shadows strike an enemy with the same ability. Energy can only be gained once per cast ability.<br><br>Active: Zed's shadow dashes forward, remaining in place for 5 seconds. Reactivating Living Shadow will cause Zed to switch positions with this shadow."
		},
		'stats':
		{
			'acquisition_radius': 400,
			'ad_base': 63,
			'ad_lvl': 3.4,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 1.05,
			'aram_dmg_taken': 0.95,
			'arm_base': 32,
			'arm_lvl': 3.5,
			'as_base': 0.651,
			'as_lvl': 3.3,
			'as_ratio': 0.651000022888183,
			'attack_delay_offset': -0.102405503392219,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 7,
			'hp5_lvl': 0.65,
			'hp_base': 584,
			'hp_lvl': 85,
			'ls': 0,
			'mp5_base': 50,
			'mp5_lvl': 0,
			'mp_base': 200,
			'mp_lvl': 0,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 32.1,
			'mr_lvl': 1.25,
			'ms': 345,
			'ms_base': 345,
			'pathing_radius': 35,
			'range': 125,
			'selection_radius': 100,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 0.9
		},
		'style': 55,
		'title': 'the Master of Shadows',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'apiname': 'ziggs',
		'attack': 2,
		'be': 4800,
		'changes': 'V10.2',
		'control': 2,
		'damage': 3,
		'date': '2012-02-01',
		'ddragon_apiname': 'Ziggs',
		'defense': 4,
		'difficulty': 2,
		'herotype': 'Mage',
		'id': 115,
		'img': 'assets/images/champions/Ziggs/Ziggs.png',
		'index': 146,
		'magic': 9,
		'mobility': 2,
		'name': 'Ziggs',
		'patch': 'V1.0.0.133',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Hexplosive Minefield',
			'img': 'assets/images/champions/Ziggs/Hexplosive Minefield.png',
			'tooltip': 'Ziggs scatters proximity mines that detonate on enemy contact, dealing 40/75/110/145/180 (+0.3) magic damage. Enemies hit are slowed by 30/35/40/45/50% for 1.5 seconds.<br><br>Enemies triggering a mine take 40% damage from additional mines. Mines disarm automatically after 10 seconds.'
		},
		'skill_i':
		{
			'1': 'Short Fuse',
			'img': 'assets/images/champions/Ziggs/Short Fuse.png',
			'tooltip': "Periodically, Ziggs' next basic attack deals bonus magic damage. This cooldown is reduced whenever Ziggs uses an ability."
		},
		'skill_q':
		{
			'1': 'Bouncing Bomb',
			'img': 'assets/images/champions/Ziggs/Bouncing Bomb.png',
			'tooltip': 'Ziggs throws a bouncing bomb that deals 85/130/175/220/265 (+0.65) magic damage.'
		},
		'skill_r':
		{
			'1': 'Mega Inferno Bomb',
			'img': 'assets/images/champions/Ziggs/Mega Inferno Bomb.png',
			'tooltip': 'Ziggs deploys his ultimate creation, the Mega Inferno Bomb, hurling it an enormous distance. Enemies in the primary blast zone take 300/450/600 (+1.1) magic damage. Enemies farther away take 200/300/400 (+0.7333) magic damage.'
		},
		'skill_w':
		{
			'1': 'Satchel Charge',
			'img': 'assets/images/champions/Ziggs/Satchel Charge.png',
			'tooltip': 'Ziggs flings an explosive charge that detonates after 4 seconds, or when this ability is activated again. The explosion deals 70/105/140/175/210 (+0.5) magic damage to enemies, knocking them away. Ziggs is also knocked away, but takes no damage.<br><br>Satchel Charge will hexplode structurally unsound towers below ?% of their Health.'
		},
		'stats':
		{
			'acquisition_radius': 800,
			'ad_base': 54.208,
			'ad_lvl': 3.1,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 0.85,
			'aram_dmg_taken': 1.15,
			'arm_base': 21.544,
			'arm_lvl': 3.3,
			'as_base': 0.656,
			'as_lvl': 2,
			'as_ratio': 0.656000018119812,
			'attack_delay_offset': -0.0916666686534881,
			'critdmg': 0,
			'gameplay_radius': 55,
			'heal_shield': 0,
			'hp5_base': 6.5,
			'hp5_lvl': 0.6,
			'hp_base': 536,
			'hp_lvl': 92,
			'ls': 0,
			'mp5_base': 8,
			'mp5_lvl': 0.8,
			'mp_base': 480,
			'mp_lvl': 23.5,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 325,
			'ms_base': 325,
			'pathing_radius': 30,
			'range': 550,
			'selection_radius': 100,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 90,
		'title': 'the Hexplosives Expert',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Mage',
		'apiname': 'zilean',
		'attack': 2,
		'be': 1350,
		'changes': 'V10.14',
		'control': 2,
		'damage': 2,
		'date': '2009-04-18',
		'ddragon_apiname': 'Zilean',
		'defense': 5,
		'difficulty': 2,
		'herotype': 'Support',
		'id': 26,
		'img': 'assets/images/champions/Zilean/Zilean.png',
		'index': 147,
		'magic': 8,
		'mobility': 2,
		'name': 'Zilean',
		'patch': 'April 18, 2009 Patch',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 585,
		'skill_e':
		{
			'1': 'Time Warp',
			'img': 'assets/images/champions/Zilean/Time Warp.png',
			'tooltip': "Zilean increases an allied champion's Movement Speed, or slows an enemy champion, by 40/55/70/85/99% for 2.5 seconds."
		},
		'skill_i':
		{
			'1': 'Time in a Bottle',
			'img': 'assets/images/champions/Zilean/Time in a Bottle.png',
			'tooltip': "Zilean stores time as Experience. <br><br>When he has enough Experience to finish an ally's level, he can right-click them to impart it. Zilean receives as much Experience as he gives. Cannot be used in combat."
		},
		'skill_q':
		{
			'1': 'Time Bomb',
			'img': 'assets/images/champions/Zilean/Time Bomb.png',
			'tooltip': 'Zilean tosses a time-delayed bomb to a location. The bomb sticks to the first unit which comes within a small area around it (prioritizes Champions). After 3 seconds it detonates, dealing 75/115/165/230/300 (+0.9) magic damage to all surrounding enemies. <br><br>Placing two bombs on a unit detonates the first bomb early, stunning all enemies in the blast for 1.1/1.2/1.3/1.4/1.5 seconds.'
		},
		'skill_r':
		{
			'1': 'Chronoshift',
			'img': 'assets/images/champions/Zilean/Chronoshift.png',
			'tooltip': 'Zilean marks himself or an allied champion with a protective time rune for ? seconds. If the target would take lethal damage, they are instead transported back in time, arriving with ? Health.'
		},
		'skill_w':
		{
			'1': 'Rewind',
			'img': 'assets/images/champions/Zilean/Rewind.png',
			'tooltip': "Reduces Zilean's other basic spell cooldowns by 10 seconds."
		},
		'stats':
		{
			'acquisition_radius': 550,
			'ad_base': 51.64,
			'ad_lvl': 3,
			'apen': 0,
			'apen%': 0,
			'arm_base': 24,
			'arm_lvl': 3.8,
			'as_base': 0.625,
			'as_lvl': 2.13,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.11999999731779,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 5.5,
			'hp5_lvl': 0.5,
			'hp_base': 504,
			'hp_lvl': 82,
			'ls': 0,
			'mp5_base': 11.335,
			'mp5_lvl': 0.8,
			'mp_base': 452,
			'mp_lvl': 30,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 335,
			'ms_base': 335,
			'pathing_radius': 35,
			'range': 550,
			'selection_radius': 135,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.2,
			'urf_dmg_taken': 0.95
		},
		'style': 100,
		'title': 'the Chronokeeper',
		'toughness': 1,
		'utility': 3
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Support',
		'apiname': 'zoe',
		'attack': 1,
		'be': 6300,
		'changes': 'V10.14',
		'control': 2,
		'damage': 3,
		'date': '2017-11-21',
		'ddragon_apiname': 'Zoe',
		'defense': 7,
		'difficulty': 3,
		'herotype': 'Mage',
		'id': 142,
		'img': 'assets/images/champions/Zoe/Zoe.png',
		'index': 148,
		'magic': 8,
		'mobility': 2,
		'name': 'Zoe',
		'patch': 'V7.23',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 975,
		'skill_e':
		{
			'1': 'Sleepy Trouble Bubble',
			'img': 'assets/images/champions/Zoe/Sleepy Trouble Bubble.png',
			'tooltip': "Dropkick a bubble that deals 60/100/140/180/220 (+0.4) magic damage, lingering as a trap if it hits nothing. The bubble's range is extended when flying over a wall.<br><br>After a delay, the victim falls asleep for 2 seconds. Attacks and spell hits break sleep but deal double damage, up to 60/100/140/180/220 (+0.4) bonus true damage."
		},
		'skill_i':
		{
			'1': 'More Sparkles!',
			'img': 'assets/images/champions/Zoe/More Sparkles!.png',
			'tooltip': "Zoe's next basic attack after casting a spell deals bonus magic damage."
		},
		'skill_q':
		{
			'1': 'Paddle Star',
			'2': 'Paddle Star 2',
			'img': 'assets/images/champions/Zoe/Paddle Star.png',
			'tooltip': "Fire a missile that deals increasing damage the further it travels -- ? (+0.6) to ? (+1.5) magic damage. Enemies near the first target hit take 80% damage.<br><br><br>Recast to redirect the missile to a new position near Zoe.<br><br>Paddle Star! deals damage based on a combination of Paddle Star's rank and Zoe's level. "
		},
		'skill_r':
		{
			'1': 'Portal Jump',
			'img': 'assets/images/champions/Zoe/Portal Jump.png',
			'tooltip': 'Blink to a nearby position for 1 second. Then blink back.<br><br>Zoe may cast and attack, but not move, during this time. She can also see over walls.'
		},
		'skill_w':
		{
			'1': 'Spell Thief',
			'img': 'assets/images/champions/Zoe/Spell Thief.png',
			'tooltip': 'Enemy Summoner Spell and Active Item casts drop spell shards lasting 40 seconds. Some minions also drop a spell shard when Zoe kills them.<br><br>Active: Collecting a spell shard grants one cast of that spell.<br>                 ____________________________________________ <br><br>Passive: When Zoe casts a Summoner Spell or Spell Thief, she gains 30/40/50/60/70% movement speed for ? seconds and tosses up to 3 missiles at her attack target, dealing 75/105/135/165/195 (+0.4) magic damage total. Each missile can apply More Sparkles!<br><br>Movement speed bonus and missile damage improve with spell rank.'
		},
		'stats':
		{
			'acquisition_radius': 550,
			'ad_base': 58,
			'ad_lvl': 3.3,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 1.05,
			'arm_base': 20.8,
			'arm_lvl': 3.5,
			'as_base': 0.625,
			'as_lvl': 2.5,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.138541668653488,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 6.5,
			'hp5_lvl': 0.6,
			'hp_base': 560,
			'hp_lvl': 92,
			'ls': 0,
			'mp5_base': 8,
			'mp5_lvl': 0.65,
			'mp_base': 425,
			'mp_lvl': 25,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 340,
			'ms_base': 340,
			'nb_dmg_dealt': 1.05,
			'nb_dmg_taken': 0.95,
			'ofa_dmg_dealt': 1.05,
			'ofa_dmg_taken': 0.95,
			'pathing_radius': 35,
			'range': 550,
			'selection_radius': 120,
			'spell_vamp': 0,
			'tenacity': 0,
			'urf_dmg_dealt': 1.1
		},
		'style': 100,
		'title': 'the Aspect of Twilight',
		'toughness': 1,
		'utility': 1
	},
	{
		'adaptivetype': 'magic',
		'alttype': 'Support',
		'apiname': 'zyra',
		'attack': 4,
		'be': 4800,
		'changes': 'V10.14',
		'control': 3,
		'damage': 3,
		'date': '2012-07-24',
		'ddragon_apiname': 'Zyra',
		'defense': 3,
		'difficulty': 2,
		'herotype': 'Mage',
		'id': 143,
		'img': 'assets/images/champions/Zyra/Zyra.png',
		'index': 149,
		'magic': 8,
		'mobility': 1,
		'name': 'Zyra',
		'patch': 'V1.0.0.143',
		'rangetype': 'Ranged',
		'resource': 'Mana',
		'rp': 880,
		'skill_e':
		{
			'1': 'Grasping Roots',
			'img': 'assets/images/champions/Zyra/Grasping Roots.png',
			'tooltip': 'Sends forward vines dealing 60/105/150/195/240 (+0.5) magic damage and rooting enemies for 1/1.25/1.5/1.75/2 second(s).<br><br>Garden of Thorns: If Grasping Roots passes near a seed, a Vine Lasher grows dealing ? (+0.15) magic damage and slowing enemies by 25% for 2 seconds. Slows from multiple Vine Lashers stack up to ? times. A Vine Lasher has 400 range and lasts ? seconds.'
		},
		'skill_i':
		{
			'1': 'Garden of Thorns',
			'img': 'assets/images/champions/Zyra/Garden of Thorns.png',
			'tooltip': 'Seeds spawn around Zyra periodically, becoming faster with level. Zyra can cast Deadly Spines or Grasping Roots near seeds to grow plants, who fight for Zyra.'
		},
		'skill_q':
		{
			'1': 'Deadly Spines',
			'img': 'assets/images/champions/Zyra/Deadly Spines.png',
			'tooltip': 'Thick vines spread through the ground and explode into spines, dealing 60/95/130/165/200 (+0.6) magic damage to enemies within the area. <br><br>Garden of Thorns: If Deadly Spines is cast near a seed, a Thorn Spitter grows, dealing ? (+0.15) magic damage. A Thorn Spitter has 575 range and lasts ? seconds.'
		},
		'skill_r':
		{
			'1': 'Stranglethorns',
			'img': 'assets/images/champions/Zyra/Stranglethorns.png',
			'tooltip': 'Summons the fury of nature, growing a twisted thicket at target location which deals 180/265/350 (+0.7) magic damage to all enemies in the area as it expands. After 2 seconds, the vines snap upward knocking enemies into the air for 1 second.<br><br>Garden of Thorns: Plants within the thicket are enraged, resetting their duration, gaining 50% Health and attacking in a flurry for 150% total damage.'
		},
		'skill_w':
		{
			'1': 'Rampant Growth',
			'img': 'assets/images/champions/Zyra/Rampant Growth.png',
			'tooltip': "Plants a seed, lasting 60 seconds. If an enemy Champion steps on a seed, it dies. Seeds spawned by Rampant Growth grant vision in a small area, and if stepped on they grant True Sight of the enemy champion for 2 seconds.<br><br>Zyra stores a seed every ? seconds (Max: 8 seeds planted). Each time she kills an enemy, Rampant Growth's recharge time is reduced by 20% (100% for champion takedowns, large minion kills, and large monster kills)."
		},
		'stats':
		{
			'acquisition_radius': 575,
			'ad_base': 53.376,
			'ad_lvl': 3.2,
			'apen': 0,
			'apen%': 0,
			'aram_dmg_dealt': 0.94,
			'aram_dmg_taken': 1.06,
			'arm_base': 29,
			'arm_lvl': 3,
			'as_base': 0.625,
			'as_lvl': 2.11,
			'as_ratio': 0.625,
			'attack_delay_offset': -0.154166668653488,
			'critdmg': 0,
			'heal_shield': 0,
			'hp5_base': 5.5,
			'hp5_lvl': 0.5,
			'hp_base': 504,
			'hp_lvl': 79,
			'ls': 0,
			'mp5_base': 13,
			'mp5_lvl': 0.4,
			'mp_base': 418,
			'mp_lvl': 25,
			'mpen': 0,
			'mpen%': 0,
			'mr_base': 30,
			'mr_lvl': 0.5,
			'ms': 340,
			'ms_base': 340,
			'pathing_radius': 35,
			'range': 575,
			'selection_radius': 120,
			'spell_vamp': 0,
			'tenacity': 0
		},
		'style': 100,
		'title': 'Rise of the Thorns',
		'toughness': 1,
		'utility': 1
	}]