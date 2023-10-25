import { describe } from "node:test";
import { Button } from "./button";
import { render } from "@testing-library/react";

describe("Button Component", () => {
  test("renders a default button", () => {
    const { getByText } = render(<Button>click here</Button>);
    expect(getByText("click here")).toBeInTheDocument();
  });
});

// describe("Button", () => {
//   it("testing button", () => {});
// });
