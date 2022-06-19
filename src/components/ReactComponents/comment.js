export default function Comments({ comments, id }) {
    if (Object.values(comments).length && id in comments) {
        return <>
            {
                comments[id].map(item =>
                    <li key={item.id} className="post">
                        <div>{item.name} comments</div>
                        <div>{item.body}</div>
                    </li>)
            }
        </>
    }
    else
        return <></>
}