import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import FormDialog from "./Editing"




export default function ToDoShow(props) {
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
        // console.log({ open });
        // return (
        //     <FormDialog text={props.text} />
        // )


    };

    const handleClose = () => {
        setOpen(false);
        // console.log({ open });

    };

    
    return (

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
                    {/* {props.time} */}
                    <br />
                    {/* {'"a benevolent smile"'} */}
                </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'space-evenly' }}>
                <Button size="small" variant="outlined"> <DeleteIcon /></Button>
                {/* <React.Fragment> */}
                {/* <Button size="small" variant="outlined" onClick={handleClickOpen}> */}
                <Button size="small" variant="outlined" onClick={() => { handleClickOpen() }}>
                    {open && <FormDialog text={props.text} id={props.id} />}
                    <CreateIcon />
                </Button>
                {/* <Dialog open={open} onClose={handleClose}>
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
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={handleClose}>Subscribe</Button>
                        </DialogActions>
                    </Dialog> */}
                {/* </React.Fragment> */}
            </CardActions>
        </Card>
    );
}