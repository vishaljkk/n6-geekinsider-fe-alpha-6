export type StateUITypes = 'loading' | 'signedIn' | 'signIn' | 'confirmSignUp' | 'forgotPasswordSubmit' | 'signUp' | null;

export type userTypeTypes = 'candidate' | 'recruiter';

export interface initialFormStateTypes {
    username: string,
    password: string,
    email: string,
    authCode: string,
    formType: string
}