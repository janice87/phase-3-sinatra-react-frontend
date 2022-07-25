// import {Link} from 'react-router-dom'
import { useHistory, useLocation } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Drawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const useStyles = makeStyles({
  page: {
    background: '#f9f9f9',
    width: '100%',
  },
  root: {
    display: 'flex',
  },
  drawer: {
    width: 200,
  },
  drawerPaper: {
    width: 200,
  },
})

const Navbar = () => {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()

  const menuItems = [
    { 
      text: 'Home',       
      path: '/',
      id: 1 
    },
    { 
      text: 'Todo List',        
      path: '/todos',
      id: 2 
    },
    { 
      text: 'Mood Tracker',        
      path: '/moods',
      id: 3  
    },
    { 
      text: 'Journal',        
      path: '/journals',
      id: 4  
    },
    { 
      text: 'Add Post',        
      path: '/journals/new',
      id: 5  
    }
  ];
                                                                                                
    return (      
        <div className={classes.root}>
        <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >  

      <div>      
          <Typography variant="h4">
            myBujo
          </Typography>
      </div>

          <List>
          {menuItems.map((item) => (
            <div>
            <ListItem 
              button 
              key={item.id}              
              onClick={() => history.push(item.path)}
              className={location.pathname === item.path ? classes.active : null}
            >
            <ListItemText primary={item.text} />
            </ListItem>
            </div>
          ))}
        </List>                   
        </Drawer>       
      </div>
      
    );
  }
  
  export default Navbar;