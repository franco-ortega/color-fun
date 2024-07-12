'use client';

import { usePathname } from 'next/navigation';
import ButtonLink from '../buttons/ButtonLink';
import styles from './Header.module.css';

function Header() {
	const pathname = usePathname();

	const page = pathname
		.substring(1)
		.replace('-', ' ')
		.replace('/', ' > ')
		.split('')
		.map((character, i, arr) =>
			arr[i - 1] === undefined || arr[i - 1] === ' '
				? character.toUpperCase()
				: character
		)
		.join('');

	const subtitle = page ? `: ${page}` : null;

	console.log('PATHNAME', pathname);

	return (
		<header className={styles.Header}>
			<div>
				<h1>Color Playground{subtitle && subtitle}</h1>
			</div>
			<nav>
				<ul>
					<li>
						<ButtonLink text={'home'} url={'/'} />
					</li>
					<li>
						<ButtonLink text={'color mix'} url={'/color-mix'} />
					</li>
					<li>
						<ButtonLink text={'progress bar'} url={'/progress-bar'} />
					</li>
				</ul>
			</nav>
		</header>
	);
}
export default Header;
