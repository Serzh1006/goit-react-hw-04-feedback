import Proptypes from 'prop-types';
import css from './notification.module.css';

const Notification = ({ message }) => {
  return <h2 className={css.noneFeed}>{message}</h2>;
};

export default Notification;

Notification.propTypes = {
  message: Proptypes.string.isRequired,
};
