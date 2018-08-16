import React from 'react';

import './Row.css';

export default ({ children, style }) => (
    <div className="row" style={style}>
        {children}
    </div>
);
