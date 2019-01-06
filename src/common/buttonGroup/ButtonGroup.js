import React, {Component, cloneElement} from 'react';
import './ButtonGroup.scss';

export default class ButtonGroup extends Component {
    constructor(props) {
        super(props);
        this._renderButtons = this._renderButtons.bind(this);
    }

    _renderButtons() {
        return this.props.children.map(child => cloneElement(child, {
            onClick: () => {
                this.props.onChange(child.props.name);
                child.props.onClick && child.props.onClick();
            }
        }));
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
