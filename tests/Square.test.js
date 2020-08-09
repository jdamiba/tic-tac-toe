import Square from '../src/components/Square';
import React from 'react';
import {render, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('Square renders', () => {
    const dd = render(<Square />);

    expect(dd.html()).toBeDefined();
});
