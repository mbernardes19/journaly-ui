// let conteudo = "batata"
// const journalEntryApi = {}
// journalEntryApi.__setConteudo = c => conteudo = c
// journalEntryApi.saveJournalEntry = jest.fn(() => {
//     console.log('passou no mock')
//     return true;
// })
// export default journalEntryApi


export default {
    saveJournalEntry: jest.fn(() => {
        console.log( 'no mock')
        return true
    })
}

// exports.saveJournalEntry = (journalEntry) => {
//     return true
// } 