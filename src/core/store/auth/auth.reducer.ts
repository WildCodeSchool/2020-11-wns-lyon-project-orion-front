import {AuthModel} from '../../models/auth.model';
import {UPDATE_AUTH} from './auth.actions';
import {AnyAction} from 'redux';

const initialState: AuthModel = {
    accessToken: null,
    expiresIn: null,
};

const AuthReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case UPDATE_AUTH: {
            const {auth} = action.payload;
            return {...state, ...auth};
        }
        default:
            return state;
    }
}

export default AuthReducer;

