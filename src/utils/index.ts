import * as CSS from 'csstype';
import { Auth } from 'aws-amplify';

export const iconStyles: CSS.Properties<string | number> = {
    position:'relative', 
    top:'2px',
    marginRight: '5px',
}

export const isAuthenticated = async () => {
    return Auth.currentAuthenticatedUser()
        .then(e => {
            return {
                result: true,
                ...e
            };
        })
        .catch(err => {
            return {
                result: false,
                ...err
            }
        })
}

export const skills = ['React', 'Angular', 'Vue', 'Ember', 'NodeJS', 'JavaScript', 'HTML', 'CSS', 'SASS'];

export const cities = ['Banglore', 'Pune', 'Chennai', 'Kolkata', 'Mumbai', 'Delhi', 'Indore', 'Vadodara'];

export const jobTypes = ['Full time', 'Part time', 'Contract', 'Internship'];

export const industryTypes = ['Information Technology & Services', 'Hospital & Health Care', 'Construction', 'Retail', 'Education Management', 'Financial Services', 'Accounting', 'Computer Software', 'Higher Education', 'Automotive'];
