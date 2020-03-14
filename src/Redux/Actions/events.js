import axios from 'axios'
import config from '../../config'

export const addEvent = (data) => (dispatch) =>
  new Promise((resolve, reject) => {
    dispatch({ type: 'ADD_EVENT_REQUEST' })
    axios.post(`${config.baseUrl}/add`, data)
      .then((res) => {
        dispatch({ type: 'ADD_EVENT_REQUEST_SUCCESS' })
        resolve(res.data)
      })
      .catch((err) => {
        dispatch({ type: 'ADD_EVENT_REQUEST_FAILURE' })
        reject(err)
      })
  });