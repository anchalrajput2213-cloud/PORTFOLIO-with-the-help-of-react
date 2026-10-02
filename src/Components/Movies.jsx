import React from "react";
import  { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../Context/ContextMovie";
function Movies() {
  const movies = useContext(MovieContext);
  return (
    <div className="min-h-screen bg-gray-100 p-14">
      <h1 className="text-4xl font-bold text-center mb-2">Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <div key={movie.id}className="bg-white rounded-xl shadow-lg overflow-hidden ">
            <img src={movie.poster} alt={movie.title} className="w-full h-96 object-cover" />

            <div className="p-4">
              <h2 className="text-2xl font-bold"> {movie.title}</h2>
              <p className="text-gray-600 mt-2">Year: {movie.year}</p>
              <p className="text-gray-600"> Hero:{movie.hero}</p>
              <Link to={`/movie/${movie.id}`}>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg"> View Details </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
