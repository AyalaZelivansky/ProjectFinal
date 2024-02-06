import { useSelector, useDispatch } from 'react-redux'
import { postGet } from "../../store/postSlice"
import { useState } from "react"
import PostShow from "./postShow"
import Button from '@mui/material/Button';
import FormDialog from "../Editing";


const Post = () => {
    const dispatch = useDispatch()
    dispatch(postGet())

    const [open, setOpen] = useState(false);
    const posts = useSelector((myStore) => myStore.PostSlice.arr)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {<>
                    <Button size="small" variant="outlined" onClick={() => { handleClickOpen() }}>
                        add
                    </Button>
                    {open && <FormDialog page={"addPost"} openFunc={onClose} />}

                </>
                }
                {

                    posts.map((item) => {
                        return (<>
                            <PostShow id={item.id} text={item.content} like={item.like} />
                        </>
                        )
                    })
                }</div>
        </>

    )
}

export default Post
