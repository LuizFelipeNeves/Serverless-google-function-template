import ProcessData from '../src/functions/ProcessData'
import btoa from 'btoa'

describe('#ProcessData no data', () => {
  test('should return Insert a User data, when data is null', () => {
    const data = ProcessData(null)
    expect(data).toBe('Insert a User data')
  })
  test('should return Insert a User data, when decoded data.user is null', () => {
    const bin = {}
    const encoded = btoa(JSON.stringify(bin))
    const data = ProcessData(encoded)
    expect(data).toBe('Insert a User data')
  })
})

describe('#ProcessData with data', () => {
  test('should return Processed: Developer, when decoded data.user is Developer', () => {
    const bin = { User: 'Developer' }
    const encoded = btoa(JSON.stringify(bin))
    const data = ProcessData(encoded)
    expect(data).toBe('Processed: Developer')
  })
})
