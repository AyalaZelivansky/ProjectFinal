import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import ToDoShow from "./ToDoShowP";
import {  todoGet } from "../../store/toDoSlice";
import FormDialog from "../Editing";
import Button from '@mui/material/Button';

const ToDo = () => {
    const dispatch = useDispatch();
    dispatch(todoGet());
    const [open, setOpen] = useState(false);
    const toDolist = useSelector((myStore) => myStore.ToDoSlice.arr);

    const handleClickOpen = () => {
        setOpen(true); 
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
        <div style={{display:'flex',flexWrap:'wrap'}}>
            <Button size="small" variant="outlined" onClick={() => { handleClickOpen() }}>
                    add
                </Button>
                {open && <FormDialog page={"addToDo"} openFunc={onClose} p={{todo:true,user:false,post:false}}/>}

            {


            toDolist.map((item) => {
                return (
                    <ToDoShow id={item.id} text={item.name} createDate={item.createDate} complated={item.complated}/>
                )
            })
        }</div>
        </>

    )
}

export default ToDo
