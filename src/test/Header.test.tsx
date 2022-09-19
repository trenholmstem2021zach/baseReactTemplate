import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../components/organisms/Header";

test("renders", () => {
  render(<Header />);
  const linkElement = screen.getByText(/Log In/i);
  expect(linkElement).toBeInTheDocument();
});
