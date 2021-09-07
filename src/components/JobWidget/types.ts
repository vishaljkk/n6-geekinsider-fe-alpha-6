// export interface JobWidgetPropTypes {
//     jobTitle: string, 
//     typeOfPosition: string,
//     skills: any,
//     officeLocations: string,
//     exp: string,
//     ctc: string,
//     jobDescription: string,
//     numberOfApplications: any,
//     companyName?: string
// }

export interface JobWidgetPropTypes {
    jobTitle: string, 
    skills: string[], 
    jobLocation: string, 
    exp: number, 
    ctc: number, 
    companyName: string, 
    jobslug: string,
    onClick: (e?: any) => ((e: string) => void)
}