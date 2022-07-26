import {useState} from 'react'
import { useHistory } from "react-router-dom";
import { Box, Typography, Grid, TextField, Button} from "@material-ui/core";

const Home = ({onAddUser}) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
        name: name,
        email: email
     }
    fetch('http://localhost:9292/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then(data => onAddUser(data))
    history.push(`/todos`)
}

    return (
      <div>   
        <Grid container direction="column" alignItems="center" justify="center" style={{ minHeight: "80vh" }} spacing={3}>
        <Grid item>
          <Typography variant="h3" align="center">Welcome to myBujo</Typography>        
          <Typography variant="h5" align="center">Start your online bullet journal</Typography> 
        </Grid>

        <Grid container direction="column" alignItems="center" justify="center">
        <Grid item style={{ border: "0.2px solid gray", paddingLeft: "10px", paddingRight: "10px" }}>
          <form onSubmit={handleSubmit}> 
            <TextField
              variant="outlined"
              label="Name"
              onChange={(e) => setName(e.target.value)} 
              value={name}
              fullWidth
              style={{ marginBottom: "5px", marginTop: "5px", padding: "5px" }}
            />
            <TextField
              variant="outlined"
              label="Email"
              onChange={(e) => setEmail(e.target.value)} 
              value={email}
              fullWidth
              style={{ marginBottom: "5px", marginTop: "5px", padding: "5px" }}
            />
            <Box m={1} display="flex" justifyContent="center" alignItems="center">
            <Button type="submit" size="large" variant="contained">
              SIGN UP
            </Button>
            </Box>
          </form>
        </Grid>
        </Grid>
        </Grid>       
      </div>
    );
  }
  
  export default Home;