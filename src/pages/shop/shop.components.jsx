import React from "react";
import "./shop.data";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/preview-collection/collection-preview.components";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {collections.map(({ id, ...othercollections }) => (
          <CollectionPreview key={id} {...othercollections} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
