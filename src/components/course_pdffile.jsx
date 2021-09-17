// pdf lecture 
import React from "react";
import { Accordion, Button } from "react-bootstrap";


function PDFAccordionItem(){
    return(
        <Accordion.Item eventKey="1">
            <Accordion.Header>
                Lecture Handout
            </Accordion.Header>
            <Accordion.Body className="text-center">
                This is the pdf file, Click the Download Button to download the pdf file.
                <div className="me-auto">
                <Button >
                    Download
                    </Button>
                </div>
            </Accordion.Body>            
        </Accordion.Item>
    );
}

export default PDFAccordionItem;