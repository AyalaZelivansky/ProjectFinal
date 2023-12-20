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
// import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function PostShow(props) {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };



    const [open, setOpen] = React.useState(false);
    const [favoriteIconColor, setFavoriteIconColor] = React.useState(false);
    const [favoriteIconBasic, setFavoriteIconBasic] = React.useState(true);



    const handleClickOpen = () => {
        setOpen(true);



    };
    // const f=true;
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
                <Typography variant="body2">
                    {props.text}
                    <br />
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



            <div>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            General settings
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                            Aliquam eget maximus est, id dignissim quam.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                {/* <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                            You are currently not an owner
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                            laoreet.
                        </Typography>
                    </AccordionDetails>
                </Accordion> */}
                {/* <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            Advanced settings
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                            Filtering has been entirely disabled for whole web server
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                            amet egestas eros, vitae egestas augue. Duis vel est augue.
                        </Typography>
                    </AccordionDetails>
                </Accordion> */}
                {/* <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                            amet egestas eros, vitae egestas augue. Duis vel est augue.
                        </Typography>
                    </AccordionDetails>
                </Accordion> */}
            </div>
        </Card>
    );
}