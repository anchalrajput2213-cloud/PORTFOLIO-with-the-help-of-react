import { createContext } from "react";
import MovieData from "../Components/MovieData.json";
export const MovieContext = createContext();
function MovieProvider({children}) {

    return (
        <MovieContext.Provider value={MovieData}>
            {children}
        </MovieContext.Provider>
    )
}
export default MovieProvider;