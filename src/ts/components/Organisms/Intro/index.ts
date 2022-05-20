import loadable from '@loadable/component';

import './Intro.css';

export default loadable(() => {
  return import('./Intro');
});
