import React from "react";
import MediaCard from "./media_card";
import { Container } from "react-bootstrap";
import { Grid } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";


const Data = require("../data/export_data.js");


const pwr = Data.CoursesData[0] 
const data = Data.CoursesData[1]
const algo = Data.CoursesData[2]


export default function CourseGrid(){    

    return(
        <Container className="my-4 mx-auto" >
            <Grid container alignItems="center" direction="row" justifyContent="center" spacing={4}>
                <Grid item xs= {12} sm ={6} md={4} lg={3}>
                    <MediaCard {...pwr} ></MediaCard>
                </Grid>
                <Grid item xs= {12} sm ={6} md={4} lg={3}>
                    <MediaCard {...data} ></MediaCard>
                </Grid>
                <Grid item xs= {12} sm ={6} md={4} lg={3}>
                    <MediaCard {...algo} ></MediaCard>
                </Grid>
            </Grid>
        </Container>
    );
}