// interface InitialState {
//     userType: string 
// }

const initialState: any = {
    userType: 'candidate'
};

const rootReducer = (state=initialState, action: any) => {
    switch(action.type) {
        case '1':
            return {};
    }
}

export default rootReducer;