import Button from './Button';

// GradientButton props:
//
// gradientStyles={{
//   deg: NUMBER,
//   colors: ARRAY of COLORS as STRINGS
// }}
//
// shadowStyles={{
//   color: COLOR as STRING,
//   hover: COLOR as STRING
// }}

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

	const gradient = `linear-gradient(${
		gradientStyles.deg
	}deg, ${gradientStyles.colors.join(', ')})`;

	const buttonStyles = {
		'--background': gradient,
		'--clr-shadow': `${shadowStyles.color}`,
		'--box-shadow-hov': `inset 0 0 2px 20px ${shadowStyles.hover}`,
	};

	return <Button buttonStyles={buttonStyles} handler={handler} text={text} />;
}
