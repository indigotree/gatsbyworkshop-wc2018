import React from 'react';

import { Container } from '../Grid/Grid';

import './Band.css';

export default ({ children, title, bgColor }) => (
    <div className="band" style={{ backgroundColor: bgColor }}>
        <Container>
            {title && <h2 className="band__title">{title}</h2>}
            <div>
                {children}
            </div>
        </Container>
    </div>
);
