const courseSchema = new mongoose.Schema({
    "courseName": String,
    "courseId": String,
    "courseImageURL": String,
    "courseContent": {
        "pdfLinks": Array,
        "videoLinks": Array,
    },
    "courseDescription": String,
    "courseInstructor": String,
    "courseInstructorDescription": String
})

export default courseScheme;