import { getEvent } from "../../../lib/redis";

export default async function handler(req: any, res: any) {
  const event = await getEvent(req.body);
  res.status(200).json({ event });
}
