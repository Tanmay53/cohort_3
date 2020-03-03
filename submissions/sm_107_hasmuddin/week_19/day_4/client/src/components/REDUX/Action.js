import axios from 'axios'
import get_manners_data from "../Home/Action"

const fetch_data = (data) => {
    return {
        type: "FETCH_DATA",
        data: data
    }
}

export const fetch_response = (url, data) => {
    return dispatch => {
        const config = {
            baseURL: "http://127.0.0.1:5000/",
            method: "POST",
            url: url,
            headers: { "Content-Type": "application/json" },
            data: data
        }
        axios(config)
            .then(res => {
                console.log(res.data)
                const main_data = get_manners_data(res.data)
                return dispatch(fetch_data(main_data))
            })
    }

}


