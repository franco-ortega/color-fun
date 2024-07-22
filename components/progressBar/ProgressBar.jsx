import styles from './ProgressBar.module.css';

function ProgressBar({ progress }) {
	return (
		<div className={styles.ProgressBar}>
			<h2>Progress Bar</h2>
			<div>
				<p>{`${progress}% complete`}</p>
				<div>
					<div>
						<div style={{ width: `${progress}%` }}></div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default ProgressBar;
