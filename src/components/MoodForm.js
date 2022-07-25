import {useState} from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
    <Grid
      container
      direction="column"
      alignItems="center"
      alignContent="center"
      justifyContent="center"
      style={{ minHeight: "30vh"}}
      spacing={5}
      flex-wrap="wrap"      
    >
        <Grid item>
        <Typography variant="h5" color="primary">
        Mood Tracker 😀😑🙁
        </Typography>
        </Grid>       

        <Grid item style={{ border: "0.2px solid gray" }}>
        <Grid container direction="column" alignContent="center" alignItems="center" justifyContent="center">
        <form onSubmit={handleSubmit}>        
        <TextField 
        type="date" 
        id="outlined-size-small"
        name="date" 
        onChange={handleChange} 
        value={moodForm.date}      
        variant="outlined"        
        required
        style={{ marginBottom: ".2em", width: "300px" }} />
         <br/>

        <TextField 
        type="text" 
        id="outlined-size-small"
        name="mood"  
        onChange={handleChange}
        value={moodForm.mood}        
        placeholder="Today's mood:"        
        variant="outlined"
        size="small"
        required
        style={{ marginBottom: ".2em", width: "300px"  }}
        />
        <br/>

        <TextField 
        type="text" 
        id="outlined-size-small"
        name="win"  
        onChange={handleChange}
        value={moodForm.win}       
        placeholder="Win of the day:"        
        variant="outlined"
        size="small"
        style={{ marginBottom: ".2em", width: "300px"  }}
        required />
        <br/>

        <TextField 
        type="text" 
        id="outlined-size-small"
        name="challenge"  
        onChange={handleChange}
        value={moodForm.challenge}        
        placeholder="Challenge of the day:"        
        variant="outlined"
        size="small"
        style={{ marginBottom: ".2em", width: "300px"  }}
        required />
        <br />
        <Button type="submit" variant="outlined" style={{ marginBottom: ".2em", width: "300px"  }}>Track Mood</Button>
        <br/>
        </form>
        </Grid>       
        </Grid>
        </Grid>
      </div>
    );
  }
  
  export default MoodForm;



