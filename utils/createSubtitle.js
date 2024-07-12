export default function createSubtitle(path) {
	return path
		.substring(1)
		.split('')
		.map((character, i, list) =>
			character === '-'
				? ' '
				: character === '/'
				? ' > '
				: list[i - 1] === undefined ||
				  list[i - 1] === '-' ||
				  list[i - 1] === '/'
				? character.toUpperCase()
				: character
		)
		.join('');
}
