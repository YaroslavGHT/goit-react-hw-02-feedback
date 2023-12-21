import { Component } from 'react';
import { Section } from './Section/Section.jsx';

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
    return (((this.state.good + this.state.neutral) / (this.state.good + this.state.neutral + this.state.bad)) * 100).toFixed(0);
  }

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <Section
          onLeaveFeedback={this.onLeaveFeedback}
          options={0}
          good={this.state.good }
          neutral={ this.state.neutral}
          bad={ this.state.bad}
          total={ this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage() }
        />
      </div>
    );
  }
}
