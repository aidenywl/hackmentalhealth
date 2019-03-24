import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";

import Time from "components/Time";
import Feeling from "components/Feeling";

import Quote from "components/Quote";
import ThemeSelection from "components/ThemeSelection";
import { Button } from "semantic-ui-react";

import {
  MODES,
  isMoodMode,
  isInitialMode,
  isThemeMode,
  isTaskMode,
  isMainMode,
  updateMode
} from "redux/actions/mode";
import { getAvailableThemesAndActivites } from "redux/actions/baseData";

class App extends React.Component {
  componentDidMount() {
    this.props.getAvailableThemesAndActivites();
  }

  _nextMode() {
    const currentMode = this.props.currentMode;
    if (isMoodMode(currentMode) && !this.props.userSettings.themes) {
      return MODES.THEME_SELECTION;
    } else if (isThemeMode(currentMode) || isMoodMode(currentMode)) {
      return MODES.TASK_SELECTION;
    } else if (isTaskMode(currentMode)) {
      return MODES.MAIN_SCREEN;
    } else {
      return MODES.MAIN_SCREEN;
    }
  }
  render() {
    const currentMode = this.props.currentMode;
    return (
      <div className="fadein background">
        <div className="time">
          <Time />
        </div>
        <div className="center">
          <CSSTransition
            in={isMoodMode(currentMode)}
            timeout={300}
            unmountOnExit
            onExited={() => this._nextMode()}
            classNames="menu"
          >
            <Feeling />
          </CSSTransition>
          <CSSTransition
            in={isThemeMode(currentMode)}
            timeout={300}
            unmountOnExit
            onExited={() => updateMode(this._nextMode())}
            classNames="menu"
          >
            <ThemeSelection />
          </CSSTransition>
          <br />
          <Button
            inverted
            fluid
            onClick={() => this.props.updateMode(this._nextMode())}
          >
            Next
          </Button>
        </div>
        <div className="center" />
        <Quote />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getAvailableThemesAndActivites,
  updateMode
};

const mapStateToProps = state => ({
  currentMode: state.currentMode,
  userSettings: state.userSettings
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
