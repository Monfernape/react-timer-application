import { render, fireEvent, screen, getByText } from "@testing-library/react";
import App from "./App";

test("displays timer title", () => {
  render(<App />);
  const title = "React Timer";
  expect(screen.queryByText(title)).toBeInTheDocument();
});

test("confirms start timer button is disabled at beginning", () => {
  render(<App />);
  expect(getByText(/start/i).closest("button")).toBeDisabled();
});
