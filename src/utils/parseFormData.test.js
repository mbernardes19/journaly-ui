/**
 * @jest-environment jsdom
 */

import parseFormData from './parseFormData';

test('should return an object with form data', () => {
    const form = document.createElement('form')
    form.setAttribute('method', 'POST')

    const username = document.createElement('input')
    username.setAttribute('name', 'username')
    username.value = 'joseph'

    const password = document.createElement('input')
    password.setAttribute('type','password')
    password.setAttribute('name', 'password')
    password.value = 'joseph1234'

    form.appendChild(username)
    form.appendChild(password)

    expect(parseFormData(form)['username']).toBe('joseph')
    expect(parseFormData(form)['password']).toBe('joseph1234')
});