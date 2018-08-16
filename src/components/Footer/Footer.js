import React from 'react';

import './Footer.css';

export default ({ name }) => (
    <footer className="footer" role="contentinfo">
        <p>&copy; {name} {new Date().getFullYear()}</p>
        <p>Gatsby.js Theme by <a href="https://indigotree.co.uk" target="_blank" rel="noopenner">Indigo Tree</a></p>
    </footer>
);
