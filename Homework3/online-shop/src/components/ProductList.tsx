import type { Product } from "../types/product";
import ProductCard from "./ProductCard";

type ProductListProps = {
  products: Product[];
  addToCart: (product: Product) => void;
};

function ProductList(props: ProductListProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {props.products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={props.addToCart}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
