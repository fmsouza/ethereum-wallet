import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import { TextBullet } from './index';

describe('<TextBullet />', () => {

    it('should have a label `label`', () => {
        const wrapper = shallow(<TextBullet>label</TextBullet>);
        expect(wrapper.find(Text).children().text()).toEqual('label');
    });
});