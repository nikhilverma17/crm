const Note = require("../models/noteModel");
const asyncHandler = require('express-async-handler')
//-----------------------------------------------------------------------------------------------------------------//
const getNotes = asyncHandler(async (req, res) => {
    const notes = await Note.find({ user: req.user._id })
    res.json(notes);
});
//---------------------------------------CREATE-------------------------------------------------------------------------//
const createNote = asyncHandler(async (req, res) => {
    const { title,
        mobile,
        email,
        fathersname,
        dob,
        age,
        address,
        height,
        weight,
        plannumber,
        doc,
        sumassured,
        identityMark,
        fathersage,
        fathersdeath,
        mothersage,
        mothersdeath,
        sistersnumber,
        sistersage,
        sistersliving,
        sistersdeath,
        brothersnumber,
        brothersage,
        brothersliving,
        brothersdeath,
        spouseage,
        spousedeath,
        childnumber,
        childage,
        childliving,
        childdeath,
        adharnumber,
        pancard,
        occupation,
        income,
        yearsofduty,
        education,
        maritalstatus,
        otherpolicies,
        nominee,
        mothersname,
        spousename,
        nomineeage,
        nomineeadharnumber,
        nomineerelation    } = req.body;

    if (!title ||
        !mobile ||
        !email ||
        !fathersname ||
        !dob ||
        !age ||
        !address ||
        !height ||
        !weight ||
        !plannumber ||
        !doc ||
        !sumassured ||
        !identityMark ||
        !fathersage ||
        !fathersdeath ||
        !mothersage ||
        !mothersdeath ||
        !sistersnumber ||
        !sistersage ||
        !sistersliving ||
        !sistersdeath ||
        !brothersnumber ||
        !brothersage ||
        !brothersliving ||
        !brothersdeath ||
        !spouseage ||
        !spousedeath ||
        !childnumber ||
        !childage ||
        !childliving ||
        !childdeath ||
        !adharnumber ||
        !pancard ||
        !occupation ||
        !income ||
        !yearsofduty ||
        !education ||
        !maritalstatus ||
        !otherpolicies ||
        !nominee ||
        !mothersname ||
        !spousename ||
        !nomineeage||
        !nomineeadharnumber ||
        !nomineerelation) {
        res.status(400);
        throw new Error("Please Fill all the feilds");
    } else {
        const note = new Note({
            user: req.user._id,
            title,
            mobile,
            email,
            fathersname,
            dob,
            age,
            address,
            height,
            weight,
            plannumber,
            doc,
            sumassured,
            identityMark,
            fathersage,
            fathersdeath,
            mothersage,
            mothersdeath,
            sistersnumber,
            sistersage,
            sistersliving,
            sistersdeath,
            brothersnumber,
            brothersage,
            brothersliving,
            brothersdeath,
            spouseage,
            spousedeath,
            childnumber,
            childage,
            childliving,
            childdeath,
            adharnumber,
            pancard,
            occupation,
            income,
            yearsofduty,
            education,
            maritalstatus,
            otherpolicies,
            nominee,
            mothersname,
            spousename,
            nomineeage,
            nomineeadharnumber,
            nomineerelation
        });

        const createdNote = await note.save();

        res.status(201).json(createdNote);
    }
});
//------------------------------------READ----------------------------------------------------------------------------//
const getNoteById = asyncHandler(async (req, res) => {
    const note = await Note.findById(req.params.id);

    if (note) {
        res.json(note);
    } else {
        res.status(404).json({ message: "Note not found" });
    }
    res.json(note);
});
//----------------------------------------UPDATE-------------------------------------------------------------------//
const UpdateNote = asyncHandler(async (req, res) => {
    const { title,
        mobile,
        email,
        fathersname,
        dob,
        age,
        address,
        height,
        weight,
        plannumber,
        doc,
        sumassured,
        identityMark,
        fathersage,
        fathersdeath,
        mothersage,
        mothersdeath,
        sistersnumber,
        sistersage,
        sistersliving,
        sistersdeath,
        brothersnumber,
        brothersage,
        brothersliving,
        brothersdeath,
        spouseage,
        spousedeath,
        childnumber,
        childage,
        childliving,
        childdeath,
        adharnumber,
        pancard,
        occupation,
        income,
        yearsofduty,
        education,
        maritalstatus,
        otherpolicies,
        nominee,
        mothersname,
        spousename,
        nomineeage,
        nomineeadharnumber,
        nomineerelation } = req.body;

    const note = await Note.findById(req.params.id);

    if (note.user.toString() !== req.user._id.toString()) {
        res.status(401);
        throw new Error("You can't perform this action");
    }

    if (note) {
        note.title = title;
        note.mobile = mobile;
        note.email = email;
        note.fathersname = fathersname;
        note.dob = dob;
        note.age = age;
        note.address = address;
        note.height = height;
        note.weight = weight;
        note.plannumber = plannumber;
        note.doc = doc;
        note.sumassured = sumassured;
        note.identityMark = identityMark;
        note.fathersage = fathersage;
        note.fathersdeath = fathersdeath;
        note.mothersage = mothersage;
        note.mothersdeath = mothersdeath;
        note.sistersnumber = sistersnumber;
        note.sistersage = sistersage;
        note.sistersliving = sistersliving;
        note.sistersdeath = sistersdeath;
        note.brothersnumber = brothersnumber;
        note.brothersage = brothersage;
        note.brothersliving = brothersliving;
        note.brothersdeath = brothersdeath;
        note.spouseage = spouseage;
        note.spousedeath = spousedeath;
        note.childnumber = childnumber;
        note.childage = childage;
        note.childliving = childliving;
        note.childdeath = childdeath;
        note.adharnumber = adharnumber;
        note.pancard = pancard;
        note.occupation = occupation;
        note.income = income;
        note.yearsofduty = yearsofduty;
        note.education = education;
        note.maritalstatus = maritalstatus;
        note.otherpolicies = otherpolicies;
        note.nominee = nominee;
        note.mothersname = mothersname;
        note.spousename = spousename;
        note.nomineeage = nomineeage;
        note.nomineeadharnumber = nomineeadharnumber;
        note.nomineerelation = nomineerelation;

        const updatedNote = await note.save();
        res.json(updatedNote);
    } else {
        res.status(404);
        throw new Error("Note not found");
    }
});
//------------------------------------------DELETE----------------------------------------------------------------//
const DeleteNote = asyncHandler(async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);

        if (!note) {
            res.status(404);
            throw new Error("Note not found");
        }

        if (note.user.toString() !== req.user._id.toString()) {
            res.status(401);
            throw new Error("You can't perform this action");
        }
        const deletedNote = await Note.deleteOne({ _id: req.params.id });

        if (deletedNote.deletedCount === 1) {
            res.json({ message: "Note Removed" });
        } else {
            res.status(500);
            throw new Error("Failed to delete the note");
        }
    } catch (error) {
        console.error("Error deleting the note:", error);
        res.status(500).json({ error: error.message });
    }
});



module.exports = { getNotes, createNote, getNoteById, UpdateNote, DeleteNote }