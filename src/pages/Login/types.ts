import { UserTypeTypes } from '../../routes/types';

export interface LoginPropsTypes {
	setUserType: (e: UserTypeTypes) => void,
	history: any,
	setIsAuth: (e: boolean) => void
}

export interface LoginFormSubmitTypes {
	username: string, 
	password: string
}