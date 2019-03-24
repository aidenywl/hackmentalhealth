import React from "react";
import { connect } from "react-redux";

import { Button } from "semantic-ui-react";
import FlexContainer from "./FlexContainer";

import { selectTheme } from "redux/actions/userSettings";

const buttonStyle = {
  margin: "5px",
  maxWidth: "300px"
};
class ThemeSelection extends React.Component {
  handleClick(theme) {
    return () => this.props.selectTheme(theme);
  }

  _renderThemeList() {
    const themeList = this.props.themeList;
    return (
      <FlexContainer>
        {themeList &&
          themeList.map(theme => {
            return (
              <Button
                inverted
                fluid
                {...(this.props.selectedThemes.has(theme)
                  ? { color: "blue" }
                  : null)}
                style={buttonStyle}
                onClick={this.handleClick(theme)}
              >
                {theme}
              </Button>
            );
          })}
      </FlexContainer>
    );
  }

  render() {
    return (
      <div className="ThemeSelection">
        <h3>What do you want to achieve?</h3>
        <br />
        <br />
        {this._renderThemeList()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    themeList: state.availableData.availableThemes,
    selectedThemes: state.userSettings.selectedThemes
  };
};

const mapDispatchToProps = {
  selectTheme
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeSelection);
