import axios from 'axios';
import { baseURL } from "./constact";

export default async function PostRequest(url , body) {

    const baseURL = "http://localhost:8080/"
    return axios.post(
        `${baseURL}${url}`, {
        body: body
    });
}
