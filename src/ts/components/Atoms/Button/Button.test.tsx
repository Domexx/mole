import React from 'react';
import { toJson } from '@test';
import renderer from 'react-test-renderer';
import Button from './Button';

test('Matches Snapshot', () => {
  const component = renderer.create(<Button>Anthony Fu</Button>);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
