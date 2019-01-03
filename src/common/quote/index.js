import React, {Component} from 'react';
import './index.scss';

export default class Quote extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {...others} = this.props;

        return (
            <blockquote className="jsh-blockquote" {...others}>
                {this.props.children}
            </blockquote>
        );
    }
}
