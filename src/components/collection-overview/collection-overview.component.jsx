import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../preview-collection/collection-preview.components";

const CollectionOverview = ({ collections }) => {
  console.log("collections", collections)
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...othercollections }) => (
        <CollectionPreview key={id} {...othercollections} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
