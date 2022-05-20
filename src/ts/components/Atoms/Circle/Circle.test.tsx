import React from 'react';
import { toJson } from '@test';
import renderer from 'react-test-renderer';
import Circle from './Circle';

test('Matches Snapshot', () => {
  const component = renderer.create(<Circle />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
