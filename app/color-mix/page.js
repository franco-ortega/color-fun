import styles from './page.module.css';

export default function ColorMix() {
	return (
		<main className={styles['color-mix']}>
			<header>
				<h1>Color Mix</h1>
			</header>
			<div className={styles.colors}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</main>
	);
}
