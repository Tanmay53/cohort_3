import React from 'react'

const Pagination = ({ buttons, page, change_page }) => {
    const create_btns = Math.ceil(buttons / 20)
    const buttons_ar = []
    for (let i = 1; i <= create_btns; i++) {
        buttons_ar.push(i)
    }
    return (
        <div className="container">
            <div className="row justify-content-end">
                <h2 className="mt-1">Page {page} of {create_btns}</h2>
                <div>
                    {buttons_ar.map((b, i) => {
                        return <button value={b} onClick={(e) => change_page(e)} key={i} className="btn btn-outline-success m-2">{b}</button>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Pagination
