'use client';
import { useState } from 'react';
import styles from './ProgressBar.module.css';

function ProgressBar() {
	const [progress, setProgress] = useState(0);

	function onProgressChange(e) {
		if (e.target.value <= 100) setProgress(e.target.value);
	}

	return (
		<div className={styles.ProgressBar}>
			<h2>Progress Bar</h2>
			<p>{`${progress}% complete`}</p>
			<div>
				<div style={{ width: `${progress}%` }}></div>
			</div>
			<br />
			<div>
				<label htmlFor='progress-bar'>
					<input
						id='"progress-bar"'
						onChange={onProgressChange}
						type='number'
						max={100}
						min={0}
					/>
				</label>
			</div>
		</div>
	);
}
export default ProgressBar;
