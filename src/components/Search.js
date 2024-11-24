import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSearch} className="mb-4">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="input-group shadow-lg me-3">
                        <input
                            type="text"
                            className="form-control border-0"
                            placeholder="Cari Film Lainnya ..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{ borderTopLeftRadius: "0.5rem", borderBottomLeftRadius: "0.5rem" }}
                        />
                        <button
                            type="submit"
                            className="btn btn-success"
                            style={{ borderTopRightRadius: "0.5rem", borderBottomRightRadius: "0.5rem" }}
                        >
                            <i className="bi bi-search"></i> Search
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Search;
