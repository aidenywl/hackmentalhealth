import React from "react";

import Slider from "rc-slider";
import Tooltip from "rc-tooltip";

import "rc-slider/assets/index.css";

import sad from "assets/sad.jpg";
import happy from "assets/happy.jpg";

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

class PostTaskFeeling extends React.Component {
  render() {
    return (
      <div className="feeling">
        <h3>How do you feel after the activity?</h3>
        <br />
        <br />
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 single-blog">
            <div className="title text-center">
              <img src={sad} alt="happy face" height = "80" width ="80" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 single-blog">
            <div>
              <div className="title text-center">
                <br />
                <Slider min={0} max={10} defaultValue={5} handle={handle} />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 single-blog">
            <div className="title text-center">
              <img src={happy} alt="Sad face" height = "80" width ="80" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostTaskFeeling;
