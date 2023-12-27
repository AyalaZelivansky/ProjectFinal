import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
// import CardShow from "./cardShow"
// import CardShow from "../toDoPage/toDoShow"
import PostShow from "./postShow"

const Post = () => {

    const posts=useSelector((myStore)=>myStore.PostSlice.postArr)
    console.log(posts);
  
    return (
        <>
        <div style={{display:'flex',flexWrap:'wrap'}}>
            {
            posts.map((item) => {               
                return (
                    <PostShow id={item.id} text={item.nameWirter} />
                )
            })
        }</div>
        </>

    )
}

export default Post
