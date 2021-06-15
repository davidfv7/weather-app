import React from 'react'
import {render} from '@testing-library/react'
import CityInfo from './CityInfo'
test("CityInfo render",async ()=>{
const {findAllByRole} = render(<CityInfo city="Marica" country="momomo"/>)
const cityComponent = await findAllByRole("heading");
expect(cityComponent[0]).toHaveTextContent("Marica");
expect(cityComponent[1]).toHaveTextContent("momomo");
});