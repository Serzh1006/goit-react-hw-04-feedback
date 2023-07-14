import Proptypes from 'prop-types';
import css from './feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => {
    return (
      <button
        className={css.btnFeedback}
        key={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    );
  });
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: Proptypes.arrayOf(Proptypes.string).isRequired,
  onLeaveFeedback: Proptypes.func.isRequired,
};
