import React, { useEffect, useState, useCallback } from 'react';
import '../../pages/Home.css';
import Entry from '../Entry/Entry'
import journalEntryApi from '../../api/journalEntryApi'
import EventEmitter from '../../utils/EventEmitter'

function Entries() {
  const [journalEntries, setJournalEntries] = useState([])
  const [shouldGetJournalEntries, setShouldGetJournalEntries] = useState(true)

  useEffect(() => {
    EventEmitter.subscribe('updateJournalEntries', (shouldGet) => { setShouldGetJournalEntries(shouldGet) })
  })

  useEffect(() => {
    console.log('start', journalEntries)
    async function getAllJournalEntries() {
      const response = await journalEntryApi.getAllJournalEntries()
      const journalEntries = await response.json()
      setJournalEntries(journalEntries)
    }

    if (shouldGetJournalEntries) {
      getAllJournalEntries()
      setShouldGetJournalEntries(false)  
    } else {
      return;
    }
  
  }, [shouldGetJournalEntries])

  const getJournalEntries = useCallback(() => {
    console.log('get journal entries callback', journalEntries)
    if (journalEntries.length > 0) {
      return journalEntries.map(journalEntry => <Entry content={journalEntry.content} date={journalEntry.date}/>)
    } else {
      return 'No Entries'
    }
  }, [journalEntries])

  useEffect(() => {
    console.log('journal entries state change', journalEntries)
    getJournalEntries()
  }, [getJournalEntries, journalEntries])
  
  return (
    <div>
      <h3 className="header-text">Entries</h3>
      { getJournalEntries() }
    </div>
  );
}

export default Entries;