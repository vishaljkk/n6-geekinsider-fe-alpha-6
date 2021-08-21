// interface InitialState {
//     userType: string 
// }

const initialState: any = {
    userType: ''
};

const rootReducer = (state=initialState, action: any) => {
    switch(action.type) {
        case 'SET_USER_TYPE':
            return { ...state, userType: action.payload };
        default:
            return { ...state };
    }
}

export default rootReducer;