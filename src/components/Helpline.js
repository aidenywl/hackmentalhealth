import React from "react";

const QuoteStyle = {
  fontFamily: "Times New Roman",
  fontSize: "100%",
  letterSpacing: "-5px",
  userSelect: "none",
  color: "white",
  fontWeight: "500",
  textAlign: "center",
  lineHeight: "1"
};

class Quote extends React.Component {
  render() {
    return (
      <div className="Quote">
        <h2>"Don't worry about tomorrow for tomorrow will worry for itself." - Book of Proverbs</h2>
      </div>
    );
  }
}

export default Quote;
