import Proptypes from 'prop-types';
import css from './section.module.css';

const Section = ({ title, children }) => {
  return (
    <div>
      <h1 className={css.feedbackTitle}>{title}</h1>
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: Proptypes.string.isRequired,
  children: Proptypes.object.isRequired,
};
