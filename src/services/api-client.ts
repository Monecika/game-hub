import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "e5bd496df9da43dc957d0d2807589cd8"
    }
})