import React from 'react';

export default function TodoView(props) {
    console.log('this.props.Todo', props.todo);
    const {content, status} = props.todo;

    // {content} = Todo;

    return (
        <div>
            <section>
                <small>
                    Content: {content}
                </small>
            </section>
            <section>
                <small>
                    status: {status}
                </small>
            </section>
        </div>
    );
}
