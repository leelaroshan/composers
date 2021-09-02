import React from "react";
import Composers from "./Composers";

function ComposerGrid({ items }) {
  return (
    <div className="cards">
      {items.map((item) => (
        <Composers key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ComposerGrid;
