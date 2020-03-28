import atob from 'atob'

export default (message, attributes) => {
  if (message && attributes.id) {
    const text = atob(message)
    if (text) return `Processed: ${text}, ID: ${attributes.id}`
  }
  return 'Insert a User data'
}
