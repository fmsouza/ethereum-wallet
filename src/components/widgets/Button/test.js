import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import { Button } from './index';

describe('<Button />', () => {

    it('should have a label `button label`', () => {
        const wrapper = shallow(<Button>button label</Button>);
        expect(wrapper.find(Text).children().text()).toEqual('button label');
    });
    
    it('should call the `onPress` function when clicked', () => {
        const onPress = jest.fn();
        const wrapper = shallow(<Button onPress={onPress} />);
        wrapper.simulate('press');
        expect(onPress).toBeCalled();
    });
});