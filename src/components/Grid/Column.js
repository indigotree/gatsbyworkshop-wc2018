import React from 'react';

import './Column.css';

export default class Column extends React.Component {
    classes = [`column`]
    maybePushSize(size) {
        if (!this.props[size]) {
            return
        }
        this.classes.push(`column--${size}-${this.props[size]}`)
    }
    render() {
        [`sm`, `md`, `lg`].forEach(s => { this.maybePushSize(s) });
        return (
            <div className={this.classes.join(' ')}>
                {this.props.children}
            </div>
        )
    }
}
