import styles from './Button.module.css';

export default function Button({ buttonStyles, handler, text }) {
	if (!text) throw Error('Button component missing text prop');
	if (!handler) throw Error('Button component missing handler prop');

	return (
		<button className={styles.Button} style={buttonStyles} onClick={handler}>
			{text}
		</button>
	);
}
