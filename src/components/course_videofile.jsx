// youtube video lecture
import { React } from "react";
import ReactPlayer from "react-player";
import { Accordion, Card } from "react-bootstrap";

function VideoAccordionItem() {
    return (
            <Accordion.Item eventKey="0">
                    <Accordion.Header>Video lecture - 1</Accordion.Header>
                    <Accordion.Body className="text-center">
                       <ReactPlayer
                            url = "https://www.youtube.com/watch?v=3NQRhE772b0"
                            controls
                            pip="true"
                        >
                    </ReactPlayer>
                    <h5 className="py-4">
                        This is Bahubali video 
                        What this video is about?
                    </h5> 
                    </Accordion.Body>
                </Accordion.Item>
    );
}

export default VideoAccordionItem;