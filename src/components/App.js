import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import TodoContainer from './TodoContainer'
import MoodContainer from './MoodContainer'
import JournalContainer from './JournalContainer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/todos"><TodoContainer /></Route>
        <Route path="/moods"><MoodContainer /></Route>
        <Route path="/journals"><JournalContainer /></Route>
        <Route path=""></Route>
        <Route path=""></Route>
      

      </Switch>
      
    
    </div>
  );
}

export default App;