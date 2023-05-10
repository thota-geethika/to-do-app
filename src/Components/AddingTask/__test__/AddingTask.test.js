
import AddingTask from "../AddingTask";
import { fireEvent, render,screen } from "@testing-library/react";

describe("input field presence and text acceptance",()=>{

    test('should have an input field', () => {
        render(<AddingTask/>);
        const inputElement = screen.getByPlaceholderText("Enter task");
        expect(inputElement).toBeVisible(); 
    })

    test('should be able to type into input field', () => {
        render(<AddingTask/>);
        const inputElement = screen.getByPlaceholderText("Enter task");
        fireEvent.click(inputElement);
        fireEvent.change(inputElement,{target:{value:"Task One"}});
        expect(inputElement.value).toBe("Task One");
    })
    
})
