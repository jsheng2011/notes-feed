import React, {Component} from 'react';
import Button from 'Common/button/Button';
import ViewportController from 'Common/viewportController/ViewportController';
import './ReadMore.scss';

export default class ReadMore extends Component {
    constructor(props) {
        super(props);
        this._onClickReadMore = this._onClickReadMore.bind(this);
        this.lines = 200; // TODO: the number is dumb, need to convet it more precisely
        this.state = {
            ySize: this.lines,
            readActionText: 'Read more...'
        };
    }

    _onClickReadMore() {
        if (this.state.ySize === 'auto') {
            this.setState({
                ySize: this.lines,
                readActionText: 'Read more...'
            });
        } else {
            this.setState({
                ySize: 'auto',
                readActionText: 'Close'
            });
        }
    }

    render() {
        return (
            <div className="jsh-readmore">
                <ViewportController ySize={this.state.ySize}>
                    {this.props.children}
                </ViewportController>
                <Button
                    onClick={this._onClickReadMore}
                    inline
                >{this.state.readActionText}</Button>
            </div>
        );
    }
}
