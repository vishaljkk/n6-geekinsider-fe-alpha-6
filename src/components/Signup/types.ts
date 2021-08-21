import { StateUITypes } from '../../types';

export interface SignupTypes {
	onChange?: any,
	formType?: StateUITypes,
	confirmSignUp?: any,
	userType?: any, 
	setUserType?: any,
	updateFormState?: any
}

export type SignupTabsType = 'candidate' | 'recruiter' | 'emailVerification' | '';