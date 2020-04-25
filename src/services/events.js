import axios from 'axios'

const baseURL = ''

const getAll = () => {
  return axios.get(`${baseURL}/api/events`).then((response) => {
    return response.data
  })
}

export default {
  getAll,
}
