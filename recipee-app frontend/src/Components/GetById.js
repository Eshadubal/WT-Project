import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function DetailRecipe() {
    const [data, setData] = useState({});
    const [isReadMore, setIsReadMore] = useState(false); // Toggle state for "Read More"
    const [error, setError] = useState(null); // State to handle errors

    const { id } = useParams();  // Get the dynamic 'id' from the URL

    const apiUrl = `http://localhost:8080/recipes/${id}`;  // URL for fetching the specific recipe data

    useEffect(() => {
        fetch(apiUrl, { method: "GET" })
            .then(res => {
                if (!res.ok) {
                    throw new Error("Recipe not found");
                }
                return res.json();
            })
            .then(res => setData(res))
            .catch(err => setError(err.message)); // Catch any errors
    }, [id]);

    // Function to toggle between showing more or less
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <div className="container mt-4">
            {/* Back Button */}
            <Link to="/recipes" className="btn btn-info mb-3">Back to Recipes</Link>

            {/* Error Handling */}
            {error && <div className="alert alert-danger">{error}</div>}

            {/* Recipe Title */}
            <h2>{data.title}</h2>

            {/* Recipe Image */}
            {data.image && (
                <img
                    src={data.image}
                    alt={data.title}
                    className="img-fluid mb-4"
                    style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
            )}

            {/* Recipe Ingredients */}
            <h4>Ingredients:</h4>
            <ul>
                {data.ingredients?.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>

            {/* Recipe Instructions with Read More */}
            <h4>Instructions:</h4>
            <p>
                {isReadMore ? data.instructions : `${data.instructions?.slice(0, 150)}...`}
                {data.instructions?.length > 150 && (
                    <span
                        onClick={toggleReadMore}
                        style={{ color: 'blue', cursor: 'pointer' }}
                    >
                        {isReadMore ? ' Read Less' : ' Read More'}
                    </span>
                )}
            </p>

            {/* Optional YouTube Video Link */}
            {data.ytlink && (
                <div className="mt-4">
                    <a
                        href={data.ytlink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        Watch Video Tutorial
                    </a>
                </div>
            )}
        </div>
    );
}

export default DetailRecipe;
