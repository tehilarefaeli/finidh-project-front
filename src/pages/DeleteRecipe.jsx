import React, { useState } from 'react';
import axios from 'axios'; // Import Axios library for making HTTP requests
import deleteRequset from '../helpers/deleteRequest'

function DeleteRecipe() {
    const [recipeName, setRecipeName] = useState('');

    const handleChange = (event) => {
        setRecipeName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        deleteRequset(`recipes/deleterecipe/${recipeName}`);
    };

    return (
        <div>
            <h2>Delete Recipe by Name</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="recipeName">Recipe Name:</label>
                <input
                    type="text"
                    id="recipeName"
                    value={recipeName}
                    onChange={handleChange}
                />
                <button type="submit">Delete Recipe</button>
            </form>
        </div>
    );
}

export default DeleteRecipe;
