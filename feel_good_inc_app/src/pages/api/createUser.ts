import { createUser } from "../../../lib/redis";

export default async function handler(req: any, res: any) {
  const id = await createUser(req.body);
  res.status(200).json({ id });
}
