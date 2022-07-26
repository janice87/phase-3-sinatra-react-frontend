import { useHistory, useLocation } from 'react-router-dom'
import { Drawer, Typography, List, ListItem, ListItemText, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
  page: {
    background: '#f9f9f9',
    width: '100%',
  },
  root: {
    display: 'flex',
  },
  drawer: {
    width: 150,
  },
  drawerPaper: {
    width: 150,
  },
})

const Navbar = () => {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()

  const menuItems = [
    { 
      id: 1, 
      text: 'Home',       
      path: '/'
    },
    { 
      id: 2,
      text: 'Todo List',        
      path: '/todos'
    },
    { 
      id: 3, 
      text: 'Mood Tracker',        
      path: '/moods'
    },
    { 
      id: 4,  
      text: 'Journal',        
      path: '/journals'
    },
    { 
      id: 5,  
      text: 'Add Post',        
      path: '/journals/new'
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
          <Typography variant="h4" style={{margin: ".5em" }}>
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
                <ListItemText primary={item.text} key={item.name} />
              </ListItem>
            </div>
          ))}
        </List>                   
        </Drawer>       
      </div>
      
    );
  }
  
  export default Navbar;