import React from 'react'
import CityList from './CityList'
import {render, fireEvent} from '@testing-library/react'

const city = {
    city: "Toluca",
    country: "Mexico"
}

test("City List render", async () => {
    const {findAllByRole} = render(<CityList cities={[city]} />)
    const cityListComponent = await findAllByRole("listitem");
    expect(cityListComponent).toHaveLength(1);
});

test("City list clicked", async () => {
    const findClickOnItem = jest.fn();

    const {findAllByRole} = render(<CityList cities={[city]} onClickCity={findClickOnItem}/>)
    const items = await findAllByRole("listitem")

    fireEvent.click(items[0])

    expect(findClickOnItem).toHaveBeenCalledTimes(1)


});