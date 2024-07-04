import styles from './page.module.css';

export default function Gradient() {
	return (
		<main className={styles['color-mix']}>
			<header>
				<h1>Gradient</h1>
			</header>
			<div className={styles.colors}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</main>
	);
}
