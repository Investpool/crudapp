import React from 'react';

class Userform extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            username : "",
            email : "",
            country : "",
            password : ""
        };
    }
    
    onChangeHandler = (event) => {
        this.setState(
           { [event.target.name] : event.target.value} 
        )
    }

    handleSubmit = () => {
        this.props.addUser(this.state);
        this.setState({
            username : "",
            email : "",
            country : "",
            password : ""
        })
    }


    render(){
        return (
    <div>
        <form className="paint">
            <h2>SIGN UP</h2>
            <label>Username</label> <br></br>
            <input type = "text" name = "username" value = {this.state.username} 
            onChange = {this.onChangeHandler}></input> <br></br>

            <label>Email</label> <br></br>
            <input type = "text" name = "email" value = {this.state.email} 
            onChange = {this.onChangeHandler}></input> <br></br>

            <label>Country</label> <br></br>
            <input type = "text" name = "country" value = {this.state.country} 
            onChange = {this.onChangeHandler}></input> <br></br>

            <label>Password</label> <br></br>
            <input type = "password" className="black" name = "password" value = {this.state.password} 
            onChange = {this.onChangeHandler}></input> <br></br>

            <br></br>
            
            <button type="button" className="user" onClick = {this.handleSubmit}>CREAT USER</button>
        </form>
    </div>
        )
    }
}

export default Userform;
