import { Grid2 } from "@mui/material";
import ProductCard from "./ProductCard";

function ProductList({ products, loading }) {
  return (
    <Grid2 container spacing={2} mt={1}>
      {products.map((product, index) => (
        <Grid2 key={product.id} item xs={6} md={4} lg={3}>
          <ProductCard product={product} />
        </Grid2>
      ))}
    </Grid2>
  );
}

export default ProductList;
