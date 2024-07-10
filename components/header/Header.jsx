import ButtonLink from '../buttons/ButtonLink';
import styles from './Header.module.css';

function Header() {
	return (
		<header className={styles.Header}>
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
		</header>
	);
}
export default Header;
