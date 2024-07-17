'use client';
import { useState } from 'react';
import styles from './ProgressBar.module.css';

function ProgressBar() {
	const [progress, setProgress] = useState(0);

	function onProgressChange(e) {
		setProgress(e.target.value);
	}

	console.log(progress);

	return (
		<div className={styles.ProgressBar}>
			<h2>ProgressBar</h2>
			<div>
				<div></div>
			</div>
			<div>
				<input onChange={onProgressChange} type='number' />
			</div>
		</div>
	);
}
export default ProgressBar;
