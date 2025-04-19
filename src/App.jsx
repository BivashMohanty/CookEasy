
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import ResultsScreen from "./screens/ResultsScreen";
import RecipeDetailsScreen from "./screens/RecipeDetailsScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/results" element={<ResultsScreen />} />
        <Route path="/recipe/:id" element={<RecipeDetailsScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
