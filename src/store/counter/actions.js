import {
  INCREAMENT,
  DECREASE,
  GETINITVALUE
} from './actionTypes'

export const handleIncreament = (caption) => ({
  type: INCREAMENT,
  caption
})

export const handleDecrease = (caption) => ({
  type: DECREASE,
  caption
})

export const getInitValue = value => ({
  type: GETINITVALUE,
  value
})

const getValue = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        first: 0,
        second: 1,
        third: 2
      })
    })
  })
}

export const getValueAsync = () => (
  async dispatch => {
    const value = await getValue()
    dispatch(getInitValue(value))
  }
)
