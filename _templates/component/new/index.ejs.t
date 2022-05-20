---
to: src/ts/components/<%=type%>/<%=name%>/index.ts
unless_exists: true
---
import loadable from '@loadable/component';

import './<%=name%>.css';

export default loadable(() => {
  return import('./<%=name%>');
});
