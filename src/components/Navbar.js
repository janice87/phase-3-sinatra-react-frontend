import Typography from '@material-ui/core/Typography'
import Drawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
// import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { useHistory, useLocation } from 'react-router-dom'

const drawerWidth = 100

const useStyles = makeStyles({
  page: {
    background: '#f9f9f9',
    width: '100%',
  },
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
})

const Navbar = () => {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()

  const menuItems = [
    { 
      text: 'Home',       
      path: '/' 
    },
    { 
      text: 'Todo List',        
      path: '/todos' 
    },
    { 
      text: 'Mood Tracker',        
      path: '/moods' 
    },
    { 
      text: 'Journal',        
      path: '/journals' 
    },
    { 
      text: 'Add Journal',        
      path: '/journals/new' 
    }
  ];

    return (
      <div>
        <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >  
      <div>      
          <Typography variant="h5" className={classes.title}>
            myBujo
          </Typography>
      </div>

          <List>
          {menuItems.map((item) => (
            <ListItem 
              button 
              key={item.text} 
              onClick={() => history.push(item.path)}
              className={location.pathname == item.path ? classes.active : null}
            >
              {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        </Drawer>       
      
      </div>
    );
  }
  
  export default Navbar;