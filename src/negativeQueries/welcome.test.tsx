import * as React from "react";
import { render, screen } from "@testing-library/react";

import { WelcomeHeading } from "./welcome";

/**
 * In this test we make use of a `queryBy` method to assert that an element is _not_ present.
 */
it("displays personalized message if the user is logged in", () => {
  render(<WelcomeHeading user={{ name: "Rupert" }} />);

  expect(
    screen.queryByRole("heading", {
      name: "Welcome Guest, would you like to login?",
    })
  ).not.toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      name: "Welcome Rupert, good to have you back!",
    })
  ).toBeInTheDocument();
});
