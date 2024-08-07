'use client';

import Button from '../buttons/Button';
import GradientButton from '../buttons/GradientButton';
import styles from './Home.module.css';

export default function Home() {
	return (
		<main className={styles.Home}>
			<p>A playground to test color styles.</p>
			<Button
				buttonStyles={{ '--background': 'blue' }}
				handler={() => console.log('BUTTON clicked')}
				text={'BUTTON'}
			/>
			<br />
			<br />
			<GradientButton
				handler={() => console.log('GRADIENT clicked')}
				text={'GRADIENT'}
				gradientStyles={{
					deg: 90,
					colors: ['var(--base)', 'var(--brand)'],
				}}
				shadowStyles={{
					color: 'hsl(50, 100%, 50%, 0.9)',
					hover: 'var(--red-00)',
				}}
			/>
		</main>
	);
}
