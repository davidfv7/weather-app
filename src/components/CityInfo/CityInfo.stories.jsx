import React from 'react';
import 'typeface-roboto';
import CityInfo from './CityInfo';

export default {
    title: 'CityInfo',
    component: CityInfo
}

const Template = (args) => <CityInfo {...args}/>

export const BigCity = Template.bind({});

BigCity.args = {
    city: "Mahahahahaha",
    country: "lklasklakslaks"
}