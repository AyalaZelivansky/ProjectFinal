import { useEffect,useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import ToDoShow from "./ToDoShowP"
import { todoDelete, todoGet } from "../../store/toDoSlice"
import FormDialog from "./Editing"
import Button from '@mui/material/Button';

const ToDo = () => {
    const dispatch = useDispatch()
    dispatch(todoGet())
    const [open, setOpen] = useState(false);

    const toDolist = useSelector((myStore) => myStore.ToDoSlice.arr)
    const handleClickOpen = () => {
        setOpen(true);
       
    };
  

    return (
        <>
        <div style={{display:'flex',flexWrap:'wrap'}}>
            {/* <button onClick={()=>handleClose1()}>add</button> */}
            <Button size="small" variant="outlined" onClick={() => { handleClickOpen() }}>
                    {open && <FormDialog page={"addToDo"} />}
                    add
                </Button>
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
