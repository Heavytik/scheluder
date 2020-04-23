import axios from 'axios'

const baseURL = 'http://localhost:3001'

const getAll = () => {
  axios
    .get(`${baseURL}/api/events`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error)
    })
}

export default {
  getAll,
}
