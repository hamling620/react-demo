import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from './actionTypes'

let nextSeqId = 0

export const fetchStart = () => ({ type: FETCH_START })

export const fetchSuccess = (result) => ({
  type: FETCH_SUCCESS,
  result
})

export const fetchFailure = (error) => ({
  type: FETCH_FAILURE,
  error
})

export const fetchWeather = (cityCode) => (
  async dispatch => {
    const apiUrl = `/api/data/cityinfo/${cityCode}.html`
    const seqId = ++nextSeqId
    const dispatchIfValid = (action) => {
      if (seqId === nextSeqId) {
        return dispatch(action)
      }
    }
    dispatchIfValid(fetchStart())
    try {
      const res = await fetch(apiUrl)
      if (res.status !== 200) {
        throw new Error('Fail to get response with status' + res.status)
      }
      const resjson = await res.json()
      dispatchIfValid(fetchSuccess(resjson.weatherinfo))
    } catch (err) {
      dispatchIfValid(fetchFailure(err))
    }

})

