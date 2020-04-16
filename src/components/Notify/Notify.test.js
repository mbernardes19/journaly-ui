import React from 'react';
import { render } from '@testing-library/react';
import Notify from './Notify';

test('should show hello message', () => {
    const data = {message: "hello", type: "success"}
    const {getByText} = render(<Notify data={data}/>);
    expect(getByText(/hello/i)).toBeInTheDocument();
});
