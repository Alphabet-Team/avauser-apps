import { connect } from 'react-redux'
import ToastList from '../../components/ToastList';

const mapProps = (state) => ({
    toasts: state.toasts,
});
  
export default connect(mapProps)(ToastList);