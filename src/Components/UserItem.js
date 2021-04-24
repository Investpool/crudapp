import React from "react";

class UserItem extends React.Component{
   
    
    handleDelete=()=>{
        
        this.props.deleteUser(this.props.user.id);
    }

    render(){
        return(
            <div className = "row text-center">
            <div className = "col-md-3">
                <h4>USERNAME</h4>
                {this.props.user.username}
            </div>

            <div className = "col-md-4">
                <h4>EMAIL</h4>
                {this.props.user.email}
            </div>

            <div className = "col-md-2">
               <h4>COUNTRY</h4>
                {this.props.user.country}
            </div>

            <div>
                <h4>ACTION</h4>
                <button className = "btn btn-success">Edit</button>
                <button className = "btn btn-danger" onClick = {this.handleDelete} >Delete</button>
            </div>

        </div>
        );
    };
}

export default UserItem;
