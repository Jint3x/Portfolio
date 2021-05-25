import React from "react"
import { screen, render } from "@testing-library/react"
import { IconedParagraph, YellowLineHeader, SkillList, Project, AboutParagraph } from "../../../src/components/reusable"


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


test("Renders an about me paragraph", () => {
    render(
        <AboutParagraph 
         text={"A very special text. You can't find anything else like it!"}
        />
    )

    let aboutMe = screen.getByText("A very special text. You can't find anything else like it!");

    expect(aboutMe.nodeName).toBe("P")
})