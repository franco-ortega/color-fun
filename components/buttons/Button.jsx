import styles from './Button.module.css';

export default function Button({ handler, text }) {
	const buttonColors = {
		'--backgroundGradient': 'linear-gradient(90deg, var(--base), var(--brand))',
		'--boxShadowHover': 'var(--red-00)',
	};

	if (!text) throw Error('Missing text prop');
	if (!handler) throw Error('Missing handler');

	return (
		<button className={styles.Button} style={buttonColors} onClick={handler}>
			{text}
		</button>
	);
}
