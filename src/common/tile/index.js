import React, {Component} from 'react';

export default class Tile extends Component {
    render() {
        const {category} = this.props;

        return (
            <div>
                <p>Category: {category}</p>
            </div>
        );
    }
}
