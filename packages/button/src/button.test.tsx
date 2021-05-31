import React from "react";
import {render, screen} from "@testing-library/react";
import {Button} from ".";


describe("<Button>", () => {
	test("should return an element with role button", () => {
		render(<Button>Test Child</Button>);
		expect(screen.getByRole("button", {name: "Test Child"})).toBeInTheDocument();
	});
});
