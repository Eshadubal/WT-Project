import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './recipe.css';

function Recipe() {
    const location = useLocation();
    const { recipes } = location.state || { recipes: [] }; // Default to empty array if no data

    if (!recipes.length) {
        return <div>No recipes found.</div>; // Handle case where there are no recipes
    }

    const Rec = recipes.map((r) => {
        return (
            <div className="col-md-4 mb-4" key={r.id}>
                <div className="card" style={{ width: "100%" }}>
                    <img src={r.image} className="card-img-top fixed-image" alt={r.title} />
                    <div className="card-body">
                        <h5 className="card-title">{r.title}</h5>
                        {/* Link to the detail view of the recipe */}
                        <Link to={`/recipes/${r.id}`} className="btn btn-primary">Read More</Link>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {Rec}
            </div>
        </div>
    );
}

export default Recipe;
