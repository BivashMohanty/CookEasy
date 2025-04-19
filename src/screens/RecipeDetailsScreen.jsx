import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchRecipeDetails } from "../api";

const RecipeDetailsScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const getRecipeDetails = async () => {
      const data = await fetchRecipeDetails(id);
      setRecipe(data);
    };
    getRecipeDetails();
  }, [id]);

  return (
    <div className="container">
      {recipe ? (
        <>
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} width="200" />
          
          <h3>Ingredients:</h3>
          <ul>
            {recipe.extendedIngredients.map((item) => (
              <li key={item.id}>{item.original}</li>
            ))}
          </ul>
          
          <h3>Instructions:</h3>
          <p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
          
          <button onClick={() => navigate(-1)}>Go Back</button>
        </>
      ) : (
        <p>Loading recipe...</p>
      )}
    </div>
  );
};

export default RecipeDetailsScreen;
