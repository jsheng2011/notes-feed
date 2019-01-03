import React, {Component} from 'react';
import './Label.scss';

export default class Label extends Component {
    render() {
        const {...others} = this.props;

        return (
            <label className="jsh-label" {...others}>
                {this.props.children}
            </label>
        );
    }
}
