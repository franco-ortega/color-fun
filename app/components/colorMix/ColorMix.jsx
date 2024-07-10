'use client';

import { usePathname } from 'next/navigation';
import ButtonLink from '../buttons/ButtonLink';
import styles from './ColorMix.module.css';

export default function ColorMix({ children }) {
	const pathname = usePathname();

	const page = pathname.slice(11, 12).toUpperCase() + pathname.slice(12);

	const subtitle = page ? `: ${page}` : null;

	return (
		<div className={styles.ColorMix}>
			<header>
				<h1>Color Mix{subtitle}</h1>
				<nav>
					<ButtonLink text={'Home'} url={'/'} />
					{subtitle && <ButtonLink text={'Color Mix'} url={'/color-mix'} />}
				</nav>
			</header>
			<main>{children}</main>
		</div>
	);
}
