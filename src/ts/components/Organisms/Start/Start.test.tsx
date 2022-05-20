import React from 'react';
import { toJson } from '@test';
import renderer from 'react-test-renderer';
import Start from './Start';

test('Matches Snapshot', () => {
  const component = renderer.create(<Start />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
