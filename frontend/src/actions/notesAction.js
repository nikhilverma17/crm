import { NOTES_CREATE_FAIL, NOTES_CREATE_REQUEST, NOTES_CREATE_SUCCESS, NOTES_DELETE_FAIL, NOTES_DELETE_REQUEST, NOTES_DELETE_SUCCESS, NOTES_LIST_FAIL, NOTES_LIST_REQUEST, NOTES_LIST_SUCCESS, NOTES_UPDATE_FAIL, NOTES_UPDATE_REQUEST, NOTES_UPDATE_SUCCESS } from "../constants/notesConstants";
import axios from "axios";

export const listNotes = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: NOTES_LIST_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.get(`/api/notes`, config);

        dispatch({
            type: NOTES_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({
            type: NOTES_LIST_FAIL,
            payload: message,
        });
    }
};

export const createNoteAction = (title,
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
    nomineerelation) => async (dispatch, getState) => {
        try {
            dispatch({ type: NOTES_CREATE_REQUEST });

            const {
                userLogin: { userInfo },
            } = getState();

            const config = {
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${userInfo.token}`,
                },
            };

            const { data } = await axios.post(
                `api/notes/create`,
                {
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
                    childdeath, adharnumber,
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
                },
                config
            );

            dispatch({ type: NOTES_CREATE_SUCCESS, payload: data });
        } catch (error) {
            const message =
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message;

            dispatch({ type: NOTES_CREATE_FAIL, payload: message });
        }
    };

export const updateNoteAction = (id,
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
    nomineerelation) => async (
        dispatch,
        getState
    ) => {
        try {
            dispatch({
                type: NOTES_UPDATE_REQUEST,
            });

            const {
                userLogin: { userInfo },
            } = getState();

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${userInfo.token}`,
                },
            };

            const { data } = await axios.put(
                `/api/notes/${id}`,
                {
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
                    
                    
                },
                config
            );

            dispatch({
                type: NOTES_UPDATE_SUCCESS,
                payload: data,
            });
        } catch (error) {
            const message =
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message;
            dispatch({
                type: NOTES_UPDATE_FAIL,
                payload: message,
            });
        }
    };


export const deleteNoteAction = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: NOTES_DELETE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.delete(`/api/notes/${id}`, config);

        dispatch({
            type: NOTES_DELETE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({
            type: NOTES_DELETE_FAIL,
            payload: message,
        });
    }
};  