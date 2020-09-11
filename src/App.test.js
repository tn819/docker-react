import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders change react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Change React/i);
  expect(linkElement).toBeInTheDocument();
  expect(screen.queryByText(/learn react/i)).toBeNull();
});
