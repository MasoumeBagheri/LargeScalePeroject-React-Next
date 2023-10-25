import { describe } from "node:test";
import { Button } from "./button";
import { render, screen } from "@testing-library/react";

describe("Button Component", () => {
  test("renders a default button", () => {
    const { getByText } = render(<Button>click here</Button>);
    expect(getByText("click here")).toBeInTheDocument();
  });

  test("disables the button when isDisabled prop is true", () => {
    render(<Button isDisabled={true}>click here</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("the correct css class for different button variants", () => {
    const { rerender } = render(<Button variant="primary">click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-primary");

    rerender(<Button variant="info">click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-info");
  });
});

