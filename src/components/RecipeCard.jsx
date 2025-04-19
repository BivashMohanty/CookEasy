import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  return (
    <div className="recipe-card" onClick={() => navigate(`/recipe/${recipe.id}`)}>
      <img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
    </div>
  );
};

export default RecipeCard;
