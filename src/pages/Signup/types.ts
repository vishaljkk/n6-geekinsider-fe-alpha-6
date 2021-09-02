import { userTypeTypes, StateUITypes } from '../../routes/types';

export interface SignupTypes {
	setIsAuth: (e: boolean) => void,
	formType?: StateUITypes,
	userType?: userTypeTypes, 
	setUserType?: any,
	history?: any
}

export type SignupTabsType = 'candidate' | 'recruiter' | 'emailVerification' | '';

export interface confirmSignInFormValueTypes {
	authCode: string
}

export interface confirmSignUpTypes extends confirmSignInFormValueTypes {
	email: any
}