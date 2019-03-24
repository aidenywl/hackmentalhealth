import React from "react";
import { connect } from "react-redux";

import { getTimeNow } from "../redux/actions/time";

const timeStyle = {
  paddingBottom: 40,
  fontSize: "1000%",
  cursor: "pointer",
  textShadow: "1px 1px 2px rgba(0,0,0, .5)",
  userSelect: "none",
  color: "white"
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
        {`${hh} : ${mm} `}
        <span style={{ fontSize: 40 }}>{a}</span>
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
