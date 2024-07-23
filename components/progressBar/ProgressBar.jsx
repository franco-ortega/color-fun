import styles from './ProgressBar.module.css';

const SIZES = {
	small: {
		'--borderRadius': `${4 / 16}rem`,
		'--height': `${8 / 16}rem`,
	},
	medium: {
		'--borderRadius': `${4 / 16}rem`,
		'--height': `${12 / 16}rem`,
	},
	large: { '--borderRadius': `${8 / 16}rem`, '--height': `${24 / 16}rem` },
};

function ProgressBar({ size, value }) {
	const progressBarStyles = SIZES[size];

	return (
		<div className={styles.ProgressBar} style={progressBarStyles}>
			<div style={{ width: `${value}%` }}></div>
		</div>
	);
}
export default ProgressBar;
