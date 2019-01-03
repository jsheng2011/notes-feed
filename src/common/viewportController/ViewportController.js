import React, {Component} from 'react';
import './ViewportController.scss';

export default class ViewportController extends Component {
    render() {
        const {xSize, ySize, ...others} = this.props;
        const style = {
            width: typeof xSize === 'number' ? `${xSize}px` : xSize,
            height: typeof ySize === 'number' ? `${ySize}px` : ySize
        };

        return (
            <div className="jsh-viewportController" {...others} style={style}>
                {this.props.children}
            </div>
        );
    }
}
