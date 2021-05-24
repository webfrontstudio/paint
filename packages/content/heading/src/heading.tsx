import React from "react";
import clsx from "clsx";
import styles from "./heading.module.scss";


type HeadingLevelNumber = 1 | 2 | 3 | 4 | 5 | 6;
type HeadingLevelString = `${HeadingLevelNumber}`;
type HeadingLevel = HeadingLevelString | HeadingLevelNumber;

export interface HeadingProperties extends React.ComponentPropsWithoutRef<"h1"> {
	/**
	 * Semantic heading level
	 *
	 * [Learn how to pick the correct heading level](https://www.w3.org/WAI/tutorials/page-structure/headings/)
	*/
	level: HeadingLevel;
	/**
	 * Visual heading level
	 *
	 * Recommended only for when styling hierarchy differs between pages
	 */
	visualLevel?: HeadingLevel;
	/**
	 * Content for the heading text
	 *
	 * Child elements must have a valid accessible name
	 */
	children: React.ReactChild | React.ReactFragment;
}

/**
 * Heading component with styles and a heading level property
 *
 * ## Usage Notes
 * - Heading level must be set by the `level` property
 * - Contextual heading level increasing is possible using a `<section>` with a context that tracks the current level
 */
export const Heading = (properties: HeadingProperties): JSX.Element => {
	const {level, visualLevel, className, ...otherProperties} = properties;
	const HeadingElement = `h${level}` as const;

	return (
		<HeadingElement
			className={clsx(
				visualLevel ? styles[`h${visualLevel}` as const] : styles[HeadingElement],
				className,
			)}
			{...otherProperties}
		/>
	);
};
