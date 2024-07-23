import { useState } from 'react';

export default function useProgress() {
	const [progress, setProgress] = useState(0);

	function onProgressChange(e) {
		if (e.target.value >= 0 && e.target.value <= 100)
			setProgress(Number(e.target.value));
	}

	function onProgressIncrease() {
		if (progress < 100) setProgress((prev) => Number(prev) + 1);
	}

	function onProgressDecrease() {
		if (progress > 0) setProgress((prev) => Number(prev) - 1);
	}

	return {};
}
