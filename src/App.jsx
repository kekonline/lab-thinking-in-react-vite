import "./App.css";
import { Typography } from "@mui/material";

import ProductsPage from "./components/ProductsPage";

function App() {
  return (
    <div className="App">
      <Typography variant="h2">React | Thinking in React</Typography>
      <ProductsPage />
    </div>
  );
}

export default App;
