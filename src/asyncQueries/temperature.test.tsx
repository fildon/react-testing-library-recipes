import * as React from "react";
import { render, screen } from "@testing-library/react";

import { CurrentTemperature } from "./temperature";
import { fetchTemperatureFromApi } from "./temperatureApi";

jest.mock("./temperatureApi", () => ({
  fetchTemperatureFromApi: jest.fn(),
}));

const mockFetchTemperatureFromApi =
  fetchTemperatureFromApi as jest.MockedFunction<
    typeof fetchTemperatureFromApi
  >;

beforeEach(() => {
  jest.clearAllMocks();
});

it("displays error message in case of API failure", async () => {
  mockFetchTemperatureFromApi.mockRejectedValue("mock error");

  render(<CurrentTemperature />);

  expect(screen.getByText("LOADING...")).toBeInTheDocument();

  expect(await screen.findByText(/mock error/)).toBeInTheDocument();
});

it("displays loading message before displaying current temperature when API resolves", async () => {
  // Simulate an API call taking a full second to resolve
  mockFetchTemperatureFromApi.mockImplementation(
    () => new Promise((res) => setTimeout(() => res(20), 1000))
  );

  render(<CurrentTemperature />);

  expect(screen.getByText("LOADING...")).toBeInTheDocument();

  expect(
    await screen.findByText("Today's temperature is 20")
  ).toBeInTheDocument();
});
