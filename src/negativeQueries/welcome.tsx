import * as React from "react";

interface User {
  name: string;
}

// user is null if not currently logged in
export const WelcomeHeading = ({ user }: { user: User | null }) => {
  const message =
    user === null
      ? "Welcome Guest, would you like to login?"
      : `Welcome ${user.name}, good to have you back!`;

  return <h2>{message}</h2>;
};
