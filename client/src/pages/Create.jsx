import React, { useState } from 'react';
import '../styles/Create.css';

const Create = () => {
    const [ingredients, setIngredients] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [prepTime, setPrepTime] = useState('');
    const [servings, setServings] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleGenerateRecipe = () => {
        setLoading(true);

        // Simulate recipe generation
        setTimeout(() => {
            setRecipe({
                ingredients: ingredients.split(',').map(ing => ing.trim()),
                cuisine,
                prepTime,
                servings,
                difficulty,
            });
            setLoading(false);
        }, 2000);
    };

    return (
        <div className="container">
            <h1 className="title">Recipe Generator</h1>
            <form className="form">
                <div className="input-container">
                    <label htmlFor='Ingredients' className="label">Ingredients</label>
                    <input
                        id="Ingredients"
                        type="text"
                        placeholder="Ingredients (comma separated)"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        className="input"
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="cuisine" className="label">Cuisine</label>
                    <select
                        id="cuisine"
                        value={cuisine}
                        onChange={(e) => setCuisine(e.target.value)}
                        className="input"
                    >
                        <option value="Italian">Italian</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Mexican">Mexican</option>
                        <option value="Indian">Indian</option>
                        <option value="American">American</option>
                    </select>
                </div>
                <div className='input-container'>
                    <label htmlFor="prepTime" className="label">Preparation Time</label>
                    <input
                        id="prepTime"
                        type="number"
                        placeholder="Preparation Time (minutes)"
                        value={prepTime}
                        onChange={(e) => setPrepTime(e.target.value)}
                        className="input"
                    />
                </div>
                <div>
                    <div className='input-container'>
                        <label htmlFor="servings" className="label">Servings</label>
                        <input
                            id='servings'
                            type="number"
                            placeholder="Servings"
                            value={servings}
                            onChange={(e) => setServings(e.target.value)}
                            className="input"
                        />
                    </div>
                </div>
                <div className="input-container">
                    <label htmlFor="difficulty" className="label">Difficulty</label>
                    <select
                        id="difficulty"
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                        className="input"
                    >
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
                <button type="button" onClick={handleGenerateRecipe} className="button" disabled={loading}>
                    {loading ? 'Generating...' : 'Generate Recipe'}
                </button>
            </form>

            {recipe && (
                <div className="recipe">
                    <h2 className="subtitle">Your Recipe:</h2>
                    {recipe.image && <img src={recipe.image} alt={recipe.name} className="recipe-image" />}
                    <p className="text"><strong>Name:</strong> {recipe.name}</p>
                    <p className="text"><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
                    <p className="text"><strong>Cuisine:</strong> {recipe.cuisine}</p>
                    <p className="text"><strong>Preparation Time:</strong> {recipe.prepTime} minutes</p>
                    <p className="text"><strong>Servings:</strong> {recipe.servings}</p>
                    <p className="text"><strong>Difficulty:</strong> {recipe.difficulty}</p>
                </div>
            )}
        </div>
    );
};

export default Create;
