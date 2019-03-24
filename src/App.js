import React from "react";

import Time from "components/Time";

class App extends React.Component {
  render() {
    return (
      <div className="fadein background">
        <div className="center">
          <Time />
        </div>
      </div>
    );
  }
}

export default App;
