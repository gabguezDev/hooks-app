import React, { useEffect, useState } from "react";

export interface IUseFetchProps {
	url: string;
}

export interface IUseFetchState {
	isLoading: boolean;
	data: null | any;
	hasError: boolean;
	error: null | any;
}

export const useFetch = (url: IUseFetchProps["url"]) => {
	const [state, setState] = useState<IUseFetchState>({
		isLoading: true,
		data: null,
		hasError: false,
		error: null,
	});

	const getFetch = async () => {
		try {
			const res = await fetch(url);
			const data = await res.json();

			setState({
				...state,
				data,
				hasError: false,
				isLoading: false,
			});
		} catch (error) {
			setState({
				...state,
				hasError: true,
				isLoading: false,
				error,
			});
		}
	};

	useEffect(() => {
		getFetch();
	}, [url]);

	return {
		data: state.data,
		error: state.error,
		hasError: state.hasError,
		isLoading: state.isLoading,
	};
};
