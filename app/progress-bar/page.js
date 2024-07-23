'use client';

import useValue from '@/hooks/useValue';
import ProgressAdjuster from '@/components/progressAdjuster/ProgressAdjuster';
import ProgressBar from '@/components/progressBar/ProgressBar';
import styles from './page.module.css';

export default function ProgressBarPage() {
	const { onValueChange, onValueDecrease, onValueIncrease, value } = useValue();
	const sizes = [
		{ id: 1, size: 'small' },
		{ id: 2, size: 'medium' },
		{ id: 3, size: 'large' },
	];

	return (
		<main className={styles.main}>
			<h2>Progress Bar</h2>

			<ProgressAdjuster size={'small'} value={value} />
			<ProgressAdjuster size={'medium'} value={value} />
			<ProgressAdjuster size={'large'} value={value} />

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
		</main>
	);
}
