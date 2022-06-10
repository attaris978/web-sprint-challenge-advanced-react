import React from "react";
import AppClass from "./AppClass";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
test("sanity", () => {
  expect(true).toBe(true);
});

test("renders without errors", () => {
  render(<AppClass />);
});

test("headers appear", () => {
  render(<AppClass />);
  expect(screen.getByText(/Coordinates/i)).toBeVisible();
  expect(screen.getByText(/You moved 0 times/i)).toBeVisible();
});

test("buttons appear", () => {
  render(<AppClass />);
  expect(screen.getAllByRole("button").length).toBe(6);
});

test("button text appear", () => {
  render(<AppClass />);
  expect(screen.getByText(/LEFT/)).toBeVisible();
  expect(screen.getByText(/RIGHT/)).toBeVisible();
  expect(screen.getByText(/UP/)).toBeVisible();
  expect(screen.getByText(/DOWN/)).toBeVisible();
  expect(screen.getByText(/reset/)).toBeVisible();
});

test("test that the textbox accepts a value", () => {
  render(<AppClass />);
  const emailInput = screen.getByPlaceholderText(/type email/);
  expect(emailInput.value).toBe("");
  emailInput.value = "sometext";
  expect(screen.getByRole("textbox").value).toBe("sometext");
});


test("test that one letter B block exists", () => {
  render(<AppClass />);
  expect(screen.getByText('B')).toBeVisible();
});