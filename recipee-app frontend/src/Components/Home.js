import React from 'react';
import './Home.css';  // Import external CSS
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleStartNow = () => {
        const apiUrl = "http://localhost:8080/recipes";

        fetch(apiUrl, { method: "GET" })
            .then(res => res.json())
            .then(data => {
                // Navigate to the /recipes route and pass the fetched data
                navigate('/recipes', { state: { recipes: data } });
            })
            .catch(err => {
                console.error("Error fetching recipes:", err);
            });
    };

    return (
        <div className="home-container">
            {/* Full-screen background image */}
            <img 
                src="https://img.freepik.com/free-photo/food-ingredients-making-autumn-pumpkin-pie-white-stone-background-homemade-baking-concept-top-view-copy-space_127032-3000.jpg?w=996&t=st=1727513914~exp=1727514514~hmac=8bbb0d62789de8c0263ce398adc57213ff399866162b8640bdeee19a4379e4c2" 
                alt="Full Screen Width Image" 
                className="background-image"
            />

            {/* Welcome text */}
            <h1 className="welcome-text">Discover Delicious Recipes</h1>

            {/* Start Now button */}
            <button className="start-now-btn" onClick={handleStartNow}>
                Start Now
            </button>
        </div>
    );
}

export default Home;
