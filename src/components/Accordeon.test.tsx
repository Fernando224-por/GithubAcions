import Accordeon from "./Accordeon.tsx";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Accordeon test", () => {
  beforeEach(() => {
    render(
      <Accordeon title="hello">
        <h3>My Content</h3>
        <p>Something</p>
      </Accordeon>
    );
  });

  test("Should render Accordeon Component", () => {
    expect(screen.getAllByText("hello")).toBeDefined();
  });
  test("Should show the title all time", () => {
    expect(screen.getByText("hello")).toBeDefined();
  });

  test("Should not show the content at start render component", () => {
    expect(screen.queryByText(/content/i)).toBeNull();
  });

  test("should show the content when title is clicked", () => {
    const button = screen.getByText(/open/i)
    fireEvent.click(button)
    expect(screen.queryByText(/content/i)).toBeDefined();
  })

  test("should hide the content when title is clicked", () => {
    const button = screen.getByText(/open/i)
    fireEvent.click(button)
    fireEvent.click(button)
    expect(screen.queryByText(/content/i)).toBeNull();
  })
});
