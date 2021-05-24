import Home, { FrontView, Project, SkillList } from "../../../src/pages/index"
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


test("Renders a project and checks its URL", () => {
    render(
        <Project 
         description={"A very good looking project."}
         readMore={"More Text"}
         projectImage={"/image/example"}
         projectUrl={"http://example.com/"}
         moveToTheRight={1}
        />
    )

    let viewMoreImage = screen.getByAltText("View Icon") as HTMLImageElement;
    let websiteRedirect = screen.getByText("View") as HTMLAnchorElement;

    expect(viewMoreImage.parentElement.nodeName).toBe("P");
    expect(websiteRedirect.href).toBe("http://example.com/");
})


test("Renders a project and checks its text", () => {
    render(
        <Project 
         description={"A very good looking project."}
         readMore={"More Text"}
         projectImage={"/image/example"}
         projectUrl={"http://example.com/"}
         moveToTheRight={1}
        />
    )

    let projectDescription = screen.getByText("A very good looking project.");

    expect(projectDescription.nodeName).toBe("P");
})


// Not implemented yet
test("Renders a project and reads more about it", () => null)


test("Renders a skill list with the correct heading", () => {
    const { container } = render(
        <SkillList 
         header={"Special Skills"} 
         skills={[]} 
        />
    );

    let skill_header = screen.getByText("Special Skills");
    let skills = container.querySelectorAll("p");

    expect(skill_header.nodeName).toBe("H2");
    expect(skills.length).toBe(0);
})


test("Renders a skill list with the correct paragraphs (text)", () => {
    render(
        <SkillList 
         header={"Special Skills"} 
         skills={[
            {image: "/special/page_1", skill: "React", icon_alt: "React Icon"},
            {image: "/special/page_2", skill: "MongoDB", icon_alt: "MongoDB Icon"},
         ]} 
        />
    );

    let skillReact = screen.getByText("React");
    let skillMongoDB = screen.getByText("MongoDB");

    expect(skillReact.nodeName).toBe("SPAN");
    expect(skillMongoDB.nodeName).toBe("SPAN");

    expect(skillReact.parentElement.nodeName).toBe("P");
    expect(skillMongoDB.parentElement.nodeName).toBe("P");
})


test("Renders a skill list with the correct paragraphs (icon url)", () => {
    render(
        <SkillList 
         header={"Special Skills"} 
         skills={[
             {image: "/special/page_1", skill: "React", icon_alt: "React Icon"},
             {image: "/special/page_2", skill: "MongoDB", icon_alt: "MongoDB Icon"},
         ]} 
        />
    );

    let skillReactIcon = screen.getByAltText("React Icon") as HTMLImageElement;
    let skillMongoDBIcon = screen.getByAltText("MongoDB Icon") as HTMLImageElement;

    expect(skillReactIcon.src).toBe("http://localhost/special/page_1");
    expect(skillMongoDBIcon.src).toBe("http://localhost/special/page_2");

    expect(skillReactIcon.parentElement.nodeName).toBe("P");
    expect(skillMongoDBIcon.parentElement.nodeName).toBe("P");
})