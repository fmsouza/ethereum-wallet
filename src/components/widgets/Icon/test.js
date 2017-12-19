import React from 'react';
import { shallow } from 'enzyme';
import { Icon } from './index';
import { measures } from '@common/styles';

describe('<Icon />', () => {

    it('should be null if no name given', () => {
        const wrapper = shallow(<Icon />);
        expect(wrapper.getElement()).toBeNull();
    });
    
    it('should receive props properly', () => {
        const wrapper = shallow(<Icon size="large" name="add" color="red" />);
        const props = wrapper.props();
        expect(props.color).toEqual('red');
        expect(props.name).toEqual('ios-add');
        expect(props.size).toEqual(measures.iconSizeLarge);
    });
    
    it('should have default values when props not given', () => {
        const wrapper = shallow(<Icon name="add" />);
        const props = wrapper.props();
        expect(props.color).toEqual('#000000');
        expect(props.size).toEqual(measures.iconSizeMedium);
    });
});