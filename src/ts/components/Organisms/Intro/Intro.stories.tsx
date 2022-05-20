import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import IntroComponent from './Intro';

const Component = {
  title: 'Components/Organisms/Intro',
  component: IntroComponent,
  argTypes: {},
};

const Template: Story<ComponentProps<typeof IntroComponent>> = (args) => {
  return <IntroComponent {...args} />;
};

export const Intro = Template.bind({});
export default Component;
