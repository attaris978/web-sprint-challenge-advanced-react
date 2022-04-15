// Write your tests here
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

//I had to maneuver these a little differently than I would ordinarily because 
//the testing-library user-event section is not installed and I didn't want to 
//mess with my passing project to try and get it installed.