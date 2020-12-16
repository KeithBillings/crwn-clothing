import React from "react";
import "./menu-item.styles.scss";

function MenuItem({ title, key, imageUrl, size}) {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className={`menu-item ${size}`}
    >
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;
