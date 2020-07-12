import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.components";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({id, ...otheritems}) => (
            <CollectionItem key={id} {...otheritems}/>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
