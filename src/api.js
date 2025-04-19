import axios from "axios";

const API_KEY = "2c00df8dc5da4bb2a6900aa134ffe0f0"; 
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
