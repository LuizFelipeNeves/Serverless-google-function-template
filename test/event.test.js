import { event } from '../src'
import btoa from 'btoa'

describe('#event web request no data', () => {
  test('should return Insert a User data, when event.data is null', done => {
    const mockEvent = { data: null }

    function callback(data) {
      expect(data).toBe('Insert a User data')
      done()
    }

    event(mockEvent, callback)
  })
})

describe('#event pubsub request with data', () => {
  test('should return Processed: Developer, when event.data is Developer', done => {
    const encoded = btoa('Developer')
    const mockEvent = { data: encoded, attributes: { id: '01' } }

    const callback = data => {
      expect(data).toBe('Processed: Developer, ID: 01')
      done()
    }

    event(mockEvent, callback)
  })
})
