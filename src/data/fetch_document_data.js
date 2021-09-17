
function fetchDocumentData(id) {
    const mongoose = require('mongoose');
    const rascalDB = "mongodb://localhost:27017/test/Rascal";
    mongoose.connect(rascalDB);


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
        "courseInstructorDescription": String,
        // versionKey :false,
        // unique : true
    })

    const Course = mongoose.model("course", courseSchema);

    Course.find({ courseId: "DST" }, function (err, course) {
        if(err){
            console.log(err);
        }
        else{
            return course[0];
        }
        
    })

}

export default fetchDocumentData;




