---
to: src/ts/components/<%=type%>/<%=name%>/<%=name%>.stories.tsx
unless_exists: true
---
import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import <%=name%>Component<% if (hasProps) { -%>, { Props }<% } -%> from './<%=name%>';

const Component = {
  title: 'Components/<%=name%>',
  component: <%=name%>Component,
  argTypes: {},
};

const Template: Story<ComponentProps<typeof <%=name%>Component>> = (args) => {
  return <<%=name%>Component {...args} />;
};

export const <%=name%> = Template.bind({});
export default Component;

<% if (hasProps) { -%>
// https://storybook.js.org/docs/react/essentials/controls
<%=name%>.args = {} as Props;<% } 
-%>
