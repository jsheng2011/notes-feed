import React from 'react';

export default function VocabularyView(props) {
    console.log('this.props.article', props.vocabulary);
    const {direction, word} = props.vocabulary;

    return (
        <div>
            <section>
                <small>
                    Direction: {direction[0]} ---- {direction[1]}
                </small>
            </section>
            <section>
                <small>
                    Word: {word}
                </small>
            </section>
        </div>
    );
}
