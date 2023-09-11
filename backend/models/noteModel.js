const mongoose = require("mongoose");
const noteSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        mobile: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        fathersname: {
            type: String,
            required: true,
        },
        dob: {
            type: String,
            required: true,
        },
        age: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        height: {
            type: String,
            required: true,
        },
        weight: {
            type: String,
            required: true,
        },
        plannumber: {
            type: String,
            required: true,
        },
        doc: {
            type: String,
            required: true,
        },
        sumassured: {
            type: String,
            required: true,
        },
        identityMark: {
            type: String,
            required: true,
        },
        fathersage: {
            type: String,
            required: true,
        },
        fathersdeath: {
            type: String,
            required: true,
        },
        mothersage: {
            type: String,
            required: true,
        },
        mothersdeath: {
            type: String,
            required: true,
        },
        sistersnumber: {
            type: String,
            required: true,
        },
        sistersage: {
            type: String,
            required: true,
        },
        sistersliving: {
            type: String,
            required: true,
        },
        sistersdeath: {
            type: String,
            required: true,
        },
        brothersnumber: {
            type: String,
            required: true,
        },
        brothersage: {
            type: String,
            required: true,
        },
        brothersliving: {
            type: String,
            required: true,
        },
        brothersdeath: {
            type: String,
            required: true,
        },
        spouseage: {
            type: String,
            required: true,
        },
        spousedeath: {
            type: String,
            required: true,
        },
        childnumber: {
            type: String,
            required: true,
        },
        childage: {
            type: String,
            required: true,
        },
        childliving: {
            type: String,
            required: true,
        },
        childdeath: {
            type: String,
            required: true,
        },
        adharnumber: {
            type: String,
            required: true,
        },
        pancard: {
            type: String,
            required: true,
        },
        occupation: {
            type: String,
            required: true,
        },
        income: {
            type: String,
            required: true,
        },
        yearsofduty: {
            type: String,
            required: true,
        },
        education: {
            type: String,
            required: true,
        },
        maritalstatus: {
            type: String,
            required: true,
        },
        otherpolicies: {
            type: String,
            required: true,
        },
        nominee: {
            type: String,
            required: true,
        },
        mothersname: {
            type: String,
            required: true,
        },
        spousename: {
            type: String,
            required: true,
        },
        nomineeage: {
            type: String,
            required: true,
        },
        nomineeadharnumber: {
            type: String,
            required: true,
        },
        nomineerelation: {
            type: String,
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);
const Note = mongoose.model("Note", noteSchema);
module.exports = Note;
