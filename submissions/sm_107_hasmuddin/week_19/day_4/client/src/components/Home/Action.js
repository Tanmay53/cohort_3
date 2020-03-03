function set_to_array(your_set) {
    const res = Array.from(your_set)
    return res
}
function get_manners_data(jsonFile) {
    const publishers = new Set()
    jsonFile.data.forEach(d => {
        publishers.add(d.publisher)
    })
    const all_data = []
    function array_convert(value) {
        if (value !== null) {
            all_data.push(value)
        }
    }
    publishers.forEach(array_convert)
    const mainData = []
    for (let i = 0; i < all_data.length; i++) {
        let fileToPush = {}
        let authers = new Set()
        let categories = new Set()
        for (let j = 0; j < jsonFile.data.length; j++) {
            if (jsonFile.data[j].publisher == all_data[i]) {
                fileToPush["publisher"] = all_data[i]
                fileToPush["title"] = jsonFile.data[j].title
                fileToPush["description"] = jsonFile.data[j].description
                authers.add(jsonFile.data[j].name)
                categories.add(jsonFile.data[j].category)
            }
        }
        fileToPush["authers"] = set_to_array(authers)
        fileToPush["categories"] = set_to_array(categories)
        mainData.push(fileToPush)
    }
    return mainData
}

export default get_manners_data


