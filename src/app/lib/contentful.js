// import * as contentful from 'contentful'
// const client = contentful.createClient({
//   // This is the space ID. A space is like a project folder in Contentful terms
//   space: 'Crystal Brothers',
//   // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
//   accessToken: 'ttkb7yqj5r3y',
// })
// // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token
// console.log("client",client)
// client
//   .getEntry('5PeGS2SoZGSa4GuiQsigQu')
//   .then((entry) => console.log(entry))
//   .catch((err) => console.log(err))

import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,   // or NEXT_PUBLIC_...
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

console.log("client",client)

export default client;