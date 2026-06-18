import { useEffect, useState } from "react";
import {
  getOrders,
} from "../../services/orders.service";

function OrdersPage() {
  const [orders,
    setOrders] =
    useState([]);

  const loadOrders =
    async () => {
      try {
        const response =
          await getOrders();

        setOrders(
          response.data || []
        );
      } catch (error) {
        console.error(error);
      }
    };

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <div
      style={{
        padding: "30px",
      }}
    >
      <h1>Orders</h1>

      {orders.map(
        (order) => (
          <div
            key={order.id}
            style={{
              border:
                "1px solid #ddd",
              padding: "20px",
              marginBottom:
                "10px",
            }}
          >
            <h3>
              {
                order.product
                  ?.name
              }
            </h3>

            <p>
              Quantity:
              {" "}
              {
                order.quantity
              }
            </p>

            <p>
              ₹
              {
                order.totalAmount
              }
            </p>

            <p>
              {
                order.status
              }
            </p>
          </div>
        )
      )}
    </div>
  );
}

export default OrdersPage;