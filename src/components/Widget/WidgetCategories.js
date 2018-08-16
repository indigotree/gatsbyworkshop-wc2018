import React from 'react';
import Link from 'gatsby-link';

import Widget from './Widget';

export default ({ title, children, categories }) => (
    <Widget title={title}>
        <ul className="widget__menu">
            {categories.edges.map(item => (
                <li key={item.node.slug}>
                    <Link to={`/category/${item.node.slug}`}>{item.node.name}</Link>
                </li>
            ))}
        </ul>
    </Widget>
);