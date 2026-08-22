import type { Product } from "../types/product";

type ProductCardProps = {
  product: Product;
  addToCart: (product: Product) => void;
};

function ProductCard({ product, addToCart }: ProductCardProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product image */}
      <div className="flex h-64 items-center justify-center bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Product information */}
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">
            {product.name}
          </h2>

          <span className="text-sm text-gray-500">{product.color}</span>
        </div>

        <p className="mb-6 text-2xl font-bold text-gray-900">
          ${product.price}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="w-full rounded-full bg-black px-5 py-3 font-medium text-white transition hover:bg-gray-800 active:scale-95"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
