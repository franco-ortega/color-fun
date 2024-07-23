import VisuallyHidden from '../visuallyHidden/VisuallyHidden';
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
	large: {
		'--borderRadius': `${8 / 16}rem`,
		'--height': `${(24 - 4 * 2) / 16}rem`,
		'--padding': `${4 / 16}rem`,
	},
};

function ProgressBar({ size, value }) {
	const progressBarStyles = SIZES[size];

	return (
		<div
			className={styles.ProgressBar}
			style={progressBarStyles}
			role='progressbar'
			aria-valuenow={value}
			aria-valuemin={0}
			aria-valuemax={100}
		>
			<div>
				<div style={{ '--width': `${value}%` }}>
					<VisuallyHidden>{value}%</VisuallyHidden>
				</div>
			</div>
		</div>
	);
}
export default ProgressBar;
