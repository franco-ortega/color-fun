import styles from './Home.module.css';

export default function Home() {
	return (
		<div className={styles.Home}>
			<header>
				<h1>Color Playground</h1>
				<nav>
					<ul>
						<li>Home</li>
						<li>Link 1</li>
					</ul>
				</nav>
			</header>
			<main>
				<p>A playground to test color styles.</p>
			</main>
		</div>
	);
}
