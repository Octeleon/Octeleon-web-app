import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer'
import 'typeface-roboto'
import {Menu,MenuItem} from 'material-ui/Menu'
import List, {ListItem,ListItemIcon,ListItemText} from 'material-ui/List'
import injectTapEventPlugin from 'react-tap-event-plugin';
import Router, { Route, DefaultRoute, NotFoundRoute, Redirect, Link } from 'react-router';
import MyServers from './components/MyServers'
import MyDashboard from './components/MyDashboard'
import {People,Close,Dns,Dashboard,NotificationsActive} from 'material-ui-icons'
import Icon from 'material-ui/Icon'

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Avatar from 'material-ui/Avatar'


injectTapEventPlugin();
 
const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      pageTitle:"Servers",
      showAppBar:true
  };
    
  }

  toggleDrawer = () => {
    this.setState({open: !this.state.open})
    console.log('sdfs')
  }

  changePage = (pageTitle) => {
    this.toggleDrawer()
    this.setState({pageTitle})
    
  }

  setShowAppBar = (showAppBar) => this.setState({showAppBar})

  render() {
    const {classes} = this.props
    const contentStyle = {  transition: 'margin 400ms cubic-bezier(0.23, 1, 0.32, 1)' };
    
    if (this.state.open) {
      contentStyle.marginLeft = 256;
    }

    if (!this.state.showAppBar) {
      contentStyle.marginTop = -70
    }

    return (
      <MuiThemeProvider>
        <div>
        <div style={contentStyle}>
        <AppBar position="static" style={{backgroundColor:"teal"}}>
        <Toolbar>
          <IconButton className={classes.menuButton}
          color="contrast"
          aria-label="Menu"
          onClick={this.toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            {this.state.pageTitle}
          </Typography>
          <Button color="contrast">Login</Button>
        </Toolbar>
      </AppBar>
        {this.state.pageTitle==='Dashboard' && <MyDashboard />}
        {this.state.pageTitle==='Servers' && <MyServers setShowAppBar={this.setShowAppBar} />}
        
        


        </div>
        <Drawer open={this.state.open} 
        onRequestClose={()=>this.toggleDrawer()}
        >
          <div style={{width:256}}>

          <Avatar src="ben.png" style={{float:"left", margin:8}}/>
          <div style={{height:80,marginTop:8}}>
           <IconButton style={{float:'right'}}
           onClick={this.toggleDrawer}>
             <Close/>
          </IconButton>
          </div>
          <List>
            <ListItem button onClick={()=>this.changePage("Dashboard")}>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button onClick={()=>this.changePage("Active Alerts")}>
            <ListItemIcon>
              <NotificationsActive />
            </ListItemIcon>
            <ListItemText primary="Active Alerts" />
            </ListItem>
            <ListItem button onClick={()=>this.changePage("Servers")}>
            <ListItemIcon>
              <Dns />
            </ListItemIcon>
            <ListItemText primary="Servers" />
            </ListItem>
            <ListItem button onClick={()=>this.changePage("People")}>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary="People"/>
            </ListItem>
            <ListItem primaryText={"Dashboard"}
              rightIcon={<Dashboard/>}
              onClick={()=>this.changePage("Dashboard")}/>
            <ListItem primaryText={"Active Alerts"} rightIcon={<People/>} />
            <ListItem primaryText={"Servers"}
              rightIcon={<Dns/>}
              onClick={()=>this.changePage("Servers")}/>
            <ListItem primaryText={"People"} rightIcon={<People/>} />
        </List>

          </div>
        </Drawer>
        
          {/* <Toolbar>
          <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
            <MenuIcon onClick={this.toggleDrawer}/>
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            {this.state.pageTitle}
          </Typography>
          <Button color="contrast">Login</Button>
        </Toolbar>
        <List>
            <ListItem primaryText={"Dashboard"}
              rightIcon={<Dashboard/>}
              onClick={()=>this.changePage("Dashboard")}/>
            <ListItem primaryText={"Active Alerts"} rightIcon={<People/>} />
            <ListItem primaryText={"Servers"}
              rightIcon={<Dns/>}
              onClick={()=>this.changePage("Servers")}/>
            <ListItem primaryText={"People"} rightIcon={<People/>} />
        </List>
        </Drawer> */}
        </div>
      </MuiThemeProvider>  

    );
  }

}
export default withStyles(styles)(App);

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {open:false}
//   }

//   handleToggle = () => this.setState({open:!this.state.open})
  
//   render() {
//     return (
//     <MuiThemeProvider>
//       <Drawer open={this.state.open} onToggleDrawer={this.handleToggle}>
//     <Menu onItemTouchTap={this.handleToggle}>
//       <MenuItem >
//         CLOSE ( X )
//       </MenuItem>
//       …
//     </Menu>
//   </Drawer>
//       <MyAppBar />
//       <MyComponent />
//     </MuiThemeProvider>
//   );
//   }
// }



// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import 'typeface-roboto'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
