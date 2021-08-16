import { render } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Numbers from "./Numbers";

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
  const localKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  act(() => {
    render(
      <Numbers keys={localKeys} handlerKeys={() => jest.fn}></Numbers>,
      container
    );
  });

  const item = document.querySelectorAll(".numbers").length;
  expect(item).toBe(1);

  const items = document.querySelectorAll(".key").length;
  expect(items).toBe(localKeys.length);
});
