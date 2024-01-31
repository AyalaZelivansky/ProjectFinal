import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import FormDialog from '../toDoPage/Editing';




export default function UserShow(props) {
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);

    };

    const handleClose = () => {
        setOpen(false);

    };

    
    return (

        <Card sx={{ minWidth: 275 }} style={{ margin: 'auto', marginTop: '20px' }}>
            <CardContent>
                
               
                <Typography variant="body2">
                    {props.text}
                    <br />
                </Typography>
                
            </CardContent>
            <CardActions style={{ justifyContent: 'space-evenly' }}>
                <Button size="small" variant="outlined"> <DeleteIcon /></Button>
               
                <Button size="small" variant="outlined" onClick={() => { handleClickOpen() }}>
                    {open && <FormDialog text={props.text} id={props.id} />}
                    <CreateIcon />
                </Button>
             
            </CardActions>
        </Card>
    );
}