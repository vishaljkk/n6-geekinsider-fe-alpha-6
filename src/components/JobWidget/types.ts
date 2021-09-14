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
  jobTitle: string;
  skills: any;
  jobLocation: string;
  exp: number;
  ctc: number;
  companyName: string;
  jobslug: string;
  onClick?: any;
  // onClick?: (e?: any) => ((e: string) => void)
}
