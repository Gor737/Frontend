import type { CartItem } from "../types/cart";

type HeaderProps = {
  carts: CartItem[];
  isCartOpen: boolean;
  openCart: () => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};

function Header({
  carts,
  isCartOpen,
  openCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight text-gray-900">
          PinApple
        </div>

        {/* Search */}
        <div className="hidden w-96 md:block">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full rounded-full border border-gray-200 bg-gray-100 px-5 py-2.5 text-sm outline-none transition focus:border-gray-400 focus:bg-white"
          />
        </div>

        {/* User & Basket */}
        <div className="relative flex items-center gap-6">
          <button className="text-sm font-medium text-gray-700 transition hover:text-black">
            UserName
          </button>

          <button
            onClick={openCart}
            className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-800 active:scale-95"
          >
            Basket ({carts.length})
          </button>

          {isCartOpen && (
            <div className="absolute right-0 top-14 w-96 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
              {/* Cart header */}
              <div className="border-b border-gray-100 px-6 py-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Your Cart
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {carts.length} product(s)
                </p>
              </div>

              {/* Cart items */}
              <div className="max-h-96 overflow-y-auto">
                {carts.map(({ product, quantity }) => {
                  return (
                    <div
                      key={product.id}
                      className="border-b border-gray-100 p-5"
                    >
                      <div className="flex gap-4">
                        {/* Image */}
                        <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gray-100">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover"
                          />
                        </div>

                        {/* Product info */}
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <h3 className="truncate font-semibold text-gray-900">
                                {product.name}
                              </h3>

                              <p className="mt-1 text-sm text-gray-500">
                                {product.color}
                              </p>
                            </div>

                            <p className="font-semibold text-gray-900">
                              ${product.price * quantity}
                            </p>
                          </div>

                          {/* Quantity & Remove */}
                          <div className="mt-4 flex items-center justify-between">
                            <div className="flex items-center rounded-full border border-gray-200">
                              <button
                                onClick={() =>
                                  decreaseQuantity(product.id)
                                }
                                className="flex h-8 w-8 items-center justify-center text-gray-600 transition hover:bg-gray-100"
                              >
                                −
                              </button>

                              <span className="w-8 text-center text-sm font-medium">
                                {quantity}
                              </span>

                              <button
                                onClick={() =>
                                  increaseQuantity(product.id)
                                }
                                className="flex h-8 w-8 items-center justify-center text-gray-600 transition hover:bg-gray-100"
                              >
                                +
                              </button>
                            </div>

                            <button
                              onClick={() =>
                                removeFromCart(product.id)
                              }
                              className="text-sm font-medium text-red-500 transition hover:text-red-700"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Empty cart */}
              {carts.length === 0 && (
                <div className="px-6 py-12 text-center">
                  <p className="text-gray-500">Your cart is empty.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;