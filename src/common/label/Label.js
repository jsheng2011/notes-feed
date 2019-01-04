import React, {Component} from 'react';
import cx from 'classnames';
import './Label.scss';

export default class Label extends Component {
    render() {
        const {block, ...others} = this.props;
        const classnames = cx('jsh-label', {
            'jsh-label__block': block
        });

        return (
            <label className={classnames} {...others}>
                {this.props.children}
            </label>
        );
    }
}
