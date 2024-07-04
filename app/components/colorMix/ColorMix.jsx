'use client';

import { usePathname } from 'next/navigation';
import styles from './ColorMix.module.css';
import HomeButton from '../buttons/HomeButton';

export default function ColorMix({ children }) {
	const pathname = usePathname();

	const page = pathname.slice(11, 12).toUpperCase() + pathname.slice(12);

	const subtitle = page ? `: ${page}` : null;

	return (
		<div className={styles.ColorMix}>
			<header>
				<h1>Color Mix{subtitle}</h1>
				<HomeButton />
			</header>
			<main>{children}</main>
		</div>
	);
}
