import React from "react";
import {Meta, Story} from "@storybook/react";
import {Heading as HeadingComponent, HeadingProperties} from ".";


export default {
	title: "Content/Heading",
	component: HeadingComponent,
} as Meta;

const Template: Story<HeadingProperties> = (args) => <HeadingComponent {...args} />;

export const Heading = Template.bind({});
Heading.args = {
	level: "1",
	children: "Heading",
};
