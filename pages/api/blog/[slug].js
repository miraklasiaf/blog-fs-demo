// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs'
import path from 'path'

export default async (req, res) => {
  const blogPath = path.join(process.cwd(), `./blog/${req.query.slug}.json`)

  const blog = JSON.parse(fs.readFileSync(blogPath, 'utf-8'))

  res.status(200).json({ blog })
}
