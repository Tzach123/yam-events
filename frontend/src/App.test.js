import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders app without crashing", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  // Since the app renders different components based on routes,
  // we'll just test that it renders without crashing
  expect(document.querySelector(".App")).toBeInTheDocument();
});
