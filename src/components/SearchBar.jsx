import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { Icon, Typography } from "@mui/material";

import { useState, useEffect } from "react";
function SearchBar({ setProducts, mainProductsList }) {
  const [search, setSearch] = useState("");
  const [inSock, setInSock] = useState(true);

  useEffect(() => {
    const filteredProducts = mainProductsList.filter((eachProduct) => {
      // console.log(eachProduct.name.toLowerCase());
      return eachProduct.name.toLowerCase().startsWith(search.toLowerCase()) ===
        true && eachProduct.inStock === inSock
        ? true
        : false;
    });
    // console.log(inSock);
    setProducts(filteredProducts);
  }, [inSock]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    // console.log(search);
    // console.log(mainProductsList);

    const filteredProducts = mainProductsList.filter((eachProduct) => {
      // console.log(eachProduct.name.toLowerCase());
      return eachProduct.name
        .toLowerCase()
        .startsWith(event.target.value.toLowerCase()) === true &&
        eachProduct.inStock === inSock
        ? true
        : false;
    });
    // console.log(inSock);
    setProducts(filteredProducts);
  };

  return (
    <div>
      <br />
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "flex-end",
          gap: "20px",
        }}
      >
        <br />
        <SearchIcon fontSize="large"></SearchIcon>
        <TextField
          color="primary"
          id="standard-basic"
          label="Search"
          variant="standard"
          type="text"
          onChange={handleSearch}
          value={search}
        />

        <Typography variant="p">
          <label htmlFor="search">In Stock: </label>
          <Checkbox
            type="checkbox"
            onChange={() => {
              setInSock(!inSock);
            }}
            value={inSock}
          />{" "}
        </Typography>
      </form>
    </div>
  );
}

export default SearchBar;
