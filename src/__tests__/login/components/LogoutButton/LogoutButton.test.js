import React from 'react'
import {shallow} from 'enzyme'
import 'i18n'
import {LogoutButton} from 'login/components/LogoutButton/LogoutButton'


it('renders without crashing', () => {
  const logoutFunc = jest.fn();

  const button = shallow(
    <LogoutButton
      t={key => key}
      logout={logoutFunc}
    />);

  expect(button.text()).toEqual('<Button />')
  expect(button.html()).toContain('blue')
  expect(button.html()).toContain('LogoutButton')
  expect(button.html()).toContain('logoutButtonText')
})


it('calls the logout function on click', () => {
  const logoutFunc = jest.fn();

  const button = shallow(
    <LogoutButton
      t={key => key}
      logout={logoutFunc}
    />);

  const div = button.find('.LogoutButton')
  div.simulate('click')
  expect(logoutFunc).toHaveBeenCalled();
})
