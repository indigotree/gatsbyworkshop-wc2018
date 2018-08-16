import React from 'react';

import './Author.css';

export default ({ name, description, avatars }) => (
    <address className="author">
        <img className="author__avatar" src={avatars.image} alt={`Gravatar for ${name}`} />
        <h3 className="author__name">{name}</h3>
        <div dangerouslySetInnerHTML={{ __html: description }} />
    </address>
);
