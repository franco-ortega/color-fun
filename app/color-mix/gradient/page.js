import styles from './page.module.css';

export default function Gradient() {
	const colorSwaths = (
		<>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</>
	);

	return <div className={styles.colorMix}>{colorSwaths}</div>;
}
