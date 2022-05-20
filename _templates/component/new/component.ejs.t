---
to: src/ts/components/<%=type%>/<%=name%>/<%=name%>.tsx
unless_exists: true
---
import React from 'react';

<% if (hasProps) { -%>
export type Props = {};
<% } -%>

const <%=name%>: React.FC<% if (hasProps) { -%><Props><% } -%> = () => {
  return (
    <div className="<%=name%>" data-testid="<%=name%>">

    </div>
  );
};

export default <%=name%>;
