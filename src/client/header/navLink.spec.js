import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { expect } from 'chai'
import { describe, it } from 'mocha'

import NavbarLink from './navLink.component.jsx'

Enzyme.configure({ adapter: new Adapter() })

const wrapper = shallow(<NavbarLink uri='' altText='test' />)

// TODO: Remove this test when ready. Keeping to serve as a future reference for when I
// might need to write a component test
describe('<NavbarLink/>', function () {
  it('Should have an image', function () {
    expect(wrapper.find('img')).to.have.length(0)
  })
})
