import {Link} from 'react-router-dom'
function Card(props) {
    return (  
        <Link to={`/posts/${props.post.id}`}>
            <div className="flex flex-col w-[300px] border-2 border-slate-500 p-6 gap-[15px] rounded-md">
                <h3 className="font-bold">{props.post.title}</h3>
                <hr />
                <p>{props.post.body}</p>
            </div>
        </Link>

    );
}

export default Card;