import React from "react";
import {render, screen} from "@testing-library/react";
import styles from "./heading.module.scss";
import {Heading} from ".";


describe("<Heading>", () => {
	test("should return an element with role heading", () => {
		render(<Heading level="1">Test Child</Heading>);
		expect(screen.getByRole("heading", {name: "Test Child"})).toBeInTheDocument();
	});

	test("should have override visual level", () => {
		render(<Heading level="1" visualLevel="2">Test Child</Heading>);
		expect(screen.getByRole("heading")).toHaveClass(styles.h2);
	});
});
