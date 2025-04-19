import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchRecipes } from "../api";
import RecipeCard from "../components/RecipeCard";

const ResultsScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const ingredients = queryParams.get("ingredients")?.split(",") || [];

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
    <div className="container">
      <h2>Recipes for: {ingredients.join(", ")}</h2>
      
      {recipes.length > 0 ? (
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p>No recipes found. Try adding more ingredients.</p>
      )}

      <button onClick={() => navigate("/search")}>Back to Search</button>
    </div>
  );
};

export default ResultsScreen;
