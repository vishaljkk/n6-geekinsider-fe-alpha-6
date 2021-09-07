import { UserTypeTypes } from '../../routes';

export interface LoginPropsTypes {
	setUserType: (e: UserTypeTypes) => void,
	history: any,
	setIsAuth: (e: boolean) => void,
	setLoading: (e: boolean) => void
}

export interface LoginFormSubmitTypes {
	username: string, 
	password: string
}