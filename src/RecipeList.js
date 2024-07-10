import React from "react";

function Recipe({ recipe, onDelete }) {
  return (
      <tr className="recipe">
        <td><img src={recipe.photo} alt={recipe.name} style={{width: '100px', height: '100px', objectFit: 'scale-down'}} /></td>
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td className="content_td"><p>{recipe.ingredients}</p></td>
        <td className="content_td"><p>{recipe.preparation}</p></td>
        <td><button name="delete" onClick={onDelete}>Delete</button></td>
      </tr>
  );
}

function RecipeList({ recipes, onDelete }) {
  return (
      <div className="recipe-list">
        <table>
          <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {recipes.map((recipe, index) => (
              <Recipe key={recipe.name} recipe={recipe} onDelete={() => onDelete(index)} />
          ))}
          </tbody>
        </table>
      </div>
  );
}

export default RecipeList;
