import { render } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import TopOperators from "./TopOperators";

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

it("should render 10 key elements", () => {
  const localKeys = [1, 2, 3, 4];
  act(() => {
    render(
      <TopOperators keys={localKeys} handlerKeys={() => jest.fn}></TopOperators>,
      container
    );
  });

  const item = document.querySelectorAll(".top-operators").length;
  expect(item).toBe(1);

  const items = document.querySelectorAll(".key").length;
  expect(items).toBe(localKeys.length);
});
