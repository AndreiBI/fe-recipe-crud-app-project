import React, { useState } from "react";

function RecipeCreate({ onCreate }) {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ name, cuisine, photo, ingredients, preparation });
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };

  return (
      <form name="create" onSubmit={handleSubmit}>
        <table>
          <tbody>
          <tr>
            <td><input name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" /></td>
            <td><input name="cuisine" value={cuisine} onChange={(e) => setCuisine(e.target.value)} placeholder="Cuisine" /></td>
            <td><input name="photo" value={photo} onChange={(e) => setPhoto(e.target.value)} placeholder="Photo URL" /></td>
            <td><textarea name="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder="Ingredients" /></td>
            <td><textarea name="preparation" value={preparation} onChange={(e) => setPreparation(e.target.value)} placeholder="Preparation" /></td>
            <td><button type="submit">Create</button></td>
          </tr>
          </tbody>
        </table>
      </form>
  );
}

export default RecipeCreate;
