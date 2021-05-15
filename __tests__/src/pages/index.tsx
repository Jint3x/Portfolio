import Home from "../../../src/pages/index"
import { screen, render } from "@testing-library/react"
import React from "react"


test("Renders hello world", () => {
    render(<Home />)

    expect(screen.getByText("Hello World!").nodeName).toBe("H1");
})