import React from "react";
import styled from "styled-components";

const CSS = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: white;
  box-sizing: border-box;
  padding: 1em;

  h1 {
    font-size: 2em;
    font-weight: bold;
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
    const editableProps = {
      contentEditable: true,
      suppressContentEditableWarning: true,
      onInput: (e) => console.log(e.currentTarget.textContent),
      style: { background: "rgba(0, 0, 0, .4)", minWidth: "1em" },
    };

    const { editable } = this.props;

    return (
      <CSS>
        <h1 {...(editable ? editableProps : {})}>
          {this.props?.content?.header || this.state.header}
        </h1>
      </CSS>
    );
  }
}

export default Layout1;
