import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem.jsx';
import { Friends } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(({ avatar, name, id, isOnline }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          key={id}
          isOnline={isOnline}
        />
      ))}
    </Friends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
