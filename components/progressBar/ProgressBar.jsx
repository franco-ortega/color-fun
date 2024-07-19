'use client';
import { useState } from 'react';
import styles from './ProgressBar.module.css';

function ProgressBar() {
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
		<div className={styles.ProgressBar}>
			<h2>Progress Bar</h2>
			<p>{`${progress}% complete`}</p>
			<div>
				<div>
					<div style={{ width: `${progress}%` }}></div>
				</div>
			</div>
			<br />
			<div>
				<p>ADJUST PROGRESS</p>
				<div>
					<button onClick={onProgressIncrease}>⬆︎</button>
					<label htmlFor='progress-bar'>
						<input
							id='progress-bar'
							onChange={onProgressChange}
							type='number'
							defaultValue={0}
							value={progress}
							max={100}
							min={0}
						/>
					</label>
					<button onClick={onProgressDecrease}>⬇︎</button>
				</div>
			</div>
		</div>
	);
}
export default ProgressBar;
