import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import MessageComponent, { Props } from './Message';

import './Message.css';

const Component = {
  title: 'Components/Molecules/Message',
  component: MessageComponent,
  argTypes: {},
};

const Template: Story<ComponentProps<typeof MessageComponent>> = (args) => {
  return <MessageComponent {...args} />;
};

export const Message = Template.bind({});
export default Component;

// https://storybook.js.org/docs/react/essentials/controls
Message.args = {
  text: 'TestText',
  buttonText: 'Play again',
} as Props;
