import React from 'react'

import "./styles/ScrollableDiv.scss";

export default function ScrollableDiv({heightTailwind, children}) {
  return (
      <div className={ heightTailwind + " p-4 w-full overflow-y-scroll"}>
          {children}
      </div>
  );
}
