import React, { useEffect } from 'react'
import MainScreen from '../../components/MainScreen'
import { useNavigate } from 'react-router-dom'
import { Accordion, Button, Card } from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteNoteAction, listNotes } from '../../actions/notesAction'
import Loading from '../../components/Loding'
import ErrorMessage from '../../components/ErrorMessage'
import html2pdf from 'html2pdf.js'; // Import html2pdf library
import "../Mydata/MyNotes.css"

function MyNotes({ search }) {

    const dispatch = useDispatch();
    const noteList = useSelector(state => state.noteList);
    const { loading, notes, error } = noteList;

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin;

    const noteCreate = useSelector((state) => state.noteCreate);
    const { success: successCreate } = noteCreate;
    const noteUpdate = useSelector((state) => state.noteUpdate);
    const { success: successUpdate } = noteUpdate;

    const noteDelete = useSelector((state) => state.noteDelete);
    const { loading: loadingDelete, error: errorDelete, success: sucessDelete, } = noteDelete;

    const deleteHandler = (id) => {
        if (window.confirm("Are You Sure?")) {
            dispatch(deleteNoteAction(id));

        }
    };

    console.log(notes);
    const history = useNavigate();
    useEffect(() => {
        dispatch(listNotes());
        if (!userInfo) {
            history("/")
        }
    }, [dispatch, history, userInfo, successCreate, successUpdate, sucessDelete])
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" };
        return new Date(dateString).toLocaleDateString("en-IN", options);
    };
    const generatePDF = (note) => {
        const content = `
<div class="body">
    <h1 style="margin-bottom: 1rem;"> ${note.title} Details</h1>
      <div class="table-container1">
        <div class="column1">
                <p style="margin-bottom: 1rem;"><b>Father's Name:</b> ${note.fathersname}</p>
                <p style="margin-bottom: 1rem;"><b>Father's Name:</b> ${note.mothersname}</p>
                <p style="margin-bottom: 1rem;"><b>Mobile:</b> ${note.mobile}</p>
                <p style="margin-bottom: 1rem;"><b>Email:</b> ${note.email}</p>
                <p style="margin-bottom: 1rem;"><b>Date of Birth:</b> ${note.dob}</p>
                <p style="margin-bottom: 1rem;"><b>Age:</b> ${note.age}</p>
                <p style="margin-bottom: 1rem;"><b>Marital Status:</b> ${note.maritalstatus}</p>
                <p style="margin-bottom: 1rem;"><b>Spouse Name:</b> ${note.spousename}</p>
                <p style="margin-bottom: 1rem;"><b>Adhar Number:</b> ${note.adharnumber}</p>
                <p style="margin-bottom: 1rem;"><b>Pan Card:</b> ${note.pancard}</p>
                <p style="margin-bottom: 1rem;"><b>Address:</b> ${note.address}</p>
                <p style="margin-bottom: 1rem;"><b>Height:</b> ${note.height}</p>
                <p style="margin-bottom: 1rem;"><b>Weight:</b> ${note.weight}</p>
                 
        </div>
        <div class="column1">    
                <p style="margin-bottom: 1rem;"><b>Identity Mark:</b> ${note.identityMark}</p>  
                <p style="margin-bottom: 1rem;"><b>Education:</b> ${note.education}</p>
                <p style="margin-bottom: 1rem;"><b>Occupation:</b> ${note.occupation}</p>
                <p style="margin-bottom: 1rem;"><b>Income:</b> ${note.income}</p>
                <p style="margin-bottom: 1rem;"><b>Years Of Duty:</b> ${note.yearsofduty}</p>
                <p style="margin-bottom: 1rem;"><b>Plan & Term:</b> ${note.plannumber}</p>
                <p style="margin-bottom: 1rem;"><b>Date Of Commencement:</b> ${note.doc}</p>
                <p style="margin-bottom: 1rem;"><b>Sum Assured:</b> ${note.sumassured}</p>
                <p style="margin-bottom: 1rem;"><b>Nominee:</b> ${note.nominee}</p>
                <p style="margin-bottom: 1rem;"><b>Nominee Age:</b> ${note.nomineeage}</p>
                <p style="margin-bottom: 1rem;"><b>Nominee Relation:</b> ${note.nomineerelation}</p>
                <p style="margin-bottom: 1rem;"><b>Nominee Adhar Number:</b> ${note.nomineeadharnumber}</p>
                <p style="margin-bottom: 1rem;"><b>Other Policies:</b> ${note.otherpolicies}</p> 
        </div>
    </div>
    <div class="table1">
        <h2>Family History</h2>
          <table>
        <tr>
            <th>Father</th>
            <th>Age</th>
            <th>Living & Health</th>
            <th>Death And Reason</th>
        </tr>
        <tr>
            <td>${note.fathersname}</td>
            <td>${note.fathersage}</td>
            <td>${note.fathersliving}</td>
            <td>${note.fathersdeath}</td>
        </tr>
    </table>

    <table>
        <tr>
            <th>Mother</th>
            <th>Age</th>
            <th>Living & Health</th>
            <th>Death And Reason</th>
        </tr>
        <tr>
            <td>${note.mothersname}</td>
            <td>${note.mothersage}</td>
            <td>${note.mothersliving}</td>
            <td>${note.mothersdeath}</td>
        </tr>
    </table>

    <table>
        <tr>
            <th>Sisters</th>
            <th>Age</th>
            <th>Living & Health</th>
            <th>Death & Reason</th>
        </tr>
        <tr>
            <td>${note.sistersnumber}</td>
            <td>${note.sistersage}</td>
            <td>${note.sistersliving}</td>
            <td>${note.sistersdeath}</td>
        </tr>
    </table>

    <table>
        <tr>
            <th>Brothers</th>
            <th>Age</th>
            <th>Living & Health</th>
            <th>Death & Reason</th>
        </tr>
        <tr>
            <td>${note.brothersnumber}</td>
            <td>${note.brothersage}</td>
            <td>${note.brothersliving}</td>
            <td>${note.brothersdeath}</td>
        </tr>
    </table>

    <table>
        <tr>
            <th>Spouse Age</th>
            <th>Age</th>
            <th>Living & Health</th>
            <th>Death & Reason</th>
        </tr>
        <tr>
            <td>${note.spousename}</td>
            <td>${note.spouseage}</td>
            <td>${note.spouseliving}</td>
            <td>${note.spousedeath}</td>
        </tr>
    </table>

    <table>
        <tr>
            <th>Children</th>
            <th>Age</th>
            <th>Living & Health</th>
            <th>Death & Reason</th>
        </tr>
        <tr>
            <td>${note.childnumber}</td>
            <td>${note.childage}</td>
            <td>${note.childliving}</td>
            <td>${note.childdeath}</td>
        </tr>
    </table>    
    </div>
</div>
  `;


        const opt = {
            margin: 10,
            filename: `${note.title}.pdf`,
            html2pdf: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' },
        };

        const element = document.createElement('div');
        element.innerHTML = content;

        html2pdf().from(element).set(opt).save();
    };

    return (
        <div className="my-notes-container">
            <MainScreen title=<b>{`Welcome ${userInfo && userInfo.name}`}</b>>

                <Button href='/createnote' style={{ marginLeft: 10, marginBottom: 6 }} size='lg' variant='warning'>
                    Create New Client
                </Button>
                {errorDelete && (
                    <ErrorMessage varient="danger">{errorDelete}</ErrorMessage>
                )}
                {loadingDelete && <Loading />}
                {error && <ErrorMessage varient='info'>{error}</ErrorMessage>}
                {loading && <Loading />}

                {notes?.reverse().filter(filteredNotes => filteredNotes.title.toLowerCase().includes(search.toLowerCase())).map(note => (

                    <Card>
                        <Card.Header style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                            <span style={{
                                color: 'black',
                                textDecoration: 'none',
                                fontSize: '30px',
                                marginBottom: '10px',
                            }}>
                                {note.title}<br />
                                <span style={{ fontSize: '20px' }}>Father's Name: {note.fathersname}</span>
                            </span>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button
                                    onClick={() => generatePDF(note)}
                                    className='mx-2'
                                    variant='primary'
                                >
                                    Download
                                </Button>
                                <Button variant='dark' href={`/note/${note._id}`} >
                                    Edit
                                </Button>
                                <Button
                                    className='mx-2'
                                    variant='danger'
                                    onClick={() => deleteHandler(note._id)}
                                >
                                    Delete
                                </Button>
                            </div>
                        </Card.Header>

                        <Accordion>
                            <Accordion.Header>Click to See Deatils</Accordion.Header>
                            <Accordion.Body>
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                        <div style={{ fontFamily: 'Arial, sans-serif', padding: '10px' }}>
                                            <h1 style={{ color: 'red', fontSize: '1.6rem', marginBottom: '1rem' }}>
                                                {note.title} Details
                                            </h1>
                                            <div className='flex-container' >
                                                <div className='column'>
                                                    <ul>
                                                        <li className='list-item'><b>Father's Name:</b> {note.fathersname}</li>
                                                        <li className='list-item'><b>Mother's Name:</b> {note.mothersname}</li>
                                                        <li className='list-item'><b>Mobile:</b> {note.mobile}</li>
                                                        <li className='list-item'><b>Email:</b> {note.email}</li>
                                                        <li className='list-item'><b>Date of Birth:</b> {note.dob}</li>
                                                        <li className='list-item'><b>Age:</b> {note.age}</li>
                                                        <li className='list-item'><b>Marital Status:</b> {note.maritalstatus}</li>
                                                        <li className='list-item'><b>Spouse Name:</b> {note.spousename}</li>
                                                        <li className='list-item'><b>Adhar Card:</b> {note.adharnumber}</li>
                                                        <li className='list-item'><b>Pan Card:</b> {note.pancard}</li>
                                                        <li className='list-item'><b>Address:</b> {note.address}</li>
                                                        <li className='list-item'><b>Height:</b> {note.height}</li>
                                                        <li className='list-item'><b>Weight:</b> {note.weight}</li>
                                                        
                                                    </ul>
                                                </div>
                                                <div className='column'>
                                                    <ul>
                                                        <li className='list-item'><b>Education:</b> {note.education}</li>
                                                        <li className='list-item'><b>Occupation:</b> {note.occupation}</li>
                                                        <li className='list-item'><b>Income:</b> {note.income}</li>
                                                        <li className='list-item'><b>Years Of Duty :</b> {note.yearsofduty}</li>
                                                        <li className='list-item'><b>Plan & Term:</b> {note.plannumber}</li>
                                                        <li className='list-item'><b>Date Of Commencement:</b> {note.doc}</li>
                                                        <li className='list-item'><b>Sum Assured:</b> {note.sumassured}</li>
                                                        <li className='list-item'><b>Identity Mark:</b> {note.identityMark}</li>
                                                        <li className='list-item'><b>Nominee:</b> {note.nominee}</li>
                                                        <li className='list-item'><b>Nominee Age:</b> {note.nomineeage}</li>
                                                        <li className='list-item'><b>Nominee Relation:</b> {note.nomineerelation}</li>
                                                        <li className='list-item'><b>Nominee Adhar Number:</b> {note.nomineeadharnumber}</li>
                                                        <li className='list-item'><b>Other Policies:</b> {note.otherpolicies}</li>

                                                    </ul>
                                                </div>
                                            </div>

                                            <h2>Family History</h2>
                                            <table style={{ fontFamily: 'arial, sans-serif', borderCollapse: 'collapse', width: '100%' }}>
                                                <tr style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>
                                                    <th style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>Father</th>
                                                    <th style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>Age</th>
                                                    <th style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>Living & Health Condition </th>
                                                    <th style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>Death And Reason</th>
                                                </tr>
                                                <tr style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>
                                                    <td style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>{note.fathersname}</td>
                                                    <td style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>{note.fathersage}</td>
                                                    <td style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>{note.fathersliving}</td>
                                                    <td style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>{note.fathersdeath}</td>
                                                </tr>
                                            </table>
                                            <table style={{ fontFamily: 'arial, sans-serif', borderCollapse: 'collapse', width: '100%' }}>
                                                <tr style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>
                                                    <th style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>Mother</th>
                                                    <th style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>Age</th>
                                                    <th style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>Living & Health Condition </th>
                                                    <th style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>Death And Reason</th>
                                                </tr>
                                                <tr style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>
                                                    <td style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>{note.mothersname}</td>
                                                    <td style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>{note.mothersage}</td>
                                                    <td style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}></td>
                                                    <td style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>{note.mothersdeath}</td>
                                                </tr>
                                            </table>
                                            <table style={{ fontFamily: 'arial, sans-serif', borderCollapse: 'collapse', width: '100%' }}>
                                                <tr style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>
                                                    <th style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>Sisters</th>
                                                    <th style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>Age</th>
                                                    <th style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>Living & Health Condition </th>
                                                    <th style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>Death & Reason</th>
                                                </tr>
                                                <tr style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>
                                                    <td style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>{note.sistersnumber}</td>
                                                    <td style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>{note.sistersage}</td>
                                                    <td style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>{note.sistersliving}</td>
                                                    <td style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>{note.sistersdeath}</td>
                                                </tr>
                                            </table>

                                            <table style={{ fontFamily: 'arial, sans-serif', borderCollapse: 'collapse', width: '100%' }}>
                                                <tr style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>
                                                    <th style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>Brothers</th>
                                                    <th style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>Age</th>
                                                    <th style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>Living & Health Condition </th>
                                                    <th style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>Death & Reason</th>
                                                </tr>
                                                <tr style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>
                                                    <td style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>{note.brothersnumber}</td>
                                                    <td style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>{note.brothersage}</td>
                                                    <td style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>{note.brothersliving}</td>
                                                    <td style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>{note.brothersdeath}</td>
                                                </tr>
                                            </table>

                                            <table style={{ fontFamily: 'arial, sans-serif', borderCollapse: 'collapse', width: '100%' }}>
                                                <tr style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>
                                                    <th style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>Spouse</th>
                                                    <th style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>Age</th>
                                                    <th style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>Living & Health Condition </th>
                                                    <th style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>Death & Reason</th>
                                                </tr>
                                                <tr style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>
                                                    <td style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>{note.spousename}</td>
                                                    <td style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>{note.spouseage}</td>
                                                    <td style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}></td>
                                                    <td style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>{note.spousedeath}</td>
                                                </tr>
                                            </table>

                                            <table style={{ fontFamily: 'arial, sans-serif', borderCollapse: 'collapse', width: '100%' }}>
                                                <tr style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>
                                                    <th style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>Children</th>
                                                    <th style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>Age</th>
                                                    <th style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>Living & Health Condition </th>
                                                    <th style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>Death & Reason</th>
                                                </tr>
                                                <tr style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>
                                                    <td style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>{note.childnumber}</td>
                                                    <td style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>{note.childage}</td>
                                                    <td style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>{note.childliving}</td>
                                                    <td style={{ border: '1px solid black', textAlign: 'left', padding: '2px', width: '10%' }}>{note.childdeath}</td>
                                                </tr>
                                            </table>

                                        </div>
                                        <br></br>
                                        <footer className="blockquote-footer" style={{ 'color': 'black' }}>
                                            Created On-
                                            <cite title="Source Title">
                                                {formatDate(note.createdAt)}
                                            </cite>
                                        </footer>
                                    </blockquote>
                                </Card.Body>
                            </Accordion.Body>
                        </Accordion>
                    </Card>
                ))
                }


            </MainScreen>
        </div>
    )
}

export default MyNotes
