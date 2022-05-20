import loadable from '@loadable/component';

import './Message.css';

export default loadable(() => {
  return import('./Message');
});
