import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'a895c4be32ca470781030be9a668bfc2'
    }
})