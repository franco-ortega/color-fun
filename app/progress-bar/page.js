'use client';

import useValue from '@/hooks/useValue';
import ProgressBar from '@/components/progressBar/ProgressBar';
import styles from './page.module.css';

export default function ProgressBarPage() {
	const { onValueChange, onValueDecrease, onValueIncrease, value } = useValue();

	return (
		<main className={styles.main}>
			<h2>Progress Bar</h2>

			<div>
				<p>{`${value}% complete`}</p>
				<ProgressBar size={'small'} value={value} />
			</div>

			<div>
				<p>{`${value}% complete`}</p>
				<ProgressBar size={'medium'} value={value} />
			</div>

			<div>
				<p>{`${value}% complete`}</p>
				<ProgressBar size={'large'} value={value} />
			</div>

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
