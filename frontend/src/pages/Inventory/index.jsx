import { useState } from "react";

function InventoryPage() {
  const [products] = useState([
    {
      id: 1,
      name: "Oversized Hoodie",
      stock: 25,
    },
    {
      id: 2,
      name: "Cargo Pants",
      stock: 14,
    },
  ]);

  return (
    <div
      style={{
        padding: "30px",
      }}
    >
      <h1>Inventory</h1>

      <table
        style={{
          width: "100%",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Stock</th>
          </tr>
        </thead>

        <tbody>
          {products.map(
            (product) => (
              <tr key={product.id}>
                <td>
                  {product.id}
                </td>

                <td>
                  {product.name}
                </td>

                <td>
                  {product.stock}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default InventoryPage;