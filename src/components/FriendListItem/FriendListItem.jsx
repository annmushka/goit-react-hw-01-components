import PropTypes from 'prop-types';
import { ListItem, Avatar, Name, Status } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ListItem>
      {/* <Status style={{ background: isOnline ? 'green' : 'red' }}></Status> */}
      <Status isOnline={isOnline} />
      <Avatar src={avatar} alt="User avatar" />
      <Name>{name}</Name>
    </ListItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
