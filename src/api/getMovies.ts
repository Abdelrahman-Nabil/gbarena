import { API_ENDPOINT, API_KEY } from "../common/constants";
import axios from 'axios'

export const getMovies = (page: number) => {
    return axios(API_ENDPOINT + 'movie/popular?api_key=' + API_KEY + '&page=' + page)
}