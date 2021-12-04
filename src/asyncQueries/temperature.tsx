import * as React from "react";

import { fetchTemperatureFromApi } from "./temperatureApi";

type LoadingState = { type: "loading" };
type ErrorState = { type: "error"; errorMessage: string };
type SuccessState = { type: "success"; temperature: number };

type ComponentState = LoadingState | ErrorState | SuccessState;

export const CurrentTemperature = () => {
  const [state, setState] = React.useState<ComponentState>({
    type: "loading",
  });

  React.useEffect(() => {
    fetchTemperatureFromApi()
      .then((temperature) => setState({ type: "success", temperature }))
      .catch((error) =>
        setState({ type: "error", errorMessage: JSON.stringify(error) })
      );
  }, []);

  if (state.type === "error") return <span>{state.errorMessage}</span>;
  if (state.type === "loading") return <span>LOADING...</span>;

  return <span>{`Today's temperature is ${state.temperature}`}</span>;
};
