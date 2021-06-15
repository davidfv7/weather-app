import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';
import {WiCloud,WiDayCloudy,WiDayFog,WiDaySunny,WiDayRain} from 'react-icons/wi';
import { IconContext } from 'react-icons';

const stateByName = {
    cloud: WiCloud,
    sunny: WiDaySunny,
    fog: WiDayFog,
    rain: WiDayRain,
    cloudy: WiDayCloudy
}

const renderState = state => {
    switch(state) {
        case "cloud":
            return <stateByName.cloud />
        case "cloudy":
            return <stateByName.cloudy/>
        case "fog":
            return <stateByName.fog/>
        case "sunny":
            return <stateByName.sunny/>
        case "rain":
            return <stateByName.rain/>
        default:
            return <stateByName.cloud/>
    }
}

const Weather = ({temperature, state}) => {
    return (
        <div>
            <IconContext.Provider value={{size:'5em'}}>
                {renderState(state)}
            </IconContext.Provider>
            <Typography variant="h5">{temperature}</Typography>
        </div>
    )
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired
}

export default Weather
