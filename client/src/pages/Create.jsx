import React, { useState } from 'react';
import '../styles/Create.css';
import generateContent from '../data/generate';

const Create = () => {
    const [ingredients, setIngredients] = useState('');
    const [cuisine, setCuisine] = useState('Italian');
    const [prepTime, setPrepTime] = useState('');
    const [servings, setServings] = useState('');
    const [difficulty, setDifficulty] = useState('Easy');
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleGenerateRecipe = async () => {
        setLoading(true);

        try {
            const interResult = await generateContent(ingredients, cuisine, prepTime, difficulty, servings);
            const result = JSON.parse(interResult.replace(/^```json\s*([\s\S]*?)\s*```$/g, '$1'));

            setRecipe({
                name: result.name,
                ingredients: result.ingredients,
                instructions: result.instructions,
                prepTime: result.prepTime,
                servings: result.servingSize,
                difficulty: difficulty
            });
        } catch (error) {
            console.error('Error generating recipe:', error);
        } finally {
            setLoading(false);
        }
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
                    <h2 className="subtitle">Your Recipe: {recipe.name}</h2>
                    <p className="text"><strong>Preparation Time:</strong> {recipe.prepTime}</p>
                    <p className="text"><strong>Servings:</strong> {recipe.servings}</p>
                    <p className="text"><strong>Difficulty:</strong> {recipe.difficulty}</p>
                    <p className="text"><strong>Ingredients:</strong> <ul>{recipe.ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)}</ul></p>
                    <p className="text"><strong>Instructions:</strong> <ol>{recipe.instructions.map((inst, idx) => <li key={idx}>{inst}</li>)}</ol></p>
                </div>
            )}
        </div>
    );
};

export default Create;
