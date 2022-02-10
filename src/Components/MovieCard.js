import React from "react";

import { MovieController } from "./MovieController";

export const MovieCard = ({movie, type }) => {
    return (
        <div className="movie-card">
            <div className="overlay"> </div>
            {movie.poster_path ? (
                <img
                    src={`http://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={`${movie.title} poster`}
                />
            ) : (
                <div className="filler-poster">
                </div>
            )}

            <MovieController type={type} movie={movie}/>
        </div>
    )
}