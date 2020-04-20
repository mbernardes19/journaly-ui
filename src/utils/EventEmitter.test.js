import EventEmitter from './EventEmitter';

beforeEach(() => {
    EventEmitter.events = {}
})

test('should store one event in events objects', () => {
    function qualquer() {}

    EventEmitter.subscribe('teste', qualquer)
    expect(Object.keys(EventEmitter.events).includes('teste')).toBe(true)
    expect(EventEmitter.events['teste'][0] === qualquer).toBe(true)
});

test('should have called callback for event', () => {
    const callbacks = {
        qualquer: () => "qualquer"
    }
    const spy = jest.spyOn(callbacks, 'qualquer')

    EventEmitter.subscribe('teste', callbacks.qualquer)
    EventEmitter.dispatch('teste', 'dadoTeste')

    expect(spy).toHaveBeenCalledWith('dadoTeste')
});
