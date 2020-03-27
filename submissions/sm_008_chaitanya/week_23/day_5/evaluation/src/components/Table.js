import React from 'react'

const Plottab=(props)=>{
    return(
        <tr>
            <th>{props.name}</th>
            <th>{props.class}</th>
            <th>{props.section}</th>
            <th>{props.subject}</th>
            <th><button className="btn btn-info" onClick={()=>props.edit(props.id)}>Edit</button></th>
            <th><button className="btn btn-danger" onClick={()=>props.delete(props.id)}>Delete</button></th>
        </tr>
    )
}

const Table=(props)=>{
    return(
        <div className="container text-center">
            <select onClick={props.filterSection} className="py-2 h5 bg-warning mr-2">
                <option value="all">-- Filter Section --</option>
                <option value="all">All</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
            </select>
            <select onClick={props.filterSubject} className="py-2 h5 bg-warning">
                <option value="all">-- Selec Subject --</option>
                <option value="all">All</option>
                <option value="MATHS">MATHS</option>
                <option value="PHYSICS">PHYSICS</option>
                <option value="CHEMISTRY">CHEMISTRY</option>
                <option value="COMPUTERS">COMPUTERS</option>
                <option value="SOCIAL">SOCIAL</option>
                <option value="ENGLISH">ENGLISH</option>
                <option value="HINDI">HINDI</option>
            </select>
            <div className="col-10 offset-1 col-md-8 offset-md-2 col-lg-12 offset-lg-0 table-responsive mt-4">
                <table className="table border">
                    <thead>
                        <tr>
                            <th>Teacher</th>
                            <th>Class</th>
                            <th>Section</th>
                            <th>Subject</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map(element=><Plottab key={element.id}
                                                          id={element.id}
                                                          name={element.name}
                                                          class={element.class}
                                                          section={element.section}
                                                          subject={element.subject}
                                                          edit={props.handleEdit}
                                                          delete={props.handleDelete}/>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Table