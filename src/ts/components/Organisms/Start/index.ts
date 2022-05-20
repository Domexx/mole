import loadable from '@loadable/component';

import './Start.css';

export default loadable(() => {
  return import('./Start');
});
