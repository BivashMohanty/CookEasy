import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/HomeScreen.css";

const HomeScreen = () => {
  const navigate = useNavigate();
  const [search] = useState(""); 

  const handleSearch = () => {
    const query = search.trim() || "default"; 
    navigate(`/search?query=${query}`);
  };

  const categories = [
    "🍕 Italian", "🥡 Chinese", "🍱 Japanese", "🍔 American", "🥗 Mediterranean", "🥬 Vegan", "🥩 Keto Friendly",
    "🌮 Mexican", "🍰 Desserts", "🇮🇳 Indian", "🍛 Thai", "🥖 French", "🥣 Healthy Bowls", "🍜 Ramen", "🍹 Beverages",
    "🍖 BBQ & Grill", "🥞 Breakfast", "🍗 Fried Chicken", "🍞 Bakery", "🥗 Salads"
  ];

  return (
    <div className="homepage">
      {/* Navbar */}
      <header className="navbar">
        <h1 className="logo">🍽 CookEasy</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#recipes">Recipes</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Discover Delicious Meals in Seconds</h2>
          <p>Find meal ideas based on your ingredients, mood, or cravings!</p>
          <div className="search-box">
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="categories">
        <h2>Explore Popular Categories</h2>
        <div className="category-grid">
          {categories.map((cat, idx) => (
            <div key={idx} className="category-tag">{cat}</div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
