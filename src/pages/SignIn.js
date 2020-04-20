import React, { useEffect, useState } from 'react';
import './Home.css';
import EventEmitter from '../utils/EventEmitter'

function SignIn() {
  const [data, setData] = useState({})
  
  useEffect(() => {
    EventEmitter.subscribe('notification', (notification) => { setData(notification) })
  })

  return (
    <>
      <form></form>
    </>
  );
}

export default SignIn;
