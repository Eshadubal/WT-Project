import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Home from './Components/Home';
import Recipe from './Components/GetAll';
import DetailRecipe from './Components/GetById';
import AddRecipe from './Components/Post';  // New AddRecipe component

function App() {
    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">RecipeApp</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className='btn btn-primary' to="/add-recipe">Add Recipe</Link>
                </div>
            </nav>

            {/* Routes */}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/recipes' element={<Recipe />} />
                <Route path="/recipes/:id" element={<DetailRecipe />} />
                <Route path="/add-recipe" element={<AddRecipe />} /> {/* Route for adding a recipe */}
            </Routes>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
