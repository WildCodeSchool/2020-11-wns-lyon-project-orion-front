import {AnyAction} from 'redux';
import {UPDATE_USER} from './user.actions';
import {UserModel} from '../../models/user.model';

const initialState: UserModel = {
    id: null,
    pid: null,
    roles: null,
    email: null,
    gender: null,
    lastName: null,
    firstName: null,
    birthDate: null,
    createdAt: null,
    updatedAt: null,
}

const UserReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case UPDATE_USER: {
            const {user} = action.payload;
            return {...state, ...user};
        }
        default:
            return state;
    }
}

export default UserReducer;
