import React, { useState, useEffect } from 'react';
import './Home.css';
import parseFormData from '../utils/parseFormData'
import userApi from '../api/userApi';
import { SERVER_ERROR_MESSAGE } from '../utils/Messages'
import './SignUp.css'
import Notify from '../components/Notify/Notify'
import EventEmitter from '../utils/EventEmitter'
import NotifyService from '../services/NotifyService'

function SignUp() {
  const [formData, setFormData] = useState({})
  const [data, setData] = useState({})
  
  useEffect(() => {
    EventEmitter.subscribe('notification', (notification) => { setData(notification) })
  })

  const saveUser = async (event) => {
    event.preventDefault()
    setFormData(parseFormData(event.target))
    try {
      await userApi.saveUser(formData)
      NotifyService.notifySuccess()
    } catch(err) {
      console.error(SERVER_ERROR_MESSAGE)
      NotifyService.notifyError()
    }
  }

  return (
    <>
      <form className="form" method="POST" onSubmit={saveUser}>
        <label className="form-label">Name</label>
        <input className="form-input" name="name" type="text"/>
        <label className="form-label">Email</label>
        <input className="form-input" name="email" type="email"/>
        <label className="form-label">Password</label>
        <input className="form-input" name="password" type="password"/>
        <input className="form-submit-button" type="submit"></input>
      </form>
      <Notify data={data} position="center"/>
    </>
  );
}

export default SignUp;
