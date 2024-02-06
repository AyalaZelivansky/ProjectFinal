import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { todoPut, todoPost } from '../store/toDoSlice';
import { postPost, postPut } from '../store/postSlice';
import { userPut, userPost } from '../store/UsersSlice';
import { useState } from 'react';

const FormDialog = (props) => {
    const toDolist = useSelector((myStore) => myStore.ToDoSlice.arr)
    const posts = useSelector((myStore) => myStore.PostSlice.arr)
    const users = useSelector((myStore) => myStore.UserSlice.arr)
    const [open, setOpen] = useState(true);
    const [label, seLable] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");



    const [pageTodo, setPageTodo] = useState(false);
    const dispatch = useDispatch()


    const func = (props) => {
        handleClose2();
        console.log(props);
        if (props.page == "addToDo")
            addToDoFunc(props)
        if (props.page == "addPost")
            addPostFunc(props)
        if (props.page == "addUser")
            addUserFunc(props)
        if (props.page == "editingToDo") {
            console.log("todo");
            editingToDoFunc(props)
        }
        if (props.page == "editingPost") {
            console.log("post");
            editingPostFunc(props)
        }
        if (props.page == "editingUser") {
            console.log("post");
            editingUserFunc(props)
        }

    };
    const editingToDoFunc = (props) => {
        const newToDoItem = {
            name: label,
            id: props.id,
            createDate: props.createDate,
            complated: props.complated
        }

        dispatch(todoPut(newToDoItem))

    };
    const editingPostFunc = (props) => {
        setOpen(false);
        const newPostItem = {
            content: label,
            id: props.id,
            like: props.like

        }

        dispatch(postPut(newPostItem))

    };
    const editingUserFunc = (props) => {
        const newUserItem = {
            id: props.id,
            name: label,
            email:email,
            address: address,
            phone: phone
        }

        dispatch(userPut(newUserItem))

    };
    const addToDoFunc = (props) => {

        const newToDoItem = {
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

        dispatch(postPost(newPostItem))

    };
    const addUserFunc = (props) => {

        const newUserItem = {

            name: label,
            email: users[0].email,
            address: users[0].address,
            phone: users[0].phone
        }

        dispatch(userPost(newUserItem))

    };
    const handleClose2 = () => {
        setOpen(false);
        props.openFunc();

    };

    return (
        <React.Fragment>
            <Dialog open={open} onClose={handleClose2} >
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="name"
                        type="text"
                        fullWidth
                        variant="standard"

                        onChange={(e) => { seLable(e.target.value) }} />
                    {props.p.user && <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="email"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => { setEmail(e.target.value) }}


                    /> && <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            label="address"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={(e) => { setAddress(e.target.value) }}
                        /> && <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            label="phone"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={(e) => { setPhone(e.target.value) }}
                        />
                    }

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose2}>Cancel</Button>
                    <Button onClick={(e) => func(props)}>save</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
export default FormDialog