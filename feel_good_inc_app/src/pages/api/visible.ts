import { getVisibleEvents } from "../../../lib/redis";

export default async function handler(_req: any, res: any) {
  const events = await getVisibleEvents();
  res.status(200).json({ events });
}
