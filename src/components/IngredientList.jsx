const IngredientList = ({ ingredients, onRemoveIngredient }) => {
  return (
    <div className="ingredient-list">
      {ingredients.map((item, index) => (
        <div key={index} className="ingredient-tag">
          {item}
          <span onClick={() => onRemoveIngredient(item)}>&times;</span>
        </div>
      ))}
    </div>
  );
};

export default IngredientList;
