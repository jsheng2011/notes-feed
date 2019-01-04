import React from 'react';
import Label from 'Common/label/Label';
import Article from 'Common/article/Article';

export default function VocabularyView(props) {
    const {word, translation} = props.vocabulary;

    return (
        <div>
            <Label block>{word}</Label>
            <Article>{translation}</Article>
        </div>
    );
}
