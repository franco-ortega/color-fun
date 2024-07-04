import Link from 'next/link';
import styles from './HomeButton.module.css';

export default function HomeButton() {
	return (
		<button className={styles.HomeButton}>
			<Link href={'/color-mix'}>Home</Link>
		</button>
	);
}
