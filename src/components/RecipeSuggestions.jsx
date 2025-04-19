import { useEffect, useState } from "react";
import { fetchRecipes } from "../api";
import RecipeCard from "./RecipeCard";

const RecipeSuggestions = ({ ingredients }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      if (ingredients.length > 0) {
        const data = await fetchRecipes(ingredients.join(","));
        setRecipes(data);
      }
    };
    getRecipes();
  }, [ingredients]);

  return (
    <div>
      <h2>Suggested Recipes</h2>
      {recipes.length > 0 ? (
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p>No recipes found. Try adding more ingredients.</p>
      )}
    </div>
  );
};

export default RecipeSuggestions;
