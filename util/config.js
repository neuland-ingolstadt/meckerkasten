export const recipients = process.env.RECIPIENTS.split(',')
  .map(id => ({
    id,
    name: process.env[`NAME_${id}`],
    value: process.env[`EMAIL_${id}`]
  }))
