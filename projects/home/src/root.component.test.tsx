import { render } from "@testing-library/react";
import Root from "./root.component";

describe("Root component", () => {
  it("should be in the document", () => {
    const { getByText } = render(<Root name="home" />);
    expect(getByText(/home is mounted!/i)).toBeInTheDocument();
  });

});
