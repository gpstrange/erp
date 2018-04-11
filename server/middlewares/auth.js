// Server / Middlewares / Auth

import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';

import serverConfig from '../configs/server';

export default (request, response, next) => {
    const authorizationHeader = request.headers['authorization'];
    let token;
    if(authorizationHeader) {
        token = authorizationHeader.split(' ')[1];
    }
    if(token) {
        jwt.verify(token, serverConfig.secret, (error, decoded) => {
            if(error) {
                response.status(403).json({ errors: 'Authentication failed. Token is invalid.' });
            } else {
                request.currentUser = jwtDecode(token);
                next();
            }
        });
    } else {
        response.status(403).json({ errors: 'Authentication failed. No token provided.' });
    }
}