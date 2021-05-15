const initialize = {
    users: [{name: "Jacob", userid: "64646464646", gender: "male"}]
};

const usersReducer = (state = initialize, action) => {
    switch (action.type) {
       
        case "ADD_USER":


        break;

        default:
            return state;
    }
};

export default usersReducer;