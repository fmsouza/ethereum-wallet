import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { HeaderIcon } from './index';

describe('<HeaderIcon />', () => {
    
    it('should call the `onPress` function when clicked', () => {
        const eventSpy = sinon.spy();
        const wrapper = shallow(<HeaderIcon onPress={eventSpy} />);
        wrapper.simulate('press');
        expect(eventSpy.called).toBeTruthy();
    });
});