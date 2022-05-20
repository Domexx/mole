import loadable from '@loadable/component';

import './Circle.css';

export default loadable(() => {
  return import('./Circle');
});
