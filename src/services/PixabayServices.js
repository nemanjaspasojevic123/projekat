import axios from 'axios'

const URL = "https://pixabay.com/api/?key=8761127-15c354fd40a23de8d36bfe25d&per_page=150"

export const getAllImages = async () => {
    let response = await axios.get(URL)
    console.log(response.data.hits)
    return response.data.hits
}

const VideoURL = "https://pixabay.com/api/videos/?key=8761127-15c354fd40a23de8d36bfe25d&per_page=50"

export const getAllVideos = async () => {
    let response = await axios.get(VideoURL)
    return response.data.hits
}

 