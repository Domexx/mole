import type { ReactTestRenderer, ReactTestRendererJSON } from 'react-test-renderer';

export const toJson = (component: ReactTestRenderer) => {
  const result = component.toJSON();

  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);

  return result as ReactTestRendererJSON;
};
