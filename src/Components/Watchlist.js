import React, { useContext } from "react";

import { GlobalContext } from "../Context/GlobalState"
import { MovieCard } from "./MovieCard"

export const WatchList = () => {

    const { watchlist } = useContext(GlobalContext)
    
    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">My watch list</h1>

                    <span className="count=pill">
                        {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
                    </span>
                </div>
            </div>
            {watchlist.length > 0 ? (
                <div className="movie-grid">
                    {watchlist.map(movie => (
                        <MovieCard movie={movie} type="watchlist" />
                    ))}
                </div>
            ): (
                <h2 className="no-movies">No movie in your list, add some</h2>
            )}

        </div>
    )
}