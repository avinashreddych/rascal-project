import NavBar from "../components/navbar";
import { useParams } from "react-router";
import fetchDocumentData from "../data/fetch_document_data";
import React from "react";
import CourseContent from "../components/course_content";


function CoursePage(){
    let courseId = useParams();
    // const courseContent = fetchDocumentData(courseId);
    return(
    <>
    <NavBar></NavBar>
    <CourseContent></CourseContent>
    </>
    );
}
export default CoursePage;