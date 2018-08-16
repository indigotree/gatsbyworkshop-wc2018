import React from 'react';
import Link from 'gatsby-link';

import './Logo.css';

export default ({ name, description }) => (
    <Link to="/" className="logo">
        <svg viewBox="0 0 306 296" xmlns="http://www.w3.org/2000/svg">
            <path d="M149 296h-1C66.32 296 0 229.68 0 148S66.32 0 148 0h1c-28.78 35.86-47 88.89-47 148s18.22 112.14 47 148z"/>
            <path d="M167.94 1.33C240.21 11.1 296 73.08 296 148c0 74.92-55.79 136.91-128.06 146.67a182.58 182.58 0 0 1-13.7-20.12C221.29 271.29 274.7 215.83 274.7 148S221.28 24.71 154.25 21.45c4.22-7.17 8.8-13.9 13.7-20.11z" opacity=".6"/>
        </svg>
        <span className="logo__text">
            <strong>{name}</strong>
            <span>{description}</span>
        </span>
    </Link>
);