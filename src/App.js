import React from "react";

import Time from "components/Time";
import Feeling from "components/Feeling";

class App extends React.Component {
  render() {
    return (
      <div className="fadein background">
        <div className="time">
          <Time />
        </div>
        <div className="center">
          <Feeling />
        </div>
      </div>
    );
  }
}

export default App;
