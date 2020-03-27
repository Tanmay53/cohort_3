import React from 'react'
import TeacherTable from './TeacherTable'
import { connect } from "react-redux"
import { filter_Teacher, fetch_teachers } from "../../Redux/Teachers/TeacherAction"

function TeacherRecord({ data, sections, classes, filter_Teacher, fetch_teachers }) {
    // const [data_size] = useState(data.length)

    const filter_by_class = (event) => {
        if (event.target.value === "all") {
            fetch_teachers({ "curr_page": 1 })
        }
        else {

            filter_Teacher("/teachers_by_class", { "class_num": event.target.value })
        }
    }

    const filter_by_section = (event) => {
        if (event.target.value === "all") {
            fetch_teachers({ "curr_page": 1 })
        }
        else {

            filter_Teacher("/teachers_by_section", { "section": event.target.value })
        }
    }

    const handlePage = (event) => {
        if (data.length < 10 && event.target.id == "next") {
            alert("Last page")
        }
        else {

            var page = localStorage.getItem("page")
            if (page === null) {
                localStorage.setItem("page", 1)
                page = 1
            }
            if (page >= 1) {
                var new_page = page
                if (event.target.id === "next") {
                    fetch_teachers({ "curr_page": Number(new_page) + 1 })
                    localStorage.setItem("page", Number(new_page) + 1)
                }
                else {
                    if (new_page > 1) {
                        fetch_teachers({ "curr_page": new_page - 1 })
                        localStorage.setItem("page", new_page - 1)
                    }
                }
            }
        }

    }



    return (
        <div className="container">
            <div className="row justify-content-start">
                <div className="col-3">
                    Class
                <select
                        onChange={filter_by_class}
                        name="classes"
                        className="custom-select"
                        id="">
                        <option value="all">All</option>
                        {classes && classes.map((c, i) => {
                            return <option key={i} value={c.id}>{c.class}</option>
                        })}
                    </select>
                </div>
                <div className="col-3">
                    Section
                <select
                        onChange={filter_by_section}
                        name="classes"
                        className="custom-select"
                        id="">
                        <option value="all">All</option>
                        {sections && sections.map((c, i) => {
                            return <option key={i} value={c.id}>{c.section}</option>
                        })}
                    </select>
                </div>

            </div>
            <div className="row justify-content-end">
                <button id="prev" onClick={handlePage} className="btn btn-outline-danger px-3 mx-1">Prev</button>
                <button id="next" onClick={handlePage} className="btn btn-outline-danger px-3 mx-1">Next</button>
            </div>
            <div>
                <TeacherTable data={data} sections={sections} classes={classes} />
            </div>
        </div>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        filter_Teacher: (filter_by, data) => dispatch(filter_Teacher(filter_by, data)),
        fetch_teachers: (data) => dispatch(fetch_teachers(data))
    }
}

export default connect(null, mapDispatchToProps)(TeacherRecord)