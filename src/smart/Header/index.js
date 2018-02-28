import React, {Component} from 'react';
import "./index.scss"
import Camera from "material-ui-icons/Camera.js"
import {submitUser} from "../../ac"
import {Field, reduxForm} from "redux-form"
import {connect} from "react-redux"

const styles = {
  icon: {
    width: 45,
    height: 45,
    color: "#fff"
  },
}; 

let UserForm = props => {
  const {handleSubmit} = props;
  return (
      <form onSubmit={handleSubmit} className={props.class}>
        <div className="input-wrap">
          <Field type="text" component="input" name="login"/>
        </div>
        <div className="input-wrap">
          <button type="submit" className="btn">Save</button>
        </div>
      </form>
  );
};

//TODO: query innego typu

class Header extends Component {
  
  state = {
    userFormOpen: true
  };
  
  submit = data => {
    Object.keys(this.props.users).map(e => {
      if (!(data.login === users[e].login)) {
        this.props.submitUser(data);
      }
    });
  //
  };
  
  render() {
    let {users} = this.props;
    let userFormClass = this.state.userFormOpen ? "header__user form-active" : "header__user"
    return (
        <section className="header">
          <div className="wrapper">
            <div className="logo">
              <Camera style={styles.icon}/>
            </div>
            <UserForm class={userFormClass} onSubmit={this.submit}/>
          </div>
        </section>
    
    );
  }
}

UserForm = reduxForm({form: "notesForm"})(UserForm);

const mapDispatachToProps = {
  submitUser
}

export default connect((state => ({
  users: state.users
})), mapDispatachToProps)(Header);
