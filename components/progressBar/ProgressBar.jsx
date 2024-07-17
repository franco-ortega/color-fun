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
			<h2>ProgressBar</h2>
			<div>
				<p>{progress && `${progress}% complete`}</p>
				<div style={{ width: `${progress}%` }}></div>
			</div>
			<br />
			<div>
				<input onChange={onProgressChange} type='number' max={100} min={0} />
			</div>
		</div>
	);
}
export default ProgressBar;
