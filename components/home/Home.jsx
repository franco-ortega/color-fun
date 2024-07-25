'use client';

import Button from '../buttons/Button';
import GradientButton from '../buttons/GradientButton';
import styles from './Home.module.css';

export default function Home() {
	return (
		<main className={styles.Home}>
			<p>A playground to test color styles.</p>
			<Button
				handler={() => console.log('clicked')}
				text='CLICK ME'
				deg={90}
				backgroundColors={['var(--base)', 'var(--brand)']}
				hoverColor={'var(--red-00)'}
			/>
			<br />
			<br />
			<GradientButton
				handler={() => console.log('clicked')}
				text='CLICK ME'
				deg={90}
				backgroundColors={['var(--base)', 'var(--brand)']}
				hoverColor={'var(--red-00)'}
			/>
		</main>
	);
}
