import ProcessData from '../src/functions/ProcessData'
import btoa from 'btoa'

describe('#ProcessData no data', () => {
  test('should return Insert a User data, when data is null', () => {
    const data = ProcessData(null)
    expect(data).toBe('Insert a User data')
  })
  test('should return Insert a User data, when decoded attributes.id is null', () => {
    const encoded = btoa('Developer')
    const attributes = {}
    const data = ProcessData(encoded, attributes)
    expect(data).toBe('Insert a User data')
  })
})

describe('#ProcessData with data', () => {
  test('should return Processed: Developer, when decoded data is Developer and attributes.id is 01', () => {
    const encoded = btoa('Developer')
    const attributes = { id: '01' }
    const data = ProcessData(encoded, attributes)
    expect(data).toBe('Processed: Developer, ID: 01')
  })
})
