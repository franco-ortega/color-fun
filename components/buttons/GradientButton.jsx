import Button from './Button';

export default function GradientButton({
	handler,
	text,
	gradientStyles,
	hoverColor,
}) {
	if (!gradientStyles.colors.length)
		throw Error('GradientButton missing background colors');

	if (gradientStyles.colors.length < 2)
		throw Error('GradientButton did not receive multiple colors');

	const background = `linear-gradient(${
		gradientStyles.deg
	}deg, ${gradientStyles.colors.join(', ')})`;

	const buttonColors = {
		'--background': background,
		'--boxShadowHover': `inset 0 0 2px 20px ${hoverColor}`,
	};

	return <Button buttonStyles={buttonColors} handler={handler} text={text} />;
}
