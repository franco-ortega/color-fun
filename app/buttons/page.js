'use client';

import { useState } from 'react';
import Button from '@/components/buttons/Button';
import DualButton from '@/components/buttons/DualButton';
import GradientButton from '@/components/buttons/GradientButton';
import styles from './page.module.css';

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

function leftAlert() {
	return buttonAlert('left');
}

function rightAlert() {
	return buttonAlert('right');
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
		colors: ['var(--base)', 'var(--brand)'],
	},
	shadowStyles: {
		color: 'hsl(50, 100%, 50%, 0.9)',
		hover: 'var(--red-00)',
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
	const [onToggle, setOnToggle] = useState(true);

	function onToggleLeft() {
		setOnToggle(true);
		setTimeout(() => {
			buttonAlert('left');
		}, 100);
	}

	function onToggleRight() {
		setOnToggle(false);
		setTimeout(() => {
			buttonAlert('right');
		}, 100);
	}

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

			<div>
				<p>Plain Dual Buttons</p>
				<div className={styles.buttonWrapper}>
					<DualButton
						handler1={onToggleLeft}
						handler2={onToggleRight}
						hsl1={'0 90% 50%'}
						hsl2={'0 90% 50%'}
						fade={0.7}
						text1={'LEFT'}
						text2={'RIGHT'}
						toggleOn={onToggle}
					/>
				</div>
			</div>
		</>
	);
}
