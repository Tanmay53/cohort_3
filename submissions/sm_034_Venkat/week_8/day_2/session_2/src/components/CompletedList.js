import React from 'react'
function CompletedList(props) {
    return(
        <div className="p-2 m-2">
            <h5>Completed List Items are :</h5>
            {console.log(props.itemsArr)}
            {props.itemsArr && props.itemsArr.map((each, index) => {
                return(
                    <div key={each.itemName + index} className="m-1 text-success text-capitalize">
                        <em>{each.itemName}</em>
                    </div>
                )
            })}
        </div>
    )
}
export default CompletedList