import React, {Component} from 'react';
import cx from 'classnames';
import './Input.scss';

export default class Input extends Component {
    render() {
        const {type, fullwidth, ...others} = this.props;
        const classNames = cx('jsh-input', {
            [`jsh-input__${type}`]: type,
            'jsh-input__fullwidth': fullwidth
        });

        return (
            <input {...others} className={classNames} type={type}/>
        );
    }
}
