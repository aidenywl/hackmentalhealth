import React from "react";

import Slider from "rc-slider";
import Tooltip from "rc-tooltip";

import "rc-slider/assets/index.css";

const Handle = Slider.Handle;

const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={true}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

class Feeling extends React.Component {
  render() {
    return (
      <div className="feeling">
        <h3>How are you feeling today?</h3>
        <Slider min={0} max={10} defaultValue={5} handle={handle} />
      </div>
    );
  }
}

export default Feeling;
