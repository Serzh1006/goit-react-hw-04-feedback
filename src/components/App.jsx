import { useState, useEffect } from 'react';
import Section from './section/Section';
import FeedbackOptions from './feedbackoptions/Feedbackoptions';
import Statistics from './statistics/Statistics';
import Notification from './notification/Notification';
import css from './app.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const changeGood = () => {
    setGood(prevState => prevState + 1);
  };

  const changeNeutral = () => {
    setNeutral(prevState => prevState + 1);
  };

  const changeBad = () => {
    setBad(prevState => prevState + 1);
  };

  // countTotalFeedback = () => {
  //   return good + neutral + bad;
  // };

  // countPositiveFeedbackPercentage = total => {
  //   return (good * 100) / total;
  // };
  const countStatistics = totalStat => {
    setTotal(totalStat);
    console.log('total: ', total);
  };

  useEffect(() => {
    const totalStat = good + neutral + bad;
    countStatistics(totalStat);
    console.log('totalStat: ', totalStat);
    console.log(good, neutral, bad);
  }, [good, neutral, bad]);

  // addfeedback = option => {
  //   this.setState(prevState => ({
  //     [option]: prevState[option] + 1,
  //   }));
  // };

  // const percentage = countPositiveFeedbackPercentage(total);
  return (
    <div className={css.app}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          changeGood={changeGood}
          changeNeutral={changeNeutral}
          changeBad={changeBad}
        />
      </Section>
      {/* <Section title="Statistics">
        {total !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentage.toFixed(2)}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section> */}
    </div>
  );
};
