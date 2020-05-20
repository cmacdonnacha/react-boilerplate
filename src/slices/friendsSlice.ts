import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { RootState } from '.';
import { Friend } from 'models/Friend';
import FriendsAPI from 'services/FriendsAPI';

export interface FriendsState {
  isLoading: boolean;
  hasErrors: boolean;
  friends: Friend[];
}

export const initialState: FriendsState = {
  isLoading: false,
  hasErrors: false,
  friends: [],
};

// Instead of dealing with reducers, actions, and all as separate files and individually creating all those action types, Redux Toolkit gives us the concept of slices.
// A slice automatically generates reducers, action types, and action creators all in one place. As such, you'll only have to create one folder - slices.
// Notice below, the reducers and actions will share the same name.
const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    getFriendsStarted: (state: FriendsState) => {
      state.isLoading = true;
    },
    getFriendsSuccess: (state: FriendsState, action: PayloadAction<Friend[]>) => {
      // Mutating the state directly is usually bad but the 'immer' package, which comes with Redux Toolkit, handles this for us.
      state.friends = action.payload;
      state.isLoading = false;
      state.hasErrors = false;
    },
    getFriendsFailed: (state) => {
      state.isLoading = false;
      state.hasErrors = true;
    },
  },
});

// Three actions generated from the slice. We don't have to define them above since they use the same names as the reducers.
export const { getFriendsStarted, getFriendsSuccess, getFriendsFailed } = friendsSlice.actions;

// A selector which we'll use to access the 'friends' root state from a React component instead of using mapStateToProps (the old way).
// Note: This is not the `friends` property you see at the top of this file but rather the root Friends state in index.ts. They just share the same name.
export const friendsSelector = (state: RootState) => state.friends;

// The reducer. Again this is exposed by the 'friendsSlice' object created above. In the old Redux this was the equivalent to returning the current friends state inside a separate `friendsReducer.ts` file.
export default friendsSlice.reducer;

// Asynchronous thunk action
export function fetchFriends() {
  return async (dispatch: Dispatch) => {
    dispatch(getFriendsStarted());

    try {
      const friends: Friend[] = await FriendsAPI.getFriends();
      dispatch(getFriendsSuccess(friends));
    } catch (error) {
      dispatch(getFriendsFailed());
    }
  };
}
