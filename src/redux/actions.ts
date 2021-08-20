export const setSignIn = (data: any) => {
    return (dispatch: any) => {
        dispatch({
            type:"LOGGEDIN",
            payload: data
        })
    }
}
export const setSignOut = () => {
    return (dispatch: any) => {
        dispatch({
            type:"LOGGEDOUT",
            payload: null
        })
    }
}