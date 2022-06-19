import { useEffect, useState } from "react";
import { fetchCall } from "../../api/fetchCall";
import Comments from "../ReactComponents/comment";

export default function Posts() {
    const [data, setData] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchCall('https://jsonplaceholder.typicode.com/posts')
            .then(result => {
                setData(result);
            })
    }, []);  //watch the array values to rerun the effect callback function : make sure all variables that are used in useEffect callback function should be in dependency list

    function fetchComments(e) {
        const id = e.target.id;
        const updateState = {};
        fetchCall('https://jsonplaceholder.typicode.com/comments')
            .then(result => {
                const items = result.filter(item => item.postId == id);
                updateState[id] = items;
                setComments(updateState);
            })
    }

    const posts = data.map(post =>
        <li key={post.id} className="post">
            <div className="postLabel">{post.title}</div>
            <div className="postImage">{post.body}</div>
            <button id={post.id} onClick={(e) => { fetchComments(e) }}>Comments</button>
            <Comments comments={comments} id={post.id}/>
        </li>
    );
    if (!data.length)
        return <div>Loading...</div>
    else
        return <ul className="list">{posts}</ul>;
}