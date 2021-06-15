import React from 'react'
import PropTypes from 'prop-types'
import CityInfo from '../CityInfo'
import Weather from '../Weather'
import Grid from '@material-ui/core/Grid'

const renderCityAndCountry = eventOnClickCity => cityAndCountry => {
    const {city, country} = cityAndCountry;

    return (<li key={city} onClick={eventOnClickCity}>
            <Grid container
                justify="center"
                alignItems="center">
                    <Grid item sm={8}>
                        <CityInfo city={city} country={country} />
                    </Grid>
                    <Grid item sm={4}>
                        <Weather temperature={10} state="rainy"/>
                    </Grid>

            </Grid>
            
            </li>)
}

const CityList = ({cities,onClickCity}) => {
    return (
        <ul>
            {cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))}
        </ul>
    )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired
}

export default CityList
