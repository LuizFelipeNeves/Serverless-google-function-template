import { event } from '../src'
import btoa from 'btoa'

describe('#event web request no data', () => {
  test('should return Insert a User data, when event.data.user is null', done => {
    const bin = {}
    const encoded = btoa(JSON.stringify(bin))
    const mockEvent = { data: encoded }

    function callback(data) {
      expect(data).toBe('Insert a User data')
      done()
    }

    event(mockEvent, callback)
  })
})

describe('#event pubsub request with data', () => {
  test('should return Processed: Developer, when event.data.user is Developer', done => {
    const bin = { User: 'Developer' }
    const encoded = btoa(JSON.stringify(bin))
    const mockEvent = { data: encoded }

    const callback = data => {
      expect(data).toBe('Processed: Developer')
      done()
    }

    event(mockEvent, callback)
  })
})
