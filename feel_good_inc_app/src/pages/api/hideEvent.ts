import { hideEvent } from "../../../lib/redis";

export default async function handler(req: any, res: any) {
  await hideEvent(req.body);
  res.status(200).send("ok");
}
