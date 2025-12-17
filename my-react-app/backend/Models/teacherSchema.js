const mongoose = require("mongoose")
const TeacherSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    }, name: {
        type: String,
        required: true
    }, experience: {
        type: Number,
        default: 0


    }, subjects: [String]
    ,

    assigned_students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student"
        }
    ], assigned_classes:
        [
            {
                type: String,

            }
        ], performanceScore: {
            type: Number,
            default: 100         // internal analytics score
        }



}, { timestamps: true })


module.exports = mongoose.model("Teacher", TeacherSchema)