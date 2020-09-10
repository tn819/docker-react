import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders change react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Change React/i);
  expect(linkElement).toBeInTheDocument();
  expect(getByText(/learn react/i)).toBeUndefined();
});
