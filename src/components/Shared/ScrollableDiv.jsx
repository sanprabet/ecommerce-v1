import React from 'react'

export default function ScrollableDiv({heightTailwind, children}) {
  return (
      <div className={ heightTailwind + " p-4 w-full overflow-y-scroll"}>
          {children}
      </div>
  );
}
