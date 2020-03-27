import React, { useState } from 'react'
import { Link } from "react-router-dom"
import TeachersValidator from "../../components/common/Validation/TeachersValidator"
import { connect } from "react-redux"
import { addNewTeacher } from "../../Redux/Teachers/TeacherAction"

function AddTeachers({ Teachers, addNewTeacher, }) {
    const [state, setState] = useState({
        "name": "",
        "class_num": "",
        "section": "",
        "subject": ""
    })

    const [error, setError] = useState({})
    const [classes] = useState(JSON.parse(localStorage.getItem("classes")))
    const [sections] = useState(JSON.parse(localStorage.getItem("sections")))
    const handleChange = (event) => {
        let new_state = state
        new_state[event.target.name] = event.target.value
        setState(new_state)
        console.log(state)
    }
    const submit = (event) => {
        event.preventDefault()
        const check_er = TeachersValidator({ obj: state })
        console.log(check_er)
        if (Object.keys(check_er).length !== 0) {
            setError(check_er)
        }
        else {
            addNewTeacher(state)

        }

    }
    return (
        <div className="container p-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-6 col-12  border p-5 bg-light ">
                    <form onSubmit={submit} >
                        {Teachers && <h4 className="text-muted">{Teachers.message}</h4>}
                        <h2 className="text-center">Add a New Teacher</h2>

                        <label htmlFor="name">Teacher's Name</label>
                        <input name="name" className="form-control" type="text" onChange={handleChange} />
                        {error.name && <p className="text-danger">{error.name}</p>}
                        <label htmlFor="username">Class</label>
                        <select className="custom-select" onChange={handleChange} name="class_num" id="">
                            <option selected disabled>.....</option>
                            {classes && classes.map((data, i) => {
                                return <option key={i} value={data.id}>{data.class}</option>
                            })}
                        </select>
                        {error.class && <p className="text-danger">{error.class}</p>}
                        <label htmlFor="username">Section</label>
                        <select className="custom-select" onChange={handleChange} name="section" id="">
                            <option selected disabled>.....</option>
                            {sections && sections.map((data, i) => {
                                return <option key={i} value={data.id}>{data.section}</option>
                            })}
                        </select>

                        {error.section && <p className="text-danger">{error.section}</p>}
                        <label htmlFor="name">Subject</label>
                        <input name="subject" className="form-control" type="text" onChange={handleChange} />
                        {error.subject && <p className="text-danger">{error.subject}</p>}
                        <input type="submit" className="btn btn-success my-2" value="Add Teacher" /> <br />
                        <Link to="/">Go to Home Page</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        Teachers: state.Teachers
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addNewTeacher: userInfo => dispatch(addNewTeacher(userInfo))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTeachers)