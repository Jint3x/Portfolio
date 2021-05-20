import Home, { FrontView } from "../../../src/pages/index"
import { screen, render } from "@testing-library/react"
import React from "react"


test("Renders the FrontView and locates its text", () => {
    render(<FrontView />);

    expect(screen.getByText("Jint3x").nodeName).toBe("H2");
    expect(screen.getByText("- Software/Web Developer").nodeName).toBe("P");
    expect(screen.getByText("Get in touch!").nodeName).toBe("H2");
})


test("Renders the FrontView and verifies its media links are working", () => {
    render(<FrontView />);
    
    let github = screen.getByText("github.com/Jint3x") as HTMLAnchorElement;
    let twitter = screen.getByText("twitter.com/Jint3x") as HTMLAnchorElement;

    expect(github.href).toBe("https://github.com/Jint3x");
    expect(twitter.href).toBe("https://twitter.com/Jint3x");
})


test("Renders the FrontView and checks the navigation links", () => {
    render(<FrontView />);

    let projects = screen.getByText("Projects") as HTMLAnchorElement;
    let skills = screen.getByText("Skills") as HTMLAnchorElement;
    let aboutMe = screen.getByText("About Me") as HTMLAnchorElement;

    expect(projects.href).toBe("http://localhost/#projects");
    expect(skills.href).toBe("http://localhost/#skills");
    expect(aboutMe.href).toBe("http://localhost/#about");
})