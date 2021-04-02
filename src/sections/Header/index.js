import { connect } from 'react-redux';
import Header from '../../components/Header';

const mapProps = (state) => ({
    count: state.users.filter(user => user.isFollowing).length,
});
  
export default connect(mapProps)(Header)