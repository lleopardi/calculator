import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Key from "./Key";

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

it("render the key 1", () => {
  act(() => {
    render(<Key>1</Key>, container);
  });
  expect(container.textContent).toBe("1");
});
