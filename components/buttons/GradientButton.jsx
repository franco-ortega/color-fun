import Button from './Button';

export default function GradientButton({
	handler,
	text,
	gradientStyles,
	shadowStyles,
}) {
	if (!gradientStyles.colors.length)
		throw Error('GradientButton missing background colors');

	if (gradientStyles.colors.length < 2)
		throw Error('GradientButton did not receive multiple colors');

	const background = `linear-gradient(${
		gradientStyles.deg
	}deg, ${gradientStyles.colors.join(', ')})`;

	const buttonStyles = {
		'--background': background,
		'--box-shadow': `inset 0 0 2px 1px ${shadowStyles.color}`,
		'--box-shadow-hov': `inset 0 0 2px 20px ${shadowStyles.hover}`,
	};

	return <Button buttonStyles={buttonStyles} handler={handler} text={text} />;
}
