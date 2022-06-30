import React from 'react'
import styled from 'styled-components'

const CSS = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
height: 100%;
background: white;
box-sizing: border-box;
padding: 1em;
gap: 1em;

h1 {
  text-align: left;
  margin: 0;
  font-size: 2em;
}

p {
  text-align: left;
  margin: 0;
  font-size: 1em;
}
`

class Layout2 extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '47396e61-ce36-4ba5-8e7e-a0d20b11513b',
      header: 'Sample Text',
      paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
    };
  }
  render() {
    return <CSS>
      <h1>{this.state.header}</h1>
      <p>{this.state.paragraph}</p>
    </CSS>
  }
}

export default Layout2