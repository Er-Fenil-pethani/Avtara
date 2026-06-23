import {
  useEffect,
  useState,
} from "react";

import {
  getCart,
} from "../../services/cart.service";

function Cart() {
  const [cart,
    setCart] =
    useState([]);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart =
    async () => {
      try {
        const response =
          await getCart();

        setCart(
          response.data || []
        );
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <div
      style={{
        padding: "30px",
      }}
    >
      <h1>
        Cart
      </h1>

      {cart.map(
        (item) => (
          <div
            key={item.id}
          >
            <h3>
              {
                item.product
                  ?.name
              }
            </h3>

            <p>
              Qty:
              {" "}
              {
                item.quantity
              }
            </p>
          </div>
        )
      )}
    </div>
  );
}

export default Cart;