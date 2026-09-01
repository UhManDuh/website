import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders intro", () => {
  render(<App />);
  expect(screen.getByText(/hi i'm amanda/i)).toBeInTheDocument();
});
