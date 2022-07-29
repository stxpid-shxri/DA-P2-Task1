// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../lib/mongodb'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { db } = await connectToDatabase();

  // const blogs = await db.collection("users").find().toArray();
  
  const users = db.collection("users");
  const result = await users.insertOne(req.body);
  let user = await db.collection("users").find().toArray();
  res.status(200).json({ user });
}
