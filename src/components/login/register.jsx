import React from "react";
import loginImg from "../../login.svg";

import {auth} from "../../firebase";
export class Register extends React.Component {

  constructor(props) {
    super(props);
    this.initialState = {username:'',email:'',password:'',}
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

  handleRegisterbtn =(e)=>{
    e.preventDefault()
    const data = this.state
    console.log(data,this.state)
    this.setState(this.initialState)
    this.addorEdit(data)
    // clearing the user data
    //todo take care of the user data clearing part 
    console.log(data,this.state)
    
  }
  async addorEdit(data){
   const user =  await auth.createUserWithEmailAndPassword(data.email, data.password)
   const userref = auth.currentUser
   await userref.updateProfile({
    displayName: data.username
})


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
      </div>
      
    );
  }
}