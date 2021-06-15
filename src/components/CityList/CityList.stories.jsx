import React from 'react'
import CityList from './CityList'

export default {
    title: "CityList",
    component: CityList
}

export const CityListExample = () => <CityList cities={[{city:"Toluca",country:"Mexico"},{city:"Toluca",country:"Mexico"},{city:"Toluca",country:"Mexico"},{city:"Toluca",country:"Mexico"}]}/>