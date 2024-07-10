import ButtonLink from '../buttons/ButtonLink';
import styles from './Header.module.css';

function Header() {
	return (
		<header className={styles.Header}>
			<div>
				<h1>Color Playground</h1>
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
