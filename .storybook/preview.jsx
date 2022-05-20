import React from 'react';
import { addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { withPerformance } from 'storybook-addon-performance';
import '../src/css/main.css';

addDecorator(withPerformance);
addDecorator((story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);

export const parameters = {
  layout: 'fullscreen',
};
