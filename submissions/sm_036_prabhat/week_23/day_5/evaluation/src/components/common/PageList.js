import React from 'react'
import { connect } from "react-redux";
import { changePage } from "./../../redux/action";

const PageList = ({ page, perPage, employeeData,changePage }) => {

    const length = employeeData.length
    const totalPage = Math.ceil(length / perPage)
    const pageList = [];

    for (let i = page - 1; i >= 0 && i <= page + 2 && i <= totalPage; i++) {
        if (i === page - 1) {
            if (i !== 0) {
                pageList.push(<button key={i} className="btn btn-outline-dark" onClick={() => changePage(page - 1)}>Previous</button>);
            }
            continue;
        }
        if (i === page + 2) {
            pageList.push(<button key={i} className="btn btn-outline-dark" onClick={() => changePage(page + 1)}>Next</button>);
            continue;
        }
        pageList.push(<button key={i} className={`${ page === i ? "btn btn-dark" : "btn btn-outline-dark" }`} onClick={() => changePage(i)}>{i}</button>);
    }

    return (
        <div>
            {pageList}
        </div>
    )
}

// Accessing Data from Store
const mapStateToProps = (state) => ({
    employeeData: state.employeeData,
    page: state.page,
    perPage: state.perPage
})

// Dispatching Action
const mapDispatchToProps = dispatch => ({
    changePage: (payload) => dispatch(changePage(payload))
})


export default connect(mapStateToProps, mapDispatchToProps)(PageList)