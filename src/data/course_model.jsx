import courseSchema from "./course_schema"
const mongoose = require('mongoose');


const Course = mongoose.model("course", courseSchema);

export default Course;