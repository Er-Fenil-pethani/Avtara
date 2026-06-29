import { useState } from "react";

import ImageUploader from
  "../ImageUploader/ImageUploader";

import api from
  "../../services/api";

function ProductForm() {
  const [form,
    setForm] =
    useState({
      name: "",
      description: "",
      price: "",
      stock: "",
      imageUrl: "",
    });

  const handleChange =
    (e) => {
      setForm({
        ...form,
        [e.target.name]:
          e.target.value,
      });
    };

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      try {
        await api.post(
          "/products",
          form
        );

        alert(
          "Product Created"
        );
      } catch (
        error
      ) {
        console.error(
          error
        );
      }
    };

  return (
    <form
      onSubmit={
        handleSubmit
      }
    >
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={
          handleChange
        }
      />

      <br />
      <br />

      <textarea
        name="description"
        placeholder="Description"
        value={
          form.description
        }
        onChange={
          handleChange
        }
      />

      <br />
      <br />

      <input
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={
          handleChange
        }
      />

      <br />
      <br />

      <input
        name="stock"
        placeholder="Stock"
        value={form.stock}
        onChange={
          handleChange
        }
      />

      <br />
      <br />

      <ImageUploader
        onSuccess={(
          imageUrl
        ) =>
          setForm({
            ...form,
            imageUrl,
          })
        }
      />

      {form.imageUrl && (
        <img
          src={
            "http://localhost:5000" +
            form.imageUrl
          }
          alt="preview"
          width="150"
        />
      )}

      <br />
      <br />

      <button
        type="submit"
      >
        Create Product
      </button>
    </form>
  );
}

export default ProductForm;