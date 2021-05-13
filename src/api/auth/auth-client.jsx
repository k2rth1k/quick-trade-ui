import { networkClient as NetworkClient } from '@f5cs-ui/core-lib';


export const LOGOUT_END_POINT = '/logout';
export const AUTH_SERVICE_LOGOUT_END_POINT = `${LOGOUT_END_POINT}`;

class AuthClient extends NetworkClient {
    constructor() {
        super('v1');
    }

    authenticate(username, password) {
        return this.post('/login', {
            data: {
                username,
                password
            }
        });
    }

    authenticateWithRefreshToken(access_token,refresh_token) {
        return this.post('/refresh', {
            data: {
                access_token,
                refresh_token: ''
            }
        });
    }
}

const authClient = new AuthClient();
export default authClient;
