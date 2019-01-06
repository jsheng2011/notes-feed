import React, {Component} from 'react';
import './Section.scss';
import cx from 'classnames';

export default class Section extends Component {
    render() {
        const {spaceDown, ...others} = this.props;
        const classnames = cx('jsh-section', {
            [`jsh-section--space-down-${spaceDown}`]: spaceDown
        });

        return (
            <section className={classnames} {...others}>
                {this.props.children}
            </section>
        );
    }
}
