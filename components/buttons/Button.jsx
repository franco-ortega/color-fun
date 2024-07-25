import styles from './Button.module.css';

export default function Button({
	handler,
	text,
	deg,
	backgroundColors,
	hoverColor,
}) {
	const background =
		backgroundColors.length > 1
			? `linear-gradient(${deg}deg, ${backgroundColors.join(', ')})`
			: backgroundColors[0];

	const buttonColors = {
		'--background': background,
		'--boxShadowHover': hoverColor,
	};

	if (!text) throw Error('Missing text prop');
	if (!handler) throw Error('Missing handler prop');

	return (
		<button className={styles.Button} style={buttonColors} onClick={handler}>
			{text}
		</button>
	);
}
