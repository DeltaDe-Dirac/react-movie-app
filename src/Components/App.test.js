// import { render, screen } from "@testing-library/react";
import { screen } from "@testing-library/react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import axios from "axios";
import App from "../App";

jest.mock("axios");
let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
  axios.get.mockResolvedValue({
    data: [
      {
        fname: "Gal",
        lname: "Gadot",
        imgsrc: "",
        born: "Born: April 30, 1985 in Rosh Ha'ayin, Israel",
      },
    ],
  });
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("renders navbar brand text", async () => {
  await act(async () => {
    render(<App />, container);
  });

  const navbarBrand = screen.getByText("Actors Gallery");
  expect(navbarBrand).toBeInTheDocument();
});

test("renders navbar input for filtering", async () => {
  await act(async () => {
    render(<App />, container);
  });

  const navInput = container.querySelector("[class=form-control]");
  expect(navInput).toBeInTheDocument();
});

test("renders navbar multi-select drop down for sorting", async () => {
  await act(async () => {
    render(<App />, container);
  });

  const navDropDown = screen.getByText(/Sort By/i);
  expect(navDropDown).toBeInTheDocument();
});

test("renders cards with title", async () => {
  await act(async () => {
    render(<App />, container);
  });

  const cardTitle = container.querySelectorAll("[data-testid=cardTitle]");
  expect(cardTitle.length).toBe(1);
});

test("renders first card title with specific text", async () => {
  await act(async () => {
    render(<App />, container);
  });

  const navInput = container.querySelectorAll("[data-testid=cardTitle]");
  expect(navInput[0].innerHTML).toMatch(/Gal Gadot/i);
});
