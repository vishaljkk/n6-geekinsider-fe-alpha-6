export interface CandidateOnboardingPropTypes {
    history: any
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
    skills: string[] | string,
    whatsappNumber: string
}

export interface RecruiterOnboardingPropTypes {
    history: any,
    isAuth: boolean,
    setIsAuth: (e: boolean) => void
}

export interface RecruitereSubmitTypes {
    about: string,
    location: string,
    name: string,
    skills: string[] | string,
    whatsappNumber: string,
    empSize: string,
    preferredIndustry: string,
    site: string
}