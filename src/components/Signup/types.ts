import { StateUITypes } from '../../types';

export interface SignupTypes {
	setUiState?: StateUITypes,
	onChange?: any,
	signUp?: any,
	formType?: StateUITypes,
	confirmSignUp?: any
}

export type SignupTabsType = 'candidate' | 'recruiter' | 'emailVerification' | '';