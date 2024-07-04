import styles from './ColorMix.module.css';

export default function ColorMix({ children }) {
	return (
		<div className={styles.ColorMix}>
			<header>
				<h1>Color Mix</h1>
			</header>
			<main>{children}</main>
		</div>
	);
}
