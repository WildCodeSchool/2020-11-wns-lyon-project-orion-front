import {AuthModel} from '../../models/auth.model';

export const UPDATE_AUTH = 'UPDATE_AUTH';

export const updateAuth = (auth: Partial<AuthModel>) => ({
    type: UPDATE_AUTH,
    payload: {auth},
});
