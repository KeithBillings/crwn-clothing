import React, { useState } from "react";
import MenuItem from "../menu-item/menu-item";
import "./directory.styles.scss";
import SECTIONS_DATA from "../../utils/sections.data.js";

function Directory() {
  const [sections, setSections] = useState(SECTIONS_DATA);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...listOfProps }) => (
        <MenuItem key={id} {...listOfProps} />
      ))}
    </div>
  );
}

export default Directory;
