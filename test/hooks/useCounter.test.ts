import { render, renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useCounter } from "../../src/hooks/useCounter";

describe("Test over useCounter hook", () => {
	test("useCounter must return 3 functions and initial counter must have value 1", () => {
		const { result } = renderHook(() => useCounter());

		const { counter, onDecrement, onIncrement } = result.current;

		expect(counter).toBe(1);

		expect(onDecrement).toEqual(expect.any(Function));
		expect(onIncrement).toEqual(expect.any(Function));
		expect(onIncrement).toEqual(expect.any(Function));
	});

	test("should increment the counter", () => {
		const { result } = renderHook(() => useCounter());

		const { onIncrement } = result.current;

		act(() => onIncrement());

		expect(result.current.counter).toBe(2);
	});
	test("should decrement the counter", () => {
		const { result } = renderHook(() => useCounter());

		const { onIncrement, onDecrement } = result.current;

		act(() => {
			onIncrement();
			onIncrement();
			onDecrement();
		});

		expect(result.current.counter).toBe(2);
	});
});
