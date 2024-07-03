import styles from './page.module.css';

export default function ColorMix() {
	return (
		<main>
			<header>
				<h1>Color Mix</h1>
			</header>
			<div className={styles.color}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</main>
	);
}
