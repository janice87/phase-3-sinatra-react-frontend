import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
//import { makeStyles } from '@material-ui/core/styles';

const MoodDetails = ({moodObj, onHandleDeleteMood}) => {
    const {mood, date, win, challenge, id} = moodObj
    
    const handleDeleteTodo = () => {
      fetch(`http://localhost:9292/moods/${id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(() => onHandleDeleteMood(id))
    }

    // const useStyles = makeStyles({
    //   root: {
    //     minWidth: 400,
    //   }
    // });

    // const classes = useStyles();
    
    return (
      <div>
        <Container maxWidth="sm">
        <Box        
        display="flex"
        justifyContent="center"
        alignItems="center"
        shadow={1}
        >        
        <br/>

       <h3>{date}<span><button onClick={handleDeleteTodo}>⌫</button></span></h3>
        <p>Today's mood: {mood}</p>
        <br/>
        <p>Win of the day:{win}</p> 
        <br/>
        <p>Challenge of the day:{challenge}</p>
        {/* </Box>                  
      </Container> 
         */}
        {/* <Card>
        <CardContent>       
        <h4>{date}<span><button onClick={handleDeleteTodo}>⌫</button></span></h4>
        <p>Today's mood: {mood}</p>
        <br/>
        <p>Win of the day:{win}</p> 
        <br/>
        <p>Challenge of the day:{challenge}</p>
       </CardContent>     
      </Card>    */}
        
        </Box>
        </Container>            
      
      </div>
    );
  }
  
  export default MoodDetails;

// <Typography className={classes.title} color="textSecondary" gutterBottom> */}
//   <Card>
//   <CardContent>
//   {/* <Typography className={classes.title} color="textSecondary" gutterBottom> */}
//   <h4>{date}<span><button onClick={handleDeleteTodo}>⌫</button></span></h4>
//   <p>Today's mood: {mood}</p>
//   <br/>
//   <p>Win of the day:{win}</p> 
//   <br/>
//   <p>Challenge of the day:{challenge}</p>
// </Typography> 
//  </CardContent>     
// </Card>   