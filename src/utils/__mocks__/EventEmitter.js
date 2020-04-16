let events = {}
export default {
    subscribe(event, callback) {
        return 'hello'
    },
    dispatch: jest.fn(() => {
        return 'dispatched'
    })
}

// const EventEmitter = {
//     events: {},
//     dispatch: function (event, data) {
//         if (!this.events[event]) return 
//         this.events[event].forEach(callback => callback(data))
//     },

// }

// module.exports = EventEmitter