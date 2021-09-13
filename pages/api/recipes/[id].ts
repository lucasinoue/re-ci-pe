import { NextApiRequest, NextApiResponse } from 'next';
import { recipes } from 'data/recipes'

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const { id } = req.query;

  const recipe = recipes.find(rec => rec.id.toString() === id);

  if (recipe) {
    return res.json(recipe);
  }

  return res.status(404).json({ error: true, message: 'Recipe not found' })

}