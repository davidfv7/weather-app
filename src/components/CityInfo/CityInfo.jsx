import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';

const CityInfo = ({city, country}) => {
    return (
        <div>
            <Typography variant="h1">{city}</Typography>
            <Typography variant="h4">{country}</Typography>
        </div>
    )
}

CityInfo.propTypes = {

}

export default CityInfo
