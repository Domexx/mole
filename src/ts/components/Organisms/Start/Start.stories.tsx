import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import StartComponent from './Start';

const Component = {
  title: 'Components/Organisms/Start',
  component: StartComponent,
  argTypes: {},
};

const Template: Story<ComponentProps<typeof StartComponent>> = (args) => {
  return <StartComponent {...args} />;
};

export const Start = Template.bind({});
export default Component;
