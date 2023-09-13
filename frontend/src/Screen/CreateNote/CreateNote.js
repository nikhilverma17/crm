import React from "react";
import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import '../CreateNote/CreateNote.css';
import { useNavigate, useLocation } from "react-router-dom";
import { createNoteAction } from "../../actions/notesAction";
import Loading from "../../components/Loding";
import ErrorComponent from "../../components/ErrorMessage";




const CreateNote = () => {
    const [title, setTitle] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [fathersname, setFathersname] = useState("");
    const [dob, setDob] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [plannumber, setPalnnumber] = useState("");
    const [doc, setDoc] = useState("");
    const [sumassured, setSumassured] = useState("");
    const [identityMark, setIdentitymark] = useState("");
    const [fathersage, setFathersage] = useState("");
    const [fathersdeath, setFathersdeath] = useState("");
    const [mothersage, setMothersage] = useState("");
    const [mothersdeath, setMothersdeath] = useState("");
    const [sistersnumber, setSistersnumber] = useState("");
    const [sistersage, setSistersage] = useState("");
    const [sistersliving, setSistersliving] = useState("");
    const [sistersdeath, setSistersdeath] = useState("");
    const [brothersnumber, setBrothersnumber] = useState("");
    const [brothersage, setBrothersage] = useState("");
    const [brothersliving, setBrothersliving] = useState("");
    const [brothersdeath, setBrothersdeath] = useState("");
    const [spouseage, setSpouseage] = useState("");
    const [spousedeath, setSpousedeath] = useState("");
    const [childnumber, setChildnumber] = useState("");
    const [childage, setChildage] = useState("");
    const [childliving, setChildLiving] = useState("");
    const [childdeath, setChilddeath] = useState("");
    const [adharnumber, setAdharnumber] = useState(""); 
    const [pancard, setPancard] = useState(""); 
    const [occupation, setOccupation] = useState(""); 
    const [income, setIncome] = useState(""); 
    const [yearsofduty, setYearsofduty] = useState(""); 
    const [education, setEducation] = useState(""); 
    const [maritalstatus, setMaritalstatus] = useState(""); 
    const [otherpolicies, setOtherpolicies] = useState(""); 
    const [nominee, setNominee] = useState(""); 
    const [mothersname, setMothersname] = useState(""); 
    const [spousename, setSpousename] = useState(""); 
    const [nomineeage, setNomineeage] = useState(""); 
    const [nomineeadharnumber, setNomineeadharnumber] = useState(""); 
    const [nomineerelation, setNominnerelation] = useState(""); 
   

    const dispatch = useDispatch();
    const noteCreate = useSelector((state) => state.noteCreate);
    //eslint-disable-next-line
    const { loading, error, note } = noteCreate;

    const location = useLocation();
    const Navigate = useNavigate();
    console.log(location.pathname);


    const resetHandler = () => {
        setTitle("");
        setMobile("");
        setEmail("");
        setFathersname("");
        setDob("");
        setAge("");
        setAddress("");
        setHeight("");
        setWeight("");
        setPalnnumber("");
        setDoc("");
        setSumassured("");
        setIdentitymark("");
        setFathersage("");
        setFathersdeath("");
        setMothersage("");
        setMothersdeath("");
        setSistersnumber("");
        setSistersage("");
        setSistersliving("");
        setSistersdeath("");
        setBrothersnumber("");
        setBrothersage("");
        setBrothersliving("");
        setBrothersdeath("");
        setSpouseage("");
        setSpousedeath("");
        setChildnumber("");
        setChildage("");
        setChildLiving("");
        setChilddeath("");
        setAdharnumber("");
        setPancard("");
        setOccupation("");
        setIncome("");
        setYearsofduty("");
        setEducation("");
        setMaritalstatus("");
        setOtherpolicies("");
        setNominee("");
        setMothersname("");
        setSpousename("");
        setNomineeage("");
        setNomineeadharnumber("");
        setNominnerelation("")
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (!title ||
            !mobile ||
            !email ||
            !fathersname||
            !dob||
            !age||
            !address||
            !height||
            !weight||
            !plannumber||
            !doc||
            !sumassured||
            !identityMark||
            !fathersage||
            !fathersdeath||
            !mothersage||
            !mothersdeath||
            !sistersnumber||
            !sistersage||
            !sistersliving||
            !sistersdeath||
            !brothersnumber||
            !brothersage||
            !brothersliving||
            !brothersdeath||
            !spouseage||
            !spousedeath||
            !childnumber||
            !childage||
            !childliving||
            !childdeath ||
            !adharnumber ||
            !pancard ||
            !occupation ||
            !income ||
            !yearsofduty ||
            !education ||
            !maritalstatus ||
            !otherpolicies ||
            !nominee||
            !mothersname||
            !spousename ||
            !nomineeage||
            !nomineeadharnumber ||
            !nomineerelation
   )
            return;
        dispatch(createNoteAction(
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

        ));
        resetHandler();
        Navigate(`/mydata`);
     

    };
    

    return (
        <MainScreen title="Fill the database">
           
            <Card style={{ 'fontSize': '20px' }}>
                {error && <ErrorComponent>{error.message}</ErrorComponent>}
                <Card.Header>Create a Note</Card.Header>
                <Card.Body >
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId="title" className="mb-4">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                value={title}

                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="mobile" className="mb-4">
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control
                                type="number"
                                value={mobile}

                                onChange={(e) => setMobile(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="email" className="mb-4">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                value={email}

                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="fathersname" className="mb-4">
                            <Form.Label>Father's Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={fathersname}

                                onChange={(e) => setFathersname(e.target.value)}
                            />
                            </Form.Group>
                        <Form.Group controlId="mothersname" className="mb-4">
                            <Form.Label>Mother's Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={mothersname}
                                onChange={(e) => setMothersname(e.target.value)}
                            />
                            </Form.Group>
                        <Form.Group controlId="dob" className="mb-4">
                            <Form.Label>Date Of Birth</Form.Label>
                            <Form.Control
                                type="date"
                                value={dob}

                                onChange={(e) => setDob(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="Age" className="mb-4">
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                type="number"
                                value={age}

                                onChange={(e) => setAge(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="marritalstatus" className="mb-4">
                            <Form.Label>Marital Status</Form.Label>
                            <Form.Control
                                type="text"
                                value={maritalstatus}
                                placeholder="Single or Married"
                                onChange={(e) => setMaritalstatus(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="spousename" className="mb-4">
                            <Form.Label>Husband/Wife Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={spousename}
                                onChange={(e) => setSpousename(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="address" className="mb-4">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={address}

                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="adharnumber" className="mb-4">
                            <Form.Label>Adhar Card Number</Form.Label>
                            <Form.Control
                                type="number"
                                value={adharnumber}
                                placeholder="Last 4 digits"
                                onChange={(e) => setAdharnumber(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="pancard" className="mb-4">
                            <Form.Label>Pan Card Number</Form.Label>
                            <Form.Control
                                type="text"
                                value={pancard}

                                onChange={(e) => setPancard(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="nominee" className="mb-4">
                            <Form.Label>Nominee</Form.Label>
                            <Form.Control
                                type="text"
                                value={nominee}
                                onChange={(e) => setNominee(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="nomineeage" className="mb-4">
                            <Form.Label>Nominee Age</Form.Label>
                            <Form.Control
                                type="number"
                                value={nomineeage}
                                onChange={(e) => setNomineeage(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="nomineerelation" className="mb-4">
                            <Form.Label>Nominee Relation</Form.Label>
                            <Form.Control
                                type="text"
                                value={nomineerelation}
                                onChange={(e) => setNominnerelation(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="nomineeadharnumber" className="mb-4">
                            <Form.Label>Nominee Adhar Number</Form.Label>
                            <Form.Control
                                type="number"
                                value={nomineeadharnumber}
                                onChange={(e) => setNomineeadharnumber(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="education" className="mb-4">
                            <Form.Label>Education</Form.Label>
                            <Form.Control
                                type="text"
                                value={education}

                                onChange={(e) => setEducation(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="ocuupation" className="mb-4">
                            <Form.Label>Occupation</Form.Label>
                            <Form.Control
                                type="text"
                                value={occupation}

                                onChange={(e) => setOccupation(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="yearofduties" className="mb-4">
                            <Form.Label>Year Of Duties</Form.Label>
                            <Form.Control
                                type="text"
                                value={yearsofduty}

                                onChange={(e) => setYearsofduty(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="income" className="mb-4">
                            <Form.Label>Income</Form.Label>
                            <Form.Control
                                type="number"
                                value={income}
                                placeholder="₹"
                                onChange={(e) => setIncome(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="height" className="mb-4">
                            <Form.Label>Height</Form.Label>
                            <Form.Control
                                type="number"
                                value={height}
                                placeholder="In Cm"
                                onChange={(e) => setHeight(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="weight" className="mb-4">
                            <Form.Label>Weight</Form.Label>
                            <Form.Control
                                type="number"
                                value={weight}
                                placeholder="In Kg"
                                onChange={(e) => setWeight(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="plannumber" className="mb-4">
                            <Form.Label>Plan & Term</Form.Label>
                            <Form.Control
                                type="number"
                                value={plannumber}

                                onChange={(e) => setPalnnumber(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="doc" className="mb-4">
                            <Form.Label>Date of Commencement</Form.Label>
                            <Form.Control
                                type="date"
                                value={doc}

                                onChange={(e) => setDoc(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="sumassured" className="mb-4">
                            <Form.Label>Sum Assured</Form.Label>
                            <Form.Control
                                type="number"
                                value={sumassured}
                                placeholder="₹"

                                onChange={(e) => setSumassured(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="identitymark" className="mb-4">
                            <Form.Label>Identity Mark</Form.Label>
                            <Form.Control
                                type="text"
                                value={identityMark}

                                onChange={(e) => setIdentitymark(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="otherpolicies" className="mb-4">
                            <Form.Label>Other Policies</Form.Label>
                            <Form.Control
                                type="text"
                                value={otherpolicies}

                                onChange={(e) => setOtherpolicies(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="fathersage" className="mb-4">
                            <Form.Label>Father's Age</Form.Label>
                            <Form.Control
                                type="number"
                                value={fathersage}

                                onChange={(e) => setFathersage(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="fathersdeath" className="mb-4">
                            <Form.Label>Father's Death And Reason</Form.Label>
                            <Form.Control
                                type="text"
                                value={fathersdeath}

                                onChange={(e) => setFathersdeath(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="mothersage" className="mb-4">
                            <Form.Label>Mother's Age</Form.Label>
                            <Form.Control
                                type="number"
                                value={mothersage}

                                onChange={(e) => setMothersage(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="mothersdeath" className="mb-4">
                            <Form.Label>Mother's Death And Reason</Form.Label>
                            <Form.Control
                                type="text"
                                value={mothersdeath}

                                onChange={(e) => setMothersdeath(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="sistersnumber" className="mb-4">
                            <Form.Label>Sisters</Form.Label>
                            <Form.Control
                                type="number"
                                value={sistersnumber}

                                onChange={(e) => setSistersnumber(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="sistersage" className="mb-4">
                            <Form.Label>Sister's Age</Form.Label>
                            <Form.Control
                                type="text"
                                value={sistersage}

                                onChange={(e) => setSistersage(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="sistersliving" className="mb-4">
                            <Form.Label>Sister's Living</Form.Label>
                            <Form.Control
                                type="number"
                                value={sistersliving}

                                onChange={(e) => setSistersliving(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="sistersdeath" className="mb-4">
                            <Form.Label>Sister's Death & Reason</Form.Label>
                            <Form.Control
                                type="text"
                                value={sistersdeath}

                                onChange={(e) => setSistersdeath(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="brothersnumber" className="mb-4">
                            <Form.Label>Brothers</Form.Label>
                            <Form.Control
                                type="number"
                                value={brothersnumber}

                                onChange={(e) => setBrothersnumber(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="brothersage" className="mb-4">
                            <Form.Label>Brother's Age</Form.Label>
                            <Form.Control
                                type="text"
                                value={brothersage}

                                onChange={(e) => setBrothersage(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="brothersliving" className="mb-4">
                            <Form.Label>Brothers's Living</Form.Label>
                            <Form.Control
                                type="number"
                                value={brothersliving}

                                onChange={(e) => setBrothersliving(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="brothersdeath" className="mb-4">
                            <Form.Label>Brothers's Death & Reason</Form.Label>
                            <Form.Control
                                type="text"
                                value={brothersdeath}

                                onChange={(e) => setBrothersdeath(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="spouseage" className="mb-4">
                            <Form.Label>Husband/Wife Age</Form.Label>
                            <Form.Control
                                type="number"
                                value={spouseage}

                                onChange={(e) => setSpouseage(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="spousedeath" className="mb-4">
                            <Form.Label>Husband/Wife Death & Reason</Form.Label>
                            <Form.Control
                                type="text"
                                value={spousedeath}

                                onChange={(e) => setSpousedeath(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="childnumber" className="mb-4">
                            <Form.Label>Childrens</Form.Label>
                            <Form.Control
                                type="number"
                                value={childnumber}

                                onChange={(e) => setChildnumber(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="childage" className="mb-4">
                            <Form.Label>Children's Age</Form.Label>
                            <Form.Control
                                type="text"
                                value={childage}

                                onChange={(e) => setChildage(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="childliving" className="mb-4">
                            <Form.Label>Children's Living</Form.Label>
                            <Form.Control
                                type="number"
                                value={childliving}

                                onChange={(e) => setChildLiving(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="childdeath" className="mb-4">
                            <Form.Label>Children's Death</Form.Label>
                            <Form.Control
                                type="text"
                                value={childdeath}

                                onChange={(e) => setChilddeath(e.target.value)}
                            />
                        </Form.Group>
                        {loading && <Loading size={50} />}
                        <Button type="submit" variant="primary">
                            Create Client
                        </Button>
                        <Button onClick={resetHandler} variant="danger" className="ms-4 px-3 red-button">
                            Reset Fields
                        </Button>
                    </Form>
                </Card.Body>
                <Card.Footer className="text-muted">
                    Created on -: {new Date().toLocaleString()}
                </Card.Footer>
                </Card>
            
        </MainScreen>
    );
};

export default CreateNote;
