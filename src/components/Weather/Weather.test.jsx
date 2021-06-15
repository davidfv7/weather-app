import React from 'react'
import Weather from './Weather'

import {render} from '@testing-library/react'

test("weather render", async () => {
    const {findByRole} = render(<Weather temperature={10}/>)

    const temp = await findByRole("heading");

    expect(temp).toHaveTextContent("10");
});