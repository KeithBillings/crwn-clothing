import React, { useState } from "react";
// import { withRouter } from "react-router-dom";

// Components
import SHOP_DATA from "../../utils/shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

function ShopPage() {
  const [shopData, setShopData] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {shopData.map(({ id, ...collecitonProps }) => {
        return <CollectionPreview key={id} {...collecitonProps} />;
      })}
    </div>
  );
}

export default ShopPage;
