import Button from './Button';

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
		'--boxShadowHover': `inset 0 0 2px 20px ${hoverColor}`,
	};

	if (!backgroundColors) throw Error('Missing background color(s)');

	return <Button buttonStyles={buttonColors} handler={handler} text={text} />;
}
