import styles from './Button.module.css';

// Button custom props:
//  --clr-shadow: COLOR
//  --box-shadow: BOX-SHADOW
//  --box-shadow-hov: BOX-SHADOW on HOVER

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
