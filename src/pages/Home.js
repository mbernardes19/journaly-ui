import React, { useEffect, useState } from 'react';
import './Home.css';
import TextEditor from '../components/Editor/Editor';
import Notify from '../components/Notify/Notify';
import EventEmitter from '../utils/EventEmitter'
import Entries from '../components/Entries/Entries'

function Home() {
  const [data, setData] = useState({})
  
  useEffect(() => {
    EventEmitter.subscribe('notification', (notification) => { setData(notification) })
  })

  return (
    <div>
      <p className="header-text">Create an entry for today</p>
      <TextEditor/>
      <Notify data={data} position="right"/>
      <Entries/>
    </div>
  );
}

export default Home;
