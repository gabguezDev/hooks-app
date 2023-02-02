import React, { useState } from "react";

export const useCounter = () => {
	const [counter, setCounter] = useState(1);

	const onIncrement = () => {
		setCounter(current => current + 1);
	};

	const onDecrement = () => {
		setCounter(current => (current >= 2 ? current - 1 : current));
	};

	return { counter, onIncrement, onDecrement };
};
