let initialState = {
    users :[]
}

const usersReducer = (state = initialState, action)=>{
     switch(action.type){
        case "ADD_USER":
            return { ...state, users: [...state.users, action.payload] }

        case "EDIT_USER":
            var id = action.payload.id;
            let updatedUserInfo = action.payload.updatedUserInfo;
            let usersAfterUpdate = state.users.map((user) => {
              if (user.id === id) {
                return updatedUserInfo;
              }
              return user;
            });
            return { users: usersAfterUpdate };

        case 'DELETE_USER':
               
                let usersAfterDelete = state.users.filter((user) => user.id !== id);
                return { users: usersAfterDelete };
           
        default:
            return state;
     }
}

export default usersReducer;