import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  LOADING,
  SUCCESS,
  FAILURE
} from '@/store/weather/status'

@connect(state => ({
  status: state.weather.status,
  cityName: state.weather.cityName,
  weather: state.weather.weather,
  temp1: state.weather.temp1,
  temp2: state.weather.temp2
}))
class Weather extends Component {
  static propTypes = {
    status: PropTypes.string.isRequired,
    cityName: PropTypes.string,
    weather: PropTypes.string,
    temp1: PropTypes.string,
    temp2: PropTypes.string
  }

  render () {
    const { status, cityName, weather, temp1, temp2 } = this.props
    switch (status) {
      case LOADING:
        return <div>天气信息请求中...</div>
      case SUCCESS:
        return  <div>{ cityName } { weather }  最低气温{ temp1 } 最高气温{ temp2 }</div>
      case FAILURE:
        return <div>天气加载失败...</div>
      default:
        throw new Error('unexpected status' + status)
    }
  }
}

export default Weather
