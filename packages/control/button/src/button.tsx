import React from "react";
import clsx from "clsx";
import styles from "./button.module.scss";


export interface ButtonProperties extends React.ComponentPropsWithoutRef<"button"> {
	/**
	 * Visual importance
	 *
	 * Used in styling with certain visually important effects such as outlines, shadows, and backgrounds
	 */
	importance: "primary" | "secondary" | "tertiary";
	/**
	 * Size
	 *
	 * Used to determine the amount of padding and other styles
	 */
	size: "small" | "medium" | "large";
	/**
	 * Content for the button text
	 *
	 * Child elements must have a valid accessible name
	 */
	children: React.ReactChild | React.ReactFragment;
}

/**
 * Button component with styles
 *
 * ## Usage Notes
 * - To prevent accidental submission, `type="button"` is the default, and you must add `type="submit"` for submission buttons
 */
export const Button = (properties: ButtonProperties): JSX.Element => {
	const {importance, size, className, ...otherProperties} = properties;

	return (
		<button
			type="button"
			className={clsx(
				styles.button,
				styles[importance],
				styles[size],
				className,
			)}
			{...otherProperties}
		/>
	);
};

Button.defaultProps = {
	importance: "primary",
	size: "medium",
} as const;
