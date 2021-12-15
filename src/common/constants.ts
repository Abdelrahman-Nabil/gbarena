import { Dimensions } from 'react-native'
export const API_ENDPOINT = 'https://api.themoviedb.org/3/'
export const API_KEY = '3f462cb1bef7d5d50271f8fc7e095a22'
export const MOVIE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500'
export const PAGING_THRESHOLD = 19

const { width, height } = Dimensions.get('window')
export default {
    width, height
}
export const MOVIE_HEIGHT = ((width*0.94)*750)/500
