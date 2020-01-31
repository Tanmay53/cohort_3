const FILL = "FILL"
const DIS = "DIS"
const DISTANCE = "DISTANCE"
const HISTORY = "HISTORY"
const filltering = (value) => {
    return {
        type: FILL,
        data: value
    }
}
const display = () => {
    return {
        type: DIS
    }
}
const distance = (id, value, to) => {
    return {
        type: DISTANCE,
        id: id,
        value: value,
        to: to
    }
}
const addTo = (data) => {
    return {
        type: HISTORY,
        data: data
    }
}

export { filltering, display, distance, addTo }