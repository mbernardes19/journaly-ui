import React, { useEffect, useState } from 'react';
import './SignIn.css';
import EventEmitter from '../utils/EventEmitter'
import Notify from '../components/Notify/Notify'
import parseFormData from '../utils/parseFormData'
import userApi from '../api/userApi'
import NotifyService from '../services/NotifyService'
import { SERVER_ERROR_MESSAGE } from '../utils/Messages'

function SignIn() {
  const [formData, setFormData] = useState({})
  const [data, setData] = useState({})
  
  useEffect(() => {
    EventEmitter.subscribe('notification', (notification) => { setData(notification) })
  })

  const signInUser = async (event) => {
    event.preventDefault()
    setFormData(parseFormData(event.target))
    try {
      await userApi.signInUser(formData)
      NotifyService.notifySuccess()
    } catch(err) {
      console.error(SERVER_ERROR_MESSAGE)
      NotifyService.notifyError()
    }
  }

  return (
    <>
      <form className="form" method="POST" onSubmit={signInUser}>
        <label className="form-label">Username</label>
        <input className="form-input" name="username" type="text"/>
        <label className="form-label">Password</label>
        <input className="form-input" name="password" type="password"/>
        <input className="form-submit-button" type="submit"></input>
      </form>
      <Notify data={data} position="center"/>
    </>
  );
}

export default SignIn;
