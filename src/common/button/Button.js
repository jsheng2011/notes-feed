import React, {Component} from 'react';
import cx from 'classnames';
import './Button.scss';

export default class Button extends Component {
    render() {
        const {inline, primary, ...others} = this.props;

        const classNames = cx('jsh-button', {
            'jsh-button__inline': inline,
            'jsh-button__primary': primary
        });

        return (
            <button className={classNames} {...others}>
                {this.props.children}
            </button>
        );
    }
}
