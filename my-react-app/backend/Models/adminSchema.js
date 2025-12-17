const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    contact: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "School",
        required: true
    },

    role: {
        type: String,
        default: "admin"
    }

}, { timestamps: true });

module.exports = mongoose.model("Admin", AdminSchema);
