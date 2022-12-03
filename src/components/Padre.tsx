import React, { useCallback } from "react";
import { Hijo } from "./Hijo";
import { useState } from "react";

export const Padre = () => {
	const numeros = [2, 4, 6, 8, 10];
	const [valor, setValor] = useState(0);

	const incrementarMemoized = useCallback((num: number) => {
		setValor(value => value + num);
	}, []);

	return (
		<div>
			<h1>Padre</h1>
			<p> Total: {valor} </p>

			<hr />

			{numeros.map((n: number) => (
				<Hijo key={n} numero={n} incrementar={incrementarMemoized} />
			))}
			{/* <Hijo /> */}
		</div>
	);
};
