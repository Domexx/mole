import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import ButtonComponent, { Props } from './Button';

const Component = {
  title: 'Components/Atoms/Button',
  component: ButtonComponent,
  argTypes: {
    type: {
      options: ['default', 'primary', 'error', 'warning'],
      control: { type: 'select' },
    },
    align: {
      options: ['left', 'right', 'center'],
      control: { type: 'inline-radio' },
    },
  },
};

const Template: Story<ComponentProps<typeof ButtonComponent>> = (args) => {
  return <ButtonComponent {...args} />;
};

export const Button = Template.bind({});
export default Component;

// https://storybook.js.org/docs/react/essentials/controls
Button.args = {
  type: 'default',
  align: 'left',
  href: '',
  children: 'Enter',
  disabled: false,
} as Props;
