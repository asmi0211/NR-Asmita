import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("contact page test cases", ()=>{
    it("should load button inside contact us component", ()=>{
        // first render component on jsdom 
        // it will take a component 
        render(<Contact/>)
    
        // it render it on jsdom
    
        // to check if rendered component - 
        const heading = screen.getByRole("heading")
        // it will find all the headings inside componnt and give it
    
        expect(heading).toBeInTheDocument();
        // check if heading is inside in document or not
    })
    
    test("should load button inside contact us component", ()=>{
        // first render component on jsdom 
        // it will take a component 
        render(<Contact/>)
    
        // it render it on jsdom
    
        // to check if rendered component - 
        const button = screen.getByRole("button")
        // it will find all the headings inside componnt and give it
    
        expect(button).toBeInTheDocument();
        // check if heading is inside in document or not
    })
})