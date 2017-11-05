import React from 'react';
import { Text } from 'react-native';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { Button } from './index';

describe('<Button />', () => {

    it('should have a label `button label`', () => {
        const wrapper = shallow(<Button>button label</Button>);
        expect(wrapper.find(Text).children().text()).toEqual('button label');
    });
    
    it('should call the `onPress` function when clicked', () => {
        const eventSpy = sinon.spy();
        const wrapper = shallow(<Button onPress={eventSpy} />);
        wrapper.simulate('press');
        expect(eventSpy.called).toBeTruthy();
    });
});