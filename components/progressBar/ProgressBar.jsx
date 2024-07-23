import VisuallyHidden from '../visuallyHidden/VisuallyHidden';
import styles from './ProgressBar.module.css';

const STYLES = {
	small: {
		height: 8,
		padding: 0,
		radius: 4,
	},
	medium: {
		height: 12,
		padding: 0,
		radius: 4,
	},
	large: {
		height: 16,
		padding: 4,
		radius: 8,
	},
};

function ProgressBar({ size, value }) {
	const progressBarStyles = STYLES[size];

	return (
		<div
			role='progressbar'
			aria-valuenow={value}
			aria-valuemin={0}
			aria-valuemax={100}
			className={styles.ProgressBar}
			style={{
				'--padding': progressBarStyles.padding + 'px',
				'--radius': progressBarStyles.radius + 'px',
			}}
		>
			<div>
				<div
					style={{
						'--width': `${value}%`,
						'--height': progressBarStyles.height + 'px',
					}}
				>
					<VisuallyHidden>{value}%</VisuallyHidden>
				</div>
			</div>
		</div>
	);
}
export default ProgressBar;
