export type UserTypeTypes = 'candidate' | 'recruiter' | '';
export interface AppTypes {
    history: any,
    location: any,
    isAuth: boolean,
    setIsAuth: (e: boolean) => void,
    loading: boolean,
    fetchSkills: () => void, 
    fetchCities: () => void
  }