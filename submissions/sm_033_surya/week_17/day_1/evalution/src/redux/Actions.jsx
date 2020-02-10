const GETDATA = "GETDATA"
const FETCHDATA = "FETCHDATA"
const GETITEM = "GETITEM"
const CONFIRM = "CONFIRM"
const SORTING = "SORTING"
const FILTERING = "FILTERING"

const getdata = (text, sDate, eDate) => {
    return {
        type: GETDATA,
        payload: {
            text: text,
            startdate: sDate || "2020-02-10",
            enddate: eDate || "2020-02-12"
        }
    }
}
const getitem = (id) => {
    return {
        type: GETITEM,
        payload: id
    }
}
const confirming = (id) => {
    return {
        type: CONFIRM,
        payload: id
    }
}
const fetchdata = () => {
    return {
        type: FETCHDATA
    }
}
const sortit = (acen) => {
    return {
        type: SORTING,
        payload: acen
    }
}
const filteringData = (floor) => {
    return {
        type: FILTERING,
        payload: floor
    }
}

export { getdata, fetchdata, getitem, confirming, sortit, filteringData }