'use client';

import { usePathname } from 'next/navigation';
import styles from './ColorMix.module.css';

export default function ColorMix({ children }) {
	const pathname = usePathname();

	// const page = pathname.slice(11);
	const page = pathname.slice(11, 12).toUpperCase() + pathname.slice(12);

	const subheader = page ? `: ${page}` : null;

	return (
		<div className={styles.ColorMix}>
			<header>
				<h1>Color Mix{subheader}</h1>
			</header>
			<main>{children}</main>
		</div>
	);
}
