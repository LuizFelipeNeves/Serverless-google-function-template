'use strict'
import btoa from 'btoa'
import ProcessData from './functions/ProcessData'

const encoded = btoa('Developer')
const event = { data: encoded, attributes: { id: '01' } }
ProcessData(event.data, event.attributes)
