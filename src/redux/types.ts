export interface StateTypes {
    userType: string,
    isAuth: boolean,
    profileDetails: object,
    messages: object,
    landingData: object,
    searchData: []
}

export interface actionTypes {
    type: string,
    payload: any
}