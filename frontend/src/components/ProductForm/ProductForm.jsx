import { useState } from "react";
import {
  createProduct,
} from "../../services/product.service";

function ProductForm({
  onCreated,
}) {
  const [form, setForm] =
    useState({
      name: "",
      description: "",
      price: "",
      stock: "",
      brandId: "",
    });

  const handleChange = (
    e
  ) => {
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
        await createProduct({
          ...form,
          price:
            Number(
              form.price
            ),
          stock:
            Number(
              form.stock
            ),
        });

        setForm({
          name: "",
          description:
            "",
          price: "",
          stock: "",
          brandId: "",
        });

        if (onCreated) {
          onCreated();
        }
      } catch (error) {
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
      style={{
        display: "flex",
        flexDirection:
          "column",
        gap: "10px",
        marginBottom:
          "30px",
      }}
    >
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={
          handleChange
        }
      />

      <input
        name="description"
        placeholder="Description"
        value={
          form.description
        }
        onChange={
          handleChange
        }
      />

      <input
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={
          handleChange
        }
      />

      <input
        name="stock"
        placeholder="Stock"
        value={form.stock}
        onChange={
          handleChange
        }
      />

      <input
        name="brandId"
        placeholder="Brand Id"
        value={
          form.brandId
        }
        onChange={
          handleChange
        }
      />

      <button
        type="submit"
      >
        Create Product
      </button>
    </form>
  );
}

export default ProductForm;