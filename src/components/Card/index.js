import React from 'react';
import {
    Wrapper,
    MiddleArea,
    BottomArea,
    Avatar,
    Name,
    Location,
    TopArea,
    Button
} from './styled';

const Card = ({ user, onFollowClick }) => {
  return (
    <Wrapper>
      <TopArea>
        <Avatar src={user.picture.thumbnail} />
      </TopArea>
      <MiddleArea>
          <Name>{user.name.first} {user.name.last}</Name>
          <Location>{user.location.postcode} {user.location.state}, {user.location.city}, {user.location.street.name}</Location>
      </MiddleArea>
      <BottomArea>
        <Button isActive={user.isFollowing} onClick={(e) => onFollowClick(user)}>
          {user.isFollowing ? '✔ Following' : 'Follow'}
        </Button>
      </BottomArea>
    </Wrapper>
  );
    
};

export default Card;
