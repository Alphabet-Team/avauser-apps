import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import UserList from '../../components/UserList';

const Users = ({ users, load, toggleFollow }) => {
  
  useEffect(() => {
    load();
    // eslint-disable-next-line
  }, []);

  return <UserList users={users} toggleFollow={toggleFollow} />;
}

const mapProps = (state) => ({
  users: state.users
});

const mapDispatch = (dispatch) => ({
  load: dispatch.users.load,
  toggleFollow: dispatch.users.toggleFollow
});

export default connect(mapProps, mapDispatch)(Users);