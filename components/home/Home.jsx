import Link from 'next/link';
import styles from './Home.module.css';
import ButtonLink from '../buttons/ButtonLink';
import Header from '../header/Header';

export default function Home() {
	return (
		<div className={styles.Home}>
			{/* <header>
				<h1>Color Playground</h1>
				<nav>
					<ul>
						<li>
							<ButtonLink text={'HOME'} url={'/'} />
						</li>
						<li>
							<ButtonLink text={'COLOR MIX'} url={'/color-mix'} />
						</li>
						<li>
							<ButtonLink text={'PROGRESS BAR'} url={'/progress-bar'} />
						</li>
					</ul>
				</nav>
			</header> */}
			{/* <Header /> */}
			<main>
				<p>A playground to test color styles.</p>
			</main>
		</div>
	);
}
