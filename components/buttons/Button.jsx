import styles from './Button.module.css';

export default function Button({
	handler,
	text,
	deg,
	color1,
	color2,
	hoverColor,
}) {
	const buttonColors = {
		'--backgroundGradient': `linear-gradient(${deg}deg, ${color1}, ${color2})`,
		'--boxShadowHover': hoverColor,
	};

	if (!text) throw Error('Missing text prop');
	if (!handler) throw Error('Missing handler');

	return (
		<button className={styles.Button} style={buttonColors} onClick={handler}>
			{text}
		</button>
	);
}
