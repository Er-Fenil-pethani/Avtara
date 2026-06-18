import { useEffect, useState } from "react";
import {
  getInventories,
} from "../../services/inventory.service";

function InventoryPage() {
  const [inventories,
    setInventories] =
    useState([]);

  const loadInventory =
    async () => {
      try {
        const response =
          await getInventories();

        setInventories(
          response.data || []
        );
      } catch (error) {
        console.error(error);
      }
    };

  useEffect(() => {
    loadInventory();
  }, []);

  return (
    <div
      style={{
        padding: "30px",
      }}
    >
      <h1>Inventory</h1>

      {inventories.map(
        (item) => (
          <div
            key={item.id}
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
                item.product
                  ?.name
              }
            </h3>

            <p>
              Quantity:
              {" "}
              {
                item.quantity
              }
            </p>

            <p>
              Location:
              {" "}
              {
                item.location
              }
            </p>
          </div>
        )
      )}
    </div>
  );
}

export default InventoryPage;