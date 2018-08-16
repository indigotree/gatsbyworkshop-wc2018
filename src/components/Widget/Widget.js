import React from 'react';

export WidgetCategories from './WidgetCategories';

import './Widget.css';

export default ({ title, children }) => (
    <div className="widget">
        <h3 className="widget__title">{title}</h3>
        <div className="widget__body">
            {children}
        </div>
    </div>
);