import React from "react";

const quoteStyle = {
  fontFamily: "Verdana",
  fontSize: "100%",
  userSelect: "none",
  color: "white",
  fontWeight: "500",
  lineHeight: "1",
  bottom: "5px",
  textAlign: "center",
  position: "absolute",
  height:"10",
  width:"100%"
};

class Quote extends React.Component {
  render() {
    return (
      <div className="Quote" style={quoteStyle}>
        <p>"Don't worry about tomorrow for tomorrow will worry for itself." - Book of Proverbs</p>
      </div>
    );
  }
}

export default Quote;
