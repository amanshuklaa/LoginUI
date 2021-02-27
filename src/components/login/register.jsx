import React from "react";
import loginImg from "../../login.svg";

import {auth} from "../../firebase";
import Snackbar from "@material-ui/core/Snackbar"
import { IconButton } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';


export class Register extends React.Component {

  constructor(props) {
    super(props);
    this.initialState = {username:'',email:'',password:'',snackbaropen:false,snackbarmsg:'',severity:''}
    this.state = this.initialState  
  }

  handleNamechange = (event)=>{
    this.setState({
      username:event.target.value
    })
  }

  handleEmailChange= (event)=>{
    this.setState({
      email:event.target.value
    })
  }
  handlePasswordChange= (event)=>{
    this.setState({
      password:event.target.value
    })
  }
  snackbarclose= (event)=>{
    this.setState({
      snackbaropen:false
    })

  }
  handleRegisterbtn =(e)=>{
    e.preventDefault()
    const data = this.state
    console.log(data,this.state)
    this.setState(this.initialState)
    try {
     const response =  this.addorEdit(data);     
  } catch (e) {
    console.log(e)
  }
    // clearing the user data
    //todo take care of the user data clearing part 
  }
  async addorEdit(data){
  try{
   const user =  await auth.createUserWithEmailAndPassword(data.email, data.password)
   const userref = auth.currentUser
   await userref.updateProfile({
    displayName: data.username
})
}catch (e) {
  this.setState({snackbaropen:true,snackbarmsg:'Registration Failed.',severity:'error'})
}
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <form onSubmit={this.handleRegisterbtn}>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          
          <div className="form">
            
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" onChange ={this.handleNamechange}value= {this.state.username}/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" onChange ={this.handleEmailChange} value= {this.state.email}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" onChange={this.handlePasswordChange}value= {this.state.password} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn" >
            Register
          </button>
        </div>
        </form>
      <Snackbar open={this.state.snackbaropen} autoHideDuration={10000} onClose={this.snackbarclose}
      anchorOrigin={{vertical:'bottom',horizontal:'center'}}
      >
        <Alert onClose={this.snackbarclose} severity={this.state.severity}>
          
          {this.state.snackbarmsg}
        </Alert>
      </Snackbar>
      </div>
      
    );
  }
}