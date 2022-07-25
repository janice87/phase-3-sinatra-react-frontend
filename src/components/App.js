import {useState, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import TodoContainer from './TodoContainer'
// import TodoForm from './TodoForm'
import MoodContainer from './MoodContainer'
import JournalContainer from './JournalContainer'
import JournalForm from './JournalForm'
import JournalEditForm from './JournalEditForm'

const App = () => {
  const [journals, setJournals] = useState([])

  useEffect(() => {
      fetch('http://localhost:9292/journals')
      .then(res => res.json())
      .then(data => setJournals(data))
  }, [])

  const handleAddJournal = (newJournal) => {
    const updatedJournals = [...journals, newJournal]
    setJournals(updatedJournals)    
  }

  const handleDeleteJournal = (id) => {
    const updatedJournals = journals.filter(journal => journal.id !== id)
    setJournals(updatedJournals)
  }

  const handleUpdateJournal = (editedJournal) => {
    const updatedJournals = journals.map(journal => 
      journal.id === editedJournal.id ? editedJournal : journal
      )
      setJournals(updatedJournals)
  }

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/todos"><TodoContainer /></Route>
        {/* <Route exact path="/todos/new"><TodoForm /></Route> */}
        {/* <Route exact path="/todos/:id/edit"><TodoEditForm /></Route> */}
        <Route exact path="/moods"><MoodContainer /></Route>
        <Route exact path="/journals/new"><JournalForm onHandleAddJournal={handleAddJournal} /></Route>
        <Route exact path="/journals/:id/edit"><JournalEditForm journals={journals} onUpdateJournal={handleUpdateJournal} /></Route>     
        <Route exact path="/journals"><JournalContainer journals={journals} onDeleteJournal={handleDeleteJournal} /></Route>
        <Route exact path="/"><Home /></Route>
      </Switch>          
    </div>
  );
}

export default App;