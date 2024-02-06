import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import FormDialog from "../Editing";
import { useDispatch } from 'react-redux';
import { todoDelete } from '../../store/toDoSlice';


const ToDoShow = (props) => {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const deletee = (p) => {
        dispatch(todoDelete(p))
    };

    const onClose = async () => {
        await setOpen(false);
    };

    return (
        <>
            <Card sx={{ minWidth: 275 }} style={{ margin: 'auto', marginTop: '20px' }}>
                <CardContent>
                    <FormControlLabel control={<Checkbox />} />
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {props.id}
                    </Typography>
                    <Typography variant="body2">
                        {props.text}
                        <br />
                    </Typography>
                    <Typography variant="body2">
                        {props.createDate}
                    </Typography>
                </CardContent>
                <CardActions style={{ justifyContent: 'space-evenly' }}>
                    <Button size="small" variant="outlined" onClick={() => deletee(props.id)}> <DeleteIcon /></Button>
                    <Button size="small" variant="outlined" onClick={() => { handleClickOpen() }}>
                        <CreateIcon />
                    </Button>
                    {open && <FormDialog text={props.text} id={props.id} createDate={props.createDate} complated={props.complated} page={"editingToDo"} openFunc={onClose} p={{todo:true,user:false,post:false}}/>}

                   
                </CardActions>
            </Card>
        </>
    );
}
export default ToDoShow