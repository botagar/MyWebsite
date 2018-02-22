import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { expect } from 'chai'
import { describe, it } from 'mocha'

import NavbarLink from './navbarLink.component.jsx'

Enzyme.configure({ adapter: new Adapter() })

const wrapper = shallow(<NavbarLink uri='' altText='test' />)

describe('<NavbarLink/>', function () {
  it('Should have an image', function () {
    expect(wrapper.find('img')).to.have.length(1)
  })

  it('Should have alt text for the image', function () {
    expect(wrapper.find('img').props().alt).to.not.be.undefined // eslint-disable-line
  })

  it('Should have a description text', function () {
    expect(wrapper.find('h2')).to.have.length(1)
  })
})
