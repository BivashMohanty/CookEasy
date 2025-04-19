import axios from "axios";

const API_KEY = ""; 
const BASE_URL = "https://api.spoonacular.com/recipes";

export const fetchRecipes = async (ingredients) => {
  try {
    const response = await axios.get(`${BASE_URL}/findByIngredients`, {
      params: {
        ingredients: ingredients,
        number: 10, // Number of recipes to fetch
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};

export const fetchRecipeDetails = async (recipeId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${recipeId}/information`, {
      params: { apiKey: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching recipe details:", error);
    return null;
  }
};
