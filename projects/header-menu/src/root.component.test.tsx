import { render } from "@testing-library/react";
import Root from "./root.component";

describe("Root component", () => {
  it("should be in the document", () => {
    const { getByText } = render(<Root name="header-menu" />);
    expect(getByText(/header-menu is mounted!/i)).toBeInTheDocument();
  });

});
