'use client';

import Button from '@/components/buttons/Button';
import styles from './page.module.css';
import GradientButton from '@/components/buttons/GradientButton';

const COLORS = {
	light: 'hsl(0, 0%, 100%)',
	medium: 'hsl(0, 0%, 50%)',
	dark: 'hsl(0, 0%, 0%)',
};

function buttonAlert(button) {
	alert(`${button.toUpperCase()} button`);
}

function lightAlert() {
	return buttonAlert('light');
}

function mediumAlert() {
	return buttonAlert('medium');
}

function darkAlert() {
	return buttonAlert('dark');
}

export default function ButtonsPage() {
	return (
		<main className={styles.main}>
			<h2 className={styles.heading}>Button Playground</h2>

			<div className={styles.wrapper}>
				<section className={styles.column}>
					<h3 className={styles.heading}>Light Background</h3>
					<CombinedButtonRows />
				</section>

				<section className={styles.column}>
					<h3 className={styles.heading}>Medium Background</h3>
					<CombinedButtonRows />
				</section>

				<section className={styles.column}>
					<h3 className={styles.heading}>Dark Background</h3>
					<CombinedButtonRows />
				</section>
			</div>
		</main>
	);
}

function ButtonRow() {
	return (
		<div className={styles.buttonWrapper}>
			<Button
				buttonStyles={{
					'--background': COLORS.light,
					'--box-shadow': 'inset 0 0 0 1px blue',
					color: 'black',
					textShadow: 'none',
				}}
				handler={lightAlert}
				text={'LIGHT'}
			/>
			<Button
				buttonStyles={{
					'--background': COLORS.medium,
					'--box-shadow': 'inset 0 0 0 1px blue',
					color: 'white',
					textShadow: 'none',
				}}
				handler={mediumAlert}
				text={'MEDIUM'}
			/>
			<Button
				buttonStyles={{
					'--background': COLORS.dark,
					'--box-shadow': 'inset 0 0 0 1px blue',
					color: 'white',
					textShadow: 'none',
				}}
				handler={darkAlert}
				text={'DARK'}
			/>
		</div>
	);
}

const testGradientButtonStyles = {
	gradientStyles: {
		deg: 90,
		colors: ['red', 'orange', 'yellow'],
	},
	shadowStyles: {
		color: 'gold',
		hover: 'red',
	},
};

function GradientButtonRow() {
	return (
		<div className={styles.buttonWrapper}>
			<GradientButton
				handler={lightAlert}
				text={'LIGHT'}
				gradientStyles={testGradientButtonStyles.gradientStyles}
				shadowStyles={testGradientButtonStyles.shadowStyles}
			/>
			<GradientButton
				handler={mediumAlert}
				text={'MEDIUM'}
				gradientStyles={testGradientButtonStyles.gradientStyles}
				shadowStyles={testGradientButtonStyles.shadowStyles}
			/>
			<GradientButton
				handler={darkAlert}
				text={'DARK'}
				gradientStyles={testGradientButtonStyles.gradientStyles}
				shadowStyles={testGradientButtonStyles.shadowStyles}
			/>
		</div>
	);
}

function CombinedButtonRows() {
	return (
		<>
			<div>
				<p>Plain Buttons</p>
				<ButtonRow />
			</div>

			<div>
				<p>Gradient Buttons</p>
				<GradientButtonRow />
			</div>
		</>
	);
}
