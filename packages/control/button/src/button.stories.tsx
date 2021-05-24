import React from "react";
import {Meta, Story} from "@storybook/react";
import {Button as ButtonComponent, ButtonProperties} from "./button";


export default {
	title: "Control/Button",
	component: ButtonComponent,
} as Meta;

const Template: Story<ButtonProperties> = (args) => <ButtonComponent {...args} />;

export const Button = Template.bind({});
Button.args = {
	...ButtonComponent.defaultProps,
	children: "Button",
};
