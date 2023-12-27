import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import FormDialog from '../toDoPage/Editing';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function PostShow(props) {

    const [expanded, setExpanded] = React.useState(false);
    // const [first50Words, setFirst50Words] = React.useState("")
    // const [after50Words, setAfter50Words] = React.useState("")

    const [longText, setLongText] = React.useState(props.text)

    // const y = props.text
    const first50Words = longText.slice(0, 20);
    // setFirst50Words(longText.slice(0,2))
    const after50Words = longText.slice(20)
    // setAfter50Words(longText.slice(2))


    console.log(first50Words);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };



    const [open, setOpen] = React.useState(false);
    const [favoriteIconColor, setFavoriteIconColor] = React.useState(false);
    const [favoriteIconBasic, setFavoriteIconBasic] = React.useState(true);



    const handleClickOpen = () => {
        setOpen(true);

    };


    const changeColor1 = () => {

        console.log("col");
        setFavoriteIconColor(true);
        setFavoriteIconBasic(false)

    }
    const changeColor2 = () => {

        console.log("col");
        setFavoriteIconColor(false);
        setFavoriteIconBasic(true)

    }
    return (

        <Card sx={{ minWidth: 275 }} style={{ margin: 'auto', marginTop: '20px' }}>
            <CardContent>

                {favoriteIconBasic && <FavoriteIcon onClick={() => { changeColor1() }} />}
                {favoriteIconColor && <FavoriteIcon color="success" onClick={() => { changeColor2() }} />}

                {/* <FavoriteIcon onClick={() => { handleClickOpen() }} /> */}
                {/* <div >ayahahh</div> */}



                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {/* 15/10/22 */}
                    {props.id}
                </Typography>
                <Typography variant="body2" >
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ boxShadow: 'none' }}>

                        <AccordionSummary

                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >

                            <Typography >{first50Words}</Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography >
                                {after50Words}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/* {'"a benevolent smile"'} */}
                </Typography>
                <Typography variant="body2">
                    {props.time}
                    <br />
                    {/* {'"a benevolent smile"'} */}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="outlined"> <DeleteIcon /></Button>
                <Button size="small" variant="outlined" onClick={() => { handleClickOpen() }}>
                    {open && <FormDialog text={props.text} />}
                    <CreateIcon />
                </Button>
            </CardActions>



           
        </Card >
    );
}