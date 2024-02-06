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
import { useSelector } from 'react-redux';

const PostShow = (props) => {
    const dispatch = useDispatch();
    const [expanded, setExpanded] = useState(false);
    const [longText, setLongText] = useState(props.text);
    const [open, setOpen] = useState(false);
    const [favoriteIconColor, setFavoriteIconColor] = useState(props.like);
    // const [favoriteIconColor, setFavoriteIconColor] = useState(0);

    const [favoriteIconBasic, setFavoriteIconBasic] = useState(!props.like);
    // const [favoriteIconBasic, setFavoriteIconBasic] = useState(1);

    // console.log("favoriteIconBasic "+favoriteIconBasic);
    // console.log("favoriteIconColor "+favoriteIconColor);

    const first50Words = longText.slice(0, 20);
    const after50Words = longText.slice(20);
    const posts = useSelector((myStore) => myStore.PostSlice.arr)

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };
    // useEffect(() => {
    //     console.log(favoriteIconColor);
    // }, [favoriteIconColor]);

    const func = () => {
        console.log(posts[1]);
        dispatch(postPutLike(posts[1]))

    }

    const changeColor2 = () => {
        console.log("favoriteIconColor" + favoriteIconColor);
        console.log("favoriteIconBasic" + favoriteIconBasic);
        debugger
        setFavoriteIconColor(1);
        setFavoriteIconBasic(2);
        console.log("favoriteIconColor" + favoriteIconColor);
        console.log("favoriteIconBasic" + favoriteIconBasic);

        func()

        // dispatch(postPutLike({ id: props.id, like: favoriteIconColor }))

        // setFavoriteIconColor(!favoriteIconBasic);
        // setFavoriteIconBasic(!favoriteIconColor);
    }
    const changeColor1 = () => {
        // debugger
        // console.log("favoriteIconColor" + favoriteIconColor);
        // console.log("favoriteIconBasic" + favoriteIconBasic);
        setFavoriteIconColor(true);
        setFavoriteIconBasic(false);
        // console.log("favoriteIconColor" + favoriteIconColor);
        // console.log("favoriteIconBasic" + favoriteIconBasic);
        // dispatch(postPutLike({ id: props.id, like: favoriteIconColor }))
        func()
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
                {/* {favoriteIconBasic && <FavoriteIcon onClick={() => { dispatch(postPutLike({ id: props.id, like: true })) }} />}
                {favoriteIconColor && <FavoriteIcon color="success" onClick={() => { dispatch(postPutLike({ id: props.id, like: false })) }} />} */}

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
                {open && <FormDialog text={longText} page={"editingPost"} id={props.id} openFunc={onClose} like={favoriteIconColor} />}
            </CardActions>

        </Card >
    );
}

export default PostShow
