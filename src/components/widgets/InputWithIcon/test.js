import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { InputWithIcon } from './index';

describe('<InputWithIcon />', () => {

    // it('should not call the `onPressIcon` function when no text was typed', () => {
    //     const eventSpy = sinon.spy();
    //     const wrapper = shallow(<InputWithIcon onPressIcon={eventSpy} />);
    //     wrapper.childAt(1).simulate('press');
    //     expect(eventSpy.called).toBeFalsy();
    // });
    
    it('should call the `onPressIcon` function when text was typed', () => {
        const eventSpy = sinon.spy();
        const wrapper = shallow(<InputWithIcon onPressIcon={eventSpy} />);

        wrapper.childAt(0).simulate('changeText', 'abc');
        wrapper.childAt(1).simulate('press');
        expect(eventSpy.called).toBeTruthy();

    });
});