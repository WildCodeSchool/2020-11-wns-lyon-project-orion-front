import {UserModel} from '../../models/user.model';

export const UPDATE_USER = 'UPDATE_USER';

export const updateUser = (user: Partial<UserModel>) => ({
    type: UPDATE_USER,
    payload: {user},
});
