import React from 'react';
import Helmet from 'react-helmet';

import Hero from '../Hero/Hero';
import Band from '../Band/Band';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Row, Column } from '../Grid/Grid';

export default ({ children, config, hero, sidebar }) => (
    <div>

        <Helmet defaultTitle={config.name} titleTemplate={`%s | ${config.name}`} title={hero.title} />

        <Header name={config.name} description={config.description} />

        <main className="main" role="main" id="main">
            
            <Hero {...hero} />

            <Band>
                {sidebar ? (
                    <Row>
                        <Column sm="8">
                            {children}
                        </Column>
                        <Column sm="4">
                            {sidebar}
                        </Column>
                    </Row>
                ) : (
                    children
                )}
            </Band>
        
        </main>

        <Footer name={config.name} />

    </div>
);
