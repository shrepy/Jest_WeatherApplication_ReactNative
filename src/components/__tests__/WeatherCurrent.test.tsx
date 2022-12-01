import React from 'react';
import WeatherCurrent from '../WeatherCurrent';
import {render} from '@testing-library/react-native'

describe('weather current',() => {
    test('should rendered corretly',() => {
        const wrapper = render(<WeatherCurrent/>)
        wrapper.getByTestId('weather-current')
    })
})