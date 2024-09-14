// Tooltip.js
import React, { useState } from 'react';

const Tooltip = ({ children, content }) => {
  
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {children}
      </div>
      {visible && (
        <div className="absolute -top-full left-1/2 -translate-x-1/2 rounded-md p-1.5 px-4 font-medium
         text-black text-[10px] whitespace-nowrap bg-blue-100">
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
