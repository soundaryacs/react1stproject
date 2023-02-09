import React, { useEffect, useState } from 'react'

export default function HttpDemo3() {
    const [comments, setComments] = useState([]);

    const fetchComments = async function () {
        const comments = await fetch("https://jsonplaceholder.typicode.com/comments")
        const commentsJSON = await comments.json();
        setComments(commentsJSON);
    }

    useEffect(() => {
        fetchComments();
    }, [])
    return (
        <>
            <h1>Fetch Comments</h1>
            <div className='container'>

                <div className='row'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Body</th>
                            </tr>
                        </thead>
                        {comments.map((comment, ind) => {
                            return (
                                <tbody key={ind}>
                                    <tr>
                                        <th>{comment.id}</th>
                                        <td>{comment.name}</td>
                                        <td>{comment.email}</td>
                                        <td>{comment.body}</td>
                                    </tr>
                                </tbody>
                            );
                        })}
                    </table>
                </div>

            </div>
        </>
    )
}
