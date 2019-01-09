import cx from 'classnames';
import React, {Component} from 'react';
import Label from 'Common/label/Label';
import Input from 'Common/input/Input';
import TextArea from 'Common/textarea/TextArea';
import KeyCode from 'Const/keyCode';
import './RichTextEditor.scss';

export default class RichTextEditor extends Component {
    constructor(props) {
        super(props);
        this._onKeyDown = this._onKeyDown.bind(this);
        this._handleTabHit = this._handleTabHit.bind(this);
    }
    _onKeyDown(e) {
        this._handleTabHit(e);
        this._handleShiftEnterHit(e);
        this.props.onKeyDown && this.props.onKeyDown(e);
    }
    _handleTabHit(e) {
        if (e.keyCode === KeyCode.TAB) {
            e.preventDefault();
            let s = e.target.selectionStart;
            e.target.value = `${e.target.value.substring(0, e.target.selectionStart)}\t${e.target.value.substring(e.target.selectionEnd)}`;
            e.target.selectionEnd = s + 1;
        }
    }

    _handleShiftEnterHit(e) {
        if (e.shiftKey === true && e.keyCode === KeyCode.ENTER) {
            console.log('shift+enter');
            e.preventDefault();

            this.props.onShiftEnter && this.props.onShiftEnter();
        }
    }
    render() {
        const {className, ...others} = this.props;

        const classNames = cx('jsh-richTextEditor', {
            [className]: className
        });

        return (
            <TextArea
                {...others}
                fullwidth rows="200"
                className={classNames}
                onKeyDown={this._onKeyDown}
            ></TextArea>
        );
    }
}
