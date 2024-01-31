import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
// import CardShow from "./cardShow"
// import CardShow from "../toDoPage/toDoShow"
import PostShow from "./postShow"
import { postGet } from "../../store/postSlice"
import Button from '@mui/material/Button';
import { useState } from "react"
import FormDialog from "../toDoPage/Editing";


const Post = () => {
    const dispatch = useDispatch()
    dispatch(postGet())
    const [open, setOpen] = useState(false);

    const posts = useSelector((myStore) => myStore.PostSlice.arr)
    // console.log(posts);
    const handleClickOpen = () => {
        debugger
        setOpen(true);

       
    };
    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                         <Button size="small" variant="outlined" onClick={() => { handleClickOpen() }}>
                         {open && <FormDialog page={"addPost"} />}
                         add
                     </Button>
                }
                {
                    
                    posts.map((item) => {
                        return (<>
                            <PostShow id={item.id} text={item.content}  />
                            
                            </>
                        )
                    })
                }</div>
        </>

    )
}

export default Post
