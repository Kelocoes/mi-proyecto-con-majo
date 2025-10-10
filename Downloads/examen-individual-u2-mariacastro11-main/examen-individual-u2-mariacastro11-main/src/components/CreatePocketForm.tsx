import { useState } from "react";
import { usePockets } from "../context/PocketsContext";

export default function CreatePocketForm() {
  const [name, setName] = useState("");
  const { createPocket } = usePockets();

  return (
    <form
      className="flex gap-2 items-end"
      onSubmit={(e) => {
        e.preventDefault();
        if (!name.trim()) return;
        createPocket(name.trim());
        setName("");
      }}
    >
      <label className="form-control">
        <span className="label-text">Nombre del bolsillo</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input input-bordered"
          placeholder="Ej: Renta, Comida..."
        />
      </label>
      <button className="btn btn-primary">Crear</button>
    </form>
  );
}
