import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import FormDialog from "../Editing";
import {  useDispatch } from 'react-redux'
import { userDelete } from '../../store/UsersSlice';



 const UserShow=(props)=> {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch()


    const handleClickOpen = () => {
        setOpen(true);

    };

    const deletee = (p) => {
        dispatch(userDelete(p))
    };

    const onClose = async () => {
       await setOpen(false);
     };

    return (

        <Card sx={{ minWidth: 275 }} style={{ margin: 'auto', marginTop: '20px' }}>
            <CardContent>
    
                <Typography variant="body2">                   
                    <div>name: {props.text.name}</div>
                    <div>email: {props.text.email}</div>
                    <div>address: {props.text.address}</div>
                    <div>phone: {props.text.phone}</div>            
                    <br />
                </Typography>
                
            </CardContent>
            <CardActions style={{ justifyContent: 'space-evenly' }}>
                <Button size="small" variant="outlined" onClick={() => deletee(props.id)}> <DeleteIcon /></Button>
               
                <Button size="small" variant="outlined" onClick={() => { handleClickOpen() }}>
                    {open && <FormDialog text={props.text.name} user={props.text} id={props.id} page={"editingUser"} openFunc={onClose} p={{todo:false,user:true,post:false}}/>}
                    <CreateIcon />
                </Button>
             
            </CardActions>
        </Card>
    );
}
export default UserShow