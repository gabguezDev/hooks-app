import { renderHook, screen } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";
import { act } from "react-dom/test-utils";
import { ChangeEvent } from "react";

describe("Test over useForm", () => {
	const initialForm = {
		name: "Gabriel",
		email: "gabriel@gmail.com",
	};
	test("should return initialValues", () => {
		const { result } = renderHook(() => useForm(initialForm));

		// console.log(result);
		expect(result.current).toEqual({
			...initialForm,
			formState: { name: "Gabriel", email: "gabriel@gmail.com" },
			onInputChange: expect.any(Function),
			onResetForm: expect.any(Function),
		});
	});

	test("should change name at form", () => {
		const newValue = "Gabriel";
		const { result } = renderHook(() => useForm(initialForm));

		const { onInputChange } = result.current;

		act(() => {
			onInputChange({
				target: { value: newValue, name: "name" },
			} as ChangeEvent<HTMLInputElement>);
		});

		expect(result.current.name).toBe(newValue);
		expect(result.current.formState.name).toBe(newValue);
	});

	test("should reset form", () => {
		const newValue = "Gabriel";
		const { result } = renderHook(() => useForm(initialForm));

		const { onInputChange, onResetForm } = result.current;

		act(() => {
			onInputChange({
				target: { value: newValue, name: "name" },
			} as ChangeEvent<HTMLInputElement>);
			onResetForm();
		});

		expect(result.current.name).toBe(initialForm.name);
		expect(result.current.formState.name).toBe(initialForm.name);
	});
});
