import React from 'react';
import { shallow } from 'enzyme';
import { InputWithIcon } from './index';

describe.skip('<InputWithIcon />', () => {
    
    it('should call the `onPressIcon` function when text was typed', () => {
        const onPressIcon = jest.fn();
        const wrapper = shallow(<InputWithIcon onPressIcon={onPressIcon} />);

        wrapper.childAt(0).simulate('changeText', 'abc');
        wrapper.childAt(1).simulate('press');
        expect(onPressIcon).toBeCalled();

    });
});