import axios from "axios"

export default {
    test: function () {
        return axios.get("/api/config")
    },

    // getBooks: function () {
    //     return 
    //     // return axios.get("/api/books")
    // }
}