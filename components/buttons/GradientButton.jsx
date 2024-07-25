import Button from './Button';
import styles from './GradientButton.module.css';

export default function GradientButton({
	handler,
	text,
	deg,
	backgroundColors,
	hoverColor,
}) {
	const background =
		backgroundColors.length > 1
			? `linear-gradient(${deg}deg, ${backgroundColors.join(', ')})`
			: backgroundColors[0];

	const buttonColors = {
		'--background': background,
		'--boxShadowHover': hoverColor,
	};

	if (!backgroundColors) throw Error('Missing background color(s)');

	return (
		<div className={styles.GradientButton}>
			<Button buttonStyles={buttonColors} handler={handler} text={'GRADIENT'} />
		</div>
	);
}
