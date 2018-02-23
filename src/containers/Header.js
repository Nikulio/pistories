import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Menu from "./Menu"
import {Link} from "react-router-dom"

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const LoginLink = (props) => <Link to="/" {...props}/>;

class Header extends Component {
  state = {
    menuOpen : false
  };
  toggleMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  };
  render() {
    const {classes} = this.props;
    return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.menuButton} onClick={this.toggleMenu} color="inherit" aria-label="Menu">
                <MenuIcon/>
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                Dashboard
              </Typography>
              <Button component={LoginLink} color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
          <Menu isOpen={this.state.menuOpen} />
        </div>
    )
  }
}


export default withStyles(styles)(Header);