import React from 'react';
import { toJson } from '@test';
import renderer from 'react-test-renderer';
import Message from './Message';

test('Matches Snapshot', () => {
  const component = renderer.create(<Message text="TestText" buttonText="TestText" />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
