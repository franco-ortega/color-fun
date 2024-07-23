import styles from './ProgressBar.module.css';

const SIZES = {
	small: {
		'--height': `${8 / 16}rem`,
	},
	medium: {
		'--height': `${12 / 16}rem`,
	},
	large: { '--height': `${24 / 16}rem` },
};

function ProgressBar({ progress, size }) {
	const progressBarStyles = SIZES[size];

	console.log(progressBarStyles);

	return (
		<div className={styles.ProgressBar} style={progressBarStyles}>
			<div style={{ width: `${progress}%` }}></div>
		</div>
	);
}
export default ProgressBar;
