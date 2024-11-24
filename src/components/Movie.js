import React from 'react';

const Movie = ({ movie }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100">
                <img
                    src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder-movie.jpg'}
                    className="card-img-top"
                    alt={movie.Title}
                />
                <div className="card-body">
                    <h5 className="card-title">{movie.Title}</h5>
                    <p className="card-text">
                        <small className="text-muted">Year: {movie.Year}</small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Movie;