export interface JobPostDetailWidgetPropTypes {
  jobTitle: string;
  skills: string;
  jobLocation: string;
  ctc: string;
  exp: string;
  jobDescription: string;
  companyName: string;
  numberOfApplications: any;
  applyForJob: (id: string) => void;
}
