export interface CandidateOnboardingPropTypes {
    history: any,
    saveCandidateData: (e: CandidateSubmitTypes, history: any) => void
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
    whatsappNumber: string
}

export interface RecruiterOnboardingPropTypes {
    history: any,
    isAuth: boolean,
    setIsAuth: (e: boolean) => void,
    saveRecruiterData: (e: RecruitereSubmitTypes, history: any) => void
}

export interface RecruitereSubmitTypes {
    about: string,
    location: string,
    name: string,
    skills?: string[] | string,
    whatsappNumber: string,
    empSize: string,
    preferredIndustry: string,
    site: string
}