import { unmountComponentAtNode, render } from "react-dom";
import { act } from "react-dom/test-utils";
import Keyboard from "./Keyboard";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("should render a simple text in the component", () => {
  act(() => {
    render(
      <Keyboard>
        <p>Simple Keyboard</p>
      </Keyboard>,
      container
    );
  });
  expect(container.textContent).toBe("Simple Keyboard");
});
