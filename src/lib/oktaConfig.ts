export const oktaConfig = {
    clientId: '0oahfzefzb5pip3NI5d7',
    issuer: `https://dev-19328572.okta.com/oauth2/default`,
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile','email'],
    pkce:true,
    disableHttpsCheck: true,
    useClassicEngine: true
}