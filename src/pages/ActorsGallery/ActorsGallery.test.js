import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

import ActorsGallery from "./ActorsGallery";
import ActorClass from "../../model/ActorClass";

import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faFilm);

let container = null;
const rowSize = 3;
const pathPre = process.env.PUBLIC_URL;

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

const actorsData = [
  {
    fname: "Gal",
    lname: "Gadot",
    imgsrc: "",
    born: "Born: April 30, 1985 in Rosh Ha'ayin, Israel",
  },
  {
    fname: "Gal",
    lname: "Gadot",
    imgsrc: "",
    born: "Born: July 14, 1981 in Rosh Ha'ayin, Israel",
  },
  {
    fname: "Ben",
    lname: "Affleck",
    imgsrc: "",
    born: "Born: August 15, 1972 in Berkeley, California, USA",
  },
  {
    fname: "Some",
    lname: "Name",
    imgsrc: "",
    born: "Born: July 14, 1981 in Rosh Ha'ayin, Israel",
  },
];

const actors = actorsData.map((actor) => new ActorClass(actor.fname, actor.lname, actor.born, actor.imgsrc));

test("test full response no filtering", () => {
  act(() => {
    render(<ActorsGallery actors={actors} pathPre={pathPre} rowSize={rowSize} />, container);
  });

  const inputField = document.querySelector("[class=form-control]");
  userEvent.type(inputField, "");
  expect(inputField).toHaveValue("");

  const cardTitle = document.querySelectorAll("[data-testid=cardTitle]");
  expect(cardTitle.length).toBe(actorsData.length);
});

test("test filter by first name", () => {
  act(() => {
    render(<ActorsGallery actors={actors} pathPre={pathPre} rowSize={rowSize} />, container);
  });

  const inputField = document.querySelector("[class=form-control]");
  userEvent.type(inputField, "gal");
  expect(inputField).toHaveValue("gal");

  const cardTitle = document.querySelectorAll("[data-testid=cardTitle]");
  expect(cardTitle.length).toBe(2);
});

test("test filter by partial second name", () => {
  act(() => {
    render(<ActorsGallery actors={actors} pathPre={pathPre} rowSize={rowSize} />, container);
  });

  const inputField = document.querySelector("[class=form-control]");
  userEvent.type(inputField, "flec");
  expect(inputField).toHaveValue("flec");

  const cardTitle = document.querySelectorAll("[data-testid=cardTitle]");
  expect(cardTitle.length).toBe(1);
});

test("test filter by both first and last name", () => {
  act(() => {
    render(<ActorsGallery actors={actors} pathPre={pathPre} rowSize={rowSize} />, container);
  });

  const inputField = document.querySelector("[class=form-control]");
  userEvent.type(inputField, "some flec");
  expect(inputField).toHaveValue("some flec");

  const cardTitle = document.querySelectorAll("[data-testid=cardTitle]");
  expect(cardTitle.length).toBe(2);
});

test("test filter by non-matching pattern", () => {
  act(() => {
    render(<ActorsGallery actors={actors} pathPre={pathPre} rowSize={rowSize} />, container);
  });

  const inputField = document.querySelector("[class=form-control]");
  userEvent.type(inputField, "bla-bla");
  expect(inputField).toHaveValue("bla-bla");

  const cardTitle = document.querySelectorAll("[data-testid=cardTitle]");
  expect(cardTitle.length).toBe(0);
});

test("test filter by both age and second name", () => {
  act(() => {
    render(<ActorsGallery actors={actors} pathPre={pathPre} rowSize={rowSize} />, container);
  });

  const inputField = document.querySelector("[class=form-control]");
  userEvent.type(inputField, `${actors[0].age} affleck`);
  expect(inputField).toHaveValue(`${actors[0].age} affleck`);

  const cardTitle = document.querySelectorAll("[data-testid=cardTitle]");
  expect(cardTitle.length).toBe(2);
});

test("test filter by multiple age patterns and second name", () => {
  act(() => {
    render(<ActorsGallery actors={actors} pathPre={pathPre} rowSize={rowSize} />, container);
  });

  const inputField = document.querySelector("[class=form-control]");
  userEvent.type(inputField, `${actors[0].age} ${actors[1].age} affleck`);
  expect(inputField).toHaveValue(`${actors[0].age} ${actors[1].age} affleck`);

  const cardTitle = document.querySelectorAll("[data-testid=cardTitle]");
  expect(cardTitle.length).toBe(4);
});
