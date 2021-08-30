import { userTypeTypes, StateUITypes } from '../../routes/types';

export interface SignupTypes {
	onChange?: (e: any) => void,
	formType?: StateUITypes,
	userType?: userTypeTypes, 
	setUserType?: any,
	updateFormState: any,
	history?: any
}

export type SignupTabsType = 'candidate' | 'recruiter' | 'emailVerification' | '';

export interface confirmSignInFormValueTypes {
	authCode: string
}

export interface confirmSignUpTypes extends confirmSignInFormValueTypes {
	email: any
}