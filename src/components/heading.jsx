import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/home.css";

function Heading() {
    return (
        <section id="whatisrascal">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap');
            </style>

            <Container >
                <h1 id="rascaltag">
                    rAscal is a Learning Platfrom
                </h1>
                <p id="rascaltaginfo">
                    It is in sperm stage of development. rAscal aims to offer professional courses. Courses are taught
                    by
                    industry experts who are generous enough to share their knowledge with next generations
                </p>
            </Container>
        </section>


    );
}

export default Heading;