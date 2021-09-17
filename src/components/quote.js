import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/home.css";


function Quote() {
    return (

        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap');
            </style>

            <Container className="my-5" id="quote">
                <h1 className="text-center ">Its better to be a pirate than to join navy</h1>
                <p className="text-xl-end">--Steve Jobs</p>
            </Container>

        </>


    )
}

export default Quote;