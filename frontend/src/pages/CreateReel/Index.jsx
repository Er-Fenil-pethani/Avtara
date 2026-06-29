import {
  useEffect,
  useState,
} from "react";

import api from
  "../../services/api";

function CreateReel() {
  const [products,
    setProducts] =
    useState([]);

  const [form,
    setForm] =
    useState({
      title: "",
      videoUrl: "",
      caption: "",
      productId: "",
    });

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts =
    async () => {
      const response =
        await api.get(
          "/products"
        );

      setProducts(
        response.data.data
      );
    };

  const submit =
    async (e) => {
      e.preventDefault();

      await api.post(
        "/reels",
        form
      );

      alert(
        "Reel Created"
      );
    };

  return (
    <form
      onSubmit={submit}
    >
      <input
        placeholder="Title"
        onChange={(e) =>
          setForm({
            ...form,
            title:
              e.target.value,
          })
        }
      />

      <br />
      <br />

      <input
        placeholder="Video URL"
        onChange={(e) =>
          setForm({
            ...form,
            videoUrl:
              e.target.value,
          })
        }
      />

      <br />
      <br />

      <textarea
        placeholder="Caption"
        onChange={(e) =>
          setForm({
            ...form,
            caption:
              e.target.value,
          })
        }
      />

      <br />
      <br />

      <select
        onChange={(e) =>
          setForm({
            ...form,
            productId:
              e.target.value,
          })
        }
      >
        <option>
          Select Product
        </option>

        {products.map(
          (product) => (
            <option
              key={
                product.id
              }
              value={
                product.id
              }
            >
              {
                product.name
              }
            </option>
          )
        )}
      </select>

      <br />
      <br />

      <button>
        Create Reel
      </button>
    </form>
  );
}

export default CreateReel;