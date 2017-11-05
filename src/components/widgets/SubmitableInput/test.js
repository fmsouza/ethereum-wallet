import React from 'react';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
import { SubmitableInput } from './index';

describe('<SubmitableInput />', () => {

    it('should not call the `onPressSave` function when no text was typed', () => {
        const eventSpy = sinon.spy();
        const wrapper = shallow(<SubmitableInput onPressSave={eventSpy} />);
        wrapper.childAt(1).simulate('press');
        expect(eventSpy.called).toBeFalsy();
    });
    
    it('should call the `onPressSave` function when text was typed', () => {
        const eventSpy = sinon.spy();
        const wrapper = shallow(<SubmitableInput onPressSave={eventSpy} />);

        wrapper.childAt(0).simulate('changeText', 'abc');
        wrapper.childAt(1).simulate('press');
        expect(eventSpy.called).toBeTruthy();

    });
});