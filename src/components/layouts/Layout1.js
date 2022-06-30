import React from "react";
import styled from "styled-components";
import { Text } from "../Inputs";

const CSS = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: white;
  box-sizing: border-box;
  padding: 1em;

  #header {
    font-size: 2em;
    font-weight: bold;
    margin: 0;
  }
`;

class Layout1 extends React.Component {
  static id = "2757b072-a5c4-4f1d-8b9d-13f24c64fa28";
  static initialContent = {
    header: "Sample Text",
  };
  constructor(props) {
    super();
    this.state = props.content || Layout1.initialContent;
  }
  render() {
    const { editable, setContent, content: currentContent } = this.props;

    return (
      <CSS>
        <Text
          setContent={(name, content) =>
            setContent({ ...currentContent, [name]: content })
          }
          editable={editable}
          id="header"
          name="header"
        >
          {this.props?.content?.header || this.state.header}
        </Text>
      </CSS>
    );
  }
}

export default Layout1;
