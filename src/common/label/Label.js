import React, {Component} from 'react';
import './Label.scss';
import cx from 'classnames';

export default class Label extends Component {
    render() {
        const {block, spaceDown, ...others} = this.props;
        const classnames = cx('jsh-label', {
            'jsh-label__block': block,
            [`jsh-label--space-down-${spaceDown}`]: spaceDown
        });

        return (
            <label className={classnames} {...others}>
                {this.props.children}
            </label>
        );
    }
}
