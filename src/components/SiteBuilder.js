import { useState } from "react";
import styled from "styled-components";
import Layout1 from "./layouts/Layout1";
import Layout2 from "./layouts/Layout2";

const CSS = styled.div`
  display: flex;

  #toolbar {
    display: flex;

    #options {
      background: white;
      height: 100%;

      .option-items {
        box-sizing: border-box;
        padding: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &.active {
          background: black;
          color: white;
        }

        h1 {
          font-size: 1em;
          font-weight: normal;
          margin: 0;
        }
      }
    }

    #option-contents {
      background: black;
      height: 100vh;
      width: 20em;

      .option-items {
        display: flex;
        justify-content: center;
        padding: 1em;

        #layouts {
          box-sizing: border-box;
          gap: 1em;
          display: flex;
          flex-direction: column;
        }

        #backgrounds {
          box-sizing: border-box;
          gap: 1em;
          display: flex;
          flex-direction: column;
        }
      }
    }
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
  ${(props) => {
    if (props.color) return "background: " + props.color;
    else if (props.src) return 'background-image: url("' + props.src + '")';
    else return "background: white";
  }};

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

const BackgroundContainersCSS = styled.div`
  width: 16em;
  height: 9em;
  font-size: 1em;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  background: ${(props) => (props.color ? props.color : "none")};
`;

const BackgroundContainers = (props) => {
  return (
    <BackgroundContainersCSS {...props}>
      {props.src ? <img src={props.src} alt="" /> : null}
    </BackgroundContainersCSS>
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

const backgrounds = [
  {
    src: "https://i.pinimg.com/736x/31/0c/63/310c63454e892ccb35941c79d648951e.jpg",
  },
  {
    src: "data:image/jpeg;base64,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",
  },
  {
    color: "red",
  },
  {
    color: "blue",
  },
];

const SiteBuilder = () => {
  const [pages, setPages] = useState([{}, {}]);
  const [activeLayoutId, setCurrentActiveLayoutId] = useState(null);
  const [activeBackgroundId, setCurrentActiveBackgroundId] = useState(null);
  const [activeOptionIdx, setActiveOptionIdx] = useState(1);

  const toolbars = [
    {
      name: "Layouts",
      component: () => (
        <div id="layouts">
          {Object.keys(layoutComponents).map((layoutId, idx) => {
            const { component } = layoutComponents[layoutId];
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
      ),
    },
    {
      name: "Backgrounds",
      component: () => (
        <div id="backgrounds">
          {backgrounds.map((bgs, idx) => (
            <BackgroundContainers
              draggable
              onDragStart={() => {
                setCurrentActiveBackgroundId(idx);
              }}
              key={idx}
              {...bgs}
            />
          ))}
        </div>
      ),
    },
  ];

  return (
    <CSS>
      <div id="toolbar">
        <div id="options">
          {toolbars.map(({ name }, idx) => (
            <div
              key={idx}
              className={`option-items ${
                activeOptionIdx === idx ? "active" : ""
              }`}
              onClick={() => setActiveOptionIdx(idx)}
            >
              <h1>{name}</h1>
            </div>
          ))}
        </div>
        <div id="option-contents">
          <div className="option-items">
            {toolbars[activeOptionIdx].component()}
          </div>
        </div>
      </div>
      <div id="workspace">
        <button onClick={() => console.log(pages)}>Data</button>
        <div id="workspace-content">
          {pages.map(({ content, component, ...props }, idx) => {
            // console.log(props.color, props.src);
            return (
              <Page
                {...props}
                onDrop={() => {
                  switch (activeOptionIdx) {
                    case 0:
                      pages[idx] = {
                        ...layoutComponents[activeLayoutId],
                        content: {
                          ...layoutComponents[activeLayoutId].content,
                        },
                      };
                      setCurrentActiveLayoutId(null);
                      break;
                    case 1:
                      const { src, color } = backgrounds[activeBackgroundId];
                      pages[idx].src = src;
                      pages[idx].color = color;
                      break;
                    default:
                  }
                  setPages([...pages]);
                }}
                onDragOver={(e) => e.preventDefault()}
                content={content}
                layoutComponent={
                  component
                    ? (content) =>
                        component({
                          ...props,
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
            );
          })}
        </div>
      </div>
    </CSS>
  );
};

export default SiteBuilder;
