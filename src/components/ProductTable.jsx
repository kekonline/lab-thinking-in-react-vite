import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import ProductRow from "./ProductRow";

function ProductTable({ products }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "flex-end",
        gap: "20px",
      }}
    >
      <br />
      <Paper sx={{ width: "500px" }}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={2}>
                  First
                </TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((eachProduct) => {
                return (
                  <TableRow key={Math.random() * 100000}>
                    <ProductRow
                      name={eachProduct.name}
                      price={eachProduct.price}
                    />
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

export default ProductTable;
