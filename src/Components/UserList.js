import React from 'react';
import UserItem from './UserItem';

class UserList extends React.Component{
    render(){
        return (
            <div>
                <h2 className="dc">USER LIST</h2>
                {this.props.users.map((user) => {
                    return <UserItem  user = {user} key={user.id}deleteUser={this.props.deleteUser}/>;
                })}
            
            </div>
        )
    }
}

export default UserList;

