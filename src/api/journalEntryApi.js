exports.saveJournalEntry = async ({content, date}) => {
    return fetch(process.env.REACT_APP_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: content, date: date })
    });
} 

exports.getAllJournalEntries = async () => {
    return fetch(process.env.REACT_APP_API_URL+"/entries")
} 