import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"

function Books({ data }) {
    return (
        <>
            {data && data.map((test, i) => {
                return <div key={i} className="container my-2 row shadow p-4 border">
                    <div className="col-4">
                        <img src="https://i.imgur.com/HpbHv9u.jpg" className="img-fluid" style={{ 'width': "13rem", 'height': 'auto' }} alt="" />
                    </div>
                    <div className="col-8">
                        <h3 className="my-3">{test.title}</h3>
                        <h5 className="my-3">{test.description}</h5>
                        <h5 className="my-3">Publisher : {test.publisher}</h5>
                        <p className="my-4"> <span className="text-danger mr-3"> Categories</span>
                            {test.categories.map(d => {
                                return <span className="border p-2 mx-1 my-3 bg-light">{d}</span>
                            })}
                        </p>
                        <p className="my-4"><span className="text-success mr-3">Authers</span>
                            {test.authers.map(t => {
                                return <span className="border p-2   mx-1 bg-light">{t}</span>
                            })}
                        </p>
                    </div>
                </div>
            })}
        </>
    )
}
const mapStateToProps = state => {
    return {
        data: state.data
    }
}
export default connect(mapStateToProps, null)(Books)