import { deleteEvent } from "../../../lib/redis";

export default async function handler(req: any, res: any) {
  await deleteEvent(req.body);
  res.status(200).send("ok");
}
