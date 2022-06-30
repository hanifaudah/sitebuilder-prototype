export const Text = (props) => {
  const { id, className, editable, name, setContent } = props;

  const editableProps = {
    contentEditable: true,
    suppressContentEditableWarning: true,
    onInput: (e) => setContent(name, e.currentTarget.textContent),
    style: {
      background: "rgba(0, 0, 0, .4)",
      minWidth: "1em",
      maxWidth: "max-content",
    },
  };

  return (
    <h1 {...(editable ? editableProps : {})} {...{ id, className }}>
      {props?.content?.[name] || props?.initialContent?.[name]}
    </h1>
  );
};
