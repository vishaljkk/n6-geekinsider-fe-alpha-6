import { userTypeTypes, StateUITypes } from '../../routes/types';

export interface LoginPropsTypes {
	setUserType: (e: userTypeTypes) => void,
	history: any,
	setIsAuth: (e: boolean) => void
}

export interface LoginFormSubmitTypes {
	username: string, 
	password: string
}