import loadable from '@loadable/component';

import './Game.css';

export default loadable(() => {
  return import('./Game');
});
