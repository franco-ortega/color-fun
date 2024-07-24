'use client';

import styles from './Button.module.css';

export default function Button({ handler, text = 'CLICK' }) {
	const testClick = handler ? handler : () => console.log('clicked');

	return (
		<button className={styles.Button} onClick={testClick}>
			{text}
		</button>
	);
}
