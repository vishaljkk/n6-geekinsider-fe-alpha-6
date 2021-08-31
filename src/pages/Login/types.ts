import { userTypeTypes, StateUITypes } from '../../routes/types';

export interface LoginPropsTypes {
	setUserType: (e: userTypeTypes) => void,
	history: any,
}

export interface LoginFormSubmitTypes {
	username: string, 
	password: string
}