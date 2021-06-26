
import React from 'react';
import {TestComponent} from './Test';
import {shallow} from 'enzyme';
describe("TestComponent", ()=> {
    let props: any;
    let getShallowComponent:Function;

    beforeEach(()=> {
        props = {
            text: 'Hello Test'
        }
        getShallowComponent = ()=> shallow(<TestComponent {...props} ></TestComponent>);
    })

    it('should render', () => {
        expect(getShallowComponent()).toMatchSnapshot();
    })
})
