import { useState } from "react";
import type { Product } from "./types/product";
import type { CartItem } from "./types/cart";
import ProductList from "./components/ProductList";
import Header from "./components/Header";

function App() {
  const [products, setProducts] = useState<Product[]>([
  {
    id: 1,
    name: "pPhone 17 Pro",
    price: 1199,
    image:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd",
    color: "Black",
  },
  {
    id: 2,
    name: "pPhone 17",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    color: "Silver",
  },
  {
    id: 3,
    name: "pBook Air",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    color: "Silver",
  },
  {
    id: 4,
    name: "pBook Pro",
    price: 1999,
    image:
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef",
    color: "Space Gray",
  },
  {
    id: 5,
    name: "pPad Pro",
    price: 1099,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
    color: "Space Gray",
  },
  {
    id: 6,
    name: "pPad Air",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1561154464-82e9adf32764",
    color: "Blue",
  },
  {
    id: 7,
    name: "pWatch Ultra",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
    color: "Titanium",
  },
  {
    id: 8,
    name: "pWatch Series 11",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d",
    color: "Black",
  },
  {
    id: 9,
    name: "pPods Pro",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1",
    color: "White",
  },
  {
    id: 10,
    name: "pPods Max",
    price: 549,
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
    color: "Silver",
  },
]);

  const [carts, setCart] = useState<CartItem[]>([]);
  const addToCart = (product: Product): void => {
    setCart((prevCart) => {
      const cart = prevCart.find((cart) => cart.product.id === product.id);
      if (cart) {
        const newCarts = prevCart.map((cart) => {
          if (cart.product.id === product.id) {
            return {
              product: cart.product,
              quantity: cart.quantity + 1,
            };
          } else return cart;
        });
        return newCarts;
      } else {
        const newCarts = [
          ...prevCart,
          {
            product: product,
            quantity: 1,
          },
        ];
        return newCarts;
      }
    });
  };

  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const openCart = (): void => {
    setIsCartOpen(!isCartOpen);
  };

  //Actions
  const increaseQuantity = (id: number): void => {
    setCart((prevCart) => {
      const newCarts = prevCart.map((cart) => {
        if (cart.product.id === id) {
          return {
            product: cart.product,
            quantity: cart.quantity + 1,
          };
        } else return cart;
      });
      return newCarts;
    });
  };

  const decreaseQuantity = (id: number): void => {
    setCart((prevCart) => {
      const newCarts = prevCart.map((cart) => {
        if (cart.product.id === id) {
          return {
            product: cart.product,
            quantity: cart.quantity !== 1 ? cart.quantity - 1 : cart.quantity,
          };
        } else return cart;
      });
      return newCarts;
    });
  };

  const removeFromCart = (id: number): void => {
    setCart((prevCart) => {
      const newCarts = prevCart.filter((cart) => cart.product.id !== id);
      return newCarts;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        carts={carts}
        isCartOpen={isCartOpen}
        openCart={openCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeFromCart={removeFromCart}
      />

      <main className="mx-auto max-w-7xl px-6 py-12">
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Discover Apple
          </h1>

          <p className="mt-3 text-lg text-gray-500">
            Premium technology. Beautifully simple.
          </p>
        </section>

        <ProductList products={products} addToCart={addToCart} />
      </main>
    </div>
  );
}

export default App;
