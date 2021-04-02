import React from 'react';
import { Container } from './styled';
import Card from '../../components/Card';

const UserList = ({ users, toggleFollow }) => {
  return (
    <Container>
      {users.map(user => (
        <Card
          user={user}
          key={user.id}
          onFollowClick={toggleFollow}
        />
      ))}
    </Container>
  )
}

export default UserList;