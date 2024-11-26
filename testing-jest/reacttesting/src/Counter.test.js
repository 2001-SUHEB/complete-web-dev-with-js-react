import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./counter";

test("render Counter Component", () => {
  render(<Counter />);
  const heading = screen.getByText(/Counter:/i);
  expect(heading).toBeInTheDocument();

  expect(screen.getByText(/Increment/i)).toBeInTheDocument();
  expect(screen.getByText(/Decrement/i)).toBeInTheDocument();
  expect(screen.getByText(/Reset/i)).toBeInTheDocument();
});


test("Counter starts from zero",()=>{
    render(<Counter/>);
    const heading = screen.getByText(/Counter:/i);
    expect(heading).toHaveTextContent("Counter: 0")
})

test("testing increment button",()=>{
    render(<Counter/>);
    const incrementButton = screen.getByText(/Increment/i);
    fireEvent.click(incrementButton)
    expect(screen.getByText(/Counter:/i)).toHaveTextContent("Counter: 1")
})

test("testing decrement button",()=>{
    render(<Counter/>);
    const decrement = screen.getByText(/Decrement/i);
    fireEvent.click(decrement);
    expect(screen.getByText(/Counter:/i)).toHaveTextContent("Counter: -1")
})
test("testing reset button",()=>{
    render(<Counter/>);
    const reset = screen.getByText(/Reset/i);
    fireEvent.click(reset);
    expect(screen.getByText(/Counter:/i)).toHaveTextContent("Counter: 0")
})