import { userTypeTypes, StateUITypes } from '../../types';

export interface LoginPropsTypes {
	onChange?: (e: any) => void,
	formType?: StateUITypes,
	userType?: userTypeTypes, 
	setUserType?: any,
	updateFormState: any
}

export interface LoginFormSubmitTypes {
	username: string, 
	password: string
}