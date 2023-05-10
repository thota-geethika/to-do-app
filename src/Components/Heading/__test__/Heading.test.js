import Heading from '../Heading'
import {render,screen} from '@testing-library/react';

it("should display the heading as ToDo List",()=>{
    render(<Heading/>);
    const headingElement = screen.getByRole("heading",{name:/ToDo List/i});
    expect(headingElement).toBeVisible();

})