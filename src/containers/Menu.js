import React, {Component} from 'react';
import {connect} from 'react-redux';
import List, {ListItem, ListItemText} from 'material-ui/List';
import Typography from "material-ui/Typography"
import grey from 'material-ui/colors/grey';

import "../scss/menu.scss"

class Menu extends Component {
  render() {
    let {isOpen} = this.props;
    let menuClass = isOpen ? "menu menu-active" : "menu";
    const menuItemTextColor = grey[50];
    console.log('---', menuItemTextColor);
    return (
        <List component="nav" className={menuClass}>
          <ListItem button>
            <ListItemText
                disableTypography
                primary={<Typography type="body2" style={{color: menuItemTextColor}}>Item 1</Typography>}
            />
          </ListItem>
          <ListItem button>
            <ListItemText
                disableTypography
                primary={<Typography type="body2" style={{color: menuItemTextColor}}>Item 2</Typography>}
            />
          </ListItem>
          <ListItem button>
            <ListItemText
                disableTypography
                primary={<Typography type="body2" style={{color: menuItemTextColor}}>Item 3</Typography>}
            />
          </ListItem>
        </List>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
    mapStateToProps,
)(Menu);
