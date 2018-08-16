import React from 'react';

import 'sanitize.css';
import '../styles/main.css';

export default ({ children, data }) => (
    <div>
        {children()}
    </div>
);
