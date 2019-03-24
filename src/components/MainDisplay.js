import React from "react";
import { connect } from "react-redux";

import { List } from "semantic-ui-react";

import { checkTask } from "redux/actions/userSettings";

const checkboxLabelStyle = {
  fontWeight: "500",
  lineHeight: "1.5em",
  fontSize: "200%",
  color: "white",
  cursor: "pointer"
};

class MainDisplay extends React.Component {
  handleClick(task) {
    console.log("handling click");
    this.props.checkTask(task);
  }

  _renderCheckBoxLabelStyle(task) {
    return {
      ...checkboxLabelStyle,
      ...(this.props.completedTasks && this.props.completedTasks.has(task)
        ? { textDecoration: "line-through" }
        : undefined)
    };
  }
  _renderTaskList() {
    const selectedTasks = [...this.props.selectedTasks];
    return selectedTasks.map(task => {
      return (
        <List.Item>
          <List.Content>
            <List.Description
              style={this._renderCheckBoxLabelStyle(task)}
              onClick={() => this.handleClick(task)}
            >
              • {task}
            </List.Description>
          </List.Content>
        </List.Item>
      );
    });
  }
  render() {
    return (
      <div>
        <h3>Your Goals</h3>
        <List divided verticalAlign="middle">
          {this._renderTaskList()}
        </List>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedTasks: state.userSettings.selectedTasks,
    completedTasks: state.userSettings.completedTasks
  };
};

const mapDispatchToProps = {
  checkTask
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainDisplay);
