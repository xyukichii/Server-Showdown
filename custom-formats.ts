export const Formats: FormatList = [





	{
		section: "BudewInn Custom Formate",
	},
	
	{
		name: '[Gen 8] Metronome Battle',
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3632075/">Metronome Battle</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: [
			'HP Percentage Mod', 'Obtainableperfinta', 'Team Preview', "Dynamax Clause", "NoLeggendari!", "NoMisteriosi!" ,'Adjust Level = 50', 'Picked Team Size = 4'
		],
		unbanlist: ["Leppa Berry",
		],
		banlist: [
			'Pokestar Spirit', 'Shedinja + Sturdy', 'Battle Bond', 'Cheek Pouch', 'Cursed Body', 'Dry Skin', 'Fluffy', 'Fur Coat', 'Gorilla Tactics',
			'Grassy Surge', 'Huge Power', 'Ice Body', 'Iron Barbs', 'Libero', 'Moody', 'Neutralizing Gas', 'Parental Bond', 'Perish Body', 'Poison Heal',
			'Power Construct', 'Pressure', 'Protean', 'Pure Power', 'Rain Dish', 'Rough Skin', 'Sand Spit', 'Sand Stream', 'Snow Warning', 'Stamina',
			'Volt Absorb', 'Water Absorb', 'Wonder Guard', 'Abomasite', 'Aguav Berry', 'Assault Vest', 'Berry', 'Berry Juice', 'Berserk Gene',
			'Black Sludge', 'Enigma Berry', 'Figy Berry', 'Gold Berry', 'Iapapa Berry', 'Kangaskhanite', 'Leftovers', 'Mago Berry', 'Medichamite',
			'Steel Memory', 'Oran Berry', 'Rocky Helmet', 'Shell Bell', 'Sitrus Berry', 'Wiki Berry', 'Harvest + Jaboca Berry', 'Harvest + Rowap Berry', "all items", "no item",
		],
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			if (species.types.includes('Steel')) {
				return [`${species.name} is a Steel-type, which is banned from Metronome Battle.`];
			}
			if (species.bst > 625) {
				return [`${species.name} is banned.`, `(Pok\u00e9mon with a BST higher than 625 are banned)`];
			}
			const item = this.dex.items.get(set.item);
			if (set.item && item.megaStone) {
				const megaSpecies = this.dex.species.get(item.megaStone);
				if (species.baseSpecies === item.megaEvolves && megaSpecies.bst > 625) {
					return [
						`${set.name || set.species}'s item ${item.name} is banned.`, `(Pok\u00e9mon with a BST higher than 625 are banned)`,
					];
				}
			}
			if (set.moves.length !== 1 || this.dex.moves.get(set.moves[0]).id !== 'metronome') {
				return [`${set.name || set.species} has illegal moves.`, `(Pok\u00e9mon can only have one Metronome in their moveset)`];
			}
		},
	},
	