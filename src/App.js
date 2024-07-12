import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
    const [recipes, setRecipes] = useState(RecipeData);

    const createRecipe = (newRecipe) => {
        // Check if the newRecipe object is not empty
        const isNotEmpty = Object.values(newRecipe).some((value) => value.trim() !== "");

        if (isNotEmpty) {
            setRecipes([...recipes, newRecipe]);
        } else {
            console.log("Cannot create an empty recipe");
        }
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
