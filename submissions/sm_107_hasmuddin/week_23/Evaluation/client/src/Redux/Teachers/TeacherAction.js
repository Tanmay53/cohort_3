import axios from "axios"
import {
    REQUEST_TEACHERS,
    ADD_TEACHER,
    SUCCESS_REQUEST,
    FILTER_TEACHER
} from "./Types"

export const requestTeacher = () => {
    return {
        type: REQUEST_TEACHERS
    }
}
export const fetchTeachers = (data) => {
    return {
        type: SUCCESS_REQUEST,
        payload: data
    }
}

export const addTeacher = (message) => {
    return {
        type: ADD_TEACHER,
        payload: message
    }
}

export const filterTeacher = (data) => {
    return {
        type: FILTER_TEACHER,
        payload: data
    }
}

export const addNewTeacher = (teacherInfo) => {
    return dispatch => {
        dispatch(requestTeacher())
        axios.post("http://127.0.0.1:5000/add_teacher", teacherInfo)
            .then(res => {
                dispatch(addTeacher(res.data.message))
            })
    }
}

export const filter_Teacher = (filter_by, data) => {
    return dispatch => {
        dispatch(requestTeacher())
        axios.post(`http://127.0.0.1:5000/${filter_by}`, data)
            .then(res => {
                dispatch(filterTeacher(res.data))
            })
    }
}

export const fetch_teachers = (data) => {
    return dispatch => {
        dispatch(requestTeacher())
        axios.post("http://127.0.0.1:5000/teachers_record", data)
            .then(res => {
                dispatch(fetchTeachers(res.data))
            })
    }
}

