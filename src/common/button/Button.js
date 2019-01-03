import React, {Component} from 'react';
import cx from 'classnames';
import './Button.scss';

export default class Button extends Component {
    render() {
        const {inline, ...others} = this.props;

        const classNames = cx('jsh-button', {
            'jsh-button__inline': inline
        });

        return (
            <button className={classNames} {...others}>
                {this.props.children}
            </button>
        );
    }
}
