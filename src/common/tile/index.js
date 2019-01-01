import React, {Component} from 'react';
import ArticleView from './ArticleView';
import VocabularyView from './VocabularyView';
import NoteView from './NoteView';
import IdeaView from './IdeaView';
import TodoView from './TodoView';

export default class Tile extends Component {
    constructor(props) {
        super(props);
        this._renderArticle = this._renderArticle.bind(this);
        this._renderVocabulary = this._renderVocabulary.bind(this);
        this._renderNote = this._renderNote.bind(this);
        this._renderIdea = this._renderIdea.bind(this);
        this._renderTodo = this._renderTodo.bind(this);
    }

    _renderArticle() {
        console.info('rendering: Article');

        return <ArticleView {...this.props}/>;
    }
    _renderVocabulary() {
        console.info('rendering: Vocabulary');

        return <VocabularyView {...this.props}/>;
    }
    _renderNote() {
        console.info('rendering: Note');

        return <NoteView {...this.props}/>;
    }
    _renderIdea() {
        console.info('rendering: Idea');

        return <IdeaView {...this.props}/>;
    }
    _renderTodo() {
        console.info('rendering: Todo');

        return <TodoView {...this.props}/>;
    }

    render() {
        const {category} = this.props;

        console.log('category', category);

        return (
            <div>
                <h1>Category: {category}</h1>
                <hr/>
                {
                    (() => {
                        switch (category) {
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
                        }
                    })()
                }
            </div>
        );
    }
}
