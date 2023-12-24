import { Component } from 'react';
import { Section } from './Section/Section.jsx';
import { Statistics } from './Statistics/Statistics.jsx'
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx'
import {Notification} from './Notification/Notification.jsx'

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (event) => {
    const type = event.target.name;
    this.setState((prevState) => ({
      [type]: prevState[type] + 1
    }));
  }

  countTotalFeedback = () => {
    return(this.state.good + this.state.neutral + this.state.bad);
  }

  countPositiveFeedbackPercentage = () => {
      return (((this.state.good) / (this.countTotalFeedback ())) * 100).toFixed(0);
  }

  render() {
    return (
      <>
        <Section title="Please, leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              stat={this.state}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
