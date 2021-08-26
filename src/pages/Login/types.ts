import { userTypeTypes, StateUITypes } from '../../routes/types';

export interface LoginPropsTypes {
	onChange?: (e: any) => void,
	formType?: StateUITypes,
	userType?: userTypeTypes, 
	setUserType?: any,
	updateFormState: any,
	history: any,
}

export interface LoginFormSubmitTypes {
	username: string, 
	password: string
}