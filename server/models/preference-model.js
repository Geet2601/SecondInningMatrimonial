const mongoose = require("mongoose");

const preferenceSchema = new mongoose.Schema({
    Fullname: {
        type: String,
        required: true,
    },
    lowerAge: {
        type: Number,
        required: true,
    },
    upperAge: {
        type: Number,
        required: true,
    },
    Gender: {
        type: String,
        required: true,
    },
    lowerHeight: {
        type: Number,
        required: true,
    },
    upperHeight: {
        type: Number,
        required: true,
    },
    lowerWeight: {
        type: Number,
        required: true,
    },
    upperWeight: {
        type: Number,
        required: true,
    },
    religion: {
        type: String,
        required: true,
    },
    caste: {
        type: String,
        required: true,
    },
    complexion: {
        type: String,
        required: true,
    },
    bloodtype: {
        type: String,
        required: true,
    },
    lowerAnnualIncome: {
        type: Number,
        required: true,
    },
    upperAnnualIncome: {
        type: Number,
        required: true,
    },
    previousMarriages: {
        type: Number,
        required: true,
    },
    theirCity: {
        type: String,
        required: true,
    },
});

const Preference = mongoose.model("users", preferenceSchema);

module.exports = Preference;
