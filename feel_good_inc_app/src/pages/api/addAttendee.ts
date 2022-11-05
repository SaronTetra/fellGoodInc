import { addAttendee } from "../../../lib/redis";

export default async function handler(req: any, res: any) {
  const currentAttendees = await addAttendee(req.body);
  res.status(200).send({ currentAttendees });
}
