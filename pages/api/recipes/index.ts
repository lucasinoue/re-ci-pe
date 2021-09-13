import { NextApiRequest, NextApiResponse } from 'next';
import { recipes } from 'data/recipes'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.json({ recipes })
}