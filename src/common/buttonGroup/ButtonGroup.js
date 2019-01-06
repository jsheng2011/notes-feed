import React, {Component, cloneElement} from 'react';
import './ButtonGroup.scss';

export default class ButtonGroup extends Component {
    constructor(props) {
        super(props);
        this._renderButtons = this._renderButtons.bind(this);
    }

    _renderButtons() {
        return this.props.children.map(child => {
            console.log(child);

            return cloneElement(child, {
                onClick: () => {
                    this.props.onChange(child.props.name);
                    child.props.onClick && child.props.onClick();
                },

                className: `jsh-buttonGroup__button ${child.props.className ? child.props.className : ''}`
            })
            ;
        });
    }
    render() {
        const {...others} = this.props;

        return (
            <div className="jsh-buttonGroup" {...others}>
                {this._renderButtons()}
            </div>
        );
    }
}
