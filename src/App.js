import React from "react";
import { connect } from "react-redux";

import Time from "components/Time";
import Feeling from "components/Feeling";
import Quote from "components/Quote";

import { getAvailableThemesAndActivites } from "redux/actions/baseData";

class App extends React.Component {
  componentDidMount() {
    this.props.getAvailableThemesAndActivites();
  }
  render() {
    return (
      <div className="fadein background">
        <div className="time">
          <Time />
        </div>
        <div className="center">
          <Feeling />
        </div>
        <div className="center">
        </div>
        <Quote />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getAvailableThemesAndActivites
};

export default connect(
  null,
  mapDispatchToProps
)(App);
