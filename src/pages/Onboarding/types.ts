export interface CandidateOnboardingPropTypes {
    history: any,
    saveCandidateData: (e: CandidateSubmitTypes, history: any) => void,
    skills: string[], 
    cities: string[]
}

export interface CandidateSubmitTypes {
    about: string,
    ctc: string,
    email: string,
    exp: string,
    githubUrl: string,
    jobTitle: string,
    location: string,
    name: string,
    skills?: string[] | string,
    whatsappNumber: string,
    fetchCandidateDetails: (e: string) => void,
    gitInfo: any
}

export interface RecruiterOnboardingPropTypes {
    history: any,
    isAuth: boolean,
    setIsAuth: (e: boolean) => void,
    saveRecruiterData: (e: RecruitereSubmitTypes, history: any) => void,
    skills: string[],
    cities: string[]
}

export interface RecruitereSubmitTypes {
    about: string,
    location: string,
    name: string,
    skills?: string[] | string,
    whatsappNumber: string,
    empSize: number,
    preferredIndustry: string,
    site: string
}