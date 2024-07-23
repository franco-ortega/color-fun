import { useEffect, useState } from 'react';
import styles from './VisuallyHidden.module.css';

const VisuallyHidden = ({ children, ...delegated }) => {
	const [forceShow, setForceShow] = useState(false);

	useEffect(() => {
		if (process.env.NODE_ENV !== 'production') {
			const handleKeyDown = (e) => {
				if (e.key === 'Alt') {
					setForceShow(true);
				}
			};

			const handleKeyUp = () => {
				setForceShow(false);
			};

			window.addEventListener('keydown', handleKeyDown);
			window.addEventListener('keyup', handleKeyUp);

			return () => {
				window.removeEventListener('keydown', handleKeyDown);
				window.removeEventListener('keyup', handleKeyUp);
			};
		}
	}, []);

	if (forceShow) {
		return children;
	}

	return (
		<div className={styles.VisuallyHidden} {...delegated}>
			{children}
		</div>
	);
};

export default VisuallyHidden;
