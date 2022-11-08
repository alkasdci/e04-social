import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "./Context";

function PostPage() {

    const {id} = useParams()

    const {state} = useContext(AppContext)

    const post = state.posts.find(item => item.id == id)
    return ( 
        <div className="flex flex-col gap-[40px] p-[40px] w-[400px] justify-center items-center mx-auto">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
        </div>
     );
}

export default PostPage;