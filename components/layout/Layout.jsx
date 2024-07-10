import Header from '../header/Header';
import styles from './Layout.module.css';

function Layout({ children }) {
	return (
		<div className={styles.Layout}>
			<Header />
			{children}
		</div>
	);
}

export default Layout;
