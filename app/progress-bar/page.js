'use client';

import Link from 'next/link';
import styles from './page.module.css';
import ProgressBar from '@/components/progressBar/ProgressBar';
import { useState } from 'react';

export default function ProgressBarPage() {
	const [progress, setProgress] = useState(0);

	function onProgressChange(e) {
		if (e.target.value <= 100) setProgress(Number(e.target.value));
	}

	function onProgressIncrease() {
		if (progress < 100) setProgress((prev) => Number(prev) + 1);
	}

	function onProgressDecrease() {
		if (progress > 0) setProgress((prev) => Number(prev) - 1);
	}
	return (
		<main className={styles.main}>
			<h2>Progress Bar</h2>
			<ProgressBar progress={progress} />

			<div className={styles.adjust}>
				<p>ADJUST PROGRESS</p>
				<div>
					<button onClick={onProgressIncrease}>⬆︎</button>
					<label htmlFor='progress-bar'>
						<input
							id='progress-bar'
							onChange={onProgressChange}
							type='number'
							value={progress}
							max={100}
							min={0}
						/>
					</label>
					<button onClick={onProgressDecrease}>⬇︎</button>
				</div>
			</div>
		</main>
	);
}
