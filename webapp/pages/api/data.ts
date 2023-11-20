import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async  function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try {
        const response = await fetch('http://localhost:4000/data')
        const data = await response.json()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}