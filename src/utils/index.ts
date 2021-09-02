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