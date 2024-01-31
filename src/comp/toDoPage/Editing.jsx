import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector, useDispatch } from 'react-redux'
import { editing, deleteItem } from '../../store/toDoSlice';
import { todoPut, todoPost } from '../../store/toDoSlice';
import { postPost, postPut } from '../../store/postSlice';


export default function FormDialog(props) {
    const toDolist = useSelector((myStore) => myStore.ToDoSlice.arr)
    const posts = useSelector((myStore) => myStore.PostSlice.arr)


    const dispatch = useDispatch()


    // console.log("jjj");

    const [open, setOpen] = React.useState(true);
    const [label, seLable] = React.useState("");


    const handleClickOpen = () => {
        setOpen(true);

    };

    const func = (props) => {
        if (props.page == "addToDo")
            addToDoFunc(props)
        if (props.page == "editingToDo")
            editingToDoFunc(props)
        if (props.page = "editingPost")
            editingPostFunc(props)
        if (props.page = "addPost")
            addPostFunc(props)
        console.log(props);

    };
    const editingToDoFunc = (props) => {
        setOpen(false);
        const newToDoItem = {
            name: label,
            id: props.id,
            createDate: props.createDate,
            complated: props.complated
        }

        dispatch(todoPut(newToDoItem))

        console.log("dispatch");
    };
    const editingPostFunc = (props) => {
        setOpen(false);
        debugger
        const newPostItem = {
            content: label,
            id: props.id,
            like: posts[0].like

        }

        dispatch(postPut(newPostItem))

        console.log("dispatch");
    };
    const addToDoFunc = (props) => {

        const newToDoItem = {
            // name:toDolist[0].name,
            // createDate:toDolist[0].createDate,
            // complated:toDolist[0].complated
            name: label,
            createDate: toDolist[0].createDate,
            complated: toDolist[0].complated
        }
        console.log(label);

        dispatch(todoPost(newToDoItem))

    };
    const addPostFunc = (props) => {

        const newPostItem = {
            content: label,
            like: posts[0].like
        }
        console.log(label);

        dispatch(postPost(newPostItem))

    };
    const handleClose2 = () => {
        setOpen(false);

    };

    return (
        <React.Fragment>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
            <Dialog open={open} onClose={handleClose2}>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={props.text}
                        type="text"
                        fullWidth
                        variant="standard"

                        onChange={(e) => { seLable(e.target.value) }} />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose2}>Cancel</Button>
                    <Button onClick={() => func(props)}>Subscribe</Button>
                    {/* <Button onClick={() => dispatch(editing(label, props.id))}>Subscribe</Button> */}

                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}