'use client';

import styles from './Button.module.css';

export default function Button({ handler, text }) {
	const buttonColors = {
		'--backgroundGradient': 'linear-gradient(90deg, var(--base), var(--brand))',
		'--boxShadowHover': 'var(--red-00)',
	};

	const testClick = handler ? handler : () => console.log('clicked');

	return (
		<button className={styles.Button} style={buttonColors} onClick={testClick}>
			{text}
		</button>
	);
}
