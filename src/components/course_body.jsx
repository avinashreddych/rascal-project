import React from "react";
import { Accordion, Container } from "react-bootstrap";
import VideoAccordionItem from "./course_videofile";
import PDFAccordionItem from "./course_pdffile";
// import the course video files and pdf file in to this
// and write function which stacks up according to the order
// Every thing should be lined up in  a  Accordion

function CourseBody() {
    return (
        <Container>
            <Accordion >
                <VideoAccordionItem></VideoAccordionItem>
                <PDFAccordionItem></PDFAccordionItem>
            </Accordion>
        </Container>

    );
}

export default CourseBody;