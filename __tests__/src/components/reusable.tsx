import React from "react"
import { screen, render } from "@testing-library/react"
import { IconedParagraph, YellowLineHeader } from "../../../src/components/reusable"


test("Renders the correct image data and span element", () => {
    render(
        <IconedParagraph 
         src={"http://example.com/special/page"}
         alt={"Special Element"}
         text={"A special image"}
        />
    )

    let span = screen.getByText("A special image") as HTMLSpanElement;
    let img = screen.getByAltText("Special Element") as HTMLImageElement;

    expect(span.nodeName).toBe("SPAN")

    expect(img.src).toBe("http://example.com/special/page");
    expect(img.className).toBe("")
})


test("Renders a main icon paragraph", () => {
    render(
        <IconedParagraph 
         src={"http://example.com/special/page"}
         alt={"Special Element"}
         text={"A special image"}
         href={"http://example.com/example"}
         isMain={true}
        />
    )

    let link = screen.getByText("A special image") as HTMLAnchorElement;
    let img = screen.getByAltText("Special Element") as HTMLImageElement;

    expect(link.href).toBe("http://example.com/example");
    expect(link.nodeName).toBe("A");

    expect(img.src).toBe("http://example.com/special/page");
})


test("Renders the correct text", () => {
    render(<YellowLineHeader text={"Hello world!"} />)

    expect(screen.getByText("Hello world!").nodeName).toBe("H1");
    
})