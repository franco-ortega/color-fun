import { useState } from 'react';
import Button from './Button';
import styles from './DualButton.module.css';

export default function DualButton() {
	const [toggleLeft, setToggleLeft] = useState(true);
	const faded = 0.75;

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
					fontWeight: toggleLeft ? '700' : '500',
					'--opacity': toggleLeft ? 1 : faded,
					'--box-shadow': 'none',
				}}
				handler={onToggleLeft}
				text={'LEFT'}
			/>
			<Button
				buttonStyles={{
					fontWeight: !toggleLeft ? '700' : '500',
					'--opacity': !toggleLeft ? 1 : faded,
					'--box-shadow': 'none',
				}}
				handler={onToggleRight}
				text={'RIGHT'}
			/>
		</div>
	);
}
