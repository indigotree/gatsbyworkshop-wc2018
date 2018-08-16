import React, { Component } from 'react';
import Link from 'gatsby-link';

import './Navbar.css';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }
    setMenuState() {
        this.setState({ isOpen: !this.state.isOpen });
    }
    componentDidMount() {
        document.addEventListener('gatsbyworkshop.route-change', (e) => {
            this.setState({ isOpen: false });
        });
    }
    render() {
        return (
            <nav className={`navbar${this.state.isOpen ? ` navbar--open` : ``}`}>
                <ul className="navbar__menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <button className="navbar__button" onClick={this.setMenuState.bind(this)}>
                    {this.state.isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    )}
                </button>
            </nav>
        );
    }
}