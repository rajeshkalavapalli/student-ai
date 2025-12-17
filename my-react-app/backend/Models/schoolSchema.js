const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
    school_name: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },

    // IMPORTANT: Which developer created the school?
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Devloper",
        required: true
    },

    // After developer creates admin, store admin here
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null
    }

}, { timestamps: true });

module.exports = mongoose.model("School", schoolSchema);
