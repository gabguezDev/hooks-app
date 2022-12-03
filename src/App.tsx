import { Blockquote, LoadingComponent } from "./components";
import { useFetch, useCounter } from "./hooks";

function App() {
	const { counter, onIncrement, onDecrement } = useCounter();

	const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;

	const { data, error, hasError, isLoading } = useFetch(url);

	const { quote, author } = !!data && data[0];

	return (
		<>
			<h3>HooksApp</h3>
			<hr />
			<br />

			<div className="container text-center my-2">
				<h3> Breaking Bad Quotes </h3>
				{isLoading ? (
					<LoadingComponent />
				) : (
					<Blockquote quote={quote} author={author} />
				)}
			</div>

			<div className="d-flex justify-content-center gap-2 my-2">
				<button
					disabled={isLoading}
					onClick={onDecrement}
					className="btn btn-primary"
				>
					Prev Quote
				</button>
				<button
					disabled={isLoading}
					onClick={onIncrement}
					className="btn btn-primary"
				>
					Next Quote
				</button>
			</div>
		</>
	);
}

export default App;
