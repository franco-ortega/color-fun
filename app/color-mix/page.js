import Link from 'next/link';
import styles from './page.module.css';

export default function ColorMix() {
	return (
		<nav className={styles.colorMix}>
			<ul>
				<Link href='/color-mix/gradient'>
					<li data='gradient'>Gradient</li>
				</Link>
				<Link href='/color-mix/brand'>
					<li data='brand'>Brand</li>
				</Link>
			</ul>
		</nav>
	);
}
