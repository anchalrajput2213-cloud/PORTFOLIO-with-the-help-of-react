import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MovieContext } from "../Context/ContextMovie";
function MovieDetail() {
    const { id } = useParams();
    const movies = useContext(MovieContext);
    const navigate = useNavigate();
    const movie = movies.find((item) => item.id === Number(id));
     if (!movie) {
        return <h2 className="text-3xl text-red-600 font-bold text-center mt-20">Movie Not Found</h2>;
    }
     return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 pt-24">
            <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg hover:shadow-2xl duration-300">
                 <button onClick={() => navigate(-1)}className="mb-4 bg-blue-600 text-white px-4 py-2 rounded "> Back</button>
                <h1 className="text-3xl font-bold text-center mb-4">{movie.title} </h1>
                <img src={movie.poster} alt={movie.title}className="w-full h-96 object-cover rounded-lg"/>
                <p className="mt-4 text-lg"><strong>Hero:</strong> {movie.hero}</p>
                <p className="mt-2 text-lg"><strong>Year:</strong> {movie.year}</p>
                <p className="mt-2 text-lg"><strong>Genre:</strong> {movie.genre}</p>
                <p className="mt-2 text-lg"> <strong>Rating:</strong> ⭐ {movie.rating}</p>
                <p className="mt-4 text-gray-700"> {movie.description} </p>
                <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"> Watch Now</button>

            </div>

        </div>
    );
}

export default MovieDetail;

