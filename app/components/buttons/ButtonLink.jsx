import Link from 'next/link';
import styles from './ButtonLink.module.css';

export default function ButtonLink({ text, url }) {
	return (
		<button className={styles.ButtonLink}>
			<Link href={url}>{text.toUpperCase()}</Link>
		</button>
	);
}
