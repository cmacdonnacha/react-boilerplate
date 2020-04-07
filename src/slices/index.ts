import { combineReducers } from 'redux';
import friendsReducer from './friendsSlice';

const rootReducer = combineReducers({
  friends: friendsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
