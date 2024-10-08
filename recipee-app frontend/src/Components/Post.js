import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Post.css';

function AddRecipe() {
  const [newRecipe, setNewRecipe] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    imageUrl: '',
    youtubeUrl: ''
  });

  const navigate = useNavigate();  // To navigate back after adding the recipe

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe({ ...newRecipe, [name]: value });
  };

  // Post API request to submit the recipe
  const postApi = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRecipe),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Recipe added:', data);
        navigate('/recipes');  // Navigate back to the list of recipes after submission
      })
      .catch(error => console.error('Error adding recipe:', error));
  };

  return (
    <div className="container">
      <h2>Add a New Recipe</h2>
      <form onSubmit={postApi}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Recipe Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={newRecipe.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ingredients" className="form-label">Ingredients</label>
          <textarea
            className="form-control"
            id="ingredients"
            name="ingredients"
            value={newRecipe.ingredients}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="instructions" className="form-label">Instructions</label>
          <textarea
            className="form-control"
            id="instructions"
            name="instructions"
            value={newRecipe.instructions}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label">Image URL</label>
          <input
            type="text"
            className="form-control"
            id="imageUrl"
            name="imageUrl"
            value={newRecipe.imageUrl}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="youtubeUrl" className="form-label">YouTube URL</label>
          <input
            type="text"
            className="form-control"
            id="youtubeUrl"
            name="youtubeUrl"
            value={newRecipe.youtubeUrl}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit Recipe</button>
      </form>
    </div>
  );
}

export default AddRecipe;
