// src/components/ProductsPage.jsx

import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { Typography } from "@mui/material";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [mainProductsList, setMainProductsList] = useState(jsonData);

  return (
    <div>
      <br />
      <Typography variant="h3">IronStore</Typography>
      <SearchBar
        setProducts={setProducts}
        mainProductsList={mainProductsList}
      />
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;
