import { useState } from "react";
import IngredientInput from "../components/IngredientInput";
import IngredientList from "../components/IngredientList";
import RecipeSuggestions from "../components/RecipeSuggestions";
import "../styles/SearchScreen.css";

const SearchScreen = () => {
  const [ingredients, setIngredients] = useState([]);

  // Add ingredient to the list
  const addIngredient = (ingredient) => {
    if (!ingredients.includes(ingredient)) {
      setIngredients((prev) => [...prev, ingredient]);
    }
  };

  // Remove ingredient from the list
  const removeIngredient = (ingredient) => {
    setIngredients((prev) => prev.filter((item) => item !== ingredient));
  };

  return (
    <div className="search-layout">
      {/* Left Section: Input + List + Suggestions */}
      <div className="search-content">
        <h2>Enter Ingredients</h2>
        <IngredientInput onAddIngredient={addIngredient} />
        <IngredientList ingredients={ingredients} onRemoveIngredient={removeIngredient} />
        <RecipeSuggestions ingredients={ingredients} />
      </div>

      {/* Right Section: Image */}
      <div className="search-image">
        <img
          src="https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98="
          alt="Delicious food"
        />
      </div>
    </div>
  );
};

export default SearchScreen;
