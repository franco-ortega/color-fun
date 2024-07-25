import styles from './Button.module.css';

export default function Button({ buttonStyles, handler, text }) {
	if (!buttonStyles || !handler || !text)
		throw Error(
			`Button component missing prop(s): ${!buttonStyles && 'buttonStyles'} ${
				!handler ? 'handler' : ''
			} ${!text ? 'text' : ''}`
		);

	return (
		<button className={styles.Button} style={buttonStyles} onClick={handler}>
			{text}
		</button>
	);
}
