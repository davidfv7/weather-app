import React from 'react'
import Weather from './Weather'

export default {
    title: "Weather",
    comoponent: Weather
}

export const WeatherExample = () => <Weather temperature={10} state={"sunny"}/>