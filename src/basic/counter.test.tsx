import * as React from "react";

import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { Counter } from "./counter";

it("displays initial count and increments when clicked", () => {
  render(<Counter />);

  expect(screen.getByRole("button", { name: "0" })).toBeInTheDocument();

  userEvent.click(screen.getByText("0"));

  expect(screen.getByRole("button", { name: "1" })).toBeInTheDocument();
});
