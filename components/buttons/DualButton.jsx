import { useState } from 'react';
import Button from './Button';
import styles from './DualButton.module.css';

export default function DualButton({
	handler1,
	handler2,
	hsl1,
	hsl2,
	fade,
	text1,
	text2,
	toggleOn,
}) {
	return (
		<div className={styles.DualButton}>
			<Button
				buttonStyles={{
					fontWeight: toggleOn ? '700' : '500',
					'--background': `hsl(${hsl1} / ${toggleOn ? 1 : fade})`,
					'--box-shadow': 'none',
				}}
				handler={handler1}
				text={text1}
			/>
			<Button
				buttonStyles={{
					fontWeight: !toggleOn ? '700' : '500',
					'--background': `hsl(${hsl2} / ${!toggleOn ? 1 : fade})`,
					'--box-shadow': 'none',
				}}
				handler={handler2}
				text={text2}
			/>
		</div>
	);
}
