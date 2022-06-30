import React from "react";
import styled from "styled-components";
import { Text } from "../Inputs";

const CSS = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 1em;
  gap: 1em;

  ${(props) => {
    if (props.color) return "background: " + props.color;
    else if (props.src) return 'background-image: url("' + props.src + '")';
    else return "background: white";
  }};

  #left {
    width: 20em;
  }

  #right {
    width: 100%;
  }

  #header {
    text-align: left;
    margin: 0;
    font-size: 2em;
  }

  #paragraph {
    text-align: left;
    margin: 0;
    font-size: 1em;
    font-weight: normal;
  }
`;

class Layout2 extends React.Component {
  static id = "47396e61-ce36-4ba5-8e7e-a0d20b11513b";
  static initialContent = {
    header: "Sample Text",
    paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
  };
  constructor(props) {
    super();
    this.state = props.content || Layout2.initialContent;
  }
  render() {
    const { editable, setContent } = this.props;

    return (
      <CSS {...this.props}>
        <div id="left">
          <Text
            setContent={setContent}
            editable={editable}
            id="header"
            name="header"
            content={this.props?.content}
            initialContent={this.state}
          />
        </div>
        <div id="right">
          <Text
            setContent={setContent}
            editable={editable}
            id="paragraph"
            name="paragraph"
            content={this.props?.content}
            initialContent={this.state}
          />
        </div>
      </CSS>
    );
  }
}

export default Layout2;
