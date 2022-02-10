import React, {useContext} from "react";

import {GlobalContext} from "../Context/GlobalState"
import {MovieCard} from "./MovieCard"

export const Watched = () => {

    const {watched} = useContext(GlobalContext)
    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">Watched Movie</h1>

                    <span className="count=pill">
                        {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
                    </span>
                </div>
            </div>
            {watched.length > 0 ? (
                <div className="movie-grid">
                    {watched.map(movie => (
                        <MovieCard movie={movie} type="watched" />
                    ))}
                </div>
            ): (
                <h2 className="no-movies">No movie watched, add some</h2>
            )}

        </div>
    )
}
