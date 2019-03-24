import React from "react";
import { Dropdown } from "semantic-ui-react";

const helpStyle = {
  fontSize: "150%",
  userSelect: "none",
  color: "white",
  fontWeight: "500",
  textAlign: "center",
  lineHeight: "1",
  position: "absolute",
  top: "0",
  left: "0",
  padding: "5px",
  cursor: "pointer",
  borderRadius: "5px",
  fontFamily: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
  textDecoration: "underline"
};

const menuStyle = {
  color: "white",
  backgroundColor: "transparent"
};
class Helpline extends React.Component {
  render() {
    return (
      <Dropdown icon="" text="Speak to someone " style={helpStyle}>
        <Dropdown.Menu
          style={{ color: "white", backgroundColor: "transparent" }}
        >
          <Dropdown.Item
            style={menuStyle}
            icon="phone"
            text="National Alliance on Mental Illness: 1-800-950-6264"
          />
          <Dropdown.Item
            style={menuStyle}
            icon="phone"
            text="Mental Health Care Associates: 1-800-985-5990"
          />
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default Helpline;
