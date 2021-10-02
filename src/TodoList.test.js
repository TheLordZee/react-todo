import { fireEvent, render } from '@testing-library/react';
import TodoList from "./TodoList"

it('renders', () => {
  render(<TodoList />);
});

it("matches snapshot", () => {
    const {asFragment} = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
})

it("can add a new todo", () => {
    const {queryByText, container} = render(<TodoList />);
    const textInput = container.getElementsByClassName('TodoForm-input')[0];
    const submitBtn = queryByText("Add Todo")

    fireEvent.change(textInput, {target: {value: "Test todo"}})  
    fireEvent.click(submitBtn)

    expect(queryByText("Test todo")).toBeInTheDocument()
})

it("can delete a todo", () => {
    const {queryByText, container} = render(<TodoList />);
    const textInput = container.getElementsByClassName('TodoForm-input')[0];
    const submitBtn = queryByText("Add Todo")

    fireEvent.change(textInput, {target: {value: "Test todo"}})  
    fireEvent.click(submitBtn)
    let todo = queryByText("Test todo")

    expect(todo).toBeInTheDocument()

    const deleteBtn = queryByText("X")
    fireEvent.click(deleteBtn);
    expect(todo).not.toBeInTheDocument();
})