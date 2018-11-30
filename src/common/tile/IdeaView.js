import React from 'react';

export default function IdeaView(props) {
    console.log('this.props.idea', props.idea);
    const {content} = props.idea;

    // {content} = idea;

    return (
        <div>
            <section>
                <small>
                    Content: {content}
                </small>
            </section>
        </div>
    );
}
