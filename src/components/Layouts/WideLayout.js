import React from 'react';
import Helmet from 'react-helmet';

import Hero from '../Hero/Hero';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default ({ children, config, hero }) => (
    <div>

        <Helmet defaultTitle={config.name} titleTemplate={`%s | ${config.name}`} title={hero.title} />

        <Header name={config.name} description={config.description} />

        <main className="main" role="main" id="main">
            
            <Hero {...hero} />

            {children}
        
        </main>

        <Footer name={config.name} />

    </div>
);
