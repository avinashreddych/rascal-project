import React from "react";
import { Container, Card, ListGroup, ListGroupItem, Row } from "react-bootstrap";

function CourseHeader() {
    return (
        <>
            <Container >
                <h1 className="text-center my-5">Course Name</h1>
                <Row className="mx-auto">
                    <ListGroup className="list-group-flush col-4 mx-auto">
                        <ListGroupItem><strong>Course Description</strong></ListGroupItem>
                        <ListGroupItem>Lorem Ipsum is simply dummy text of
                             the printing and typesetting industry. Lorem Ipsum 
                             has been the industry's standard dummy text ever since
                              the 1500s, when an unknown printer took a galley of type
                               and scrambled it to make a type specimen book. It has 
                               survived not only five centuries, 
                        </ListGroupItem>
                    </ListGroup>

                    <ListGroup className="list-group-flush col-4 mx-auto">
                        <ListGroupItem><strong>Instructor</strong></ListGroupItem>
                        <ListGroupItem>
                            He did some fucking awesome thing to gain this knowledge,
                            and generous enough to share with you. Learn, Work, Self-Sustain.
                        </ListGroupItem>
                    </ListGroup>
                </Row>


                <hr></hr>
            </Container>
        </>

    );
}

export default CourseHeader;