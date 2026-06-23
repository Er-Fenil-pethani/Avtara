import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

import api from "../../services/api";

function ShopDetails() {
  const { id } =
    useParams();

  const [shop,
    setShop] =
    useState(null);

  useEffect(() => {
    fetchShop();
  }, []);

  const fetchShop =
    async () => {
      try {
        const response =
          await api.get(
            `/brands/${id}`
          );

        setShop(
          response.data.data
        );
      } catch (error) {
        console.error(error);
      }
    };

  if (!shop)
    return <h2>Loading...</h2>;

  return (
    <div
      style={{
        padding: "30px",
      }}
    >
      <h1>
        {shop.name}
      </h1>

      <p>
        {
          shop.description
        }
      </p>

      <h2>
        Products
      </h2>

      {shop.products?.map(
        (product) => (
          <div
            key={
              product.id
            }
          >
            <h3>
              {
                product.name
              }
            </h3>

            <p>
              ₹
              {
                product.price
              }
            </p>
          </div>
        )
      )}
    </div>
  );
}

export default ShopDetails;