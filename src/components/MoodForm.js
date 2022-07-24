import {useState} from 'react'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

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
            mood: moodForm.name,
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

        <Container maxWidth="m">
            <Box
            m={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            >
        <form onSubmit={handleSubmit}>        
        <label htmlFor="date">Date:</label>  
        <input type="date" name="date" value={moodForm.date} onChange={handleChange} required /> <br/>

        <label htmlFor="mood">Today I feel:</label>  
        <input type="text" name="mood" value={moodForm.mood} onChange={handleChange} required /> <br/>      

        <label htmlFor="win">My win for the day:</label>  
        <input type="text" name="win" value={moodForm.win} onChange={handleChange} required /> <br/>

        <label htmlFor="challenge">A challenge I overcame was:</label>  
        <input type="text" name="challenge" value={moodForm.challenge} onChange={handleChange} required /> <br/>

        <input type="submit" value="Track Mood" />
        <br/>
        </form>
        </Box>                  
     </Container> 
      </div>
    );
  }
  
  export default MoodForm;



