import Button from './Button';

export default function GradientButton({
	handler,
	text,
	deg,
	backgroundColors,
	hoverColor,
}) {
	const background = `linear-gradient(${deg}deg, ${backgroundColors.join(
		', '
	)})`;

	const buttonColors = {
		'--background': background,
		'--boxShadowHover': `inset 0 0 2px 20px ${hoverColor}`,
	};

	if (!backgroundColors)
		throw Error('GradientButton missing background colors');

	if (backgroundColors.length < 2)
		throw Error('GradientButton did not receive multiple colors');

	return <Button buttonStyles={buttonColors} handler={handler} text={text} />;
}
