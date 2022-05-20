---
to: src/ts/components/<%=type%>/<%=name%>/<%=name%>.test.tsx
unless_exists: true
---
import React from 'react';
import { toJson } from '@test';
import renderer from 'react-test-renderer';
import <%=name%> from './<%=name%>';

test('Matches Snapshot', () => {
  const component = renderer.create(<<%=name%> />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
