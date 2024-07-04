import styles from './ColorMix.module.css';

export default function ColorMix({ children }) {
	return (
		<main className={styles.ColorMix}>
			<header>
				<h1>Color Mix</h1>
			</header>
			{children}
		</main>
	);
}
