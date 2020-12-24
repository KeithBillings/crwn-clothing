import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "react-router-dom";

function MenuItem({ ...listOfProps }) {
  const { imageUrl, size, title, linkUrl, history, match } = listOfProps;

  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`menu-item ${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
