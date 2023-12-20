import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector, useDispatch } from 'react-redux'
import { editing,deleteItem } from '../../store/toDoSlice';


export default function FormDialog(props) {
    // const { id, name, statos } = { ...props };
    const toDolist = useSelector((myStore) => myStore.ToDoSlice.todoArr)
    const dispatch = useDispatch()


    // console.log("jjj");

    const [open, setOpen] = React.useState(true);
    const [label, seLable] = React.useState("");


    const handleClickOpen = () => {
        setOpen(true);

    };

    const handleClose1 = (props) => {
        setOpen(false);
        const newToDoItem={
            newInput:label,
            id:props.id
        }
        // dispatch(editing(newToDoItem))
        dispatch(deleteItem(newToDoItem))

        console.log("dispatch");
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
                <DialogTitle>עריכה</DialogTitle>
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
                    <Button onClick={()=>handleClose1(props)}>Subscribe</Button>
                    {/* <Button onClick={() => dispatch(editing(label, props.id))}>Subscribe</Button> */}

                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}