import { render } from '@testing-library/react';
import Todo from "./Todo"

it('renders', () => {
  render(<Todo text="Test todo" />);
});

it("matches snapshot", () => {
    const {asFragment} = render(<Todo text="Test todo" />);
    expect(asFragment()).toMatchSnapshot();
})