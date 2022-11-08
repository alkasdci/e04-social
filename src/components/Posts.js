import { useContext, useEffect, useState } from "react";
import { AppContext } from "./Context";
import Card from './Card'

function Posts() {

    const {state, dispatch} = useContext(AppContext)

    // const [posts, setPosts] = useState([])

    useEffect(() =>  {

        async function getData() {

            const response = await fetch('https://jsonplaceholder.typicode.com/users/' + state.user.id + '/posts')

            const data = await response.json()
            console.log("🚀 ~ getData ~ data", data)

            dispatch({type: 'addPosts', payload: data})
        }

        getData()
    }, [])


    console.log("🚀 ~ Posts ~ state", state)

    return (  
        <div className="flex flex-col gap-[20px] items-center p-[30px]">
            {
                state.posts.length ?

                    state.posts.map((item, idx) => (
                        <Card key={idx} post={item} />
                    ))
                : 'No posts to render'
            }
        </div>
    );
}

export default Posts;