import {render} from '@testing-library/react-native'
import React from 'react'
import { View } from 'react-native'
import WeatherCordinate from '../../components/WeatherCordinate'
import WeatherCurrent from '../../components/WeatherCurrent'
import HomeScreen from '../HomeScreen'



jest.mock('../../components/WeatherCordinate.tsx',()=> jest.fn().mockReturnValue(null))
jest.mock('../../components/WeatherCurrent.tsx',()=> jest.fn().mockReturnValue(null))




describe('HomeScreen',()=>{
    test('HomeScreen is rendered',()=>{
        const wrapper = render(<HomeScreen/>);
        wrapper.getByTestId('home-screen')
    })
})

describe('Title Section',()=>{
    beforeEach(()=>{
        jest.useFakeTimers('modern');
    jest.setSystemTime(946684800000); 
    });
    afterEach(()=>{
        jest.useRealTimers();
    })

    test("Should Contain current date", () => {
        const wrapper = render(<HomeScreen/>)
        wrapper.getByText('Nov 30, 2022')
    })

    test('should contain a section to get current weather',()=>{
        (WeatherCurrent as jest.Mock).mockReturnValue(<View testID='mock-weather-current'/>)
        const wrapper = render(<HomeScreen/>)
        wrapper.getByTestId('mock-weather-current')
    })

    test('should contain a section to get weather cordinates',()=>{
        (WeatherCordinate as jest.Mock).mockReturnValue(<View testID='mock-weather-cordinate'/>);
        const wrapper = render(<HomeScreen/>)
        wrapper.getByTestId('mock-weather-cordinate')
    })

    test('should contain a divider',()=>{
        const wrapper = render(<HomeScreen/>)
        wrapper.getByTestId('home-screen-divider')
    })


})


