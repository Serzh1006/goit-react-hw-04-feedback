import Proptypes from 'prop-types';
import css from './feedback.module.css';

const FeedbackOptions = ({ changeGood, changeNeutral, changeBad }) => {
  return (
    <div>
      <button type="button" className={css.btnFeedback} onClick={changeGood}>
        Good
      </button>
      <button type="button" className={css.btnFeedback} onClick={changeNeutral}>
        Neutral
      </button>
      <button type="button" className={css.btnFeedback} onClick={changeBad}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  changeGood: Proptypes.func.isRequired,
  changeNeutral: Proptypes.func.isRequired,
  changeBad: Proptypes.func.isRequired,
};
