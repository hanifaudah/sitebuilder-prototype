import { useState } from "react";
import styled from "styled-components";
import Layout1 from "./layouts/Layout1";
// import Layout2 from './layouts/Layout2'

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
    background: rgba(0, 0, 0, 0.1);
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
        border-top: 4px dashed rgba(0, 0, 0, 0.4);
      }
    }
  }
`;

const LayoutContainer = styled.div`
  width: 16em;
  height: 9em;

  & * {
    font-size: 0.5em;
  }
`;

const PageCSS = styled.div`
  width: 16em;
  height: 9em;
  font-size: 4em;
  background: white;
`;

const Page = (props) => {
  return <PageCSS {...props}></PageCSS>;
};

const layoutComponents = {
  [Layout1.id]: {
    initialContent: Layout1.initialContent,
    component: (content) => <Layout1 content={content} />,
  },
};

const SiteBuilder = () => {
  const [pages, setPages] = useState([{}, {}]);
  const [activeLayoutIdx, setCurrentActiveLayoutIdx] = useState(null);

  return (
    <CSS>
      <div id="layouts">
        {Object.keys(layoutComponents).map((layoutId, idx) => {
          const { component } = layoutComponents[layoutId];
          return (
            <LayoutContainer
              key={idx}
              draggable
              onDragStart={() => {
                setCurrentActiveLayoutIdx(layoutId);
              }}
            >
              {component()}
            </LayoutContainer>
          );
        })}
      </div>
      <div id="workspace">
        <div id="workspace-content">
          {pages.map((pageContent, idx) => (
            <Page
              onDrop={() => {
                console.log(activeLayoutIdx);
                setCurrentActiveLayoutIdx(null);
              }}
              onDragOver={(e) => e.preventDefault()}
              content={pageContent}
              key={idx}
            />
          ))}
        </div>
      </div>
    </CSS>
  );
};

export default SiteBuilder;
