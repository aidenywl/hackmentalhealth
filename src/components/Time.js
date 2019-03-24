import React from "react";
import { connect } from "react-redux";

import { getTimeNow } from "../redux/actions/time";

const timeStyle = {
  fontSize: "900%",
  letterSpacing: "-5px",
  userSelect: "none",
  color: "white",
  fontWeight: "500",
  textAlign: "center",
  lineHeight: "0.4",
  textShadow: "2px 2px 50px black"
};

class Time extends React.Component {
  componentWillMount() {
    this.props.getTimeNow();
    setInterval(() => this.props.getTimeNow(), 1000);
  }

  render() {
    const { hh, mm, a } = this.props;
    return (
      <div style={timeStyle}>
        {`${hh}:${mm} `} <span style={{ fontSize: 50, letterSpacing: ".01em" }}>{a}</span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    hh: state.time.time.hh,
    mm: state.time.time.mm,
    a: state.time.time.a
  };
};

const mapDispatchtoProps = {
  getTimeNow
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Time);
