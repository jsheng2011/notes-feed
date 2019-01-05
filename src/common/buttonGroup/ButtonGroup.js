import React, {Component} from 'react';

// import cx from 'classnames';
import './ButtonGroup.scss';

export default class ButtonGroup extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        // const {...others} = this.props;

        return (
            <div className="jsh-buttonGroup">
                {this.props.children}
            </div>
        );
    }
}
