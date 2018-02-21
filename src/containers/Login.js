import React, {Component} from 'react';
import {connect} from 'react-redux';


import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

import {Link} from "react-router-dom"

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

function ButtonSizes(props) {
  const {classes} = props;
  return (
      <div>
        <div>
          <Button size="small" className={classes.button}>
            Small
          </Button>
          <Button size="medium" className={classes.button}>
            Medium
          </Button>
          <Button size="large" className={classes.button}>
            Large
          </Button>
        </div>
        <div>
          <Button variant="raised" size="small" color="primary" className={classes.button}>
            Small
          </Button>
          <Button variant="raised" size="medium" color="primary" className={classes.button}>
            Medium
          </Button>
          <Button variant="raised" size="large" color="primary" className={classes.button}>
            Large
          </Button>
        </div>
        <div>
          <Button variant="fab" mini color="secondary" aria-label="add" className={classes.button}>
            <AddIcon/>
          </Button>
          <Button variant="fab" color="secondary" aria-label="add" className={classes.button}>
            <AddIcon/>
          </Button>
        </div>
      </div>
  );
}

ButtonSizes.propTypes = {
  classes: PropTypes.object.isRequired,
};


class Login extends Component {
  render() {
    const {classes} = this.props;
    
    return (
        <div className="login">
          <div className="overlay" />
          <video autoPlay muted loop id="myVideo">
            <source src="/back.mp4" type="video/mp4" />
          </video>
          <Link to="/app">
            <Button variant="raised" size="large" color="secondary" className={classes.button}>
              Launch
            </Button>
          </Link>
        </div>
    )
  }
}

const LoginComp = withStyles(styles)(Login);


function mapStateToProps(state) {
  return {};
}


export default connect(
    mapStateToProps,
)(LoginComp);
