import atob from 'atob'

export default message => {
  if (message) {
    const { User } = JSON.parse(atob(message))
    if (User) return `Processed: ${User}`
  }
  return 'Insert a User data'
}
