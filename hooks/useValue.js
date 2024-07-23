import { useState } from 'react';

export default function useValue() {
	const [value, setValue] = useState(0);

	function onValueChange(e) {
		if (e.target.value >= 0 && e.target.value <= 100)
			setValue(Number(e.target.value));
	}

	function onValueDecrease() {
		if (value > 0) setValue((prev) => Number(prev) - 1);
	}

	function onValueIncrease() {
		if (value < 100) setValue((prev) => Number(prev) + 1);
	}

	return {
		onValueChange,
		onValueDecrease,
		onValueIncrease,
		value,
	};
}
