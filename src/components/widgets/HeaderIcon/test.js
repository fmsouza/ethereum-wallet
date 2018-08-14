import React from 'react';
import { shallow } from 'enzyme';
import { HeaderIcon } from './index';

describe('<HeaderIcon />', () => {
    
    it('should call the `onPress` function when clicked', () => {
        const onPress = jest.fn();
        const wrapper = shallow(<HeaderIcon onPress={onPress} />);
        wrapper.simulate('press');
        expect(onPress).toBeCalled();
    });
});