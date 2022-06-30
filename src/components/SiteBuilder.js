import { useState } from "react";
import styled from "styled-components";
import Layout1 from "./layouts/Layout1";
import Layout2 from "./layouts/Layout2";

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
  width: ${16 * 4}em;
  height: ${9 * 4}em;
  font-size: 1em;
  background: white;

  & + & {
    border-top: 4px dashed rgba(0, 0, 0, 0.4);
  }
`;

const Page = (props) => {
  return (
    <PageCSS {...props}>
      {props.layoutComponent ? props.layoutComponent(props.content) : null}
    </PageCSS>
  );
};

const layoutComponents = {
  [Layout1.id]: {
    content: Layout1.initialContent,
    component: (props) => <Layout1 {...props} />,
  },
  [Layout2.id]: {
    content: Layout2.initialContent,
    component: (props) => <Layout2 {...props} />,
  },
};

const SiteBuilder = () => {
  const [pages, setPages] = useState([{}, {}]);
  const [activeLayoutId, setCurrentActiveLayoutId] = useState(null);

  return (
    <CSS>
      <div id="layouts">
        {Object.keys(layoutComponents).map((layoutId, idx) => {
          const { component, content } = layoutComponents[layoutId];
          console.log(content);
          return (
            <LayoutContainer
              key={idx}
              draggable
              onDragStart={() => {
                setCurrentActiveLayoutId(layoutId);
              }}
            >
              {component()}
            </LayoutContainer>
          );
        })}
      </div>
      <div id="workspace">
        <button onClick={() => console.log(pages)}>Data</button>
        <div id="workspace-content">
          {pages.map(({ content, component }, idx) => (
            <Page
              onDrop={() => {
                pages[idx] = {
                  ...layoutComponents[activeLayoutId],
                  content: { ...layoutComponents[activeLayoutId].content },
                };
                setCurrentActiveLayoutId(null);
              }}
              onDragOver={(e) => e.preventDefault()}
              content={content}
              layoutComponent={
                component
                  ? (content) =>
                      component({
                        content,
                        editable: true,
                        setContent: (name, content) => {
                          pages[idx].content[name] = content;
                        },
                      })
                  : null
              }
              key={idx}
            />
          ))}
        </div>
      </div>
    </CSS>
  );
};

export default SiteBuilder;
