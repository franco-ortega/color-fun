import styles from './ProgressBar.module.css';

function ProgressBar() {
	return (
		<div className={styles.ProgressBar}>
			<h2>ProgressBar</h2>
			<div>
				<div></div>
			</div>
			<div>
				<input type='number' />
			</div>
		</div>
	);
}
export default ProgressBar;
