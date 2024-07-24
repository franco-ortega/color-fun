'use client';

import useValue from '@/hooks/useValue';
import ProgressAdjuster from '@/components/progressAdjuster/ProgressAdjuster';
import ProgressBar from '@/components/progressBar/ProgressBar';
import styles from './page.module.css';
import { useState } from 'react';

export default function ProgressBarPage() {
	const [displayMultipleBars, setDisplayMultipleBars] = useState(true);
	const { onValueChange, onValueDecrease, onValueIncrease, value } = useValue();
	const sizes = [
		{ id: 1, size: 'small' },
		{ id: 2, size: 'medium' },
		{ id: 3, size: 'large' },
	];

	const faded = 0.75;

	function onToggle() {
		setDisplayMultipleBars((prev) => !prev);
	}

	function onMultiple() {
		setDisplayMultipleBars(true);
	}

	function onSingle() {
		setDisplayMultipleBars(false);
	}

	return (
		<main className={styles.main}>
			<h2>Progress Bar</h2>
			<div>
				<button
					onClick={onMultiple}
					style={{
						'--opacity': displayMultipleBars ? 1 : faded,
					}}
				>
					Multiple
				</button>
				<button
					onClick={onSingle}
					style={{
						'--opacity': !displayMultipleBars ? 1 : faded,
					}}
				>
					Single
				</button>
			</div>

			{displayMultipleBars ? (
				<>
					<ProgressAdjuster size={'small'} value={value} />
					<ProgressAdjuster size={'medium'} value={value} />
					<ProgressAdjuster size={'large'} value={value} />
				</>
			) : (
				<div className={styles.wrapper}>
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
