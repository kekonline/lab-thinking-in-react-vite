import { TableCell } from "@mui/material";

function ProductRow({ name, price }) {
  return (
    <>
      <TableCell align="center" colSpan={2}>
        {name}
      </TableCell>
      <TableCell> {price}</TableCell>
    </>
  );
}

export default ProductRow;
