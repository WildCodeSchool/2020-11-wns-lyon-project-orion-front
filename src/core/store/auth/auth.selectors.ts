export const AccessToken = state => state['auth']?.accessToken;
export const IsAuthenticated = state => !!state['auth'].accessToken;
