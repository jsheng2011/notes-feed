import React, {Component} from 'react';
import './Article.scss';

export default class Article extends Component {
    render() {
        const {...others} = this.props;

        return (
            <article className="jsh-article" {...others}></article>
        );
    }
}
