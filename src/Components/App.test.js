// import { render, screen } from "@testing-library/react";
import { screen } from "@testing-library/react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import App from "../App";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("renders navbar brand text", () => {
  act(() => {
    render(<App />, container);
  });

  const onChange = jest.fn();
  const navbarBrand = screen.getByText("Actors Gallery");
  expect(navbarBrand).toBeInTheDocument();
});

test("renders navbar input for filtering", () => {
  act(() => {
    render(<App />, container);
  });

  const navInput = document.querySelector("[class=form-control]");
  expect(navInput).toBeInTheDocument();
});

test("renders navbar multi-select drop down for sorting", () => {
  act(() => {
    render(<App />, container);
  });

  const navDropDown = screen.getByText(/Sort By/i);
  expect(navDropDown).toBeInTheDocument();
});

test("renders cards with title", () => {
  act(() => {
    render(<App />, container);
  });

  const cardTitle = document.querySelectorAll("[data-testid=cardTitle]");
  expect(cardTitle.length).toBe(11);
});

test("renders first card title with specific text", () => {
  act(() => {
    render(<App />, container);
  });

  const navInput = document.querySelectorAll("[data-testid=cardTitle]");
  expect(navInput[0].innerHTML).toMatch(/Gal Gadot/i);
});
