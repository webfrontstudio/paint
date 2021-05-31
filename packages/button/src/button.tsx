import React from "react";
import clsx from "clsx";
import styles from "./button.module.scss";


export interface ButtonProperties extends React.ComponentPropsWithoutRef<"button"> {
	/**
	 * Content for the button text
	 *
	 * Child elements must have a valid accessible name
	 */
	children: React.ReactChild | React.ReactFragment;
}

/**
 * Base button component
 *
 * ## Usage Notes
 * - To prevent accidental submission, `type="button"` is the default, and you must add `type="submit"` for submission buttons
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProperties>(
	function Button (properties, reference): JSX.Element {
		const {className, ...otherProperties} = properties;

		return (
			<button
				ref={reference}
				type="button"
				className={clsx(
					styles.button,
					className,
				)}
				{...otherProperties}
			/>
		);
	}
);

Button.defaultProps = {} as const;
