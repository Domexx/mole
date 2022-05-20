import React from 'react';
import { toJson } from '@test';
import renderer from 'react-test-renderer';
import Intro from './Intro';

test('Matches Snapshot', () => {
  const component = renderer.create(<Intro />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
