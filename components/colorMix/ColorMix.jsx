'use client';

import { usePathname } from 'next/navigation';
import ButtonLink from '../buttons/ButtonLink';
import styles from './ColorMix.module.css';

export default function ColorMix({ children }) {
	const pathname = usePathname();

	const page = pathname.slice(11, 12).toUpperCase() + pathname.slice(12);

	const subtitle = page ? `: ${page}` : null;

	return <main className={styles.ColorMix}>{children}</main>;
}
