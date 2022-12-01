import React from 'react'
import {render} from '@testing-library/react-native'
import WeatherCordinate from '../WeatherCordinate'


describe('Weather cordinate',()=>{
    test('weather-cordinate-is rendered',()=>{
        const wrapper = render(<WeatherCordinate/>)
        wrapper.getByTestId('weather-cordinate')
    })
})