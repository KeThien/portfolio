const contentful = require('contentful')

const client = contentful.createClient({
  space: process.env.CTF_SPACE,
  accessToken: process.env.CTF_ACCESSTOKEN
})

module.exports = client
