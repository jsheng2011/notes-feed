import React, {Component} from 'react';
import cx from 'classnames';
import './Input.scss';

export default class Input extends Component {
    render() {
        const {type, fullwidth, spaceDown, ...others} = this.props;
        const classNames = cx('jsh-input', {
            [`jsh-input__${type}`]: type,
            'jsh-input__fullwidth': fullwidth,
            [`jsh-input--space-down-${spaceDown}`]: spaceDown
        });

        return (
            <input {...others} className={classNames} type={type}/>
        );
    }
}
