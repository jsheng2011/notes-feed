import React, {Component} from 'react';
import cx from 'classnames';
import './TextArea.scss';

export default class TextArea extends Component {
    constructor(props) {
        super(props);
        this._handleOnChange = this._handleOnChange.bind(this);
        this.state = {
            step: 1
        };
    }
    _handleOnChange(e) {
        const {onChange} = this.props;
        onChange && onChange(e);
        if (e.target.scrollTop >= 6 * this.state.step) {
            this.setState({
                step: this.state.step + 1
            });
        }
    }
    render() {
        const {fullwidth, spaceDown, style, ...others} = this.props;
        const classNames = cx('jsh-textarea', {
            'jsh-textarea__fullwidth': fullwidth,
            [`jsh-textarea--space-down-${spaceDown}`]: spaceDown // TODO: make it more centralized
        });
        const styles = {
            ...style,
            height: `${40 * this.state.step}px`
        };

        return (
            <textarea {...others} onChange={this._handleOnChange} className={classNames} style={styles}/>
        );
    }
}
