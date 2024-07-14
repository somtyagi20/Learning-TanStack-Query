import React, { useState } from "react";
import { addfruit } from "../services/mutation"; // Adjust the import path as needed

export default function AddFruitForm() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState<number | string>("");

  const mutation = addfruit();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ id: 0, title, price: Number(price) });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
        <button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? "Adding Fruit..." : "Add Fruit"}
        </button>
      </form>
      {mutation.isPending && <p>Adding fruit...</p>}
      {mutation.isError && <p>Error adding fruit</p>}
      {mutation.isSuccess && <p>Fruit added successfully</p>}
    </div>
  );
}
