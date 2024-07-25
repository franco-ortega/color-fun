'use client';

import Button from '@/components/buttons/Button';
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

export default function ButtonsPage() {
	return (
		<main className={styles.main}>
			<h2 className={styles.heading}>Button Testing Playground</h2>

			<div className={styles.wrapper}>
				<section className={styles.column}>
					<h3 className={styles.heading}>Light</h3>
					<ButtonRow />
				</section>

				<section className={styles.column}>
					<h3 className={styles.heading}>Medium</h3>
					<ButtonRow />
				</section>

				<section className={styles.column}>
					<h3 className={styles.heading}>Dark</h3>
					<ButtonRow />
				</section>
			</div>
		</main>
	);
}
