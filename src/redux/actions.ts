export const set_sign_in = (data: any) => {
    return function async(dispatch: any){
        dispatch({
            type:"LOGGEDIN",
            payload: data
        })
    }
}
export const set_sign_out = () => {
    return function async(dispatch: any){
        dispatch({
            type:"LOGGEDOUT",
            payload: null
        })
    }
}