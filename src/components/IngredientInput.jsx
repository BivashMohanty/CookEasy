import { useState } from "react";

const IngredientInput = ({ onAddIngredient }) => {
  const [ingredient, setIngredient] = useState("");

  const handleAdd = () => {
    if (ingredient.trim()) {
      onAddIngredient(ingredient);
      setIngredient(""); // Clear input after adding
    }
  };

  return (
    <div className="ingredient-input">
      <input
        type="text"
        placeholder="Enter an ingredient..."
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default IngredientInput;


