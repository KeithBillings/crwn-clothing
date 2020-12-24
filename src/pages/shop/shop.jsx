import React, { useState } from "react";
import SHOP_DATA from "../../utils/shop.data";
// import { withRouter } from "react-router-dom";

function ShopPage() {
  const [shopData, setShopData] = useState(SHOP_DATA);
  return <div>SHOP PAGE</div>;
}

export default ShopPage;
