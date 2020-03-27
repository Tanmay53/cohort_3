import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Pagination extends Component {
  render() {
    const { page, perPage, totalRows } = this.props
    const totalPages = Math.floor(totalRows / perPage)
    const pageList = []

    for (let i = page - 1; i >= 0 && i <= (page + 3) && i < totalPages; i++) {
      if (i === page - 1) {
        pageList.push(<li className="page-item">
                        <Link 
                          to={`/?page=${page-1}&&per_page=${perPage}`}
                          type="btn" 
                          className="page-link">
                          Previous
                        </Link>
                      </li>)
        continue;
      }

      if (i === page + 3) {
        pageList.push(<li className="page-item">
                        <Link 
                          to={`/?page=${page+1}&&per_page=${perPage}`}
                          type="btn" 
                          className="page-link">
                          Next
                        </Link>
                      </li>)
        continue;
      }
      pageList.push(<li key = {i} className="page-item">
                      <Link 
                        to={`/?page=${i}&&per_page=${perPage}`}
                        type="btn" 
                        className="page-link">
                        {i}
                      </Link>
                    </li>)
    }
    return (
      <div className="col d-flex justify-content-center">
        <nav aria-label="...">
          <ul class="pagination">
            {pageList}
          </ul>
        </nav>
      </div>
    )
  }
}


// console.log(page, totalPages)
        // for (let i = dupPage-1; i >= 0 && i <= dupPage+3 && i <= totalPages; i++) {
        //     console.log(i)
        //     if (i !== 0) {
        //         pageList.push(<li className="page-item">
        //                         <Link 
        //                           to={`/?page=${page-1}&&per_page=${perPage}`}
        //                           type="btn" 
        //                           className="page-link">
        //                           Previous
        //                         </Link>
        //                       </li>)
        //         continue;
        //       }
        
        //     if (i === page + 3) {
        //     pageList.push(<li className="page-item">
        //                     <Link 
        //                         to={`/?page=${page+1}&&per_page=${perPage}`}
        //                         type="btn" 
        //                         className="page-link">
        //                         Next
        //                     </Link>
        //                     </li>)
        //     continue;
        //     }
        //     pageList.push(<li key = {i + 1} className="page-item">
        //                     <Link 
        //                         to={`/?page=${i+1}&&per_page=${perPage}`}
        //                         type="btn" 
        //                         className="page-link">
        //                         {i+1}
        //                     </Link>
        //                 </li>)
        // }