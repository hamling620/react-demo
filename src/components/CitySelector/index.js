import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchWeather } from '@/store/weather/actions'

const CITY_OPTIONS = [
  { cityName: '北京', cityCode: '101010100' },
  { cityName: '上海', cityCode: '101020100' },
  { cityName: '广州', cityCode: '101280101' },
  { cityName: '深圳', cityCode: '101280601' }
]

@connect(null, {
  onSelectCity: fetchWeather
})
class CitySelector extends Component {
  static propTypes = {
    onSelectCity: PropTypes.func.isRequired
  }

  render () {
    return (
      <select onChange={ this.onSelectChange }>
        {
          CITY_OPTIONS.map(({ cityName, cityCode }) => (
            <option key={ cityName } value={ cityCode }>{ cityName }</option>
          ))
        }
      </select>
    )
  }

  onSelectChange = (e) => {
    const cityCode = e.target.value
    this.props.onSelectCity(cityCode)
  }

  componentDidMount () {
    const cityCode = CITY_OPTIONS[0].cityCode
    this.props.onSelectCity(cityCode)
  }
}

export default CitySelector
