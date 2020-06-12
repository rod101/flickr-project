import React from 'react';
import { render, cleanup, waitForElement} from '@testing-library/react';
import axiosTest from 'axios';
import 'jest-dom/extend-expect';
import Locations from './Locations';

// Todo - some testing

afterEach(cleanup);

it("fetch and displays location data", async () => {
    const url = "/getdata";
    const { getByDataId } = render(<Locations url={url} />);

    expect(getByDataId("loading")).toHaveTextContent("Loading Data");
});