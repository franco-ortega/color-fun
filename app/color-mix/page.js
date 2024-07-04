import styles from './page.module.css';

export default function ColorMix() {
	return (
		<nav className={styles.colorMix}>
			<ul>
				<li data='gradient'>Gradient</li>
				<li>Brand</li>
			</ul>
		</nav>
	);
}
