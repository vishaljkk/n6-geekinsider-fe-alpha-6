import * as CSS from 'csstype';
import { Auth } from 'aws-amplify';

export const industryTypes = ['Information Technology & Services', 'Hospital & Health Care', 'Construction', 'Retail', 'Education Management', 'Financial Services', 'Accounting', 'Computer Software', 'Higher Education', 'Automotive'];

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

export const generateGithubUrl = (userName: string) => (`https://github.com/${userName}`)

export const whatsAppBaseUrl = 'https://wa.me';

export const getWhatsAppUrl = (whatsappNumber: string, name: string) => {
    let number = whatsappNumber;
    number = number?.replace(/[^\w\s]/gi, '').replace(/ /g, '');
    const url = `${whatsAppBaseUrl}/${number}?text=${encodeURI(`Hello ${name}!!`)}`;
    return url;
}