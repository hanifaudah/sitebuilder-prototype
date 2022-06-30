import { useState } from 'react'
import styled from 'styled-components'
import Layout1 from './layouts/Layout1'
import Layout2 from './layouts/Layout2'

const CSS = styled.div`
display: flex;

#layouts {
  background: black;
  height: 100vh;
  width: max-content;
  box-sizing: border-box;
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
}

#workspace {
  background: rgba(0, 0, 0, .1);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
  padding: 1em;

  #workspace-content {
    height: max-content;

    & div + div {
      border-top: 4px dashed rgba(0, 0, 0, .4);
    }
  }
}
`

const LayoutContainer = styled.div`
width: 16em;
height: 9em;

& * {
  font-size: 0.5em;
}
`

const PageCSS = styled.div`
width: 16em;
height: 9em;
font-size: 4em;
background: white;
`

const Page = ({ content }) => {
  return <PageCSS></PageCSS>
}

const SiteBuilder = () => {
  const [pages, setPages] = useState([{}, {}])

  return <CSS>
    <div id="layouts">
      <LayoutContainer><Layout1/></LayoutContainer>
      <LayoutContainer><Layout2/></LayoutContainer>
    </div>
    <div id="workspace">
      <div id="workspace-content">
        {pages.map(pageContent => <Page content={pageContent}/>)}
      </div>
    </div>
  </CSS>
}

export default SiteBuilder