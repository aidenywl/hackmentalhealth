import React from "react";
import { connect } from "react-redux";

import { Button } from "semantic-ui-react";
import FlexContainer from "./FlexContainer";

import { selectTask, getTasksForThemes } from "redux/actions/userSettings";

const buttonStyle = {
  margin: "10px",
  maxWidth: "300px"
};

const NUM_TASKS_TO_SHOW = 8;

class TaskSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskListForThemes: [],
      tasksToShow: []
    };
  }

  componentDidMount() {
    const taskListForThemes = getTasksForThemes(
      this.props.selectedThemes,
      this.props.allAvailableTasks
    );
    const randomTasks = this.getRandom(taskListForThemes, NUM_TASKS_TO_SHOW);
    this.setState({
      taskListForThemes: taskListForThemes,
      tasksToShow: randomTasks
    });
  }
  getRandom(arr, n) {
    if (n > arr.length) {
      n = arr.length;
    }
    var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }
  handleClick(theme) {
    return () => this.props.selectTask(theme);
  }

  _renderTaskList() {
    const tasksToShow = this.state.tasksToShow;
    return (
      <FlexContainer>
        {tasksToShow &&
          tasksToShow.map(task => {
            return (
              <Button
                inverted
                fluid
                {...(this.props.selectedTasks.has(task)
                  ? { color: "blue" }
                  : null)}
                style={buttonStyle}
                onClick={this.handleClick(task)}
              >
                {task}
              </Button>
            );
          })}
      </FlexContainer>
    );
  }

  render() {
    return (
      <div className="ThemeSelection">
        <h3>Get engaged! Explore a few goals.</h3>
        {this._renderTaskList()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allAvailableTasks: state.availableData.availableTasks,
    selectedThemes: state.userSettings.selectedThemes,
    selectedTasks: state.userSettings.selectedTasks
  };
};

const mapDispatchToProps = {
  selectTask
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskSelection);
