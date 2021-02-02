import AuthReducer from './auth/auth.reducer';
import UserReducer from './user/user.reducer';
import {combineReducers} from 'redux';

export const RESET_APP = 'RESET_APP';

const reducers = combineReducers({
    auth: AuthReducer,
    user: UserReducer,
});

export const rootReducer = (state, action) => {
    if (action.type === RESET_APP) {
        state = undefined;
    }

    return reducers(state, action)
}
