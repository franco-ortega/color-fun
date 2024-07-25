import { useState } from 'react';
import Button from './Button';
import styles from './DualButton.module.css';

export default function DualButton({ hsl1, hsl2, fade }) {
	const [toggleLeft, setToggleLeft] = useState(true);

	function onToggleLeft() {
		setToggleLeft(true);
	}

	function onToggleRight() {
		setToggleLeft(false);
	}

	return (
		<div className={styles.DualButton}>
			<Button
				buttonStyles={{
					fontWeight: toggleLeft ? '600' : '500',
					'--background': `hsl(${hsl1} / ${toggleLeft ? 1 : fade})`,
					'--box-shadow': 'none',
				}}
				handler={onToggleLeft}
				text={'LEFT'}
			/>
			<Button
				buttonStyles={{
					fontWeight: !toggleLeft ? '600' : '500',
					'--background': `hsl(${hsl2} / ${!toggleLeft ? 1 : fade})`,
					'--box-shadow': 'none',
				}}
				handler={onToggleRight}
				text={'RIGHT'}
			/>
		</div>
	);
}
