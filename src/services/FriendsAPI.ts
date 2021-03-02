import { Friend } from 'models/Friend';
import { FRIENDS_URL } from '../constants/urls';
import FetchAPI from './FetchAPI';

const FriendsAPI = {
  getFriends: async () => {
    const friends: Friend[] = await FetchAPI.get(FRIENDS_URL);
    return friends || [];
  },
};

export default FriendsAPI;
