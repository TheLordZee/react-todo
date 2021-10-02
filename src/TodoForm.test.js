import { render } from '@testing-library/react';
import TodoForm from "./TodoForm"
const data = {
    todoTex: "Test todo"
}

it('renders', () => {
  render(<TodoForm  formData={data}/>);
});

it("matches snapshot", () => {
    const {asFragment} = render(<TodoForm formData={data} />);
    expect(asFragment()).toMatchSnapshot();
})