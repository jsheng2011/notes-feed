import React, {Component} from 'react';
import ArticleView from './ArticleView';
import VocabularyView from './VocabularyView';
import NoteView from './NoteView';
import IdeaView from './IdeaView';
import TodoView from './TodoView';
import TermView from './TermView';
import './index.scss';

export default class Tile extends Component {
    constructor(props) {
        super(props);
        this._renderFeed = this._renderFeed.bind(this);
        this._renderArticle = this._renderArticle.bind(this);
        this._renderVocabulary = this._renderVocabulary.bind(this);
        this._renderNote = this._renderNote.bind(this);
        this._renderIdea = this._renderIdea.bind(this);
        this._renderTodo = this._renderTodo.bind(this);
        this._renderTerm = this._renderTerm.bind(this);
    }

    _renderFeed() {
        switch (this.props.category) {
            case 'article':
                return this._renderArticle();
            case 'vocabulary':
                return this._renderVocabulary();
            case 'note':
                return this._renderNote();
            case 'idea':
                return this._renderIdea();
            case 'todo':
                return this._renderTodo();
            case 'term':
                return this._renderTerm();
        }
    }

    _renderTerm() {
        return <TermView {...this.props}/>;
    }
    _renderArticle() {
        return <ArticleView {...this.props}/>;
    }
    _renderVocabulary() {
        return <VocabularyView {...this.props}/>;
    }
    _renderNote() {
        return <NoteView {...this.props}/>;
    }
    _renderIdea() {
        return <IdeaView {...this.props}/>;
    }
    _renderTodo() {
        return <TodoView {...this.props}/>;
    }

    render() {
        const {category} = this.props;

        console.log('category', category);

        return (
            <div className="tile">
                {
                    this._renderFeed()
                }
            </div>
        );
    }
}
