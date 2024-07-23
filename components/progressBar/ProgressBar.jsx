import styles from './ProgressBar.module.css';

function ProgressBar({ progress }) {
	return (
		<div className={styles.ProgressBar}>
			<p>{`${progress}% complete`}</p>
			<div>
				<div>
					<div style={{ width: `${progress}%` }}></div>
				</div>
			</div>
		</div>
	);
}
export default ProgressBar;
