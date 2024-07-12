import styles from './Gradient.module.css';

function Gradient() {
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

	return <div className={styles.Gradient}>{colorSwaths}</div>;
}
export default Gradient;
