import React, { useState } from "react";

export const useCounter = () => {
	const [counter, setCounter] = useState(1);

	const onIncrement = () => {
		setCounter(counter + 1);
	};

	const onDecrement = () => {
		counter > 1 && setCounter(counter - 1);
	};

	return { counter, onIncrement, onDecrement };
};
