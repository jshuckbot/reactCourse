import {useState} from "react";

function CommentsList() {
    const [comments, setComments] = useState([
        {id: 1, text: "Это первый комментарий"},
        {id: 2, text: "Это второй комментарий"},
        {id: 3, text: "Это третий комментарий"}
    ]);

    const deleteComments = (id) => {
        setComments(comments.filter((comment) => comment.id !== id));
    };

    return (
        <div>
            <h1>Коментарии:</h1>
            <ul>
                {comments.map((comment) => (
                    <li>
                        {comment.text}
                        <button onClick={() => deleteComments(comment.id)}>Удаалить комментарий</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CommentsList;