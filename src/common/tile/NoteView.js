import React from 'react';

export default function NoteView(props) {
    console.log('this.props.note', props.note);
    const {note, source} = props.note,
        {content} = note;

    return (
        <div>
            <div className="markdown-body" dangerouslySetInnerHTML={{__html: content}}/>
        </div>
    );
}
