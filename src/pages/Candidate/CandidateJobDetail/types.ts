import { JobdetailObjectTypes } from "../../../redux";

export interface CandidateJobDetailPropTypes {
    activeJob: JobdetailObjectTypes,
    match: any,
    candidateDetail: any,
    fetchJobDetail: (e: string) => void
}