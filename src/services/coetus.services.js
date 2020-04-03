import axios from 'axios'

const URL = 'https://coetus.herokuapp.com/api/users';

export const getAllUsers = async () => {
    return await axios.get(`${URL}`)
}

export const getUserById = async (user_id) => {
    return await axios.get(`${URL}/${user_id}`)
}

export const registerUser = async (user) => {
    return await axios.put(`${URL}`, user)
}

export const logInUser = async (username, password) => {
    return await axios.post(`${URL}`, {username, password})
}
