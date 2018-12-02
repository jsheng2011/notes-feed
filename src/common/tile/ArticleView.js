import React from 'react';

export default function ArticleView(props) {
    const {article, link, memo, createdTime, modifiedTime} = props.article,
        {content} = article;

    return (
        <div>
            <section><small>
                content: {content}
            </small></section>
            <section><small>
                link<a href={link}>{link}</a>
            </small></section>
            <div><small>
                {
                    memo.map((memo, index) => {
                        if (!memo) {
                            return;
                        }
                        const {content, modifiedTime, createdTime} = memo;

                        return (
                            <div key={index}>
                                <div>memo.content: {content}</div>
                                <div>memo.modifiedTime: {modifiedTime}</div>
                                <div>memo.createdTime: {createdTime}</div>
                            </div>
                        );
                    })
                }
            </small></div>
            <section><small>
                createdTime: {createdTime}
            </small></section>
            <section><small>
                modifiedTime: {modifiedTime}
            </small></section>
        </div>
    );
}
