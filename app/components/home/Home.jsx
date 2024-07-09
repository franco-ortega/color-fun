import Link from 'next/link';
import styles from './Home.module.css';
import ButtonLink from '../buttons/ButtonLink';

export default function Home() {
	return (
		<div className={styles.Home}>
			<header>
				<h1>Color Playground</h1>
				<nav>
					<ul>
						<li>
							<ButtonLink text={'HOME'} url={'/'} />
						</li>
						<li>
							<ButtonLink text={'COLOR MIX'} url={'/color-mix'} />
						</li>
					</ul>
				</nav>
			</header>
			<main>
				<p>A playground to test color styles.</p>
			</main>
		</div>
	);
}
