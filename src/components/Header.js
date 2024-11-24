import React from 'react';

const Header = ({ title }) => {
    return (
        <header
            className="text-white text-center py-4 shadow-sm"
            style={{ backgroundColor: '#5cb874' }}
        >
            <h1>{title}</h1>
        </header>
    );
};


export default Header;