import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import FormDialog from "../Editing";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch } from 'react-redux';
import { postDelete, postPutLike } from '../../store/postSlice';
import { useState } from 'react';

const PostShow = (props) => {
    const dispatch = useDispatch();
    const [expanded, setExpanded] = useState(false);
    const [longText, setLongText] = useState(props.text);
    const [open, setOpen] = useState(false);
    const [favoriteIconColor, setFavoriteIconColor] = useState(props.like);
    const [favoriteIconBasic, setFavoriteIconBasic] = useState(!props.like);
    const first50Words = longText.slice(0, 20);
    const after50Words = longText.slice(20);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };
  
    const changeColor2 = () => {
       
        setFavoriteIconColor(false);
        setFavoriteIconBasic(true);
        dispatch(postPutLike({ id: props.id, like: false,content:props.text }))
    }
    const changeColor1 = () => {
       
        setFavoriteIconColor(true);
        setFavoriteIconBasic(false);
        dispatch(postPutLike({ id: props.id, like: true,content:props.text }))
    }

    const deletee = (p) => {
        dispatch(postDelete(p))
    };

    const onClose = () => {
        setOpen(false);
    };

    return (

        <Card sx={{ minWidth: 275 }} style={{ margin: 'auto', marginTop: '20px' }}>

            <CardContent style={{ height: '180px' }}>
                {favoriteIconBasic && <FavoriteIcon onClick={changeColor1} />}
                {favoriteIconColor && <FavoriteIcon color="success" onClick={changeColor2} />}

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.id}
                </Typography>
                <Typography variant="body2" >
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ boxShadow: 'none' }}>

                        {after50Words != "" &&
                            <AccordionSummary

                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography>{first50Words}</Typography>
                            </AccordionSummary>
                        }
                        <AccordionDetails>
                            <Typography >
                                {after50Words}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {after50Words == "" &&
                        <AccordionSummary


                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography>{first50Words}</Typography>
                        </AccordionSummary>
                    }
                </Typography>
                <Typography variant="body2">
                    {props.time}
                    <br />
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="outlined" onClick={() => { deletee(props.id) }}> <DeleteIcon /></Button>
                <Button size="small" variant="outlined" onClick={() => { handleClickOpen() }}>
                    <CreateIcon />
                </Button>
                {open && <FormDialog text={longText} page={"editingPost"} id={props.id} openFunc={onClose} like={favoriteIconColor}  p={{todo:false,user:false,post:true}} />}
            </CardActions>

        </Card >
    );
}

export default PostShow
