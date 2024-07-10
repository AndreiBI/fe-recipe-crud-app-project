import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
    const [recipes, setRecipes] = useState(RecipeData);

    const createRecipe = (newRecipe) => {
        setRecipes([...recipes, newRecipe]);
    };

    const deleteRecipe = (indexToDelete) => {
        setRecipes(recipes.filter((recipe, index) => index !== indexToDelete));
    };

    return (
        <div className="App">
            <header>
                <h1 style={{fontFamily: 'Playfair Display SC', fontSize: '64px', textAlign: 'center'}}>Delicious Food Recipes</h1>
            </header>
            <RecipeList recipes={recipes} onDelete={deleteRecipe} />
            <RecipeCreate onCreate={createRecipe} />
        </div>
    );
}

export default App;
