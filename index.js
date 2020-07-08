/* @jsx jsx */
import { css, jsx } from "@emotion/core";

import React from "react";
import ReactDOM from "react-dom";
import Stack from "./Stack";
import StackBox from "./StackBox";

const myStack = new Stack("A", "B", "C", "D", "E");

const App = () => {
  const [elements, setElements] = React.useState(myStack.elements);
  const [top, setTop] = React.useState(myStack.top());
  const [isEmpty, setIsEmpty] = React.useState(myStack.isEmpty());
  const [newValue, setNewValue] = React.useState("F");

  React.useEffect(() => {
    setTop(myStack.top());
    setIsEmpty(myStack.isEmpty());
  }, [elements]);

  return (
    <div
      css={css`
        label: App;
        & > article {
          display: flex;
        }
      `}
    >
      <h1>Stack</h1>
      <article>
        <section
          css={css`
            flex: 0.5;
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
          <StackBox elements={elements} />
        </section>
        <section>
          <div>myStack.top(): {top}</div>
          <div>myStack.isEmpty(): {isEmpty.toString()}</div>
          <div>
            <input
              value={newValue}
              onChange={({ target: { value } }) => setNewValue(value)}
            />
            <button
              type="button"
              onClick={() => {
                myStack.push(newValue);
                setElements([...myStack.elements]);
              }}
            >
              Push
            </button>
            <button
              type="button"
              onClick={() => {
                myStack.pop();
                setElements([...myStack.elements]);
              }}
            >
              Pop
            </button>
          </div>
        </section>
      </article>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
