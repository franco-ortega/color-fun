import useValue from '@/hooks/useValue';
import ProgressBar from '../progressBar/ProgressBar';
import styles from './ProgressAdjuster.module.css';

export default function ProgressAdjuster({ size }) {
	const { onValueChange, onValueDecrease, onValueIncrease, value } = useValue();

	return (
		<div className={styles.ProgressAdjuster}>
			<h3>{size} Progress Bar</h3>

			<div>
				<p>{`${value}% complete`}</p>
				<ProgressBar size={size} value={value} />
			</div>

			<div>
				<p>ADJUST PROGRESS</p>
				<div>
					<button onClick={onValueDecrease}>⬇︎</button>

					<label htmlFor='progress-bar'>
						<input
							id='progress-bar'
							onChange={onValueChange}
							type='number'
							value={value}
							max={100}
							min={0}
						/>
					</label>
					<button onClick={onValueIncrease}>⬆︎</button>
				</div>
			</div>
		</div>
	);
}
