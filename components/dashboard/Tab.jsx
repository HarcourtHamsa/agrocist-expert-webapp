import React from "react";

function Tab({ label, onClick, activeTab }) {
  let className = "tab-list-item";

  if (activeTab === label) {
    className += " tab-list-active";
  }
  return (
    <li className={className} onClick={onClick}>
      {label}
    </li>
  );
}

export default Tab;
