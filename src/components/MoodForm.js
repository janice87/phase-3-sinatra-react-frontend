import {useState} from 'react'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import PostAddIcon from '@material-ui/icons/PostAdd';

const MoodForm = ({onAddMood}) => {
    const [moodForm, setMoodForm] = useState({
        mood: "",
        date: "",
        win: "",
        challenge: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMood = {
            mood: moodForm.mood,
            date: moodForm.date,
            win: moodForm.win,
            challenge: moodForm.challenge
        }
        fetch('http://localhost:9292/moods', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(newMood)
        })
        .then(res => res.json())
        .then(data => onAddMood(data))
        setMoodForm({
            mood: "",
            date: "",
            win: "",
            challenge: ""
        })
    }

    const handleChange = (e) => {
        setMoodForm({
            ...moodForm, 
            [e.target.name]: e.target.value
        })
    }

    return (
      <div>
          <Container maxWidth="xs">
            <Box
            m={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            >
        <h3>Mood Tracker 😀😑🙁</h3>
        <br/>
        </Box>                  
     </Container> 

        <Container maxWidth="xs">
            <Box          
            display="flex"
            justifyContent="center"
            alignItems="center"
            >
        <form onSubmit={handleSubmit}>        
        <label htmlFor="date">Date:</label>
        <input type="date" name="date" value={moodForm.date} onChange={handleChange} required />
        
        {/* <TextField 
        type="date" 
        id="outlined-size-small"
        name="date" 
        onChange={handleChange} 
        value={moodForm.date}        
        // defaultValue="Small"
        variant="outlined"
        // size="small"
        required /> */}
         <br/>
        <TextField 
        type="text" 
        id="outlined-size-small"
        name="mood"  
        onChange={handleChange}
        value={moodForm.mood} 
        placeholder="Today's mood:" 
        // defaultValue="Small"
        variant="outlined"
        size="small"
        required />

        <TextField 
        type="text" 
        id="outlined-size-small"
        name="win"  
        onChange={handleChange}
        value={moodForm.win} 
        placeholder="Win of the day:" 
        // defaultValue="Small"
        variant="outlined"
        size="small"
        required />

        <TextField 
        type="text" 
        id="outlined-size-small"
        name="challenge"  
        onChange={handleChange}
        value={moodForm.challenge} 
        placeholder="Challenge of the day:" 
        // defaultValue="Small"
        variant="outlined"
        size="small"
        required />
        
        <br />
        <IconButton type ="submit" aria-label="submit" size="small">
          Track Mood <PostAddIcon fontSize="small" />
        </IconButton>
        <br/>
        </form>
        </Box>                  
     </Container> 
      </div>
    );
  }
  
  export default MoodForm;

//   <label htmlFor="date">Date:</label>  
//   <input type="date" name="date" value={moodForm.date} onChange={handleChange} required /> <br/>

//   <label htmlFor="mood">Today's mood:</label>  
//   <input type="text" name="mood" value={moodForm.mood} onChange={handleChange} required /> <br/>      

//   <label htmlFor="win">Win of the day:</label>  
//   <input type="text" name="win" value={moodForm.win} onChange={handleChange} required /> <br/>

//   <label htmlFor="challenge">Challenge of the day:</label>  
//   <input type="text" name="challenge" value={moodForm.challenge} onChange={handleChange} required /> <br/>

//   <input type="submit" value="Track Mood" />
//   <br/>

// {/* <label htmlFor="mood">Today's mood:</label>  
//         <input type="text" name="mood" value={moodForm.mood} onChange={handleChange} required /> <br/>      

//         <label htmlFor="win">Win of the day:</label>  
//         <input type="text" name="win" value={moodForm.win} onChange={handleChange} required /> <br/>

//         <label htmlFor="challenge">Challenge of the day:</label>  
//         <input type="text" name="challenge" value={moodForm.challenge} onChange={handleChange} required /> <br/>

//         <input type="submit" value="Track Mood" /> */}


