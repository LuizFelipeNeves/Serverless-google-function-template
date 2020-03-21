'use strict'
import btoa from 'btoa'
import ProcessData from './functions/ProcessData'

const bin = { User: 'Developer' }
const encoded = btoa(JSON.stringify(bin))
const event = { data: encoded }
ProcessData(event.data)
