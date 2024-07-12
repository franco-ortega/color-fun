export default function createSubtitle(path) {
	return path
		.substring(1)
		.replace('-', ' ')
		.replace('/', ' > ')
		.split('')
		.map((character, i, list) =>
			list[i - 1] === undefined || list[i - 1] === ' '
				? character.toUpperCase()
				: character
		)
		.join('');
}
