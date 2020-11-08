import axios from "axios"

export default {
    test: function () {
        return axios.get("/api/config")
    },

    // Need a function to get the serached book via an axios get with the parameters query. 

    getBooks: function () {
        return axios.get("/api/books")
    }

    // Need a function to post the books into the database hosted by heroku

    // Need a function to select books by ID so the book in the hosted database can be deleted
}