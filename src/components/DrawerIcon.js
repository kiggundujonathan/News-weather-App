import * as React from 'react';
import Box from '@material-ui/core/Box';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useMediaQuery} from '@material-ui/core';
import { createTheme,ThemeProvider } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import "./DrawerIcon.css"



const useStyles = makeStyles({
    list:{
        width: 250,
        paddingLeft: 10,
        paddingRight: 5,
    },
    fullList:{
        width: "auto",
    }
})

export default function SwipeableTemporaryDrawer() {
   const classes = useStyles();
   const [state, setState] = React.useState({
       left: false
  });
  // const prefersDarkMode =useMediaQuery("(prefers-color-scheme: dark)");
  //  const theme = React.useMemo(
  //    ()=>
  //    createTheme({
  //      palette: {
  //        type: prefersDarkMode ? "dark" : "light",
  //      },
  //    }),
  //    [prefersDarkMode]
  //  );

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    
      <div className="nav-items">
      <ListItem><a href="/">Home</a></ListItem>
        <ListItem><a href="/business">Business</a></ListItem>
        <ListItem><a href="/local-news">local News</a></ListItem>
        <ListItem><a href="/global-news">global</a></ListItem>
        <ListItem><a href="/entertainment">entertainment</a></ListItem>

        {['About Us' , 'Contact Us'].map((text, index) => (
          <ListItem button key={text}>
            
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </div>
      {/* <List>
        {["Local News",
       "business",
      "entertainment",
      "global",
       "health",
      "science",
      "sports",
      "technology"].map((text, index) => (
          <ListItem style= {{
            height: 40,
            borderRadius: 3
          }} button 
          key={text} 
          onClick = {()=>(text)}>
            
            <ListItemText primary={text} />
          </ListItem>
        ))}
      
        {['About Us' , 'Contact Us'].map((text, index) => (
          <ListItem button key={text}>
            
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div>
     
        <React.Fragment key={"left"}>
          <Button onClick={toggleDrawer("left", true)}>
              <MenuIcon/>
          </Button>

          <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
         

        </React.Fragment>
   
    </div>
  );
}