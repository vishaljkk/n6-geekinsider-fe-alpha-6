import { UserTypeTypes } from '../../routes/types';

export interface SignupTypes {
	setIsAuth: (e: boolean) => void,
	userType?: UserTypeTypes, 
	setUserType?: any,
	history?: any
}

export type SignupTabsType = 'candidate' | 'recruiter' | 'emailVerification' | '';

export interface ConfirmSignInFormValueTypes {
	authCode: string
}

export interface ConfirmSignUpTypes extends ConfirmSignInFormValueTypes {
	email: any
}

export interface UserDetailTypes {
	email: string,
	password: string
}