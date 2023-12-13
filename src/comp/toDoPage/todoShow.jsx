import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



export default function ToDoShow(props) {
  return (
    <Card sx={{ minWidth: 275}} style={{margin:'auto',marginTop:'20px' }}>
      <CardContent >
        
      <FormControlLabel  control={<Checkbox />} style={{textAlign:'right'}} />

      
        <Typography sx={{ mb: 1.5}} color="text.secondary">
          {/* 15/10/22 */}
          {props.id}
        </Typography>
        <Typography variant="body2">
          לקפוץ טנגו 50 פעם
          <br />
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}