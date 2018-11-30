import React from 'react';

export default function NoteView(props) {
    console.log('this.props.note', props.note);
    const {note, source} = props.note,
        {content} = note;

    return (
        <div>
            <section>
                <small>
                    content: {content}
                </small>
            </section>
            <section>
                <small>
                    source: {source}
                </small>
            </section>
        </div>
    );
}
