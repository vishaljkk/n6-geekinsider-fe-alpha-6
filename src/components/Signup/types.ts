import { userTypeTypes, StateUITypes } from '../../types';

export interface SignupTypes {
	onChange?: (e: any) => void,
	formType?: StateUITypes,
	userType?: userTypeTypes, 
	setUserType?: any,
	updateFormState: any
}

export type SignupTabsType = 'candidate' | 'recruiter' | 'emailVerification' | '';

export interface confirmSignInFormValueTypes {
	authCode: string
}