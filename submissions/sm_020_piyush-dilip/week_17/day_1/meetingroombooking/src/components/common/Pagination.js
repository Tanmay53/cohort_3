import React from 'react'

export default function Pagination({ len, func }) {

    const pageLinks = []
    for(let i=1; i<=len; i++){
        pageLinks.push(i*5)
    }
    return (
        <>
        { pageLinks.map(pageNum => 
            <button className="btn btn-sm btn-light m-1 mt-3" key={pageNum} onClick={() => func(pageNum/5) }>{pageNum/5}</button>
        )}
        </>
    )
}
