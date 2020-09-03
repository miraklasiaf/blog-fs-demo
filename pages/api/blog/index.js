// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs'
import path from 'path'

export default async (req, res) => {
  const blogDirectory = path.join(process.cwd(), 'blog')

  const blogs = fs.readdirSync(blogDirectory)

  res.status(200).json({ blogs })
}
