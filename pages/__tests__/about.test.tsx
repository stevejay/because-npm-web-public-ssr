import { render, cleanup } from "react-testing-library";
import About from "../about";

afterEach(cleanup);

test("something", () => {
  render(<About />);
});
