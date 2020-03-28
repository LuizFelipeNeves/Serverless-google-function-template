'use strict'

import ProcessData from './functions/ProcessData'

export const http = (request, response) => {
  return response.status(200).send('Hello World!')
}

export const event = (event, callback) => {
  return callback(ProcessData(event.data, event.attributes))
}
