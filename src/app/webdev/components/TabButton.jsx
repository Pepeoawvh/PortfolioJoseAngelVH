import React from "react";

const TabButton = ({ active, selectTab, children }) => (
  <button
    onClick={selectTab}
    className={`pb-3 text-sm font-medium tracking-wide transition-colors duration-200 border-b-2 -mb-px mr-6 ${
      active
        ? "text-[#2ecc71] border-[#2ecc71]"
        : "text-gray-500 border-transparent hover:text-gray-300"
    }`}
  >
    {children}
  </button>
);

export default TabButton;
