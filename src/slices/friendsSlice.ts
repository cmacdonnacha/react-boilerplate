import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { RootState } from '.';

export interface FriendsState {
  loading: boolean;
  hasErrors: boolean;
  friends: Friend[];
}

export interface Friend {
  char_id: number;
  name: string;
}

export const initialState: FriendsState = {
  loading: false,
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
    getFriends: (state: FriendsState) => {
      state.loading = true;
    },
    // getFriendsSuccess: (state: FriendsState, action) => {
    getFriendsSuccess: (state: FriendsState, action: PayloadAction<Friend[]>) => {
      state.friends = action.payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getFriendsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// Three actions generated from the slice. We don't have to define them above since they use the same names as the reducers.
export const { getFriends, getFriendsSuccess, getFriendsFailure } = friendsSlice.actions;

// A selector which we'll use to access the 'friends' root state from a React component instead of using mapStateToProps (the old way).
export const friendsSelector = (state: RootState) => state.friends;

// The reducer. Again this is exposed by the 'friendsSlice' object created above. In the old Redux this was the equivalent to returning the current friends state inside a separate `friendsReducer.ts` file.
export default friendsSlice.reducer;

// Asynchronous thunk action
export function fetchFriends() {
  return async (dispatch: Dispatch) => {
    dispatch(getFriends());

    try {
      const response = await fetch('https://www.breakingbadapi.com/api/characters');
      const data: Friend[] = await response.json();

      dispatch(getFriendsSuccess(data));
    } catch (error) {
      dispatch(getFriendsFailure());
    }
  };
}
