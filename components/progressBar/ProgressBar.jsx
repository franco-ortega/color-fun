import styles from './ProgressBar.module.css';

function ProgressBar({ progress }) {
	return (
		<div>
			<div className={styles.ProgressBar}>
				<div style={{ width: `${progress}%` }}></div>
			</div>
		</div>
	);
}
export default ProgressBar;
