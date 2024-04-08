const url = 'https://d1sqw3c8j5yb58.cloudfront.net/';

export const msalConfig = {
    auth: {
        clientId : '3e6ba0dd-bafc-4064-a810-f5916c17470e',
        authority: 'https://login.microsoftonline.com/4dbe1e0a-b1f6-440f-9fde-f0593e5656ca',
        redirectUri : url + '/',
        postLogoutRedirectUri: url + '/login',
        navigateToLoginRequestUrl : false,
    },
    cache : {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: false, 
    },

}

export const loginScope = {
    scopes: ['user.read']
};