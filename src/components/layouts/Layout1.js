import React from 'react'
import styled from 'styled-components'

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
`

class Layout1 extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '2757b072-a5c4-4f1d-8b9d-13f24c64fa28',
      header: 'Sample Text'
    };
  }
  render() {
    return <CSS>
      <h1>{this.state.header}</h1>
    </CSS>
  }
}

export default Layout1