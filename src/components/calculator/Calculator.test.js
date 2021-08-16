import { unmountComponentAtNode, render } from "react-dom";
import { act } from "react-dom/test-utils";
import Calculator from "./Calculator";

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
      <Calculator>
        <p>Simple text</p>
      </Calculator>,
      container
    );
  });
  expect(container.textContent).toBe("Simple text");
});
