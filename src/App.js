import './App.css';
import React from 'react';
import Userform from './Components/Userform';
import UserList from './Components/UserList';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      users : [] //setting up an empty array here so that the users can be updated here

    }
  }

  //a function that will take the list of users
  addUser = (user) => {
    user.id = 100 * Math.random() * 100000;
    this.setState({
      users :[...this.state.users, user] //copying each user into the array
    })

    console.log({user});
  }

  deleteUser = (id) =>{
    this.setState({
      users : this.state.users.filter(user => user.id !==id)
    })
   }
 


  render(){
    return (
      <div className="container eks">
      <div className="row">
        <div className = "col-md-3 userinput">
          <Userform addUser = {this.addUser} />
        </div>
        
        <div className = "col-md-9 userlist">
          <UserList users = {this.state.users}deleteUser = {this.deleteUser}/>   
        </div>
        
      </div>
      </div>
  
    );
  }
  
}

export default App;
