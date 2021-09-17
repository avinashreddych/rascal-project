import React from 'react';
import NavBar from "../components/navbar";
import  Heading  from "../components/heading";
import Quote from '../components/quote';

// THis is the HOme page of the website

function Home () {
    return (
        <>
            <NavBar></NavBar>
            <Heading></Heading>
            <Quote></Quote>
        </>
    );
}


export default Home;