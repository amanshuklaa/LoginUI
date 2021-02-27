  
import React from "react";
import loginImg from "../../login.svg";
import {BrowserRouter as Router,Route,
  Redirect,Switch,withRouter} from 'react-router-dom';
import {auth} from "../../firebase";
// import firebaseDB from "../../firebase";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
            username :'',
            password:'',
            loading: false,
            loginstate:true,
    }
  }

  handleNamechange=(event)=>{
    this.setState({
      username:event.target.value
    })
  }
  handlePasswordChange = (event)=>{
    this.setState({
      password:event.target.value
    })
  }


   handleSubmitform =async(event)=>{
    await auth.signInWithEmailAndPassword(this.state.username, this.state.password)
    this.props.history.push('/dashboard')
    
  }
  render() {
    console.log(this.props.history)
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group" onSubmit={this.handleSubmitform}>
              <label htmlFor="username" >Username</label>
              <input type="text" name="username" placeholder="username" onChange ={this.handleNamechange} />
            </div>
            <div className="form-group">
              <label htmlFor="password" >Password</label>
              <input type="password" name="password" placeholder="password" onChange ={this.handlePasswordChange} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={this.handleSubmitform}>
            Login
          </button>
        </div>
      </div>
    );
  }
}
const Loginpage = withRouter(Login)
export {Loginpage as Login} 