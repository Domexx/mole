import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import CircleComponent from './Circle';

const Component = {
  title: 'Components/Atoms/Circle',
  component: CircleComponent,
  argTypes: {},
};

const Template: Story<ComponentProps<typeof CircleComponent>> = (args) => {
  return <CircleComponent {...args} />;
};

export const Circle = Template.bind({});
export default Component;
