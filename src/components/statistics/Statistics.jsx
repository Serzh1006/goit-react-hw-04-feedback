import Proptypes from 'prop-types';
import css from './statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.statistics}>
      <p className={css.statItem}>
        Good: <span className={css.good}>{good}</span>
      </p>
      <p className={css.statItem}>
        Neutral: <span className={css.neutral}>{neutral}</span>
      </p>
      <p className={css.statItem}>
        Bad: <span className={css.bad}>{bad}</span>
      </p>
      <p className={css.statItem}>
        Total: <span className={css.total}>{total}</span>
      </p>
      <p className={css.statItem}>
        Positive: <span className={css.positive}>{positivePercentage}%</span>
      </p>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: Proptypes.number.isRequired,
  neutral: Proptypes.number.isRequired,
  bad: Proptypes.number.isRequired,
  total: Proptypes.number.isRequired,
  positivePercentag: Proptypes.number,
};
