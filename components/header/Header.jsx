'use client';

import { usePathname } from 'next/navigation';
import createSubtitle from '@/utils/createSubtitle';
import ButtonLink from '../buttons/ButtonLink';
import styles from './Header.module.css';

function Header() {
	const pathname = usePathname();

	const subtitle = createSubtitle(pathname);

	return (
		<header className={styles.Header}>
			<div>
				<h1>Color Playground{subtitle && `: ${subtitle}`}</h1>
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
					<li>
						<ButtonLink text={'buttons'} url={'/buttons'} />
					</li>
				</ul>
			</nav>
		</header>
	);
}
export default Header;
