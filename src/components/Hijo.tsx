import React, { useMemo } from "react";

type Props = {
	numero: number;
	incrementar: (n: number) => void;
};

export const Hijo = React.memo(({ numero, incrementar }: Props) => {
	console.log("  Me volví a generar :(  ");

	return (
		<button
			className="btn btn-primary mr-3"
			onClick={() => incrementar(numero)}
		>
			{numero}
		</button>
	);
});
