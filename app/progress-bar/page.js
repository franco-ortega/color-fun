'use client';

import { useState } from 'react';
import useValue from '@/hooks/useValue';
import DualButton from '@/components/buttons/DualButton';
import ProgressAdjuster from '@/components/progressAdjuster/ProgressAdjuster';
import ProgressBar from '@/components/progressBar/ProgressBar';
import styles from './page.module.css';

export default function ProgressBarPage() {
	const [displayMultiple, setDisplayMultiple] = useState(true);
	const { onValueChange, onValueDecrease, onValueIncrease, value } = useValue();
	const sizes = [
		{ id: 1, size: 'small' },
		{ id: 2, size: 'medium' },
		{ id: 3, size: 'large' },
	];

	function onToggle() {
		setDisplayMultiple((prev) => !prev);
	}

	function onMultiple() {
		setDisplayMultiple(true);
	}

	function onSingle() {
		setDisplayMultiple(false);
	}

	return (
		<main className={styles.main}>
			<h2>Progress Bar</h2>
			<DualButton
				handler1={onMultiple}
				handler2={onSingle}
				hsl1={'0 90% 60%'}
				hsl2={'0 90% 60%'}
				fade={0.75}
				text1={'Multiple'}
				text2={'Single'}
				toggleOn={displayMultiple}
			/>

			{displayMultiple ? (
				<>
					<ProgressAdjuster size={'small'} value={value} />
					<ProgressAdjuster size={'medium'} value={value} />
					<ProgressAdjuster size={'large'} value={value} />
				</>
			) : (
				<div className={styles.wrapper}>
					<h3>Progress Bar</h3>
					{sizes.map(({ id, size }) => (
						<div key={id}>
							<p>{`${value}% complete`}</p>
							<ProgressBar size={size} value={value} />
						</div>
					))}
					<div className={styles.adjust}>
						<p>ADJUST PROGRESS</p>
						<div>
							<button onClick={onValueDecrease}>⬇︎</button>

							<label htmlFor='progress-bar'>
								<input
									id='progress-bar'
									onChange={onValueChange}
									type='number'
									value={value}
									max={100}
									min={0}
								/>
							</label>
							<button onClick={onValueIncrease}>⬆︎</button>
						</div>
					</div>
				</div>
			)}
		</main>
	);
}
