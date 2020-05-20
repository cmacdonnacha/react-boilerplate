import { Friend } from 'models/Friend';
import { FRIENDS_URL } from '../constants';
import FetchAPI from './FetchAPI';

const FriendsAPI = {
  getFriends: async () => {
    const response = await FetchAPI.get(FRIENDS_URL);
    const friends: Friend[] = response;
    return friends;
  },
};

export default FriendsAPI;
