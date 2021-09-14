export type UserTypeTypes = 'candidate' | 'recruiter' | '';
export interface AppTypes {
  userType: UserTypeTypes;
  history: any;
  location: any;
  isAuth: boolean;
  setIsAuth: (e: boolean) => void;
  loading: boolean;
}
